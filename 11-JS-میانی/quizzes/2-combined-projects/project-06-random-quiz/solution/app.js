// پروژه ترکیبی ۶ — کوییز چندگزینه‌ای با سؤال تصادفی و زمان‌سنج
const QUESTION_COUNT = 5;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const progress = document.getElementById("progress");
const timer = document.getElementById("timer");
const questionText = document.getElementById("question-text");
const optionsBox = document.getElementById("options");
const feedback = document.getElementById("feedback");

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let startTime = null;
let timerId = null;

function pickRandomQuestions(count) {
  const pool = [...questions];
  const picked = [];
  while (picked.length < count && pool.length > 0) {
    const index = Math.floor(Math.random() * pool.length);
    const removed = pool.splice(index, 1);
    picked.push(removed[0]);
  }
  return picked;
}

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return minutes + ":" + seconds;
}

function updateTimer() {
  timer.textContent = formatDuration(new Date() - startTime);
}

function showScreen(screen) {
  startScreen.hidden = screen !== startScreen;
  quizScreen.hidden = screen !== quizScreen;
  resultScreen.hidden = screen !== resultScreen;
}

function startQuiz() {
  quizQuestions = pickRandomQuestions(QUESTION_COUNT);
  currentIndex = 0;
  score = 0;

  clearInterval(timerId);
  startTime = new Date();
  updateTimer();
  timerId = setInterval(updateTimer, 1000);

  showScreen(quizScreen);
  showQuestion();
}

function showQuestion() {
  const { text, options } = quizQuestions[currentIndex];

  progress.textContent = "سؤال " + (currentIndex + 1).toLocaleString("fa-IR") +
    " از " + quizQuestions.length.toLocaleString("fa-IR");
  questionText.textContent = text;
  feedback.textContent = "";
  nextBtn.hidden = true;

  optionsBox.textContent = "";
  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent = option;
    button.setAttribute("data-index", index);
    optionsBox.append(button);
  });
}

function checkAnswer(chosenButton) {
  const { options, answer } = quizQuestions[currentIndex];
  const chosen = Number(chosenButton.getAttribute("data-index"));
  const buttons = optionsBox.querySelectorAll(".option");

  buttons.forEach(button => {
    button.disabled = true;
  });
  buttons[answer].classList.add("correct");

  if (chosen === answer) {
    score++;
    feedback.textContent = "درست!";
  } else {
    chosenButton.classList.add("wrong");
    feedback.textContent = "نادرست؛ جواب درست: " + options[answer];
  }

  const isLast = currentIndex === quizQuestions.length - 1;
  nextBtn.textContent = isLast ? "دیدن نتیجه" : "سؤال بعد";
  nextBtn.hidden = false;
}

function finishQuiz() {
  clearInterval(timerId);
  const duration = new Date() - startTime;
  const percent = score / quizQuestions.length * 100;

  let message = "دوباره تلاش کن!";
  if (percent >= 80) {
    message = "عالی بود!";
  } else if (percent >= 50) {
    message = "خوب بود؛ کمی مرور کن.";
  }

  document.getElementById("result-score").textContent = "امتیاز: " + score.toLocaleString("fa-IR") +
    " از " + quizQuestions.length.toLocaleString("fa-IR");
  document.getElementById("result-time").textContent = "زمان: " + formatDuration(duration);
  document.getElementById("result-date").textContent = "تاریخ: " + new Date().toLocaleDateString("fa-IR");
  document.getElementById("result-message").textContent = message;

  showScreen(resultScreen);
}

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);

optionsBox.addEventListener("click", event => {
  const button = event.target.closest(".option");
  if (button === null || button.disabled) {
    return;
  }
  checkAnswer(button);
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex === quizQuestions.length) {
    finishQuiz();
    return;
  }
  showQuestion();
});
