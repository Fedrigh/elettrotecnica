// js/app.js
// Main Application Controller for Elettrotecnica Theory App
// Politecnico di Milano - Ingegneria (D'Amore, Codecasa, Maffezzoni, Guzzetti)

(function () {
  'use strict';

  // 1. Data Store
  const p1 = window.CHAPTERS_P1 || [];
  const p2 = window.CHAPTERS_P2 || [];
  const allChapters = [...p1, ...p2];
  const formulaData = window.FORMULA_SHEET || [];
  const svgCircuits = window.SVG_CIRCUITS || {};

  // Safe Storage Helpers (prevent crashes if localStorage is restricted or blocked)
  function safeGetStorage(key, defaultVal) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : defaultVal;
    } catch (e) {
      return defaultVal;
    }
  }

  function safeSetStorage(key, val) {
    try {
      localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val));
    } catch (e) {
      // In-memory fallback
    }
  }

  // 2. State Management
  const state = {
    currentChapterId: 'ch1',
    activeFilter: 'all', // 'all', '1', '2'
    searchQuery: '',
    completedChapters: new Set(safeGetStorage('polimi_theory_completed', [])),
    favoriteChapters: new Set(safeGetStorage('polimi_theory_favorites', [])),
    theme: (function () {
      try { return localStorage.getItem('polimi_theory_theme') || 'light'; }
      catch (e) { return 'light'; }
    })(),
    formulaRendered: false,
    pitfallsRendered: false
  };

  // 3. Markdown / Text Parser with LaTeX Math Shielding
  // Shield math delimiters so that math asterisks (e.g. conjugates R_1^*), underscores, or lists do not break LaTeX
  function parseMarkdown(text) {
    if (!text) return '';
    const displayMath = [];
    const inlineMath = [];

    // 1. Shield display math $$ ... $$
    let protectedText = text.replace(/\$\$([\s\S]*?)\$\$/g, (m) => {
      displayMath.push(m);
      return `\n\n@@KATEX_DISP_${displayMath.length - 1}@@\n\n`;
    });

    // 2. Shield inline math $ ... $
    protectedText = protectedText.replace(/\$([^$\n]+?)\$/g, (m) => {
      inlineMath.push(m);
      return `@@KATEX_INL_${inlineMath.length - 1}@@`;
    });

    // 3. Markdown transformations on text
    let html = protectedText
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic (only non-math asterisks)
      .replace(/\*([^*\n]+?)\*/g, '<em>$1</em>')
      // Bullet lists
      .replace(/^\s*[-*]\s+(.*$)/gim, '<li>$1</li>')
      // Paragraphs
      .replace(/\n\n+/g, '</p><p>');

    // Wrap consecutive <li> into <ul>
    html = html.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>');
    html = html.replace(/<\/ul>\s*<ul>/g, '');
    html = '<p>' + html + '</p>';

    // Clean empty paragraphs
    html = html.replace(/<p>\s*<\/p>/g, '');

    // 4. Restore math
    // Inline math restores within text nodes
    html = html.replace(/@@KATEX_INL_(\d+)@@/g, (_, idx) => inlineMath[Number(idx)]);

    // Display math placed in standalone block containers
    html = html.replace(/<p>\s*@@KATEX_DISP_(\d+)@@\s*<\/p>/g, (_, idx) => {
      return `<div class="display-math-wrapper">${displayMath[Number(idx)]}</div>`;
    });
    html = html.replace(/@@KATEX_DISP_(\d+)@@/g, (_, idx) => {
      return `<div class="display-math-wrapper">${displayMath[Number(idx)]}</div>`;
    });

    return html;
  }

  // 4. KaTeX Math Renderer Helper
  function renderKaTeX(container) {
    if (window.renderMathInElement && container) {
      window.renderMathInElement(container, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  }

  // 5. DOM Elements
  const chapterListEl = document.getElementById('chapter-list');
  const readerContentEl = document.getElementById('reader-content');
  const searchInputEl = document.getElementById('search-input');
  const filterPills = document.querySelectorAll('.filter-pill');
  const progressFillEl = document.getElementById('progress-fill');
  const progressTextEl = document.getElementById('progress-text');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  // Modals
  const formulaModal = document.getElementById('formula-modal');
  const formulaModalBody = document.getElementById('formula-modal-body');
  const formulaSearchInput = document.getElementById('formula-search-input');

  const searchModal = document.getElementById('search-modal');
  const searchModalInput = document.getElementById('search-modal-input');
  const searchModalResults = document.getElementById('search-modal-results');

  const pitfallsModal = document.getElementById('pitfalls-modal');
  const pitfallsModalBody = document.getElementById('pitfalls-modal-body');
  const pitfallsSearchInput = document.getElementById('pitfalls-search-input');

  // Apply Theme
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    safeSetStorage('polimi_theory_theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // Update Progress Bar
  function updateProgress() {
    const total = allChapters.length;
    const completedCount = state.completedChapters.size;
    const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    if (progressFillEl) progressFillEl.style.width = pct + '%';
    if (progressTextEl) progressTextEl.textContent = `${completedCount}/${total} (${pct}%)`;
  }

  // Filter Chapters for Sidebar
  function getFilteredChapters() {
    return allChapters.filter(ch => {
      // Parziale filter
      if (state.activeFilter === '1' && ch.parziale !== 1) return false;
      if (state.activeFilter === '2' && ch.parziale !== 2) return false;

      // Text search in sidebar (matches title, subtitle, tags, or section titles)
      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase();
        const matchesTitle = ch.title.toLowerCase().includes(q);
        const matchesSub = ch.subtitle.toLowerCase().includes(q);
        const matchesTags = ch.tags && ch.tags.some(t => t.toLowerCase().includes(q));
        const matchesSec = ch.sections && ch.sections.some(s => s.title.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSub && !matchesTags && !matchesSec) return false;
      }
      return true;
    });
  }

  // Render Sidebar Chapters List
  function renderSidebar() {
    if (!chapterListEl) return;
    const filtered = getFilteredChapters();

    if (filtered.length === 0) {
      chapterListEl.innerHTML = `
        <div style="padding: 2rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          🔍 Nessun capitolo trovato per "<strong>${state.searchQuery}</strong>".
        </div>
      `;
      return;
    }

    chapterListEl.innerHTML = filtered.map(ch => {
      const isActive = ch.id === state.currentChapterId;
      const isCompleted = state.completedChapters.has(ch.id);
      const isFav = state.favoriteChapters.has(ch.id);

      return `
        <div class="chapter-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-id="${ch.id}">
          <div class="chapter-badge-num">
            ${isCompleted ? '✓' : ch.number}
          </div>
          <div class="chapter-item-content">
            <div class="chapter-item-top">
              <span class="chapter-parziale-tag ${ch.parziale === 1 ? 'tag-p1' : 'tag-p2'}">
                ${ch.parziale}° Parziale
              </span>
              <span style="font-size: 0.72rem; color: var(--text-muted);">
                ${isFav ? '⭐ ' : ''}${ch.readTime}
              </span>
            </div>
            <div class="chapter-item-title">${ch.number}. ${ch.title}</div>
            <div class="chapter-item-sub">${ch.subtitle}</div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click events
    chapterListEl.querySelectorAll('.chapter-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        loadChapter(id);
      });
    });

    updateProgress();
  }

  // Render Main Chapter Reader
  function loadChapter(chapterId) {
    const ch = allChapters.find(c => c.id === chapterId);
    if (!ch || !readerContentEl) return;

    state.currentChapterId = chapterId;
    if (window.location.hash !== '#' + chapterId) {
      history.replaceState(null, '', '#' + chapterId);
    }

    const isCompleted = state.completedChapters.has(ch.id);
    const isFav = state.favoriteChapters.has(ch.id);

    // Find next and prev chapters
    const currentIndex = allChapters.findIndex(c => c.id === ch.id);
    const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

    // SVG Schematic
    const svgCode = svgCircuits[ch.id] || `
      <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
        Schema circuitale vettoriale per Capitolo ${ch.number}
      </div>
    `;

    // Sections HTML
    const sectionsHtml = ch.sections.map(sec => `
      <section class="theory-section" id="${sec.id}">
        <h2 class="section-title">${sec.title}</h2>
        <div class="section-content">${parseMarkdown(sec.content)}</div>
      </section>
    `).join('');

    // Pitfalls HTML
    const pitfallsHtml = ch.pitfalls.map(p => `
      <div class="pitfall-item">
        <div class="pitfall-title">⚠️ ${p.title}</div>
        <div class="pitfall-desc">${p.description}</div>
        <div class="prof-advice-box">
          <span class="prof-tag">Consiglio del Docente:</span> "${p.profAdvice}"
        </div>
      </div>
    `).join('');

    // Worked Example HTML
    let exampleHtml = '';
    if (ch.workedExample) {
      const ex = ch.workedExample;
      const stepsHtml = ex.steps.map((st) => `
        <div class="step-card">
          <div class="step-title">${st.step}</div>
          <div class="step-explanation">${st.explanation}</div>
          <div class="step-math">$$${st.math}$$</div>
        </div>
      `).join('');

      exampleHtml = `
        <div class="example-card" id="sec-esempio">
          <div class="example-header">
            <h2 class="example-title">✍️ ${ex.title}</h2>
            <span class="badge-example-tag">Risoluzione Guidata Esame</span>
          </div>
          <div class="problem-statement-box">
            <strong>Testo del Problema:</strong>
${ex.problemStatement}
          </div>
          <div class="example-steps-container">
            ${stepsHtml}
          </div>
          <div class="final-result-box">
            <div class="final-result-title">🎯 Risultato Finale:</div>
            <div>${ex.finalResult}</div>
          </div>
          <div class="takeaway-box">
            💡 <strong>Regola da ricordare:</strong> ${ex.takeaway}
          </div>
        </div>
      `;
    }

    // Full Page Layout
    readerContentEl.innerHTML = `
      <div class="reader-container">
        <!-- Chapter Hero Banner -->
        <div class="chapter-hero">
          <div class="chapter-hero-meta">
            <span class="chapter-num-pill">Capitolo ${ch.number}</span>
            <span class="chapter-parziale-tag ${ch.parziale === 1 ? 'tag-p1' : 'tag-p2'}">
              ${ch.parziale}° Parziale
            </span>
            <span class="stat-chip">⏱️ ${ch.readTime} di lettura</span>
          </div>

          <h1 class="chapter-hero-title">${ch.title}</h1>
          <p class="chapter-hero-sub">${ch.subtitle}</p>

          <div class="chapter-hero-actions">
            <div class="chapter-stats-info">
              <span class="stat-chip">🏷️ ${ch.tags ? ch.tags.join(', ') : ''}</span>
            </div>
            <div class="action-buttons-group">
              <button id="toggle-complete-btn" class="btn-secondary btn-complete ${isCompleted ? 'active' : ''}">
                ${isCompleted ? '✓ Completato' : '○ Segna come completato'}
              </button>
              <button id="toggle-fav-btn" class="btn-secondary">
                ${isFav ? '⭐ Nei Preferiti' : '☆ Aggiungi ai preferiti'}
              </button>
              <button id="print-chapter-btn" class="btn-secondary" title="Stampa o Salva PDF">
                🖨️ Stampa
              </button>
            </div>
          </div>
        </div>

        <!-- TOC Quick Navigation Pills -->
        <nav class="toc-pills-bar">
          <a href="#sec-teoria" class="toc-pill">📖 Teoria & Dimostrazioni</a>
          <a href="#sec-schemi" class="toc-pill">📐 Schemi SVG</a>
          <a href="#sec-formule" class="toc-pill">⚡ Punti Chiave</a>
          <a href="#sec-trabocchetti" class="toc-pill">⚠️ Trabocchetti Esame</a>
          <a href="#sec-esempio" class="toc-pill">✍️ Esempio Svolto</a>
        </nav>

        <!-- 1. Theory Sections -->
        <div id="sec-teoria">
          ${sectionsHtml}
        </div>

        <!-- 2. Scalable Vector Circuit Schematics -->
        <div class="circuit-schematic-card" id="sec-schemi">
          <div class="card-header-with-badge">
            <h2 class="card-title-lg">📐 Schemi Circuitali Vettoriali SVG</h2>
            <span class="badge-pill-cyan">Scalabile & Alta Risoluzione</span>
          </div>
          <div class="circuit-svg-wrapper">
            ${svgCode}
          </div>
        </div>

        <!-- 3. Key Points & Formulas Callout -->
        <div class="key-points-card" id="sec-formule">
          <div class="key-points-header">
            <span>⚡</span>
            <span>Punti Chiave & Formule da Ricordare</span>
          </div>
          <ul class="key-points-list">
            ${ch.keyPoints.map(kp => `<li>${kp}</li>`).join('')}
          </ul>
        </div>

        <!-- 4. Exam Pitfalls & Professor Advice -->
        <div class="pitfall-card" id="sec-trabocchetti">
          <div class="pitfall-header">
            <span>⚠️</span>
            <span>Trabocchetti d'Esame & Consigli del Docente (D'Amore, Codecasa, Maffezzoni, Guzzetti)</span>
          </div>
          <div class="pitfalls-list">
            ${pitfallsHtml}
          </div>
        </div>

        <!-- 5. Worked Exam Example -->
        ${exampleHtml}

        <!-- Footer Navigation Prev/Next -->
        <div class="chapter-nav-footer">
          ${prevChapter ? `
            <div class="nav-ch-btn prev" data-id="${prevChapter.id}">
              <span>←</span>
              <div>
                <div class="nav-ch-label">Capitolo Precedente</div>
                <div class="nav-ch-title">${prevChapter.number}. ${prevChapter.title}</div>
              </div>
            </div>
          ` : '<div></div>'}

          ${nextChapter ? `
            <div class="nav-ch-btn next" data-id="${nextChapter.id}">
              <div>
                <div class="nav-ch-label">Capitolo Successivo</div>
                <div class="nav-ch-title">${nextChapter.number}. ${nextChapter.title}</div>
              </div>
              <span>→</span>
            </div>
          ` : '<div></div>'}
        </div>
      </div>
    `;

    // Render KaTeX for all formulas in reader
    renderKaTeX(readerContentEl);

    // Scroll to top of reader container
    const readerMain = document.querySelector('main.app-reader');
    if (readerMain) readerMain.scrollTop = 0;

    // TOC Smooth Scrolling Click Handlers (avoids clobbering chapter hash in URL)
    document.querySelectorAll('.toc-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = pill.getAttribute('href').replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // In-place Toggle Complete (preserves reading position, does not reload whole chapter)
    const compBtn = document.getElementById('toggle-complete-btn');
    if (compBtn) {
      compBtn.addEventListener('click', () => {
        const isNowCompleted = !state.completedChapters.has(ch.id);
        if (isNowCompleted) {
          state.completedChapters.add(ch.id);
          compBtn.classList.add('active');
          compBtn.textContent = '✓ Completato';
        } else {
          state.completedChapters.delete(ch.id);
          compBtn.classList.remove('active');
          compBtn.textContent = '○ Segna come completato';
        }
        safeSetStorage('polimi_theory_completed', [...state.completedChapters]);
        renderSidebar();
      });
    }

    // In-place Toggle Favorite
    const favBtn = document.getElementById('toggle-fav-btn');
    if (favBtn) {
      favBtn.addEventListener('click', () => {
        const isNowFav = !state.favoriteChapters.has(ch.id);
        if (isNowFav) {
          state.favoriteChapters.add(ch.id);
          favBtn.textContent = '⭐ Nei Preferiti';
        } else {
          state.favoriteChapters.delete(ch.id);
          favBtn.textContent = '☆ Aggiungi ai preferiti';
        }
        safeSetStorage('polimi_theory_favorites', [...state.favoriteChapters]);
        renderSidebar();
      });
    }

    // Print Chapter
    const printBtn = document.getElementById('print-chapter-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => window.print());
    }

    // Prev / Next Chapter Handlers
    document.querySelectorAll('.nav-ch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (id) {
          loadChapter(id);
          renderSidebar();
        }
      });
    });

    // Update sidebar highlights
    renderSidebar();
  }

  // Modal Controllers
  function openModal(modalEl) {
    if (modalEl) modalEl.classList.add('open');
  }

  function closeModal(modalEl) {
    if (modalEl) modalEl.classList.remove('open');
  }

  // Populate Formula Sheet Modal (with Caching & Real-time Filter)
  function populateFormulaSheet() {
    if (!formulaModalBody) return;
    if (!state.formulaRendered) {
      formulaModalBody.innerHTML = formulaData.map(cat => `
        <div class="formula-cat-section" data-cat-id="${cat.id}">
          <div class="formula-cat-title">
            <span>${cat.title}</span>
            <span class="badge-pill-cyan">${cat.badge}</span>
          </div>
          <div class="formula-card-grid">
            ${cat.formulas.map(f => `
              <div class="formula-card" data-keywords="${(f.name + ' ' + f.description + ' ' + f.latex).toLowerCase()}">
                <div>
                  <div class="formula-name">${f.name}</div>
                  <div class="formula-latex">$$${f.latex}$$</div>
                </div>
                <div class="formula-desc">${f.description}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');

      renderKaTeX(formulaModalBody);
      state.formulaRendered = true;
    }

    if (formulaSearchInput) {
      formulaSearchInput.value = '';
      filterFormulaCards('');
    }
  }

  // Real-time Filter in Formula Sheet Modal
  function filterFormulaCards(query) {
    const q = query.trim().toLowerCase();
    const categories = formulaModalBody.querySelectorAll('.formula-cat-section');

    categories.forEach(cat => {
      let visibleInCat = 0;
      const cards = cat.querySelectorAll('.formula-card');
      cards.forEach(card => {
        const kw = card.getAttribute('data-keywords') || '';
        if (!q || kw.includes(q)) {
          card.style.display = '';
          visibleInCat++;
        } else {
          card.style.display = 'none';
        }
      });
      cat.style.display = visibleInCat > 0 ? '' : 'none';
    });
  }

  // Populate Pitfalls Modal (with Caching & Real-time Filter)
  function populatePitfallsModal() {
    if (!pitfallsModalBody) return;
    if (!state.pitfallsRendered) {
      pitfallsModalBody.innerHTML = allChapters.map(ch => `
        <div class="pitfalls-ch-group" data-keywords="${(ch.title + ' ' + ch.subtitle).toLowerCase()}" style="margin-bottom: 1.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
          <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--polimi-accent); margin-bottom: 0.75rem;">
            Capitolo ${ch.number}: ${ch.title} (${ch.parziale}° Parziale)
          </h3>
          ${ch.pitfalls.map(p => `
            <div class="pitfall-item" data-keywords="${(p.title + ' ' + p.description + ' ' + p.profAdvice).toLowerCase()}" style="margin-bottom: 0.75rem;">
              <div class="pitfall-title">⚠️ ${p.title}</div>
              <div class="pitfall-desc">${p.description}</div>
              <div class="prof-advice-box">
                <span class="prof-tag">Consiglio del Docente:</span> "${p.profAdvice}"
              </div>
            </div>
          `).join('')}
        </div>
      `).join('');

      renderKaTeX(pitfallsModalBody);
      state.pitfallsRendered = true;
    }

    if (pitfallsSearchInput) {
      pitfallsSearchInput.value = '';
      filterPitfallsCards('');
    }
  }

  // Real-time Filter in Pitfalls Modal
  function filterPitfallsCards(query) {
    const q = query.trim().toLowerCase();
    const groups = pitfallsModalBody.querySelectorAll('.pitfalls-ch-group');

    groups.forEach(group => {
      let visibleInGroup = 0;
      const items = group.querySelectorAll('.pitfall-item');
      items.forEach(item => {
        const kw = item.getAttribute('data-keywords') || '';
        if (!q || kw.includes(q)) {
          item.style.display = '';
          visibleInGroup++;
        } else {
          item.style.display = 'none';
        }
      });
      group.style.display = visibleInGroup > 0 ? '' : 'none';
    });
  }

  // Helper to safely format clean snippets without broken LaTeX math delimiters
  function cleanSnippet(txt, query) {
    // Replace LaTeX dollar delimiters so the snippet text doesn't have unclosed math
    let clean = txt.replace(/\$\$[\s\S]*?\$\$/g, ' [formula] ')
                   .replace(/\$([^$]+?)\$/g, '$1')
                   .replace(/[#*_`]/g, '')
                   .replace(/\s+/g, ' ')
                   .trim();

    // Highlight search term with <mark>
    if (query) {
      const escapedQ = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedQ})`, 'gi');
      clean = clean.replace(regex, '<mark>$1</mark>');
    }
    return clean;
  }

  // Global Search Engine (Indexes Chapters, Sections, Keypoints, Pitfalls, AND Worked Examples!)
  function performGlobalSearch(query) {
    if (!searchModalResults) return;
    const q = query.trim().toLowerCase();
    if (!q) {
      searchModalResults.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
          Digita una parola chiave per cercare tra teoremi, definizioni, formule ed esempi...
        </div>
      `;
      return;
    }

    const matches = [];

    allChapters.forEach(ch => {
      // 1. Chapter Title & Subtitle
      if (ch.title.toLowerCase().includes(q) || ch.subtitle.toLowerCase().includes(q)) {
        matches.push({
          chapter: ch,
          type: 'Titolo Capitolo',
          targetId: 'sec-teoria',
          snippet: cleanSnippet(`${ch.number}. ${ch.title} — ${ch.subtitle}`, q)
        });
      }

      // 2. Sections (Title & Content)
      ch.sections.forEach(sec => {
        const titleMatch = sec.title.toLowerCase().includes(q);
        const contentMatch = sec.content.toLowerCase().includes(q);

        if (titleMatch || contentMatch) {
          let snip = '';
          if (contentMatch) {
            const idx = sec.content.toLowerCase().indexOf(q);
            const start = Math.max(0, idx - 45);
            const end = Math.min(sec.content.length, idx + 105);
            snip = '...' + sec.content.substring(start, end) + '...';
          } else {
            snip = sec.content.substring(0, 110) + '...';
          }

          matches.push({
            chapter: ch,
            type: `Sezione: ${sec.title}`,
            targetId: sec.id,
            snippet: cleanSnippet(snip, q)
          });
        }
      });

      // 3. Key Points & Formulas
      ch.keyPoints.forEach(kp => {
        if (kp.toLowerCase().includes(q)) {
          matches.push({
            chapter: ch,
            type: 'Punto Chiave / Formula',
            targetId: 'sec-formule',
            snippet: cleanSnippet(kp, q)
          });
        }
      });

      // 4. Exam Pitfalls & Professor Advice
      ch.pitfalls.forEach(pit => {
        if (pit.title.toLowerCase().includes(q) || pit.description.toLowerCase().includes(q) || pit.profAdvice.toLowerCase().includes(q)) {
          matches.push({
            chapter: ch,
            type: 'Trabocchetto d\'Esame',
            targetId: 'sec-trabocchetti',
            snippet: cleanSnippet(`⚠️ ${pit.title}: ${pit.description} (Consiglio: ${pit.profAdvice})`, q)
          });
        }
      });

      // 5. Worked Exam Examples (Title, Problem Statement, Steps & Final Result)
      if (ch.workedExample) {
        const ex = ch.workedExample;
        const exText = `${ex.title} ${ex.problemStatement} ${ex.steps.map(s => s.step + ' ' + s.explanation).join(' ')} ${ex.finalResult} ${ex.takeaway}`.toLowerCase();
        if (exText.includes(q)) {
          matches.push({
            chapter: ch,
            type: `Esempio Svolto: ${ex.title}`,
            targetId: 'sec-esempio',
            snippet: cleanSnippet(`✍️ ${ex.title}: ${ex.problemStatement}`, q)
          });
        }
      }
    });

    if (matches.length === 0) {
      searchModalResults.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
          Nessun risultato per "<strong>${query}</strong>". Prova con altri termini (es: Thévenin, risonanza, Aron, Laplace, OP-AMP, Tellegen).
        </div>
      `;
      return;
    }

    searchModalResults.innerHTML = `
      <div style="margin-bottom: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">
        Trovati <strong>${matches.length}</strong> risultati per "${query}":
      </div>
      <ul class="search-results-list">
        ${matches.slice(0, 40).map(m => `
          <li class="search-result-item" data-id="${m.chapter.id}" data-target="${m.targetId || ''}">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">
              Capitolo ${m.chapter.number} (${m.chapter.parziale}° Parziale) • ${m.type}
            </div>
            <div class="search-result-title">${m.chapter.title}</div>
            <div class="search-result-snippet">${m.snippet}</div>
          </li>
        `).join('')}
      </ul>
    `;

    // Click handler on search items: loads chapter AND smoothly scrolls directly to the target element!
    searchModalResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const targetId = item.getAttribute('data-target');
        closeModal(searchModal);
        loadChapter(id);
        renderSidebar();

        if (targetId) {
          setTimeout(() => {
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              targetEl.classList.add('search-target-highlight');
              setTimeout(() => targetEl.classList.remove('search-target-highlight'), 2200);
            }
          }, 120);
        }
      });
    });
  }

  // 6. Setup Event Listeners
  function initListeners() {
    // Theme toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }

    // Parziale filter pills
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.activeFilter = pill.getAttribute('data-filter');
        renderSidebar();
      });
    });

    // Search input in sidebar
    if (searchInputEl) {
      searchInputEl.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderSidebar();
      });
    }

    // Navigation Buttons in Header
    const navFormularioBtn = document.getElementById('nav-formula-btn');
    if (navFormularioBtn) {
      navFormularioBtn.addEventListener('click', () => {
        populateFormulaSheet();
        openModal(formulaModal);
      });
    }

    if (formulaSearchInput) {
      formulaSearchInput.addEventListener('input', (e) => {
        filterFormulaCards(e.target.value);
      });
    }

    const navPitfallsBtn = document.getElementById('nav-pitfalls-btn');
    if (navPitfallsBtn) {
      navPitfallsBtn.addEventListener('click', () => {
        populatePitfallsModal();
        openModal(pitfallsModal);
      });
    }

    if (pitfallsSearchInput) {
      pitfallsSearchInput.addEventListener('input', (e) => {
        filterPitfallsCards(e.target.value);
      });
    }

    const navSearchBtn = document.getElementById('nav-search-btn');
    if (navSearchBtn) {
      navSearchBtn.addEventListener('click', () => {
        openModal(searchModal);
        if (searchModalInput) {
          searchModalInput.value = '';
          searchModalInput.focus();
          performGlobalSearch('');
        }
      });
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-backdrop').forEach(closeModal);
      });
    });

    // Close on click outside dialog
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    });

    // Keyboard Shortcuts: Ctrl+K or / for Search, Esc for Modal close
    window.addEventListener('keydown', (e) => {
      const activeTag = document.activeElement ? document.activeElement.tagName : '';
      if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(activeTag))) {
        e.preventDefault();
        openModal(searchModal);
        if (searchModalInput) {
          searchModalInput.focus();
          searchModalInput.select();
        }
      } else if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop').forEach(closeModal);
      }
    });

    // Global Search Input
    if (searchModalInput) {
      searchModalInput.addEventListener('input', (e) => {
        performGlobalSearch(e.target.value);
      });
    }

    // Hash change routing (e.g. #ch5)
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== state.currentChapterId && allChapters.some(c => c.id === hash)) {
        loadChapter(hash);
      }
    });
  }

  // 7. Initialization
  function init() {
    applyTheme(state.theme);
    initListeners();

    // Check URL hash
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && allChapters.some(c => c.id === initialHash)) {
      state.currentChapterId = initialHash;
    }

    renderSidebar();
    loadChapter(state.currentChapterId);
  }

  // Run on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
