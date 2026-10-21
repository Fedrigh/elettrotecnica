// Elettrotecnica Gym Quiz - Main Application Logic

class ElettrotecnicaApp {
  constructor() {
    this.currentParziale = 'all'; // 'all', 1, 2
    this.filteredExercises = [];
    this.currentIndex = 0;
    this.currentExercise = null;

    // Timer settings (2 minutes = 120 seconds)
    this.TOTAL_TIME = 120;
    this.timeLeft = this.TOTAL_TIME;
    this.timerInterval = null;
    this.isPaused = false;

    // User input state for numeric questions
    this.inputValue = '';

    // Score & statistics
    this.stats = {
      answered: 0,
      correct: 0,
      streak: 0,
      bestStreak: 0,
      p1Total: 0,
      p1Correct: 0,
      p2Total: 0,
      p2Correct: 0
    };

    this.hasAnswered = false;

    // DOM Elements
    this.initElements();
    this.bindEvents();
    this.loadFilter('all');
  }

  initElements() {
    this.elTimerBox = document.getElementById('timerBox');
    this.elTimerDisplay = document.getElementById('timerDisplay');
    this.elTimerProgress = document.getElementById('timerProgressBar');
    this.elBtnPause = document.getElementById('btnPause');
    this.elCounter = document.getElementById('exerciseCounter');
    this.elStreak = document.getElementById('streakCounter');
    this.elTopicTag = document.getElementById('topicTag');
    this.elQuestionText = document.getElementById('questionText');
    this.elCircuitBox = document.getElementById('circuitBox');
    this.elOptionsGrid = document.getElementById('optionsGrid');
    this.elInputSection = document.getElementById('inputSection');
    this.elInputDisplay = document.getElementById('inputDisplayVal');
    this.elInputUnit = document.getElementById('inputUnit');
    this.elFeedbackCard = document.getElementById('feedbackCard');
    this.elFeedbackHeader = document.getElementById('feedbackHeader');
    this.elExplanationBody = document.getElementById('explanationBody');
    this.elBtnNext = document.getElementById('btnNext');
    this.elStatsModal = document.getElementById('statsModal');
    this.elSoundToggle = document.getElementById('btnSound');
  }

  bindEvents() {
    // Parziale filter tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const filter = e.currentTarget.dataset.filter;
        this.loadFilter(filter);
      });
    });

    // Pause button
    this.elBtnPause.addEventListener('click', () => this.togglePause());

    // Next button
    this.elBtnNext.addEventListener('click', () => this.nextExercise());

    // Sound toggle
    this.elSoundToggle.addEventListener('click', () => {
      window.snd.enabled = !window.snd.enabled;
      this.elSoundToggle.textContent = window.snd.enabled ? '🔊' : '🔇';
    });

    // Stats modal toggle
    document.getElementById('btnStats').addEventListener('click', () => this.openStats());
    document.getElementById('btnCloseStats').addEventListener('click', () => this.closeStats());

    // Restart button
    document.getElementById('btnRestart').addEventListener('click', () => {
      if (confirm('Vuoi ricominciare il quiz dall\'inizio?')) {
        this.resetQuiz();
      }
    });

    // Gym Keypad clicks
    document.querySelectorAll('.key-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const val = e.currentTarget.dataset.val;
        this.handleKeypad(val);
      });
    });

    // Keyboard support for desktop testing & accessibility
    window.addEventListener('keydown', (e) => {
      if (e.key === 'p' || e.key === 'P') {
        this.togglePause();
        return;
      }

      if (this.hasAnswered) {
        if (e.key === 'Enter' || e.key === ' ') {
          this.nextExercise();
        }
        return;
      }

      if (this.currentExercise) {
        if (this.currentExercise.type === 'input') {
          if (e.key >= '0' && e.key <= '9') {
            this.handleKeypad(e.key);
          } else if (e.key === '.' || e.key === ',') {
            this.handleKeypad('.');
          } else if (e.key === '-') {
            this.handleKeypad('+/-');
          } else if (e.key === 'Backspace') {
            this.handleKeypad('del');
          } else if (e.key === 'Enter') {
            this.handleKeypad('submit');
          }
        } else if (this.currentExercise.type === 'choice') {
          const keyMap = { '1': 0, 'a': 0, 'A': 0, '2': 1, 'b': 1, 'B': 1, '3': 2, 'c': 2, 'C': 2, '4': 3, 'd': 3, 'D': 3 };
          if (keyMap.hasOwnProperty(e.key)) {
            const idx = keyMap[e.key];
            const buttons = this.elOptionsGrid.querySelectorAll('.option-btn');
            if (buttons[idx]) {
              buttons[idx].click();
            }
          }
        }
      }
    });

    // Handle browser/Android back navigation for modal
    window.addEventListener('popstate', () => {
      if (this.elStatsModal && this.elStatsModal.style.display === 'flex') {
        this.closeStats(false);
      }
    });
  }

  loadFilter(filter) {
    this.currentParziale = filter;
    const list = window.EXERCISES || EXERCISES;
    if (filter === 'all') {
      this.filteredExercises = [...list];
    } else {
      const pNum = parseInt(filter, 10);
      this.filteredExercises = list.filter(ex => ex.parziale === pNum);
    }

    // Shuffle exercises for variety
    this.shuffleArray(this.filteredExercises);
    this.currentIndex = 0;
    this.loadExercise(this.currentIndex);
  }

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  loadExercise(index) {
    if (index >= this.filteredExercises.length) {
      this.showQuizComplete();
      return;
    }

    this.currentIndex = index;
    this.currentExercise = this.filteredExercises[index];
    this.hasAnswered = false;
    this.inputValue = '';
    this.isPaused = false;
    this.elBtnPause.textContent = '⏸️';

    // Hide feedback card
    this.elFeedbackCard.style.display = 'none';
    this.elFeedbackCard.className = 'feedback-card';

    // Update Counter & Topic
    this.elCounter.textContent = `Esercizio ${this.currentIndex + 1} / ${this.filteredExercises.length}`;
    this.elStreak.textContent = `🔥 ${this.stats.streak}`;

    const parzialeLabel = this.currentExercise.parziale === 1 ? '1° Parziale' : '2° Parziale';
    this.elTopicTag.textContent = `${parzialeLabel} • ${this.currentExercise.topic}`;
    this.elQuestionText.textContent = this.currentExercise.question;

    // Load Circuit SVG
    this.elCircuitBox.innerHTML = this.currentExercise.circuitSvg;

    // Setup input mode: Multiple choice vs Numeric
    if (this.currentExercise.type === 'choice') {
      this.elOptionsGrid.style.display = 'grid';
      this.elInputSection.style.display = 'none';
      this.renderOptions(this.currentExercise.options);
    } else {
      this.elOptionsGrid.style.display = 'none';
      this.elInputSection.style.display = 'flex';
      this.elInputDisplay.textContent = '_';
      this.elInputDisplay.style.borderColor = '';
      this.elInputDisplay.style.color = '';
      this.elInputDisplay.classList.remove('shake');
      this.elInputUnit.textContent = this.currentExercise.unit || '';
    }

    // Always scroll viewport to top when new exercise loads
    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo(0, 0);
    }

    // Reset and start 2-minute timer
    this.startTimer();
  }

  renderOptions(options) {
    this.elOptionsGrid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="option-letter">${letters[idx]}</span><span>${opt}</span>`;
      btn.addEventListener('click', () => {
        if (!this.hasAnswered && !this.isPaused) {
          window.snd.playClick();
          this.submitChoice(opt, btn);
        }
      });
      this.elOptionsGrid.appendChild(btn);
    });
  }

  handleKeypad(key) {
    if (this.hasAnswered || this.isPaused) return;

    window.snd.playClick();

    if (key === 'del') {
      this.inputValue = this.inputValue.slice(0, -1);
    } else if (key === '+/-') {
      if (this.inputValue.startsWith('-')) {
        this.inputValue = this.inputValue.substring(1);
      } else {
        this.inputValue = '-' + this.inputValue;
      }
    } else if (key === '.') {
      if (!this.inputValue.includes('.')) {
        this.inputValue = (this.inputValue === '' || this.inputValue === '-') ? this.inputValue + '0.' : this.inputValue + '.';
      }
    } else if (key === 'submit') {
      if (this.inputValue.trim() === '' || this.inputValue === '-') {
        window.snd.playWrong();
        this.elInputDisplay.classList.add('shake');
        setTimeout(() => this.elInputDisplay.classList.remove('shake'), 400);
        return;
      }
      this.submitNumeric(parseFloat(this.inputValue));
      return;
    } else {
      // Numbers 0-9 with clean zero handling
      if (this.inputValue === '0') {
        this.inputValue = key === '0' ? '0' : key;
      } else if (this.inputValue === '-0') {
        this.inputValue = key === '0' ? '-0' : '-' + key;
      } else if (this.inputValue.length < 8) {
        this.inputValue += key;
      }
    }

    this.elInputDisplay.textContent = this.inputValue === '' ? '_' : this.inputValue;
  }

  startTimer() {
    this.stopTimer();
    this.timeLeft = this.TOTAL_TIME;
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      if (this.isPaused) return;

      this.timeLeft--;
      this.updateTimerDisplay();

      if (this.timeLeft <= 10 && this.timeLeft > 0) {
        window.snd.playTick();
      }

      if (this.timeLeft <= 0) {
        this.stopTimer();
        this.handleTimeout();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  togglePause() {
    if (this.hasAnswered) return;
    this.isPaused = !this.isPaused;
    this.elBtnPause.textContent = this.isPaused ? '▶️' : '⏸️';
    if (this.isPaused) {
      this.elTimerBox.classList.add('warning');
    } else {
      this.updateTimerColor();
    }
  }

  updateTimerDisplay() {
    const mins = Math.floor(this.timeLeft / 60);
    const secs = this.timeLeft % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    this.elTimerDisplay.textContent = timeStr;

    // Progress bar
    const percent = (this.timeLeft / this.TOTAL_TIME) * 100;
    this.elTimerProgress.style.width = `${percent}%`;

    this.updateTimerColor();
  }

  updateTimerColor() {
    this.elTimerBox.classList.remove('warning', 'danger');
    if (this.timeLeft <= 20) {
      this.elTimerBox.classList.add('danger');
      this.elTimerProgress.style.background = '#ef4444';
    } else if (this.timeLeft <= 45) {
      this.elTimerBox.classList.add('warning');
      this.elTimerProgress.style.background = '#f59e0b';
    } else {
      this.elTimerProgress.style.background = 'linear-gradient(90deg, #38bdf8, #0ea5e9)';
    }
  }

  submitChoice(selected, btnElement) {
    this.hasAnswered = true;
    this.stopTimer();

    const isCorrect = selected === this.currentExercise.correctAnswer;
    this.recordResult(isCorrect);

    // Color buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.style.pointerEvents = 'none';
      const text = btn.querySelector('span:last-child').textContent;
      if (text === this.currentExercise.correctAnswer) {
        btn.style.borderColor = '#10b981';
        btn.style.background = 'rgba(16, 185, 129, 0.2)';
      }
    });

    if (isCorrect) {
      window.snd.playCorrect();
      window.snd.vibrate([40, 60, 40]);
      btnElement.style.borderColor = '#10b981';
      btnElement.style.background = 'rgba(16, 185, 129, 0.25)';
      this.showFeedback('correct', '🎉 CORRETTO! RISPOSTA ESATTA');
    } else {
      window.snd.playWrong();
      window.snd.vibrate([150]);
      btnElement.style.borderColor = '#ef4444';
      btnElement.style.background = 'rgba(239, 68, 68, 0.25)';
      this.showFeedback('wrong', `❌ SBAGLIATO! (Risposta esatta: ${this.currentExercise.correctAnswer})`);
    }
  }

  submitNumeric(userValue) {
    this.hasAnswered = true;
    this.stopTimer();

    const correct = this.currentExercise.correctAnswer;
    const isCorrect = Math.abs(userValue - correct) < 0.05;

    this.recordResult(isCorrect);

    const unit = this.currentExercise.unit || '';

    if (isCorrect) {
      window.snd.playCorrect();
      window.snd.vibrate([40, 60, 40]);
      this.elInputDisplay.style.borderColor = '#10b981';
      this.elInputDisplay.style.color = '#34d399';
      this.showFeedback('correct', `🎉 ESATTO! ${userValue} ${unit}`);
    } else {
      window.snd.playWrong();
      window.snd.vibrate([150]);
      this.elInputDisplay.style.borderColor = '#ef4444';
      this.elInputDisplay.style.color = '#f87171';
      this.showFeedback('wrong', `❌ SBAGLIATO! Hai inserito: ${userValue} ${unit} (Corretto: ${correct} ${unit})`);
    }
  }

  handleTimeout() {
    this.hasAnswered = true;
    window.snd.playWrong();
    window.snd.vibrate([100, 100, 100]);

    this.recordResult(false);

    // Show correct choice if multiple choice, or show correct input
    if (this.currentExercise.type === 'choice') {
      document.querySelectorAll('.option-btn').forEach(btn => {
        btn.style.pointerEvents = 'none';
        const text = btn.querySelector('span:last-child').textContent;
        if (text === this.currentExercise.correctAnswer) {
          btn.style.borderColor = '#10b981';
          btn.style.background = 'rgba(16, 185, 129, 0.2)';
        }
      });
    } else {
      this.elInputDisplay.style.borderColor = '#f59e0b';
      this.elInputDisplay.style.color = '#fbbf24';
      if (this.inputValue === '' || this.inputValue === '-') {
        this.elInputDisplay.textContent = this.currentExercise.correctAnswer;
      }
    }

    const answer = this.currentExercise.correctAnswer + (this.currentExercise.unit ? ' ' + this.currentExercise.unit : '');
    this.showFeedback('timeout', `⏰ TEMPO SCADUTO! (Risposta: ${answer})`);
  }

  recordResult(isCorrect) {
    this.stats.answered++;
    if (isCorrect) {
      this.stats.correct++;
      this.stats.streak++;
      if (this.stats.streak > this.stats.bestStreak) {
        this.stats.bestStreak = this.stats.streak;
      }
      if (this.currentExercise.parziale === 1) this.stats.p1Correct++;
      else this.stats.p2Correct++;
    } else {
      this.stats.streak = 0;
    }

    if (this.currentExercise.parziale === 1) this.stats.p1Total++;
    else this.stats.p2Total++;

    this.elStreak.textContent = `🔥 ${this.stats.streak}`;
  }

  showFeedback(type, headerText) {
    this.elFeedbackCard.style.display = 'block';
    this.elFeedbackCard.className = `feedback-card ${type}`;
    this.elFeedbackHeader.textContent = headerText;
    this.elExplanationBody.innerHTML = this.currentExercise.explanation;

    // Scroll to feedback if needed on small screens
    this.elFeedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  nextExercise() {
    this.loadExercise(this.currentIndex + 1);
  }

  resetQuiz() {
    this.stats = {
      answered: 0,
      correct: 0,
      streak: 0,
      bestStreak: 0,
      p1Total: 0,
      p1Correct: 0,
      p2Total: 0,
      p2Correct: 0
    };
    this.loadFilter(this.currentParziale);
  }

  showQuizComplete() {
    this.stopTimer();
    const pct = this.stats.answered > 0 ? Math.round((this.stats.correct / this.stats.answered) * 100) : 0;
    alert(`🎉 Quiz completato!\n\nPunteggio: ${this.stats.correct} / ${this.stats.answered} (${pct}%)\nStreak record: ${this.stats.bestStreak}\n\nRicomincio gli esercizi!`);
    this.resetQuiz();
  }

  openStats() {
    const el = document.getElementById('statsModal');
    document.getElementById('statAnswered').textContent = this.stats.answered;
    document.getElementById('statCorrect').textContent = this.stats.correct;
    const pct = this.stats.answered > 0 ? Math.round((this.stats.correct / this.stats.answered) * 100) : 0;
    document.getElementById('statAccuracy').textContent = `${pct}%`;
    document.getElementById('statStreak').textContent = this.stats.streak;
    document.getElementById('statBestStreak').textContent = this.stats.bestStreak;
    document.getElementById('statP1').textContent = `${this.stats.p1Correct} / ${this.stats.p1Total}`;
    document.getElementById('statP2').textContent = `${this.stats.p2Correct} / ${this.stats.p2Total}`;
    el.style.display = 'flex';
    if (typeof window !== 'undefined' && window.history && window.history.pushState) {
      window.history.pushState({ modal: 'stats' }, '');
    }
  }

  closeStats(shouldPop = true) {
    document.getElementById('statsModal').style.display = 'none';
    if (shouldPop && typeof window !== 'undefined' && window.history && window.history.state && window.history.state.modal === 'stats') {
      window.history.back();
    }
  }
}

// Start application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.app = new ElettrotecnicaApp();
});
