window.QUIZ = (() => {
  const R = String.raw;
  const mc = (tag, q, ok, bad, explain, fig) => ({ tag, q, options: [ok, ...bad], correct: 0, explain, ...(fig ? { fig } : {}) });
  const TA = 'Τριγωνομετρικοί αριθμοί', SX = 'Βασικές σχέσεις', AM = 'Αμβλείες γωνίες', NH = 'Νόμος ημιτόνων', NS = 'Νόμος συνημιτόνων';
  const A = s => "Ομάδα Α' · " + s, B = s => "Ομάδα Β' · " + s;

  return {
    id: 'c-geo-3',
    grade: "Γ' Γυμνασίου",
    title: 'Γεωμετρία · Κεφάλαιο 3 — Τριγωνομετρία',
    items: [
      // ---------- Τριγωνομετρικοί αριθμοί ----------
      mc(A(TA), R`Σε ορθογώνιο τρίγωνο με κάθετες $3$ και $4$, πόσο είναι το ημίτονο της γωνίας απέναντι από την πλευρά $3$;`, R`$\dfrac35$`, [R`$\dfrac34$`, R`$\dfrac45$`, R`$\dfrac43$`], R`Υποτείνουσα $\sqrt{9+16}=5$.<br>$\eta\mu\omega=\dfrac{\text{απέναντι}}{\text{υποτείνουσα}}=\dfrac35$`, { type: 'right', labels: { a: '4', b: '3', c: '5' }, angle: 'ω' }),
      mc(A(TA), R`Στο ίδιο τρίγωνο (κάθετες $3$, $4$), πόση είναι η εφαπτομένη της γωνίας $\omega$ απέναντι από την πλευρά $3$;`, R`$\dfrac34$`, [R`$\dfrac43$`, R`$\dfrac35$`, R`$\dfrac45$`], R`$\varepsilon\varphi\omega=\dfrac{\text{απέναντι}}{\text{προσκείμενη}}=\dfrac34$`, { type: 'right', labels: { a: '4', b: '3', c: '5' }, angle: 'ω' }),
      mc(A(TA), R`Πόσο κάνει $\eta\mu30^\circ$;`, R`$\dfrac12$`, [R`$\dfrac{\sqrt3}{2}$`, R`$\dfrac{\sqrt2}{2}$`, R`$1$`], R`Από το μισό ισόπλευρο: $\eta\mu30^\circ=\dfrac12$.`),
      mc(A(TA), R`Πόσο κάνει $\sigma\upsilon\nu60^\circ$;`, R`$\dfrac12$`, [R`$\dfrac{\sqrt3}{2}$`, R`$\sqrt3$`, R`$2$`], R`$\sigma\upsilon\nu60^\circ=\eta\mu30^\circ=\dfrac12$`),
      mc(A(TA), R`Πόσο κάνει $\varepsilon\varphi45^\circ$;`, R`$1$`, [R`$\dfrac{\sqrt2}{2}$`, R`$0$`, R`$\sqrt3$`], R`Στο ορθογώνιο ισοσκελές οι κάθετες είναι ίσες: $\varepsilon\varphi45^\circ=1$.`),
      mc(A(TA), R`Μια σκάλα μήκους $6$ m ακουμπά σε τοίχο και σχηματίζει $60^\circ$ με το έδαφος. Σε τι ύψος φτάνει;`, R`$3\sqrt3$ m`, [R`$3$ m`, R`$6\sqrt3$ m`, R`$2\sqrt3$ m`], R`Ύψος $=6\cdot\eta\mu60^\circ=6\cdot\dfrac{\sqrt3}{2}=3\sqrt3\approx5{,}2$ m`),
      mc(B(TA), R`Από απόσταση $20$ m βλέπουμε την κορυφή ενός κτιρίου υπό γωνία $45^\circ$. Πόσο ψηλό είναι το κτίριο (αγνοώντας το ύψος του παρατηρητή);`, R`$20$ m`, [R`$10\sqrt2$ m`, R`$20\sqrt2$ m`, R`$10$ m`], R`$\varepsilon\varphi45^\circ=\dfrac{h}{20} \Rightarrow h=20\cdot1=20$ m`),

      // ---------- Βασικές σχέσεις ----------
      mc(A(SX), R`Για κάθε γωνία $\omega$ ισχύει:`, R`$\eta\mu^2\omega+\sigma\upsilon\nu^2\omega=1$`, [R`$\eta\mu\omega+\sigma\upsilon\nu\omega=1$`, R`$\eta\mu^2\omega-\sigma\upsilon\nu^2\omega=1$`, R`$\eta\mu\omega\cdot\sigma\upsilon\nu\omega=1$`], R`Από το Πυθαγόρειο θεώρημα στον τριγωνομετρικό κύκλο: $\eta\mu^2\omega+\sigma\upsilon\nu^2\omega=1$.`),
      mc(A(SX), R`Αν $\omega$ οξεία με $\eta\mu\omega=\dfrac{5}{13}$, πόσο είναι το $\sigma\upsilon\nu\omega$;`, R`$\dfrac{12}{13}$`, [R`$\dfrac{8}{13}$`, R`$\dfrac{13}{5}$`, R`$-\dfrac{12}{13}$`], R`$\sigma\upsilon\nu^2\omega=1-\dfrac{25}{169}=\dfrac{144}{169}$<br>Οξεία, άρα θετικό: $\sigma\upsilon\nu\omega=\dfrac{12}{13}$`),
      mc(A(SX), R`Αν $\eta\mu\omega=\dfrac35$ και $\sigma\upsilon\nu\omega=\dfrac45$, πόσο είναι η $\varepsilon\varphi\omega$;`, R`$\dfrac34$`, [R`$\dfrac43$`, R`$\dfrac{12}{25}$`, R`$\dfrac75$`], R`$\varepsilon\varphi\omega=\dfrac{\eta\mu\omega}{\sigma\upsilon\nu\omega}=\dfrac{3/5}{4/5}=\dfrac34$`),
      mc(B(SX), R`Πόσο κάνει $\eta\mu^2 25^\circ+\eta\mu^2 65^\circ$;`, R`$1$`, [R`$0$`, R`$2$`, R`$\dfrac12$`], R`$65^\circ=90^\circ-25^\circ$, άρα $\eta\mu65^\circ=\sigma\upsilon\nu25^\circ$.<br>$\eta\mu^2 25^\circ+\sigma\upsilon\nu^2 25^\circ=1$`),

      // ---------- Αμβλείες ----------
      mc(A(AM), R`Πόσο κάνει $\eta\mu150^\circ$;`, R`$\dfrac12$`, [R`$-\dfrac12$`, R`$\dfrac{\sqrt3}{2}$`, R`$-\dfrac{\sqrt3}{2}$`], R`Παραπληρωματικές γωνίες έχουν ίσα ημίτονα:<br>$\eta\mu150^\circ=\eta\mu30^\circ=\dfrac12$`),
      mc(A(AM), R`Πόσο κάνει $\sigma\upsilon\nu120^\circ$;`, R`$-\dfrac12$`, [R`$\dfrac12$`, R`$-\dfrac{\sqrt3}{2}$`, R`$\dfrac{\sqrt3}{2}$`], R`Παραπληρωματικές γωνίες έχουν αντίθετα συνημίτονα:<br>$\sigma\upsilon\nu120^\circ=-\sigma\upsilon\nu60^\circ=-\dfrac12$`),
      mc(A(AM), R`Αν $90^\circ<\omega<180^\circ$, ποια πρόσημα έχουν τα $\eta\mu\omega$ και $\sigma\upsilon\nu\omega$;`, R`$\eta\mu\omega>0$, $\sigma\upsilon\nu\omega<0$`, [R`$\eta\mu\omega<0$, $\sigma\upsilon\nu\omega>0$`, R`και τα δύο θετικά`, R`και τα δύο αρνητικά`], R`Στο 2ο τεταρτημόριο το $y$ (ημίτονο) είναι θετικό και το $x$ (συνημίτονο) αρνητικό.`),
      mc(B(AM), R`Αν $\omega$ αμβλεία με $\eta\mu\omega=\dfrac45$, πόσο είναι το $\sigma\upsilon\nu\omega$;`, R`$-\dfrac35$`, [R`$\dfrac35$`, R`$\dfrac15$`, R`$-\dfrac15$`], R`$\sigma\upsilon\nu^2\omega=1-\dfrac{16}{25}=\dfrac{9}{25}$<br>Αμβλεία, άρα αρνητικό: $-\dfrac35$`),

      // ---------- Νόμος ημιτόνων ----------
      mc(A(NH), R`Σε τρίγωνο $ΑΒΓ$ είναι $\hat Α=30^\circ$, $\hat Β=45^\circ$ και $\alpha=ΒΓ=4$. Πόσο είναι το $\beta=ΑΓ$;`, R`$4\sqrt2$`, [R`$2\sqrt2$`, R`$4\sqrt3$`, R`$8$`], R`$\dfrac{\alpha}{\eta\mu Α}=\dfrac{\beta}{\eta\mu Β}$<br>$\dfrac{4}{1/2}=\dfrac{\beta}{\sqrt2/2}$<br>$8=\dfrac{2\beta}{\sqrt2} \Rightarrow \beta=4\sqrt2$`),
      mc(B(NH), R`Σε τρίγωνο με $\alpha=6$, $\hat Α=30^\circ$ και $\beta=6\sqrt3$, πόσο είναι το $\eta\mu Β$;`, R`$\dfrac{\sqrt3}{2}$`, [R`$\dfrac12$`, R`$\sqrt3$`, R`$\dfrac{\sqrt3}{3}$`], R`$\eta\mu Β=\dfrac{\beta\,\eta\mu Α}{\alpha}=\dfrac{6\sqrt3\cdot\frac12}{6}=\dfrac{\sqrt3}{2}$<br>(Η $\hat Β$ μπορεί να είναι $60^\circ$ ή $120^\circ$.)`),

      // ---------- Νόμος συνημιτόνων ----------
      mc(A(NS), R`Σε τρίγωνο με $\beta=3$, $\gamma=5$ και $\hat Α=60^\circ$, πόσο είναι το $\alpha$;`, R`$\sqrt{19}$`, [R`$\sqrt{34}$`, R`$7$`, R`$\sqrt{49}$`], R`$\alpha^2=\beta^2+\gamma^2-2\beta\gamma\,\sigma\upsilon\nu Α$<br>$=9+25-2\cdot15\cdot\dfrac12=34-15=19$<br>$\alpha=\sqrt{19}$`),
      mc(B(NS), R`Σε τρίγωνο με $\beta=3$, $\gamma=5$ και $\hat Α=120^\circ$, πόσο είναι το $\alpha$;`, R`$7$`, [R`$\sqrt{19}$`, R`$\sqrt{34}$`, R`$8$`], R`$\sigma\upsilon\nu120^\circ=-\dfrac12$<br>$\alpha^2=9+25-2\cdot15\cdot\left(-\dfrac12\right)=34+15=49$<br>$\alpha=7$`),
      mc(B(NS), R`Τρίγωνο έχει πλευρές $5$, $7$ και $8$. Πόση είναι η γωνία απέναντι από την πλευρά $7$;`, R`$60^\circ$`, [R`$45^\circ$`, R`$120^\circ$`, R`$30^\circ$`], R`$49=25+64-2\cdot5\cdot8\,\sigma\upsilon\nu\omega$<br>$80\,\sigma\upsilon\nu\omega=40 \Rightarrow \sigma\upsilon\nu\omega=\dfrac12$<br>$\omega=60^\circ$`),
      mc(B(NS), R`Τρίγωνο έχει πλευρές $4$, $5$ και $7$. Τι είδους είναι ως προς τις γωνίες;`, R`αμβλυγώνιο`, [R`οξυγώνιο`, R`ορθογώνιο`, R`ισοσκελές`], R`Συγκρίνουμε το τετράγωνο της μεγαλύτερης με το άθροισμα των άλλων:<br>$49>16+25=41$, άρα η απέναντι γωνία είναι αμβλεία.`),
    ],
  };
})();
