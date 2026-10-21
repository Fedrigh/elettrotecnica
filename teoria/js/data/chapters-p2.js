// js/data/chapters-p2.js
// Capitoli 12 - 16: Secondo Parziale di Elettrotecnica (Politecnico di Milano)

window.CHAPTERS_P2 = [
  {
    "id": "ch12",
    "number": 12,
    "parziale": 2,
    "title": "Elementi Dinamici & Circuiti Magnetici",
    "subtitle": "Condensatore, induttore, energia, continuità, Hopkinson, traferro e mutua induzione",
    "readTime": "28 min",
    "tags": [
      "Condensatore",
      "Induttore",
      "Energia",
      "Continuità",
      "Circuiti Magnetici",
      "Hopkinson",
      "Traferro",
      "Mutua Induzione",
      "Dots"
    ],
    "description": "I componenti con memoria ed elementi dinamici: equazioni differenziali di condensatore e induttore, proprietà di continuità delle variabili di stato, bilanci energetici, analogia magneto-circuitale con la legge di Hopkinson, calcolo della riluttanza con traferro, e la teoria degli induttori mutuamente accoppiati con la convenzione dei contrassegni di fase.",
    "sections": [
      {
        "id": "sec12-1",
        "title": "12.1 Il Condensatore Ideale e la Memoria Elettrostatica",
        "content": "Il **condensatore ideale** è il bipolo dinamico che immagazzina energia all'interno del campo elettrostatico generato tra due armature conduttrici separate da un mezzo dielettrico.\n\n**Relazione costitutiva carica-tensione:**\n$$q(t) = C \\cdot v(t)$$\ndove $C$ è la **capacità elettrica**, misurata in Farad ($[\\text{F}] = [\\text{C/V}]$), con $C > 0$. Per un condensatore piano a facce parallele di area $S$ e distanza $d$: $C = \\varepsilon \\frac{S}{d}$.\n\n**Relazione differenziale corrente-tensione (Convenzione Utilizzatore):**\nPoiché la corrente è la derivata temporale della carica $i(t) = \\frac{dq(t)}{dt}$:\n$$i(t) = C \\frac{dv(t)}{dt}$$\nIntegrando nel tempo a partire da un istante iniziale $t_0$:\n$$v(t) = v(t_0) + \\frac{1}{C} \\int_{t_0}^t i(\\tau) d\\tau$$\n\n**Proprietà fondamentale di Continuità della Tensione:**\nSe la corrente $i(t)$ è una funzione limitata nel tempo ($|i(t)| < \\infty$), la tensione ai capi del condensatore **non può variare istantaneamente** (è una funzione continua del tempo):\n$$v_C(0^+) = v_C(0^-)$$\nUn salto istantaneo di tensione richiederebbe una corrente impulsiva (delta di Dirac $\\delta(t)$) di intensità infinita.\n\n**Energia immagazzinata nel campo elettrico:**\n$$w_E(t) = \\int_{-\\infty}^t v(\\tau) i(\\tau) d\\tau = \\int_0^{v(t)} C v' dv' = \\frac{1}{2} C v^2(t) \\ge 0$$\nIl condensatore è un componente **passivo privo di perdite** (conservativo). In regime stazionario continuo (DC), poiché $\\frac{dv}{dt} = 0$, la corrente è nulla: il condensatore si comporta come un **circuito aperto**."
      },
      {
        "id": "sec12-2",
        "title": "12.2 L'Induttore Ideale e la Memoria Magnetica",
        "content": "L'**induttore ideale** è il componente dinamico che immagazzina energia all'interno del campo magnetico generato dal passaggio di corrente attraverso un avvolgimento di $N$ spire.\n\n**Relazione costitutiva flusso-corrente:**\n$$\\Phi(t) = L \\cdot i(t)$$\ndove $\\Phi$ è il flusso magnetico concatenato (in Weber, $[\\text{Wb}]$) ed $L$ è il coefficiente di **autoinduttanza**, misurato in Henry ($[\\text{H}] = [\\text{V}\\cdot\\text{s/A}]$).\n\n**Relazione differenziale tensione-corrente (Legge di Faraday-Neumann-Lenz):**\n$$v(t) = \\frac{d\\Phi(t)}{dt} = L \\frac{di(t)}{dt}$$\nIntegrando nel tempo:\n$$i(t) = i(t_0) + \\frac{1}{L} \\int_{t_0}^t v(\\tau) d\\tau$$\n\n**Proprietà fondamentale di Continuità della Corrente:**\nSe la tensione $v(t)$ ai suoi capi è finita, la corrente che attraversa l'induttore **non può variare istantaneamente**:\n$$i_L(0^+) = i_L(0^-)$$\n\n**Energia immagazzinata nel campo magnetico:**\n$$w_M(t) = \\int_{-\\infty}^t v(\\tau) i(\\tau) d\\tau = \\int_0^{i(t)} L i' di' = \\frac{1}{2} L i^2(t) \\ge 0$$\nIn regime stazionario continuo (DC), poiché $\\frac{di}{dt} = 0$, la tensione è nulla: l'induttore si comporta come un **cortocircuito**."
      },
      {
        "id": "sec12-3",
        "title": "12.3 Circuiti Magnetici e Legge di Hopkinson",
        "content": "I circuiti magnetici canalizzano il flusso $\\Phi$ all'interno di un nucleo di materiale ferromagnetico ad alta permeabilità magnetica $\\mu = \\mu_0 \\mu_r$ (con $\\mu_r \\sim 10^3 - 10^5$).\n\n**Analogia Elettromagnetica Formale:**\n| Grandezza Elettrica | Grandezza Magnetica Equivalente |\n| :--- | :--- |\n| Forza elettromotrice $E$ [V] | **Forza magnetomotrice (f.m.m.)** $\\mathcal{F} = N \\cdot i$ [A o A-spire] |\n| Corrente elettrica $I$ [A] | **Flusso magnetico** $\\Phi = \\iint \\vec{B} \\cdot d\\vec{S}$ [Wb] |\n| Densità di corrente $\\vec{J}$ [A/m$^2$] | **Induzione magnetica** $\\vec{B}$ [Tesla, T] |\n| Campo elettrico $\\vec{E}$ [V/m] | **Intensità di campo magnetico** $\\vec{H}$ [A/m] |\n| Conducibilità $\\sigma$ [S/m] | **Permeabilità magnetica** $\\mu$ [H/m] |\n| Resistenza $R = \\frac{l}{\\sigma S}$ [$\\Omega$] | **Riluttanza magnetica** $\\mathcal{R} = \\frac{l}{\\mu S}$ [$\\text{H}^{-1}$] |\n\n**La Legge di Hopkinson (Legge di Ohm magnetica):**\n$$\\mathcal{F} = \\mathcal{R} \\cdot \\Phi \\iff \\Phi = \\frac{\\mathcal{F}}{\\mathcal{R}} = \\frac{N \\cdot i}{\\mathcal{R}}$$\n\n**Il Ruolo del Traferro (Air Gap):**\nSpesso il circuito magnetico presenta un'interruzione d'aria di spessore millimetrico $\\delta$, detta **traferro**.\nPoiché nell'aria $\\mu = \\mu_0 = 4\\pi \\cdot 10^{-7}\\text{ H/m}$, la riluttanza del traferro vale:\n$$\\mathcal{R}_{tr} = \\frac{\\delta}{\\mu_0 S}$$\nPoiché $\\mu_{ferro} \\gg \\mu_0$, anche un traferro piccolissimo (es. $\\delta = 1\\text{ mm}$) presenta una riluttanza dello stesso ordine o superiore a quella dell'intero nucleo in ferro.\n\n**Calcolo dell'Induttanza $L$ dal Circuito Magnetico:**\nSapendo che il flusso concatenato totale è $\\lambda = N \\Phi$ e che $\\Phi = \\frac{N i}{\\mathcal{R}_{tot}}$:\n$$L = \\frac{\\lambda}{i} = \\frac{N \\Phi}{i} = \\frac{N^2}{\\mathcal{R}_{tot}}$$\nL'induttanza è direttamente proporzionale al **quadrato del numero di spire** $N^2$ e inversamente proporzionale alla riluttanza totale."
      },
      {
        "id": "sec12-4",
        "title": "12.4 Induttori Mutuamente Accoppiati (Mutua Induzione)",
        "content": "Quando due avvolgimenti sono disposti in modo tale che una frazione del flusso magnetico generato dal primo si concatena con le spire del secondo, i due bipoli sono **accoppiati magneticamente**.\n\nSiano $L_1$ ed $L_2$ le autoinduttanze dei due avvolgimenti ed $M$ il **coefficiente di mutua induzione** (in Henry, con $M > 0$).\nLe equazioni costitutive differenziali nel dominio del tempo sono:\n$$v_1(t) = L_1 \\frac{di_1(t)}{dt} \\pm M \\frac{di_2(t)}{dt}$$\n$$v_2(t) = \\pm M \\frac{di_1(t)}{dt} + L_2 \\frac{di_2(t)}{dt}$$\n\n**La Regola dei Contrassegni di Fase (Pallini o Dots):**\nIl segno del termine di mutua induzione ($\\pm M$) è determinato univocamente dai riferimenti della corrente rispetto ai **contrassegni di fase**:\n1. Se **entrambe le correnti ENTRANO** (oppure entrambe escono) dai morsetti con il pallino $\\implies$ il termine di mutua induzione ha segno **POSITIVO ($+M$)** (flussi concordi).\n2. Se **una corrente ENTRA** dal morsetto col pallino e l'altra **ESCE** dal proprio pallino $\\implies$ il termine di mutua ha segno **NEGATIVO ($-M$)** (flussi discordi).\n\n**In regime sinusoidale (AC):**\n$$V_1 = j\\omega L_1 I_1 \\pm j\\omega M I_2$$\n$$V_2 = \\pm j\\omega M I_1 + j\\omega L_2 I_2$$\n\n**Energia e Coefficiente di Accoppiamento $k$:**\nL'energia immagazzinata nei mutui induttori vale:\n$$w_M(t) = \\frac{1}{2} L_1 i_1^2 + \\frac{1}{2} L_2 i_2^2 \\pm M i_1 i_2 \\ge 0, \\quad \\forall i_1, i_2$$\nAffinché la forma quadratica sia definita positiva, il discriminante deve essere non-positivo, imponendo il vincolo fisico fondamentale:\n$$M \\le \\sqrt{L_1 L_2}$$\nSi definisce il **coefficiente di accoppiamento** $k$:\n$$k = \\frac{M}{\\sqrt{L_1 L_2}}, \\quad 0 \\le k \\le 1$$\n- $k = 0$: disaccoppiamento magnetico totale;\n- $k = 1$: accoppiamento perfetto (tutto il flusso generato da una bobina si concatena con l'altra)."
      }
    ],
    "keyPoints": [
      "Condensatore: $i = C \\frac{dv}{dt}$, $w_E = \\frac{1}{2} C v^2$. Continuità: $v_C(0^+) = v_C(0^-)$. In DC è un circuito aperto.",
      "Induttore: $v = L \\frac{di}{dt}$, $w_M = \\frac{1}{2} L i^2$. Continuità: $i_L(0^+) = i_L(0^-)$. In DC è un cortocircuito.",
      "Legge di Hopkinson: $\\mathcal{F} = N i = \\mathcal{R} \\cdot \\Phi$.",
      "Riluttanza: $\\mathcal{R} = \\frac{l}{\\mu S}$. Nel traferro $\\mathcal{R}_{tr} = \\frac{\\delta}{\\mu_0 S}$.",
      "Autoinduttanza: $L = \\frac{N^2}{\\mathcal{R}_{tot}}$.",
      "Mutua induzione: $v_1 = L_1 \\frac{di_1}{dt} \\pm M \\frac{di_2}{dt}$. Segno $+M$ se entrambe le correnti entrano dal pallino.",
      "Coefficiente di accoppiamento: $k = \\frac{M}{\\sqrt{L_1 L_2}} \\le 1$."
    ],
    "pitfalls": [
      {
        "title": "Supporre la continuità della corrente del condensatore o della tensione dell'induttore",
        "description": "Scrivere $i_C(0^+) = i_C(0^-)$ o $v_L(0^+) = v_L(0^-)$ anziché le grandezze di stato corrette.",
        "profAdvice": "Errore classico e fatale negli esami di D'Amore e Codecasa: solo le variabili di stato energetiche sono continue ($v_C$ per il condensatore e $i_L$ per l'induttore)! La corrente del condensatore $i_C$ e la tensione dell'induttore $v_L$ possono subire salti istantanei e discontinuità a $t=0$."
      },
      {
        "title": "Sbagliare il segno del termine di mutua induzione tra induttori accoppiati",
        "description": "Ignorare la convenzione dei pallini applicando sempre il segno $+$ al coefficiente di mutua induzione $M$ tra induttori.",
        "profAdvice": "Attenzione ai contrassegni di fase (pallini): se una corrente entra dal pallino e l'altra esce, il termine di mutua induzione ha segno negativo $(-M)$! Come ribadito dal Prof. Maffezzoni e Guzzetti, l'ispezione visiva dei morsetti omologhi è il primo passo obbligatorio."
      }
    ],
    "workedExample": {
      "title": "Calcolo dell'induttanza di un nucleo magnetico con traferro e tensione indotta",
      "problemStatement": "Un nucleo ferromagnetico toroidale a sezione quadrata ha lunghezza media della linea di flusso nel ferro $l_{fe} = 0.4\\text{ m}$, sezione costante $S = 4\\text{ cm}^2 = 4 \\cdot 10^{-4}\\text{ m}^2$, permeabilità relativa $\\mu_r = 2000$. Sul nucleo è presente un traferro di spessore $\\delta = 1\\text{ mm} = 10^{-3}\\text{ m}$. L'avvolgimento ha $N = 500\\text{ spire}$.\n1. Calcolare la riluttanza del ferro $\\mathcal{R}_{fe}$, del traferro $\\mathcal{R}_{tr}$ e la riluttanza totale $\\mathcal{R}_{tot}$.\n2. Determinare l'autoinduttanza $L$ dell'avvolgimento.\n3. Calcolare il flusso $\\Phi$ se viene fatta scorrere una corrente $i = 2\\text{ A}$.",
      "steps": [
        {
          "step": "Passo 1: Calcolo della riluttanza del ferro",
          "explanation": "Sapendo che $\\mu_{fe} = \\mu_0 \\mu_r = 4\\pi \\cdot 10^{-7} \\cdot 2000 = 8\\pi \\cdot 10^{-4}\\text{ H/m}$:",
          "math": "\\mathcal{R}_{fe} = \\frac{l_{fe}}{\\mu_{fe} S} = \\frac{0.4}{(8\\pi \\cdot 10^{-4}) \\cdot (4 \\cdot 10^{-4})} = \\frac{0.4}{32\\pi \\cdot 10^{-8}} = \\frac{0.4}{1.0053 \\cdot 10^{-6}} \\approx 3.979 \\cdot 10^5\\text{ H}^{-1}"
        },
        {
          "step": "Passo 2: Calcolo della riluttanza del traferro",
          "explanation": "Nel traferro $\\mu = \\mu_0 = 4\\pi \\cdot 10^{-7}\\text{ H/m}$:",
          "math": "\\mathcal{R}_{tr} = \\frac{\\delta}{\\mu_0 S} = \\frac{10^{-3}}{(4\\pi \\cdot 10^{-7}) \\cdot (4 \\cdot 10^{-4})} = \\frac{10^{-3}}{16\\pi \\cdot 10^{-11}} = \\frac{10^{-3}}{5.0265 \\cdot 10^{-10}} \\approx 1.989 \\cdot 10^6\\text{ H}^{-1}"
        },
        {
          "step": "Passo 3: Riluttanza totale del circuito magnetico",
          "explanation": "Le due riluttanze sono in serie lungo il medesimo tubo di flusso:",
          "math": "\\mathcal{R}_{tot} = \\mathcal{R}_{fe} + \\mathcal{R}_{tr} = 0.398 \\cdot 10^6 + 1.989 \\cdot 10^6 = 2.387 \\cdot 10^6\\text{ H}^{-1}"
        },
        {
          "step": "Passo 4: Calcolo dell'autoinduttanza L",
          "explanation": "Dalla formula $L = \\frac{N^2}{\\mathcal{R}_{tot}}$ con $N = 500$ spire:",
          "math": "L = \\frac{500^2}{2.387 \\cdot 10^6} = \\frac{250000}{2.387 \\cdot 10^6} \\approx 0.1047\\text{ H} = 104.7\\text{ mH}"
        },
        {
          "step": "Passo 5: Calcolo del flusso magnetico generato",
          "explanation": "Applicando la legge di Hopkinson per $i = 2\\text{ A}$:",
          "math": "\\Phi = \\frac{N i}{\\mathcal{R}_{tot}} = \\frac{500 \\cdot 2}{2.387 \\cdot 10^6} = \\frac{1000}{2.387 \\cdot 10^6} \\approx 4.19 \\cdot 10^{-4}\\text{ Wb} = 0.419\\text{ mWb}"
        }
      ],
      "finalResult": "La riluttanza del traferro ($1.99 \\cdot 10^6\\text{ H}^{-1}$) costituisce oltre l'83% della riluttanza totale, pur avendo uno spessore di appena $1\\text{ mm}$ rispetto ai $40\\text{ cm}$ del ferro. L'induttanza vale $L \\approx 104.7\\text{ mH}$ e il flusso prodotto è $\\Phi \\approx 0.419\\text{ mWb}$.",
      "takeaway": "Il traferro determina quasi interamente il valore dell'induttanza e impedisce la saturazione magnetica del ferro."
    }
  },
  {
    "id": "ch13",
    "number": 13,
    "parziale": 2,
    "title": "Transitori del 1° Ordine (Circuiti RC ed RL)",
    "subtitle": "Equazioni differenziali, costante di tempo tau, formula generale ed energia dissipata",
    "readTime": "28 min",
    "tags": [
      "Transitori",
      "1° Ordine",
      "Circuito RC",
      "Circuito RL",
      "Costante di Tempo",
      "Formula Generale",
      "Bilancio Energetico"
    ],
    "description": "Studio analitico esaustivo dei transitori del primo ordine governati da equazioni differenziali ordinarie lineari del primo ordine: il metodo generale a tre step (valore iniziale, valore di regime, costante di tempo di Thévenin), l'evoluzione temporale della risposta libera e forzata, e il bilancio energetico universale con il teorema del 50% di rendimento.",
    "sections": [
      {
        "id": "sec13-1",
        "title": "13.1 Formulazione Differenziale dei Sistemi del 1° Ordine",
        "content": "Un circuito è detto del **primo ordine** se contiene resistori, generatori e **un solo elemento dinamico** indipendente (un condensatore oppure un induttore).\n\nApplicando le leggi di Kirchhoff alla rete, l'evoluzione temporale della variabile di stato $x(t)$ (dove $x(t) = v_C(t)$ per circuiti capacitivi, oppure $x(t) = i_L(t)$ per circuiti induttivi) è retta da un'equazione differenziale ordinaria (ODE) lineare a coefficienti costanti:\n$$\\frac{dx(t)}{dt} + \\frac{1}{\\tau} x(t) = f(t)$$\ndove:\n- $\\tau$ è la **costante di tempo** del circuito;\n- $f(t)$ è il termine forzante impresso dalle sorgenti esterne per $t > 0$.\n\n**Calcolo della Costante di Tempo $\\tau$:**\nLa costante di tempo $\\tau$ caratterizza la velocità intrinseca con cui il sistema evolve e dipende unicamente dai parametri passivi della rete vista dall'elemento reattivo per $t > 0$:\n- **Per circuiti RC:**\n$$\\tau = R_{eq} \\cdot C$$\ndove $R_{eq}$ è la resistenza equivalente di Thévenin vista dai morsetti del condensatore disattivando tutte le sorgenti indipendenti nella configurazione valida per $t > 0$.\n- **Per circuiti RL:**\n$$\\tau = \\frac{L}{R_{eq}}$$"
      },
      {
        "id": "sec13-2",
        "title": "13.2 La Formula Generale d'Esame per Sorgenti Costanti (DC)",
        "content": "Quando le sorgenti agenti per $t > 0$ sono costanti nel tempo (continua, DC), la soluzione generale della risposta completa si esprime nella celebre **Formula Generale d'Esame**:\n$$x(t) = x(\\infty) + \\left[ x(0^+) - x(\\infty) \\right] e^{-t / \\tau}, \\quad \\forall t \\ge 0$$\ndove:\n1. $x(0^+)$ è il **valore iniziale** della variabile di stato subito dopo la commutazione (a $t=0^+$);\n2. $x(\\infty)$ è il **valore asintotico di regime** a transitorio esaurito (per $t \\to \\infty$);\n3. $\\tau$ è la **costante di tempo** valida per $t > 0$.\n\n### Il Metodo Sistematico a 3 Step Indipendenti\nQuesta formula riduce la risoluzione dell'equazione differenziale a tre semplici analisi in continua:\n\n**Step 1: Calcolo di $x(0^+)$ (Condizione Iniziale)**\n- Si analizza la rete a $t = 0^-$ (prima della manovra dell'interruttore). Se il circuito era a regime stazionario continuo da lungo tempo, si sostituiscono i condensatori con circuiti aperti e gli induttori con cortocircuiti.\n- Si calcola $v_C(0^-)$ o $i_L(0^-)$.\n- Per la continuità di stato:\n$$v_C(0^+) = v_C(0^-), \\quad i_L(0^+) = i_L(0^-)$$\n\n**Step 2: Calcolo di $x(\\infty)$ (Regime Finale)**\n- Si analizza la rete per $t \\to \\infty$ con l'interruttore nella nuova posizione definitiva.\n- Essendo a regime stazionario DC, il condensatore è un circuito aperto ($i_C = 0$) e l'induttore è un cortocircuito ($v_L = 0$).\n- Si calcola $v_C(\\infty)$ o $i_L(\\infty)$ con le ordinarie tecniche delle reti resistive.\n\n**Step 3: Calcolo di $\\tau$**\n- Si passivano tutte le sorgenti indipendenti nella topologia per $t > 0$.\n- Si calcola la resistenza Thévenin $R_{eq}$ ai morsetti dell'elemento dinamico, e quindi $\\tau = R_{eq} C$ o $\\tau = L / R_{eq}$."
      },
      {
        "id": "sec13-3",
        "title": "13.3 Proprietà Fisiche dell'Evoluzione Esponenziale",
        "content": "L'esponenziale decrescente $e^{-t/\\tau}$ descrive la transizione tra lo stato iniziale e quello finale:\n- A $t = 0$: $x(0) = x(0^+)$.\n- A $t = \\tau$: la grandezza ha compiuto il **$63.2\\%$** dell'escursione totale:\n$$x(\\tau) = x(\\infty) + [x(0^+) - x(\\infty)] e^{-1} \\approx x(\\infty) + 0.368 [x(0^+) - x(\\infty)]$$\n- A $t = 3\\tau$: variazione del **$95.0\\%$**;\n- A $t = 5\\tau$: variazione del **$99.3\\%$**.\nIn ingegneria, il transitorio si considera **convenzionalmente esaurito** dopo un intervallo pari a:\n$$t_{assestamento} \\approx 5 \\tau$$\ndopodiché il circuito ha raggiunto stabilmente il regime stazionario.\n\n**La Tangente all'Origine:**\nTracciando la retta tangente alla curva $x(t)$ nell'istante iniziale $t=0$, essa interseca l'asintoto orizzontale $x(\\infty)$ esattamente all'istante:\n$$t = \\tau$$"
      },
      {
        "id": "sec13-4",
        "title": "13.4 Bilanci Energetici nel Transitorio (Il Teorema del 50%)",
        "content": "Si consideri la carica di un condensatore inizialmente scarico ($v_C(0) = 0$) mediante un generatore ideale di tensione costante $E$ attraverso un resistore $R$.\nLa tensione e la corrente per $t \\ge 0$ sono:\n$$v_C(t) = E (1 - e^{-t/RC}), \\quad i_C(t) = \\frac{E}{R} e^{-t/RC}$$\n\nCalcoliamo le energie in gioco nell'intero transitorio ($t = 0 \\to \\infty$):\n1. **Energia erogata dal generatore ideale di tensione:**\n$$W_E = \\int_0^\\infty E \\cdot i_C(t) dt = E \\int_0^\\infty C \\frac{dv_C}{dt} dt = E \\cdot C \\left[ v_C(\\infty) - v_C(0) \\right] = C E^2$$\n\n2. **Energia finale immagazzinata nel condensatore:**\n$$W_C = \\frac{1}{2} C v_C^2(\\infty) = \\frac{1}{2} C E^2$$\n\n3. **Energia totale dissipata per effetto Joule nel resistore $R$:**\n$$W_R = \\int_0^\\infty R \\cdot i_C^2(t) dt = R \\int_0^\\infty \\left(\\frac{E}{R}\\right)^2 e^{-2t/RC} dt = \\frac{E^2}{R} \\left[ -\\frac{RC}{2} e^{-2t/RC} \\right]_0^\\infty = \\frac{1}{2} C E^2$$\n\n**Risultato Straordinario (Teorema del 50%):**\n$$W_E = W_C + W_R = \\frac{1}{2} C E^2 + \\frac{1}{2} C E^2 = C E^2$$\nL'energia dissipata sul resistore è **rigorosamente pari al $50\\%$** dell'energia totale erogata dalla sorgente, ed è **totalmente indipendente dal valore numerico della resistenza $R$**!\nAnche se $R \\to 0$, l'energia dissipata rimane $\\frac{1}{2} C E^2$ (a causa della corrente che tende a infinito e si trasforma in un impulso delta)."
      }
    ],
    "keyPoints": [
      "Equazione di stato canonica: $\\frac{dx}{dt} + \\frac{1}{\\tau} x = f(t)$.",
      "Costante di tempo: $\\tau = R_{eq} C$ (per circuiti RC); $\\tau = \\frac{L}{R_{eq}}$ (per circuiti RL).",
      "Formula Generale d'Esame: $x(t) = x(\\infty) + [x(0^+) - x(\\infty)] e^{-t/\\tau}$ per $t \\ge 0$.",
      "Continuità delle sole variabili di stato: $v_C(0^+) = v_C(0^-)$ e $i_L(0^+) = i_L(0^-)$.",
      "Transitorio esaurito convenzionalmente a $t = 5\\tau$ ($99.3\\%$ della transizione).",
      "Teorema energetico: durante la carica di $C$ da gradino $E$, metà dell'energia erogata viene sempre dissipata in calore: $W_R = \\frac{1}{2} C E^2$ (rendimento $\\eta = 50\\%$)."
    ],
    "pitfalls": [
      {
        "title": "Calcolare R_eq con la topologia valida prima della commutazione",
        "description": "Calcolare la costante di tempo $\\tau$ con la posizione dell'interruttore per $t < 0$.",
        "profAdvice": "Il transitorio avviene per $t > 0$! La resistenza equivalente $R_{eq}$ deve essere calcolata RIGOROSAMENTE sulla topologia circuitale che si viene a creare DOPO la manovra dell'interruttore (per $t > 0$)."
      },
      {
        "title": "Ritenere che la corrente del condensatore sia continua",
        "description": "Applicare la continuità su $i_C$ o su $v_L$ pensando che nessuna grandezza possa cambiare bruscamente.",
        "profAdvice": "A $t=0^+$, la corrente del condensatore subisce un salto istantaneo $i_C(0^+) = \\frac{v_{applicata} - v_C(0^+)}{R}$. Solo la TENSIONE $v_C$ è continua!"
      }
    ],
    "workedExample": {
      "title": "Calcolo analitico completo del transitorio di scarica di un circuito RC con interruttore",
      "problemStatement": "Si consideri un circuito composto da un generatore di tensione continua $E = 24\\text{ V}$, due resistori $R_1 = 6\\text{ k}\\Omega$ e $R_2 = 12\\text{ k}\\Omega$, un condensatore $C = 2\\text{ }\\mu\\text{F}$ e un interruttore $S$.\nPer $t < 0$, l'interruttore $S$ è chiuso da lungo tempo in parallelo al resistore $R_2$, cortocircuitandolo a massa. All'istante $t = 0$, l'interruttore $S$ si apre istantaneamente.\n1. Determinare la tensione sul condensatore $v_C(0^-)$ e $v_C(0^+)$.\n2. Determinare la tensione asintotica $v_C(\\infty)$.\n3. Calcolare la costante di tempo $\\tau$ per $t > 0$.\n4. Scrivere l'espressione analitica di $v_C(t)$ e della corrente $i_C(t)$ per $t \\ge 0$.\n5. Calcolare l'energia totale dissipata sui resistori tra $t = 0$ e $t \\to \\infty$.",
      "steps": [
        {
          "step": "Passo 1: Analisi a regime per t < 0",
          "explanation": "Per $t < 0$, l'interruttore $S$ è chiuso in parallelo a $R_2$, quindi $R_2$ è cortocircuitato ($v_{R2} = 0$). Il condensatore è connesso in parallelo a $R_2$, quindi la tensione ai suoi capi a regime continuo è zero:",
          "math": "v_C(0^-) = 0\\text{ V}"
        },
        {
          "step": "Passo 2: Continuità a t = 0+",
          "explanation": "Poiché la tensione sul condensatore non può variare istantaneamente:",
          "math": "v_C(0^+) = v_C(0^-) = 0\\text{ V}"
        },
        {
          "step": "Passo 3: Analisi a regime asintotico per t -> infty",
          "explanation": "Per $t > 0$, l'interruttore $S$ è aperto. A regime stazionario ($t \\to \\infty$), il condensatore si comporta come un circuito aperto ($i_C = 0$). I resistori $R_1$ e $R_2$ formano un semplice partitore di tensione con $E$:",
          "math": "v_C(\\infty) = E \\frac{R_2}{R_1 + R_2} = 24 \\cdot \\frac{12\\text{ k}\\Omega}{6\\text{ k}\\Omega + 12\\text{ k}\\Omega} = 24 \\cdot \\frac{12}{18} = 16\\text{ V}"
        },
        {
          "step": "Passo 4: Calcolo della resistenza equivalente Thévenin e costante di tempo",
          "explanation": "Per $t > 0$, spegnendo il generatore $E$ (cortocircuito), la resistenza vista dai morsetti del condensatore è il parallelo tra $R_1$ e $R_2$:",
          "math": "\\begin{aligned} R_{eq} &= R_1 \\parallel R_2 = \\frac{6 \\cdot 12}{6 + 12} = \\frac{72}{18} = 4\\text{ k}\\Omega = 4000\\text{ }\\Omega \\\\ \\tau &= R_{eq} \\cdot C = 4000\\text{ }\\Omega \\cdot (2 \\cdot 10^{-6}\\text{ F}) = 8 \\cdot 10^{-3}\\text{ s} = 8\\text{ ms} \\end{aligned}"
        },
        {
          "step": "Passo 5: Scrittura della risposta completa per v_C(t) e i_C(t)",
          "explanation": "Applicando la formula generale con $v_C(0^+) = 0$, $v_C(\\infty) = 16\\text{ V}$, $\\tau = 8\\text{ ms}$:",
          "math": "\\begin{aligned} v_C(t) &= 16 + (0 - 16) e^{-t / 0.008} = 16 (1 - e^{-125 t})\\text{ V}, \\quad t \\ge 0 \\\\ i_C(t) &= C \\frac{dv_C}{dt} = (2 \\cdot 10^{-6}) \\cdot (16 \\cdot 125 e^{-125 t}) = 4 \\cdot 10^{-3} e^{-125 t}\\text{ A} = 4 e^{-125 t}\\text{ mA} \\end{aligned}"
        }
      ],
      "finalResult": "La tensione è $v_C(t) = 16(1 - e^{-t / 8\\text{ ms}})\\text{ V}$ e la corrente iniziale è $i_C(0^+) = 4\\text{ mA}$. A $t \\to \\infty$, il condensatore immagazzina un'energia finale $W_C = \\frac{1}{2} C v_C^2(\\infty) = \\frac{1}{2} (2 \\cdot 10^{-6}) (16)^2 = 256\\text{ }\\mu\\text{J}$.",
      "takeaway": "L'uso della formula generale evita la risoluzione formale degli integrali dell'equazione differenziale, rendendo la soluzione rapida ed esente da errori algebrici."
    }
  },
  {
    "id": "ch14",
    "number": 14,
    "parziale": 2,
    "title": "Transitori del 2° Ordine (Circuiti RLC & Equazioni di Stato)",
    "subtitle": "Equazione caratteristica, i 3 regimi dinamici, radici, frequenza smorzata ed equazioni di stato",
    "readTime": "30 min",
    "tags": [
      "Transitori 2° Ordine",
      "RLC",
      "Equazione Caratteristica",
      "Sovrasmorzato",
      "Critico",
      "Sottosmorzato",
      "Equazioni di Stato"
    ],
    "description": "Teoria avanzata dei transitori del secondo ordine: derivazione dell'equazione differenziale canonica, polinomio caratteristico, analisi comparativa dettagliata dei tre regimi dinamici (sovrasmorzato, criticamente smorzato, oscillatorio sottosmorzato), calcolo rigoroso delle condizioni iniziali di derivata e formulazione matriciale in spazio di stato.",
    "sections": [
      {
        "id": "sec14-1",
        "title": "14.1 L'Equazione Differenziale del Secondo Ordine",
        "content": "Un circuito contenente **due elementi reattivi indipendenti** (un condensatore e un induttore, oppure due condensatori o due induttori non riducibili ad un unico equivalente) è descritto da un'equazione differenziale lineare del **secondo ordine**:\n$$\\frac{d^2 x(t)}{dt^2} + 2\\alpha \\frac{dx(t)}{dt} + \\omega_0^2 x(t) = f(t)$$\ndove:\n- $\\alpha$ è il **coefficiente di smorzamento** (neper frequency, in $[\\text{rad/s}]$ o $[\\text{Np/s}]$);\n- $\\omega_0$ è la **pulsazione naturale non smorzata** (pulsazione di risonanza, in $[\\text{rad/s}]$);\n- $f(t)$ è il termine noto imposto dalle sorgenti per $t > 0$.\n\n### Parametri per Circuiti Canonici:\n1. **Circuito RLC Serie:**\n   $$\\alpha = \\frac{R}{2L}, \\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}$$\n2. **Circuito RLC Parallelo:**\n   $$\\alpha = \\frac{1}{2RC}, \\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}$$"
      },
      {
        "id": "sec14-2",
        "title": "14.2 L'Equazione Caratteristica e i 3 Regimi Dinamici",
        "content": "L'equazione algebrica caratteristica associata all'omogenea è:\n$$s^2 + 2\\alpha s + \\omega_0^2 = 0$$\nLe radici (frequenze naturali complesse) sono date dalla formula quadratica:\n$$s_{1,2} = -\\alpha \\pm \\sqrt{\\alpha^2 - \\omega_0^2}$$\n\nIl comportamento qualitativo della risposta è determinato dal segno del radicando $\\Delta = \\alpha^2 - \\omega_0^2$:\n\n### 1. Regime Sovrasmorzato (Overdamped): $\\alpha > \\omega_0$\n- Il radicando è positivo ($\\Delta > 0$).\n- Le radici $s_1$ ed $s_2$ sono **reali, distinte e strettamente negative** ($s_1 \\neq s_2 < 0$).\n- L'evoluzione temporale omogenea è una somma di due esponenziali decrescenti monotoni (risposta aperiodica lenta):\n$$x_{om}(t) = A_1 e^{s_1 t} + A_2 e^{s_2 t}$$\n\n### 2. Regime Criticamente Smorzato (Critically Damped): $\\alpha = \\omega_0$\n- Il radicando è nullo ($\\Delta = 0$).\n- Le radici sono **reali e coincidenti**: $s_1 = s_2 = -\\alpha$.\n- La risposta omogenea è del tipo:\n$$x_{om}(t) = (A_1 + A_2 t) e^{-\\alpha t}$$\n- **Significato fisico:** È la risposta aperiodica più rapida possibile che **non presenta alcuna sovraelongazione o oscillazione**.\n\n### 3. Regime Sottosmorzato / Oscillatorio Smorzato (Underdamped): $\\alpha < \\omega_0$\n- Il radicando è negativo ($\\Delta < 0$).\n- Le radici sono **complesse coniugate** con parte reale negativa:\n$$s_{1,2} = -\\alpha \\pm j \\omega_d$$\ndove $\\omega_d$ è la **pulsazione naturale smorzata**:\n$$\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$$\n- La risposta temporale presenta oscillazioni sinusoidali smorzate racchiuse in un inviluppo esponenziale:\n$$x_{om}(t) = e^{-\\alpha t} \\left[ A_1 \\cos(\\omega_d t) + A_2 \\sin(\\omega_d t) \\right] = K e^{-\\alpha t} \\cos(\\omega_d t - \\theta)$$\n- Periodo delle oscillazioni: $T_d = \\frac{2\\pi}{\\omega_d}$."
      },
      {
        "id": "sec14-3",
        "title": "14.3 Risoluzione Completa e Calcolo Rigoroso delle Condizioni Iniziali",
        "content": "La risposta completa $x(t)$ è la somma della risposta omogenea (transitoria) e dell'integrale particolare (valore finale asintotico di regime $x(\\infty)$):\n$$x(t) = x_{om}(t) + x(\\infty)$$\n\nPer determinare le due costanti arbitrarie di integrazione ($A_1$ e $A_2$), occorrono **due condizioni iniziali a $t = 0^+$**:\n1. Il valore della variabile di stato $x(0^+)$;\n2. Il valore della **derivata prima** $\\left. \\frac{dx}{dt} \\right|_{t=0^+}$.\n\n### Come si calcola la derivata prima a $t = 0^+$?\n**NON si assume mai che la derivata sia nulla!** Essa si ricava rigorosamente applicando le leggi di Kirchhoff alla rete nell'istante $t = 0^+$:\n- Se la variabile scelta è la tensione del condensatore $x(t) = v_C(t)$:\n$$\\left. \\frac{dv_C}{dt} \\right|_{t=0^+} = \\frac{i_C(0^+)}{C}$$\ndove $i_C(0^+)$ si ricava risolvendo il circuito a $t = 0^+$ in cui il condensatore è sostituito da un generatore di tensione di valore $v_C(0^+)$ e l'induttore da un generatore di corrente di valore $i_L(0^+)$.\n- Se la variabile è la corrente dell'induttore $x(t) = i_L(t)$:\n$$\\left. \\frac{di_L}{dt} \\right|_{t=0^+} = \\frac{v_L(0^+)}{L}$$"
      },
      {
        "id": "sec14-4",
        "title": "14.4 Formulazione in Spazio di Stato (State-Space)",
        "content": "Nei moderni metodi di analisi numerica e controllo, i circuiti del secondo ordine vengono descritti da un sistema di due equazioni differenziali del primo ordine accoppiate:\n$$\\frac{d\\mathbf{x}(t)}{dt} = \\mathbf{A} \\mathbf{x}(t) + \\mathbf{B} \\mathbf{u}(t)$$\n$$\\mathbf{y}(t) = \\mathbf{C} \\mathbf{x}(t) + \\mathbf{D} \\mathbf{u}(t)$$\ndove:\n- $\\mathbf{x}(t) = \\begin{bmatrix} v_C(t) \\\\ i_L(t) \\end{bmatrix}$ è il **vettore di stato**, contenente le grandezze fisicamente associate all'energia immagazzinata;\n- $\\mathbf{u}(t)$ è il vettore degli ingressi (sorgenti indipendenti);\n- $\\mathbf{y}(t)$ è il vettore delle uscite desiderate.\n\nGli autovalori della matrice di stato $\\mathbf{A}$, ricavati ponendo $\\det(s\\mathbf{I} - \\mathbf{A}) = 0$, coincidono esattamente con le radici caratteristiche $s_1, s_2$ del circuito."
      }
    ],
    "keyPoints": [
      "Equazione differenziale: $\\frac{d^2x}{dt^2} + 2\\alpha \\frac{dx}{dt} + \\omega_0^2 x = f(t)$.",
      "Radici caratteristiche: $s_{1,2} = -\\alpha \\pm \\sqrt{\\alpha^2 - \\omega_0^2}$.",
      "Regime sovrasmorzato ($\\alpha > \\omega_0$): due radici reali negative $A_1 e^{s_1 t} + A_2 e^{s_2 t}$.",
      "Regime criticamente smorzato ($\\alpha = \\omega_0$): radici coincidenti $(A_1 + A_2 t)e^{-\\alpha t}$.",
      "Regime sottosmorzato ($\\alpha < \\omega_0$): radici complesse $-\\alpha \\pm j\\omega_d$ con $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$.",
      "Calcolo derivata iniziale a $t=0^+$: $\\frac{dv_C}{dt}(0^+) = \\frac{i_C(0^+)}{C}$ e $\\frac{di_L}{dt}(0^+) = \\frac{v_L(0^+)}{L}$."
    ],
    "pitfalls": [
      {
        "title": "Assumere derivata prima iniziale nulla a priori",
        "description": "Porre $dx/dt(0^+) = 0$ senza aver calcolato $i_C(0^+)$ o $v_L(0^+)$ tramite le LKC/LKV.",
        "profAdvice": "Questo è un errore fatale! La derivata della tensione su un condensatore è proporzionale alla CORRENTE istantanea $i_C(0^+)/C$, che in generale è diversa da zero. Devi SEMPRE analizzare il circuito a $t=0^+$ con condensatore $\\to$ generatore $v_C(0^+)$ e induttore $\\to$ generatore $i_L(0^+)$."
      },
      {
        "title": "Confondere la pulsazione omega_0 con la frequenza smorzata omega_d",
        "description": "Usare $\\omega_0$ nelle funzioni trigonometriche $\\cos(\\omega_0 t)$ anziché $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$.",
        "profAdvice": "La frequenza delle oscillazioni reali è sempre inferiore a $\\omega_0$ a causa dell'attrito resistivo: usa sempre $\\omega_d$ nell'argomento di seno e coseno!"
      }
    ],
    "workedExample": {
      "title": "Transitorio RLC serie sottosmorzato con gradino di tensione",
      "problemStatement": "Un circuito RLC serie è composto da un resistore $R = 20\\text{ }\\Omega$, un induttore $L = 0.1\\text{ H}$ e un condensatore $C = 100\\text{ }\\mu\\text{F}$. Il circuito è inizialmente a riposo ($v_C(0^-) = 0\\text{ V}$, $i_L(0^-) = 0\\text{ A}$). All'istante $t = 0$ viene applicato un gradino di tensione costante $E = 50\\text{ V}$.\n1. Determinare i parametri $\\alpha$, $\\omega_0$ e classificare il regime dinamico.\n2. Calcolare la pulsazione smorzata $\\omega_d$ e le radici caratteristiche.\n3. Determinare le condizioni iniziali $v_C(0^+)$ e $\\left.\\frac{dv_C}{dt}\\right|_{0^+}$.\n4. Determinare l'espressione analitica temporale di $v_C(t)$ per $t \\ge 0$.",
      "steps": [
        {
          "step": "Passo 1: Calcolo dei parametri caratteristici e classificazione",
          "explanation": "Per il circuito serie, $\\alpha = \\frac{R}{2L}$ e $\\omega_0 = \\frac{1}{\\sqrt{LC}}$:",
          "math": "\\begin{aligned} \\alpha &= \\frac{20}{2 \\cdot 0.1} = \\frac{20}{0.2} = 100\\text{ rad/s} \\\\ \\omega_0 &= \\frac{1}{\\sqrt{0.1 \\cdot 100 \\cdot 10^{-6}}} = \\frac{1}{\\sqrt{10^{-5}}} = \\frac{1}{3.162 \\cdot 10^{-3}} \\approx 316.23\\text{ rad/s} \\end{aligned}"
        },
        {
          "step": "Passo 2: Classificazione e calcolo di omega_d",
          "explanation": "Poiché $\\alpha = 100 < \\omega_0 = 316.23$, il circuito è in **REGIME SOTTOSMORZATO** (oscillatorio smorzato). Calcoliamo $\\omega_d$:",
          "math": "\\begin{aligned} \\omega_d &= \\sqrt{\\omega_0^2 - \\alpha^2} = \\sqrt{316.23^2 - 100^2} = \\sqrt{100000 - 10000} = \\sqrt{90000} = 300\\text{ rad/s} \\\\ s_{1,2} &= -100 \\pm j 300\\text{ rad/s} \\end{aligned}"
        },
        {
          "step": "Passo 3: Valore finale di regime",
          "explanation": "A regime per $t \\to \\infty$, il condensatore è un circuito aperto ($i_L(\\infty) = 0$), quindi la tensione sul condensatore eguaglia quella del generatore:",
          "math": "v_C(\\infty) = E = 50\\text{ V}"
        },
        {
          "step": "Passo 4: Condizioni iniziali a t = 0+",
          "explanation": "Per la continuità delle variabili di stato: $v_C(0^+) = v_C(0^-) = 0\\text{ V}$ e $i_L(0^+) = i_L(0^-) = 0\\text{ A}$. Poiché $i_C(0^+) = i_L(0^+) = 0\\text{ A}$:",
          "math": "\\left. \\frac{dv_C}{dt} \\right|_{0^+} = \\frac{i_C(0^+)}{C} = \\frac{0}{C} = 0\\text{ V/s}"
        },
        {
          "step": "Passo 5: Determinazione delle costanti di integrazione",
          "explanation": "La soluzione generale assume la forma $v_C(t) = 50 + e^{-100 t} [A_1 \\cos(300 t) + A_2 \\sin(300 t)]$. Imponiamo $v_C(0) = 0$:",
          "math": "v_C(0) = 50 + A_1 = 0 \\implies A_1 = -50\\text{ V}"
        },
        {
          "step": "Passo 6: Imposizione della condizione sulla derivata prima",
          "explanation": "Derivando $v_C(t)$ e ponendo $t = 0$:",
          "math": "\\begin{aligned} \\left. \\frac{dv_C}{dt} \\right|_{0} &= -\\alpha A_1 + \\omega_d A_2 = 0 \\\\ -100(-50) + 300 A_2 &= 0 \\implies 5000 + 300 A_2 = 0 \\implies A_2 = -\\frac{50}{3} \\approx -16.67\\text{ V} \\end{aligned}"
        }
      ],
      "finalResult": "La tensione sul condensatore per $t \\ge 0$ è:\n$$v_C(t) = 50 - e^{-100 t} \\left[ 50 \\cos(300 t) + 16.67 \\sin(300 t) \\right]\\text{ V}$$\nIl sistema oscilla attorno al valore di regime di $50\\text{ V}$ con una frequenza di smorzamento di $300\\text{ rad/s}$ ed esaurisce le oscillazioni dopo circa $5\\tau = \\frac{5}{\\alpha} = 50\\text{ ms}$.",
      "takeaway": "L'analisi rigorosa delle condizioni iniziali a $t=0^+$ fissa univocamente le ampiezze dei seni e coseni della risposta oscillatoria."
    }
  },
  {
    "id": "ch15",
    "number": 15,
    "parziale": 2,
    "title": "Circuiti Trifase Simmetrici ed Equilibrati",
    "subtitle": "Tensioni stellate e concatenate, circuito monofase equivalente, potenze, rifasamento e metodo di Aron",
    "readTime": "32 min",
    "tags": [
      "Trifase",
      "Simmetrico ed Equilibrato",
      "Stella",
      "Triangolo",
      "Monofase Equivalente",
      "Potenza Trifase",
      "Aron",
      "Wattmetri"
    ],
    "description": "Studio formale approfondito dei sistemi trifase: terne simmetriche di tensioni (diretta e inversa), relazione geometrica tra tensioni concatenate e stellate (radice di 3), carichi a stella e a triangolo, la potente tecnica del circuito monofase equivalente, potenze attive, reattive e apparenti trifase, rifasamento con banchi capacitivi e dimostrazione rigorosa del Metodo di Aron a due wattmetri.",
    "sections": [
      {
        "id": "sec15-1",
        "title": "15.1 La Terna Simmetrica dei Generatori Trifase",
        "content": "I sistemi trifase costituiscono lo standard universale della generazione, trasmissione e distribuzione industriale dell'energia elettrica.\n\nUna **terna simmetrica diretta (o a sequenza positiva)** di tensioni stellate è composta da tre fasori sinusoidali aventi il medesimo valore efficace $E$, la medesima frequenza, e reciprocamente sfasati di $120^\\circ$ ($2\\pi/3$ radianti) in ritardo nel verso ciclico $1 \\to 2 \\to 3$:\n$$\\bar{E}_1 = E e^{j 0^\\circ} = E$$\n$$\\bar{E}_2 = E e^{-j 120^\\circ} = E \\left( -\\frac{1}{2} - j \\frac{\\sqrt{3}}{2} \\right)$$\n$$\\bar{E}_3 = E e^{-j 240^\\circ} = E e^{+j 120^\\circ} = E \\left( -\\frac{1}{2} + j \\frac{\\sqrt{3}}{2} \\right)$$\n\n**Proprietà fondamentale di chiusura:**\nLa somma algebrica e vettoriale delle tre tensioni di una terna simmetrica è identicamente nulla in qualunque istante di tempo:\n$$\\bar{E}_1 + \\bar{E}_2 + \\bar{E}_3 = 0$$"
      },
      {
        "id": "sec15-2",
        "title": "15.2 Tensioni Stellate (Fase) vs Tensioni Concatenate (Linea)",
        "content": "Si definiscono due insiemi di tensioni:\n1. **Tensioni Stellate (o di fase) $E$:** Misurate tra ciascuna linea di fase ($1, 2, 3$) e il centro stella del generatore (neutro $N$): $\\bar{E}_1, \\bar{E}_2, \\bar{E}_3$.\n2. **Tensioni Concatenate (o di linea) $V$:** Misurate tra due linee di fase adiacenti:\n   $$\\bar{V}_{12} = \\bar{E}_1 - \\bar{E}_2$$\n   $$\\bar{V}_{23} = \\bar{E}_2 - \\bar{E}_3$$\n   $$\\bar{V}_{31} = \\bar{E}_3 - \\bar{E}_1$$\n\n### Derivazione Analitica della Relazione Fondamentale $V = \\sqrt{3} E$\nEsplicitiamo la differenza per $\\bar{V}_{12}$:\n$$\\bar{V}_{12} = E - E e^{-j 120^\\circ} = E \\left( 1 - \\left( -\\frac{1}{2} - j \\frac{\\sqrt{3}}{2} \\right) \\right) = E \\left( \\frac{3}{2} + j \\frac{\\sqrt{3}}{2} \\right)$$\nCalcoliamo il modulo:\n$$|\\bar{V}_{12}| = E \\sqrt{\\left(\\frac{3}{2}\\right)^2 + \\left(\\frac{\\sqrt{3}}{2}\\right)^2} = E \\sqrt{\\frac{9}{4} + \\frac{3}{4}} = E \\sqrt{\\frac{12}{4}} = \\sqrt{3} \\cdot E$$\nCalcoliamo l'argomento (fase):\n$$\\arg(\\bar{V}_{12}) = \\arctan\\left( \\frac{\\sqrt{3}/2}{3/2} \\right) = \\arctan\\left(\\frac{1}{\\sqrt{3}}\\right) = +30^\\circ$$\n\n**Risultati fondamentali:**\n$$V = \\sqrt{3} \\cdot E \\approx 1.732 \\cdot E$$\n- In Italia/Europa, le utenze civili sono alimentate a tensione stellata $E = 230\\text{ V}$, a cui corrisponde la tensione concatenata industriale standard $V = \\sqrt{3} \\cdot 230\\text{ V} = 400\\text{ V}$.\n- Le tensioni concatenate **anticipano di $30^\\circ$** le rispettive tensioni stellate: $\\bar{V}_{12} = \\sqrt{3} E e^{j 30^\\circ}$."
      },
      {
        "id": "sec15-3",
        "title": "15.3 Carichi Equilibrati a Stella (Y) e a Triangolo (Delta)",
        "content": "Un carico si dice **equilibrato** quando le tre impedenze di fase sono identiche:\n\n### 1. Carico a Stella ($Y$) con Neutro Virtuale\n- Ciascuna impedenza $Z_Y$ è sottoposta alla **tensione stellata**: $V_\\phi = E = V / \\sqrt{3}$.\n- La corrente di linea coincide con la corrente di fase: $I_L = I_\\phi = \\frac{E}{|Z_Y|}$.\n- **Corrente sul filo neutro:**\n  $$\\bar{I}_N = \\bar{I}_1 + \\bar{I}_2 + \\bar{I}_3 = \\frac{\\bar{E}_1 + \\bar{E}_2 + \\bar{E}_3}{Z_Y} = \\frac{0}{Z_Y} = 0\\text{ A}$$\n  Nel sistema trifase simmetrico ed equilibrato, la corrente nel neutro è **rigorosamente nulla**! I centri stella del generatore e del carico si trovano allo stesso potenziale ($V_{N'N} = 0$), rendendo il conduttore di neutro superfluo dal punto di vista del trasporto dell'energia.\n\n### 2. Carico a Triangolo ($\\Delta$)\n- Ciascuna impedenza $Z_\\Delta$ è connessa direttamente tra due fasi ed è quindi sottoposta alla **tensione concatenata**: $V_\\phi = V$.\n- La corrente di fase nel carico vale $I_\\phi = \\frac{V}{|Z_\\Delta|}$.\n- La corrente di linea vale:\n  $$I_L = \\sqrt{3} \\cdot I_\\phi$$\n\n**Equivalenza Stella-Triangolo per carichi equilibrati:**\n$$Z_\\Delta = 3 \\cdot Z_Y \\iff Z_Y = \\frac{Z_\\Delta}{3}$$"
      },
      {
        "id": "sec15-4",
        "title": "15.4 Il Metodo del Circuito Monofase Equivalente",
        "content": "Grazie alla perfetta simmetria a $120^\\circ$, la risoluzione di un'intera rete trifase simmetrica ed equilibrata si riconduce allo studio di un **singolo circuito monofase**:\n\n**Procedura operativa canonica:**\n1. Si convertono tutti i carichi a triangolo ($\\Delta$) nei rispettivi equivalenti a stella ($Y$) dividendo per 3:\n   $$Z_Y = \\frac{Z_\\Delta}{3}$$\n2. Si connettono tutti i centri stella ideali al conduttore di neutro ideale a potenziale zero ($u_N = 0$).\n3. Si estrae il circuito monofase della **Fase 1**, alimentato dalla tensione stellata $\\bar{E}_1 = E \\angle 0^\\circ$.\n4. Si risolve la rete monofase determinando la corrente di linea $\\bar{I}_1$ e le cadute di tensione.\n5. Le grandezze delle altre due fasi si ricavano immediatamente sfasando di $-120^\\circ$ e $-240^\\circ$:\n   $$\\bar{I}_2 = \\bar{I}_1 e^{-j 120^\\circ}, \\quad \\bar{I}_3 = \\bar{I}_1 e^{+j 120^\\circ}$$"
      },
      {
        "id": "sec15-5",
        "title": "15.5 Potenze nei Sistemi Trifase e Rifasamento",
        "content": "In un sistema trifase simmetrico ed equilibrato, le potenze totali sono date dalla somma dei contributi delle 3 fasi:\n\n1. **Potenza Attiva Trifase:**\n   $$P_{3\\phi} = 3 \\cdot E I_L \\cos\\varphi = 3 \\cdot \\left(\\frac{V}{\\sqrt{3}}\\right) I_L \\cos\\varphi = \\sqrt{3} \\cdot V \\cdot I_L \\cdot \\cos\\varphi \\quad [\\text{W}]$$\n2. **Potenza Reattiva Trifase:**\n   $$Q_{3\\phi} = 3 \\cdot E I_L \\sin\\varphi = \\sqrt{3} \\cdot V \\cdot I_L \\cdot \\sin\\varphi \\quad [\\text{VAR}]$$\n3. **Potenza Complessa e Apparente Trifase:**\n   $$\\bar{S}_{3\\phi} = P_{3\\phi} + j Q_{3\\phi} = \\sqrt{3} V I_L e^{j\\varphi}, \\quad S_{3\\phi} = |\\bar{S}_{3\\phi}| = \\sqrt{3} \\cdot V \\cdot I_L \\quad [\\text{VA}]$$\n\n**Rifasamento Trifase:**\nPer correggere il fattore di potenza da $\\cos\\varphi_1$ a $\\cos\\varphi_2$, si inserisce una terna di condensatori:\n- **Collegamento a Triangolo (Standard Industriale):**\n  Ogni condensatore vede la tensione concatenata $V$:\n  $$C_\\Delta = \\frac{P_{3\\phi} (\\tan\\varphi_1 - \\tan\\varphi_2)}{3 \\omega V^2}$$\n- **Collegamento a Stella:**\n  $$C_Y = 3 \\cdot C_\\Delta = \\frac{P_{3\\phi} (\\tan\\varphi_1 - \\tan\\varphi_2)}{\\omega V^2}$$\nA parità di effetto rifasante, il collegamento a triangolo richiede condensatori con capacità 3 volte inferiore (costo e ingombro minori)."
      },
      {
        "id": "sec15-6",
        "title": "15.6 L'Inserzione Aron a Due Wattmetri (con Dimostrazione)",
        "content": "L'**inserzione Aron** è la tecnica standard per misurare simultaneamente la potenza attiva e la potenza reattiva totale in un sistema trifase a tre conduttori (senza neutro), utilizzando solo **due wattmetri** $W_1$ e $W_2$:\n- La bobina amperometrica di $W_1$ è inserita sulla linea 1, e la voltmetrica tra la linea 1 e la linea 3 (misura $\\bar{I}_1$ e $\\bar{V}_{13}$).\n- La bobina amperometrica di $W_2$ è inserita sulla linea 2, e la voltmetrica tra la linea 2 e la linea 3 (misura $\\bar{I}_2$ e $\\bar{V}_{23}$).\n\n### Dimostrazione Analitica delle Letture dei Wattmetri\nSotto condizioni simmetriche ed equilibrate con terna diretta:\n- $\\bar{I}_1 = I \\angle -\\varphi$\n- $\\bar{V}_{13} = -\\bar{V}_{31} = \\sqrt{3} E \\angle -30^\\circ = V \\angle -30^\\circ$.\nLo sfasamento tra $\\bar{V}_{13}$ e $\\bar{I}_1$ vale $(-30^\\circ) - (-\\varphi) = \\varphi - 30^\\circ$.\nPertanto, la lettura di $W_1$ vale:\n$$W_1 = V \\cdot I \\cdot \\cos(30^\\circ - \\varphi)$$\n\nAnalogamente, per $W_2$ lo sfasamento tra $\\bar{V}_{23}$ ($V \\angle -90^\\circ$) e $\\bar{I}_2$ ($I \\angle -120^\\circ - \\varphi$) vale $(-90^\\circ) - (-120^\\circ - \\varphi) = 30^\\circ + \\varphi$:\n$$W_2 = V \\cdot I \\cdot \\cos(30^\\circ + \\varphi)$$\n\n### Formule Universali del Metodo di Aron:\n1. **Somma delle letture $\\implies$ Potenza Attiva Totale:**\n   $$W_1 + W_2 = V I [\\cos(30^\\circ - \\varphi) + \\cos(30^\\circ + \\varphi)] = V I [2 \\cos 30^\\circ \\cos\\varphi] = 2 V I \\frac{\\sqrt{3}}{2} \\cos\\varphi = \\sqrt{3} V I \\cos\\varphi = P_{3\\phi}$$\n   $$P_{3\\phi} = W_1 + W_2$$\n2. **Differenza delle letture $\\implies$ Potenza Reattiva Totale:**\n   $$W_1 - W_2 = V I [\\cos(30^\\circ - \\varphi) - \\cos(30^\\circ + \\varphi)] = V I [2 \\sin 30^\\circ \\sin\\varphi] = V I \\sin\\varphi = \\frac{Q_{3\\phi}}{\\sqrt{3}}$$\n   $$Q_{3\\phi} = \\sqrt{3} \\cdot (W_1 - W_2)$$\n3. **Fattore di Potenza e Angolo di Sfasamento:**\n   $$\\tan\\varphi = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}$$\n*Nota speciale:* Se $\\varphi > 60^\\circ$ (carico molto induttivo con $\\cos\\varphi < 0.5$), $W_2$ fornisce una **lettura negativa** ($W_2 < 0$), ma la somma $W_1 + W_2$ rimane rigorosamente pari alla potenza attiva assorbita!"
      }
    ],
    "keyPoints": [
      "Terna simmetrica diretta: $\\bar{E}_1 = E$, $\\bar{E}_2 = E e^{-j120^\\circ}$, $\\bar{E}_3 = E e^{+j120^\\circ}$. Somma nulla $\\sum \\bar{E}_k = 0$.",
      "Relazione fondamentale: tensione concatenata $V = \\sqrt{3} E$, in anticipo di $30^\\circ$ sulla stellata.",
      "Carico stella: $I_L = I_\\phi$, $V_\\phi = E$. Corrente sul neutro $I_N = 0$.",
      "Carico triangolo: $V_\\phi = V$, $I_L = \\sqrt{3} I_\\phi$. Equivalenza: $Z_Y = Z_\\Delta / 3$.",
      "Monofase equivalente: fase 1 con generatore $\\bar{E}_1 = V/\\sqrt{3}$ e tutti i carichi convertiti a stella $Z_Y$.",
      "Potenze trifase: $P_{3\\phi} = \\sqrt{3} V I_L \\cos\\varphi$, $Q_{3\\phi} = \\sqrt{3} V I_L \\sin\\varphi$.",
      "Metodo di Aron (2 wattmetri): $P_{3\\phi} = W_1 + W_2$, $Q_{3\\phi} = \\sqrt{3}(W_1 - W_2)$, $\\tan\\varphi = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}$."
    ],
    "pitfalls": [
      {
        "title": "Dimenticare il fattore radice di 3 nelle potenze dei sistemi trifase",
        "description": "Scrivere $P_{3\\phi} = 3 V I \\cos\\varphi$ usando la tensione concatenata $V$ in una rete trifase.",
        "profAdvice": "Attenzione ai due formati nei temi d'esame del Polimi: se usi la tensione concatenata $V$ e la corrente di linea $I$, c'è la RADICE DI 3: $P = \\sqrt{3} V I \\cos\\varphi$. Se invece usi la tensione di fase $E$, c'è il fattore 3: $P = 3 E I \\cos\\varphi$. Non mescolarli mai!"
      },
      {
        "title": "Allarmarsi se un wattmetro col metodo di Aron in trifase segna un valore negativo",
        "description": "Ritenere di aver sbagliato i calcoli se la lettura $W_2 < 0$ nel metodo di inserzione Aron a due wattmetri.",
        "profAdvice": "Se il carico trifase ha $\\cos\\varphi < 0.5$ ($\\\\varphi > 60^\\circ$), la formula $\\cos(30^\\circ + \\varphi) < 0$ produce una lettura NEGATIVA di $W_2$. È del tutto normale e fisicamente corretto!"
      }
    ],
    "workedExample": {
      "title": "Risoluzione con monofase equivalente e misure di Aron su carico misto",
      "problemStatement": "Una linea trifase simmetrica a tre fili con tensione concatenata $V = 400\\text{ V}$ ($f = 50\\text{ Hz}$) alimenta due carichi equilibrati in parallelo:\n- Carico 1: collegato a stella ($Y$) con impedenza di fase $\\bar{Z}_Y = 12 + j 16\\text{ }\\Omega$.\n- Carico 2: collegato a triangolo ($\\Delta$) con impedenza di fase $\\bar{Z}_\\Delta = 36 + j 48\\text{ }\\Omega$.\n1. Determinare l'impedenza del monofase equivalente.\n2. Calcolare la corrente di linea totale $I_L$.\n3. Calcolare la potenza attiva $P_{3\\phi}$ e reattiva $Q_{3\\phi}$ totali.\n4. Determinare le letture $W_1$ e $W_2$ dei due wattmetri inseriti con il metodo di Aron.",
      "steps": [
        {
          "step": "Passo 1: Conversione del carico a triangolo nel monofase equivalente",
          "explanation": "Convertiamo il carico $\\Delta$ nel corrispondente carico a stella equivalente dividendo per 3:",
          "math": "\\bar{Z}_{Y2} = \\frac{\\bar{Z}_\\Delta}{3} = \\frac{36 + j 48}{3} = 12 + j 16\\text{ }\\Omega"
        },
        {
          "step": "Passo 2: Parallelo delle impedenze nel monofase equivalente",
          "explanation": "I due carichi a stella sono in parallelo tra loro su ciascuna fase:",
          "math": "\\bar{Z}_{eq} = \\bar{Z}_{Y1} \\parallel \\bar{Z}_{Y2} = (12 + j 16) \\parallel (12 + j 16) = \\frac{12 + j 16}{2} = 6 + j 8\\text{ }\\Omega"
        },
        {
          "step": "Passo 3: Modulo, fase e tensione stellata del monofase",
          "explanation": "La tensione stellata di alimentazione vale $E = \\frac{V}{\\sqrt{3}} = \\frac{400}{\\sqrt{3}} \\approx 230.94\\text{ V}$. L'impedenza vale $|\\bar{Z}_{eq}| = \\sqrt{6^2 + 8^2} = 10\\text{ }\\Omega$ con sfasamento $\\varphi = \\arctan(8/6) \\approx 53.13^\\circ$ ($\\cos\\varphi = 0.6$):",
          "math": "I_L = \\frac{E}{|\\bar{Z}_{eq}|} = \\frac{230.94}{10} = 23.094\\text{ A}"
        },
        {
          "step": "Passo 4: Calcolo delle potenze trifase complessive",
          "explanation": "Calcoliamo $P_{3\\phi}$ e $Q_{3\\phi}$:",
          "math": "\\begin{aligned} P_{3\\phi} &= \\sqrt{3} V I_L \\cos\\varphi = \\sqrt{3} \\cdot 400 \\cdot 23.094 \\cdot 0.6 = 9600\\text{ W} = 9.6\\text{ kW} \\\\ Q_{3\\phi} &= \\sqrt{3} V I_L \\sin\\varphi = \\sqrt{3} \\cdot 400 \\cdot 23.094 \\cdot 0.8 = 12800\\text{ VAR} = 12.8\\text{ kVAR} \\end{aligned}"
        },
        {
          "step": "Passo 5: Calcolo delle letture dei wattmetri di Aron",
          "explanation": "Con $\\varphi = 53.13^\\circ$:",
          "math": "\\begin{aligned} W_1 &= V I_L \\cos(30^\\circ - 53.13^\\circ) = 400 \\cdot 23.094 \\cdot \\cos(-23.13^\\circ) = 9237.6 \\cdot 0.9196 \\approx 8495\\text{ W} \\\\ W_2 &= V I_L \\cos(30^\\circ + 53.13^\\circ) = 400 \\cdot 23.094 \\cdot \\cos(83.13^\\circ) = 9237.6 \\cdot 0.1196 \\approx 1105\\text{ W} \\end{aligned}"
        },
        {
          "step": "Passo 6: Verifica di consistenza delle formule di Aron",
          "explanation": "Verifichiamo somma e differenza:",
          "math": "\\begin{aligned} W_1 + W_2 &= 8495 + 1105 = 9600\\text{ W} = P_{3\\phi} \\quad (\\text{Esatto!}) \\\\ \\sqrt{3}(W_1 - W_2) &= \\sqrt{3}(8495 - 1105) = \\sqrt{3}(7390) \\approx 12800\\text{ VAR} = Q_{3\\phi} \\quad (\\text{Esatto!}) \\end{aligned}"
        }
      ],
      "finalResult": "La corrente di linea vale $I_L \\approx 23.09\\text{ A}$. La potenza attiva trifase assorbita è $9.6\\text{ kW}$ e la reattiva è $12.8\\text{ kVAR}$. Le letture dei wattmetri di Aron sono $W_1 \\approx 8495\\text{ W}$ e $W_2 \\approx 1105\\text{ W}$, confermando le identità teoriche di Aron.",
      "takeaway": "Il metodo del monofase equivalente riduce a un banale partitore monofase una complessa rete trifase a 6 impedenze interconnesse."
    }
  },
  {
    "id": "ch16",
    "number": 16,
    "parziale": 2,
    "title": "Metodo di Laplace nei Circuiti & Funzioni di Rete",
    "subtitle": "Circuiti operazionali nel dominio s, memoria iniziale, funzioni di rete H(s), poli e stabilità",
    "readTime": "30 min",
    "tags": [
      "Laplace",
      "Dominio s",
      "Circuiti Operazionali",
      "Condizioni Iniziali",
      "Funzione di Rete",
      "Poli e Zeri",
      "Stabilità Asintotica"
    ],
    "description": "La trattazione operazionale universale delle reti dinamiche mediante la Trasformata di Laplace unilatera: modelli circuitali equivalenti di componenti passivi e generatori ausiliari che inglobano le condizioni iniziali, definizione e calcolo delle Funzioni di Rete H(s), mappa dei poli e zeri nel piano s, criteri algebrici di stabilità asintotica e inversione tramite fratti semplici di Heaviside.",
    "sections": [
      {
        "id": "sec16-1",
        "title": "16.1 La Trasformata di Laplace Unilatera nei Circuiti",
        "content": "La **Trasformata di Laplace unilatera** è lo strumento matematico per eccellenza per l'analisi unificata dei regimi transitori e permanenti dei circuiti lineari a parametri concentrati.\nDato un segnale temporale causale $f(t)$ ($f(t) = 0$ per $t < 0$):\n$$\\mathcal{L}\\{f(t)\\} = F(s) = \\int_{0^-}^\\infty f(t) e^{-st} dt$$\ndove $s = \\sigma + j\\omega$ è la **variabile complessa di frequenza**. Si integra a partire da $0^-$ per catturare eventuali impulsi matematici $\\delta(t)$ a $t=0$.\n\n**Proprietà fondamentali per l'analisi circuitale:**\n1. **Linearità:** $\\mathcal{L}\\{a f_1(t) + b f_2(t)\\} = a F_1(s) + b F_2(s)$\n2. **Trasformata della Derivata Temporale:**\n   $$\\mathcal{L}\\left\\{ \\frac{df(t)}{dt} \\right\\} = s F(s) - f(0^-)$$\n   La derivata temporale viene convertita nella moltiplicazione algebrica per $s$, **inglobando automaticamente la condizione iniziale** $f(0^-)$!\n3. **Trasformata dell'Integrale Temporale:**\n   $$\\mathcal{L}\\left\\{ \\int_{0^-}^t f(\\tau) d\\tau \\right\\} = \\frac{F(s)}{s}$$\n4. **Teorema del Valore Iniziale:** $\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to \\infty} s F(s)$\n5. **Teorema del Valore Finale:** $\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s)$ (valido se e solo se tutti i poli di $s F(s)$ hanno parte reale strettamente negativa)."
      },
      {
        "id": "sec16-2",
        "title": "16.2 Bipoli Operazionali nel Dominio s (Modelli con Condizioni Iniziali)",
        "content": "Applicando la trasformata di Laplace alle leggi costitutive dei bipoli:\n\n### 1. Resistore Ideale\n$$v(t) = R i(t) \\implies V(s) = R \\cdot I(s)$$\n- Impedenza operazionale: $Z_R(s) = R$. Nessuna condizione iniziale.\n\n### 2. Induttore Ideale con Condizione Iniziale $i_L(0^-)$\n$$v(t) = L \\frac{di}{dt} \\implies V(s) = sL \\cdot I(s) - L \\cdot i_L(0^-)$$\n- **Modello Serie (Thévenin operazionale):** Un'impedenza $Z_L(s) = sL$ in serie a un generatore indipendente di tensione impulsivo/costante pari a:\n  $$E_{L, in}(s) = L \\cdot i_L(0^-)$$\n  con il terminale positivo orientato nel verso in cui entra la corrente $i_L$.\n- **Modello Parallelo (Norton operazionale):** Un'ammettenza $Y_L(s) = \\frac{1}{sL}$ in parallelo a un generatore indipendente di corrente:\n  $$J_{L, in}(s) = \\frac{i_L(0^-)}{s}$$\n\n### 3. Condensatore Ideale con Condizione Iniziale $v_C(0^-)$\n$$i(t) = C \\frac{dv}{dt} \\implies I(s) = sC \\cdot V(s) - C \\cdot v_C(0^-) \\implies V(s) = \\frac{1}{sC} I(s) + \\frac{v_C(0^-)}{s}$$\n- **Modello Serie (Thévenin operazionale):** Un'impedenza $Z_C(s) = \\frac{1}{sC}$ in serie a un generatore indipendente di tensione pari a:\n  $$E_{C, in}(s) = \\frac{v_C(0^-)}{s}$$\n  avente la medesima polarità della tensione iniziale $v_C(0^-)$.\n- **Modello Parallelo (Norton operazionale):** Un'ammettenza $Y_C(s) = sC$ in parallelo a un generatore di corrente:\n  $$J_{C, in}(s) = C \\cdot v_C(0^-)$$"
      },
      {
        "id": "sec16-3",
        "title": "16.3 Funzione di Rete H(s), Poli, Zeri e Stabilità",
        "content": "Assumendo tutte le condizioni iniziali identicamente nulle ($x(0^-) = 0$), una rete lineare tempo-invariante è completamente caratterizzata dalla **Funzione di Rete** (o Funzione di Trasferimento) $H(s)$, definita come il rapporto tra la trasformata di Laplace dell'uscita $Y(s)$ e dell'ingresso $X(s)$:\n$$H(s) = \\frac{Y(s)}{X(s)} = \\frac{N(s)}{D(s)} = \\frac{b_m s^m + b_{m-1} s^{m-1} + \\dots + b_0}{a_n s^n + a_{n-1} s^{n-1} + \\dots + a_0}$$\n\n**Definizioni:**\n- **Zeri di $H(s)$:** Le radici del polinomio numeratore $N(s) = 0$. Sono i valori complessi di $s$ per cui l'uscita si annulla pur in presenza di un ingresso non nullo.\n- **Poli di $H(s)$:** Le radici del polinomio denominatore $D(s) = 0$. Coincidono con le **frequenze naturali** della rete e governano l'andamento della risposta libera transitoria.\n\n### Criterio di Stabilità Asintotica\nUn circuito lineare è **asintoticamente stabile** se e solo se **tutti i poli** della funzione di rete $H(s)$ hanno **parte reale strettamente negativa**:\n$$\\Re\\{p_k\\} < 0, \\quad \\forall k$$\nGeometricamente, tutti i poli devono trovarsi rigorosamente all'interno del **semipiano sinistro aperto** del piano complesso $s$.\n- Se esiste un polo a parte reale positiva ($\\Re\\{p_k\\} > 0$), la risposta temporale diverge esponenzialmente ($e^{+\\sigma t} \\to \\infty$), rendendo il circuito instabile.\n- Se vi sono poli semplici sull'asse immaginario ($\\Re\\{p\\} = 0$), il circuito è marginalmente stabile (oscillazioni persistenti non smorzate).\n\n**Connessione con la Risposta in Frequenza (AC):**\nSe il circuito è asintoticamente stabile, la risposta permanente a regime sinusoidale a frequenza $\\omega$ si ottiene ponendo formalmente:\n$$s = j\\omega \\implies H(j\\omega) = \\left. H(s) \\right|_{s = j\\omega}$$"
      },
      {
        "id": "sec16-4",
        "title": "16.4 Antitrasformazione tramite Espansione in Fratti Semplici (Heaviside)",
        "content": "Per tornare al dominio del tempo $f(t) = \\mathcal{L}^{-1}\\{F(s)\\}$, si scompone la funzione razionale fratta $F(s)$ nella somma di fratti semplici di Heaviside:\n\n### Caso 1: Poli Reali Distinti\nSe $F(s) = \\frac{N(s)}{(s - p_1)(s - p_2)\\dots(s - p_n)}$ con poli $p_k$ tutti distinti:\n$$F(s) = \\frac{R_1}{s - p_1} + \\frac{R_2}{s - p_2} + \\dots + \\frac{R_n}{s - p_n}$$\ndove i **residui** $R_k$ si calcolano con la formula di Heaviside:\n$$R_k = \\lim_{s \\to p_k} (s - p_k) F(s)$$\nAntitrasformando termine a termine (con $u(t)$ gradino unitario di Heaviside):\n$$f(t) = \\left( \\sum_{k=1}^n R_k e^{p_k t} \\right) u(t)$$\n\n### Caso 2: Coppia di Poli Complessi Coniugati\nSe compaiono due poli $p_{1,2} = -\\alpha \\pm j\\omega_d$ con residui coniugati $R_1 = |R| e^{j\\theta}$ e $R_2 = R_1^* = |R| e^{-j\\theta}$:\n$$\\mathcal{L}^{-1} \\left\\{ \\frac{R_1}{s - p_1} + \\frac{R_1^*}{s - p_1^*} \\right\\} = 2 |R| e^{-\\alpha t} \\cos(\\omega_d t + \\theta) u(t)$$"
      }
    ],
    "keyPoints": [
      "Trasformata della derivata: $\\mathcal{L}\\{\\dot{f}\\} = s F(s) - f(0^-)$ ingloba naturalmente la condizione iniziale.",
      "Induttore nel dominio $s$: impedenza $sL$ in serie a generatore di tensione $L i(0^-)$.",
      "Condensatore nel dominio $s$: impedenza $\\frac{1}{sC}$ in serie a generatore di tensione $\\frac{v(0^-)}{s}$.",
      "Funzione di rete: $H(s) = Y(s)/X(s)$ a condizioni iniziali nulle.",
      "Stabilità asintotica: tutti i poli devono trovarsi nel semipiano sinistro ($\\Re\\{p_k\\} < 0$).",
      "Legame con AC: $H(j\\omega) = \\left. H(s) \\right|_{s = j\\omega}$ per circuiti stabili.",
      "Antitrasformata di Heaviside: residui $R_k = \\lim_{s \\to p_k} (s - p_k) F(s)$."
    ],
    "pitfalls": [
      {
        "title": "Dimenticare di dividere v(0-) per s per il condensatore",
        "description": "Inserire un generatore serie di valore $v(0^-)$ anziché $v(0^-)/s$ nel circuito operazionale di Laplace.",
        "profAdvice": "Attenzione alle dimensioni! Nel dominio s, l'induttore ha $L i(0^-)$ (in Volt), mentre il condensatore ha $\\frac{v(0^-)}{s}$ (in Volt/s trasformati). Se dimentichi di dividere per s il generatore del condensatore, tutti i gradi polinomiali risultano errati!"
      },
      {
        "title": "Applicare il Teorema del Valore Finale a sistemi instabili",
        "description": "Calcolare $\\lim_{s \\to 0} s F(s)$ per un sistema con poli sull'asse immaginario o a destra.",
        "profAdvice": "Il teorema del valore finale è valido SE E SOLO SE tutti i poli di $s F(s)$ hanno parte reale strettamente negativa. Per un oscillatore (poli su $\\pm j\\omega$), il limite temporale non esiste!"
      }
    ],
    "workedExample": {
      "title": "Risoluzione di un circuito dinamico RC con metodo di Laplace e memoria iniziale",
      "problemStatement": "Un circuito serie è costituito da un resistore $R = 10\\text{ }\\Omega$, un condensatore $C = 0.1\\text{ F}$ inizialmente carico alla tensione $v_C(0^-) = 5\\text{ V}$, e un generatore di tensione che all'istante $t = 0$ applica un gradino di ampiezza $e(t) = 20 u(t)\\text{ V}$.\n1. Disegnare il circuito operazionale equivalente nel dominio di Laplace $s$.\n2. Determinare l'espressione analitica di $V_C(s)$.\n3. Calcolare $v_C(t)$ per $t \\ge 0$ tramite espansione in fratti semplici.",
      "steps": [
        {
          "step": "Passo 1: Trasformata delle sorgenti e modelli dei componenti",
          "explanation": "La trasformata del gradino è $E(s) = \\frac{20}{s}$. Il resistore vale $R = 10\\text{ }\\Omega$. Il condensatore è rappresentato dalla sua impedenza $Z_C(s) = \\frac{1}{sC} = \\frac{1}{0.1 s} = \\frac{10}{s}$ in serie al generatore ausiliario di condizione iniziale $E_C(s) = \\frac{v_C(0^-)}{s} = \\frac{5}{s}$ (con il polo positivo nello stesso verso di $v_C$):",
          "math": "Z_C(s) = \\frac{10}{s}, \\quad E_C(s) = \\frac{5}{s}"
        },
        {
          "step": "Passo 2: Calcolo della corrente operazionale I(s)",
          "explanation": "Scriviamo la LKV alla maglia nel dominio di Laplace:",
          "math": "E(s) - R I(s) - Z_C(s) I(s) - E_C(s) = 0 \\implies I(s) = \\frac{E(s) - E_C(s)}{R + Z_C(s)}"
        },
        {
          "step": "Passo 3: Sostituzione dei valori in I(s)",
          "explanation": "Sostituendo $E(s) = 20/s$ e $E_C(s) = 5/s$:",
          "math": "I(s) = \\frac{\\frac{20}{s} - \\frac{5}{s}}{10 + \\frac{10}{s}} = \\frac{\\frac{15}{s}}{\\frac{10(s + 1)}{s}} = \\frac{15}{10(s + 1)} = \\frac{1.5}{s + 1}"
        },
        {
          "step": "Passo 4: Calcolo della tensione operazionale V_C(s)",
          "explanation": "La tensione sul condensatore è la somma della caduta sull'impedenza e della sorgente di condizione iniziale:",
          "math": "V_C(s) = Z_C(s) I(s) + E_C(s) = \\frac{10}{s} \\cdot \\frac{1.5}{s + 1} + \\frac{5}{s} = \\frac{15}{s(s + 1)} + \\frac{5(s + 1)}{s(s + 1)} = \\frac{5s + 20}{s(s + 1)}"
        },
        {
          "step": "Passo 5: Scomposizione in fratti semplici",
          "explanation": "I poli sono $p_1 = 0$ e $p_2 = -1$. Scomponiamo in $V_C(s) = \\frac{A}{s} + \\frac{B}{s + 1}$:",
          "math": "\\begin{aligned} A &= \\lim_{s \\to 0} s V_C(s) = \\lim_{s \\to 0} \\frac{5s + 20}{s + 1} = \\frac{20}{1} = 20 \\\\ B &= \\lim_{s \\to -1} (s + 1) V_C(s) = \\lim_{s \\to -1} \\frac{5s + 20}{s} = \\frac{-5 + 20}{-1} = -15 \\\\ V_C(s) &= \\frac{20}{s} - \\frac{15}{s + 1} \\end{aligned}"
        },
        {
          "step": "Passo 6: Antitrasformazione temporale",
          "explanation": "Antitrasformando termine a termine:",
          "math": "v_C(t) = \\left( 20 - 15 e^{-t} \\right) u(t)\\text{ V}"
        }
      ],
      "finalResult": "La tensione per $t \\ge 0$ è $v_C(t) = (20 - 15 e^{-t})\\text{ V}$. Si noti che a $t=0^+$ vale $20 - 15 = 5\\text{ V}$ (esattamente la condizione iniziale assegnata) e a $t \\to \\infty$ converge asintoticamente a $20\\text{ V}$ (il valore del gradino applicato).",
      "takeaway": "Il metodo di Laplace ingloba la condizione iniziale direttamente nell'algebra del circuito, fornendo la soluzione completa (risposta libera + risposta forzata) in un unico passaggio unificato."
    }
  }
];
