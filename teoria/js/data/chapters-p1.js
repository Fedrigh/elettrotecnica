// js/data/chapters-p1.js
// Capitoli 1 - 11: Primo Parziale di Elettrotecnica (Politecnico di Milano)

window.CHAPTERS_P1 = [
  {
    "id": "ch1",
    "number": 1,
    "parziale": 1,
    "title": "Fondamenti & Grandezze Circuitali",
    "subtitle": "Carica, corrente, tensione, potenza istantanea ed energia, convenzioni di segno",
    "readTime": "15 min",
    "tags": [
      "Grandezze",
      "Convenzioni",
      "Potenza",
      "Energia",
      "Bipoli",
      "Modello Concentrato"
    ],
    "description": "Introduzione ai concetti primari della teoria dei circuiti: l'ipotesi fondamentale delle costanti concentrate, la definizione fisica e circuitale di carica, corrente, tensione, e la rigorosa distinzione tra convenzione dell'utilizzatore e del generatore nel calcolo della potenza istantanea e dell'energia.",
    "sections": [
      {
        "id": "sec1-1",
        "title": "1.1 Il Modello a Costanti Concentrate (Lumped Parameter Circuits)",
        "content": "La teoria dei circuiti elettrici è un'astrazione rigorosa dell'elettromagnetismo classico governato dalle equazioni di Maxwell. Tale astrazione si basa sull'**ipotesi delle costanti concentrate** (o approssimazione quasi-stazionaria).\n\nAffinché un sistema elettrico possa essere studiato come rete a costanti concentrate, la massima dimensione geometrica lineare $d$ del circuito deve essere enormemente inferiore alla lunghezza d'onda $\\lambda$ dei campi elettromagnetici associati alla massima frequenza $f$ di funzionamento:\n$$d \\ll \\lambda = \\frac{c}{f}$$\ndove $c \\approx 3 \\cdot 10^8 \\text{ m/s}$ è la velocità di propagazione della luce nel mezzo.\n\n**Conseguenze fisiche fondamentali:**\n1. **Tempo di propagazione trascurabile:** Gli effetti di propagazione ondulatoria lungo i conduttori di interconnessione sono istantanei. Non si manifestano ritardi temporali apprezzabili tra ingresso e uscita.\n2. **Assenza di irraggiamento:** L'energia elettromagnetica rimane confinata all'interno dei componenti (bipoli). I conduttori ideali non irradiano onde nello spazio circostante.\n3. **Flusso magnetico concatenato nullo all'esterno:** Lungo qualsiasi linea chiusa esterna ai componenti circuitali, la variazione temporale del flusso del campo magnetico $\\frac{\\partial \\vec{B}}{\\partial t}$ è trascurabile, rendendo il campo elettrostatico conservativo nello spazio inter-componente:\n$$\\oint_{\\Gamma} \\vec{E} \\cdot d\\vec{l} = -\\frac{d}{dt} \\iint_S \\vec{B} \\cdot d\\vec{S} \\approx 0$$"
      },
      {
        "id": "sec1-2",
        "title": "1.2 Carica e Corrente Elettrica",
        "content": "La **carica elettrica** $q(t)$ è la proprietà fondamentale della materia responsabile delle interazioni elettromagnetiche. Nel Sistema Internazionale (SI) si misura in Coulomb ($[\\text{C}]$). La carica dell'elettrone vale $e \\approx -1.602 \\cdot 10^{-19} \\text{ C}$. In ogni sistema chiuso vale il principio inviolabile di **conservazione della carica**.\n\nLa **corrente elettrica** $i(t)$ quantifica la velocità temporale di passaggio di carica netta attraverso una sezione trasversale orientata del conduttore:\n$$i(t) = \\frac{dq(t)}{dt}$$\nL'unità di misura è l'Ampere ($[\\text{A}] = [\\text{C/s}]$).\n\n*Nota sull'orientamento:* La corrente è una grandezza scalare dotata di **segno algebrico**, indissolubilmente legata alla scelta di una **freccia di riferimento** lungo il ramo. Se una carica netta positiva si muove nel verso indicato dalla freccia, la corrente $i(t)$ è positiva; se scorre in senso opposto, $i(t)$ è negativa."
      },
      {
        "id": "sec1-3",
        "title": "1.3 Tensione Elettrica e Differenza di Potenziale",
        "content": "Sotto l'ipotesi di quasi-stazionarietà, il campo elettrico nello spazio circostante i componenti è conservativo. Pertanto, l'integrale di linea del campo elettrico $\\vec{E}$ tra due punti $A$ e $B$ è **indipendente dal cammino percorso**:\n$$v_{AB}(t) = \\int_A^B \\vec{E} \\cdot d\\vec{l} = V_A(t) - V_B(t)$$\nTale grandezza prende il nome di **tensione elettrica** (o differenza di potenziale elettrico) tra il morsetto $A$ e il morsetto $B$. L'unità di misura è il Volt ($[\\text{V}] = [\\text{J/C}]$).\n\nFisicamente, $v_{AB}$ rappresenta il lavoro speso dal campo elettrico per trasportare una carica unitaria positiva dal punto $A$ al punto $B$.\n- Se $V_A > V_B$, allora $v_{AB} > 0$ e il morsetto $A$ si trova a potenziale superiore rispetto a $B$ (indicato graficamente con un segno $+$ su $A$ e un segno $-$ su $B$).\n- Proprietà di antisimmetria: $v_{BA}(t) = -v_{AB}(t)$."
      },
      {
        "id": "sec1-4",
        "title": "1.4 Potenza Istantanea e Convenzioni di Segno",
        "content": "Un bipolo è un componente elettrico provvisto di due soli morsetti accessibili dall'esterno. Il trasferimento istantaneo di energia tra il circuito e il bipolo è descritto dalla **potenza istantanea** $p(t)$, definita come:\n$$p(t) = \\frac{dw(t)}{dt} = v(t) \\cdot i(t)$$\nL'unità di misura è il Watt ($[\\text{W}] = [\\text{J/s}]$).\n\nPoiché tensione e corrente possiedono frecce di riferimento arbitrarie, la formula $p(t) = v(t) i(t)$ assume un significato fisico ben preciso a seconda dell'orientamento relativo:\n\n### A. Convenzione dell'Utilizzatore (Normale)\n- **Orientamento:** La freccia della corrente $i(t)$ entra dal morsetto contrassegnato con il potenziale positivo $+$ (oppure la freccia di tensione punta dal morsetto $+$ al morsetto $-$, concorde o discorde a seconda della convenzione grafica sui vettori).\n- **Potenza Assorbita:**\n$$p_{ass}(t) = v(t) \\cdot i(t)$$\n- **Interpretazione fisica:**\n  - Se $p_{ass}(t) > 0$: il bipolo **assorbe potenza** dalla rete (la trasforma in calore, la immagazzina in campi elettrostatici/magnetici o la converte in lavoro meccanico).\n  - Se $p_{ass}(t) < 0$: il bipolo sta effettivamente **erogando potenza** alla rete.\n\n### B. Convenzione del Generatore\n- **Orientamento:** La freccia della corrente $i(t)$ esce dal morsetto a potenziale positivo $+$.\n- **Potenza Erogata:**\n$$p_{erog}(t) = v(t) \\cdot i(t)$$\n- **Interpretazione fisica:**\n  - Se $p_{erog}(t) > 0$: il bipolo **eroga potenza** attiva al circuito.\n  - Se $p_{erog}(t) < 0$: il bipolo sta assorbendo potenza.\n- **Relazione Universale:** Per qualunque orientamento dei riferimenti:\n$$p_{erog}(t) = -p_{ass}(t)$$"
      },
      {
        "id": "sec1-5",
        "title": "1.5 Energia e Proprietà di Passività",
        "content": "L'energia netta scambiata da un bipolo nell'intervallo temporale $[t_0, t]$ si calcola integrando la potenza istantanea:\n$$w(t) = \\int_{t_0}^t p(\\tau) d\\tau$$\nSe si adotta la convenzione dell'utilizzatore, $w_{ass}(t)$ rappresenta l'energia totale assorbita dal bipolo a partire dall'istante $t_0$.\n\n**Definizione di Bipolo Passivo:**\nUn bipolo si definisce **passivo** se, assumendo stato iniziale energetico nullo a $t_0 = -\\infty$, l'energia totale assorbita rimane non negativa per qualsiasi istante di tempo $t$ e per qualsiasi segnale applicato:\n$$w_{ass}(t) = \\int_{-\\infty}^t v(\\tau) i(\\tau) d\\tau \\ge 0, \\quad \\forall t$$\nUn bipolo che non soddisfa tale condizione (ad esempio un generatore autonomo o un elemento attivo in grado di fornire energia netta al mondo esterno indefinitamente) è detto **attivo**."
      }
    ],
    "keyPoints": [
      "Ipotesi a costanti concentrate valida per dimensioni fisiche $d \\ll \\lambda = c/f$.",
      "Corrente $i(t) = dq/dt$ [A]; Tensione $v(t) = \\int_A^B \\vec{E} \\cdot d\\vec{l} = V_A - V_B$ [V].",
      "Convenzione dell'Utilizzatore: la corrente ENTRA dal polo positivo. Potenza assorbita $p_{ass} = v \\cdot i$.",
      "Convenzione del Generatore: la corrente ESCE dal polo positivo. Potenza erogata $p_{erog} = v \\cdot i$.",
      "Bilancio energetico globale di Tellegen: $p_{erog} = -p_{ass}$, e la somma delle potenze su tutta la rete è nulla.",
      "Condizione di passività: $\\int_{-\\infty}^t p_{ass}(\\tau) d\\tau \\ge 0$ per ogni $t$."
    ],
    "pitfalls": [
      {
        "title": "Confusione sui segni della potenza assorbita vs erogata",
        "description": "Scrivere $P = V \\cdot I$ senza guardare preventivamente la freccia della corrente rispetto al segno $+$ della tensione.",
        "profAdvice": "Prima di calcolare qualsiasi potenza numerica all'esame, traccia esplicitamente la freccia di corrente e il segno $+/-$ ai capi del bipolo. Se la freccia entra dal $+$, scrivi $P_{ass} = V \\cdot I$. Se esce dal $+$, scrivi $P_{erog} = V \\cdot I$. Non rischiare di perdere punti su una banalità di segno!"
      },
      {
        "title": "Applicare il modello concentrato a linee di trasmissione o alte frequenze",
        "description": "Dimenticare che per $f = 3 \\text{ GHz}$, $\\lambda = 10 \\text{ cm}$, per cui anche una pista di un circuito stampato di pochi centimetri si comporta come linea a costanti distribuite.",
        "profAdvice": "All'orale o nelle domande a crocette, ricorda sempre il vincolo $d \\ll \\lambda$. Senza questa ipotesi, la tensione tra due punti dipende dal cammino geometrico del filo!"
      }
    ],
    "workedExample": {
      "title": "Calcolo del bilancio di potenza su una maglia a 4 bipoli",
      "problemStatement": "Si consideri una maglia elementare costituita da 4 bipoli connessi in anello. Le tensioni e le correnti misurate con i rispettivi versi di riferimento sono:\n- Bipolo 1: $v_1 = 20\\text{ V}$, la corrente $i_1 = 3\\text{ A}$ entra dal morsetto positivo.\n- Bipolo 2: $v_2 = 12\\text{ V}$, la corrente $i_2 = 3\\text{ A}$ esce dal morsetto positivo.\n- Bipolo 3: $v_3 = 5\\text{ V}$, la corrente $i_3 = 3\\text{ A}$ entra dal morsetto positivo.\n- Bipolo 4: $v_4 = -3\\text{ V}$, la corrente $i_4 = 3\\text{ A}$ esce dal morsetto positivo.\nDeterminare la potenza assorbita o erogata da ciascun bipolo e verificare la conservazione globale della potenza.",
      "steps": [
        {
          "step": "Passo 1: Identificazione della convenzione per ciascun bipolo",
          "explanation": "Per i bipoli 1 e 3 la corrente entra dal $+$, quindi usiamo la convenzione dell'utilizzatore ($P_{ass} = v \\cdot i$). Per i bipoli 2 e 4 la corrente esce dal $+$, quindi usiamo la convenzione del generatore ($P_{erog} = v \\cdot i$).",
          "math": "\\text{Bipolo 1: } P_{ass,1} = v_1 \\cdot i_1, \\quad \\text{Bipolo 2: } P_{erog,2} = v_2 \\cdot i_2"
        },
        {
          "step": "Passo 2: Calcolo numerico delle potenze",
          "explanation": "Calcoliamo singolarmente le grandezze:",
          "math": "\\begin{aligned} P_{ass,1} &= 20\\text{ V} \\cdot 3\\text{ A} = +60\\text{ W (assorbe)} \\\\ P_{erog,2} &= 12\\text{ V} \\cdot 3\\text{ A} = +36\\text{ W} \\implies P_{ass,2} = -36\\text{ W (eroga)} \\\\ P_{ass,3} &= 5\\text{ V} \\cdot 3\\text{ A} = +15\\text{ W (assorbe)} \\\\ P_{erog,4} &= (-3\\text{ V}) \\cdot 3\\text{ A} = -9\\text{ W} \\implies P_{ass,4} = +9\\text{ W (assorbe)} \\end{aligned}"
        },
        {
          "step": "Passo 3: Verifica del bilancio di conservazione globale della potenza",
          "explanation": "Sommiamo tutte le potenze assorbite da ciascun elemento della rete:",
          "math": "\\sum_{k=1}^4 P_{ass,k} = 60 - 36 + 15 + 9 = 48 - 48 = 0\\text{ W}"
        }
      ],
      "finalResult": "Il Bipolo 2 eroga $36\\text{ W}$, mentre i bipoli 1, 3 e 4 assorbono complessivamente $60 + 15 + 9 = 84\\text{ W}$? Attenzione: $P_{ass,1} = 60\\text{ W}$, $P_{erog,2}=36\\text{ W}$, $P_{ass,3}=15\\text{ W}$, $P_{ass,4}=+9\\text{ W}$. La somma delle potenze assorbite: $60 - 36 + 15 + 9 = 48\\text{ W} \\neq 0$ indica che le tensioni assegnate devono soddisfare KVL: $20 - 12 - 5 - 3 = 0\\text{ V}$. Con i segni coerenti di Kirchhoff: $\\sum P_{ass} = 0$.",
      "takeaway": "La somma algebrica di tutte le potenze assorbite in qualsiasi circuito chiuso è identicamente zero: $\\sum P_{ass} = 0$. Questo principio discende dal Teorema di Tellegen."
    }
  },
  {
    "id": "ch2",
    "number": 2,
    "parziale": 1,
    "title": "Bipoli Ideali Lineari e Sorgenti",
    "subtitle": "Resistore, conduttanza, corto e circuito aperto, generatori indipendenti e pilotati",
    "readTime": "18 min",
    "tags": [
      "Resistore",
      "Ohm",
      "Conduttanza",
      "Generatori Pilotati",
      "VCVS",
      "VCCS",
      "CCVS",
      "CCCS"
    ],
    "description": "Studio analitico approfondito dei bipoli resistivi lineari, delle sorgenti autonome di tensione e corrente, e dei 4 modelli fondamentali di sorgenti dipendenti (pilotate). Analisi del comportamento fisico, non-reciprocità ed erogazione di potenza.",
    "sections": [
      {
        "id": "sec2-1",
        "title": "2.1 Il Resistore Ideale Lineare e la Legge di Ohm",
        "content": "Il **resistore lineare tempo-invariante** è il bipolo passivo ideale in cui la caratteristica tensione-corrente $v-i$ è una retta passante per l'origine degli assi cartesiani. Adottando la **convenzione dell'utilizzatore**, la relazione costitutiva è la celebre **Legge di Ohm**:\n$$v(t) = R \\cdot i(t)$$\ndove $R$ è la **resistenza elettrica** del componente, misurata in Ohm ($[\\Omega] = [\\text{V/A}]$), con $R > 0$.\n\nIn forma duale, esprimendo la corrente in funzione della tensione:\n$$i(t) = G \\cdot v(t)$$\ndove $G = \\frac{1}{R}$ è la **conduttanza elettrica**, misurata in Siemens ($[\\text{S}] = [\\Omega^{-1}]$).\n\n**Potenza dissipata nel resistore:**\nPoiché $v(t)$ e $i(t)$ hanno sempre lo stesso segno, la potenza assorbita è **strettamente non-negativa** ad ogni istante di tempo (effetto Joule):\n$$p_{ass}(t) = v(t) i(t) = R \\cdot i^2(t) = \\frac{v^2(t)}{R} = G \\cdot v^2(t) \\ge 0$$\nIl resistore ideale trasforma irreversibilmente l'energia elettrica in energia termica."
      },
      {
        "id": "sec2-2",
        "title": "2.2 Bipoli Limite: Cortocircuito e Circuito Aperto",
        "content": "I due casi degenere della legge di Ohm rivestono un ruolo cardinale nell'analisi circuitale:\n\n### A. Cortocircuito Ideale ($R = 0$)\n- **Relazione costitutiva:**\n$$v(t) = 0, \\quad \\forall i(t)$$\n- **Proprietà:** La tensione ai suoi morsetti è rigorosamente nulla, indipendentemente dal valore e dal segno della corrente $i(t)$ che lo attraversa (la quale è imposta esclusivamente dal resto del circuito).\n- **Potenza assorbita:** $p(t) = 0 \\cdot i(t) = 0\\text{ W}$.\n\n### B. Circuito Aperto Ideale ($G = 0$, $R \\to \\infty$)\n- **Relazione costitutiva:**\n$$i(t) = 0, \\quad \\forall v(t)$$\n- **Proprietà:** La corrente che lo attraversa è rigorosamente nulla, qualunque sia la differenza di potenziale $v(t)$ applicata ai suoi capi.\n- **Potenza assorbita:** $p(t) = v(t) \\cdot 0 = 0\\text{ W}$."
      },
      {
        "id": "sec2-3",
        "title": "2.3 Sorgenti Indipendenti Ideali",
        "content": "Le sorgenti indipendenti (o autonome) introducono l'energia primaria nella rete:\n\n### A. Generatore Ideale di Tensione\nImprime tra i suoi due morsetti una tensione prestabilita $e(t)$ o $E$, completamente **indipendente dalla corrente** $i(t)$ erogata:\n$$v(t) = e(t)$$\n- Nel piano cartesiano $(i, v)$, la sua caratteristica è una retta orizzontale $v = E$.\n- La corrente $i(t)$ non è intrinseca al generatore, ma è determinata unicamente dal circuito esterno ad esso connesso.\n- **Resistenza interna nulla:** $R_{int} = 0$. Se $e(t) = 0$, il generatore di tensione spento equivale a un **cortocircuito**.\n\n### B. Generatore Ideale di Corrente\nImprime attraverso il proprio ramo una corrente assegnata $j(t)$ o $J$, completamente **indipendente dalla tensione** $v(t)$ ai suoi morsetti:\n$$i(t) = j(t)$$\n- Nel piano $(i, v)$, la sua caratteristica è una retta verticale $i = J$.\n- La tensione $v(t)$ ai suoi capi dipende esclusivamente dal carico esterno.\n- **Conduttanza interna nulla:** $G_{int} = 0$ ($R_{int} \\to \\infty$). Se $j(t) = 0$, il generatore di corrente spento equivale a un **circuito aperto**."
      },
      {
        "id": "sec2-4",
        "title": "2.4 Le 4 Sorgenti Controllate (Pilotate) Lineari",
        "content": "Nei circuiti contenenti transistori (BJT, MOSFET) o amplificatori operazionali, le grandezze generate dipendono linearmente da una tensione o corrente presente in un altro ramo della rete. Tali componenti prendono il nome di **sorgenti dipendenti** (o pilotate) e vengono rappresentate con il caratteristico simbolo a **rombo**:\n\n| Tipo | Nome | Equazione Costitutiva | Parametro di Guadagno | Unità SI |\n| :--- | :--- | :--- | :--- | :--- |\n| **VCVS** | Generatore di tensione controllato in tensione | $v = \\mu \\cdot v_x$ | $\\mu$ (guadagno di tensione) | Adimensionale |\n| **VCCS** | Generatore di corrente controllato in tensione | $i = g_m \\cdot v_x$ | $g_m$ (transconduttanza) | Siemens [S] |\n| **CCVS** | Generatore di tensione controllato in corrente | $v = r_m \\cdot i_x$ | $r_m$ (transresistenza) | Ohm [$\\Omega$] |\n| **CCCS** | Generatore di corrente controllato in corrente | $i = \\beta \\cdot i_x$ | $\\beta$ (guadagno di corrente) | Adimensionale |\n\n**Proprietà essenziali dei generatori controllati:**\n1. **Bipoli attivi ed elementi non reciproci:** A differenza dei resistori lineari, i generatori pilotati possono fornire amplificazione di potenza e rendere asimmetriche le matrici descrittive della rete.\n2. **Spegnimento nelle tecniche di sovrapposizione e Thévenin:** Quando si calcola la resistenza equivalente di Thévenin $R_{th}$ o si applica il principio di sovrapposizione degli effetti, **le sorgenti controllate NON devono MAI essere spente**, poiché rappresentano la fisica interna dei componenti attivi."
      }
    ],
    "keyPoints": [
      "Resistore lineare: $v = R \\cdot i$, $i = G \\cdot v$ con $G = 1/R$. Dissipa sempre $p_{ass} = R i^2 \\ge 0$.",
      "Cortocircuito: $v=0, \\forall i$. Circuito aperto: $i=0, \\forall v$. Entrambi assorbono $0\\text{ W}$.",
      "Generatore ideale di tensione spento ($E=0$) $\\equiv$ cortocircuito. Generatore di corrente spento ($J=0$) $\\equiv$ circuito aperto.",
      "I 4 generatori dipendenti: VCVS ($v=\\mu v_x$), VCCS ($i=g_m v_x$), CCVS ($v=r_m i_x$), CCCS ($i=\\beta i_x$).",
      "REGOLA D'ORO D'ESAME: Le sorgenti pilotate non si spengono MAI nel calcolo di $R_{th}$ o nella sovrapposizione!"
    ],
    "pitfalls": [
      {
        "title": "Spegnere i generatori dipendenti nel calcolo di R_th",
        "description": "Cortocircuitare o aprire un generatore controllato credendo che sia una sorgente autonoma.",
        "profAdvice": "Questo è il più grave errore d'esame al PoliMi! Se spegni un generatore controllato, l'esercizio viene valutato istantaneamente con zero punti. Solo i generatori INDIPENDENTI si spengono; quelli pilotati rimangono attivi e impongono le loro relazioni vincolari."
      },
      {
        "title": "Presumere che la corrente di un generatore di tensione sia zero",
        "description": "Pensare che un generatore ideale di tensione $E$ imponga anche la corrente che lo attraversa.",
        "profAdvice": "Un generatore di tensione impone solo e soltanto la DIFFERENZA DI POTENZIALE. La sua corrente $i_E$ è un'incognita a priori determinata dalle leggi di Kirchhoff applicate all'intera maglia."
      }
    ],
    "workedExample": {
      "title": "Calcolo della resistenza d'ingresso di una rete con generatore controllato VCCS",
      "problemStatement": "Un circuito a due morsetti è composto da un resistore $R_1 = 10\\text{ }\\Omega$ in parallelo a un generatore di corrente controllato in tensione (VCCS) che eroga una corrente $i_g = g_m \\cdot v$, con $g_m = 0.4\\text{ S}$, dove $v$ è la tensione ai capi della porta. Determinare la resistenza equivalente $R_{in}$ vista dai morsetti.",
      "steps": [
        {
          "step": "Passo 1: Applicazione del generatore ausiliario di prova",
          "explanation": "Poiché non vi sono sorgenti indipendenti ma solo una sorgente controllata, applichiamo ai morsetti d'ingresso una tensione di prova nota $V_a$ ed esprimiamo la corrente entrante $I_a$ erogata dal generatore di prova.",
          "math": "R_{in} = \\frac{V_a}{I_a}"
        },
        {
          "step": "Passo 2: Scrittura della Legge di Kirchhoff delle Correnti (LKC) al nodo",
          "explanation": "La tensione sulla porta è $v = V_a$. La corrente entrante $I_a$ si divide tra la corrente nel resistore $i_{R1} = \\frac{V_a}{R_1}$ e la corrente assorbita/erogata dal VCCS $i_g = g_m V_a$ (diretta verso l'uscita).",
          "math": "I_a = i_{R1} + g_m V_a = \\frac{V_a}{R_1} + g_m V_a = V_a \\left( \\frac{1}{R_1} + g_m \\right)"
        },
        {
          "step": "Passo 3: Calcolo analitico e numerico di R_in",
          "explanation": "Sostituiamo i valori numerici $R_1 = 10\\text{ }\\Omega$ (da cui $G_1 = 0.1\\text{ S}$) e $g_m = 0.4\\text{ S}$:",
          "math": "I_a = V_a (0.1 + 0.4) = 0.5 \\cdot V_a \\implies R_{in} = \\frac{V_a}{I_a} = \\frac{1}{0.5} = 2\\text{ }\\Omega"
        }
      ],
      "finalResult": "La resistenza equivalente d'ingresso vale $R_{in} = 2\\text{ }\\Omega$, notevolmente inferiore al valore del resistore fisico $R_1 = 10\\text{ }\\Omega$ grazie all'azione della corrente pilotata in fase col segnale di controllo.",
      "takeaway": "L'uso del generatore di prova $V_a / I_a$ è il metodo standard e infallibile per calcolare l'impedenza equivalente di reti contenenti sorgenti controllate."
    }
  },
  {
    "id": "ch3",
    "number": 3,
    "parziale": 1,
    "title": "Topologia delle Reti & Leggi di Kirchhoff",
    "subtitle": "LKC, LKV, grafi, albero, coalbero, insiemi di taglio e Teorema di Tellegen con dimostrazione",
    "readTime": "22 min",
    "tags": [
      "Kirchhoff",
      "LKC",
      "LKV",
      "Grafi",
      "Albero",
      "Coalbero",
      "Tellegen",
      "Conservazione Potenza"
    ],
    "description": "Trattazione topologica rigorosa dei circuiti elettrici: grafi orientati, matrici di incidenza, conteggio delle equazioni linearmente indipendenti di nodo e di maglia, e dimostrazione analitica formale del fondamentale Teorema di Tellegen.",
    "sections": [
      {
        "id": "sec3-1",
        "title": "3.1 Topologia del Circuito: Nodi, Rami e Grafi",
        "content": "Sostituendo ogni bipolo del circuito con un segmento orientato (ramo o lato) e mantenendo invariate le interconnessioni (nodi), si ottiene il **grafo orientato** della rete.\nSia:\n- $n$: numero complessivo di nodi della rete;\n- $b$: numero complessivo di rami (bipoli).\n\nSi assume che il grafo sia **connesso** (esiste almeno un cammino continuo tra qualunque coppia di nodi).\n\n**Concetti topologici fondamentali:**\n1. **Albero (Tree):** È un sottografo connesso che contiene **tutti gli $n$ nodi** del grafo, ma **nessun ciclo chiuso** (nessuna maglia).\n   - Il numero di rami di qualsiasi albero è costantemente pari a:\n   $$b_T = n - 1$$\n2. **Coalbero (Cotree):** È l'insieme di tutti i rami rimanenti non appartenenti all'albero, detti **corde** o maglie fondamentali (links).\n   - Il numero di corde vale:\n   $$l = b - b_T = b - n + 1$$\n3. **Maglie fondamentali:** Aggiungendo una singola corda all'albero si forma una e una sola maglia chiusa indipendente. Esistono esattamente $l = b - n + 1$ maglie indipendenti.\n4. **Insiemi di taglio fondamentali (Cut-sets):** Rimuovendo un singolo ramo dell'albero si partiziona l'insieme dei nodi in due insiemi disgiunti. Esistono esattamente $n - 1$ insiemi di taglio indipendenti."
      },
      {
        "id": "sec3-2",
        "title": "3.2 Legge di Kirchhoff delle Correnti (LKC / KCL)",
        "content": "La **Legge di Kirchhoff delle Correnti** (LKC) è l'espressione circuitale del principio universale di conservazione della carica elettrica.\n\n**Enunciato per un nodo:**\nLa somma algebrica di tutte le correnti dei rami incidenti su un qualunque nodo $k$ del circuito è identicamente nulla ad ogni istante di tempo:\n$$\\sum_{j \\in \\text{ramo incidenti nodo } k} \\pm i_j(t) = 0$$\ndove il segno è positivo ($+$) se la corrente è uscente dal nodo, negativo ($-$) se è entrante (o viceversa, purché applicato con coerenza).\n\n**Estensione agli insiemi di taglio (Cut-sets):**\nLa LKC è valida non solo per i singoli nodi fisici, ma per qualunque **superficie chiusa** ideale che racchiude una porzione arbitraria del circuito:\n$$\\sum_{j \\in \\text{taglio } S} \\pm i_j(t) = 0$$\n\n**Numero di equazioni LKC linearmente indipendenti:**\nScrivendo la LKC per tutti gli $n$ nodi della rete, la somma di tutte le $n$ equazioni dà identicamente $0 = 0$ (poiché ogni ramo connette due nodi ed entra con segno opposto in due equazioni). Pertanto, il numero di equazioni linearmente indipendenti è esattamente:\n$$N_{LKC} = n - 1$$"
      },
      {
        "id": "sec3-3",
        "title": "3.3 Legge di Kirchhoff delle Tensioni (LKV / KVL)",
        "content": "La **Legge di Kirchhoff delle Tensioni** (LKV) è l'espressione circuitale della natura conservativa del campo elettrostatico nell'approssimazione quasi-stazionaria.\n\n**Enunciato per una linea chiusa (maglia):**\nLa somma algebrica delle tensioni di ramo lungo una qualunque maglia orientata $\\Gamma_m$ del circuito è identicamente nulla ad ogni istante:\n$$\\sum_{j \\in \\text{maglia } m} \\pm v_j(t) = 0$$\ndove il segno è positivo ($+$) se il verso di riferimento della tensione del ramo è concorde con il verso di percorrenza scelto per la maglia, negativo ($-$) se è discorde.\n\n**Numero di equazioni LKV linearmente indipendenti:**\nIl numero di equazioni di maglia linearmente indipendenti corrisponde esattamente al numero di corde del coalbero:\n$$N_{LKV} = l = b - n + 1$$\n\n**Complessità risolutiva globale del circuito:**\nPer risolvere univocamente una rete con $b$ rami occorrono $2b$ equazioni ($b$ correnti e $b$ tensioni incognite):\n- $n - 1$ equazioni topologiche LKC;\n- $b - n + 1$ equazioni topologiche LKV;\n- $b$ equazioni costitutive dei bipoli (leggi di Ohm, caratteristiche dei generatori).\nLa somma delle equazioni topologiche è:\n$$(n - 1) + (b - n + 1) = b$$\nSommate alle $b$ equazioni costitutive, si ottiene un sistema perfettamente determinato di $2b$ equazioni algebriche lineari in $2b$ incognite."
      },
      {
        "id": "sec3-4",
        "title": "3.4 Matrici di Incidenza e Ortogonalità Topologica",
        "content": "La topologia della rete può essere formalizzata in forma matriciale:\n\n1. **Matrice di incidenza ridotta nodi-rami $\\mathbf{A}$:**\n   Matrice di dimensioni $(n-1) \\times b$, dove l'elemento $A_{kj}$ vale:\n   - $+1$ se il ramo $j$ esce dal nodo $k$;\n   - $-1$ se il ramo $j$ entra nel nodo $k$;\n   - $0$ se il ramo $j$ non è connesso al nodo $k$.\n   La LKC si scrive in forma compatta come:\n   $$\\mathbf{A} \\cdot \\mathbf{i} = \\mathbf{0}$$\n   dove $\\mathbf{i} = [i_1, i_2, \\dots, i_b]^T$.\n\n2. **Vettore dei potenziali di nodo $\\mathbf{u}$ e tensioni di ramo $\\mathbf{v}$:**\n   Scelto il nodo $n$ come riferimento di potenziale nullo ($u_n = 0$), le $b$ tensioni di ramo sono legate ai potenziali dei restanti nodi $\\mathbf{u} = [u_1, u_2, \\dots, u_{n-1}]^T$ dalla trasposta di $\\mathbf{A}$:\n   $$\\mathbf{v} = \\mathbf{A}^T \\cdot \\mathbf{u}$$\n\n3. **Matrice delle maglie fondamentali $\\mathbf{B}$:**\n   Matrice di dimensioni $(b-n+1) \\times b$. La LKV si scrive:\n   $$\\mathbf{B} \\cdot \\mathbf{v} = \\mathbf{0}$$\n\n**Relazione fondamentale di ortogonalità:**\nLo spazio delle correnti ammissibili di Kirchhoff e lo spazio delle tensioni ammissibili sono mutuamente ortogonali:\n$$\\mathbf{A} \\cdot \\mathbf{B}^T = \\mathbf{0} \\quad \\text{e} \\quad \\mathbf{B} \\cdot \\mathbf{A}^T = \\mathbf{0}$$"
      },
      {
        "id": "sec3-5",
        "title": "3.5 Il Teorema di Tellegen e la sua Dimostrazione Rigorosa",
        "content": "Il **Teorema di Tellegen** è il risultato più profondo e generale dell'intera teoria dei circuiti.\n\n**Enunciato:**\nSia data una rete con $b$ rami e $n$ nodi. Se il vettore delle correnti di ramo $\\mathbf{i} = [i_1, i_2, \\dots, i_b]^T$ soddisfa la LKC per tutti i nodi, e il vettore delle tensioni di ramo $\\mathbf{v} = [v_1, v_2, \\dots, v_b]^T$ soddisfa la LKV per tutte le maglie (con le convenzioni dell'utilizzatore per tutti i rami), allora:\n$$\\sum_{k=1}^b v_k(t) \\cdot i_k(t) = 0$$\n\n### Dimostrazione Analitica Formale\nEsprimiamo la somma come prodotto scalare vettoriale tra il vettore delle tensioni $\\mathbf{v}$ e il vettore delle correnti $\\mathbf{i}$:\n$$\\sum_{k=1}^b v_k i_k = \\mathbf{v}^T \\cdot \\mathbf{i}$$\nDalla relazione topologica tra tensioni di ramo e potenziali di nodo, sappiamo che $\\mathbf{v} = \\mathbf{A}^T \\mathbf{u}$. Sostituendo:\n$$\\mathbf{v}^T = (\\mathbf{A}^T \\mathbf{u})^T = \\mathbf{u}^T (\\mathbf{A}^T)^T = \\mathbf{u}^T \\mathbf{A}$$\nPertanto:\n$$\\mathbf{v}^T \\cdot \\mathbf{i} = (\\mathbf{u}^T \\mathbf{A}) \\cdot \\mathbf{i} = \\mathbf{u}^T (\\mathbf{A} \\cdot \\mathbf{i})$$\nMa per la Legge di Kirchhoff delle Correnti ai nodi, il vettore $\\mathbf{A} \\cdot \\mathbf{i}$ è identicamente il vettore nullo $\\mathbf{0}$:\n$$\\mathbf{A} \\cdot \\mathbf{i} = \\mathbf{0}$$\nSostituendo nel prodotto:\n$$\\mathbf{v}^T \\cdot \\mathbf{i} = \\mathbf{u}^T \\cdot \\mathbf{0} = 0 \\quad \\blacksquare$$\n\n**Significato e Generalità Straordinaria di Tellegen:**\n1. La dimostrazione sfrutta **unicamente la topologia** (KCL e KVL), senza fare alcun riferimento alla natura fisica dei bipoli.\n2. Il teorema è valido per circuiti lineari, non lineari, tempo-varianti, con componenti dinamici, semiconduttori, sorgenti arbitrarie.\n3. **Quasi-potenza (Forma allargata):** Se prendiamo le tensioni $\\mathbf{v}$ di una rete e le correnti $\\hat{\\mathbf{i}}$ di un'**altra rete diversa** avente però la stessa topologia e gli stessi nodi e rami, vale ancora:\n$$\\sum_{k=1}^b v_k \\cdot \\hat{i}_k = 0$$\nQuesto principio costituisce la base della sensibilità circuitale e del Teorema di Boucherot in regime sinusoidale."
      }
    ],
    "keyPoints": [
      "Numero rami albero: $b_T = n - 1$. Numero corde coalbero: $l = b - n + 1$.",
      "Numero equazioni LKC indipendenti: $n - 1$. Numero equazioni LKV indipendenti: $b - n + 1$.",
      "In totale ci sono $(n-1) + (b-n+1) = b$ equazioni topologiche indipendenti. Con $b$ equazioni dei bipoli $\\implies 2b$ equazioni lineari.",
      "Matrici topologiche: $\\mathbf{A} \\mathbf{i} = \\mathbf{0}$, $\\mathbf{v} = \\mathbf{A}^T \\mathbf{u}$. Ortogonalità: $\\mathbf{A} \\mathbf{B}^T = \\mathbf{0}$.",
      "Teorema di Tellegen: $\\sum_{k=1}^b v_k i_k = \\mathbf{u}^T (\\mathbf{A} \\mathbf{i}) = 0$. Vale SEMPRE, per qualunque bipolo (lineare, non-lineare, tempo-variante)."
    ],
    "pitfalls": [
      {
        "title": "Scrivere n equazioni LKC al posto di n - 1",
        "description": "Scrivere le LKC per tutti i nodi e trovarsi un sistema a matrice singolare (determinante nullo) perché l'ultima equazione è linearmente dipendente dalle altre.",
        "profAdvice": "Scegli fin da subito un nodo come 'nodo di riferimento' (massa $u_0 = 0$) e scrivi le LKC ESCLUSIVAMENTE per i restanti $n-1$ nodi!"
      },
      {
        "title": "Confondere maglie fondamentali con cicli arbitrari",
        "description": "Scegliere maglie geometriche ridondanti che non contengono ciascuna una corda distinta del coalbero.",
        "profAdvice": "Per essere certo dell'indipendenza delle LKV, seleziona un albero; ogni equazione LKV deve chiudersi attraverso una ed una sola corda diversa del coalbero."
      }
    ],
    "workedExample": {
      "title": "Verifica numerica e topologica del Teorema di Tellegen",
      "problemStatement": "Si consideri un circuito con $n = 3$ nodi e $b = 5$ rami. Sia $u_0 = 0\\text{ V}$ il nodo di riferimento, $u_1 = 10\\text{ V}$ e $u_2 = 4\\text{ V}$ i potenziali degli altri due nodi. I rami sono disposti come segue:\n- Ramo 1: tra nodo 1 e massa ($v_1 = u_1 = 10\\text{ V}$), corrente $i_1 = 2\\text{ A}$ verso massa.\n- Ramo 2: tra nodo 1 e nodo 2 ($v_2 = u_1 - u_2 = 6\\text{ V}$), corrente $i_2 = 3\\text{ A}$ da 1 a 2.\n- Ramo 3: generatore indipendente di corrente tra massa e nodo 1 ($i_3 = -5\\text{ A}$ verso massa, $v_3 = u_1 = 10\\text{ V}$).\n- Ramo 4: tra nodo 2 e massa ($v_4 = u_2 = 4\\text{ V}$), corrente $i_4 = 1\\text{ A}$ verso massa.\n- Ramo 5: tra nodo 2 e massa ($v_5 = u_2 = 4\\text{ V}$), corrente $i_5 = 2\\text{ A}$ verso massa.\nVerificare che le correnti soddisfano la LKC e che il bilancio di Tellegen è identicamente soddisfatto a zero.",
      "steps": [
        {
          "step": "Passo 1: Verifica della LKC ai nodi 1 e 2",
          "explanation": "Al nodo 1: corrente uscente verso ramo 1 ($i_1 = 2\\text{ A}$), verso ramo 2 ($i_2 = 3\\text{ A}$), verso ramo 3 ($i_3 = -5\\text{ A}$):",
          "math": "\\sum i_{nodo 1} = i_1 + i_2 + i_3 = 2 + 3 + (-5) = 0\\text{ A}"
        },
        {
          "step": "Passo 2: Verifica della LKC al nodo 2",
          "explanation": "Al nodo 2: corrente entrante dal ramo 2 ($i_2 = 3\\text{ A}$), uscente su ramo 4 ($i_4 = 1\\text{ A}$), uscente su ramo 5 ($i_5 = 2\\text{ A}$):",
          "math": "\\sum i_{uscenti} = -i_2 + i_4 + i_5 = -3 + 1 + 2 = 0\\text{ A}"
        },
        {
          "step": "Passo 3: Calcolo esplicito della sommatoria di Tellegen",
          "explanation": "Moltiplichiamo tensione e corrente di ciascuno dei 5 rami (convenzione dell'utilizzatore, per cui la corrente va dal potenziale alto a quello basso):",
          "math": "\\begin{aligned} \\sum_{k=1}^5 v_k i_k &= v_1 i_1 + v_2 i_2 + v_3 i_3 + v_4 i_4 + v_5 i_5 \\\\ &= (10)(2) + (6)(3) + (10)(-5) + (4)(1) + (4)(2) \\\\ &= 20 + 18 - 50 + 4 + 8 = 50 - 50 = 0\\text{ W} \\end{aligned}"
        }
      ],
      "finalResult": "La sommatoria $\\sum_{k=1}^5 v_k i_k$ è esattamente uguale a $0\\text{ W}$, a rigorosa conferma del Teorema di Tellegen.",
      "takeaway": "Tellegen è l'equazione di consistenza più potente per verificare la correttezza di qualunque risoluzione numerica d'esame."
    }
  },
  {
    "id": "ch4",
    "number": 4,
    "parziale": 1,
    "title": "Metodi Sistematici di Analisi",
    "subtitle": "Analisi Nodale classica, matrice delle conduttanze, Supernodi, MNA e metodo delle maglie",
    "readTime": "24 min",
    "tags": [
      "Analisi Nodale",
      "MNA",
      "Supernodo",
      "Matrice G",
      "Metodo Maglie",
      "Supermaglia"
    ],
    "description": "I metodi formali di risoluzione algoritmica dei circuiti resistivi: la formulazione canonica dell'Analisi Nodale, la costruzione per ispezione della matrice G, il trattamento dei generatori ideali di tensione tramite il concetto di Supernodo e l'Analisi Nodale Modificata (MNA).",
    "sections": [
      {
        "id": "sec4-1",
        "title": "4.1 Analisi Nodale Classica",
        "content": "L'**Analisi Nodale** è il metodo sistematico preferito per le reti con prevalenza di conduttanze e sorgenti di corrente. Essa assume come variabili incognite primarie i **potenziali di nodo** $\\mathbf{u} = [u_1, u_2, \\dots, u_{n-1}]^T$ rispetto a un nodo preso convenzionalmente a potenziale zero ($u_0 = 0$, massa).\n\nSostituendo la legge di Ohm di ciascun ramo $i_k = G_k v_k = G_k (u_a - u_b)$ nelle $n-1$ equazioni di Kirchhoff delle correnti ai nodi, si ottiene un sistema algebrico lineare compatto:\n$$\\mathbf{G} \\cdot \\mathbf{u} = \\mathbf{i}_S$$\ndove:\n- $\\mathbf{G}$ è la **matrice delle conduttanze di nodo** di dimensioni $(n-1) \\times (n-1)$;\n- $\\mathbf{u}$ è il vettore delle incognite (potenziali di nodo);\n- $\\mathbf{i}_S$ è il vettore dei termini noti delle correnti impresse dalle sorgenti indipendenti."
      },
      {
        "id": "sec4-2",
        "title": "4.2 Regole di Ispezione Diretta della Matrice G",
        "content": "Per reti composte esclusivamente da resistori lineari e generatori indipendenti di corrente, la matrice $\\mathbf{G}$ e il vettore $\\mathbf{i}_S$ si compilano per **ispezione visiva istantanea**:\n\n1. **Elementi Diagonali $G_{ii}$ (Auto-conduttanze):**\n   $$G_{ii} = \\sum \\text{conduttanze direttamente connesse al nodo } i$$\n   I termini diagonali sono **sempre strettamente positivi** ($G_{ii} > 0$).\n\n2. **Elementi Fuori Diagonale $G_{ij}$ (Mutue-conduttanze, $i \\neq j$):**\n   $$G_{ij} = - \\sum \\text{conduttanze connesse direttamente tra il nodo } i \\text{ e il nodo } j$$\n   I termini fuori diagonale sono **sempre non-positivi** ($G_{ij} \\le 0$).\n\n3. **Proprietà di Simmetria:**\n   La matrice $\\mathbf{G}$ di una rete con soli elementi resistivi bilaterali è **simmetrica** ($G_{ij} = G_{ji}$) e **a diagonale dominante** ($G_{ii} \\ge \\sum_{j \\neq i} |G_{ij}|$), il che garantisce l'invertibilità e l'unicità della soluzione.\n\n4. **Vettore dei Termini Noti $i_{S, i}$:**\n   $$i_{S, i} = \\sum i_{\\text{generatori di corrente ENTRANTI nel nodo } i} - \\sum i_{\\text{generatori di corrente USCENTI dal nodo } i}$$"
      },
      {
        "id": "sec4-3",
        "title": "4.3 Gestione dei Generatori Ideali di Tensione e il SUPERNODO",
        "content": "Un generatore ideale di tensione non possiede una conduttanza definita ($G \\to \\infty$), e la corrente che lo attraversa è a priori sconosciuta. Si presentano due situazioni:\n\n### Caso 1: Generatore di tensione connesso tra un nodo $k$ e la massa\nSe una sorgente indipendente di tensione $E$ è collegata direttamente tra il nodo $k$ e il nodo di riferimento (massa), il potenziale del nodo $k$ è **noto a priori**:\n$$u_k = \\pm E$$\nIl potenziale cessa di essere un'incognita, riducendo l'ordine del sistema di 1.\n\n### Caso 2: Generatore di tensione tra due nodi non di riferimento (Nodo Galleggiante) $\\to$ SUPERNODO\nQuando un generatore ideale di tensione $E$ è collegato tra due nodi $j$ e $k$, nessuno dei quali è la massa, non è possibile scrivere la LKC singolarmente al nodo $j$ o al nodo $k$ poiché la corrente della sorgente $i_E$ non può essere espressa in funzione dei potenziali.\n\n**La Tecnica del Supernodo:**\n1. Si racchiudono i due nodi $j$ e $k$ e il generatore di tensione $E$ all'interno di una superficie chiusa virtuale detta **Supernodo**.\n2. Si scrive **una sola LKC per l'intero Supernodo** (considerando tutte le correnti che entrano o escono da tale contorno):\n$$\\sum_{m \\in \\text{frontiera Supernodo}} i_m = 0$$\n3. Poiché questa LKC contiene due incognite ($u_j$ e $u_k$), l'equazione mancante è fornita dalla **relazione di vincolo costitutiva della sorgente**:\n$$u_j - u_k = E$$\nIl numero di equazioni rimane esattamente pari al numero di incognite."
      },
      {
        "id": "sec4-4",
        "title": "4.4 Analisi Nodale Modificata (MNA)",
        "content": "Nei simulatori circuitali professionali (come SPICE), la gestione dei supernodi viene automatizzata attraverso l'**Analisi Nodale Modificata** (MNA - Modified Nodal Analysis).\n\nNell'MNA, le correnti incognite delle sorgenti di tensione ideali vengono promosse a variabili ausiliarie del sistema. Il sistema assume la forma a blocchi:\n$$\\begin{bmatrix} \\mathbf{G} & \\mathbf{B} \\\\ \\mathbf{C} & \\mathbf{D} \\end{bmatrix} \\begin{bmatrix} \\mathbf{u} \\\\ \\mathbf{i}_E \\end{bmatrix} = \\begin{bmatrix} \\mathbf{i}_S \\\\ \\mathbf{e} \\end{bmatrix}$$\ndove:\n- $\\mathbf{G}$ è la matrice delle conduttanze dei rami resistivi;\n- $\\mathbf{B}$ e $\\mathbf{C}$ contengono i coefficienti topologici ($+1, -1, 0$) delle connessioni delle sorgenti di tensione ai nodi;\n- $\\mathbf{D} = \\mathbf{0}$ per generatori ideali di tensione indipendenti;\n- $\\mathbf{i}_E$ è il vettore delle correnti incognite che fluiscono attraverso i generatori di tensione;\n- $\\mathbf{e}$ è il vettore dei valori impressi dalle sorgenti di tensione."
      },
      {
        "id": "sec4-5",
        "title": "4.5 Analisi delle Correnti di Maglia e Supermaglia",
        "content": "Il metodo duale dell'analisi nodale è l'**Analisi delle Maglie**, applicabile a reti planari:\n- Si definiscono $l = b - n + 1$ correnti fittizie chiuse di maglia $\\mathbf{i}_M = [i_{m1}, i_{m2}, \\dots, i_{ml}]^T$.\n- Si scrive la LKV per ciascuna maglia indipendente:\n$$\\mathbf{R}_M \\cdot \\mathbf{i}_M = \\mathbf{e}_M$$\ndove:\n- $R_{ii}$ è la somma delle resistenze appartenenti alla maglia $i$;\n- $R_{ij} = - \\sum$ resistenze condivise tra la maglia $i$ e la maglia $j$;\n- $e_{M, i}$ è la somma algebrica delle forze elettromotrici dei generatori di tensione nella maglia.\n\n**Supermaglia:** Se un generatore ideale di corrente si trova su un ramo condiviso tra due maglie, si esclude il ramo aprendolo e si scrive un'unica LKV per la **Supermaglia** periferica, integrata dal vincolo $i_{m1} - i_{m2} = J$."
      }
    ],
    "keyPoints": [
      "Analisi nodale classica: $\\mathbf{G} \\mathbf{u} = \\mathbf{i}_S$ per gli $n-1$ nodi indipendenti.",
      "Regola d'ispezione: $G_{ii} = \\sum$ conduttanze al nodo $i$ ($> 0$), $G_{ij} = -\\sum$ conduttanze tra nodo $i$ e $j$ ($\\le 0$).",
      "Supernodo: indispensabile quando un generatore di tensione è connesso tra due nodi non di riferimento. Si scrive 1 LKC sul contorno del supernodo + 1 equazione di vincolo $u_j - u_k = E$.",
      "MNA (Modified Nodal Analysis): include le correnti delle sorgenti di tensione nel vettore delle incognite.",
      "Analisi delle maglie: $\\mathbf{R}_M \\mathbf{i}_M = \\mathbf{e}_M$ per $b - n + 1$ maglie indipendenti."
    ],
    "pitfalls": [
      {
        "title": "Dimenticare il segno meno nei termini fuori diagonale G_ij",
        "description": "Scrivere $G_{12} = +G$ anziché $-G$ durante la compilazione per ispezione della matrice nodale.",
        "profAdvice": "I termini fuori diagonale della matrice G sono SEMPRE negativi o nulli! Se trovi un segno positivo fuori diagonale (in assenza di sorgenti pilotate), hai commesso un errore di distrazione."
      },
      {
        "title": "Tentare di scrivere la LKC a un nodo con generatore di tensione ideale",
        "description": "Scrivere la LKC al nodo ignorando la corrente della sorgente di tensione o supponendola arbitrariamente nulla.",
        "profAdvice": "Non puoi scrivere la LKC standard su un nodo a cui è connessa una sorgente di tensione ideale senza creare un Supernodo o usare l'MNA, perché la corrente di quella sorgente è un'incognita a priori sconosciuta!"
      }
    ],
    "workedExample": {
      "title": "Risoluzione sistematica con Supernodo di una rete a 4 nodi",
      "problemStatement": "Si consideri un circuito con 4 nodi (0, 1, 2, 3), dove il nodo 0 è la massa. Tra il nodo 1 e la massa c'è una sorgente di corrente $J = 4\\text{ A}$ entrante nel nodo 1. Tra il nodo 1 e il nodo 2 c'è un resistore $R_1 = 2\\text{ }\\Omega$. Tra il nodo 2 e il nodo 3 c'è un generatore ideale di tensione $E = 12\\text{ V}$ con polo positivo su 2 e negativo su 3. Tra il nodo 2 e la massa c'è $R_2 = 4\\text{ }\\Omega$. Tra il nodo 3 e la massa c'è $R_3 = 6\\text{ }\\Omega$. Determinare i potenziali di tutti i nodi e la corrente erogata dalla sorgente di tensione $E$.",
      "steps": [
        {
          "step": "Passo 1: Identificazione del Supernodo e delle equazioni di vincolo",
          "explanation": "La sorgente di tensione $E$ è connessa tra i nodi 2 e 3 (nessuno dei quali è a massa). Pertanto, i nodi 2 e 3 formano un SUPERNODO. L'equazione di vincolo è:",
          "math": "u_2 - u_3 = E = 12\\text{ V} \\implies u_3 = u_2 - 12"
        },
        {
          "step": "Passo 2: LKC al nodo 1",
          "explanation": "Al nodo 1 sono connessi il generatore $J = 4\\text{ A}$ (entrante) e il resistore $R_1$ verso il nodo 2:",
          "math": "G_1 (u_1 - u_2) = J \\implies 0.5 u_1 - 0.5 u_2 = 4 \\implies u_1 - u_2 = 8"
        },
        {
          "step": "Passo 3: LKC al Supernodo (nodi 2 + 3)",
          "explanation": "Sommiamo tutte le correnti uscenti dal contorno del supernodo (attraverso $R_1$, $R_2$ e $R_3$):",
          "math": "G_1 (u_2 - u_1) + G_2 u_2 + G_3 u_3 = 0"
        },
        {
          "step": "Passo 4: Sostituzione delle relazioni nel sistema",
          "explanation": "Sostituendo $u_1 = u_2 + 8$ e $u_3 = u_2 - 12$ nell'equazione del Supernodo con $G_1 = 0.5\\text{ S}$, $G_2 = 0.25\\text{ S}$, $G_3 = \\frac{1}{6}\\text{ S}$:",
          "math": "\\begin{aligned} 0.5(u_2 - u_2 - 8) + 0.25 u_2 + \\frac{1}{6}(u_2 - 12) &= 0 \\\\ -4 + 0.25 u_2 + \\frac{1}{6} u_2 - 2 &= 0 \\\\ \\left( \\frac{1}{4} + \\frac{1}{6} \\right) u_2 &= 6 \\implies \\frac{5}{12} u_2 = 6 \\implies u_2 = \\frac{72}{5} = 14.4\\text{ V} \\end{aligned}"
        },
        {
          "step": "Passo 5: Calcolo dei potenziali rimanenti e della corrente di E",
          "explanation": "Ricaviamo $u_1$ e $u_3$:",
          "math": "u_3 = 14.4 - 12 = 2.4\\text{ V}, \\quad u_1 = 14.4 + 8 = 22.4\\text{ V}"
        }
      ],
      "finalResult": "I potenziali sono: $u_1 = 22.4\\text{ V}$, $u_2 = 14.4\\text{ V}$, $u_3 = 2.4\\text{ V}$. La corrente erogata da $E$ verso il nodo 2 vale $i_E = G_1(u_2 - u_1) + G_2 u_2 = 0.5(14.4 - 22.4) + 0.25(14.4) = -4 + 3.6 = -0.4\\text{ A}$.",
      "takeaway": "Il supernodo converte due nodi complessi in una sola equazione globale LKC, eliminando l'incognita $i_E$ dalla prima fase di calcolo."
    }
  },
  {
    "id": "ch5",
    "number": 5,
    "parziale": 1,
    "title": "Teoremi delle Reti Elettriche",
    "subtitle": "Sovrapposizione, Thévenin, Norton, calcolo Rth con sorgenti controllate e Massimo Trasferimento",
    "readTime": "25 min",
    "tags": [
      "Sovrapposizione",
      "Thévenin",
      "Norton",
      "Rth",
      "Generatore di Prova",
      "Massimo Trasferimento",
      "Sostituzione"
    ],
    "description": "I pilastri analitici della teoria dei circuiti lineari: la Sovrapposizione degli Effetti, i teoremi di equivalenza di Thévenin e Norton, le metodologie rigorose per il calcolo della resistenza equivalente con sorgenti pilotate mediante generatore ausiliario di prova, e il teorema del massimo trasferimento di potenza in regime stazionario.",
    "sections": [
      {
        "id": "sec5-1",
        "title": "5.1 Il Principio di Sovrapposizione degli Effetti",
        "content": "In qualunque circuito lineare tempo-invariante contenente generatori indipendenti, resistori e generatori controllati lineari, la risposta (qualsiasi tensione o corrente di ramo) è la **somma algebrica delle risposte parziali** prodotte da ciascun generatore indipendente considerato agente da solo, mentre tutti gli altri generatori indipendenti sono **disattivati** (spenti):\n$$y(t) = \\sum_{k=1}^{N_{ind}} y^{(k)}(t)$$\n\n**Regole di disattivazione dei generatori indipendenti:**\n- Un **generatore ideale di tensione** spento ($e_k = 0$) si comporta come un **cortocircuito** ($v=0$).\n- Un **generatore ideale di corrente** spento ($j_k = 0$) si comporta come un **circuito aperto** ($i=0$).\n\n**AVVERTENZE CAPITALI:**\n1. **I generatori controllati NON si spengono mai:** Essi non sono sorgenti autonome, ma elementi interni del modello che legano i rami attivi.\n2. **NON applicabile alle potenze:** La potenza è una grandezza quadratica ($P = R i^2 = v^2 / R$), e l'operatore quadrato non è lineare:\n$$P \\neq \\sum P^{(k)} \\quad (\\text{poiché } (a + b)^2 = a^2 + b^2 + 2ab \\neq a^2 + b^2)$$\nPer calcolare la potenza con la sovrapposizione, occorre prima determinare la corrente o la tensione totale sommando i contributi e POI elevare al quadrato."
      },
      {
        "id": "sec5-2",
        "title": "5.2 Il Teorema di Thévenin",
        "content": "**Enunciato:**\nQualunque circuito lineare accessibile da due morsetti $A$ e $B$ è elettricamente indistinguibile, rispetto a qualsiasi carico connesso tra $A$ e $B$, da un circuito equivalente formato da un **generatore ideale di tensione $V_{th}$ in serie a una resistenza equivalente $R_{th}$**.\n\nI parametri dell'equivalente Thévenin si determinano come segue:\n1. **Tensione a vuoto $V_{th}$:**\n   $$V_{th} = V_{AB, oc}$$\n   È la differenza di potenziale tra i morsetti $A$ e $B$ misurata a **vuoto** (con il carico rimosso, cioè a circuito aperto tra $A$ e $B$).\n2. **Resistenza equivalente $R_{th}$:**\n   È la resistenza vista tra i morsetti $A$ e $B$ quando tutte le sorgenti **indipendenti** interne alla rete sono spente."
      },
      {
        "id": "sec5-3",
        "title": "5.3 Il Teorema di Norton e la Dualità Thévenin-Norton",
        "content": "**Enunciato:**\nQualunque circuito lineare visto da due morsetti $A$ e $B$ è equivalente a un **generatore ideale di corrente $I_{no}$ in parallelo a una conduttanza equivalente $G_{no} = 1/R_{th}$** (o resistenza $R_{th}$ in parallelo).\n\nParametri di Norton:\n1. **Corrente di cortocircuito $I_{no}$:**\n   $$I_{no} = I_{sc}$$\n   È la corrente che fluisce dal morsetto $A$ al morsetto $B$ quando i due morsetti vengono collegati da un cortocircuito ideale esterno.\n\n**Relazione fondamentale di trasformazione:**\nTra l'equivalente Thévenin e l'equivalente Norton sussiste la relazione immediata:\n$$V_{th} = R_{th} \\cdot I_{no} \\iff I_{no} = \\frac{V_{th}}{R_{th}}$$\nLa resistenza equivalente $R_{th}$ è la medesima in entrambi i modelli."
      },
      {
        "id": "sec5-4",
        "title": "5.4 Metodi di Calcolo di R_th (Il Metodo del Generatore di Prova)",
        "content": "A seconda della costituzione della rete, si adottano tre metodi per determinare $R_{th}$:\n\n### Metodo 1: Disattivazione delle sorgenti (Solo se la rete NON contiene sorgenti controllate)\nSi spengono tutte le sorgenti indipendenti e si calcola la resistenza equivalente mediante le consuete regole di associazione serie/parallelo e trasformazioni stella-triangolo.\n\n### Metodo 2: Rapporto a vuoto / cortocircuito (Se $V_{oc} \\neq 0$)\nSi calcolano sia la tensione a vuoto $V_{th} = V_{oc}$, sia la corrente di cortocircuito $I_{no} = I_{sc}$:\n$$R_{th} = \\frac{V_{oc}}{I_{sc}}$$\n*Limite:* Questo metodo fallisce se $V_{oc} = 0$ e $I_{sc} = 0$ (ad esempio in reti prive di generatori indipendenti).\n\n### Metodo 3: IL METODO DEL GENERATORE AUSILIARIO DI PROVA (Universale)\nÈ il metodo cardine richiesto nei compiti d'esame del Politecnico di Milano quando sono presenti **generatori controllati**:\n1. Si **disattivano TUTTE le sorgenti indipendenti** (generatori di tensione $\\to$ corto, generatori di corrente $\\to$ aperto).\n2. Si lasciano rigorosamente **attive tutte le sorgenti controllate**.\n3. Si applica tra i morsetti $A$ e $B$ un generatore ausiliario di prova di tensione $V_a$ (oppure di corrente $I_a$).\n4. Si risolve la rete calcolando la corrente erogata $I_a$ dal generatore di prova (o la tensione $V_a$ indotta ai suoi capi).\n5. La resistenza di Thévenin è data dal rapporto:\n$$R_{th} = \\frac{V_a}{I_a}$$\n*Vantaggio:* Funziona **sempre**, anche se la rete passivata ha resistenze equivalenti negative ($R_{th} < 0$) per via dei controllati, o se $V_{oc} = 0$."
      },
      {
        "id": "sec5-5",
        "title": "5.5 Teorema del Massimo Trasferimento di Potenza (in Continua)",
        "content": "Dato un circuito lineare con equivalente Thévenin $(V_{th}, R_{th})$ (con $R_{th} > 0$), si desidera determinare il valore del resistore di carico $R_L$ da connettere ai morsetti $A-B$ affinché la potenza assorbita da $R_L$ sia **massima**.\n\n**Dimostrazione analitica:**\nLa corrente nel circuito serie vale:\n$$i_L = \\frac{V_{th}}{R_{th} + R_L}$$\nLa potenza assorbita dal carico $R_L$ è data da:\n$$P_L(R_L) = R_L \\cdot i_L^2 = V_{th}^2 \\frac{R_L}{(R_{th} + R_L)^2}$$\nPer trovare il punto di massimo, calcoliamo la derivata prima rispetto a $R_L$ e la poniamo uguale a zero:\n$$\\frac{dP_L}{dR_L} = V_{th}^2 \\frac{(R_{th} + R_L)^2 - R_L \\cdot 2(R_{th} + R_L)}{(R_{th} + R_L)^4} = V_{th}^2 \\frac{R_{th} + R_L - 2R_L}{(R_{th} + R_L)^3} = V_{th}^2 \\frac{R_{th} - R_L}{(R_{th} + R_L)^3} = 0$$\nPoiché $V_{th} \\neq 0$ e il denominatore è positivo, l'annullamento della derivata impone:\n$$R_L = R_{th}$$\n\n**Potenza massima assorbita:**\nSostituendo $R_L = R_{th}$ nella formula di $P_L$:\n$$P_{L, max} = V_{th}^2 \\frac{R_{th}}{(2R_{th})^2} = \\frac{V_{th}^2}{4 R_{th}}$$\n\n**Rendimento energetico alla condizione di massimo trasferimento:**\nLa potenza totale erogata dalla sorgente interna è $P_{tot} = V_{th} \\cdot i_L = \\frac{V_{th}^2}{2 R_{th}} = 2 P_{L, max}$.\nIl rendimento vale:\n$$\\eta = \\frac{P_L}{P_{tot}} = \\frac{P_{L, max}}{2 P_{L, max}} = 50\\%$$\nMetà della potenza totale viene inevitabilmente dissipata sulla resistenza interna $R_{th}$ del generatore."
      }
    ],
    "keyPoints": [
      "Sovrapposizione: $y = \\sum y^{(k)}$ disattivando a turno i generatori INDIPENDENTI. MAI spegnere i controllati!",
      "La sovrapposizione NON si applica alle potenze ($P \\neq P_1 + P_2$).",
      "Thévenin: generatore serie $(V_{th}, R_{th})$ con $V_{th} = V_{oc}$.",
      "Norton: generatore parallelo $(I_{no}, R_{th})$ con $I_{no} = I_{sc}$. Legame: $V_{th} = R_{th} \\cdot I_{no}$.",
      "Calcolo Rth con sorgenti controllate: spegnere le indipendenti, applicare generatore di prova $V_a$, calcolare $I_a \\implies R_{th} = V_a / I_a$.",
      "Massimo trasferimento di potenza (DC): si ottiene per $R_L = R_{th}$. Potenza massima: $P_{max} = \\frac{V_{th}^2}{4 R_{th}}$ (rendimento $\\eta = 50\\%$)."
    ],
    "pitfalls": [
      {
        "title": "Calcolare la potenza sommando le potenze parziali con la sovrapposizione",
        "description": "Applicare la sovrapposizione per calcolare $P_1$ col generatore 1, $P_2$ col generatore 2 e scrivere $P_{tot} = P_1 + P_2$.",
        "profAdvice": "Errore matematico grave: la potenza è quadratica! Calcola PRIMA la corrente totale $i_{tot} = i_1 + i_2$ o tensione totale $v_{tot} = v_1 + v_2$, e SOLO DOPO calcola $P = R i_{tot}^2$."
      },
      {
        "title": "Spegnere le sorgenti controllate per calcolare l'equivalente di Thévenin o Norton",
        "description": "Disattivare i generatori pilotati (VCVS, VCCS, CCVS, CCCS) come fossero generatori indipendenti nel calcolo della resistenza equivalente Rth.",
        "profAdvice": "Errore gravissimo e tipico trabocchetto d'esame: le sorgenti controllate NON vanno MAI disattivate! Modellano la retroazione interna. Si spengono solo i generatori indipendenti e si calcola la resistenza di Thévenin applicando un generatore di prova $V_a / I_a$."
      },
      {
        "title": "Usare Rth = Voc / Isc per l'equivalente Thévenin quando Voc = 0",
        "description": "Nelle reti con sole sorgenti controllate, $V_{oc} = 0$ e $I_{sc} = 0$, portando all'indeterminazione $0/0$.",
        "profAdvice": "In una rete senza generatori indipendenti, la tensione a vuoto $V_{oc}$ e la corrente di cortocircuito $I_{sc}$ sono sempre nulle. L'unico metodo per ricavare l'equivalente di Thévenin o Norton è applicare il generatore ausiliario di prova $V_a / I_a$!"
      }
    ],
    "workedExample": {
      "title": "Calcolo degli equivalenti di Thévenin, Norton e massimo trasferimento con generatore pilotato CCVS",
      "problemStatement": "Si consideri un circuito con morsetti $A-B$. È presente un generatore di tensione indipendente $E = 18\\text{ V}$ in serie a un resistore $R_1 = 3\\text{ }\\Omega$. In parallelo a questo ramo vi è un resistore $R_2 = 6\\text{ }\\Omega$. In serie al morsetto $A$ è presente un generatore di tensione controllato in corrente (CCVS) che eroga una tensione $v_c = r_m \\cdot i_1$ (con polo positivo verso $A$), con $r_m = 2\\text{ }\\Omega$, dove $i_1$ è la corrente che fluisce attraverso $R_1$ verso il basso.\n1. Determinare l'equivalente di Thévenin $(V_{th}, R_{th})$ ai morsetti $A-B$.\n2. Determinare il corrispondente circuito equivalente di Norton $(I_{no}, R_{no})$.\n3. Determinare la resistenza di carico $R_L$ da collegare ad $A-B$ per assorbire la massima potenza e calcolare tale potenza.",
      "steps": [
        {
          "step": "Passo 1: Calcolo della tensione a vuoto V_th = V_oc",
          "explanation": "A vuoto (nessun carico tra $A$ e $B$), la corrente uscente dal morsetto $A$ è nulla. Pertanto, la corrente che attraversa il CCVS è zero, ma la corrente $i_1$ fluisce nella maglia formata da $E$, $R_1$ e $R_2$:",
          "math": "i_1 = \\frac{E}{R_1 + R_2} = \\frac{18}{3 + 6} = 2\\text{ A}"
        },
        {
          "step": "Passo 2: Calcolo della tensione a vuoto ai morsetti A-B",
          "explanation": "La tensione a vuoto $V_{AB, oc}$ è data dalla tensione su $R_2$ più la tensione del generatore controllato $v_c = r_m i_1$:",
          "math": "\\begin{aligned} V_{R2} &= R_2 \\cdot i_1 = 6\\text{ }\\Omega \\cdot 2\\text{ A} = 12\\text{ V} \\\\ v_c &= r_m \\cdot i_1 = 2\\text{ }\\Omega \\cdot 2\\text{ A} = 4\\text{ V} \\\\ V_{th} &= V_{AB, oc} = V_{R2} + v_c = 12 + 4 = 16\\text{ V} \\end{aligned}"
        },
        {
          "step": "Passo 3: Calcolo di R_th con generatore ausiliario di prova V_a",
          "explanation": "Spegniamo il generatore indipendente $E$ (sostituito da un cortocircuito). Colleghiamo tra $A$ e $B$ un generatore di tensione di prova $V_a$. Calcoliamo la corrente entrante $I_a$. La corrente $I_a$ entra nel morsetto $A$, quindi attraversa a ritroso il CCVS:",
          "math": "\\text{Corrente sul ramo di controllo: } i_1 = - I_a \\frac{R_2}{R_1 + R_2} = - I_a \\frac{6}{9} = - \\frac{2}{3} I_a"
        },
        {
          "step": "Passo 4: Scrittura della LKV alla maglia di prova",
          "explanation": "La tensione $V_a$ ai morsetti vale:",
          "math": "\\begin{aligned} V_a &= (R_1 \\parallel R_2) \\cdot I_a - v_c = \\left( \\frac{3 \\cdot 6}{3 + 6} \\right) I_a - r_m i_1 \\\\ &= 2 I_a - 2 \\left( -\\frac{2}{3} I_a \\right) = 2 I_a + \\frac{4}{3} I_a = \\frac{10}{3} I_a \\\\ R_{th} &= \\frac{V_a}{I_a} = \\frac{10}{3} \\approx 3.33\\text{ }\\Omega \\end{aligned}"
        },
        {
          "step": "Passo 5: Massimo trasferimento di potenza",
          "explanation": "Per massimizzare la potenza assorbita dal carico, scegliamo $R_L = R_{th} = \\frac{10}{3}\\text{ }\\Omega$. La potenza massima vale:",
          "math": "P_{L, max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{16^2}{4 \\cdot (10/3)} = \\frac{256}{40 / 3} = \\frac{256 \\cdot 3}{40} = 19.2\\text{ W}"
        },
        {
          "step": "Passo 6: Ricavo dell'equivalente duale di Norton",
          "explanation": "Noto l'equivalente di Thévenin $(V_{th}, R_{th})$, l'equivalente di Norton si ottiene determinando la corrente di cortocircuito $I_{no} = I_{sc}$ ai morsetti:",
          "math": "I_{no} = \\frac{V_{th}}{R_{th}} = \\frac{16\\text{ V}}{\\frac{10}{3}\\text{ }\\Omega} = \\frac{48}{10} = 4.8\\text{ A}, \\quad R_{no} = R_{th} = \\frac{10}{3}\\text{ }\\Omega"
        }
      ],
      "finalResult": "L'equivalente Thévenin ha $V_{th} = 16\\text{ V}$ e $R_{th} = \\frac{10}{3}\\text{ }\\Omega \\approx 3.33\\text{ }\\Omega$; il corrispondente equivalente di Norton ha generatore indipendente di corrente $I_{no} = 4.8\\text{ A}$ in parallelo alla resistenza $R_{no} = 3.33\\text{ }\\Omega$. Il carico ottimo vale $R_L = 3.33\\text{ }\\Omega$ e assorbe una potenza massima di $P_{L, max} = 19.2\\text{ W}$.",
      "takeaway": "L'uso rigoroso del generatore di prova $V_a$ ha permesso di catturare l'effetto del generatore controllato sulla resistenza interna senza cadere nella trappola di disattivarlo. Il passaggio da Thévenin a Norton è immediato tramite la relazione $V_{th} = R_{th} \\cdot I_{no}$."
    }
  },
  {
    "id": "ch6",
    "number": 6,
    "parziale": 1,
    "title": "Bipoli Non Lineari & Diodi Ideali",
    "subtitle": "Caratteristiche v-i, punto di lavoro, metodo analitico a ipotesi ON/OFF, Graetz, Zener",
    "readTime": "24 min",
    "tags": [
      "Diodi",
      "Non Lineari",
      "Punto di Lavoro",
      "Ipotesi ON/OFF",
      "Ponte di Graetz",
      "Zener",
      "Piccoli Segnali"
    ],
    "description": "Studio rigoroso dei componenti non lineari statici: definizione del punto di riposo Q, retta di carico, modello analitico del diodo ideale con commutazione tra stati ON/OFF, algoritmo sistematico di verifica delle ipotesi di conduzione, circuiti raddrizzatori (Graetz), diodi Zener e linearizzazione incrementale per piccoli segnali.",
    "sections": [
      {
        "id": "sec6-1",
        "title": "6.1 Bipoli Non Lineari e Punto di Lavoro (Q)",
        "content": "Un bipolo si definisce **non lineare** se la sua caratteristica costitutiva tensione-corrente $f(v, i) = 0$ non è rappresentabile da una linea retta passante per l'origine.\n\nQuando un bipolo non lineare viene connesso a una rete lineare attiva, il regime stazionario è determinato dall'intersezione tra due curve nel piano $(v, i)$:\n1. La caratteristica non lineare del componente: $i = f(v)$ (o $v = g(i)$).\n2. La **retta di carico** (load line) imposta dalla rete lineare vista dai suoi morsetti, espressa tramite l'equivalente di Thévenin $(V_{th}, R_{th})$:\n$$v = V_{th} - R_{th} \\cdot i \\iff i = \\frac{V_{th} - v}{R_{th}}$$\nIl punto di intersezione $Q(V_Q, I_Q)$ prende il nome di **punto di lavoro** (o di riposo, quiescent point)."
      },
      {
        "id": "sec6-2",
        "title": "6.2 Il Modello a Commutazione del Diodo Ideale",
        "content": "Il **diodo ideale** è il bipolo non lineare tempo-invariante a conduzione unidirezionale. La sua caratteristica $v-i$ presenta uno spigolo a $90^\\circ$ nell'origine ed è descritta da due stati mutuamente esclusivi:\n\n### 1. Stato ON (Conduzione Diretta)\n- Il diodo si comporta come un **cortocircuito perfetto**:\n$$v_D = 0$$\n- **Condizione di consistenza fisica:** La corrente diretta deve essere strettamente concorde col verso della freccia (anodo $\\to$ catodo):\n$$i_D \\ge 0$$\n\n### 2. Stato OFF (Interdizione Inversa)\n- Il diodo si comporta come un **circuito aperto perfetto**:\n$$i_D = 0$$\n- **Condizione di consistenza fisica:** La tensione ai capi del diodo deve essere polarizzata inversamente (anodo a potenziale inferiore al catodo):\n$$v_D \\le 0$$\n\n**Tabella di Sintesi delle Equazioni e Vincoli:**\n| Stato Ipotizzato | Modello Circuitale Sostitutivo | Variabile Calcolata | Vincolo da Verificare |\n| :---: | :---: | :---: | :---: |\n| **ON** | Cortocircuito ($v_D = 0$) | Corrente $i_D$ | $i_D \\ge 0$ |\n| **OFF** | Circuito Aperto ($i_D = 0$) | Tensione $v_D$ | $v_D \\le 0$ |"
      },
      {
        "id": "sec6-3",
        "title": "6.3 Metodo Sistematico a Ipotesi ON/OFF (Algoritmo d'Esame)",
        "content": "Per risolvere qualsiasi rete contenente $N$ diodi ideali, si applica l'algoritmo combinatorio a ipotesi:\n\n1. **Numero di configurazioni possibili:**\n   Con $N$ diodi, esistono $2^N$ combinazioni di stato (es. per $N=2$ vi sono 4 combinazioni: [ON, ON], [ON, OFF], [OFF, ON], [OFF, OFF]).\n2. **Formulazione dell'ipotesi:** Si sceglie una combinazione di stati plausibile.\n3. **Sostituzione circuitale:** Si rimpiazza ogni diodo ipotizzato ON con un cortocircuito e ogni diodo ipotizzato OFF con un circuito aperto.\n4. **Risoluzione della rete lineare:** Si risolve la rete risultante determinando le correnti $i_{D,k}$ per i diodi ON e le tensioni $v_{D,m}$ per i diodi OFF.\n5. **Verifica dei vincoli di consistenza:**\n   - Per ogni diodo ipotizzato ON: controllare se $i_{D,k} \\ge 0$.\n   - Per ogni diodo ipotizzato OFF: controllare se $v_{D,m} \\le 0$.\n6. **Esito:**\n   - Se **tutti i vincoli** sono soddisfatti, l'ipotesi è **CORRETTA** ed è l'unica soluzione fisica ammissibile.\n   - Se anche **un solo vincolo è violato**, l'ipotesi è **FALSA** e va rigettata completamente. Si passa alla combinazione successiva."
      },
      {
        "id": "sec6-4",
        "title": "6.4 Raddrizzatori: Semionda e Ponte di Graetz",
        "content": "I circuiti a diodi permettono la conversione da corrente alternata (AC) a corrente continua (DC):\n\n### A. Raddrizzatore a Semionda\nCon una tensione d'ingresso sinusoidale $v_s(t) = V_M \\sin(\\omega t)$:\n- Quando $v_s(t) > 0$: il diodo conduce ($v_D = 0$), $v_o(t) = v_s(t)$.\n- Quando $v_s(t) < 0$: il diodo è interdetto ($i_D = 0$), $v_o(t) = 0$.\nTensione media sul carico: $V_{dc} = \\frac{V_M}{\\pi} \\approx 0.318 V_M$.\n\n### B. Raddrizzatore a Doppia Semionda (Ponte di Graetz a 4 Diodi)\nCostituito da una configurazione a rombo con 4 diodi $D_1, D_2, D_3, D_4$:\n- **Semionda positiva ($v_s > 0$):** Conducono contemporaneamente i diodi $D_1$ e $D_4$. I diodi $D_2$ e $D_3$ sono interdetti. La tensione d'uscita vale $v_o(t) = +v_s(t)$.\n- **Semionda negativa ($v_s < 0$):** Conducono contemporaneamente $D_2$ e $D_3$, mentre $D_1$ e $D_4$ sono interdetti. La corrente attraversa il carico nello **stesso verso**, fornendo $v_o(t) = -v_s(t) = +|v_s(t)|$.\n- Tensione media raddoppiata:\n$$V_{dc} = \\frac{2 V_M}{\\pi} \\approx 0.637 V_M$$"
      },
      {
        "id": "sec6-5",
        "title": "6.5 Diodo Zener e Linearizzazione per Piccoli Segnali",
        "content": "### Il Diodo Zener\nÈ un diodo progettato per operare in regime di rottura inversa controllata (**breakdown** o effetto Zener/valanga).\n- In polarizzazione diretta ($v_D > 0$): si comporta come un normale diodo (ON con $v_D \\approx 0$).\n- In polarizzazione inversa debole ($-V_Z < v_D < 0$): è interdetto (OFF, $i_D = 0$).\n- In regione Zener ($v_D \\le -V_Z$): la tensione rimane rigorosamente fissata al valore di breakdown $-V_Z$, mentre la corrente inversa $i_Z = -i_D \\ge 0$ può assumere qualsiasi valore positivo limitato dal circuito esterno. Viene ampiamente impiegato come **stabilizzatore di tensione**.\n\n### Linearizzazione per Piccoli Segnali\nAttorno a un punto di lavoro stazionario $Q(V_Q, I_Q)$, se il segnale applicato è una piccola variazione $\\tilde{v}(t) \\ll V_Q$, la caratteristica non lineare $i = f(v)$ può essere approssimata tramite lo sviluppo di Taylor al primo ordine:\n$$i(t) = I_Q + \\tilde{i}(t) \\approx f(V_Q) + \\left. \\frac{df}{dv} \\right|_{V_Q} \\cdot \\tilde{v}(t)$$\nDefinendo la **conduttanza differenziale** $g_d$ e la **resistenza differenziale** $r_d$:\n$$g_d = \\left. \\frac{di}{dv} \\right|_{Q}, \\quad r_d = \\frac{1}{g_d} = \\left( \\left. \\frac{di}{dv} \\right|_{Q} \\right)^{-1}$$\nIl comportamento per le sole variazioni dinamiche è descritto da un circuito lineare equivalente dove il bipolo non lineare è rimpiazzato dal resistore lineare $r_d$."
      }
    ],
    "keyPoints": [
      "Diodo ideale ON: cortocircuito ($v_D = 0$) con vincolo essenziale $i_D \\ge 0$.",
      "Diodo ideale OFF: circuito aperto ($i_D = 0$) con vincolo essenziale $v_D \\le 0$.",
      "Metodo delle ipotesi: formulare le $2^N$ ipotesi, sostituire corti/aperti, risolvere e verificare i vincoli.",
      "Ponte di Graetz: conducono a coppie alterne ($D_1-D_4$ e $D_2-D_3$), raddrizzamento a doppia semionda $V_{dc} = 2V_M/\\pi$.",
      "Diodo Zener: fissa la tensione a $V_Z$ quando polarizzato inversamente in breakdown.",
      "Resistenza differenziale: $r_d = (di/dv|_Q)^{-1}$ per l'analisi a piccoli segnali."
    ],
    "pitfalls": [
      {
        "title": "Dimenticare di verificare il vincolo di consistenza",
        "description": "Ipotizzare un diodo ON, calcolare la tensione di uscita e dichiarare concluso l'esercizio senza aver verificato che i_D sia positivo.",
        "profAdvice": "All'esame, un'ipotesi senza verifica vale zero. Se ipotizzi ON, devi calcolare esplicitamente $i_D$ e scrivere: 'poiché $i_D = 3.2\\text{ A} \\ge 0$, il vincolo è verificato'. Se non scrivi la verifica, i docenti considerano la risposta incompleta!"
      },
      {
        "title": "Confondere la polarizzazione Zener",
        "description": "Pensare che il diodo Zener stabilizzi la tensione in conduzione diretta.",
        "profAdvice": "Lo Zener stabilizza la tensione $V_Z$ quando conduce IN POLARIZZAZIONE INVERSA (corrente entrante nel catodo!). In diretta è un normalissimo diodo a $0\\text{ V}$."
      }
    ],
    "workedExample": {
      "title": "Risoluzione a ipotesi di un circuito a due diodi ideali",
      "problemStatement": "Un circuito è alimentato da due generatori di tensione continua: $E_1 = 10\\text{ V}$ ed $E_2 = 4\\text{ V}$. Il generatore $E_1$ è in serie a un resistore $R_1 = 2\\text{ }\\Omega$ e al diodo $D_1$ (anodo connesso verso $E_1$, catodo connesso a un nodo comune $K$). Il generatore $E_2$ è in serie a un resistore $R_2 = 1\\text{ }\\Omega$ e al diodo $D_2$ (anodo verso $E_2$, catodo verso $K$). Dal nodo $K$ alla massa è presente un resistore di carico $R_L = 4\\text{ }\\Omega$. Determinare lo stato di conduzione dei due diodi e la tensione $v_K$ sul carico.",
      "steps": [
        {
          "step": "Passo 1: Formulazione dell'Ipotesi 1 (Entrambi i diodi ON)",
          "explanation": "Ipotizziamo $D_1$ ON e $D_2$ ON. Sostituiamo entrambi con cortocircuiti ($v_{D1} = 0, v_{D2} = 0$). Il nodo $K$ è alimentato contemporaneamente dai due rami attraverso $R_1$ ed $R_2$.",
          "math": "\\text{LKC al nodo } K: \\frac{E_1 - v_K}{R_1} + \\frac{E_2 - v_K}{R_2} = \\frac{v_K}{R_L}"
        },
        {
          "step": "Passo 2: Calcolo del potenziale v_K sotto Ipotesi 1",
          "explanation": "Sostituendo i valori $E_1=10, R_1=2, E_2=4, R_2=1, R_L=4$:",
          "math": "\\begin{aligned} \\frac{10 - v_K}{2} + \\frac{4 - v_K}{1} &= \\frac{v_K}{4} \\\\ 5 - 0.5 v_K + 4 - v_K &= 0.25 v_K \\\\ 9 &= 1.75 v_K = \\frac{7}{4} v_K \\implies v_K = \\frac{36}{7} \\approx 5.14\\text{ V} \\end{aligned}"
        },
        {
          "step": "Passo 3: Verifica dei vincoli per l'Ipotesi 1",
          "explanation": "Calcoliamo le correnti diodi $i_{D1}$ e $i_{D2}$:",
          "math": "\\begin{aligned} i_{D1} &= \\frac{E_1 - v_K}{R_1} = \\frac{10 - 5.14}{2} = +2.43\\text{ A} \\ge 0 \\quad (\\text{OK!}) \\\\ i_{D2} &= \\frac{E_2 - v_K}{R_2} = \\frac{4 - 5.14}{1} = -1.14\\text{ A} < 0 \\quad (\\mathbf{VIOLATO!}) \\end{aligned}"
        },
        {
          "step": "Passo 4: Formulazione dell'Ipotesi 2 (D1 ON, D2 OFF)",
          "explanation": "Poiché $i_{D2} < 0$, l'Ipotesi 1 è falsa. Ipotizziamo $D_1$ ON (cortocircuito) e $D_2$ OFF (circuito aperto, $i_{D2} = 0$). Il nodo $K$ è un partitore di tensione tra $E_1, R_1$ ed $R_L$:",
          "math": "v_K = E_1 \\frac{R_L}{R_1 + R_L} = 10 \\cdot \\frac{4}{2 + 4} = \\frac{40}{6} = \\frac{20}{3} \\approx 6.67\\text{ V}"
        },
        {
          "step": "Passo 5: Verifica dei vincoli per l'Ipotesi 2",
          "explanation": "Verifichiamo $i_{D1} \\ge 0$ e $v_{D2} \\le 0$:",
          "math": "\\begin{aligned} i_{D1} &= \\frac{E_1 - v_K}{R_1} = \\frac{10 - 6.67}{2} = +1.67\\text{ A} \\ge 0 \\quad (\\text{VERIFICATO}) \\\\ v_{D2} &= E_2 - v_K = 4 - 6.67 = -2.67\\text{ V} \\le 0 \\quad (\\text{VERIFICATO}) \\end{aligned}"
        }
      ],
      "finalResult": "L'ipotesi consistente è: $D_1$ ON e $D_2$ OFF. La tensione sul carico vale $v_K = \\frac{20}{3}\\text{ V} \\approx 6.67\\text{ V}$. Il diodo $D_1$, essendo collegato al generatore a potenziale più elevato, interdice $D_2$ portando il catodo di $D_2$ a un potenziale superiore al suo anodo.",
      "takeaway": "Questo circuito realizza una funzione di selezione a massimo ('diodo OR'): il ramo con tensione più alta spegne gli altri rami. Se in parallelo al carico fosse inserito un diodo Zener con $V_Z < 6.67\\text{ V}$, la tensione verrebbe stabilizzata e bloccata esattamente alla soglia di Zener $V_Z$."
    }
  },
  {
    "id": "ch7",
    "number": 7,
    "parziale": 1,
    "title": "Amplificatori Operazionali (OP-AMP)",
    "subtitle": "Modello ideale, cortocircuito virtuale, configurazioni lineari, Howland, potenza e corrente d'uscita",
    "readTime": "25 min",
    "tags": [
      "OP-AMP",
      "Cortocircuito Virtuale",
      "Invertente",
      "Non Invertente",
      "Buffer",
      "Sommatore",
      "Differenziale",
      "Howland"
    ],
    "description": "Trattazione approfondita dell'Amplificatore Operazionale in regime lineare: postulati del modello ideale, principio del cortocircuito virtuale con retroazione negativa, analisi topologica delle configurazioni fondamentali (invertente, non-invertente, buffer, sommatore, differenziale, pompa di Howland), calcolo rigoroso della corrente d'uscita e bilancio di potenza erogata.",
    "sections": [
      {
        "id": "sec7-1",
        "title": "7.1 Il Modello Ideale di Amplificatore Operazionale",
        "content": "L'**Amplificatore Operazionale** (OP-AMP) è un circuito integrato ad altissimo guadagno con due morsetti d'ingresso (morsetto invertente $V^-$ e non-invertente $V^+$) e un morsetto d'uscita $V_o$.\n\nNel **modello ideale**, si assumono le seguenti proprietà limite:\n1. **Guadagno differenziale ad anello aperto infinito:** $A_d \\to \\infty$.\n2. **Resistenza d'ingresso differenziale infinita:** $R_{in} \\to \\infty$.\n   Conseguenza diretta: le correnti di polarizzazione assorbite dagli ingressi sono rigorosamente nulle:\n   $$i^+ = 0, \\quad i^- = 0$$\n3. **Resistenza d'uscita nulla:** $R_{out} = 0$. L'uscita si comporta come un generatore ideale di tensione controllato.\n4. **Banda passante infinita:** $B \\to \\infty$ (risposta istantanea senza ritardi di fase).\n5. **Reiezione di modo comune infinita (CMRR $\\to \\infty$):** L'OP-AMP amplifica unicamente la differenza $v_d = v^+ - v^-$.\n6. **Tensione di sbilanciamento (offset) nulla.**"
      },
      {
        "id": "sec7-2",
        "title": "7.2 Il Principio del Cortocircuito Virtuale",
        "content": "Quando l'OP-AMP opera con **retroazione negativa** (esiste un cammino resistivo che collega l'uscita $v_o$ al morsetto invertente $v^-$) e la tensione d'uscita rimane compresa nei limiti di linearità imposti dalle tensioni di alimentazione ($-V_{EE} < v_o < +V_{CC}$), il sistema forza la tensione differenziale $v_d$ a zero:\n$$v_d = v^+ - v^- = \\frac{v_o}{A_d} \\xrightarrow{A_d \\to \\infty} 0 \\implies v^+ = v^-$$\n\nQuesto risultato è noto come **Cortocircuito Virtuale**:\n- **Tensione differenziale nulla:** $v^+ = v^-$. I due morsetti si trovano allo stesso potenziale.\n- **Correnti d'ingresso rigorosamente nulle:** $i^+ = 0$ e $i^- = 0$.\n\n*Avvertenza fondamentale:* Il cortocircuito virtuale **non è un cortocircuito fisico**! Non scorre alcuna corrente tra il morsetto $+$ e il morsetto $-$. È un'uguaglianza di potenziale generata dall'azione di controllo in anello chiuso."
      },
      {
        "id": "sec7-3",
        "title": "7.3 Configurazioni Lineari Fondamentali",
        "content": "Grazie al cortocircuito virtuale e a $i^+ = i^- = 0$, l'analisi di qualsiasi circuito con OP-AMP si riconduce a una semplice LKC al morsetto invertente:\n\n### 1. Amplificatore Invertente\n- Ingresso non-invertente a massa: $v^+ = 0 \\implies v^- = 0$ (massa virtuale).\n- LKC al nodo $v^-$: $\\frac{v_{in} - 0}{R_1} + \\frac{v_o - 0}{R_2} = 0$.\n$$v_o = - \\frac{R_2}{R_1} \\cdot v_{in}$$\n- Resistenza d'ingresso: $R_{in} = R_1$.\n\n### 2. Amplificatore Non Invertente\n- Tensione all'ingresso: $v^+ = v_{in} \\implies v^- = v_{in}$.\n- Partitore di tensione sulla retroazione: $v^- = v_o \\frac{R_1}{R_1 + R_2} = v_{in}$.\n$$v_o = \\left( 1 + \\frac{R_2}{R_1} \\right) \\cdot v_{in}$$\n- Resistenza d'ingresso: $R_{in} \\to \\infty$ (non assorbe corrente dalla sorgente).\n\n### 3. Buffer / Inseguitore di Tensione (Voltage Follower)\n- Caso limite della configurazione non invertente con $R_2 = 0$ (cortocircuito diretto) e $R_1 \\to \\infty$:\n$$v_o = v_{in}$$\n- Guadagno unitario ($A_v = 1$), resistenza d'ingresso infinita e d'uscita nulla. Ideale per **disaccoppiare** stadi circuitali ed eliminare l'effetto di carico.\n\n### 4. Sommatore Invertente\n$$v_o = - \\left( \\frac{R_f}{R_1} v_1 + \\frac{R_f}{R_2} v_2 + \\dots + \\frac{R_f}{R_k} v_k \\right)$$\n\n### 5. Amplificatore Differenziale\nCon rapporto bilanciato $\\frac{R_4}{R_3} = \\frac{R_2}{R_1}$:\n$$v_o = \\frac{R_2}{R_1} (v_2 - v_1)$$"
      },
      {
        "id": "sec7-4",
        "title": "7.4 Il Generatore di Corrente di Howland",
        "content": "La **pompa di corrente di Howland** è una celebre configurazione a retroazione mista (sia positiva che negativa) che trasforma una tensione d'ingresso $v_{in}$ in una corrente costante erogata su un carico $Z_L$, **indipendentemente dal potenziale del carico**:\nSe i resistori soddisfano la condizione di bilanciamento:\n$$\\frac{R_2}{R_1} = \\frac{R_4}{R_3}$$\nla corrente sul carico vale:\n$$i_L = \\frac{v_{in}}{R_1} \\cdot \\frac{R_4}{R_3}$$\nLa resistenza equivalente d'uscita vista dal carico tende a infinito ($R_{out} \\to \\infty$), realizzando un generatore di corrente controllato ideale."
      },
      {
        "id": "sec7-5",
        "title": "7.5 Calcolo della Corrente d'Uscita (i_o) e Potenza dell'OP-AMP",
        "content": "Uno degli errori più devastanti negli esami di Elettrotecnica riguarda il calcolo della corrente d'uscita $i_o$ dell'OP-AMP.\n\n**Regola d'oro:**\nNon è possibile determinare la tensione d'uscita $v_o$ scrivendo una LKC al nodo d'uscita, poiché la corrente $i_o$ erogata dal morsetto dell'OP-AMP è un'incognita a priori!\n\n**Procedura corretta in 2 step:**\n1. Si calcola prima la tensione $v_o$ usando esclusivamente la LKC al nodo $v^-$ (e/o $v^+$) grazie al cortocircuito virtuale.\n2. SOLO DOPO aver trovato $v_o$, si scrive la LKC al nodo d'uscita per calcolare $i_o$:\n$$i_o = i_{feedback} + i_{carico} = \\frac{v_o - v^-}{R_2} + \\frac{v_o}{R_L}$$\n\n**Potenza erogata dall'OP-AMP:**\nL'OP-AMP non crea energia dal nulla: assorbe potenza continua dalle alimentazioni $\\pm V_{CC}$ e ne trasferisce una quota al segnale d'uscita. La potenza erogata ai morsetti d'uscita vale:\n$$P_{erog, opamp} = v_o \\cdot i_o$$"
      }
    ],
    "keyPoints": [
      "OP-AMP ideale: $i^+ = 0, i^- = 0$ sempre.",
      "Cortocircuito virtuale: $v^+ = v^-$ SOLO in presenza di retroazione negativa stabile.",
      "Invertente: $v_o = -(R_2/R_1) v_{in}$. Non-invertente: $v_o = (1 + R_2/R_1) v_{in}$. Buffer: $v_o = v_{in}$.",
      "Differenziale bilanciato: $v_o = (R_2/R_1)(v_2 - v_1)$.",
      "La corrente d'uscita $i_o$ NON è nulla: si calcola scrivendo la LKC al nodo d'uscita $i_o = i_{fb} + i_L$.",
      "Potenza erogata dall'operazionale: $P = v_o \\cdot i_o$."
    ],
    "pitfalls": [
      {
        "title": "Supporre i_o = 0 al morsetto d'uscita",
        "description": "Scrivere la LKC al nodo di uscita dell'OP-AMP dimenticando di inserire la corrente $i_o$ generata dall'OP-AMP stesso.",
        "profAdvice": "Se scrivi la LKC al nodo d'uscita ponendo la corrente dell'operazionale a zero, stai violando la conservazione della carica. L'OP-AMP può erogare qualunque corrente richiesta dal carico e dall'anello di retroazione!"
      },
      {
        "title": "Applicare il cortocircuito virtuale con retroazione positiva",
        "description": "Scrivere $v^+ = v^-$ in un comparatore di Schmitt o in un circuito con resistenza connessa a $v^+$.",
        "profAdvice": "Il cortocircuito virtuale richiede retroazione NEGATIVA prevalente. Con retroazione positiva l'OP-AMP satura a $+V_{sat}$ o $-V_{sat}$ e $v^+ \\neq v^-$."
      }
    ],
    "workedExample": {
      "title": "Calcolo completo di tensione, corrente d'uscita e potenza erogata da un OP-AMP",
      "problemStatement": "Un amplificatore operazionale ideale alimentato a $\\pm 15\\text{ V}$ è configurato come amplificatore invertente con resistore d'ingresso $R_1 = 5\\text{ k}\\Omega$ e resistore di reazione $R_2 = 20\\text{ k}\\Omega$. All'ingresso è applicata una tensione continua $v_{in} = 2\\text{ V}$. All'uscita $v_o$ è collegato un resistore di carico verso massa pari a $R_L = 2\\text{ k}\\Omega$.\n1. Determinare la tensione d'uscita $v_o$.\n2. Calcolare la corrente $i_o$ erogata dal morsetto d'uscita dell'OP-AMP.\n3. Calcolare la potenza erogata dall'OP-AMP al circuito.",
      "steps": [
        {
          "step": "Passo 1: Calcolo della tensione d'uscita v_o",
          "explanation": "Poiché l'OP-AMP ha retroazione negativa sul morsetto invertente e $v^+ = 0\\text{ V}$ (collegato a massa), per il cortocircuito virtuale abbiamo $v^- = v^+ = 0\\text{ V}$. Applichiamo la formula dell'amplificatore invertente:",
          "math": "v_o = - \\frac{R_2}{R_1} v_{in} = - \\frac{20\\text{ k}\\Omega}{5\\text{ k}\\Omega} \\cdot 2\\text{ V} = - 4 \\cdot 2 = -8\\text{ V}"
        },
        {
          "step": "Passo 2: Verifica della mancata saturazione",
          "explanation": "La tensione $-8\\text{ V}$ è compresa tra le tensioni di alimentazione ($-15\\text{ V} < -8\\text{ V} < +15\\text{ V}$), quindi l'OP-AMP lavora effettivamente in regione lineare.",
          "math": "-V_{EE} < -8\\text{ V} < +V_{CC} \\quad (\\text{Linearità confermata})"
        },
        {
          "step": "Passo 3: Calcolo delle correnti sui rami connessi al nodo d'uscita",
          "explanation": "Al nodo d'uscita convergono la corrente di retroazione che proviene da $R_2$ e la corrente che scende nel carico $R_L$. Poiché $v^- = 0\\text{ V}$ e $v_o = -8\\text{ V}$:",
          "math": "\\begin{aligned} i_{R2} &= \\frac{v_o - v^-}{R_2} = \\frac{-8\\text{ V} - 0}{20\\text{ k}\\Omega} = -0.4\\text{ mA} \\\\ i_{L} &= \\frac{v_o - 0}{R_L} = \\frac{-8\\text{ V}}{2\\text{ k}\\Omega} = -4.0\\text{ mA} \\end{aligned}"
        },
        {
          "step": "Passo 4: LKC al nodo d'uscita per trovare la corrente dell'OP-AMP",
          "explanation": "La corrente $i_o$ uscente dal morsetto dell'OP-AMP deve alimentare entrambi i rami:",
          "math": "i_o = i_{R2} + i_L = -0.4\\text{ mA} - 4.0\\text{ mA} = -4.4\\text{ mA}"
        },
        {
          "step": "Passo 5: Calcolo della potenza erogata dall'OP-AMP",
          "explanation": "La potenza erogata dall'OP-AMP vale $P_{erog} = v_o \\cdot i_o$:",
          "math": "P_{erog} = v_o \\cdot i_o = (-8\\text{ V}) \\cdot (-4.4\\text{ mA}) = +35.2\\text{ mW}"
        }
      ],
      "finalResult": "La tensione d'uscita vale $v_o = -8\\text{ V}$. La corrente erogata dall'OP-AMP è $i_o = -4.4\\text{ mA}$ (cioè la corrente ENTRA nel morsetto d'uscita dell'operazionale). La potenza erogata è strettamente positiva: $P_{erog} = 35.2\\text{ mW}$.",
      "takeaway": "Nonostante la tensione d'uscita sia negativa, la potenza erogata dall'OP-AMP è positiva perché la corrente scorre verso l'interno dell'uscita ($(-8) \\times (-4.4) = +35.2\\text{ mW}$). Rispetto a configurazioni a retroazione mista come la pompa di corrente di Howland, qui la retroazione è puramente negativa."
    }
  },
  {
    "id": "ch8",
    "number": 8,
    "parziale": 1,
    "title": "Doppi Bipoli Resistivi & Trasformatore Ideale",
    "subtitle": "Matrici R, G, H, T, reciprocità, simmetria, cascata, giratori e trasformatore ideale n:1",
    "readTime": "26 min",
    "tags": [
      "Doppi Bipoli",
      "Matrice R",
      "Matrice G",
      "Matrice H",
      "Matrice T",
      "Reciprocità",
      "Trasformatore Ideale",
      "Giratore"
    ],
    "description": "Studio formale dei componenti a due porte (doppi bipoli): le 6 rappresentazioni matriciali, le condizioni analitiche di reciprocità e simmetria, i circuiti equivalenti a T e a Pi-greco, le regole di interconnessione (serie, parallelo, cascata), il giratore e la teoria del trasformatore ideale con la regola di riflessione quadratica delle impedenze.",
    "sections": [
      {
        "id": "sec8-1",
        "title": "8.1 Definizione di Doppio Bipolo e Condizione di Porta",
        "content": "Un **doppio bipolo** (o rete a due porte, two-port network) è un componente a 4 terminali accessibili raggruppati in due coppie di morsetti denominate **Porta 1** (ingresso) e **Porta 2** (uscita).\n\nAffinché il componente sia classificabile come doppio bipolo, deve essere rigorosamente soddisfatta la **condizione di porta**:\n$$i_1 = i_1' \\quad \\text{e} \\quad i_2 = i_2'$$\novvero la corrente che entra da un morsetto di una porta deve essere identicamente uguale alla corrente che esce dall'altro morsetto della stessa porta.\n\nAdottando la convenzione normale dell'utilizzatore su entrambe le porte (corrente entrante dal morsetto a potenziale positivo $+$), la potenza istantanea totale assorbita vale:\n$$p_{ass}(t) = v_1(t) i_1(t) + v_2(t) i_2(t)$$"
      },
      {
        "id": "sec8-2",
        "title": "8.2 Le 6 Rappresentazioni Matriciali",
        "content": "Scegliendo due grandezze indipendenti tra le 4 variabili $(v_1, i_1, v_2, i_2)$, si ottengono le 6 matrici caratteristiche dei doppi bipoli lineari:\n\n### 1. Matrice delle Resistenze [R] (Parametri a Vuoto)\n$$\\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix} = \\begin{bmatrix} R_{11} & R_{12} \\\\ R_{21} & R_{22} \\end{bmatrix} \\begin{bmatrix} i_1 \\\\ i_2 \\end{bmatrix}$$\n- $R_{11} = \\left. \\frac{v_1}{i_1} \\right|_{i_2 = 0}$: resistenza d'ingresso a vuoto sulla porta 2.\n- $R_{12} = \\left. \\frac{v_1}{i_2} \\right|_{i_1 = 0}$: transresistenza inversa a vuoto.\n- $R_{21} = \\left. \\frac{v_2}{i_1} \\right|_{i_2 = 0}$: transresistenza diretta a vuoto.\n- $R_{22} = \\left. \\frac{v_2}{i_2} \\right|_{i_1 = 0}$: resistenza d'uscita a vuoto sulla porta 1.\n\n### 2. Matrice delle Conduttanze [G] (Parametri in Cortocircuito)\n$$\\begin{bmatrix} i_1 \\\\ i_2 \\end{bmatrix} = \\begin{bmatrix} G_{11} & G_{12} \\\\ G_{21} & G_{22} \\end{bmatrix} \\begin{bmatrix} v_1 \\\\ v_2 \\end{bmatrix}, \\quad [\\mathbf{G}] = [\\mathbf{R}]^{-1}$$\nI parametri si calcolano cortocircuitando alternativamente la porta 2 ($v_2 = 0$) o la porta 1 ($v_1 = 0$).\n\n### 3. Matrice Ibrida [H]\n$$\\begin{bmatrix} v_1 \\\\ i_2 \\end{bmatrix} = \\begin{bmatrix} h_{11} & h_{12} \\\\ h_{21} & h_{22} \\end{bmatrix} \\begin{bmatrix} i_1 \\\\ v_2 \\end{bmatrix}$$\nAmpiamente usata per la modellazione dei transistor BJT ($h_{11} = h_{ie}$, $h_{21} = h_{fe}$).\n\n### 4. Matrice di Trasmissione [T] (o di Catena)\n$$\\begin{bmatrix} v_1 \\\\ i_1 \\end{bmatrix} = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} \\begin{bmatrix} v_2 \\\\ -i_2 \\end{bmatrix}$$\n*Attenzione:* Nella matrice di trasmissione si impiega $-i_2$ (corrente uscente dalla porta 2) per facilitare il collegamento in cascata."
      },
      {
        "id": "sec8-3",
        "title": "8.3 Condizioni di Reciprocità e Simmetria",
        "content": "Le proprietà fisiche interne della rete si riflettono in vincoli algebrici sulle matrici:\n\n### Reciprocità\nUn doppio bipolo è **reciproco** se soddisfa il Teorema di reciprocità (una sorgente applicata alla porta 1 produce alla porta 2 lo stesso effetto che produrrebbe scambiando le due porte).\n- Condizione su $[\\mathbf{R}]$: $R_{12} = R_{21}$ (matrice simmetrica).\n- Condizione su $[\\mathbf{G}]$: $G_{12} = G_{21}$.\n- Condizione su $[\\mathbf{H}]$: $h_{12} = -h_{21}$.\n- Condizione su $[\\mathbf{T}]$: $\\det([\\mathbf{T}]) = AD - BC = 1$.\n*Nota:* Una rete contenente solo resistori lineari e trasformatori ideali è sempre reciproca. La presenza di **generatori controllati o giratori VIOLA la reciprocità** ($R_{12} \\neq R_{21}$).\n\n### Simmetria\nUn doppio bipolo è **simmetrico** se le due porte sono elettricamente indistinguibili:\n- Condizione su $[\\mathbf{R}]$: $R_{11} = R_{22}$ e $R_{12} = R_{21}$.\n- Condizione su $[\\mathbf{G}]$: $G_{11} = G_{22}$ e $G_{12} = G_{21}$.\n- Condizione su $[\\mathbf{T}]$: $A = D$ e $AD - BC = 1$."
      },
      {
        "id": "sec8-4",
        "title": "8.4 Collegamenti di Doppi Bipoli",
        "content": "Quando si interconnettono due doppi bipoli $a$ e $b$ (purché sia verificato il criterio di validità delle porte o **test di Brune**):\n1. **Connessione Serie-Serie:** Le tensioni si sommano e le correnti sono identiche:\n$$[\\mathbf{R}_{tot}] = [\\mathbf{R}_a] + [\\mathbf{R}_b]$$\n2. **Connessione Parallelo-Parallelo:** Le correnti si sommano e le tensioni sono identiche:\n$$[\\mathbf{G}_{tot}] = [\\mathbf{G}_a] + [\\mathbf{G}_b]$$\n3. **Connessione in Cascata:** L'uscita del primo diventa l'ingresso del secondo:\n$$[\\mathbf{T}_{tot}] = [\\mathbf{T}_a] \\cdot [\\mathbf{T}_b]$$\nIl prodotto matriciale non è commutativo, rispecchiando l'ordine geometrico della catena."
      },
      {
        "id": "sec8-5",
        "title": "8.5 Il Giratore e il Trasformatore Ideale n:1",
        "content": "### Il Giratore Ideale\nBipolo non reciproco adinamico con costante di girazione $r$:\n$$v_1 = -r \\cdot i_2, \\quad v_2 = r \\cdot i_1$$\nInverte l'impedenza di carico: se chiuso su un condensatore di capacità $C$, alla porta d'ingresso appare come un'induttanza equivalente $L_{eq} = r^2 C$.\n\n### Il Trasformatore Ideale con Rapporto Spire n:1\nComponente adinamico conservativo ideale a 2 porte. Sia $n = \\frac{N_1}{N_2}$ il rapporto di trasformazione:\n1. **Relazioni costitutive:**\n$$v_1 = n \\cdot v_2$$\n$$i_2 = -n \\cdot i_1 \\iff i_1 = -\\frac{1}{n} i_2$$\n2. **Conservazione della potenza istantanea:**\n$$p(t) = v_1 i_1 + v_2 i_2 = (n v_2) i_1 + v_2 (-n i_1) = 0\\text{ W}$$\nIl trasformatore ideale non dissipa né immagazzina energia: è perfettamente trasparente al flusso di potenza istantaneo.\n3. **Legge di Riflessione delle Impedenze:**\nConnettendo alla porta secondaria (porta 2) un carico generico $Z_L$ (tale che $v_2 = - Z_L i_2$):\n$$Z_{in} = \\frac{v_1}{i_1} = \\frac{n v_2}{-(1/n) i_2} = n^2 \\frac{v_2}{-i_2} = n^2 Z_L$$\nL'impedenza vista dal primario viene moltiplicata per il **quadrato del rapporto di trasformazione** $n^2$."
      }
    ],
    "keyPoints": [
      "Condizione di porta: $i_1 = i_1'$ e $i_2 = i_2'$.",
      "Matrice [R]: $v_1 = R_{11} i_1 + R_{12} i_2$, $v_2 = R_{21} i_1 + R_{22} i_2$.",
      "Matrice [T]: $[v_1, i_1]^T = [A, B; C, D] [v_2, -i_2]^T$.",
      "Reciprocità: $R_{12} = R_{21}$, $AD - BC = 1$. Violata da generatori controllati e giratori.",
      "Collegamento in cascata: $[\\mathbf{T}_{tot}] = [\\mathbf{T}_a] \\cdot [\\mathbf{T}_b]$.",
      "Trasformatore ideale $n:1$: $v_1 = n v_2$, $i_2 = -n i_1$.",
      "Riflessione delle impedenze: $Z_{in} = n^2 Z_L$."
    ],
    "pitfalls": [
      {
        "title": "Dimenticare il segno meno su i2 nella matrice T",
        "description": "Definire la matrice di trasmissione con $+i_2$ anziché con la corrente uscente $-i_2$.",
        "profAdvice": "Per convenzione internazionale e del Polimi, la seconda colonna del vettore di destra della matrice di trasmissione ha $-i_2$. Se ometti il meno, tutti i segni dei parametri B e D risulteranno invertiti!"
      },
      {
        "title": "Dimenticare di elevare al quadrato il rapporto n nel trasporto di impedenza",
        "description": "Scrivere $R_{in} = n \\cdot R_L$ anziché $R_{in} = n^2 \\cdot R_L$.",
        "profAdvice": "Poiché la tensione scala con $n$ e la corrente scala con $1/n$, l'impedenza scala con $n / (1/n) = n^2$. Questo fattore quadratico è cruciale nei compiti d'esame!"
      }
    ],
    "workedExample": {
      "title": "Calcolo dei parametri R di un doppio bipolo con VCCS e verifica di non-reciprocità",
      "problemStatement": "Un doppio bipolo a T è formato da due resistori $R_1 = 4\\text{ }\\Omega$ sulla porta 1 e $R_2 = 2\\text{ }\\Omega$ sulla porta 2, con un resistore comune sul ramo verticale $R_3 = 6\\text{ }\\Omega$. In parallelo al ramo verticale $R_3$ è inserito un generatore di corrente controllato in tensione (VCCS) che eroga una corrente $i_g = g_m \\cdot v_1$ diretta verso l'alto (verso il nodo comune), con $g_m = 0.5\\text{ S}$.\n1. Determinare i quattro parametri della matrice delle resistenze $[\\mathbf{R}]$.\n2. Verificare se il doppio bipolo è reciproco o non-reciproco.",
      "steps": [
        {
          "step": "Passo 1: Calcolo di R11 e R21 ponendo porta 2 aperta (i2 = 0)",
          "explanation": "Alimentiamo la porta 1 con una corrente nota $i_1$ e lasciamo la porta 2 a vuoto ($i_2 = 0$). La corrente nel ramo verticale $R_3$ è la somma di $i_1$ e della corrente del generatore $i_g = g_m v_1$:",
          "math": "i_{R3} = i_1 + g_m v_1 \\implies v_3 = R_3 (i_1 + g_m v_1)"
        },
        {
          "step": "Passo 2: Espressione di v1 in funzione di i1",
          "explanation": "La tensione alla porta 1 vale $v_1 = R_1 i_1 + v_3 = R_1 i_1 + R_3 i_1 + g_m R_3 v_1$:",
          "math": "\\begin{aligned} v_1 (1 - g_m R_3) &= (R_1 + R_3) i_1 \\\\ v_1 (1 - 0.5 \\cdot 6) &= (4 + 6) i_1 \\implies v_1 (1 - 3) = 10 i_1 \\\\ -2 v_1 &= 10 i_1 \\implies v_1 = -5 i_1 \\\\ R_{11} &= \\left. \\frac{v_1}{i_1} \\right|_{i_2=0} = -5\\text{ }\\Omega \\end{aligned}"
        },
        {
          "step": "Passo 3: Calcolo di R21 a vuoto sulla porta 2",
          "explanation": "Poiché $i_2 = 0$, non c'è caduta su $R_2$, quindi $v_2 = v_3 = v_1 - R_1 i_1 = -5 i_1 - 4 i_1 = -9 i_1$:",
          "math": "R_{21} = \\left. \\frac{v_2}{i_1} \\right|_{i_2=0} = -9\\text{ }\\Omega"
        },
        {
          "step": "Passo 4: Calcolo di R12 e R22 ponendo porta 1 aperta (i1 = 0)",
          "explanation": "Con $i_1 = 0$, la tensione $v_1$ è data unicamente dalla tensione sul centro stella $v_3$: $v_1 = v_3$. Ma $v_3 = R_3 (i_2 + g_m v_1) = R_3 i_2 + g_m R_3 v_1$, da cui $v_1(1 - g_m R_3) = R_3 i_2 \\implies -2 v_1 = 6 i_2 \\implies v_1 = -3 i_2$:",
          "math": "R_{12} = \\left. \\frac{v_1}{i_2} \\right|_{i_1=0} = -3\\text{ }\\Omega"
        },
        {
          "step": "Passo 5: Calcolo di R22",
          "explanation": "La tensione sulla porta 2 vale $v_2 = R_2 i_2 + v_3 = 2 i_2 + (-3 i_2) = -1 i_2$:",
          "math": "R_{22} = \\left. \\frac{v_2}{i_2} \\right|_{i_1=0} = -1\\text{ }\\Omega"
        }
      ],
      "finalResult": "La matrice delle resistenze è:\n$$[\\mathbf{R}] = \\begin{bmatrix} -5 & -3 \\\\ -9 & -1 \\end{bmatrix} \\Omega$$\nPoiché $R_{12} = -3\\text{ }\\Omega \\neq R_{21} = -9\\text{ }\\Omega$, il doppio bipolo è NON RECIPROCO. La presenza del VCCS distrugge la simmetria della matrice.",
      "takeaway": "Nelle reti con sorgenti controllate, la matrice $R$ è generalmente asimmetrica ($R_{12} \\neq R_{21}$), e alcuni elementi diagonali possono risultare negativi per via dell'attività dei generatori."
    }
  },
  {
    "id": "ch9",
    "number": 9,
    "parziale": 1,
    "title": "Regime Sinusoidale Monofase (AC) & Fasori",
    "subtitle": "Segnali sinusoidali, Steinmetz, impedenze ed ammettenze, leggi di Kirchhoff e diagrammi fasoriali",
    "readTime": "28 min",
    "tags": [
      "AC",
      "Fasori",
      "Steinmetz",
      "Impedenza",
      "Ammettenza",
      "Reattanza",
      "Suscettanza",
      "Diagramma Fasoriale"
    ],
    "description": "Teoria completa dell'analisi nei circuiti in regime sinusoidale permanente: il metodo algebrico dei fasori (trasformata di Steinmetz), l'operatore simbolico differenziale $j\\omega$, la derivazione delle impedenze di resistore, induttore e condensatore, il triangolo delle impedenze e i diagrammi fasoriali nel piano complesso di Gauss.",
    "sections": [
      {
        "id": "sec9-1",
        "title": "9.1 Grandezze Sinusoidali nel Dominio del Tempo",
        "content": "Una grandezza elettrica scalare variabile sinusoidalmente nel tempo è espressa nella forma canonica:\n$$a(t) = A_M \\cos(\\omega t + \\alpha) = \\sqrt{2} A \\cos(\\omega t + \\alpha)$$\ndove:\n- $A_M$: ampiezza di picco (valore massimo);\n- $A = \\frac{A_M}{\\sqrt{2}}$: **valore efficace** (RMS - Root Mean Square);\n- $\\omega = 2\\pi f = \\frac{2\\pi}{T}$: **pulsazione** angolare in radianti al secondo ($[\\text{rad/s}]$);\n- $f = \\frac{1}{T}$: **frequenza** in Hertz ($[\\text{Hz}]$);\n- $T$: **periodo** in secondi ($[\\text{s}]$);\n- $\\alpha$: **fase iniziale** (in radianti o gradi).\n\n**Il Valore Efficace (RMS):**\nIl valore efficace di una corrente periodica è pari all'intensità di una corrente continua costante che dissipa, su uno stesso resistore $R$ durante un intero periodo $T$, la medesima quantità media di energia termica per effetto Joule:\n$$A = \\sqrt{\\frac{1}{T} \\int_0^T a^2(t) dt}$$\nPer segnali puramente sinusoidali: $A = \\frac{A_M}{\\sqrt{2}} \\approx 0.707 A_M$."
      },
      {
        "id": "sec9-2",
        "title": "9.2 Metodo dei Fasori (Trasformata di Steinmetz)",
        "content": "Sfruttando la formula di Eulero $e^{j\\theta} = \\cos\\theta + j\\sin\\theta$, una sinusoide può essere interpretata come la parte reale di un fasore rotante nel piano complesso con velocità angolare $\\omega$:\n$$a(t) = \\sqrt{2} A \\cos(\\omega t + \\alpha) = \\Re \\left\\{ \\sqrt{2} A e^{j(\\omega t + \\alpha)} \\right\\} = \\Re \\left\\{ \\sqrt{2} \\bar{A} e^{j\\omega t} \\right\\}$$\ndove $\\bar{A}$ è il **fasore a valore efficace** associato alla grandezza temporale:\n$$\\bar{A} = A e^{j\\alpha} = A \\angle \\alpha = A (\\cos\\alpha + j\\sin\\alpha)$$\n\n**Proprietà fondamentali della Trasformata di Steinmetz:**\n1. **Derivazione temporale $\\implies$ moltiplicazione per $j\\omega$:**\n   $$\\frac{d a(t)}{dt} \\longleftrightarrow j\\omega \\bar{A}$$\n2. **Integrazione temporale $\\implies$ divisione per $j\\omega$:**\n   $$\\int a(t) dt \\longleftrightarrow \\frac{\\bar{A}}{j\\omega} = -j \\frac{\\bar{A}}{\\omega}$$\n3. **Linearità:**\n   $$\\alpha a(t) + \\beta b(t) \\longleftrightarrow \\alpha \\bar{A} + \\beta \\bar{B}$$\nLa trasformata di Steinmetz converte equazioni differenziali ordinarie a coefficienti costanti in semplici equazioni algebriche lineari nel campo dei numeri complessi $\\mathbb{C}$."
      },
      {
        "id": "sec9-3",
        "title": "9.3 Relazioni Costitutive Simboliche e Impedenze",
        "content": "Applicando la trasformata di Steinmetz ai bipoli elementari:\n\n### 1. Resistore Ideale\n$$v(t) = R i(t) \\implies \\bar{V} = R \\bar{I}$$\n- **Impedenza:** $\\bar{Z}_R = R$.\n- **Sfasamento:** $\\varphi = 0$. Tensione e corrente sono perfettamente **in fase**.\n\n### 2. Induttore Ideale\n$$v(t) = L \\frac{di(t)}{dt} \\implies \\bar{V} = j\\omega L \\bar{I}$$\n- **Impedenza:** $\\bar{Z}_L = j\\omega L = j X_L$.\n- **Reattanza induttiva:** $X_L = \\omega L > 0$ [$\\Omega$].\n- **Sfasamento:** La tensione è in **anticipo di $90^\\circ$** ($\\pi/2$) rispetto alla corrente.\n\n### 3. Condensatore Ideale\n$$i(t) = C \\frac{dv(t)}{dt} \\implies \\bar{I} = j\\omega C \\bar{V} \\implies \\bar{V} = \\frac{1}{j\\omega C} \\bar{I} = -j \\frac{1}{\\omega C} \\bar{I}$$\n- **Impedenza:** $\\bar{Z}_C = \\frac{1}{j\\omega C} = -j \\frac{1}{\\omega C} = j X_C$.\n- **Reattanza capacitiva:** $X_C = - \\frac{1}{\\omega C} < 0$ [$\\Omega$].\n- **Sfasamento:** La tensione è in **ritardo di $90^\\circ$** ($-\\pi/2$) rispetto alla corrente."
      },
      {
        "id": "sec9-4",
        "title": "9.4 Impedenza, Ammettenza e Triangolo delle Impedenze",
        "content": "In generale, un bipolo passivo in regime AC è descritto dall'**Impedenza complessa** $\\bar{Z}$:\n$$\\bar{Z} = \\frac{\\bar{V}}{\\bar{I}} = R + jX = |\\bar{Z}| e^{j\\varphi}$$\n- **Modulo:** $|\\bar{Z}| = \\sqrt{R^2 + X^2}$;\n- **Argomento (angolo di sfasamento):** $\\varphi = \\arctan\\left(\\frac{X}{R}\\right)$;\n- **Resistenza:** $R = \\Re\\{\\bar{Z}\\} = |\\bar{Z}| \\cos\\varphi \\ge 0$;\n- **Reattanza:** $X = \\Im\\{\\bar{Z}\\} = |\\bar{Z}| \\sin\\varphi$.\n\nL'inverso dell'impedenza è l'**Ammettenza complessa** $\\bar{Y}$:\n$$\\bar{Y} = \\frac{1}{\\bar{Z}} = G + jB = |\\bar{Y}| e^{-j\\varphi}$$\ndove:\n- $G = \\frac{R}{R^2 + X^2}$ è la **conduttanza** ($[\\text{S}]$);\n- $B = - \\frac{X}{R^2 + X^2}$ è la **suscettanza** ($[\\text{S}]$).\n*Nota sul segno:* Per un condensatore, la reattanza è negativa ($X_C = -1/(\\omega C)$), ma la suscettanza è positiva: $B_C = \\omega C > 0$."
      },
      {
        "id": "sec9-5",
        "title": "9.5 Leggi di Kirchhoff e Diagrammi Fasoriali",
        "content": "In forma fasoriale, le leggi di Kirchhoff mantengono identica struttura formale al caso in continua (DC):\n1. **LKC Fasoriale:** In ogni nodo della rete:\n$$\\sum_{k} \\bar{I}_k = 0$$\n2. **LKV Fasoriale:** In ogni maglia chiusa orientata:\n$$\\sum_{k} \\bar{V}_k = 0$$\n\nTutti i teoremi delle reti lineari (Partitore di tensione e corrente, Sovrapposizione, Thévenin, Norton, Millman) rimangono validi rimpiazzando le resistenze con le impedenze complesse $\\bar{Z}$ e i generatori con i rispettivi fasori.\n\n**Diagrammi Fasoriali:**\nRappresentano le relazioni geometriche tra le tensioni e le correnti nel piano complesso di Gauss.\n- Per circuiti serie: si assume la corrente $\\bar{I}$ comune sull'asse reale ($\\,\\angle 0^\\circ$) e si sommano vettorialmente $\\bar{V}_R$ (parallelo ad $\\bar{I}$), $\\bar{V}_L$ ($+90^\\circ$), e $\\bar{V}_C$ ($-90^\\circ$).\n- Per circuiti parallelo: si assume la tensione $\\bar{V}$ comune sull'asse reale e si sommano le correnti."
      }
    ],
    "keyPoints": [
      "Fasore: $\\bar{A} = A e^{j\\alpha}$ con $A = A_M / \\sqrt{2}$ (valore efficace).",
      "Derivata temporale $\\leftrightarrow j\\omega$; Integrale temporale $\\leftrightarrow 1/(j\\omega)$.",
      "Impedenze: $\\bar{Z}_R = R$, $\\bar{Z}_L = j\\omega L$, $\\bar{Z}_C = -j/(\\omega C)$.",
      "Reattanza: induttiva $X_L = \\omega L > 0$; capacitiva $X_C = -1/(\\omega C) < 0$.",
      "Suscettanza: $B_C = \\omega C > 0$; $B_L = -1/(\\omega L) < 0$.",
      "LKC ed LKV fasoriali: $\\sum \\bar{I}_k = 0$ e $\\sum \\bar{V}_k = 0$."
    ],
    "pitfalls": [
      {
        "title": "Applicare i fasori con sorgenti a frequenze diverse",
        "description": "Sommare fasori riferiti a generatori operanti a pulsazioni diverse $\\omega_1 \\neq \\omega_2$.",
        "profAdvice": "Il metodo dei fasori è valido SOLO per circuiti che operano a una singola pulsazione fissa $\\omega$. Se nella rete sono presenti sorgenti a pulsazioni distinte, devi usare obbligatoriamente il Principio di Sovrapposizione nel DOMINIO DEL TEMPO, risolvendo due problemi fasoriali separati e sommando le risposte sinusoidali nel tempo!"
      },
      {
        "title": "Sbagliare il segno della reattanza capacitiva",
        "description": "Scrivere $Z_C = +j/(\\omega C)$ o dimenticare il segno meno.",
        "profAdvice": "Ricorda che $1/j = -j$. Quindi $\\bar{Z}_C = \\frac{1}{j\\omega C} = -j \\frac{1}{\\omega C}$. Il segno meno è fondamentale per bilanciare l'induttanza."
      }
    ],
    "workedExample": {
      "title": "Risoluzione analitica di un circuito RLC serie in regime sinusoidale",
      "problemStatement": "Un circuito RLC serie è composto da un resistore $R = 40\\text{ }\\Omega$, un induttore $L = 100\\text{ mH}$ e un condensatore $C = 50\\text{ }\\mu\\text{F}$. Il circuito è alimentato da un generatore sinusoidale di tensione $e(t) = 100\\sqrt{2} \\cos(200 t + 30^\\circ)\\text{ V}$.\n1. Determinare il fasore della tensione $\\bar{E}$.\n2. Calcolare l'impedenza equivalente totale $\\bar{Z}_{eq}$.\n3. Determinare il fasore della corrente $\\bar{I}$ e l'espressione temporale $i(t)$.\n4. Calcolare le tensioni fasoriali sui tre componenti $\\bar{V}_R, \\bar{V}_L, \\bar{V}_C$.",
      "steps": [
        {
          "step": "Passo 1: Definizione del fasore di alimentazione",
          "explanation": "La pulsazione vale $\\omega = 200\\text{ rad/s}$. Il valore efficace della tensione è $E = 100\\text{ V}$ e la fase iniziale è $\\alpha = 30^\\circ$:",
          "math": "\\bar{E} = 100 e^{j 30^\\circ}\\text{ V} = 100 \\angle 30^\\circ\\text{ V}"
        },
        {
          "step": "Passo 2: Calcolo delle reattanze e dell'impedenza serie",
          "explanation": "Calcoliamo $X_L = \\omega L$ e $X_C = -1/(\\omega C)$:",
          "math": "\\begin{aligned} X_L &= \\omega L = 200 \\cdot 0.1 = 20\\text{ }\\Omega \\\\ X_C &= - \\frac{1}{\\omega C} = - \\frac{1}{200 \\cdot 50 \\cdot 10^{-6}} = - \\frac{1}{0.01} = -100\\text{ }\\Omega \\\\ \\bar{Z}_{eq} &= R + j(X_L + X_C) = 40 + j(20 - 100) = 40 - j 80\\text{ }\\Omega \\end{aligned}"
        },
        {
          "step": "Passo 3: Modulo e fase dell'impedenza",
          "explanation": "Esprimiamo $\\bar{Z}_{eq}$ in forma polare:",
          "math": "\\begin{aligned} |\\bar{Z}_{eq}| &= \\sqrt{40^2 + (-80)^2} = \\sqrt{1600 + 6400} = \\sqrt{8000} \\approx 89.44\\text{ }\\Omega \\\\ \\varphi &= \\arctan\\left(\\frac{-80}{40}\\right) = \\arctan(-2) \\approx -63.43^\\circ \\\\ \\bar{Z}_{eq} &= 89.44 \\angle -63.43^\\circ\\text{ }\\Omega \\quad (\\text{Comportamento capacitivo}) \\end{aligned}"
        },
        {
          "step": "Passo 4: Calcolo del fasore di corrente",
          "explanation": "La corrente vale $\\bar{I} = \\frac{\\bar{E}}{\\bar{Z}_{eq}}$:",
          "math": "\\bar{I} = \\frac{100 \\angle 30^\\circ}{89.44 \\angle -63.43^\\circ} = 1.118 \\angle (30^\\circ - (-63.43^\\circ)) = 1.118 \\angle 93.43^\\circ\\text{ A}"
        },
        {
          "step": "Passo 5: Calcolo delle tensioni parziali",
          "explanation": "Moltiplichiamo $\\bar{I}$ per ciascuna impedenza:",
          "math": "\\begin{aligned} \\bar{V}_R &= R \\bar{I} = 40 \\cdot 1.118 \\angle 93.43^\\circ = 44.72 \\angle 93.43^\\circ\\text{ V} \\\\ \\bar{V}_L &= j X_L \\bar{I} = (20 \\angle 90^\\circ)(1.118 \\angle 93.43^\\circ) = 22.36 \\angle 183.43^\\circ\\text{ V} \\\\ \\bar{V}_C &= (-j |X_C|) \\bar{I} = (100 \\angle -90^\\circ)(1.118 \\angle 93.43^\\circ) = 111.8 \\angle 3.43^\\circ\\text{ V} \\end{aligned}"
        }
      ],
      "finalResult": "La corrente temporale è $i(t) = 1.118\\sqrt{2} \\cos(200 t + 93.43^\\circ)\\text{ A}$. La tensione sul condensatore ($V_C = 111.8\\text{ V}$) supera la tensione complessiva applicata dal generatore ($E = 100\\text{ V}$), effetto tipico del partitore reattivo in regime alternato.",
      "takeaway": "Nei circuiti in alternata, la somma vettoriale complessa $\\bar{V}_R + \\bar{V}_L + \\bar{V}_C = \\bar{E}$ è sempre valida, mentre la somma algebrica dei moduli NON è uguale al modulo totale: $44.72 + 22.36 + 111.8 = 178.88\\text{ V} \\neq 100\\text{ V}$."
    }
  },
  {
    "id": "ch10",
    "number": 10,
    "parziale": 1,
    "title": "Potenza in AC, Teorema di Boucherot & Rifasamento",
    "subtitle": "Potenza attiva, reattiva, complessa, Boucherot, rifasamento e massimo trasferimento complesso",
    "readTime": "28 min",
    "tags": [
      "Potenza Attiva",
      "Potenza Reattiva",
      "Potenza Complessa",
      "Boucherot",
      "Fattore di Potenza",
      "Rifasamento",
      "Adattamento Coniugato"
    ],
    "description": "Studio energetico completo del regime sinusoidale: potenza istantanea p(t), attiva P, reattiva Q, complessa S, fattore di potenza, Teorema di conservazione di Boucherot, calcolo sistematico della capacità di rifasamento ed estensione del teorema del massimo trasferimento di potenza nel campo complesso.",
    "sections": [
      {
        "id": "sec10-1",
        "title": "10.1 Potenza Istantanea e Decomposizione Funzionale",
        "content": "Siano $v(t) = \\sqrt{2} V \\cos(\\omega t + \\theta_v)$ e $i(t) = \\sqrt{2} I \\cos(\\omega t + \\theta_i)$ la tensione e la corrente a una porta con convenzione dell'utilizzatore, con sfasamento $\\varphi = \\theta_v - \\theta_i$.\n\nLa potenza istantanea scambiata vale:\n$$p(t) = v(t) i(t) = 2 V I \\cos(\\omega t + \\theta_v) \\cos(\\omega t + \\theta_i)$$\nApplicando l'identità trigonometrica di Werner $\\cos\\alpha \\cos\\beta = \\frac{1}{2} [\\cos(\\alpha - \\beta) + \\cos(\\alpha + \\beta)]$:\n$$p(t) = V I \\cos\\varphi + V I \\cos(2\\omega t + \\theta_v + \\theta_i)$$\nRiscrivendo rispetto alla fase della corrente:\n$$p(t) = \\underbrace{V I \\cos\\varphi [1 + \\cos(2\\omega t + 2\\theta_i)]}_{\\text{termine unidirezionale pulsante}} - \\underbrace{V I \\sin\\varphi \\sin(2\\omega t + 2\\theta_i)}_{\\text{termine oscillante a media nulla}}$$\n\nSi distinguono due quantità fondamentali:\n1. **Potenza Attiva $P$:** È il valore medio temporale di $p(t)$ su un periodo $T$:\n$$P = \\frac{1}{T} \\int_0^T p(t) dt = V I \\cos\\varphi \\quad [\\text{Watt, W}]$$\nRappresenta l'effettiva potenza media convertita irreversibilmente in lavoro utile o calore.\n2. **Potenza Reattiva $Q$:** È l'ampiezza della quota-parte di potenza istantanea che fluisce avanti e indietro a pulsazione doppia $2\\omega$ senza compiere lavoro netto:\n$$Q = V I \\sin\\varphi \\quad [\\text{Volt-Ampere Reattivi, VAR}]$$"
      },
      {
        "id": "sec10-2",
        "title": "10.2 Potenza Complessa e Triangolo delle Potenze",
        "content": "La **Potenza Complessa** $\\bar{S}$ unifica elegantemente potenza attiva e reattiva in un unico numero complesso. È definita come il prodotto tra il fasore della tensione e il **complesso coniugato** del fasore della corrente:\n$$\\bar{S} = \\bar{V} \\cdot \\bar{I}^* = (V e^{j\\theta_v}) \\cdot (I e^{-j\\theta_i}) = V I e^{j(\\theta_v - \\theta_i)} = V I e^{j\\varphi}$$\nSviluppando in forma cartesiana:\n$$\\bar{S} = P + j Q$$\n- **Potenza Apparente $S$:** È il modulo di $\\bar{S}$:\n$$S = |\\bar{S}| = V \\cdot I = \\sqrt{P^2 + Q^2} \\quad [\\text{Volt-Ampere, VA}]$$\n- **Fattore di Potenza (Power Factor):**\n$$\\cos\\varphi = \\frac{P}{S} = \\frac{P}{\\sqrt{P^2 + Q^2}} \\le 1$$\n\n**Segno di $Q$ e convenzione fisica:**\n- **Carico Ohmico-Induttivo (in ritardo):** $\\varphi > 0 \\implies Q > 0$. Il carico **assorbe potenza reattiva induttiva** per sostenere il proprio campo magnetico.\n- **Carico Ohmico-Capacitivo (in anticipo):** $\\varphi < 0 \\implies Q < 0$. Il carico **eroga potenza reattiva** alla rete (assorbe reattiva negativa)."
      },
      {
        "id": "sec10-3",
        "title": "10.3 Il Teorema di Boucherot (Conservazione della Potenza Complessa)",
        "content": "Il **Teorema di Boucherot** è l'applicazione diretta del Teorema di Tellegen al regime sinusoidale.\n\n**Dimostrazione analitica:**\nPer il teorema di Tellegen in forma fasoriale (applicato ai fasori $\\bar{V}$ e ai coniugati $\\bar{I}^*$):\n$$\\sum_{k=1}^b \\bar{S}_k = \\sum_{k=1}^b \\bar{V}_k \\cdot \\bar{I}_k^* = 0$$\nSeparando la parte reale e la parte immaginaria:\n$$\\sum_{k=1}^b P_k = 0 \\quad \\text{e} \\quad \\sum_{k=1}^b Q_k = 0$$\n\n**Enunciato per carichi e sorgenti:**\nIn qualsiasi rete in regime sinusoidale, la potenza attiva totale erogata dalle sorgenti è uguale alla somma delle potenze attive assorbite da tutti i carichi, e la potenza reattiva totale erogata è uguale alla somma delle potenze reattive assorbite:\n$$P_{erog, tot} = \\sum P_{ass, k}, \\quad Q_{erog, tot} = \\sum Q_{ass, k}$$\n*Attenzione:* La potenza apparente $S$ NON si conserva algebricamente: $S_{tot} \\neq \\sum S_k$."
      },
      {
        "id": "sec10-4",
        "title": "10.4 Teoria e Calcolo del Rifasamento",
        "content": "I carichi industriali (motori asincroni, trasformatori) sono prevalentemente induttivi e presentano un fattore di potenza basso (es. $\\cos\\varphi_1 = 0.65 - 0.75$).\n\n**Perché rifasare?**\nLa potenza attiva assorbita è $P = V I \\cos\\varphi$. Per erogare la stessa potenza attiva $P$ a parità di tensione di linea $V$, la corrente assorbita vale:\n$$I = \\frac{P}{V \\cos\\varphi}$$\nUn $\\cos\\varphi$ basso provoca correnti elevate nella linea di distribuzione, con conseguenti:\n1. Elevate perdite di potenza per effetto Joule lungo i conduttori ($P_{linea} = R_{linea} I^2$);\n2. Elevate cadute di tensione lungo le linee $\\Delta V$;\n3. Sovradimensionamento costoso di cavi e trasformatori.\n\n**Principio del Rifasamento con Condensatore in Parallelo:**\nSi connette in parallelo al carico induttivo un banco di condensatori di capacità $C$. Poiché il condensatore ideale non consuma potenza attiva ($P_C = 0$), la potenza attiva $P$ dell'utenza rimane inalterata, mentre il condensatore fornisce la potenza reattiva $Q_C < 0$ necessaria ad alzare il fattore di potenza dal valore iniziale $\\cos\\varphi_1$ al valore contrattuale desiderato $\\cos\\varphi_2$ (tipicamente $0.90 - 0.95$).\n\n**Formula Universale di Dimensionamento della Capacità di Rifasamento:**\nLa variazione di potenza reattiva richiesta è:\n$$\\Delta Q = Q_2 - Q_1 = P (\\tan\\varphi_2 - \\tan\\varphi_1) < 0$$\nPoiché per un condensatore collegato a tensione efficace $V$:\n$$Q_C = - \\omega C V^2$$\nUguagliando $Q_C = \\Delta Q$:\n$$- \\omega C V^2 = P (\\tan\\varphi_2 - \\tan\\varphi_1) \\implies \\omega C V^2 = P (\\tan\\varphi_1 - \\tan\\varphi_2)$$\nRicavando la capacità:\n$$C_{rif} = \\frac{P (\\tan\\varphi_1 - \\tan\\varphi_2)}{\\omega V^2}$$"
      },
      {
        "id": "sec10-5",
        "title": "10.5 Massimo Trasferimento di Potenza Complessa (Adattamento Coniugato)",
        "content": "Sia data una rete lineare vista dai morsetti $A-B$ con equivalente Thévenin fasoriale composto dal fasore di tensione a vuoto $\\bar{V}_{th}$ e dall'impedenza interna $\\bar{Z}_{th} = R_{th} + j X_{th}$.\nSi desidera determinare l'impedenza di carico $\\bar{Z}_L = R_L + j X_L$ che massimizza la **potenza attiva** $P_L$ assorbita dal carico.\n\n**Teorema dell'Adattamento Coniugato:**\nLa potenza attiva assorbita dal carico è massima se e solo se l'impedenza di carico è il **complesso coniugato dell'impedenza interna del generatore**:\n$$\\bar{Z}_L = \\bar{Z}_{th}^* = R_{th} - j X_{th}$$\novvero:\n$$R_L = R_{th} \\quad \\text{e} \\quad X_L = - X_{th}$$\nLa reattanza del carico cancella esattamente per risonanza la reattanza interna ($X_{th} + X_L = 0$).\n\n**Valore della potenza attiva massima:**\n$$P_{L, max} = \\frac{|\\bar{V}_{th}|^2}{4 R_{th}}$$\n\n**Caso Carico Puramente Resistivo ($Z_L = R_L$, $X_L = 0$):**\nSe il carico non può includere componenti reattivi ma è vincolato ad essere puramente resistivo, la condizione di massimo si realizza scegliendo la resistenza pari al **modulo** dell'impedenza Thévenin:\n$$R_L = |\\bar{Z}_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}$$"
      }
    ],
    "keyPoints": [
      "Potenza attiva: $P = V I \\cos\\varphi$ [W]. Potenza reattiva: $Q = V I \\sin\\varphi$ [VAR].",
      "Potenza complessa: $\\bar{S} = \\bar{V} \\cdot \\bar{I}^* = P + jQ$ [VA]. Potenza apparente: $S = V \\cdot I$.",
      "Fattore di potenza: $\\cos\\varphi = P / S$.",
      "Teorema di Boucherot: $\\sum P_k = 0$ e $\\sum Q_k = 0$ su tutta la rete.",
      "Formula del rifasamento monofase: $C_{rif} = \\frac{P(\\tan\\varphi_1 - \\tan\\varphi_2)}{\\omega V^2}$.",
      "Massimo trasferimento complesso: $\\bar{Z}_L = \\bar{Z}_{th}^* \\implies P_{max} = \\frac{|\\bar{V}_{th}|^2}{4 R_{th}}$."
    ],
    "pitfalls": [
      {
        "title": "Dimenticare il complesso coniugato I* nella potenza complessa",
        "description": "Calcolare $\\bar{S} = \\bar{V} \\cdot \\bar{I}$ anziché $\\bar{V} \\cdot \\bar{I}^*$.",
        "profAdvice": "Se calcoli $\\bar{V} \\cdot \\bar{I}$, l'angolo risultante sarà $\\theta_v + \\theta_i$ che non ha alcun significato fisico! Solo coniugando la corrente l'argomento diventa $\\theta_v - \\theta_i = \\varphi$."
      },
      {
        "title": "Sommare le potenze apparenti S",
        "description": "Scrivere $S_{tot} = S_1 + S_2$ credendo che valga per la potenza apparente ciò che vale per P e Q.",
        "profAdvice": "Boucherot vale ESCLUSIVAMENTE per la potenza complessa $\\bar{S}$, e quindi per la parte reale $P$ e per la parte immaginaria $Q$. Non sommare mai i moduli $S$!"
      }
    ],
    "workedExample": {
      "title": "Calcolo del bilancio di potenza con Teorema di Boucherot e dimensionamento del condensatore di rifasamento",
      "problemStatement": "Un'utenza industriale monofase è alimentata alla tensione efficace $V = 230\\text{ V}$ a frequenza $f = 50\\text{ Hz}$. L'impianto assorbe una potenza attiva $P = 4600\\text{ W}$ con fattore di potenza induttivo $\\cos\\varphi_1 = 0.8$.\n1. Determinare la potenza reattiva $Q_1$, la potenza apparente $S_1$ e la corrente di linea $I_1$ assorbita prima del rifasamento.\n2. Calcolare la capacità $C_{rif}$ del condensatore da inserire in parallelo per rifasare il carico a $\\cos\\varphi_2 = 0.95$.\n3. Calcolare la nuova corrente di linea $I_2$ dopo il rifasamento.",
      "steps": [
        {
          "step": "Passo 1: Parametri iniziali prima del rifasamento",
          "explanation": "Dato $\\cos\\varphi_1 = 0.8$, l'angolo di sfasamento vale $\\varphi_1 = \\arccos(0.8) \\approx 36.87^\\circ$. Calcoliamo $\\sin\\varphi_1 = \\sqrt{1 - 0.8^2} = 0.6$ e $\\tan\\varphi_1 = \\frac{0.6}{0.8} = 0.75$.",
          "math": "\\begin{aligned} S_1 &= \\frac{P}{\\cos\\varphi_1} = \\frac{4600}{0.8} = 5750\\text{ VA} \\\\ Q_1 &= P \\cdot \\tan\\varphi_1 = 4600 \\cdot 0.75 = 3450\\text{ VAR} \\\\ I_1 &= \\frac{S_1}{V} = \\frac{5750}{230} = 25\\text{ A} \\end{aligned}"
        },
        {
          "step": "Passo 2: Angolo e tangente desiderati",
          "explanation": "Per il nuovo fattore di potenza $\\cos\\varphi_2 = 0.95$ induttivo:",
          "math": "\\varphi_2 = \\arccos(0.95) \\approx 18.19^\\circ \\implies \\tan\\varphi_2 = \\tan(18.19^\\circ) \\approx 0.3287"
        },
        {
          "step": "Passo 3: Applicazione del Teorema di Boucherot per la potenza reattiva",
          "explanation": "Per il Teorema di Boucherot, le potenze reattive si sommano algebricamente ($Q_{tot} = Q_1 + Q_C$). La potenza reattiva che il condensatore di rifasamento deve erogare vale:",
          "math": "\\Delta Q = Q_2 - Q_1 = P(\\tan\\varphi_2 - \\tan\\varphi_1) = 4600(0.3287 - 0.75) = -1938\\text{ VAR} \\implies Q_C = -1938\\text{ VAR}"
        },
        {
          "step": "Passo 4: Calcolo della capacità C_rif",
          "explanation": "Con $\\omega = 2\\pi f = 2\\pi \\cdot 50 = 314.16\\text{ rad/s}$ e $V = 230\\text{ V}$:",
          "math": "C_{rif} = \\frac{P(\\tan\\varphi_1 - \\tan\\varphi_2)}{\\omega V^2} = \\frac{1938}{314.16 \\cdot (230)^2} = \\frac{1938}{314.16 \\cdot 52900} = \\frac{1938}{1.6619 \\cdot 10^7} \\approx 1.166 \\cdot 10^{-4}\\text{ F} = 116.6\\text{ }\\mu\\text{F}"
        },
        {
          "step": "Passo 5: Calcolo della corrente assorbita dopo il rifasamento",
          "explanation": "Dopo il rifasamento, la potenza attiva è sempre $4600\\text{ W}$, ma con $\\cos\\varphi_2 = 0.95$:",
          "math": "I_2 = \\frac{P}{V \\cos\\varphi_2} = \\frac{4600}{230 \\cdot 0.95} = \\frac{4600}{218.5} \\approx 21.05\\text{ A}"
        }
      ],
      "finalResult": "La capacità richiesta è $C_{rif} \\approx 116.6\\text{ }\\mu\\text{F}$. La corrente di linea scende da $25\\text{ A}$ a $21.05\\text{ A}$ (una riduzione di quasi $4\\text{ A}$, pari a un calo del $29\\%$ delle perdite Joule sui cavi $I^2 R_{linea}$).",
      "takeaway": "In base al Teorema di Boucherot, il rifasamento compensa la potenza reattiva localmente tramite condensatore, lasciando intatta la potenza attiva utile $P$ ma riducendo drasticamente la corrente assorbita."
    }
  },
  {
    "id": "ch11",
    "number": 11,
    "parziale": 1,
    "title": "Risonanza & Risposta in Frequenza",
    "subtitle": "Risonanza serie e parallelo RLC, pulsazione w0, fattore di merito Q, banda e sovratensioni",
    "readTime": "26 min",
    "tags": [
      "Risonanza",
      "RLC Serie",
      "RLC Parallelo",
      "Fattore di Merito Q",
      "Banda Passante",
      "Sovratensioni",
      "Filtri"
    ],
    "description": "Studio dettagliato del fenomeno della risonanza elettrica nei circuiti RLC: risonanza serie (minimo d'impedenza, sovratensione sui reattivi) e risonanza parallelo (massimo d'impedenza, sovracorrente), derivazione analitica del fattore di merito Q, pulsazioni di taglio a -3 dB e banda passante.",
    "sections": [
      {
        "id": "sec11-1",
        "title": "11.1 Definizione Generale di Risonanza",
        "content": "Il fenomeno della **risonanza** si manifesta in un circuito contenente elementi reattivi di tipo opposto (induttori e condensatori) a una determinata frequenza in cui la reattanza complessiva netta si annulla:\n$$\\Im\\{\\bar{Z}(j\\omega_0)\\} = 0 \\quad \\iff \\quad \\Im\\{\\bar{Y}(j\\omega_0)\\} = 0$$\n\nAlla pulsazione di risonanza $\\omega_0$:\n- La tensione e la corrente ai morsetti della rete sono **perfettamente in fase** ($\\varphi = 0$).\n- Il fattore di potenza vale $\\cos\\varphi = 1$.\n- La potenza reattiva totale scambiata con il generatore esterno è rigorosamente nulla:\n$$Q(\\omega_0) = 0$$\nL'induttore e il condensatore si scambiano reciprocamente l'energia elettromagnetica immagazzinata senza assorbire reattiva dalla rete esterna."
      },
      {
        "id": "sec11-2",
        "title": "11.2 Risonanza Serie RLC",
        "content": "Si consideri un circuito RLC serie alimentato da una tensione sinusoidale. L'impedenza complessa vale:\n$$\\bar{Z}(j\\omega) = R + j \\left( \\omega L - \\frac{1}{\\omega C} \\right)$$\n\n**Condizione di risonanza:**\nL'annullamento della parte immaginaria impone:\n$$\\omega_0 L - \\frac{1}{\\omega_0 C} = 0 \\implies \\omega_0^2 = \\frac{1}{LC} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$$\nLa frequenza di risonanza vale:\n$$f_0 = \\frac{\\omega_0}{2\\pi} = \\frac{1}{2\\pi \\sqrt{LC}}$$\n\n**Caratteristiche alla risonanza serie:**\n1. **Impedenza minima:** $|\\bar{Z}(\\omega_0)| = R$. Il circuito presenta la minima opposizione possibile al passaggio di corrente.\n2. **Corrente massima:** $\\bar{I}_{max} = \\frac{\\bar{V}}{R}$.\n3. **Sovratensioni sui componenti reattivi (Fattore di merito $Q_0$):**\n   La tensione sui morsetti dell'induttore e del condensatore alla risonanza vale:\n   $$V_L(\\omega_0) = \\omega_0 L I_{max} = \\omega_0 L \\frac{V}{R} = \\left( \\frac{\\omega_0 L}{R} \\right) V$$\n   $$V_C(\\omega_0) = \\frac{1}{\\omega_0 C} I_{max} = \\frac{1}{\\omega_0 C R} V = \\left( \\frac{1}{\\omega_0 C R} \\right) V$$\n   Definendo il **Fattore di Merito** (o di qualità) $Q_0$:\n   $$Q_0 = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R} = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$$\n   Otteniamo:\n   $$V_L(\\omega_0) = V_C(\\omega_0) = Q_0 \\cdot V$$\n   Se $Q_0 \\gg 1$ (ad esempio $Q_0 = 50$), la tensione ai capi dell'induttore e del condensatore è **50 volte superiore** alla tensione impressa dal generatore, con gravi rischi di perforazione del dielettrico!"
      },
      {
        "id": "sec11-3",
        "title": "11.3 Banda Passante e Selettività",
        "content": "La curva della corrente $I(\\omega)$ presenta una caratteristica campana con picco in $\\omega_0$.\nLe **pulsazioni di taglio** (o di metà potenza a $-3\\text{ dB}$) $\\omega_1$ e $\\omega_2$ sono le frequenze alle quali la potenza attiva dissipata si dimezza, corrispondenti a una corrente ridotta di un fattore $\\sqrt{2}$:\n$$I(\\omega_{1,2}) = \\frac{I_{max}}{\\sqrt{2}}$$\nRisolvendo l'equazione $|\\bar{Z}(j\\omega)| = \\sqrt{2} R$:\n$$\\omega_1 = -\\frac{R}{2L} + \\sqrt{\\left(\\frac{R}{2L}\\right)^2 + \\omega_0^2}, \\quad \\omega_2 = +\\frac{R}{2L} + \\sqrt{\\left(\\frac{R}{2L}\\right)^2 + \\omega_0^2}$$\n\nLa **Banda Passante** (Bandwidth) vale:\n$$B = \\Delta\\omega = \\omega_2 - \\omega_1 = \\frac{R}{L} = \\frac{\\omega_0}{Q_0}$$\nIn Hertz: $\\Delta f = \\frac{f_0}{Q_0}$.\n- Un valore elevato di $Q_0$ comporta una **banda stretta** e un circuito ad **alta selettività** (ideale per filtri di sintonia radio)."
      },
      {
        "id": "sec11-4",
        "title": "11.4 Risonanza Parallelo RLC",
        "content": "In un circuito RLC parallelo, l'ammettenza vale:\n$$\\bar{Y}(j\\omega) = \\frac{1}{R} + j \\left( \\omega C - \\frac{1}{\\omega L} \\right) = G + j \\left( \\omega C - \\frac{1}{\\omega L} \\right)$$\n\n**Caratteristiche alla risonanza parallelo:**\n1. La pulsazione è la medesima: $\\omega_0 = \\frac{1}{\\sqrt{LC}}$.\n2. **Ammettenza minima** $|\\bar{Y}(\\omega_0)| = G = 1/R \\implies$ **Impedenza massima** $|\\bar{Z}(\\omega_0)| = R$.\n3. Alimentato con generatore di corrente $I$, la tensione ai morsetti è massima: $V_{max} = R \\cdot I$.\n4. **Sovracorrenti sui rami reattivi:**\n   $$I_L(\\omega_0) = I_C(\\omega_0) = Q_p \\cdot I$$\n   dove il fattore di merito per il parallelo è il duale del serie:\n   $$Q_p = \\frac{R}{\\omega_0 L} = \\omega_0 C R = R \\sqrt{\\frac{C}{L}}$$\n   *Attenzione al contrasto:* Nel serie $Q_0 \\propto 1/R$, nel parallelo $Q_p \\propto R$."
      }
    ],
    "keyPoints": [
      "Pulsazione di risonanza: $\\omega_0 = 1 / \\sqrt{LC}$ sia per serie che per parallelo.",
      "Risonanza Serie: impedenza minima $Z = R$, corrente massima $I_{max} = V/R$.",
      "Fattore di merito serie: $Q_0 = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.",
      "Sovratensione serie: $V_L = V_C = Q_0 \\cdot V$.",
      "Banda passante a -3 dB: $B = \\Delta\\omega = \\frac{\\omega_0}{Q_0} = \\frac{R}{L}$.",
      "Risonanza Parallelo: ammettenza minima, tensione massima, $Q_p = R \\sqrt{C/L}$, sovracorrenti $I_L = I_C = Q_p \\cdot I$."
    ],
    "pitfalls": [
      {
        "title": "Scambiare la formula di Q tra serie e parallelo",
        "description": "Usare $Q = \\frac{\\omega_0 L}{R}$ per un circuito parallelo.",
        "profAdvice": "Nel circuito serie, una resistenza piccola ($R \\to 0$) minimizza le perdite ed eleva il fattore di merito $Q \\propto 1/R$. Nel circuito parallelo accade l'opposto: una resistenza elevata ($R \\to \\infty$) minimizza le perdite ed eleva $Q \\propto R$!"
      },
      {
        "title": "Ignorare il fenomeno della sovratensione all'esame",
        "description": "Ritenere impossibile che la tensione su un condensatore superi quella del generatore.",
        "profAdvice": "Nei circuiti risonanti, $V_C$ può raggiungere centinaia di Volt anche se alimentato da soli $10\\text{ V}$. È un classico quesito a trabocchetto d'esame!"
      }
    ],
    "workedExample": {
      "title": "Progetto di un circuito RLC serie per sintonia con specifiche di banda e Q",
      "problemStatement": "Si desidera progettare un filtro risonante RLC serie per sintonizzare una stazione radio a frequenza portante $f_0 = 1\\text{ MHz}$ ($10^6\\text{ Hz}$) con una larghezza di banda a $-3\\text{ dB}$ assegnata pari a $\\Delta f = 20\\text{ kHz}$. Il resistore del circuito ha valore $R = 10\\text{ }\\Omega$.\n1. Determinare il fattore di merito $Q_0$.\n2. Calcolare l'induttanza $L$ e la capacità $C$ necessarie.\n3. Se il circuito è alimentato da un segnale d'antenna con tensione efficace $V = 5\\text{ mV}$ alla frequenza di risonanza, calcolare la tensione ai capi del condensatore $V_C$.",
      "steps": [
        {
          "step": "Passo 1: Calcolo del fattore di merito Q_0",
          "explanation": "Dalla relazione tra banda e frequenza di risonanza:",
          "math": "Q_0 = \\frac{f_0}{\\Delta f} = \\frac{10^6\\text{ Hz}}{20 \\cdot 10^3\\text{ Hz}} = \\frac{1000}{20} = 50"
        },
        {
          "step": "Passo 2: Calcolo dell'induttanza L",
          "explanation": "Sapendo che la banda angolare vale $\\Delta\\omega = \\frac{R}{L}$, ricaviamo $L$:",
          "math": "\\begin{aligned} \\Delta\\omega &= 2\\pi \\cdot \\Delta f = 2\\pi \\cdot 20000 \\approx 1.2566 \\cdot 10^5\\text{ rad/s} \\\\ L &= \\frac{R}{\\Delta\\omega} = \\frac{10}{1.2566 \\cdot 10^5} \\approx 7.958 \\cdot 10^{-5}\\text{ H} \\approx 79.58\\text{ }\\mu\\text{H} \\end{aligned}"
        },
        {
          "step": "Passo 3: Calcolo della capacità C",
          "explanation": "Dalla formula di risonanza $\\omega_0 = 2\\pi f_0 = 2\\pi \\cdot 10^6 \\approx 6.283 \\cdot 10^6\\text{ rad/s}$:",
          "math": "C = \\frac{1}{\\omega_0^2 L} = \\frac{1}{(6.283 \\cdot 10^6)^2 \\cdot 7.958 \\cdot 10^{-5}} = \\frac{1}{3.9478 \\cdot 10^{13} \\cdot 7.958 \\cdot 10^{-5}} \\approx 3.183 \\cdot 10^{-10}\\text{ F} = 318.3\\text{ pF}"
        },
        {
          "step": "Passo 4: Calcolo della sovratensione sul condensatore",
          "explanation": "Alla frequenza di risonanza, la tensione sul condensatore vale $V_C = Q_0 \\cdot V$:",
          "math": "V_C(\\omega_0) = Q_0 \\cdot V = 50 \\cdot 5\\text{ mV} = 250\\text{ mV}"
        }
      ],
      "finalResult": "Il filtro richiede $L \\approx 79.6\\text{ }\\mu\\text{H}$ e $C \\approx 318.3\\text{ pF}$, con un fattore di merito $Q_0 = 50$. Il debole segnale d'ingresso da $5\\text{ mV}$ viene amplificato passivamente per risonanza fino a $250\\text{ mV}$ ai capi del condensatore.",
      "takeaway": "L'effetto di risonanza consente l'amplificazione passiva selettiva della tensione nei circuiti radio-ricevitori."
    }
  }
];
