// js/svg-circuits.js
// Scalable vector schematics for Elettrotecnica - Politecnico di Milano
// Pure SVG with dynamic theme support (adapts to light and dark modes)

window.SVG_CIRCUITS = {
  // 1. Fondamenti: Convenzioni Utilizzatore e Generatore
  ch1: `
    <svg viewBox="0 0 760 260" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor"/>
        </marker>
        <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444"/>
        </marker>
        <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0284c7"/>
        </marker>
      </defs>

      <!-- Panel 1: Convenzione Utilizzatore -->
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="310" height="220" rx="12" class="svg-panel-bg" />
        <text x="155" y="30" class="svg-title" text-anchor="middle">Convenzione dell'Utilizzatore (Normale)</text>
        <text x="155" y="50" class="svg-subtitle" text-anchor="middle">Potenza Assorbita: p(t) = v(t) · i(t)</text>
        
        <!-- Bipolo Box -->
        <rect x="110" y="85" width="90" height="60" rx="6" class="svg-box" />
        <text x="155" y="120" class="svg-component-text" text-anchor="middle">BIPOLO</text>

        <!-- Wires -->
        <line x1="30" y1="115" x2="110" y2="115" class="svg-wire" />
        <line x1="200" y1="115" x2="280" y2="115" class="svg-wire" />
        
        <!-- Terminals -->
        <circle cx="30" cy="115" r="4" class="svg-terminal" />
        <circle cx="280" cy="115" r="4" class="svg-terminal" />
        <text x="25" y="105" class="svg-label font-bold text-red">+</text>
        <text x="285" y="105" class="svg-label font-bold text-blue">−</text>

        <!-- Current Arrow i (enters +) -->
        <line x1="45" y1="95" x2="95" y2="95" class="svg-arrow-blue" marker-end="url(#arrow-blue)" />
        <text x="70" y="85" class="svg-current-label text-blue" text-anchor="middle">i(t) entra dal +</text>

        <!-- Voltage Arrow v (from + to - or - to +) -->
        <path d="M 50 160 Q 155 190 260 160" fill="none" class="svg-arrow-red" marker-start="url(#arrow-red)" />
        <text x="155" y="185" class="svg-voltage-label text-red" text-anchor="middle">v(t) = V+ − V−</text>

        <text x="155" y="210" class="svg-note" text-anchor="middle">p &gt; 0: assorbe potenza | p &lt; 0: eroga potenza</text>
      </g>

      <!-- Panel 2: Convenzione Generatore -->
      <g transform="translate(410, 20)">
        <rect x="0" y="0" width="310" height="220" rx="12" class="svg-panel-bg" />
        <text x="155" y="30" class="svg-title" text-anchor="middle">Convenzione del Generatore</text>
        <text x="155" y="50" class="svg-subtitle" text-anchor="middle">Potenza Erogata: p_erog(t) = v(t) · i(t)</text>
        
        <!-- Bipolo Box -->
        <circle cx="155" cy="115" r="32" class="svg-box" />
        <text x="155" y="120" class="svg-component-text" text-anchor="middle">GEN</text>

        <!-- Wires -->
        <line x1="30" y1="115" x2="123" y2="115" class="svg-wire" />
        <line x1="187" y1="115" x2="280" y2="115" class="svg-wire" />
        
        <!-- Terminals -->
        <circle cx="30" cy="115" r="4" class="svg-terminal" />
        <circle cx="280" cy="115" r="4" class="svg-terminal" />
        <text x="25" y="105" class="svg-label font-bold text-red">+</text>
        <text x="285" y="105" class="svg-label font-bold text-blue">−</text>

        <!-- Current Arrow i (exits +) -->
        <line x1="95" y1="95" x2="45" y2="95" class="svg-arrow-blue" marker-end="url(#arrow-blue)" />
        <text x="70" y="85" class="svg-current-label text-blue" text-anchor="middle">i(t) esce dal +</text>

        <!-- Voltage Arrow -->
        <path d="M 50 160 Q 155 190 260 160" fill="none" class="svg-arrow-red" marker-start="url(#arrow-red)" />
        <text x="155" y="185" class="svg-voltage-label text-red" text-anchor="middle">v(t) = V+ − V−</text>

        <text x="155" y="210" class="svg-note" text-anchor="middle">p_erog &gt; 0: eroga | p_erog &lt; 0: assorbe</text>
      </g>
    </svg>
  `,

  // 2. Bipoli lineari e Sorgenti controllate
  ch2: `
    <svg viewBox="0 0 760 280" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- 4 Generatori controllati (Rombi) -->
      <g transform="translate(20, 20)">
        <!-- VCVS -->
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="165" height="220" rx="8" class="svg-panel-bg" />
          <text x="82" y="25" class="svg-title-sm" text-anchor="middle">1. VCVS</text>
          <text x="82" y="42" class="svg-tiny" text-anchor="middle">Tensione pil. in Tensione</text>
          <!-- Diamond -->
          <polygon points="82,70 115,105 82,140 50,105" class="svg-diamond" />
          <text x="82" y="100" class="svg-label font-bold text-red" text-anchor="middle">+</text>
          <text x="82" y="122" class="svg-label font-bold text-blue" text-anchor="middle">−</text>
          <line x1="82" y1="55" x2="82" y2="70" class="svg-wire" />
          <line x1="82" y1="140" x2="82" y2="155" class="svg-wire" />
          <text x="82" y="180" class="svg-math" text-anchor="middle">v = μ · v_x</text>
          <text x="82" y="200" class="svg-tiny text-muted" text-anchor="middle">[μ adimensionale]</text>
        </g>

        <!-- VCCS -->
        <g transform="translate(195, 10)">
          <rect x="0" y="0" width="165" height="220" rx="8" class="svg-panel-bg" />
          <text x="82" y="25" class="svg-title-sm" text-anchor="middle">2. VCCS</text>
          <text x="82" y="42" class="svg-tiny" text-anchor="middle">Corrente pil. in Tensione</text>
          <!-- Diamond -->
          <polygon points="82,70 115,105 82,140 50,105" class="svg-diamond" />
          <line x1="82" y1="120" x2="82" y2="90" class="svg-arrow-blue" marker-end="url(#arrow-blue)" />
          <line x1="82" y1="55" x2="82" y2="70" class="svg-wire" />
          <line x1="82" y1="140" x2="82" y2="155" class="svg-wire" />
          <text x="82" y="180" class="svg-math" text-anchor="middle">i = g_m · v_x</text>
          <text x="82" y="200" class="svg-tiny text-muted" text-anchor="middle">[g_m in Siemens]</text>
        </g>

        <!-- CCVS -->
        <g transform="translate(380, 10)">
          <rect x="0" y="0" width="165" height="220" rx="8" class="svg-panel-bg" />
          <text x="82" y="25" class="svg-title-sm" text-anchor="middle">3. CCVS</text>
          <text x="82" y="42" class="svg-tiny" text-anchor="middle">Tensione pil. in Corrente</text>
          <!-- Diamond -->
          <polygon points="82,70 115,105 82,140 50,105" class="svg-diamond" />
          <text x="82" y="100" class="svg-label font-bold text-red" text-anchor="middle">+</text>
          <text x="82" y="122" class="svg-label font-bold text-blue" text-anchor="middle">−</text>
          <line x1="82" y1="55" x2="82" y2="70" class="svg-wire" />
          <line x1="82" y1="140" x2="82" y2="155" class="svg-wire" />
          <text x="82" y="180" class="svg-math" text-anchor="middle">v = r_m · i_x</text>
          <text x="82" y="200" class="svg-tiny text-muted" text-anchor="middle">[r_m in Ohm]</text>
        </g>

        <!-- CCCS -->
        <g transform="translate(565, 10)">
          <rect x="0" y="0" width="165" height="220" rx="8" class="svg-panel-bg" />
          <text x="82" y="25" class="svg-title-sm" text-anchor="middle">4. CCCS</text>
          <text x="82" y="42" class="svg-tiny" text-anchor="middle">Corrente pil. in Corrente</text>
          <!-- Diamond -->
          <polygon points="82,70 115,105 82,140 50,105" class="svg-diamond" />
          <line x1="82" y1="120" x2="82" y2="90" class="svg-arrow-blue" marker-end="url(#arrow-blue)" />
          <line x1="82" y1="55" x2="82" y2="70" class="svg-wire" />
          <line x1="82" y1="140" x2="82" y2="155" class="svg-wire" />
          <text x="82" y="180" class="svg-math" text-anchor="middle">i = β · i_x</text>
          <text x="82" y="200" class="svg-tiny text-muted" text-anchor="middle">[β adimensionale]</text>
        </g>
      </g>
      <text x="380" y="265" class="svg-note text-center" text-anchor="middle">ATTENZIONE ESAME: Le sorgenti controllate NON vanno mai spente applicando Thévenin o la Sovrapposizione!</text>
    </svg>
  `,

  // 3. Topologia & Tellegen
  ch3: `
    <svg viewBox="0 0 760 260" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Grafo Orientato: Albero vs Coalbero -->
      <g transform="translate(50, 20)">
        <text x="160" y="20" class="svg-title" text-anchor="middle">Grafo della Rete: Albero (Tree) e Corde</text>
        
        <!-- Nodes -->
        <circle cx="60" cy="80" r="14" class="svg-node-circle" />
        <text x="60" y="85" class="svg-node-text" text-anchor="middle">①</text>

        <circle cx="260" cy="80" r="14" class="svg-node-circle" />
        <text x="260" y="85" class="svg-node-text" text-anchor="middle">②</text>

        <circle cx="160" cy="190" r="14" class="svg-node-circle" />
        <text x="160" y="195" class="svg-node-text" text-anchor="middle">③</text>

        <circle cx="60" cy="190" r="14" class="svg-node-circle" />
        <text x="60" y="195" class="svg-node-text" text-anchor="middle">④</text>

        <!-- Tree Edges (Continuous blue) -->
        <line x1="74" y1="80" x2="246" y2="80" class="svg-tree-edge" marker-end="url(#arrow-blue)" />
        <text x="160" y="72" class="svg-edge-label text-blue" text-anchor="middle">ramo 1 (albero)</text>

        <line x1="60" y1="94" x2="60" y2="176" class="svg-tree-edge" marker-end="url(#arrow-blue)" />
        <text x="40" y="140" class="svg-edge-label text-blue" text-anchor="middle">r2</text>

        <line x1="74" y1="190" x2="146" y2="190" class="svg-tree-edge" marker-end="url(#arrow-blue)" />
        <text x="110" y="208" class="svg-edge-label text-blue" text-anchor="middle">r3</text>

        <!-- Cotree / Links (Dashed amber) -->
        <line x1="250" y1="90" x2="170" y2="180" class="svg-cotree-edge" marker-end="url(#arrow-red)" />
        <text x="225" y="145" class="svg-edge-label text-red" text-anchor="middle">corda 4</text>

        <line x1="72" y1="90" x2="148" y2="180" class="svg-cotree-edge" marker-end="url(#arrow-red)" />
        <text x="125" y="125" class="svg-edge-label text-red" text-anchor="middle">corda 5</text>
      </g>

      <!-- Tellegen Box -->
      <g transform="translate(420, 25)">
        <rect x="0" y="0" width="310" height="210" rx="10" class="svg-panel-bg" />
        <text x="155" y="30" class="svg-title" text-anchor="middle">Teorema di Tellegen</text>
        <text x="155" y="55" class="svg-math-bold" text-anchor="middle">∑ v_k · i_k = 0</text>
        
        <text x="20" y="85" class="svg-body-text">• Dimostrazione da KCL e KVL:</text>
        <text x="35" y="108" class="svg-math-sm">v^T · i = (A^T u)^T · i = u^T (A · i)</text>
        <text x="35" y="130" class="svg-math-sm">A · i = 0 (KCL) ⇒ u^T · 0 = 0 (Q.E.D.)</text>
        
        <text x="20" y="160" class="svg-body-text">• Vale per QUALSIASI bipolo:</text>
        <text x="35" y="180" class="svg-tiny text-muted">Lineare, non lineare, tempo-variante!</text>
        <text x="35" y="198" class="svg-tiny text-muted">Basi per Boucherot in AC e conservazione potenze.</text>
      </g>
    </svg>
  `,

  // 4. Analisi Nodale & Supernodo
  ch4: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Supernodo Schematic -->
      <g transform="translate(60, 20)">
        <text x="320" y="20" class="svg-title" text-anchor="middle">Analisi Nodale Modificata: Il Concetto di SUPERNODO</text>
        
        <!-- Supernode boundary (dashed rectangle) -->
        <rect x="130" y="45" width="280" height="115" rx="20" class="svg-supernode-boundary" />
        <text x="270" y="65" class="svg-supernode-tag" text-anchor="middle">SUPERNODO (Racclude la sorgente di tensione E)</text>

        <!-- Node 1 -->
        <circle cx="170" cy="115" r="7" class="svg-node-point" />
        <text x="170" y="140" class="svg-label font-bold text-blue" text-anchor="middle">Nodo 1 (u₁)</text>

        <!-- Node 2 -->
        <circle cx="370" cy="115" r="7" class="svg-node-point" />
        <text x="370" y="140" class="svg-label font-bold text-blue" text-anchor="middle">Nodo 2 (u₂)</text>

        <!-- Voltage source between Node 1 and 2 -->
        <circle cx="270" cy="115" r="22" class="svg-box" />
        <text x="260" y="112" class="svg-label font-bold text-red">+</text>
        <text x="280" y="112" class="svg-label font-bold text-blue">−</text>
        <text x="270" y="130" class="svg-tiny font-bold" text-anchor="middle">E</text>

        <line x1="170" y1="115" x2="248" y2="115" class="svg-wire" />
        <line x1="292" y1="115" x2="370" y2="115" class="svg-wire" />

        <!-- Resistor branches exiting supernode -->
        <line x1="170" y1="115" x2="60" y2="115" class="svg-wire" />
        <line x1="60" y1="115" x2="60" y2="200" class="svg-wire" />
        <text x="45" y="160" class="svg-label" text-anchor="middle">G₁</text>

        <line x1="370" y1="115" x2="480" y2="115" class="svg-wire" />
        <line x1="480" y1="115" x2="480" y2="200" class="svg-wire" />
        <text x="495" y="160" class="svg-label" text-anchor="middle">G₂</text>

        <!-- Ground node 0 -->
        <line x1="50" y1="200" x2="490" y2="200" class="svg-wire" />
        <line x1="270" y1="200" x2="270" y2="215" class="svg-wire" />
        <line x1="255" y1="215" x2="285" y2="215" class="svg-ground" />
        <line x1="260" y1="220" x2="280" y2="220" class="svg-ground" />
        <line x1="265" y1="225" x2="275" y2="225" class="svg-ground" />
        <text x="270" y="240" class="svg-tiny" text-anchor="middle">Massa u₀ = 0</text>
      </g>

      <!-- Formulas box on right -->
      <g transform="translate(540, 45)">
        <rect x="0" y="0" width="190" height="175" rx="8" class="svg-panel-bg" />
        <text x="95" y="25" class="svg-title-sm" text-anchor="middle">Le 2 Equazioni:</text>
        <text x="15" y="55" class="svg-tiny font-bold text-blue">1. KCL al Supernodo:</text>
        <text x="20" y="75" class="svg-math-sm">i_G1 + i_G2 = J_ext</text>
        <text x="15" y="115" class="svg-tiny font-bold text-red">2. Vincolo di tensione:</text>
        <text x="20" y="135" class="svg-math-sm">u₁ − u₂ = E</text>
        <text x="95" y="165" class="svg-tiny text-muted text-center" text-anchor="middle">Risolve l'incognita i_E!</text>
      </g>
    </svg>
  `,

  // 5. Thévenin, Norton & Generatore di prova
  ch5: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Panel 1: Equivalente Thévenin -->
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="330" height="210" rx="10" class="svg-panel-bg" />
        <text x="165" y="28" class="svg-title" text-anchor="middle">Equivalente di Thévenin</text>
        
        <!-- Vth -->
        <circle cx="70" cy="100" r="24" class="svg-box" />
        <text x="70" y="93" class="svg-label font-bold text-red" text-anchor="middle">+</text>
        <text x="70" y="115" class="svg-label font-bold text-blue" text-anchor="middle">−</text>
        <text x="70" y="140" class="svg-tiny font-bold" text-anchor="middle">V_th</text>

        <!-- Rth -->
        <rect x="145" y="90" width="55" height="20" class="svg-resistor" />
        <text x="172" y="82" class="svg-tiny font-bold" text-anchor="middle">R_th</text>

        <!-- Connections -->
        <line x1="70" y1="76" x2="70" y2="100" class="svg-wire" />
        <line x1="70" y1="76" x2="145" y2="76" class="svg-wire" />
        <line x1="70" y1="76" x2="70" y2="60" class="svg-wire" />
        <line x1="70" y1="60" x2="145" y2="60" class="svg-wire" />
        <!-- clean line -->
        <line x1="70" y1="76" x2="145" y2="100" class="hidden" />
        <line x1="94" y1="100" x2="145" y2="100" class="svg-wire" />
        <line x1="200" y1="100" x2="280" y2="100" class="svg-wire" />
        
        <line x1="70" y1="124" x2="70" y2="170" class="svg-wire" />
        <line x1="70" y1="170" x2="280" y2="170" class="svg-wire" />

        <!-- Terminals A and B -->
        <circle cx="280" cy="100" r="5" class="svg-terminal" />
        <circle cx="280" cy="170" r="5" class="svg-terminal" />
        <text x="300" y="105" class="svg-label font-bold" text-anchor="middle">A</text>
        <text x="300" y="175" class="svg-label font-bold" text-anchor="middle">B</text>

        <text x="165" y="198" class="svg-tiny text-muted" text-anchor="middle">V_th = V_oc (tensione a vuoto tra A e B)</text>
      </g>

      <!-- Panel 2: Generatore ausiliario di prova -->
      <g transform="translate(390, 20)">
        <rect x="0" y="0" width="340" height="210" rx="10" class="svg-panel-bg" />
        <text x="170" y="28" class="svg-title" text-anchor="middle">Calcolo R_th con Generatore di Prova</text>
        
        <!-- Network box -->
        <rect x="30" y="70" width="130" height="110" rx="8" class="svg-box" />
        <text x="95" y="110" class="svg-component-text" text-anchor="middle">Rete con</text>
        <text x="95" y="128" class="svg-component-text font-bold" text-anchor="middle">Sorgenti Pil.</text>
        <text x="95" y="145" class="svg-tiny text-red" text-anchor="middle">(Indipendenti OFF)</text>

        <!-- Wires to A and B -->
        <line x1="160" y1="95" x2="220" y2="95" class="svg-wire" />
        <line x1="160" y1="155" x2="220" y2="155" class="svg-wire" />
        <circle cx="220" cy="95" r="4" class="svg-terminal" />
        <circle cx="220" cy="155" r="4" class="svg-terminal" />
        <text x="215" y="85" class="svg-tiny font-bold">A</text>
        <text x="215" y="170" class="svg-tiny font-bold">B</text>

        <!-- Auxiliary test source Va -->
        <line x1="220" y1="95" x2="280" y2="95" class="svg-wire" />
        <line x1="220" y1="155" x2="280" y2="155" class="svg-wire" />
        <circle cx="280" cy="125" r="20" class="svg-box" />
        <line x1="280" y1="95" x2="280" y2="105" class="svg-wire" />
        <line x1="280" y1="145" x2="280" y2="155" class="svg-wire" />
        <text x="280" y="122" class="svg-label font-bold text-red" text-anchor="middle">+</text>
        <text x="280" y="137" class="svg-label font-bold text-blue" text-anchor="middle">−</text>
        <text x="315" y="130" class="svg-tiny font-bold text-red">V_a</text>

        <!-- Test current Ia -->
        <line x1="270" y1="85" x2="235" y2="85" class="svg-arrow-blue" marker-end="url(#arrow-blue)" />
        <text x="252" y="77" class="svg-tiny font-bold text-blue" text-anchor="middle">I_a</text>

        <text x="170" y="200" class="svg-math-sm font-bold text-accent" text-anchor="middle">R_th = V_a / I_a  (Metodo Universale d'Esame)</text>
      </g>
    </svg>
  `,

  // 6. Bipoli non lineari & Diodo ideale
  ch6: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Characteristic Curve V-I -->
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="320" height="210" rx="10" class="svg-panel-bg" />
        <text x="160" y="25" class="svg-title" text-anchor="middle">Caratteristica Diodo Ideale</text>
        
        <!-- Axes -->
        <line x1="40" y1="130" x2="280" y2="130" class="svg-axis" marker-end="url(#arrow)" />
        <text x="290" y="135" class="svg-tiny font-bold">v_D</text>
        <line x1="160" y1="200" x2="160" y2="45" class="svg-axis" marker-end="url(#arrow)" />
        <text x="160" y="38" class="svg-tiny font-bold" text-anchor="middle">i_D</text>

        <!-- OFF state: v <= 0, i = 0 (thick blue line on negative x axis) -->
        <line x1="50" y1="130" x2="160" y2="130" stroke="#0284c7" stroke-width="4" stroke-linecap="round" />
        <text x="95" y="115" class="svg-tiny font-bold text-blue" text-anchor="middle">OFF (v_D ≤ 0, i_D = 0)</text>

        <!-- ON state: v = 0, i >= 0 (thick red line on positive y axis) -->
        <line x1="160" y1="130" x2="160" y2="55" stroke="#ef4444" stroke-width="4" stroke-linecap="round" />
        <text x="215" y="80" class="svg-tiny font-bold text-red">ON (v_D = 0, i_D ≥ 0)</text>

        <circle cx="160" cy="130" r="4" fill="#002d5a" />
        <text x="160" y="195" class="svg-tiny text-muted text-center" text-anchor="middle">Spigolo a 90°: discontinuità di derivata</text>
      </g>

      <!-- Bridge Rectifier (Graetz) -->
      <g transform="translate(380, 20)">
        <rect x="0" y="0" width="350" height="210" rx="10" class="svg-panel-bg" />
        <text x="175" y="25" class="svg-title" text-anchor="middle">Raddrizzatore a Ponte di Graetz</text>
        
        <!-- Diode Bridge Diamond -->
        <!-- D1 (top left) -->
        <polygon points="120,80 145,95 120,110" class="svg-diode" />
        <line x1="145" y1="80" x2="145" y2="110" class="svg-diode-bar" />
        <text x="125" y="70" class="svg-tiny font-bold">D₁</text>

        <!-- D2 (top right) -->
        <polygon points="205,80 230,95 205,110" class="svg-diode" />
        <line x1="230" y1="80" x2="230" y2="110" class="svg-diode-bar" />
        <text x="225" y="70" class="svg-tiny font-bold">D₂</text>

        <!-- D3 (bottom left) -->
        <polygon points="120,135 145,150 120,165" class="svg-diode" />
        <line x1="145" y1="135" x2="145" y2="165" class="svg-diode-bar" />
        <text x="125" y="180" class="svg-tiny font-bold">D₃</text>

        <!-- D4 (bottom right) -->
        <polygon points="205,135 230,150 205,165" class="svg-diode" />
        <line x1="230" y1="135" x2="230" y2="165" class="svg-diode-bar" />
        <text x="225" y="180" class="svg-tiny font-bold">D₄</text>

        <!-- AC Input Terminals -->
        <circle cx="50" cy="122" r="14" class="svg-box" />
        <text x="50" y="126" class="svg-tiny font-bold" text-anchor="middle">~</text>
        <line x1="64" y1="122" x2="95" y2="122" class="svg-wire" />
        <line x1="95" y1="95" x2="95" y2="150" class="svg-wire" />
        <line x1="95" y1="95" x2="120" y2="95" class="svg-wire" />
        <line x1="95" y1="150" x2="120" y2="150" class="svg-wire" />

        <!-- Load R_L -->
        <rect x="290" y="105" width="18" height="40" class="svg-resistor" />
        <text x="320" y="128" class="svg-tiny font-bold">R_L</text>
        <line x1="230" y1="95" x2="299" y2="95" class="svg-wire" />
        <line x1="299" y1="95" x2="299" y2="105" class="svg-wire" />
        <line x1="230" y1="150" x2="299" y2="150" class="svg-wire" />
        <line x1="299" y1="150" x2="299" y2="145" class="svg-wire" />

        <text x="175" y="200" class="svg-tiny font-bold text-accent" text-anchor="middle">Semionda +: D₁,D₄ ON | Semionda −: D₂,D₃ ON</text>
      </g>
    </svg>
  `,

  // 7. OP-AMP Ideale & Configurazioni
  ch7: `
    <svg viewBox="0 0 760 260" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- OP-AMP Model & Rules -->
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="340" height="220" rx="10" class="svg-panel-bg" />
        <text x="170" y="25" class="svg-title" text-anchor="middle">Modello OP-AMP & Corto Virtuale</text>
        
        <!-- Triangle -->
        <polygon points="120,70 230,125 120,180" class="svg-opamp" />
        <text x="135" y="95" class="svg-label font-bold text-blue">−</text>
        <text x="135" y="160" class="svg-label font-bold text-red">+</text>

        <!-- Inputs -->
        <line x1="50" y1="90" x2="120" y2="90" class="svg-wire" />
        <text x="40" y="94" class="svg-tiny font-bold">v−</text>
        <line x1="50" y1="155" x2="120" y2="155" class="svg-wire" />
        <text x="40" y="159" class="svg-tiny font-bold">v+</text>

        <!-- Currents i+, i- = 0 -->
        <text x="85" y="80" class="svg-tiny font-bold text-blue">i− = 0</text>
        <text x="85" y="172" class="svg-tiny font-bold text-red">i+ = 0</text>

        <!-- Output -->
        <line x1="230" y1="125" x2="300" y2="125" class="svg-wire" />
        <circle cx="300" cy="125" r="4" class="svg-terminal" />
        <text x="315" y="130" class="svg-label font-bold">v_o</text>

        <!-- Rules callout -->
        <text x="170" y="205" class="svg-tiny font-bold text-accent" text-anchor="middle">Retroazione Negativa ⇒ v+ = v− (Cortocircuito Virtuale)</text>
      </g>

      <!-- Inverting Amplifier Configuration -->
      <g transform="translate(390, 20)">
        <rect x="0" y="0" width="340" height="220" rx="10" class="svg-panel-bg" />
        <text x="170" y="25" class="svg-title" text-anchor="middle">Configurazione Invertente</text>
        
        <!-- OPAMP Triangle -->
        <polygon points="170,85 255,130 170,175" class="svg-opamp" />
        <text x="180" y="105" class="svg-label font-bold text-blue">−</text>
        <text x="180" y="160" class="svg-label font-bold text-red">+</text>

        <!-- Non-inverting to ground -->
        <line x1="170" y1="155" x2="140" y2="155" class="svg-wire" />
        <line x1="140" y1="155" x2="140" y2="175" class="svg-wire" />
        <line x1="130" y1="175" x2="150" y2="175" class="svg-ground" />
        <line x1="135" y1="179" x2="145" y2="179" class="svg-ground" />

        <!-- Input R1 -->
        <line x1="40" y1="100" x2="70" y2="100" class="svg-wire" />
        <rect x="70" y="93" width="40" height="14" class="svg-resistor" />
        <text x="90" y="85" class="svg-tiny font-bold" text-anchor="middle">R₁</text>
        <line x1="110" y1="100" x2="170" y2="100" class="svg-wire" />
        <circle cx="40" cy="100" r="4" class="svg-terminal" />
        <text x="30" y="104" class="svg-tiny font-bold">v_in</text>

        <!-- Feedback R2 -->
        <line x1="140" y1="100" x2="140" y2="55" class="svg-wire" />
        <line x1="140" y1="55" x2="180" y2="55" class="svg-wire" />
        <rect x="180" y="48" width="40" height="14" class="svg-resistor" />
        <text x="200" y="42" class="svg-tiny font-bold" text-anchor="middle">R₂</text>
        <line x1="220" y1="55" x2="275" y2="55" class="svg-wire" />
        <line x1="275" y1="55" x2="275" y2="130" class="svg-wire" />
        <line x1="255" y1="130" x2="310" y2="130" class="svg-wire" />
        <circle cx="310" cy="130" r="4" class="svg-terminal" />
        <text x="325" y="134" class="svg-tiny font-bold">v_o</text>

        <text x="170" y="202" class="svg-math-sm font-bold text-red" text-anchor="middle">v_o = − (R₂ / R₁) · v_in</text>
      </g>
    </svg>
  `,

  // 8. Doppi Bipoli & Trasformatore Ideale
  ch8: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Two-port box -->
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="340" height="210" rx="10" class="svg-panel-bg" />
        <text x="170" y="25" class="svg-title" text-anchor="middle">Doppio Bipolo a 2 Porte</text>
        
        <!-- Two-port black box -->
        <rect x="110" y="65" width="120" height="100" rx="8" class="svg-box" />
        <text x="170" y="115" class="svg-component-text font-bold" text-anchor="middle">DOPPIO BIPOLO</text>
        <text x="170" y="135" class="svg-tiny text-muted" text-anchor="middle">[R], [G], [H], [T]</text>

        <!-- Port 1 -->
        <line x1="30" y1="85" x2="110" y2="85" class="svg-wire" />
        <line x1="30" y1="145" x2="110" y2="145" class="svg-wire" />
        <circle cx="30" cy="85" r="4" class="svg-terminal" />
        <circle cx="30" cy="145" r="4" class="svg-terminal" />
        <text x="20" y="80" class="svg-label font-bold text-red">+</text>
        <text x="20" y="155" class="svg-label font-bold text-blue">−</text>
        <line x1="45" y1="75" x2="85" y2="75" class="svg-arrow-blue" marker-end="url(#arrow-blue)" />
        <text x="65" y="68" class="svg-tiny font-bold text-blue" text-anchor="middle">i₁</text>
        <text x="25" y="118" class="svg-tiny font-bold text-red">v₁</text>

        <!-- Port 2 -->
        <line x1="230" y1="85" x2="310" y2="85" class="svg-wire" />
        <line x1="230" y1="145" x2="310" y2="145" class="svg-wire" />
        <circle cx="310" cy="85" r="4" class="svg-terminal" />
        <circle cx="310" cy="145" r="4" class="svg-terminal" />
        <text x="320" y="80" class="svg-label font-bold text-red">+</text>
        <text x="320" y="155" class="svg-label font-bold text-blue">−</text>
        <line x1="295" y1="75" x2="255" y2="75" class="svg-arrow-blue" marker-end="url(#arrow-blue)" />
        <text x="275" y="68" class="svg-tiny font-bold text-blue" text-anchor="middle">i₂</text>
        <text x="315" y="118" class="svg-tiny font-bold text-red">v₂</text>

        <text x="170" y="195" class="svg-tiny font-bold text-accent" text-anchor="middle">Condizione di porta: i₁ = i₁' e i₂ = i₂'</text>
      </g>

      <!-- Ideal Transformer n:1 -->
      <g transform="translate(390, 20)">
        <rect x="0" y="0" width="340" height="210" rx="10" class="svg-panel-bg" />
        <text x="170" y="25" class="svg-title" text-anchor="middle">Trasformatore Ideale n:1</text>
        
        <!-- Two Coils and Core -->
        <!-- Primary coil -->
        <path d="M 120 75 Q 135 85 120 95 Q 135 105 120 115 Q 135 125 120 135 Q 135 145 120 155" fill="none" stroke="#002d5a" stroke-width="3" />
        <!-- Magnetic core (two bars) -->
        <line x1="150" y1="70" x2="150" y2="160" stroke="#64748b" stroke-width="2.5" />
        <line x1="156" y1="70" x2="156" y2="160" stroke="#64748b" stroke-width="2.5" />
        <!-- Secondary coil -->
        <path d="M 186 75 Q 171 85 186 95 Q 171 105 186 115 Q 171 125 186 135 Q 171 145 186 155" fill="none" stroke="#002d5a" stroke-width="3" />

        <!-- Phase Dots -->
        <circle cx="112" cy="75" r="4" fill="#ef4444" />
        <circle cx="194" cy="75" r="4" fill="#ef4444" />

        <!-- Ratio Label -->
        <text x="153" y="55" class="svg-label font-bold text-accent" text-anchor="middle">n : 1</text>

        <!-- Equations -->
        <text x="170" y="185" class="svg-math-sm font-bold text-blue" text-anchor="middle">v₁ = n · v₂   |   i₂ = − n · i₁</text>
        <text x="170" y="202" class="svg-tiny font-bold text-red" text-anchor="middle">Riflessione impedenza: Z_in = n² · Z_L</text>
      </g>
    </svg>
  `,

  // 9. Regime Sinusoidale AC & Fasori
  ch9: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Phasor Diagram in Gauss plane -->
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="320" height="210" rx="10" class="svg-panel-bg" />
        <text x="160" y="25" class="svg-title" text-anchor="middle">Piano Complesso di Gauss & Fasori</text>
        
        <!-- Axes -->
        <line x1="30" y1="130" x2="280" y2="130" class="svg-axis" marker-end="url(#arrow)" />
        <text x="290" y="134" class="svg-tiny font-bold">Re</text>
        <line x1="110" y1="195" x2="110" y2="40" class="svg-axis" marker-end="url(#arrow)" />
        <text x="110" y="32" class="svg-tiny font-bold" text-anchor="middle">Im</text>

        <!-- Current phasor I on real axis -->
        <line x1="110" y1="130" x2="230" y2="130" class="svg-tree-edge" stroke-width="3" marker-end="url(#arrow-blue)" />
        <text x="235" y="122" class="svg-label font-bold text-blue">Ī</text>

        <!-- Resistor voltage VR in phase with I -->
        <text x="180" y="148" class="svg-tiny font-bold text-blue">V̄_R in fase con Ī</text>

        <!-- Inductor voltage VL (+90 deg lead) -->
        <line x1="110" y1="130" x2="110" y2="55" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" />
        <text x="118" y="55" class="svg-label font-bold text-red">V̄_L (+90°)</text>

        <!-- Capacitor voltage VC (-90 deg lag) -->
        <line x1="110" y1="130" x2="110" y2="185" stroke="#10b981" stroke-width="3" marker-end="url(#arrow)" />
        <text x="118" y="185" class="svg-label font-bold text-emerald">V̄_C (−90°)</text>

        <!-- Total voltage V phasor -->
        <line x1="110" y1="130" x2="210" y2="75" stroke="#d97706" stroke-width="3" marker-end="url(#arrow)" />
        <text x="220" y="75" class="svg-label font-bold text-amber">V̄</text>

        <!-- Angle phi -->
        <path d="M 150 130 A 40 40 0 0 0 145 110" fill="none" stroke="#d97706" stroke-width="1.5" />
        <text x="155" y="120" class="svg-tiny font-bold text-amber">φ</text>
      </g>

      <!-- Impedance Triangle -->
      <g transform="translate(390, 20)">
        <rect x="0" y="0" width="330" height="210" rx="10" class="svg-panel-bg" />
        <text x="165" y="25" class="svg-title" text-anchor="middle">Triangolo delle Impedenze</text>
        
        <!-- Triangle Z = R + jX -->
        <!-- R horizontal -->
        <line x1="60" y1="160" x2="210" y2="160" stroke="#0284c7" stroke-width="3" />
        <text x="135" y="180" class="svg-label font-bold text-blue" text-anchor="middle">R (Resistenza [Ω])</text>

        <!-- X vertical -->
        <line x1="210" y1="160" x2="210" y2="70" stroke="#ef4444" stroke-width="3" />
        <text x="235" y="115" class="svg-label font-bold text-red">X = X_L − X_C</text>

        <!-- Z hypotenuse -->
        <line x1="60" y1="160" x2="210" y2="70" stroke="#002d5a" stroke-width="3.5" />
        <text x="120" y="105" class="svg-label font-bold text-dark" text-anchor="middle">Z = |Z̄| = √(R² + X²)</text>

        <!-- Angle phi -->
        <path d="M 100 160 A 40 40 0 0 0 95 138" fill="none" stroke="#d97706" stroke-width="2" />
        <text x="110" y="150" class="svg-label font-bold text-amber">φ</text>

        <text x="165" y="202" class="svg-tiny font-bold text-accent" text-anchor="middle">Z̄ = R + jX  |  cos φ = R / |Z̄|</text>
      </g>
    </svg>
  `,

  // 10. Potenza AC, Boucherot & Rifasamento
  ch10: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Triangle of Powers -->
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="330" height="210" rx="10" class="svg-panel-bg" />
        <text x="165" y="25" class="svg-title" text-anchor="middle">Triangolo delle Potenze</text>
        
        <!-- P horizontal -->
        <line x1="50" y1="150" x2="200" y2="150" stroke="#0284c7" stroke-width="3" />
        <text x="125" y="170" class="svg-label font-bold text-blue" text-anchor="middle">P = V I cos φ [W]</text>

        <!-- Q vertical -->
        <line x1="200" y1="150" x2="200" y2="60" stroke="#ef4444" stroke-width="3" />
        <text x="215" y="105" class="svg-label font-bold text-red">Q = V I sin φ [VAR]</text>

        <!-- S hypotenuse -->
        <line x1="50" y1="150" x2="200" y2="60" stroke="#002d5a" stroke-width="3.5" />
        <text x="105" y="95" class="svg-label font-bold text-dark" text-anchor="middle">S = V I [VA]</text>

        <!-- Angle phi -->
        <path d="M 90 150 A 40 40 0 0 0 85 128" fill="none" stroke="#d97706" stroke-width="2" />
        <text x="100" y="142" class="svg-label font-bold text-amber">φ</text>

        <text x="165" y="200" class="svg-math-sm font-bold text-accent" text-anchor="middle">S̄ = P + jQ = V̄ · Ī*  |  Teor. Boucherot: ∑ S̄_k = 0</text>
      </g>

      <!-- Power Factor Correction (Rifasamento) -->
      <g transform="translate(380, 20)">
        <rect x="0" y="0" width="350" height="210" rx="10" class="svg-panel-bg" />
        <text x="175" y="25" class="svg-title" text-anchor="middle">Principio del Rifasamento</text>
        
        <!-- P remains constant -->
        <line x1="40" y1="150" x2="190" y2="150" stroke="#0284c7" stroke-width="3" />
        <text x="115" y="170" class="svg-tiny font-bold text-blue" text-anchor="middle">P costante</text>

        <!-- Initial Q1 -->
        <line x1="190" y1="150" x2="190" y2="50" stroke="#ef4444" stroke-width="2.5" />
        <text x="200" y="80" class="svg-tiny font-bold text-red">Q₁</text>

        <!-- Final reduced Q2 after capacitor -->
        <line x1="190" y1="150" x2="190" y2="105" stroke="#10b981" stroke-width="3.5" />
        <text x="200" y="130" class="svg-tiny font-bold text-emerald">Q₂</text>

        <!-- Capacitor reactive power QC = Q1 - Q2 -->
        <line x1="180" y1="50" x2="180" y2="105" stroke="#8b5cf6" stroke-width="2.5" marker-end="url(#arrow)" />
        <text x="150" y="75" class="svg-tiny font-bold text-purple">Q_C = −ω C V²</text>

        <!-- Initial S1 vs New S2 -->
        <line x1="40" y1="150" x2="190" y2="50" stroke="#94a3b8" stroke-dasharray="4" stroke-width="2" />
        <line x1="40" y1="150" x2="190" y2="105" stroke="#002d5a" stroke-width="3" />
        <text x="100" y="115" class="svg-tiny font-bold text-dark">S₂ &lt; S₁ (Corrente ridotta!)</text>

        <!-- Formula -->
        <text x="175" y="198" class="svg-math-sm font-bold text-red" text-anchor="middle">C_rif = P · (tan φ₁ − tan φ₂) / (ω · V²)</text>
      </g>
    </svg>
  `,

  // 11. Risonanza & Risposta in frequenza
  ch11: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Resonance Bell Curve -->
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="400" height="210" rx="10" class="svg-panel-bg" />
        <text x="200" y="25" class="svg-title" text-anchor="middle">Curva di Risonanza Serie RLC: Corrente I(ω)</text>
        
        <!-- Axes -->
        <line x1="40" y1="170" x2="360" y2="170" class="svg-axis" marker-end="url(#arrow)" />
        <text x="370" y="174" class="svg-tiny font-bold">ω</text>
        <line x1="60" y1="180" x2="60" y2="40" class="svg-axis" marker-end="url(#arrow)" />
        <text x="60" y="32" class="svg-tiny font-bold" text-anchor="middle">I(ω)</text>

        <!-- Resonance peak bell curve -->
        <path d="M 80 165 C 140 160, 180 135, 200 65 C 220 135, 260 160, 320 165" fill="none" stroke="#0284c7" stroke-width="3" />

        <!-- Peak omega_0 -->
        <line x1="200" y1="65" x2="200" y2="170" stroke="#ef4444" stroke-dasharray="4" stroke-width="1.5" />
        <circle cx="200" cy="65" r="4" fill="#ef4444" />
        <text x="200" y="55" class="svg-tiny font-bold text-red" text-anchor="middle">I_max = V / R</text>
        <text x="200" y="185" class="svg-label font-bold text-red" text-anchor="middle">ω₀ = 1/√(LC)</text>

        <!-- Half-power frequencies omega_1 and omega_2 (I_max / sqrt(2)) -->
        <line x1="165" y1="95" x2="235" y2="95" stroke="#10b981" stroke-width="1.5" />
        <line x1="165" y1="95" x2="165" y2="170" stroke="#10b981" stroke-dasharray="3" />
        <line x1="235" y1="95" x2="235" y2="170" stroke="#10b981" stroke-dasharray="3" />
        <text x="165" y="185" class="svg-tiny font-bold text-emerald" text-anchor="middle">ω₁</text>
        <text x="235" y="185" class="svg-tiny font-bold text-emerald" text-anchor="middle">ω₂</text>
        <text x="200" y="112" class="svg-tiny font-bold text-emerald" text-anchor="middle">Banda B = ω₀ / Q</text>
      </g>

      <!-- Key Formulas Box -->
      <g transform="translate(460, 20)">
        <rect x="0" y="0" width="270" height="210" rx="10" class="svg-panel-bg" />
        <text x="135" y="25" class="svg-title-sm" text-anchor="middle">Parametri di Risonanza</text>
        
        <text x="20" y="60" class="svg-tiny font-bold text-blue">• Pulsazione propria:</text>
        <text x="35" y="80" class="svg-math-sm">ω₀ = 1 / √(L·C)</text>

        <text x="20" y="110" class="svg-tiny font-bold text-red">• Fattore di merito Q (Serie):</text>
        <text x="35" y="130" class="svg-math-sm">Q₀ = (ω₀·L)/R = (1/R)·√(L/C)</text>

        <text x="20" y="160" class="svg-tiny font-bold text-purple">• Sovratensione ai morsetti:</text>
        <text x="35" y="180" class="svg-math-sm font-bold text-purple">V_L(ω₀) = V_C(ω₀) = Q₀ · V</text>
        <text x="135" y="202" class="svg-tiny text-muted text-center" text-anchor="middle">Se Q₀ ≫ 1 pericolo isolamento!</text>
      </g>
    </svg>
  `,

  // 12. Elementi dinamici & Circuiti magnetici
  ch12: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Magnetic core with air gap -->
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="340" height="210" rx="10" class="svg-panel-bg" />
        <text x="170" y="25" class="svg-title" text-anchor="middle">Circuito Magnetico con Traferro (Air Gap)</text>
        
        <!-- Ferromagnetic C-core -->
        <path d="M 70 60 L 250 60 L 250 110 L 220 110 L 220 90 L 100 90 L 100 150 L 220 150 L 220 130 L 250 130 L 250 180 L 70 180 Z" fill="#cbd5e1" stroke="#475569" stroke-width="2" />

        <!-- Air gap delta -->
        <rect x="220" y="110" width="30" height="20" fill="#fee2e2" stroke="#ef4444" stroke-dasharray="2" />
        <text x="270" y="125" class="svg-tiny font-bold text-red">Traferro δ</text>

        <!-- Winding coil N turns -->
        <rect x="55" y="90" width="25" height="60" rx="4" fill="#0284c7" />
        <text x="67" y="125" class="svg-tiny font-bold text-white" text-anchor="middle">N</text>
        <text x="35" y="125" class="svg-tiny font-bold text-blue">i(t)</text>

        <!-- Magnetic Flux path -->
        <path d="M 85 75 L 235 75 L 235 165 L 85 165 Z" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow-red)" />
        <text x="160" y="70" class="svg-tiny font-bold text-red" text-anchor="middle">Flusso Φ</text>

        <text x="170" y="200" class="svg-tiny font-bold text-accent" text-anchor="middle">Legge di Hopkinson: N · i = (R_ferro + R_traferro) · Φ</text>
      </g>

      <!-- Coupled Inductors with Dot Convention -->
      <g transform="translate(400, 20)">
        <rect x="0" y="0" width="330" height="210" rx="10" class="svg-panel-bg" />
        <text x="165" y="25" class="svg-title" text-anchor="middle">Mutua Induzione & Contrassegni (Dots)</text>
        
        <!-- Coil L1 -->
        <path d="M 70 80 Q 85 90 70 100 Q 85 110 70 120 Q 85 130 70 140" fill="none" stroke="#002d5a" stroke-width="3" />
        <text x="45" y="115" class="svg-label font-bold">L₁</text>
        <circle cx="68" cy="74" r="4" fill="#ef4444" />

        <!-- Coil L2 -->
        <path d="M 180 80 Q 195 90 180 100 Q 195 110 180 120 Q 195 130 180 140" fill="none" stroke="#002d5a" stroke-width="3" />
        <text x="205" y="115" class="svg-label font-bold">L₂</text>
        <circle cx="178" cy="74" r="4" fill="#ef4444" />

        <!-- Mutual M curve -->
        <path d="M 75 60 Q 125 40 175 60" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="3" />
        <text x="125" y="45" class="svg-label font-bold text-amber" text-anchor="middle">M</text>

        <!-- Dot rule equations -->
        <text x="165" y="165" class="svg-math-sm" text-anchor="middle">v₁ = L₁ · (di₁/dt) ± M · (di₂/dt)</text>
        <text x="165" y="185" class="svg-math-sm" text-anchor="middle">v₂ = ± M · (di₁/dt) + L₂ · (di₂/dt)</text>
        <text x="165" y="202" class="svg-tiny font-bold text-red" text-anchor="middle">+ se entrambe le correnti ENTRANO dai pallini</text>
      </g>
    </svg>
  `,

  // 13. Transitori del 1° ordine
  ch13: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Exponential curve -->
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="370" height="210" rx="10" class="svg-panel-bg" />
        <text x="185" y="25" class="svg-title" text-anchor="middle">Andamento Transitorio Esponenziale x(t)</text>
        
        <!-- Axes -->
        <line x1="40" y1="170" x2="340" y2="170" class="svg-axis" marker-end="url(#arrow)" />
        <text x="350" y="174" class="svg-tiny font-bold">t</text>
        <line x1="60" y1="180" x2="60" y2="40" class="svg-axis" marker-end="url(#arrow)" />
        <text x="60" y="32" class="svg-tiny font-bold" text-anchor="middle">x(t)</text>

        <!-- Asymptote x(infty) -->
        <line x1="60" y1="70" x2="330" y2="70" stroke="#94a3b8" stroke-dasharray="4" stroke-width="1.5" />
        <text x="310" y="62" class="svg-tiny font-bold text-muted">x(∞) [Regime]</text>

        <!-- Initial value x(0+) -->
        <circle cx="60" cy="150" r="4" fill="#ef4444" />
        <text x="45" y="152" class="svg-tiny font-bold text-red">x(0+)</text>

        <!-- Exponential transition curve -->
        <path d="M 60 150 Q 140 75 320 70" fill="none" stroke="#0284c7" stroke-width="3" />

        <!-- Tangent at t=0 intersecting asymptote at t=tau -->
        <line x1="60" y1="150" x2="160" y2="70" stroke="#d97706" stroke-dasharray="2" stroke-width="1.5" />
        <line x1="160" y1="70" x2="160" y2="170" stroke="#d97706" stroke-dasharray="2" />
        <text x="160" y="185" class="svg-label font-bold text-amber" text-anchor="middle">t = τ</text>

        <text x="185" y="202" class="svg-tiny font-bold text-accent" text-anchor="middle">A t = τ: 63.2% variazione | A t = 5τ: 99.3% (Transitorio esaurito)</text>
      </g>

      <!-- General Formula Callout -->
      <g transform="translate(430, 20)">
        <rect x="0" y="0" width="300" height="210" rx="10" class="svg-panel-bg" />
        <text x="150" y="25" class="svg-title" text-anchor="middle">Formula Generale d'Esame</text>
        
        <text x="150" y="65" class="svg-math-bold text-blue" text-anchor="middle">x(t) = x(∞) + [x(0⁺) − x(∞)] · e^{−t / τ}</text>
        
        <text x="20" y="105" class="svg-tiny font-bold">• Tre Step Operativi Indipendenti:</text>
        <text x="30" y="125" class="svg-tiny">1. Continuità di stato: x(0⁺) = x(0⁻)</text>
        <text x="30" y="145" class="svg-tiny">2. Regime stazionario t→∞: C aperto, L corto</text>
        <text x="30" y="165" class="svg-tiny">3. Costante di tempo: τ = R_eq·C  oppure  L/R_eq</text>
        
        <text x="150" y="198" class="svg-tiny font-bold text-red text-center" text-anchor="middle">R_eq si calcola con la rete per t &gt; 0!</text>
      </g>
    </svg>
  `,

  // 14. Transitori del 2° ordine
  ch14: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- 3 Regimes comparison curve -->
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="400" height="210" rx="10" class="svg-panel-bg" />
        <text x="200" y="25" class="svg-title" text-anchor="middle">I 3 Regimi di Risposta del 2° Ordine</text>
        
        <!-- Axes -->
        <line x1="40" y1="140" x2="360" y2="140" class="svg-axis" marker-end="url(#arrow)" />
        <text x="370" y="144" class="svg-tiny font-bold">t</text>
        <line x1="60" y1="180" x2="60" y2="40" class="svg-axis" marker-end="url(#arrow)" />
        <text x="60" y="32" class="svg-tiny font-bold" text-anchor="middle">x(t)</text>

        <!-- Asymptote 0 -->
        <!-- 1. Overdamped (Sovrasmorzato alpha > omega0) - Blue curve -->
        <path d="M 60 60 Q 180 65 340 135" fill="none" stroke="#0284c7" stroke-width="2.5" />
        <text x="280" y="90" class="svg-tiny font-bold text-blue">1. Sovrasmorzato (α &gt; ω₀)</text>

        <!-- 2. Critically Damped (Critico alpha = omega0) - Green curve -->
        <path d="M 60 60 Q 120 70 300 138" fill="none" stroke="#10b981" stroke-width="2.5" />
        <text x="250" y="115" class="svg-tiny font-bold text-emerald">2. Critico (α = ω₀, rapido)</text>

        <!-- 3. Underdamped (Sottosmorzato alpha < omega0) - Red oscillating curve -->
        <path d="M 60 60 C 90 70, 110 165, 140 165 C 170 165, 190 120, 220 120 C 250 120, 270 148, 300 142 C 320 140, 335 140, 350 140" fill="none" stroke="#ef4444" stroke-width="2.5" />
        <text x="130" y="195" class="svg-tiny font-bold text-red">3. Sottosmorzato (Oscillazioni smorzate ω_d)</text>

        <!-- Envelope -->
        <path d="M 60 60 Q 180 110 350 138" fill="none" stroke="#ef4444" stroke-dasharray="2" stroke-width="1.2" />
      </g>

      <!-- Mathematical classification -->
      <g transform="translate(460, 20)">
        <rect x="0" y="0" width="270" height="210" rx="10" class="svg-panel-bg" />
        <text x="135" y="25" class="svg-title-sm" text-anchor="middle">Equazione Caratteristica</text>
        
        <text x="135" y="55" class="svg-math-sm font-bold text-dark" text-anchor="middle">s² + 2α s + ω₀² = 0</text>
        <text x="135" y="75" class="svg-tiny font-bold text-muted text-center" text-anchor="middle">Radici: s₁,₂ = −α ± √(α² − ω₀²)</text>

        <text x="15" y="105" class="svg-tiny font-bold text-blue">• α &gt; ω₀ (Sovrasmorzato):</text>
        <text x="25" y="120" class="svg-tiny">s₁,₂ reali negative distinte</text>

        <text x="15" y="140" class="svg-tiny font-bold text-emerald">• α = ω₀ (Critico):</text>
        <text x="25" y="155" class="svg-tiny">s₁,₂ reali coincidenti (−α)</text>

        <text x="15" y="175" class="svg-tiny font-bold text-red">• α &lt; ω₀ (Sottosmorzato):</text>
        <text x="25" y="190" class="svg-tiny">s₁,₂ = −α ± j ω_d con ω_d = √(ω₀² − α²)</text>
      </g>
    </svg>
  `,

  // 15. Circuiti Trifase & Metodo di Aron
  ch15: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Monofase Equivalente -->
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="330" height="210" rx="10" class="svg-panel-bg" />
        <text x="165" y="25" class="svg-title" text-anchor="middle">Circuito Monofase Equivalente</text>
        
        <!-- Phase 1 source -->
        <circle cx="60" cy="90" r="18" class="svg-box" />
        <text x="60" y="94" class="svg-tiny font-bold text-red" text-anchor="middle">Ē₁</text>

        <!-- Wires -->
        <line x1="78" y1="90" x2="160" y2="90" class="svg-wire" />
        <!-- Line impedance Z_line -->
        <rect x="120" y="83" width="30" height="14" class="svg-resistor" />
        <text x="135" y="75" class="svg-tiny font-bold" text-anchor="middle">Z_line</text>

        <!-- Load impedance Z_Y -->
        <line x1="160" y1="90" x2="240" y2="90" class="svg-wire" />
        <rect x="240" y="83" width="35" height="14" class="svg-resistor" />
        <text x="257" y="75" class="svg-tiny font-bold" text-anchor="middle">Z_Y</text>

        <!-- Return neutral wire -->
        <line x1="275" y1="90" x2="290" y2="90" class="svg-wire" />
        <line x1="290" y1="90" x2="290" y2="155" class="svg-wire" />
        <line x1="290" y1="155" x2="60" y2="155" class="svg-wire" />
        <line x1="60" y1="155" x2="60" y2="108" class="svg-wire" />

        <text x="175" y="148" class="svg-tiny font-bold text-muted" text-anchor="middle">Neutro virtuale N (Ī_N = 0)</text>
        <text x="165" y="180" class="svg-tiny font-bold text-blue" text-anchor="middle">Conversione triangolo-stella: Z_Y = Z_Δ / 3</text>
        <text x="165" y="200" class="svg-tiny font-bold text-red" text-anchor="middle">Tensione stellata: E = V / √3</text>
      </g>

      <!-- Aron Two-Wattmeter Method -->
      <g transform="translate(380, 20)">
        <rect x="0" y="0" width="350" height="210" rx="10" class="svg-panel-bg" />
        <text x="175" y="25" class="svg-title" text-anchor="middle">Inserzione Aron (2 Wattmetri)</text>
        
        <!-- 3 Lines: 1, 2, 3 -->
        <!-- Line 1 -->
        <line x1="40" y1="65" x2="310" y2="65" class="svg-wire" />
        <text x="30" y="69" class="svg-tiny font-bold text-blue">L₁</text>
        <!-- W1 current coil -->
        <circle cx="100" cy="65" r="14" class="svg-box" />
        <text x="100" y="69" class="svg-tiny font-bold text-red" text-anchor="middle">W₁</text>

        <!-- Line 2 -->
        <line x1="40" y1="115" x2="310" y2="115" class="svg-wire" />
        <text x="30" y="119" class="svg-tiny font-bold text-blue">L₂</text>
        <!-- W2 current coil -->
        <circle cx="180" cy="115" r="14" class="svg-box" />
        <text x="180" y="119" class="svg-tiny font-bold text-red" text-anchor="middle">W₂</text>

        <!-- Line 3 (Common voltage reference) -->
        <line x1="40" y1="165" x2="310" y2="165" class="svg-wire" />
        <text x="30" y="169" class="svg-tiny font-bold text-blue">L₃</text>

        <!-- Voltage coil connections to L3 -->
        <line x1="100" y1="79" x2="100" y2="165" stroke="#ef4444" stroke-dasharray="3" />
        <circle cx="100" cy="165" r="3" fill="#ef4444" />
        <line x1="180" y1="129" x2="180" y2="165" stroke="#ef4444" stroke-dasharray="3" />
        <circle cx="180" cy="165" r="3" fill="#ef4444" />

        <!-- Formulas -->
        <text x="175" y="190" class="svg-math-sm font-bold text-dark" text-anchor="middle">P_3φ = W₁ + W₂   |   Q_3φ = √3 · (W₁ − W₂)</text>
        <text x="175" y="206" class="svg-tiny font-bold text-accent" text-anchor="middle">tan φ = √3 · (W₁ − W₂) / (W₁ + W₂)</text>
      </g>
    </svg>
  `,

  // 16. Metodo di Laplace & Circuiti Operazionali
  ch16: `
    <svg viewBox="0 0 760 250" class="circuit-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Operational equivalents for L and C -->
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="340" height="210" rx="10" class="svg-panel-bg" />
        <text x="170" y="25" class="svg-title" text-anchor="middle">Bipoli Operazionali nel Dominio s</text>
        
        <!-- Inductor with initial condition Li(0-) -->
        <g transform="translate(10, 40)">
          <text x="30" y="20" class="svg-tiny font-bold text-blue">Induttore L:</text>
          <line x1="90" y1="15" x2="130" y2="15" class="svg-wire" />
          <path d="M 130 15 Q 140 5 150 15 Q 160 5 170 15 Q 180 5 190 15" fill="none" stroke="#002d5a" stroke-width="2.5" />
          <text x="160" y="35" class="svg-tiny font-bold">sL</text>
          
          <line x1="190" y1="15" x2="230" y2="15" class="svg-wire" />
          <!-- Series voltage source L*i(0-) -->
          <circle cx="245" cy="15" r="12" class="svg-box" />
          <text x="245" y="12" class="svg-tiny font-bold text-red">+</text>
          <text x="245" y="23" class="svg-tiny font-bold text-blue">−</text>
          <line x1="257" y1="15" x2="290" y2="15" class="svg-wire" />
          <text x="245" y="40" class="svg-tiny font-bold text-red" text-anchor="middle">L·i(0⁻)</text>
        </g>

        <!-- Capacitor with initial condition v(0-)/s -->
        <g transform="translate(10, 110)">
          <text x="30" y="20" class="svg-tiny font-bold text-emerald">Condensatore C:</text>
          <line x1="90" y1="15" x2="140" y2="15" class="svg-wire" />
          <line x1="140" y1="5" x2="140" y2="25" stroke="#002d5a" stroke-width="2.5" />
          <line x1="148" y1="5" x2="148" y2="25" stroke="#002d5a" stroke-width="2.5" />
          <text x="144" y="38" class="svg-tiny font-bold">1/(sC)</text>
          
          <line x1="148" y1="15" x2="230" y2="15" class="svg-wire" />
          <!-- Series voltage source v(0-)/s -->
          <circle cx="245" cy="15" r="12" class="svg-box" />
          <text x="245" y="12" class="svg-tiny font-bold text-red">+</text>
          <text x="245" y="23" class="svg-tiny font-bold text-blue">−</text>
          <line x1="257" y1="15" x2="290" y2="15" class="svg-wire" />
          <text x="245" y="40" class="svg-tiny font-bold text-emerald" text-anchor="middle">v(0⁻)/s</text>
        </g>

        <text x="170" y="198" class="svg-tiny font-bold text-accent" text-anchor="middle">I generatori ausiliari incorporano la memoria iniziale!</text>
      </g>

      <!-- Pole-Zero Map and Stability -->
      <g transform="translate(390, 20)">
        <rect x="0" y="0" width="340" height="210" rx="10" class="svg-panel-bg" />
        <text x="170" y="25" class="svg-title" text-anchor="middle">Piano Complesso s: Poli, Zeri & Stabilità</text>
        
        <!-- Complex s-plane -->
        <line x1="30" y1="115" x2="300" y2="115" class="svg-axis" marker-end="url(#arrow)" />
        <text x="310" y="119" class="svg-tiny font-bold">σ = Re{s}</text>
        <line x1="210" y1="190" x2="210" y2="40" class="svg-axis" marker-end="url(#arrow)" />
        <text x="210" y="32" class="svg-tiny font-bold" text-anchor="middle">jω = Im{s}</text>

        <!-- Left half plane shading (Stable) -->
        <rect x="40" y="45" width="170" height="140" fill="#dcfce7" opacity="0.4" />
        <text x="120" y="65" class="svg-tiny font-bold text-emerald" text-anchor="middle">Semipiano Sinistro (STABILE)</text>

        <!-- Poles (X) in left half plane -->
        <text x="120" y="95" class="svg-label font-bold text-red">✕</text>
        <text x="120" y="145" class="svg-label font-bold text-red">✕</text>
        <text x="100" y="120" class="svg-tiny font-bold text-red">Poli p_k (Re &lt; 0)</text>

        <!-- Zero (O) -->
        <circle cx="80" cy="115" r="5" fill="none" stroke="#0284c7" stroke-width="2" />
        <text x="80" y="105" class="svg-tiny font-bold text-blue" text-anchor="middle">Zero z₁</text>

        <text x="170" y="200" class="svg-tiny font-bold text-dark" text-anchor="middle">Stabilità asintotica: Re{p_k} &lt; 0 per tutti i poli!</text>
      </g>
    </svg>
  `
};
