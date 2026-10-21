/**
 * app.js
 * Main Controller for Simulatore Primo Parziale di Elettrotecnica
 * Politecnico di Milano (ELN / MTM)
 */

(function () {
  "use strict";

  // Application State
  const state = {
    exercises: window.EXERCISES_DATA || [],
    currentView: "practice", // 'practice' | 'exam'
    filters: {
      topic: "all",
      difficulty: "all",
      type: "all",
      professor: "all",
      status: "all",
      search: ""
    },
    pagination: {
      page: 1,
      pageSize: 10
    },
    userAnswers: JSON.parse(localStorage.getItem("polimi_answers") || "{}"),
    bookmarks: new Set(JSON.parse(localStorage.getItem("polimi_bookmarks") || "[]")),
    theme: localStorage.getItem("polimi_theme") || "light",
    // Exam State
    exam: {
      active: false,
      config: null,
      questions: [],
      currentIndex: 0,
      answers: {}, // { qIndex: { selectedOption, numericValue } }
      flagged: new Set(),
      timeLeft: 0,
      timerId: null,
      submitted: false,
      result: null
    }
  };

  // DOM Elements cache
  const elements = {};

  function initElements() {
    elements.themeToggle = document.getElementById("theme-toggle-btn");
    elements.btnPracticeView = document.getElementById("nav-practice-btn");
    elements.btnExamView = document.getElementById("nav-exam-btn");
    elements.btnFormulaSheet = document.getElementById("nav-formula-btn");

    elements.practiceView = document.getElementById("practice-view");
    elements.examView = document.getElementById("exam-view");

    // Practice controls
    elements.filterTopic = document.getElementById("filter-topic");
    elements.filterDifficulty = document.getElementById("filter-difficulty");
    elements.filterType = document.getElementById("filter-type");
    elements.filterProfessor = document.getElementById("filter-professor");
    elements.filterStatus = document.getElementById("filter-status");
    elements.inputSearch = document.getElementById("input-search");
    elements.btnResetFilters = document.getElementById("btn-reset-filters");

    elements.exercisesList = document.getElementById("exercises-list");
    elements.filteredCount = document.getElementById("filtered-count");
    elements.totalCount = document.getElementById("total-count");
    elements.paginationInfo = document.getElementById("pagination-info");
    elements.btnPrevPage = document.getElementById("btn-prev-page");
    elements.btnNextPage = document.getElementById("btn-next-page");

    // Stat Ribbon
    elements.statTotal = document.getElementById("stat-total");
    elements.statDone = document.getElementById("stat-done");
    elements.statCorrect = document.getElementById("stat-correct");
    elements.statAccuracy = document.getElementById("stat-accuracy");

    // Exam View Elements
    elements.examSetupSection = document.getElementById("exam-setup-section");
    elements.examActiveSection = document.getElementById("exam-active-section");
    elements.examResultSection = document.getElementById("exam-result-section");

    elements.examTimer = document.getElementById("exam-timer");
    elements.examPalette = document.getElementById("exam-palette");
    elements.examQuestionContainer = document.getElementById("exam-question-container");
    elements.btnExamPrev = document.getElementById("btn-exam-prev");
    elements.btnExamNext = document.getElementById("btn-exam-next");
    elements.btnExamFlag = document.getElementById("btn-exam-flag");
    elements.btnExamSubmit = document.getElementById("btn-exam-submit");

    // Formula Modal
    elements.formulaModal = document.getElementById("formula-modal");
    elements.formulaCloseBtn = document.getElementById("formula-close-btn");
    elements.formulaTabsContainer = document.getElementById("formula-tabs-container");
    elements.formulaCardsContainer = document.getElementById("formula-cards-container");
  }

  // --- KaTeX Renderer Helper ---
  function renderMath(container) {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(container, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false
        });
      } catch (err) {
        console.warn("KaTeX render error:", err);
      }
    }
  }

  // --- Italian Decimal / Numeric Parser Helper ---
  function parseNumericInput(val) {
    if (val === null || val === undefined) return NaN;
    const s = String(val).trim().replace(',', '.');
    if (s === "") return NaN;
    const num = parseFloat(s);
    return isNaN(num) ? NaN : num;
  }

  // --- Theme Management ---
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("polimi_theme", theme);
    if (elements.themeToggle) {
      elements.themeToggle.innerHTML = theme === "dark" ? "☀️" : "🌙";
      elements.themeToggle.title = theme === "dark" ? "Attiva tema chiaro" : "Attiva tema scuro";
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  }

  // --- Navigation & View Switching ---
  function switchView(viewName) {
    state.currentView = viewName;
    if (viewName === "practice") {
      elements.practiceView.classList.add("active");
      elements.examView.classList.remove("active");
      elements.btnPracticeView.classList.add("active");
      elements.btnExamView.classList.remove("active");
      renderPracticeList();
    } else if (viewName === "exam") {
      elements.practiceView.classList.remove("active");
      elements.examView.classList.add("active");
      elements.btnPracticeView.classList.remove("active");
      elements.btnExamView.classList.add("active");
      if (!state.exam.active && !state.exam.submitted) {
        showExamSetup();
      }
    }
  }

  // --- Filtering & Searching Exercises ---
  function getFilteredExercises() {
    const { topic, difficulty, type, professor, status, search } = state.filters;
    const query = search.trim().toLowerCase();

    return state.exercises.filter((ex) => {
      // Topic
      if (topic !== "all" && ex.topic !== topic) return false;
      // Difficulty
      if (difficulty !== "all" && ex.difficulty !== difficulty) return false;
      // Type
      if (type !== "all" && ex.type !== type) return false;
      // Professor
      if (professor !== "all" && ex.professor_style !== professor) return false;
      // Status
      const ans = state.userAnswers[ex.id];
      if (status === "todo" && ans) return false;
      if (status === "correct" && (!ans || !ans.isCorrect)) return false;
      if (status === "wrong" && (!ans || ans.isCorrect)) return false;
      if (status === "bookmarked" && !state.bookmarks.has(ex.id)) return false;
      // Search
      if (query) {
        const textToSearch = `${ex.id} ${ex.topic} ${ex.subtopic} ${ex.professor_style} ${ex.question}`.toLowerCase();
        if (!textToSearch.includes(query)) return false;
      }
      return true;
    });
  }

  // --- Statistics Ribbon Update ---
  function updateStats() {
    const total = state.exercises.length;
    const answeredIds = Object.keys(state.userAnswers);
    const done = answeredIds.length;
    const correct = answeredIds.filter((id) => state.userAnswers[id].isCorrect).length;
    const accuracy = done > 0 ? Math.round((correct / done) * 100) : 0;

    if (elements.statTotal) elements.statTotal.textContent = total;
    if (elements.statDone) elements.statDone.textContent = done;
    if (elements.statCorrect) elements.statCorrect.textContent = correct;
    if (elements.statAccuracy) elements.statAccuracy.textContent = `${accuracy}%`;
  }

  // --- Render Practice Mode List ---
  function renderPracticeList() {
    const filtered = getFilteredExercises();
    const totalFiltered = filtered.length;
    const { page, pageSize } = state.pagination;

    const maxPage = Math.max(1, Math.ceil(totalFiltered / pageSize));
    if (state.pagination.page > maxPage) state.pagination.page = maxPage;
    const currentPage = state.pagination.page;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalFiltered);
    const currentBatch = filtered.slice(startIndex, endIndex);

    // Update Header Counts
    if (elements.filteredCount) elements.filteredCount.textContent = totalFiltered;
    if (elements.totalCount) elements.totalCount.textContent = state.exercises.length;
    if (elements.paginationInfo) {
      elements.paginationInfo.textContent = `Pagina ${currentPage} di ${maxPage} (${totalFiltered} esercizi)`;
    }
    if (elements.btnPrevPage) elements.btnPrevPage.disabled = currentPage <= 1;
    if (elements.btnNextPage) elements.btnNextPage.disabled = currentPage >= maxPage;

    // Render Cards
    if (currentBatch.length === 0) {
      elements.exercisesList.innerHTML = `
        <div class="exercise-card" style="text-align: center; padding: 3rem 1rem;">
          <h3 style="color: var(--text-muted); margin-bottom: 0.5rem;">Nessun esercizio trovato con i filtri selezionati</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Prova a reimpostare i filtri per visualizzare l'intera raccolta di 210 esercizi.</p>
          <button class="btn btn-primary" style="margin-top: 1rem;" onclick="document.getElementById('btn-reset-filters').click()">Reimposta Filtri</button>
        </div>
      `;
      return;
    }

    elements.exercisesList.innerHTML = currentBatch.map((ex) => buildExerciseCardHtml(ex)).join("");
    renderMath(elements.exercisesList);
    attachCardEventListeners();
    updateStats();
  }

  function buildExerciseCardHtml(ex) {
    const userAns = state.userAnswers[ex.id];
    const isBookmarked = state.bookmarks.has(ex.id);

    let cardStatusClass = "";
    if (userAns) {
      cardStatusClass = userAns.isCorrect ? "correct-answer" : "wrong-answer";
    }

    // Difficulty badge class
    let diffBadgeClass = "badge-diff-intermedio";
    if (ex.difficulty === "Base") diffBadgeClass = "badge-diff-base";
    else if (ex.difficulty === "Avanzato") diffBadgeClass = "badge-diff-avanzato";
    else if (ex.difficulty === "Stile Esame Complesso") diffBadgeClass = "badge-diff-complesso";

    return `
      <div class="exercise-card ${cardStatusClass}" id="card-${ex.id}" data-id="${ex.id}">
        <!-- Header -->
        <div class="card-header-row">
          <div class="badge-cluster">
            <span class="badge badge-id">${ex.id}</span>
            <span class="badge badge-topic">${ex.topic}</span>
            <span class="badge ${diffBadgeClass}">${ex.difficulty}</span>
            <span class="badge badge-prof">${ex.professor_style}</span>
            <span class="badge badge-type">${ex.type === "mcq" ? "Risposta Multipla" : "Calcolo Aperto"}</span>
          </div>
          <div class="card-quick-actions">
            <button class="btn-icon ${isBookmarked ? "bookmarked" : ""}" title="Aggiungi ai preferiti" data-action="toggle-bookmark" data-id="${ex.id}">
              ${isBookmarked ? "★" : "☆"}
            </button>
          </div>
        </div>

        <!-- Question Body -->
        <div class="question-body">
          <p>${ex.question}</p>
        </div>

        <!-- Circuit SVG -->
        <div class="circuit-wrapper">
          ${ex.svg}
        </div>

        <!-- Interactive Question Section -->
        <div class="interactive-section">
          ${ex.type === "mcq" ? buildMcqSection(ex, userAns) : buildNumericSection(ex, userAns)}
        </div>

        <!-- Hint Accordion -->
        <div class="collapsible-box">
          <button class="collapsible-trigger" data-action="toggle-hint">
            <span>💡 Suggerimento & Metodo Risolutivo</span>
            <span class="icon">▼</span>
          </button>
          <div class="collapsible-body hint-body">
            <p>${ex.hint}</p>
          </div>
        </div>

        <!-- Solution Accordion -->
        <div class="collapsible-box">
          <button class="collapsible-trigger" data-action="toggle-solution" style="color: var(--polimi-accent);">
            <span>📐 Risoluzione Completa Passo-Passo</span>
            <span class="icon">▼</span>
          </button>
          <div class="collapsible-body solution-body">
            <div class="solution-content">
              ${formatMarkdownText(ex.solution)}
            </div>
            <div class="exam-pitfall-box">
              <strong>⚠️ Trabocchetto Tipico d'Esame:</strong>
              ${ex.exam_pitfall}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function buildMcqSection(ex, userAns) {
    return `
      <div class="options-grid" data-id="${ex.id}">
        ${ex.options
          .map((opt, idx) => {
            const isChecked = userAns && userAns.selectedOption === idx;
            let optClass = "";
            if (userAns) {
              if (idx === ex.correct_index) optClass = "opt-correct";
              else if (isChecked && !userAns.isCorrect) optClass = "opt-wrong";
            }
            return `
            <label class="option-label ${optClass}">
              <input type="radio" name="mcq-${ex.id}" value="${idx}" ${isChecked ? "checked" : ""} data-action="select-mcq" data-id="${ex.id}" data-index="${idx}">
              <span>${opt}</span>
            </label>
          `;
          })
          .join("")}
      </div>
      ${
        userAns
          ? `
        <div class="option-feedback-notice" style="font-size: 0.9rem; margin-top: 0.5rem; color: ${userAns.isCorrect ? "var(--success)" : "var(--danger)"}; font-weight: 600;">
          ${userAns.isCorrect ? "✓ Risposta Corretta!" : "✗ Risposta Errata."} 
          <span style="font-weight: 400; color: var(--text-main); margin-left: 0.5rem;">${ex.option_explanations[userAns.selectedOption]}</span>
        </div>
      `
          : ""
      }
    `;
  }

  function buildNumericSection(ex, userAns) {
    const val = userAns && userAns.numericValue !== undefined ? userAns.numericValue : "";
    return `
      <div class="numeric-input-section" data-id="${ex.id}">
        <input type="text" inputmode="decimal" class="form-control numeric-input" placeholder="${ex.placeholder || "Valore"}" value="${val}" id="input-${ex.id}">
        <span class="unit-label">${ex.unit}</span>
        <button class="btn btn-primary" data-action="check-numeric" data-id="${ex.id}">Verifica Risposta</button>
      </div>
      ${
        userAns
          ? `
        <div class="option-feedback-notice" style="font-size: 0.9rem; margin-top: 0.5rem; color: ${userAns.isCorrect ? "var(--success)" : "var(--danger)"}; font-weight: 600;">
          ${userAns.isCorrect ? `✓ Risposta Esatta (${userAns.numericValue} ${ex.unit})!` : `✗ Valore inserito: ${userAns.numericValue} ${ex.unit}. Il valore esatto è ${ex.correct_value} ${ex.unit} (tolleranza ±${Math.round((ex.tolerance || 0.05) * 100)}%).`}
        </div>
      `
          : ""
      }
    `;
  }

  function formatMarkdownText(txt) {
    if (!txt) return "";
    return txt
      .replace(/\\n/g, "<br>")
      .replace(/\n/g, "<br>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  }

  // --- Card Event Listeners ---
  function attachCardEventListeners() {
    // MCQ selection
    document.querySelectorAll('[data-action="select-mcq"]').forEach((input) => {
      input.addEventListener("change", (e) => {
        const eid = e.target.dataset.id;
        const selectedIdx = parseInt(e.target.dataset.index, 10);
        handlePracticeMcqAnswer(eid, selectedIdx);
      });
    });

    // Numeric check button
    document.querySelectorAll('[data-action="check-numeric"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const eid = e.currentTarget.dataset.id;
        const inputElem = document.getElementById(`input-${eid}`);
        if (!inputElem) return;
        const val = parseNumericInput(inputElem.value);
        if (isNaN(val)) {
          alert("Inserisci un valore numerico valido (es. 12.5 o 12,5)");
          return;
        }
        handlePracticeNumericAnswer(eid, val);
      });
    });

    // Enter key submission for practice numeric inputs
    document.querySelectorAll('.numeric-input-section input').forEach((inp) => {
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const eid = e.currentTarget.id.replace("input-", "");
          const btn = document.querySelector(`[data-action="check-numeric"][data-id="${eid}"]`);
          if (btn) btn.click();
        }
      });
    });

    // Bookmark Toggle
    document.querySelectorAll('[data-action="toggle-bookmark"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const eid = e.currentTarget.dataset.id;
        toggleBookmark(eid);
      });
    });

    // Collapsible Triggers
    document.querySelectorAll(".collapsible-trigger").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const body = e.currentTarget.nextElementSibling;
        const icon = e.currentTarget.querySelector(".icon");
        if (body.classList.contains("open")) {
          body.classList.remove("open");
          icon.textContent = "▼";
        } else {
          body.classList.add("open");
          icon.textContent = "▲";
          renderMath(body);
        }
      });
    });
  }

  function handlePracticeMcqAnswer(exerciseId, selectedOption) {
    const ex = state.exercises.find((item) => item.id === exerciseId);
    if (!ex) return;

    const isCorrect = selectedOption === ex.correct_index;
    state.userAnswers[exerciseId] = {
      selectedOption,
      isCorrect,
      timestamp: Date.now()
    };
    saveUserAnswers();
    renderPracticeList();
  }

  function handlePracticeNumericAnswer(exerciseId, val) {
    const ex = state.exercises.find((item) => item.id === exerciseId);
    if (!ex) return;

    const target = ex.correct_value;
    const tol = ex.tolerance || 0.05;
    const allowedDelta = Math.max(0.05, Math.abs(target * tol));
    const isCorrect = Math.abs(val - target) <= allowedDelta;

    state.userAnswers[exerciseId] = {
      numericValue: val,
      isCorrect,
      timestamp: Date.now()
    };
    saveUserAnswers();
    renderPracticeList();
  }

  function toggleBookmark(exerciseId) {
    if (state.bookmarks.has(exerciseId)) {
      state.bookmarks.delete(exerciseId);
    } else {
      state.bookmarks.add(exerciseId);
    }
    localStorage.setItem("polimi_bookmarks", JSON.stringify(Array.from(state.bookmarks)));
    renderPracticeList();
  }

  function saveUserAnswers() {
    localStorage.setItem("polimi_answers", JSON.stringify(state.userAnswers));
  }

  // --- Official Exam Simulation System ---
  const EXAM_PRESETS = {
    standard: {
      name: "Simulazione Ufficiale Polimi (8 Quesiti + 2 Esercizi)",
      description: "Struttura identica alle prove in itinere WeBeep (es. 3 Nov 2023, 13 Nov 2024). Punteggio con penalità: +2.5 pt esatta, -0.625 pt errata, 0 pt non data; Esercizi numerici: 6 pt ciascuno. Totale max 32 punti (30 e lode).",
      mcqCount: 8,
      numCount: 2,
      durationMinutes: 90,
      scoring: {
        mcqCorrect: 2.5,
        mcqWrong: -0.625,
        mcqBlank: 0,
        numCorrect: 6.0,
        numWrong: 0,
        maxScore: 32.0,
        passThreshold: 18.0
      }
    },
    quick: {
      name: "Parziale Rapido (5 Quesiti + 1 Esercizio)",
      description: "Allenamento sprint focalizzato sul tempo. 5 Quesiti a risposta multipla e 1 Esercizio numerico di sintesi in 45 minuti.",
      mcqCount: 5,
      numCount: 1,
      durationMinutes: 45,
      scoring: {
        mcqCorrect: 4.0,
        mcqWrong: -1.0,
        mcqBlank: 0,
        numCorrect: 10.0,
        numWrong: 0,
        maxScore: 30.0,
        passThreshold: 18.0
      }
    },
    marathon: {
      name: "Maratona 1° Parziale (12 Quesiti + 3 Esercizi)",
      description: "Prova ad altissima intensità per testare ogni singolo argomento e consolidare la resistenza all'esame in 120 minuti.",
      mcqCount: 12,
      numCount: 3,
      durationMinutes: 120,
      scoring: {
        mcqCorrect: 2.0,
        mcqWrong: -0.5,
        mcqBlank: 0,
        numCorrect: 4.0,
        numWrong: 0,
        maxScore: 36.0,
        passThreshold: 18.0
      }
    }
  };

  function showExamSetup() {
    elements.examSetupSection.style.display = "block";
    elements.examActiveSection.style.display = "none";
    elements.examResultSection.style.display = "none";

    elements.examSetupSection.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--polimi-blue); margin-bottom: 0.5rem;">Simulazione Ufficiale 1ª Prova in Itinere</h2>
          <p style="color: var(--text-muted); font-size: 1.05rem;">Ambiente d'esame cronometrato con penalità WeBeep e valutazione accademica Polimi su 30/30.</p>
        </div>

        <div style="display: grid; gap: 1.25rem;">
          ${Object.entries(EXAM_PRESETS)
            .map(
              ([key, p]) => `
            <div class="exercise-card" style="border: 2px solid var(--border-color); cursor: pointer; transition: var(--transition);" onclick="window.startExam('${key}')">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--polimi-blue);">${p.name}</h3>
                <span class="badge badge-topic">⏱️ ${p.durationMinutes} Minuti</span>
              </div>
              <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 1rem;">${p.description}</p>
              <div style="display: flex; gap: 0.75rem; align-items: center;">
                <button class="btn btn-primary" onclick="event.stopPropagation(); window.startExam('${key}')">Avvia Prova</button>
                <span style="font-size: 0.85rem; color: var(--text-muted);">${p.mcqCount} Domande MCQ + ${p.numCount} Esercizi Numerici</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  window.startExam = function (presetKey) {
    const config = EXAM_PRESETS[presetKey] || EXAM_PRESETS.standard;
    const questions = sampleBalancedExam(config.mcqCount, config.numCount);

    state.exam = {
      active: true,
      config,
      questions,
      currentIndex: 0,
      answers: {},
      flagged: new Set(),
      timeLeft: config.durationMinutes * 60,
      timerId: null,
      submitted: false,
      result: null
    };

    elements.examSetupSection.style.display = "none";
    elements.examActiveSection.style.display = "block";
    elements.examResultSection.style.display = "none";

    startExamTimer();
    renderExamQuestion(0);
    renderExamPalette();
  };

  // Official Primo Parziale syllabus topics
  const EXAM_TOPICS = [
    "Circuiti in Regime Stazionario (DC)",
    "Thévenin, Norton & Generatori Pilotati",
    "Bipoli Non Lineari & Diodi Ideali",
    "Amplificatori Operazionali (OP-AMP)",
    "Doppi Bipoli & Trasformatore Ideale",
    "Regime Sinusoidale Monofase (AC)"
  ];

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Sample balanced set ensuring representative coverage across all 6 topics
  function sampleBalancedExam(mcqCount, numCount) {
    // 1. Pick MCQ questions with round-robin balanced selection across topics
    const mcqTopicQueues = {};
    EXAM_TOPICS.forEach((t) => {
      mcqTopicQueues[t] = shuffleArray(state.exercises.filter((e) => e.type === "mcq" && e.topic === t));
    });

    const pickedMcq = [];
    const mcqTopicOrder = shuffleArray(EXAM_TOPICS);
    let mIdx = 0;
    while (pickedMcq.length < mcqCount) {
      const currentTopic = mcqTopicOrder[mIdx % mcqTopicOrder.length];
      if (mcqTopicQueues[currentTopic] && mcqTopicQueues[currentTopic].length > 0) {
        pickedMcq.push(mcqTopicQueues[currentTopic].pop());
      } else {
        const remaining = state.exercises.filter((e) => e.type === "mcq" && !pickedMcq.includes(e));
        if (remaining.length > 0) {
          pickedMcq.push(shuffleArray(remaining)[0]);
        } else {
          break;
        }
      }
      mIdx++;
    }

    // 2. Pick Numeric exercises across distinct topics
    const numTopicQueues = {};
    EXAM_TOPICS.forEach((t) => {
      numTopicQueues[t] = shuffleArray(state.exercises.filter((e) => e.type === "numeric" && e.topic === t));
    });

    const activeNumTopics = shuffleArray(EXAM_TOPICS.filter((t) => (numTopicQueues[t] || []).length > 0));
    const pickedNum = [];
    let nIdx = 0;
    while (pickedNum.length < numCount) {
      const currentTopic = activeNumTopics[nIdx % activeNumTopics.length];
      if (numTopicQueues[currentTopic] && numTopicQueues[currentTopic].length > 0) {
        pickedNum.push(numTopicQueues[currentTopic].pop());
      } else {
        const remaining = state.exercises.filter((e) => e.type === "numeric" && !pickedNum.includes(e));
        if (remaining.length > 0) {
          pickedNum.push(shuffleArray(remaining)[0]);
        } else {
          break;
        }
      }
      nIdx++;
    }

    return [...pickedMcq, ...pickedNum];
  }

  function startExamTimer() {
    clearInterval(state.exam.timerId);
    updateTimerDisplay();

    state.exam.timerId = setInterval(() => {
      state.exam.timeLeft--;
      updateTimerDisplay();

      if (state.exam.timeLeft <= 0) {
        clearInterval(state.exam.timerId);
        alert("Tempo d'esame scaduto! Consegna automatica della prova.");
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const m = Math.floor(state.exam.timeLeft / 60);
    const s = state.exam.timeLeft % 60;
    const formatted = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    if (elements.examTimer) {
      elements.examTimer.innerHTML = `⏱️ ${formatted}`;
      if (state.exam.timeLeft < 600) {
        elements.examTimer.classList.add("timer-danger");
      } else {
        elements.examTimer.classList.remove("timer-danger");
      }
    }
  }

  function renderExamPalette() {
    if (!elements.examPalette) return;
    const total = state.exam.questions.length;
    let html = "";
    for (let i = 0; i < total; i++) {
      const isCurrent = i === state.exam.currentIndex;
      const isAnswered = state.exam.answers[i] !== undefined;
      const isFlagged = state.exam.flagged.has(i);

      let btnClass = "palette-btn";
      if (isCurrent) btnClass += " active";
      if (isAnswered) btnClass += " answered";
      if (isFlagged) btnClass += " flagged";

      html += `<button class="${btnClass}" onclick="window.jumpToExamQuestion(${i})">${i + 1}</button>`;
    }
    elements.examPalette.innerHTML = html;
  }

  window.jumpToExamQuestion = function (index) {
    saveCurrentExamInput();
    state.exam.currentIndex = index;
    renderExamQuestion(index);
    renderExamPalette();
  };

  function saveCurrentExamInput() {
    const idx = state.exam.currentIndex;
    const q = state.exam.questions[idx];
    if (!q) return;

    if (q.type === "mcq") {
      const selected = document.querySelector(`input[name="exam-mcq-${idx}"]:checked`);
      if (selected) {
        state.exam.answers[idx] = { selectedOption: parseInt(selected.value, 10) };
      }
    } else {
      const input = document.getElementById(`exam-num-input-${idx}`);
      if (input) {
        const val = parseNumericInput(input.value);
        if (!isNaN(val)) {
          state.exam.answers[idx] = { numericValue: val };
        } else {
          delete state.exam.answers[idx];
        }
      }
    }
  }

  function renderExamQuestion(index) {
    const q = state.exam.questions[index];
    if (!q) return;

    const ans = state.exam.answers[index];
    const total = state.exam.questions.length;

    // Difficulty badge
    let diffBadgeClass = "badge-diff-intermedio";
    if (q.difficulty === "Base") diffBadgeClass = "badge-diff-base";
    else if (q.difficulty === "Avanzato") diffBadgeClass = "badge-diff-avanzato";
    else if (q.difficulty === "Stile Esame Complesso") diffBadgeClass = "badge-diff-complesso";

    const html = `
      <div class="exercise-card" style="box-shadow: none; border-color: transparent; padding: 0;">
        <div class="card-header-row">
          <div class="badge-cluster">
            <span class="badge badge-id">Quesito ${index + 1} di ${total}</span>
            <span class="badge badge-topic">${q.topic}</span>
            <span class="badge ${diffBadgeClass}">${q.difficulty}</span>
            <span class="badge badge-type">${q.type === "mcq" ? "Risposta Multipla" : "Calcolo Aperto"}</span>
          </div>
          <button class="btn btn-secondary" onclick="window.toggleExamFlag(${index})">
            ${state.exam.flagged.has(index) ? "★ Contrassegnata" : "☆ Segna per dopo"}
          </button>
        </div>

        <div class="question-body">
          <p>${q.question}</p>
        </div>

        <div class="circuit-wrapper">
          ${q.svg}
        </div>

        <div class="interactive-section" style="margin-top: 1.5rem;">
          ${
            q.type === "mcq"
              ? `
            <div class="options-grid">
              ${q.options
                .map((opt, oIdx) => {
                  const isChecked = ans && ans.selectedOption === oIdx;
                  return `
                  <label class="option-label">
                    <input type="radio" name="exam-mcq-${index}" value="${oIdx}" ${isChecked ? "checked" : ""} onchange="window.recordExamMcq(${index}, ${oIdx})">
                    <span>${opt}</span>
                  </label>
                `;
                })
                .join("")}
            </div>
          `
              : `
            <div class="numeric-input-section">
              <input type="text" inputmode="decimal" class="form-control numeric-input" id="exam-num-input-${index}" placeholder="${q.placeholder || "Valore"}" value="${ans && ans.numericValue !== undefined ? ans.numericValue : ""}" oninput="window.recordExamNum(${index}, this.value)">
              <span class="unit-label">${q.unit}</span>
            </div>
          `
          }
        </div>
      </div>
    `;

    elements.examQuestionContainer.innerHTML = html;
    renderMath(elements.examQuestionContainer);

    // Prev / Next button states
    elements.btnExamPrev.disabled = index <= 0;
    elements.btnExamNext.disabled = index >= total - 1;
  }

  window.toggleExamFlag = function (index) {
    if (state.exam.flagged.has(index)) {
      state.exam.flagged.delete(index);
    } else {
      state.exam.flagged.add(index);
    }
    renderExamQuestion(index);
    renderExamPalette();
  };

  window.recordExamMcq = function (qIndex, optIndex) {
    state.exam.answers[qIndex] = { selectedOption: optIndex };
    renderExamPalette();
  };

  window.recordExamNum = function (qIndex, valStr) {
    const val = parseNumericInput(valStr);
    if (isNaN(val)) {
      delete state.exam.answers[qIndex];
    } else {
      state.exam.answers[qIndex] = { numericValue: val };
    }
    renderExamPalette();
  };

  // Exam navigation buttons
  if (elements.btnExamPrev) {
    elements.btnExamPrev.addEventListener("click", () => {
      if (state.exam.currentIndex > 0) {
        window.jumpToExamQuestion(state.exam.currentIndex - 1);
      }
    });
  }

  if (elements.btnExamNext) {
    elements.btnExamNext.addEventListener("click", () => {
      if (state.exam.currentIndex < state.exam.questions.length - 1) {
        window.jumpToExamQuestion(state.exam.currentIndex + 1);
      }
    });
  }

  if (elements.btnExamSubmit) {
    elements.btnExamSubmit.addEventListener("click", () => {
      saveCurrentExamInput();
      const total = state.exam.questions.length;
      const answered = Object.keys(state.exam.answers).length;
      const blank = total - answered;

      const confirmMsg = `Confermi la consegna della prova?\nHai risposto a ${answered} quesiti su ${total}. (${blank} quesiti lasciati in bianco)`;
      if (confirm(confirmMsg)) {
        submitExam();
      }
    });
  }

  function submitExam() {
    saveCurrentExamInput();
    clearInterval(state.exam.timerId);
    state.exam.active = false;
    state.exam.submitted = true;

    // Calculate score
    const { scoring } = state.exam.config;
    let totalScore = 0;
    const reviewDetails = [];

    state.exam.questions.forEach((q, idx) => {
      const userAns = state.exam.answers[idx];
      let isCorrect = false;
      let points = 0;

      if (q.type === "mcq") {
        if (!userAns || userAns.selectedOption === undefined) {
          points = scoring.mcqBlank;
        } else if (userAns.selectedOption === q.correct_index) {
          isCorrect = true;
          points = scoring.mcqCorrect;
        } else {
          isCorrect = false;
          points = scoring.mcqWrong;
        }
      } else {
        // Numeric
        if (!userAns || userAns.numericValue === undefined || isNaN(userAns.numericValue)) {
          points = 0;
        } else {
          const target = q.correct_value;
          const tol = q.tolerance || 0.05;
          const allowedDelta = Math.max(0.05, Math.abs(target * tol));
          if (Math.abs(userAns.numericValue - target) <= allowedDelta) {
            isCorrect = true;
            points = scoring.numCorrect;
          } else {
            isCorrect = false;
            points = scoring.numWrong;
          }
        }
      }

      totalScore += points;
      reviewDetails.push({
        question: q,
        userAns,
        isCorrect,
        points
      });
    });

    // Score cap and normalisation to 30
    totalScore = Math.max(0, totalScore);
    const normalizedScore = Math.min(30, totalScore);
    const isHonors = totalScore >= 31.5;

    state.exam.result = {
      rawScore: totalScore,
      normalizedScore,
      isHonors,
      maxScore: scoring.maxScore,
      passed: normalizedScore >= scoring.passThreshold,
      reviewDetails
    };

    renderExamReport();
  }

  function renderExamReport() {
    elements.examActiveSection.style.display = "none";
    elements.examResultSection.style.display = "block";

    const res = state.exam.result;
    const isPass = res.passed;

    let verdictTitle = isPass ? "ESAME SUPERATO!" : "PROVA NON SUPERATA";
    if (res.isHonors) verdictTitle = "ESAME SUPERATO CON 30 E LODE!";

    let verdictMsg = "";
    if (res.isHonors) {
      verdictMsg = "Risultato magistrale! Hai dimostrato una padronanza impeccabile dei teoremi circuitali, del metodo MNA, delle analisi fasoriali e dei dispositivi non lineari.";
    } else if (res.normalizedScore >= 27) {
      verdictMsg = "Prestazione eccellente! Ottima gestione delle equazioni nodali e delle convenzioni dei segni in regime stazionario e sinusoidale.";
    } else if (res.normalizedScore >= 22) {
      verdictMsg = "Buona prova! Sei sopra la media di ammissione. Consigliamo di rivedere i quesiti errati su Thévenin e le ipotesi di stato sui diodi per puntare al 30.";
    } else if (res.passed) {
      verdictMsg = "Sufficiente (18-21/30). Hai superato la soglia minima, ma vi sono incertezze critiche sui segni o sui generatori pilotati che potrebbero costare caro all'orale.";
    } else {
      verdictMsg = "Punteggio insufficiente (< 18/30). Analizza accuratamente le soluzioni passo-passo riportate di seguito ed esercitati sui trabocchetti tipici d'esame.";
    }

    const html = `
      <div style="max-width: 900px; margin: 0 auto;">
        <!-- Hero Report Banner -->
        <div class="report-hero">
          <div class="score-badge-circle">
            <span class="score-val">${res.normalizedScore.toFixed(1)}</span>
            <span class="score-max">/ 30</span>
          </div>
          <h2 class="verdict-title">${verdictTitle}</h2>
          <p class="verdict-msg">${verdictMsg}</p>
          <div style="margin-top: 1.5rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="window.startExam('${Object.keys(EXAM_PRESETS)[0]}')">Rifai Prova Standard</button>
            <button class="btn btn-secondary" onclick="window.showExamSetup()">Scegli Altra Prova</button>
            <button class="btn btn-secondary" onclick="window.switchView('practice')">Torna all'Eserciziario</button>
          </div>
        </div>

        <!-- Detailed Review List -->
        <div style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--polimi-blue); margin-bottom: 1rem;">Revisione Dettagliata delle Risposte</h3>
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${res.reviewDetails
              .map((rev, i) => {
                const q = rev.question;
                const statusColor = rev.isCorrect ? "var(--success)" : rev.points < 0 ? "var(--danger)" : "var(--text-muted)";
                return `
                <div class="exercise-card" style="border-left: 5px solid ${statusColor};">
                  <div class="card-header-row">
                    <div class="badge-cluster">
                      <span class="badge badge-id">#${i + 1} (${q.id})</span>
                      <span class="badge badge-topic">${q.topic}</span>
                      <span class="badge badge-type">${q.type === "mcq" ? "Risposta Multipla" : "Calcolo Aperto"}</span>
                    </div>
                    <span style="font-weight: 800; color: ${statusColor};">${rev.points > 0 ? "+" : ""}${rev.points.toFixed(3)} pt</span>
                  </div>

                  <p style="margin-bottom: 1rem; font-size: 0.95rem;">${q.question}</p>
                  
                  <div class="circuit-wrapper" style="margin-bottom: 1rem;">
                    ${q.svg}
                  </div>

                  <div style="background: var(--bg-subtle); padding: 0.85rem; border-radius: var(--radius-sm); font-size: 0.9rem; margin-bottom: 1rem;">
                    ${
                      q.type === "mcq"
                        ? `
                      <div><strong>La tua risposta:</strong> ${rev.userAns && rev.userAns.selectedOption !== undefined ? q.options[rev.userAns.selectedOption] : "<em>Lasciata in bianco</em>"}</div>
                      <div><strong>Risposta corretta:</strong> ${q.options[q.correct_index]}</div>
                    `
                        : `
                      <div><strong>Il tuo valore inserito:</strong> ${rev.userAns && rev.userAns.numericValue !== undefined ? `${rev.userAns.numericValue} ${q.unit}` : "<em>Lasciato in bianco</em>"}</div>
                      <div><strong>Valore corretto:</strong> ${q.correct_value} ${q.unit}</div>
                    `
                    }
                  </div>

                  <!-- Collapsible full solution in exam review -->
                  <div class="collapsible-box">
                    <button class="collapsible-trigger" data-action="toggle-solution" style="color: var(--polimi-accent);">
                      <span>📐 Mostra Risoluzione Completa e Trabocchetto</span>
                      <span class="icon">▼</span>
                    </button>
                    <div class="collapsible-body solution-body">
                      <div class="solution-content">
                        ${formatMarkdownText(q.solution)}
                      </div>
                      <div class="exam-pitfall-box">
                        <strong>⚠️ Trabocchetto Tipico d'Esame:</strong>
                        ${q.exam_pitfall}
                      </div>
                    </div>
                  </div>
                </div>
              `;
              })
              .join("")}
          </div>
        </div>
      </div>
    `;

    elements.examResultSection.innerHTML = html;
    renderMath(elements.examResultSection);
    attachCardEventListeners();
  }

  // --- Formula Sheet Modal Controller ---
  function initFormulaSheet() {
    if (!window.FORMULA_SHEET_DATA || !elements.formulaTabsContainer) return;

    // Render Tabs
    elements.formulaTabsContainer.innerHTML = window.FORMULA_SHEET_DATA.map((tab, idx) => {
      return `<button class="formula-tab-btn ${idx === 0 ? "active" : ""}" data-tab-id="${tab.id}">${tab.title}</button>`;
    }).join("");

    renderFormulaTab(window.FORMULA_SHEET_DATA[0].id);

    elements.formulaTabsContainer.querySelectorAll(".formula-tab-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        elements.formulaTabsContainer.querySelectorAll(".formula-tab-btn").forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        renderFormulaTab(e.currentTarget.dataset.tabId);
      });
    });

    if (elements.btnFormulaSheet) {
      elements.btnFormulaSheet.addEventListener("click", () => {
        elements.formulaModal.classList.add("open");
        renderMath(elements.formulaModal);
      });
    }

    if (elements.formulaCloseBtn) {
      elements.formulaCloseBtn.addEventListener("click", () => {
        elements.formulaModal.classList.remove("open");
      });
    }

    elements.formulaModal.addEventListener("click", (e) => {
      if (e.target === elements.formulaModal) {
        elements.formulaModal.classList.remove("open");
      }
    });
  }

  function renderFormulaTab(tabId) {
    const tabData = window.FORMULA_SHEET_DATA.find((t) => t.id === tabId);
    if (!tabData || !elements.formulaCardsContainer) return;

    elements.formulaCardsContainer.innerHTML = tabData.cards
      .map((c) => {
        return `
        <div class="formula-card">
          <h4>${c.subtitle}</h4>
          <div class="formula-math">${c.math}</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.4rem;">${c.explanation}</p>
        </div>
      `;
      })
      .join("");

    renderMath(elements.formulaCardsContainer);
  }

  // --- Event Bindings & Init ---
  function bindGlobalEvents() {
    if (elements.themeToggle) elements.themeToggle.addEventListener("click", toggleTheme);
    if (elements.btnPracticeView) elements.btnPracticeView.addEventListener("click", () => switchView("practice"));
    if (elements.btnExamView) elements.btnExamView.addEventListener("click", () => switchView("exam"));

    // Practice filter inputs
    const filterInputs = [elements.filterTopic, elements.filterDifficulty, elements.filterType, elements.filterProfessor, elements.filterStatus];
    filterInputs.forEach((select) => {
      if (select) {
        select.addEventListener("change", () => {
          state.filters.topic = elements.filterTopic.value;
          state.filters.difficulty = elements.filterDifficulty.value;
          state.filters.type = elements.filterType.value;
          state.filters.professor = elements.filterProfessor.value;
          state.filters.status = elements.filterStatus.value;
          state.pagination.page = 1;
          renderPracticeList();
        });
      }
    });

    if (elements.inputSearch) {
      elements.inputSearch.addEventListener("input", (e) => {
        state.filters.search = e.target.value;
        state.pagination.page = 1;
        renderPracticeList();
      });
    }

    if (elements.btnResetFilters) {
      elements.btnResetFilters.addEventListener("click", () => {
        state.filters = {
          topic: "all",
          difficulty: "all",
          type: "all",
          professor: "all",
          status: "all",
          search: ""
        };
        elements.filterTopic.value = "all";
        elements.filterDifficulty.value = "all";
        elements.filterType.value = "all";
        elements.filterProfessor.value = "all";
        elements.filterStatus.value = "all";
        elements.inputSearch.value = "";
        state.pagination.page = 1;
        renderPracticeList();
      });
    }

    // Pagination
    if (elements.btnPrevPage) {
      elements.btnPrevPage.addEventListener("click", () => {
        if (state.pagination.page > 1) {
          state.pagination.page--;
          renderPracticeList();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }

    if (elements.btnNextPage) {
      elements.btnNextPage.addEventListener("click", () => {
        state.pagination.page++;
        renderPracticeList();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  // --- Bootstrap on Window Load ---
  window.addEventListener("DOMContentLoaded", () => {
    initElements();
    applyTheme(state.theme);
    bindGlobalEvents();
    initFormulaSheet();
    renderPracticeList();
    updateStats();
  });

  // Expose global methods for inline HTML events
  window.switchView = switchView;
  window.showExamSetup = showExamSetup;
  window.startExam = startExam;
})();
