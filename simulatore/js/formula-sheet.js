/**
 * formula-sheet.js
 * Formulario Interattivo Ufficiale per il Primo Parziale di Elettrotecnica
 * Politecnico di Milano
 */

window.FORMULA_SHEET_DATA = [
  {
    id: "dc-mna",
    title: "1. Metodi Generali DC & MNA",
    cards: [
      {
        subtitle: "Leggi di Kirchhoff & Matrice Nodale (MNA)",
        math: "$$\\sum_{k \\in \\text{taglio}} i_k = 0 \\quad (\\text{LKC}), \\qquad \\sum_{k \\in \\text{maglia}} v_k = 0 \\quad (\\text{LKV})$$\n$$\\mathbf{G}_n \\mathbf{e} = \\mathbf{J}_n \\implies \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix} \\begin{bmatrix} e_1 \\\\ e_2 \\end{bmatrix} = \\begin{bmatrix} J_1 \\\\ J_2 \\end{bmatrix}$$",
        explanation: "Nel metodo dei potenziali ai nodi, il termine diagonale $a_{ii}$ è la somma delle conduttanze connesse al nodo $i$ più i contributi di transconduttanza uscenti ($+g_m$). Il termine extradiagonale $a_{ij}$ è $-G_{ij}$ nelle reti passive, ma perde la simmetria in presenza di generatori controllati."
      },
      {
        subtitle: "Trasformazione di Kennelly (Stella $\\leftrightarrow$ Triangolo)",
        math: "$$R_A = \\frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}} \\quad (\\Delta \\to Y), \\qquad R_{AB} = R_A + R_B + \\frac{R_A R_B}{R_C} \\quad (Y \\to \\Delta)$$\n$$\\text{Se tutti i resistori sono uguali: } R_Y = \\frac{1}{3} R_\\Delta \\iff R_\\Delta = 3 R_Y$$",
        explanation: "Passando da triangolo a stella la resistenza per ciascun ramo si divide per 3. Da stella a triangolo si moltiplica per 3."
      },
      {
        subtitle: "Teorema di Tellegen & Bilancio di Potenze",
        math: "$$\\sum_{k=1}^b v_k(t) \\cdot i_k(t) = 0 \\iff \\sum P_{\\text{erogata}} = \\sum P_{\\text{assorbita}}$$",
        explanation: "Vale per qualsiasi rete orientata a parametri concentrati (lineare o non lineare, tempo-variante o invariante). La potenza assorbita da un resistore è sempre $P_R = R I^2 = V^2 / R \\ge 0$."
      }
    ]
  },
  {
    id: "th-no",
    title: "2. Thévenin, Norton & Generatori Pilotati",
    cards: [
      {
        subtitle: "Equivalente di Thévenin e Norton",
        math: "$$V_{AB}(i) = V_0 - R_{th} \\cdot i, \\qquad i_{AB}(v) = I_{cc} - G_n \\cdot v$$\n$$V_0 = E_{th}, \\qquad I_{cc} = A_n = \\frac{V_0}{R_{th}}, \\qquad G_n = \\frac{1}{R_{th}}$$",
        explanation: "$V_0$ è la tensione a morsetti aperti ($i = 0$), $I_{cc}$ è la corrente con morsetti cortocircuitati ($v = 0$)."
      },
      {
        subtitle: "Calcolo di Rth con Generatori Pilotati (Generatore Ausiliario)",
        math: "$$R_{th} = \\frac{V_a}{I_a} \\quad \\text{con generatori INDIPENDENTI spenti (E=0, J=0)}$$",
        explanation: "TRABOCCHETTO: Non spegnere MAI i generatori pilotati! Si applica un generatore ausiliario di tensione $V_a$ (e si ricava $I_a$) o di corrente $I_a$ (e si ricava $V_a$). Se $R_{th} < 0$, la rete presenta resistenza negativa attiva."
      },
      {
        subtitle: "Massimo Trasferimento di Potenza (Adattamento Resistivo)",
        math: "$$R_L = R_{th} \\implies P_{L,max} = \\frac{V_0^2}{4 R_{th}}$$",
        explanation: "La potenza trasferita sul carico è massima quando $R_L = R_{th}$. Nota il fattore 4 al denominatore."
      }
    ]
  },
  {
    id: "diodes",
    title: "3. Diodi Ideali & Bipoli Non Lineari",
    cards: [
      {
        subtitle: "Caratteristica e Condizioni di Consistenza del Diodo Ideale",
        math: "$$\\text{Stato ON: } v_D = 0\\text{ V} \\quad \\text{con vincolo } i_D \\ge 0$$\n$$\\text{Stato OFF: } i_D = 0\\text{ A} \\quad \\text{con vincolo } v_D \\le 0$$",
        explanation: "Per ogni diodo ideale a soglia nulla, si formula un'ipotesi operativa e si verifica il vincolo di consistenza sul segno della variabile duale."
      },
      {
        subtitle: "Potenza Dissipata nel Diodo Ideale",
        math: "$$P_D(t) = v_D(t) \\cdot i_D(t) \\equiv 0\\text{ W}$$",
        explanation: "Poiché quando conduce $v_D = 0$ e quando è spento $i_D = 0$, il prodotto è identicamente nullo in ogni istante: i diodi ideali non dissipano potenza attiva!"
      },
      {
        subtitle: "Linearizzazione per Piccoli Segnali attorno al Punto di Lavoro Q",
        math: "$$r_d = \\left( \\frac{dv}{di} \\right)_Q = \\frac{1}{g_d}, \\qquad g_d = \\left( \\frac{di}{dv} \\right)_Q$$\n$$\\text{Per diodo Shockley: } i = I_0(e^{v/V_T} - 1) \\implies g_d \\approx \\frac{I_Q}{V_T}$$",
        explanation: "Sostituisce il componente non lineare con una resistenza differenziale $r_d$ valida per piccole oscillazioni attorno a $Q$."
      }
    ]
  },
  {
    id: "opamp",
    title: "4. Amplificatori Operazionali (OP-AMP)",
    cards: [
      {
        subtitle: "Modello Ideale & Cortocircuito Virtuale",
        math: "$$v^+ = v^- \\iff v_d = v^+ - v^- = 0, \\qquad i^+ = 0, \\quad i^- = 0$$\n$$i_{out} \\neq 0 \\quad (\\text{erogata dal terminale di uscita})$$",
        explanation: "In presenza di retroazione negativa (anello chiuso su $v^-$), i due ingressi si trovano al medesimo potenziale e non assorbono corrente."
      },
      {
        subtitle: "Configurazioni Standard di Guadagno",
        math: "$$A_{v,\\text{inv}} = -\\frac{R_2}{R_1} \\quad (\\text{Invertente}), \\qquad A_{v,\\text{non-inv}} = 1 + \\frac{R_2}{R_1} \\quad (\\text{Non Invertente})$$\n$$V_{out} = \\frac{R_2}{R_1}(V_2 - V_1) \\quad (\\text{Differenziale bilanciato } R_4/R_3 = R_2/R_1)$$",
        explanation: "Per il buffer di tensione (inseguitore), $R_2 = 0$ e $R_1 = \\infty$, ottenendo $A_v = 1$ con impedenza d'ingresso infinita."
      },
      {
        subtitle: "Bilancio di Potenza dell'OP-AMP",
        math: "$$P_{oa} = V_{out} \\cdot i_{out} = V_{out} \\left( i_{\\text{feedback}} + i_{L} \\right)$$",
        explanation: "La corrente $i_{out}$ si ricava scrivendo la LKC al nodo d'uscita. La potenza erogata dall'OP-AMP deriva dai terminali di alimentazione continua."
      }
    ]
  },
  {
    id: "two-port",
    title: "5. Doppi Bipoli & Trasformatore Ideale",
    cards: [
      {
        subtitle: "Matrici di Rappresentazione R, G, H, T",
        math: "$$\\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix} = \\begin{bmatrix} r_{11} & r_{12} \\\\ r_{21} & r_{22} \\end{bmatrix} \\begin{bmatrix} i_1 \\\\ i_2 \\end{bmatrix}, \\qquad \\begin{bmatrix} i_1 \\\\ i_2 \\end{bmatrix} = \\begin{bmatrix} g_{11} & g_{12} \\\\ g_{21} & g_{22} \\end{bmatrix} \\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix}$$\n$$\\begin{bmatrix} v_1 \\\\ i_2 \\end{bmatrix} = \\begin{bmatrix} h_{11} & h_{12} \\\\ h_{21} & h_{22} \\end{bmatrix} \\begin{bmatrix} i_1 \\\\ v_2 \\end{bmatrix}, \\qquad \\begin{bmatrix} v_1 \\\\ i_1 \\end{bmatrix} = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} \\begin{bmatrix} v_2 \\\\ -i_2 \\end{bmatrix}$$",
        explanation: "La matrice T adotta per convenzione la corrente uscente dalla porta 2 ($-i_2$)."
      },
      {
        subtitle: "Condizioni di Reciprocità e Simmetria",
        math: "$$\\text{Reciprocità: } r_{12} = r_{21}, \\quad g_{12} = g_{21}, \\quad h_{12} = -h_{21}, \\quad \\det(\\mathbf{T}) = AD - BC = 1$$\n$$\\text{Simmetria: } r_{11} = r_{22}, \\quad g_{11} = g_{22}, \\quad \\det(\\mathbf{H}) = 1, \\quad A = D$$",
        explanation: "Un doppio bipolo passivo privo di sorgenti controllate non reciproche è sempre reciproco."
      },
      {
        subtitle: "Trasformatore Ideale (n:1) & Trasporto d'Impedenza",
        math: "$$v_1 = n v_2, \\qquad i_2 = -n i_1 \\iff i_1 = -\\frac{1}{n} i_2$$\n$$Z_{in} = \\frac{v_1}{i_1} = n^2 \\cdot Z_L \\quad (\\text{Riflessione d'impedenza al primario})$$",
        explanation: "Il trasformatore ideale NON ammette né matrice R né G, ma ammette H e T. L'impedenza scala con il quadrato $n^2$ del rapporto spire!"
      }
    ]
  },
  {
    id: "ac-circuits",
    title: "6. Regime Sinusoidale Monofase (AC) & Potenze",
    cards: [
      {
        subtitle: "Fasori & Impedenze Complesse",
        math: "$$\\bar{Z}_R = R, \\qquad \\bar{Z}_L = j \\omega L, \\qquad \\bar{Z}_C = \\frac{1}{j \\omega C} = -j \\frac{1}{\\omega C}$$\n$$\\bar{Z} = R + j X = |Z| e^{j \\varphi}, \\qquad |Z| = \\sqrt{R^2 + X^2}, \\quad \\varphi = \\arctan(X/R)$$",
        explanation: "La corrente è in ritardo sulla tensione per carico induttivo ($X_L > 0$), in anticipo per carico capacitivo ($X_C < 0$)."
      },
      {
        subtitle: "Triangolo delle Potenze & Teorema di Boucherot",
        math: "$$\\bar{S} = \\bar{V}_{eff} \\cdot \\bar{I}_{eff}^* = P + j Q \\quad [\\text{VA}]$$\n$$P = V_{eff} I_{eff} \\cos\\varphi \\quad [\\text{W}], \\qquad Q = V_{eff} I_{eff} \\sin\\varphi \\quad [\\text{VAR}]$$\n$$\\text{Teorema di Boucherot: } \\sum \\bar{S}_k = 0 \\iff \\sum P_k = 0 \\quad \\text{e} \\quad \\sum Q_k = 0$$",
        explanation: "La potenza attiva P e reattiva Q si conservano separatamente in tutta la rete."
      },
      {
        subtitle: "Formula del Rifasamento Industriale",
        math: "$$C = \\frac{P (\\tan\\varphi_1 - \\tan\\varphi_2)}{\\omega V_{eff}^2}$$\n$$Q_C = -\\omega C V_{eff}^2 = P(\\tan\\varphi_2 - \\tan\\varphi_1)$$",
        explanation: "Per portare il fattore di potenza da $\\cos\\varphi_1$ al valore desiderato $\\cos\\varphi_2$ (spesso 0.9 o 1.0) con condensatore in parallelo."
      },
      {
        subtitle: "Risonanza Serie e Parallelo",
        math: "$$\\omega_0 = \\frac{1}{\\sqrt{LC}} \\quad [\\text{rad/s}], \\qquad f_0 = \\frac{\\omega_0}{2\\pi} \\quad [\\text{Hz}]$$\n$$Q_0 = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 R C} \\quad (\\text{Fattore di merito RLC serie})$$",
        explanation: "Alla risonanza serie l'impedenza è minima e puramente resistiva ($Z = R$), con corrente massima in fase con la tensione."
      }
    ]
  }
];
