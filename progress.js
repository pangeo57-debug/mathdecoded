// Πρόοδος μαθητή: αποθηκεύεται μόνο σε αυτή τη συσκευή (localStorage), χωρίς λογαριασμό.
// Μορφή: { ch: { <chapterId>: { <itemIndex>: 'r' | 'w' | 's' } }, days: ['2026-10-21', ...], last: { ch, t } }
// r = σωστή, w = λάθος, s = είδε τη λύση (ανοιχτή άσκηση)
window.MDProgress = (() => {
  const KEY = 'md-progress-v1';
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  const save = (d) => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} };
  const day = (dt) => {
    const d = dt || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  };

  function record(ch, i, res) {
    const d = load();
    d.ch = d.ch || {};
    d.ch[ch] = d.ch[ch] || {};
    d.ch[ch][i] = res;
    d.days = d.days || [];
    const t = day();
    if (!d.days.includes(t)) d.days = d.days.concat(t).slice(-60);
    d.last = { ch, t: Date.now() };
    save(d);
  }

  function chapter(ch) { return (load().ch || {})[ch] || {}; }

  function summary(ch) {
    const v = Object.values(chapter(ch));
    return { done: v.length, right: v.filter(x => x === 'r').length, wrong: v.filter(x => x === 'w').length };
  }

  // συνεχόμενες μέρες εξάσκησης, μετρώντας μέχρι σήμερα ή χθες
  function streak() {
    const days = new Set(load().days || []);
    const d = new Date();
    if (!days.has(day(d))) d.setDate(d.getDate() - 1);
    let n = 0;
    while (days.has(day(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  function last() { return load().last || null; }

  function reset(ch) {
    const d = load();
    if (d.ch) delete d.ch[ch];
    save(d);
  }

  return { record, chapter, summary, streak, last, reset };
})();
