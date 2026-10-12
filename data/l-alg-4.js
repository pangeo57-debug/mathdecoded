window.QUIZ = (() => {
  const R = String.raw;
  const mc = (tag, q, ok, bad, explain, fig) => ({ tag, q, options: [ok, ...bad], correct: 0, explain, ...(fig ? { fig } : {}) });
  const op = (tag, q, explain) => ({ tag, q, explain });
  const A = 'Άλυτες · Ανισώσεις 1ου βαθμού', B = 'Άλυτες · Ανισώσεις 2ου βαθμού', T = 'Θέματα Τράπεζας', O = 'Επίπεδο ΟΕΦΕ';

  return {
    id: 'l-alg-4',
    grade: "Α' Λυκείου",
    title: 'Άλγεβρα · Κεφάλαιο 4 — Ανισώσεις',
    items: [
      // ---------- Ανισώσεις 1ου βαθμού ----------
      mc(A, R`Να λύσετε την ανίσωση $3x+5>2x+8$.`, R`$x>3$`, [R`$x<3$`, R`$x>13$`, R`$x>-3$`], R`$3x-2x>8-5\Rightarrow x>3$`),
      mc(A, R`Να λύσετε την ανίσωση $-2x+4\geq0$.`, R`$x\leq2$`, [R`$x\geq2$`, R`$x\leq-2$`, R`$x\geq-2$`], R`$-2x\geq-4$<br>Διαιρούμε με $-2<0$ και <b>αλλάζουμε τη φορά</b>: $x\leq2$.`),
      mc(A, R`Να λύσετε την ανίσωση $4(x-1)<2(x+3)$.`, R`$x<5$`, [R`$x>5$`, R`$x<1$`, R`$x<-5$`], R`$4x-4<2x+6\Rightarrow2x<10\Rightarrow x<5$`),
      mc(A, R`Να λύσετε την ανίσωση $\dfrac{x}{2}-\dfrac{x}{3}\leq1$.`, R`$x\leq6$`, [R`$x\geq6$`, R`$x\leq1$`, R`$x\leq5$`], R`Πολλαπλασιάζουμε με $6>0$: $3x-2x\leq6\Rightarrow x\leq6$`),
      mc(A, R`Να λύσετε την ανίσωση $-\dfrac{x}{3}>2$.`, R`$x<-6$`, [R`$x>-6$`, R`$x<6$`, R`$x>6$`], R`Πολλαπλασιάζουμε με $-3<0$ και αλλάζουμε φορά: $x<-6$.`),
      mc(A, R`Να λύσετε την ανίσωση $5-2x\leq3x-5$.`, R`$x\geq2$`, [R`$x\leq2$`, R`$x\geq-2$`, R`$x\geq0$`], R`$5+5\leq3x+2x\Rightarrow10\leq5x\Rightarrow x\geq2$`),
      mc(A, R`Να λύσετε την ανίσωση $\dfrac{2x+1}{3}-\dfrac{x-1}{2}>0$.`, R`$x>-5$`, [R`$x<-5$`, R`$x>5$`, R`$x>-\dfrac15$`], R`ΕΚΠ$=6$: $2(2x+1)-3(x-1)>0\Rightarrow4x+2-3x+3>0\Rightarrow x+5>0\Rightarrow x>-5$`),
      mc(A, R`Να λύσετε ως προς $x$ την ανίσωση $\alpha x<\beta$ για $\alpha<0$.`, R`$x>\dfrac{\beta}{\alpha}$`, [R`$x<\dfrac{\beta}{\alpha}$`, R`$x>\dfrac{\alpha}{\beta}$`, R`$x<\alpha\beta$`], R`Διαιρούμε με $\alpha<0$, οπότε η φορά αλλάζει: $x>\dfrac\beta\alpha$.`),
      // ---------- Ανισώσεις 2ου βαθμού ----------
      mc(B, R`Να λύσετε την ανίσωση $x^2-3x-4>0$.`, R`$x<-1$ ή $x>4$`, [R`$-1<x<4$`, R`$x<-4$ ή $x>1$`, R`$x>4$`], R`Ρίζες: $x=-1$ και $x=4$ (αφού $x^2-3x-4=(x+1)(x-4)$).<br>Επειδή $\alpha=1>0$, το τριώνυμο είναι θετικό <b>έξω από τις ρίζες</b>.`),
      mc(B, R`Να λύσετε την ανίσωση $x^2-6x+9\leq0$.`, R`$x=3$`, [R`$x\neq3$`, R`$x\in\mathbb{R}$`, R`αδύνατη`], R`$x^2-6x+9=(x-3)^2\geq0$ πάντα. Είναι $\leq0$ μόνο όταν $(x-3)^2=0$, δηλαδή $x=3$.`),
      mc(B, R`Να λύσετε την ανίσωση $-x^2+x+6>0$.`, R`$-2<x<3$`, [R`$x<-2$ ή $x>3$`, R`$-3<x<2$`, R`$x>3$`], R`Ρίζες του $-x^2+x+6$: $x=-2$ και $x=3$.<br>Επειδή $\alpha=-1<0$, το τριώνυμο είναι θετικό <b>ανάμεσα στις ρίζες</b>.`),
      mc(B, R`Να λύσετε την ανίσωση $x^2+4>0$.`, R`για κάθε $x\in\mathbb{R}$`, [R`αδύνατη`, R`$x>2$`, R`$x\neq\pm2$`], R`$x^2\geq0$, άρα $x^2+4\geq4>0$ για κάθε $x$.<br>(Ή $\Delta=-16<0$ και $\alpha>0$.)`),
      mc(B, R`Να λύσετε την ανίσωση $2x^2-8\leq0$.`, R`$-2\leq x\leq2$`, [R`$x\leq-2$ ή $x\geq2$`, R`$-4\leq x\leq4$`, R`$x\leq2$`], R`$x^2\leq4\Leftrightarrow|x|\leq2\Leftrightarrow-2\leq x\leq2$`),
      mc(B, R`Να λύσετε την ανίσωση $x^2+2x+1\geq0$.`, R`για κάθε $x\in\mathbb{R}$`, [R`$x\neq-1$`, R`$x=-1$`, R`αδύνατη`], R`$x^2+2x+1=(x+1)^2\geq0$ για κάθε $x$ (και $=0$ για $x=-1$, που περιλαμβάνεται λόγω του $\geq$).`),
      mc(B, R`Να λύσετε την ανίσωση $3x^2-x<0$.`, R`$0<x<\dfrac13$`, [R`$x<0$ ή $x>\dfrac13$`, R`$-\dfrac13<x<0$`, R`$0<x<3$`], R`$x(3x-1)<0$: ρίζες $0$ και $\dfrac13$. Με $\alpha=3>0$ το τριώνυμο είναι αρνητικό ανάμεσα στις ρίζες.`),
      mc(B, R`Να λύσετε την ανίσωση $-2x^2+5x-3<0$.`, R`$x<1$ ή $x>\dfrac32$`, [R`$1<x<\dfrac32$`, R`$x<-\dfrac32$ ή $x>-1$`, R`$x>\dfrac32$`], R`Ισοδύναμα $2x^2-5x+3>0$ με ρίζες $1$ και $\dfrac32$.<br>Θετικό έξω από τις ρίζες: $x<1$ ή $x>\dfrac32$.`),
      mc(B, R`Να λύσετε την ανίσωση $x^2-1\geq0$.`, R`$x\leq-1$ ή $x\geq1$`, [R`$-1\leq x\leq1$`, R`$x\geq1$`, R`$x\in\mathbb{R}$`], R`$x^2\geq1\Leftrightarrow|x|\geq1\Leftrightarrow x\leq-1$ ή $x\geq1$`),
      mc(B, R`Να λύσετε την ανίσωση $-x^2+9<0$.`, R`$x<-3$ ή $x>3$`, [R`$-3<x<3$`, R`$x>3$`, R`$x<-9$ ή $x>9$`], R`$-x^2+9<0\Leftrightarrow x^2>9\Leftrightarrow x<-3$ ή $x>3$`),

      // ---------- Θέματα Τράπεζας ----------
      mc(T, R`Να λυθεί η ανίσωση $3(x+2)-5\geq x+3$.`, R`$x\geq1$`, [R`$x\leq1$`, R`$x\geq-1$`, R`$x\geq2$`], R`$3x+6-5\geq x+3\Rightarrow3x+1\geq x+3\Rightarrow2x\geq2\Rightarrow x\geq1$`),
      mc(T, R`Να λυθεί η ανίσωση $\dfrac{3x-1}{4}<\dfrac{x+1}{2}$.`, R`$x<3$`, [R`$x>3$`, R`$x<-3$`, R`$x<1$`], R`ΕΚΠ$=4$: $3x-1<2(x+1)\Rightarrow3x-1<2x+2\Rightarrow x<3$`),
      mc(T, R`Να βρεθεί η τιμή του $\kappa\in\mathbb{R}$ ώστε η ανίσωση $\kappa x>2$ να έχει λύση το διάστημα $(-\infty,-1)$.`, R`$\kappa=-2$`, [R`$\kappa=2$`, R`$\kappa=-1$`, R`$\kappa=\dfrac12$`], R`Για να έχει λύση της μορφής $x<\ldots$, πρέπει $\kappa<0$ (αλλάζει φορά): $x<\dfrac{2}{\kappa}$.<br>$\dfrac2\kappa=-1\Rightarrow\kappa=-2$`),
      mc(T, R`Να λυθεί η ανίσωση $2(x-1)-3(x+2)\leq-4$.`, R`$x\geq-4$`, [R`$x\leq-4$`, R`$x\geq4$`, R`$x\leq-8$`], R`$2x-2-3x-6\leq-4\Rightarrow-x-8\leq-4\Rightarrow-x\leq4\Rightarrow x\geq-4$`),
      mc(T, R`Να βρεθούν οι κοινές λύσεις των ανισώσεων $x-1>0$ και $2x-6<0$.`, R`$x\in(1,3)$`, [R`$x\in(-\infty,1)\cup(3,+\infty)$`, R`$x\in(3,+\infty)$`, R`$x\in(-1,3)$`], R`$x>1$ και $x<3$. Τομή: $1<x<3$.`),
      mc(T, R`Να λυθεί η ανίσωση $x^2-7x+10\leq0$.`, R`$2\leq x\leq5$`, [R`$x\leq2$ ή $x\geq5$`, R`$-5\leq x\leq-2$`, R`$2<x<5$`], R`Ρίζες $2$ και $5$. Με $\alpha>0$ το τριώνυμο είναι $\leq0$ ανάμεσα και πάνω στις ρίζες.`),
      mc(T, R`Να βρεθούν οι τιμές του $x$ για τις οποίες ορίζεται η παράσταση $A=\sqrt{x^2-4}$.`, R`$x\leq-2$ ή $x\geq2$`, [R`$-2\leq x\leq2$`, R`$x\geq2$`, R`$x\geq0$`], R`Υπόριζο $\geq0$: $x^2\geq4\Leftrightarrow x\leq-2$ ή $x\geq2$.`),
      mc(T, R`Να βρεθεί η τιμή του $\kappa\in\mathbb{R}$ ώστε το τριώνυμο $x^2-2x+\kappa$ να είναι θετικό για κάθε $x\in\mathbb{R}$.`, R`$\kappa>1$`, [R`$\kappa<1$`, R`$\kappa\geq1$`, R`$\kappa>2$`], R`Θετικό για κάθε $x$ όταν $\alpha>0$ και $\Delta<0$.<br>$\Delta=4-4\kappa<0\Rightarrow\kappa>1$`),
      mc(T, R`Να λυθεί η ανίσωση $4x^2-4x+1>0$.`, R`$x\neq\dfrac12$`, [R`για κάθε $x\in\mathbb{R}$`, R`$x=\dfrac12$`, R`αδύνατη`], R`$4x^2-4x+1=(2x-1)^2>0$ εκτός από όταν μηδενίζεται: $x=\dfrac12$.`),
      mc(T, R`Να βρεθούν οι κοινές λύσεις των $x^2-4\leq0$ και $x+1>0$.`, R`$-1<x\leq2$`, [R`$-2\leq x\leq2$`, R`$x>-1$`, R`$-2\leq x<-1$`], R`$x^2-4\leq0\Leftrightarrow-2\leq x\leq2$ και $x>-1$.<br>Τομή: $-1<x\leq2$.`),
      mc(T, R`Να λυθεί η ανίσωση $\dfrac{x^2-4}{x-3}>0$.`, R`$-2<x<2$ ή $x>3$`, [R`$x<-2$ ή $2<x<3$`, R`$-2<x<3$`, R`$x>3$`], R`Ρίζες: αριθμητής $\pm2$, παρονομαστής $3$. Πίνακας προσήμων:<br>$x<-2$: $\dfrac{(+)}{(-)}=-$ · $-2<x<2$: $\dfrac{(-)}{(-)}=+$ · $2<x<3$: $\dfrac{(+)}{(-)}=-$ · $x>3$: $+$<br>Θετικό για $x\in(-2,2)\cup(3,+\infty)$.`),

      // ---------- Επίπεδο ΟΕΦΕ ----------
      mc(O, R`Να βρεθούν οι τιμές του $\kappa\in\mathbb{R}$ ώστε η ανίσωση $(\kappa-1)x^2+2(\kappa-1)x+3>0$ να αληθεύει για κάθε $x\in\mathbb{R}$.`, R`$1\leq\kappa<4$`, [R`$1<\kappa<4$`, R`$\kappa>1$`, R`$\kappa<1$ ή $\kappa>4$`], R`<b>Αν $\kappa=1$:</b> γίνεται $3>0$, που ισχύει πάντα — δεκτή τιμή.<br><b>Αν $\kappa\neq1$:</b> πρέπει $\kappa-1>0$ και $\Delta<0$.<br>$\Delta=4(\kappa-1)^2-12(\kappa-1)=4(\kappa-1)(\kappa-4)<0\Rightarrow1<\kappa<4$.<br>Συνολικά $\kappa\in[1,4)$.`),
      mc(O, R`Να λυθεί η ανίσωση $|x-1|+|x+2|<5$ με διάκριση περιπτώσεων.`, R`$-3<x<2$`, [R`$-2\leq x\leq1$`, R`$-2<x<1$`, R`$x<2$`], R`<b>$x<-2$:</b> $-2x-1<5\Rightarrow x>-3$ → $(-3,-2)$<br><b>$-2\leq x\leq1$:</b> $3<5$ ισχύει πάντα → $[-2,1]$<br><b>$x>1$:</b> $2x+1<5\Rightarrow x<2$ → $(1,2)$<br>Ένωση: $x\in(-3,2)$.`),
      mc(O, R`Να βρεθεί το πεδίο ορισμού της $f(x)=\sqrt{x^2-5x+6}+\dfrac{1}{\sqrt{9-x^2}}$.`, R`$x\in(-3,2]$`, [R`$x\in(-3,3)$`, R`$x\in(-3,2]\cup[3,+\infty)$`, R`$x\in[2,3]$`], R`Χρειάζονται: $x^2-5x+6\geq0\Leftrightarrow x\leq2$ ή $x\geq3$ και $9-x^2>0\Leftrightarrow-3<x<3$.<br>Τομή: $(-3,2]$ (το $x\geq3$ αποκλείεται από το $x<3$).`),
      mc(O, R`Να λυθεί η ανίσωση $x^4-5x^2+4<0$ θέτοντας $y=x^2$.`, R`$x\in(-2,-1)\cup(1,2)$`, [R`$x\in(-2,2)$`, R`$x\in(1,2)$`, R`$x\in(-\infty,-2)\cup(-1,1)\cup(2,+\infty)$`], R`$y^2-5y+4<0\Rightarrow1<y<4$.<br>$1<x^2<4\Rightarrow1<|x|<2\Rightarrow x\in(-2,-1)\cup(1,2)$`),
      op(O, R`Δίνεται το τριώνυμο $f(x)=x^2-2\alpha x+\alpha^2-1$. Να βρείτε για ποιες τιμές του $\alpha\in\mathbb{R}$ ισχύει $f(0)<0$ και να συγκρίνετε το $0$ με τις ρίζες του τριωνύμου.`, R`$\Delta=4\alpha^2-4(\alpha^2-1)=4>0$, ρίζες $x=\alpha\pm1$ (δηλαδή $\alpha-1<\alpha+1$).<br>$f(0)=\alpha^2-1<0\Leftrightarrow-1<\alpha<1$.<br>Τότε $\alpha-1<0<\alpha+1$: το $0$ βρίσκεται <b>ανάμεσα</b> στις ρίζες, κάτι αναμενόμενο αφού $f(0)<0$ και $\alpha_{\text{συντ.}}=1>0$.`),
    ],
  };
})();
