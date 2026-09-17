/**
 * Rate-limited proxy in front of the Formspree contact form.
 *
 * The contact form on index.html posts here instead of straight to
 * Formspree. This Worker checks (and increments) a per-IP counter in
 * Workers KV; under the limit, it forwards the submission to Formspree
 * and relays the response back; over the limit, it returns 429 without
 * ever touching Formspree — so a spam burst can't burn through the
 * Formspree monthly quota.
 *
 * This is a real server-side limiter (unlike the in-page math
 * challenge): it runs on Cloudflare's infrastructure, not in the
 * visitor's browser, so it can't be skipped by posting directly to
 * this URL instead of loading the page.
 *
 * Deploy instructions: see README.md in this folder.
 */

const FORMSPREE_URL = 'https://formspree.io/f/xyeyvzga';
const MAX_REQUESTS = 2;        // max submissions allowed...
const WINDOW_SECONDS = 3600;   // ...per this many seconds, per IP
// Ένας πραγματικός επισκέπτης σπάνια στέλνει τη φόρμα πάνω από 1-2 φορές
// μέσα σε μια ώρα (π.χ. αν διόρθωσε κάτι). 2/ώρα = max 48/μέρα ανά IP,
// αρκετά χαμηλό ώστε ένας spammer να μην καταναλώσει τη μηνιαία ποσόστωση
// του Formspree (συνήθως ~50/μήνα στο δωρεάν πλάνο) μέσα σε λίγες ώρες.

// TODO: βάλε εδώ το πραγματικό origin του site σου (χωρίς trailing slash),
// π.χ. 'https://pangeo57-debug.github.io' ή 'https://mathdecoded.gr' αν
// πάρεις custom domain. Χωρίς αυτό, το CORS μπλοκάρει τη φόρμα.
const ALLOWED_ORIGIN = 'https://pangeo57-debug.github.io';

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders() });
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const key = `rl:${ip}`;

    let count = 0;
    try {
      const raw = await env.RATE_LIMIT_KV.get(key);
      count = raw ? parseInt(raw, 10) : 0;
    } catch (e) {
      // If KV is misconfigured, fail open rather than blocking every submission —
      // but this means the limiter isn't actually active, so fix the binding.
    }

    if (count >= MAX_REQUESTS) {
      return jsonResponse(
        { ok: false, error: 'Πολλές προσπάθειες από αυτή τη σύνδεση — δοκίμασε ξανά σε λίγο.' },
        429
      );
    }

    try {
      await env.RATE_LIMIT_KV.put(key, String(count + 1), { expirationTtl: WINDOW_SECONDS });
    } catch (e) {
      // Same fail-open note as above.
    }

    let formData;
    try {
      formData = await request.formData();
    } catch (e) {
      return jsonResponse({ ok: false, error: 'Άκυρο αίτημα.' }, 400);
    }

    const formspreeRes = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    const data = await formspreeRes.json().catch(() => ({}));
    return jsonResponse(data, formspreeRes.status);
  },
};

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function jsonResponse(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders() },
  });
}
