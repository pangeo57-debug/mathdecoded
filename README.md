# MathDecoded

Landing page για ιδιωτικά μαθήματα Μαθηματικών — προετοιμασία **SAT** και
Πανελλήνιες. Ίδιο πνεύμα με τα αδερφά projects
([RoutePal](https://github.com/pangeo57-debug/routiq),
[DropOff](https://github.com/pangeo57-debug/Dropoff)): single-file HTML/CSS/JS,
χωρίς build step, PWA-installable.

Το brand βασίζεται στο υπάρχον Instagram
[@math__decoded](https://www.instagram.com/math__decoded) — το πραγματικό
λογότυπο (μισός εγκέφαλος με τύπους, μισός με γεωμετρικό μοτίβο) είναι στο
`assets/`, και τα PWA icons παράχθηκαν από αυτό.

## Αρχεία

- `index.html` — όλη η landing page (HTML/CSS/JS), single file.
- `assets/logo-full.png` — το πλήρες λογότυπο (εγκέφαλος + wordmark «MATHDECODED»).
- `assets/logo-mark.png` — μόνο το σύμβολο (τετράγωνο crop), πηγή για τα app icons.
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon.png` — παραγμένα από το `logo-mark.png`.
- `manifest.json`, `sw.js` — PWA (installable, βασικό offline caching).

## Πριν βγει live

Η σελίδα έχει μερικά placeholder σημεία, σημειωμένα με `TODO` μέσα στο
`index.html`:

1. **Τιμές πακέτων** — τώρα είναι κενές/ενδεικτικές.
2. **Μαρτυρίες μαθητών** — προαιρετικό, πρόσθεσέ τες όταν υπάρξουν.
3. **Τηλέφωνο επικοινωνίας** — προαιρετικό, αν θες να προστεθεί δίπλα στο email (`pangeo57@yahoo.gr`).

Η ενότητα «Σχετικά» δεν έχει βιογραφικό σκόπιμα — παραπέμπει κατευθείαν στο
Instagram `@math__decoded` ως «κάρτα επίσκεψης».

## Ανάπτυξη

Δεν χρειάζεται τίποτα ιδιαίτερο — άνοιξε το `index.html` σε browser, ή τρέξε
έναν local server (π.χ. `python3 -m http.server`) για σωστή λειτουργία του
Service Worker/manifest.

## Deployment

Το repo είναι αυτή τη στιγμή **private**. GitHub Pages σε private repo
χρειάζεται GitHub Pro/Team/Enterprise· αλλιώς κάνε το repo public πριν
ενεργοποιήσεις Pages (Settings → Pages → Deploy from branch `main`, root),
οπότε η σελίδα σερβίρεται στο
`https://pangeo57-debug.github.io/mathdecoded/`.

## Αλλαγή του λογότυπου

Το `assets/logo-full.png` / `assets/logo-mark.png` είναι οι πηγές. Αν
αλλάξεις το λογότυπο, τα PNG icons (`icon-192.png`, `icon-512.png`,
`apple-touch-icon.png`, `favicon.png`) πρέπει να ξαναπαραχθούν από το
`logo-mark.png`, στα ίδια μεγέθη.
