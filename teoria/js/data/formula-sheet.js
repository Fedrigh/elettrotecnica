// js/data/formula-sheet.js
// Formulario Rapido Universale di Elettrotecnica (Politecnico di Milano)

window.FORMULA_SHEET = [
  {
    "id": "tab-fondamenti",
    "title": "1. Fondamenti & Bipoli Lineari",
    "badge": "1° Parziale",
    "formulas": [
      {
        "name": "Legge di Ohm",
        "latex": "v(t) = R \\cdot i(t) \\iff i(t) = G \\cdot v(t)",
        "description": "Relazione costitutiva fondamentale del resistore lineare. Conduttanza $G = 1/R$ in Siemens [S]."
      },
      {
        "name": "Potenza Istantanea (Convenzione Utilizzatore)",
        "latex": "p_{ass}(t) = v(t) \\cdot i(t) = R \\cdot i^2(t) = G \\cdot v^2(t)",
        "description": "La corrente entra dal polo positivo ($+$). Se $p > 0$ assorbe, se $p < 0$ eroga. Sempre $\\ge 0$ per resistori passivi."
      },
      {
        "name": "Potenza Istantanea (Convenzione Generatore)",
        "latex": "p_{erog}(t) = v(t) \\cdot i(t) = -p_{ass}(t)",
        "description": "La corrente esce dal polo positivo ($+$). Se $p_{erog} > 0$ la sorgente fornisce potenza attiva al circuito."
      },
      {
        "name": "Energia Elettrica",
        "latex": "w(t) = \\int_{t_0}^t p(\\tau) d\\tau",
        "description": "Integrale temporale della potenza istantanea espresso in Joule [J]."
      },
      {
        "name": "Le 4 Sorgenti Controllate (Pilotate)",
        "latex": "\\begin{aligned} \\text{VCVS: } v &= \\mu v_x, & \\text{VCCS: } i &= g_m v_x \\\\ \\text{CCVS: } v &= r_m i_x, & \\text{CCCS: } i &= \\beta i_x \\end{aligned}",
        "description": "Modelli lineari di amplificazione: $\\mu, \\beta$ adimensionali, $g_m$ in Siemens [S], $r_m$ in Ohm [$\\Omega$]."
      }
    ]
  },
  {
    "id": "tab-topologia-teoremi",
    "title": "2. Topologia, Kirchhoff & Teoremi DC",
    "badge": "1° Parziale",
    "formulas": [
      {
        "name": "Relazioni Topologiche di Grafo",
        "latex": "b_T = n - 1, \\quad l = b - n + 1, \\quad N_{tot} = 2b",
        "description": "Rami dell'albero $b_T$, corde del coalbero (maglie fondamentali) $l$. Risoluzione completa con $2b$ equazioni."
      },
      {
        "name": "Leggi di Kirchhoff (LKC & LKV)",
        "latex": "\\sum_{k \\in \\text{nodo}} \\pm i_k = 0, \\quad \\sum_{m \\in \\text{maglia}} \\pm v_m = 0",
        "description": "$n-1$ equazioni linearmente indipendenti ai nodi (LKC); $b-n+1$ equazioni linearmente indipendenti alle maglie (LKV)."
      },
      {
        "name": "Teorema di Tellegen (Conservazione delle Potenze)",
        "latex": "\\sum_{k=1}^b v_k(t) \\cdot i_k(t) = \\mathbf{u}^T (\\mathbf{A} \\mathbf{i}) = 0",
        "description": "La somma delle potenze assorbite su tutti i rami di qualsiasi rete è identicamente nulla. Vale per elementi lineari e non lineari."
      },
      {
        "name": "Analisi Nodale Modificata (MNA)",
        "latex": "\\mathbf{G} \\cdot \\mathbf{u} = \\mathbf{i}_S",
        "description": "Elementi diagonali $G_{ii} > 0$ (somma conduttanze al nodo); fuori diagonale $G_{ij} = -G_{mutua} \\le 0$."
      },
      {
        "name": "Equivalenti di Thévenin e Norton",
        "latex": "V_{th} = V_{oc}, \\quad I_{no} = I_{sc}, \\quad V_{th} = R_{th} \\cdot I_{no}",
        "description": "Tensione a vuoto $V_{oc}$ e corrente di cortocircuito $I_{sc}$. Stessa resistenza equivalente interna $R_{th}$."
      },
      {
        "name": "Calcolo Rth con Generatore Ausiliario di Prova",
        "latex": "R_{th} = \\frac{V_a}{I_a} \\quad (\\text{a sorgenti indipendenti spente})",
        "description": "Metodo universale e obbligatorio quando sono presenti sorgenti controllate (che NON vanno mai spente!)."
      },
      {
        "name": "Massimo Trasferimento di Potenza (DC)",
        "latex": "R_L = R_{th} \\implies P_{L, max} = \\frac{V_{th}^2}{4 R_{th}} \\quad (\\eta = 50\\%)",
        "description": "Adattamento di resistenza in continua. Il rendimento teorico alla massima potenza trasferita è esattamente il 50%."
      }
    ]
  },
  {
    "id": "tab-diodi-opamp",
    "title": "3. Diodi Ideali & Amplificatori Operazionali",
    "badge": "1° Parziale",
    "formulas": [
      {
        "name": "Modello del Diodo Ideale (ON / OFF)",
        "latex": "\\begin{aligned} \\text{Stato ON: } & v_D = 0 \\quad \\text{con vincolo: } i_D \\ge 0 \\\\ \\text{Stato OFF: } & i_D = 0 \\quad \\text{con vincolo: } v_D \\le 0 \\end{aligned}",
        "description": "Caratteristica a spigolo a 90°. La consistenza dell'ipotesi richiede la verifica esplicita del vincolo di segno."
      },
      {
        "name": "Raddrizzatore a Doppia Semionda (Ponte di Graetz)",
        "latex": "V_{dc} = \\frac{2 V_M}{\\pi} \\approx 0.637 V_M",
        "description": "Tensione media continua sul carico. Conducono a coppie alterne ($D_1-D_4$ semionda $+$, $D_2-D_3$ semionda $-$)."
      },
      {
        "name": "Cortocircuito Virtuale OP-AMP (Retroazione Negativa)",
        "latex": "v^+ = v^-, \\quad i^+ = 0, \\quad i^- = 0",
        "description": "Postulati del modello ideale in linearità: guadagno infinito $A_d \\to \\infty$ e correnti di polarizzazione nulle."
      },
      {
        "name": "Configurazione Invertente e Non Invertente",
        "latex": "v_o = - \\frac{R_2}{R_1} v_{in} \\quad \\text{(Invertente)}, \\quad v_o = \\left( 1 + \\frac{R_2}{R_1} \\right) v_{in} \\quad \\text{(Non Invertente)}",
        "description": "Guadagni ad anello chiuso stabiliti unicamente dai resistori passivi di retroazione."
      },
      {
        "name": "Buffer / Inseguitore di Tensione",
        "latex": "v_o = v_{in}, \\quad R_{in} \\to \\infty, \\quad R_{out} \\to 0",
        "description": "Guadagno unitario con disaccoppiamento totale d'impedenza (elimina l'effetto di carico)."
      },
      {
        "name": "Corrente d'Uscita OP-AMP",
        "latex": "i_o = i_{feedback} + i_{carico} = \\frac{v_o - v^-}{R_2} + \\frac{v_o}{R_L}",
        "description": "L'OP-AMP eroga la corrente richiesta dal carico. Non porre mai $i_o = 0$ al nodo d'uscita!"
      }
    ]
  },
  {
    "id": "tab-doppi-bipoli",
    "title": "4. Doppi Bipoli & Trasformatore",
    "badge": "1° Parziale",
    "formulas": [
      {
        "name": "Matrice delle Resistenze [R]",
        "latex": "\\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix} = \\begin{bmatrix} R_{11} & R_{12} \\\\ R_{21} & R_{22} \\end{bmatrix} \\begin{bmatrix} i_1 \\\\ i_2 \\end{bmatrix}",
        "description": "Parametri misurati a vuoto ($i_2 = 0$ o $i_1 = 0$)."
      },
      {
        "name": "Matrice di Trasmissione [T] (Catena)",
        "latex": "\\begin{bmatrix} v_1 \\\\ i_1 \\end{bmatrix} = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} \\begin{bmatrix} v_2 \\\\ -i_2 \\end{bmatrix}",
        "description": "Collegamento in cascata: $[\\mathbf{T}_{tot}] = [\\mathbf{T}_a] \\cdot [\\mathbf{T}_b]$. Reciprocità: $AD - BC = 1$."
      },
      {
        "name": "Condizione di Reciprocità",
        "latex": "R_{12} = R_{21}, \\quad G_{12} = G_{21}, \\quad h_{12} = -h_{21}, \\quad \\det([\\mathbf{T}]) = 1",
        "description": "Soddisfatta da reti con soli resistori e trasformatori ideali. Violata da sorgenti controllate e giratori."
      },
      {
        "name": "Trasformatore Ideale n:1",
        "latex": "v_1 = n \\cdot v_2, \\quad i_2 = -n \\cdot i_1, \\quad p(t) = v_1 i_1 + v_2 i_2 = 0",
        "description": "Componente conservativo trasparente alla potenza istantanea con rapporto spire $n = N_1 / N_2$."
      },
      {
        "name": "Riflessione delle Impedenze sul Trasformatore",
        "latex": "Z_{in} = n^2 \\cdot Z_L",
        "description": "L'impedenza di carico secondaria viene riflessa al primario moltiplicata per il fattore quadratico $n^2$."
      }
    ]
  },
  {
    "id": "tab-ac-fasori",
    "title": "5. Regime Sinusoidale AC & Rifasamento",
    "badge": "1° Parziale",
    "formulas": [
      {
        "name": "Trasformata di Steinmetz (Fasori)",
        "latex": "a(t) = \\sqrt{2} A \\cos(\\omega t + \\alpha) \\longleftrightarrow \\bar{A} = A e^{j\\alpha} = A \\angle \\alpha",
        "description": "Fasore a valore efficace $A = A_M / \\sqrt{2}$. Operatore derivata: $\\frac{d}{dt} \\leftrightarrow j\\omega$."
      },
      {
        "name": "Impedenze dei Componenti Elementari",
        "latex": "\\bar{Z}_R = R, \\quad \\bar{Z}_L = j\\omega L = j X_L, \\quad \\bar{Z}_C = \\frac{1}{j\\omega C} = -j \\frac{1}{\\omega C} = j X_C",
        "description": "Reattanza induttiva $X_L = \\omega L > 0$; reattanza capacitiva $X_C = -1/(\\omega C) < 0$."
      },
      {
        "name": "Potenza Istantanea e Potenza Attiva / Reattiva",
        "latex": "P = V I \\cos\\varphi \\quad [\\text{W}], \\quad Q = V I \\sin\\varphi \\quad [\\text{VAR}]",
        "description": "Potenza attiva $P$ (lavoro utile/calore); potenza reattiva $Q$ (scambio energetico a media nulla)."
      },
      {
        "name": "Potenza Complessa & Triangolo delle Potenze",
        "latex": "\\bar{S} = \\bar{V} \\cdot \\bar{I}^* = P + j Q = S e^{j\\varphi}, \\quad S = |\\bar{S}| = V \\cdot I = \\sqrt{P^2 + Q^2} \\quad [\\text{VA}]",
        "description": "Prodotto di $\\bar{V}$ per il complesso coniugato $\\bar{I}^*$. Fattore di potenza: $\\cos\\varphi = P / S$."
      },
      {
        "name": "Teorema di Boucherot",
        "latex": "\\sum \\bar{S}_k = 0 \\implies \\sum P_k = 0 \\quad \\text{e} \\quad \\sum Q_k = 0",
        "description": "Conservazione separata della potenza attiva e reattiva in tutta la rete."
      },
      {
        "name": "Formula del Rifasamento Monofase",
        "latex": "C_{rif} = \\frac{P (\\tan\\varphi_1 - \\tan\\varphi_2)}{\\omega V^2}",
        "description": "Capacità in parallelo per elevare il fattore di potenza da $\\cos\\varphi_1$ a $\\cos\\varphi_2$ riducendo la corrente di linea."
      },
      {
        "name": "Massimo Trasferimento Complesso (Adattamento Coniugato)",
        "latex": "\\bar{Z}_L = \\bar{Z}_{th}^* = R_{th} - j X_{th} \\implies P_{L, max} = \\frac{|\\bar{V}_{th}|^2}{4 R_{th}}",
        "description": "La reattanza del carico cancella quella interna per risonanza ($X_L = -X_{th}$)."
      }
    ]
  },
  {
    "id": "tab-risonanza-magnetico",
    "title": "6. Risonanza & Circuiti Magnetici",
    "badge": "1° & 2° Parziale",
    "formulas": [
      {
        "name": "Pulsazione di Risonanza",
        "latex": "\\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad f_0 = \\frac{1}{2\\pi \\sqrt{LC}}",
        "description": "Condizione in cui $\\Im\\{\\bar{Z}\\} = 0 \\implies \\cos\\varphi = 1$ (tensione e corrente in fase)."
      },
      {
        "name": "Fattore di Merito Q (Risonanza Serie)",
        "latex": "Q_0 = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}, \\quad V_L = V_C = Q_0 \\cdot V",
        "description": "Amplificazione di tensione sui componenti reattivi alla risonanza serie. Banda $B = \\omega_0 / Q_0 = R/L$."
      },
      {
        "name": "Fattore di Merito Q (Risonanza Parallelo)",
        "latex": "Q_p = \\frac{R}{\\omega_0 L} = \\omega_0 C R = R \\sqrt{\\frac{C}{L}}, \\quad I_L = I_C = Q_p \\cdot I",
        "description": "Dualità serie/parallelo: nel parallelo $Q$ è direttamente proporzionale a $R$."
      },
      {
        "name": "Legge di Hopkinson (Circuiti Magnetici)",
        "latex": "\\mathcal{F} = N \\cdot i = \\mathcal{R}_{tot} \\cdot \\Phi \\iff \\Phi = \\frac{N i}{\\mathcal{R}_{tot}}",
        "description": "Legge di Ohm magnetica: forza magnetomotrice $\\mathcal{F}$, flusso $\\Phi$ e riluttanza $\\mathcal{R}$."
      },
      {
        "name": "Riluttanza Magnetica & Traferro",
        "latex": "\\mathcal{R}_{fe} = \\frac{l}{\\mu_0 \\mu_r S}, \\quad \\mathcal{R}_{tr} = \\frac{\\delta}{\\mu_0 S}, \\quad L = \\frac{N^2}{\\mathcal{R}_{tot}}",
        "description": "Il traferro $\\delta$ domina spesso la riluttanza totale a causa di $\\mu_0 \\ll \\mu_{ferro}$."
      },
      {
        "name": "Mutua Induzione & Coefficiente di Accoppiamento",
        "latex": "v_1 = L_1 \\frac{di_1}{dt} \\pm M \\frac{di_2}{dt}, \\quad k = \\frac{M}{\\sqrt{L_1 L_2}} \\le 1",
        "description": "Segno $+M$ se entrambe le correnti entrano dal pallino. $k=1$ per accoppiamento perfetto."
      }
    ]
  },
  {
    "id": "tab-transitori",
    "title": "7. Transitori del 1° e 2° Ordine",
    "badge": "2° Parziale",
    "formulas": [
      {
        "name": "Formula Generale Transitori 1° Ordine (DC)",
        "latex": "x(t) = x(\\infty) + \\left[ x(0^+) - x(\\infty) \\right] e^{-t / \\tau}, \\quad t \\ge 0",
        "description": "Metodo a 3 step: condizione iniziale $x(0^+)=x(0^-)$, regime asintotico $x(\\infty)$, costante di tempo $\\tau$."
      },
      {
        "name": "Costante di Tempo (tau)",
        "latex": "\\tau_{RC} = R_{eq} \\cdot C, \\quad \\tau_{RL} = \\frac{L}{R_{eq}}",
        "description": "$R_{eq}$ calcolata vista dai morsetti reattivi nella topologia valida per $t > 0$ a sorgenti indipendenti spente."
      },
      {
        "name": "Teorema del 50% di Rendimento Energetico",
        "latex": "W_E = C E^2, \\quad W_C = \\frac{1}{2} C E^2, \\quad W_R = \\frac{1}{2} C E^2",
        "description": "Nella carica di un condensatore da generatore di tensione continuo, metà dell'energia erogata viene dissipata in calore indipendentemente da $R$."
      },
      {
        "name": "Equazione Caratteristica 2° Ordine",
        "latex": "s^2 + 2\\alpha s + \\omega_0^2 = 0 \\implies s_{1,2} = -\\alpha \\pm \\sqrt{\\alpha^2 - \\omega_0^2}",
        "description": "Serie: $\\alpha = R/(2L)$, $\\omega_0 = 1/\\sqrt{LC}$. Parallelo: $\\alpha = 1/(2RC)$, $\\omega_0 = 1/\\sqrt{LC}$."
      },
      {
        "name": "I 3 Regimi Dinamici del 2° Ordine",
        "latex": "\\begin{aligned} \\text{Sovrasmorzato } (\\alpha > \\omega_0): & \\quad x_{om}(t) = A_1 e^{s_1 t} + A_2 e^{s_2 t} \\\\ \\text{Critico } (\\alpha = \\omega_0): & \\quad x_{om}(t) = (A_1 + A_2 t) e^{-\\alpha t} \\\\ \\text{Sottosmorzato } (\\alpha < \\omega_0): & \\quad x_{om}(t) = e^{-\\alpha t} [A_1 \\cos(\\omega_d t) + A_2 \\sin(\\omega_d t)] \\end{aligned}",
        "description": "Pulsazione smorzata $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$. Condizioni iniziali su derivata da KCL/KVL a $t=0^+$."
      }
    ]
  },
  {
    "id": "tab-trifase-laplace",
    "title": "8. Circuiti Trifase & Metodo di Laplace",
    "badge": "2° Parziale",
    "formulas": [
      {
        "name": "Relazione Tensione Concatenata e Stellata",
        "latex": "V = \\sqrt{3} \\cdot E, \\quad \\bar{V}_{12} = \\sqrt{3} E e^{j 30^\\circ}",
        "description": "La tensione concatenata $V$ è $\\sqrt{3}$ volte la stellata $E$ e anticipa di $30^\\circ$."
      },
      {
        "name": "Equivalenza Stella-Triangolo & Monofase",
        "latex": "Z_Y = \\frac{Z_\\Delta}{3}, \\quad I_L = \\frac{E}{|Z_Y|}",
        "description": "Il monofase equivalente analizza la fase 1 con generatore stellato $E = V/\\sqrt{3}$ e tutti i carichi a stella."
      },
      {
        "name": "Potenze Trifase Simmetriche ed Equilibrate",
        "latex": "P_{3\\phi} = \\sqrt{3} V I_L \\cos\\varphi, \\quad Q_{3\\phi} = \\sqrt{3} V I_L \\sin\\varphi, \\quad S_{3\\phi} = \\sqrt{3} V I_L",
        "description": "Formule in funzione della tensione concatenata $V$ e corrente di linea $I_L$."
      },
      {
        "name": "Metodo di Aron a Due Wattmetri",
        "latex": "P_{3\\phi} = W_1 + W_2, \\quad Q_{3\\phi} = \\sqrt{3}(W_1 - W_2), \\quad \\tan\\varphi = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}",
        "description": "Misura di potenza su sistemi a 3 fili: $W_1 = V I \\cos(30^\\circ - \\varphi)$ e $W_2 = V I \\cos(30^\\circ + \\varphi)$."
      },
      {
        "name": "Rifasamento Trifase a Triangolo",
        "latex": "C_\\Delta = \\frac{P_{3\\phi} (\\tan\\varphi_1 - \\tan\\varphi_2)}{3 \\omega V^2}",
        "description": "Ogni condensatore a triangolo vede la tensione concatenata $V$."
      },
      {
        "name": "Bipoli Operazionali di Laplace (Dominio s)",
        "latex": "\\begin{aligned} \\text{Induttore: } & V_L(s) = sL \\cdot I_L(s) - L \\cdot i_L(0^-) \\\\ \\text{Condensatore: } & V_C(s) = \\frac{1}{sC} \\cdot I_C(s) + \\frac{v_C(0^-)}{s} \\end{aligned}",
        "description": "Modelli Thévenin operazionali che incorporano la memoria iniziale delle variabili di stato."
      },
      {
        "name": "Funzione di Rete & Stabilità Asintotica",
        "latex": "H(s) = \\frac{Y(s)}{X(s)} \\implies \\Re\\{p_k\\} < 0, \\quad \\forall k",
        "description": "Un circuito è asintoticamente stabile se e solo se tutti i poli cadono nel semipiano sinistro aperto."
      }
    ]
  }
];
