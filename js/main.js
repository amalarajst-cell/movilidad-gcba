// Main Application Logic for Manual de Seguridad Vial

// ===== STATE MANAGEMENT =====
class AppState {
    constructor() {
        this.currentChapter = 'intro';
        this.completedChapters = this.loadProgress();
        this.quizAttempts = {};
    }

    loadProgress() {
        const saved = localStorage.getItem('roadSafety_progress');
        return saved ? JSON.parse(saved) : [];
    }

    saveProgress() {
        localStorage.setItem('roadSafety_progress', JSON.stringify(this.completedChapters));
    }

    completeChapter(chapterId) {
        if (!this.completedChapters.includes(chapterId)) {
            this.completedChapters.push(chapterId);
            this.saveProgress();
            this.updateProgress();
            this.unlockNextChapter(chapterId);
        }
    }

    isChapterUnlocked(chapterId) {
        // Todos los capítulos están desbloqueados desde el inicio
        return true;
    }

    unlockNextChapter(currentChapterId) {
        const chapterOrder = ['intro', 'encuentro1', 'encuentro2'];
        const currentIndex = chapterOrder.indexOf(currentChapterId);

        if (currentIndex >= 0 && currentIndex < chapterOrder.length - 1) {
            const nextChapterId = chapterOrder[currentIndex + 1];
            const nextLink = document.querySelector(`[data-chapter="${nextChapterId}"]`);

            if (nextLink) {
                nextLink.classList.remove('locked');
            }
        }
    }

    updateProgress() {
        const totalChapters = 2; // 2 encuentros (not counting intro)
        const completed = this.completedChapters.filter(ch => ch !== 'intro').length;
        const percentage = Math.round((completed / totalChapters) * 100);

        document.getElementById('progressFill').style.width = `${percentage}%`;
        document.getElementById('progressPercent').textContent = percentage;
    }
}

// Initialize global state
const appState = new AppState();

// ===== NAVIGATION =====
function loadChapter(chapterId) {
    if (!appState.isChapterUnlocked(chapterId)) {
        alert('⚠️ Debes completar los capítulos anteriores para desbloquear este contenido.');
        return;
    }

    const chapter = COURSE_DATA[chapterId];
    if (!chapter) {
        console.error('Chapter not found:', chapterId);
        return;
    }

    appState.currentChapter = chapterId;

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-chapter') === chapterId) {
            link.classList.add('active');
        }
    });

    // Render chapter content
    renderChapter(chapter);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile menu if open
    document.getElementById('sidebar').classList.remove('active');
}

function renderChapter(chapter) {
    const contentWrapper = document.getElementById('contentWrapper');

    let html = `
        <div class="chapter">
            <div class="chapter-header">
                <h1 class="chapter-title">${chapter.title}</h1>
                <p class="chapter-subtitle">${chapter.subtitle}</p>
            </div>
            <div class="chapter-content">
                ${chapter.content}
            </div>
    `;

    // Add widget if present (only for single widgets, not 'multiple')
    if (chapter.widget && chapter.widget !== 'multiple' && window.WIDGETS[chapter.widget]) {
        html += window.WIDGETS[chapter.widget].init();
    }

    // Add quiz if present
    if (chapter.hasQuiz && chapter.quiz) {
        html += renderQuiz(chapter);
    }

    // Add Google Form button if present
    if (chapter.hasForm) {
        const formButtonDisabled = chapter.hasQuiz ? 'disabled' : '';
        html += `
            <div class="chapter-footer">
                <p style="margin-bottom: 16px; color: #E0E0E0;">
                    ${chapter.hasQuiz ? 'Completa la evaluación rápida antes de continuar.' : 'Completa la evaluación oficial para avanzar.'}
                </p>
                <a href="${chapter.formUrl}" target="_blank" class="btn btn-primary btn-block" id="formButton" ${formButtonDisabled}>
                    📝 Realizar Evaluación ${chapter.id === 'encuentro2' ? 'Final' : 'del Encuentro ' + chapter.id.replace('encuentro', '')}
                </a>
                <button class="btn btn-secondary btn-block" id="completeChapter" style="margin-top: 12px;">
                    ✅ Marcar como Completado y Continuar
                </button>
            </div>
        `;
    }

    html += '</div>';

    contentWrapper.innerHTML = html;

    // Setup widget interactivity if present
    if (chapter.widget) {
        setTimeout(() => {
            if (chapter.widget === 'multiple') {
                // Initialize all widgets embedded in the content
                ['brakingCalculator', 'impactSlider', 'brakeComparison', 'blindSpots', 'weatherCarousel'].forEach(widgetName => {
                    if (document.getElementById(widgetName) && window.WIDGETS[widgetName]) {
                        window.WIDGETS[widgetName].setup();
                    }
                });
            } else if (window.WIDGETS[chapter.widget]) {
                window.WIDGETS[chapter.widget].setup();
            }
        }, 100);
    }

    // Setup quiz interactivity if present
    if (chapter.hasQuiz) {
        setupQuizInteraction(chapter);
    }

    // Setup completion button
    const completeBtn = document.getElementById('completeChapter');
    if (completeBtn) {
        completeBtn.addEventListener('click', () => {
            appState.completeChapter(chapter.id);
            alert('✅ ¡Encuentro completado! El siguiente encuentro ha sido desbloqueado.');

            // Load next chapter if available
            const chapterOrder = ['intro', 'encuentro1', 'encuentro2'];
            const currentIndex = chapterOrder.indexOf(chapter.id);
            if (currentIndex < chapterOrder.length - 1) {
                setTimeout(() => {
                    loadChapter(chapterOrder[currentIndex + 1]);
                }, 500);
            }
        });
    }
}

// ===== QUIZ SYSTEM =====
function renderQuiz(chapter) {
    let html = `
        <div class="quiz-container" id="quizContainer">
            <h2 class="quiz-title">🧠 Check de Seguridad - ${chapter.title.split(':')[0]}</h2>
            <p style="margin-bottom: 20px;">Responde correctamente para desbloquear el botón de evaluación.</p>
    `;

    chapter.quiz.forEach((question, index) => {
        html += `
            <div class="quiz-question" data-question="${index}">
                <p class="question-text">${index + 1}. ${question.question}</p>
                <div class="quiz-options">
                    ${question.options.map((option, optIndex) => `
                        <div class="quiz-option" data-question="${index}" data-option="${optIndex}">
                            ${option}
                        </div>
                    `).join('')}
                </div>
                <div class="quiz-feedback" id="feedback-${index}" style="display: none;"></div>
            </div>
        `;
    });

    html += `
            <div id="quizResult" style="margin-top: 20px; display: none;"></div>
        </div>
    `;

    return html;
}

function setupQuizInteraction(chapter) {
    const userAnswers = {};
    let correctCount = 0;

    const options = document.querySelectorAll('.quiz-option');

    options.forEach(option => {
        option.addEventListener('click', function () {
            const questionIndex = parseInt(this.getAttribute('data-question'));
            const optionIndex = parseInt(this.getAttribute('data-option'));
            const question = chapter.quiz[questionIndex];

            // Deselect other options for this question
            document.querySelectorAll(`[data-question="${questionIndex}"]`).forEach(opt => {
                if (opt.classList.contains('quiz-option')) {
                    opt.classList.remove('selected', 'correct', 'incorrect');
                }
            });

            // Select this option
            this.classList.add('selected');

            // Check answer
            const isCorrect = optionIndex === question.correct;
            const feedback = document.getElementById(`feedback-${questionIndex}`);

            if (isCorrect) {
                this.classList.add('correct');
                feedback.className = 'quiz-feedback correct';
                feedback.textContent = `✅ ¡Correcto! ${question.explanation}`;
                feedback.style.display = 'block';

                if (!userAnswers[questionIndex] || !userAnswers[questionIndex].correct) {
                    userAnswers[questionIndex] = { correct: true };
                    correctCount++;
                }
            } else {
                this.classList.add('incorrect');
                feedback.className = 'quiz-feedback incorrect';
                feedback.textContent = `❌ Incorrecto. ${question.explanation}`;
                feedback.style.display = 'block';

                if (!userAnswers[questionIndex]) {
                    userAnswers[questionIndex] = { correct: false };
                }
            }

            // Check if all answered correctly
            if (correctCount === chapter.quiz.length) {
                const formButton = document.getElementById('formButton');
                if (formButton) {
                    formButton.removeAttribute('disabled');
                    formButton.style.opacity = '1';
                }

                const quizResult = document.getElementById('quizResult');
                quizResult.innerHTML = `
                    <div class="alert alert-info">
                        <strong>🎉 ¡Excelente! Has respondido todas las preguntas correctamente.</strong><br>
                        Ahora puedes acceder a la evaluación oficial haciendo clic en el botón de abajo.
                    </div>
                `;
                quizResult.style.display = 'block';
            }
        });
    });
}

// ===== MOBILE MENU =====
function setupMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Setup navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const chapterId = link.getAttribute('data-chapter');
            loadChapter(chapterId);
        });
    });

    // Setup mobile menu
    setupMobileMenu();

    // Initialize chapter locking based on saved progress
    const chapterOrder = ['intro', 'encuentro1', 'encuentro2'];
    chapterOrder.forEach(chapterId => {
        const link = document.querySelector(`[data-chapter="${chapterId}"]`);
        if (link && !appState.isChapterUnlocked(chapterId)) {
            link.classList.add('locked');
        } else if (link) {
            link.classList.remove('locked');
        }
    });

    // Update progress bar
    appState.updateProgress();

    // Load initial chapter (intro)
    loadChapter('intro');

    // Debug: Add reset button for development (can be removed in production)
    console.log('🚦 Manual de Seguridad Vial loaded successfully!');
    console.log('To reset progress, run: localStorage.removeItem("roadSafety_progress"); location.reload()');
});
