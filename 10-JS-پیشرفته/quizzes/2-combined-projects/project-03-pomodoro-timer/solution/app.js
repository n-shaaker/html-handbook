/* پروژه ۳: تایمر پومودورو — پاسخ */

const SETTINGS_KEY = "pomodoro-settings";
const MODE_LABELS = { work: "زمان کار", break: "زمان استراحت" };

const app = document.getElementById("app");
const modeLabel = document.getElementById("mode-label");
const timeDisplay = document.getElementById("time-display");
const progressBar = document.getElementById("progress");
const toggleBtn = document.getElementById("toggle-btn");
const resetBtn = document.getElementById("reset-btn");
const statusText = document.getElementById("status");
const completedText = document.getElementById("completed");
const settingsForm = document.getElementById("settings-form");
const workInput = document.getElementById("work-minutes");
const breakInput = document.getElementById("break-minutes");
const settingsError = document.getElementById("settings-error");

/* ===== تنظیمات ===== */
function isValidMinutes(value, max) {
  return Number.isInteger(value) && value >= 1 && value <= max;
}

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY));
    if (saved && isValidMinutes(saved.workMinutes, 90) && isValidMinutes(saved.breakMinutes, 30)) {
      return saved;
    }
  } catch (error) {
    // داده خراب بود؛ پایین مقدارهای پیش‌فرض برگردانده می‌شوند
  }
  return { workMinutes: 25, breakMinutes: 5 };
}

/* ===== حالت برنامه ===== */
let settings = loadSettings();
let mode = "work";             // "work" یا "break"
let secondsLeft = settings.workMinutes * 60;
let intervalId = null;
let completed = 0;

function getModeSeconds() {
  if (mode === "work") return settings.workMinutes * 60;
  return settings.breakMinutes * 60;
}

// ۱۴۵ ثانیه ← «۰۲:۲۵»
function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  const text = minutes + ":" + seconds;
  return text.replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

/* ===== نمایش ===== */
function render() {
  const timeText = formatTime(secondsLeft);
  timeDisplay.textContent = timeText;
  progressBar.value = 1 - secondsLeft / getModeSeconds();
  app.dataset.mode = mode;
  modeLabel.textContent = MODE_LABELS[mode];
  completedText.textContent = "پومودوروهای کامل امروز: " + completed.toLocaleString("fa-IR");

  if (intervalId !== null) {
    toggleBtn.textContent = "توقف";
    document.title = timeText + " — " + MODE_LABELS[mode];
  } else {
    toggleBtn.textContent = "شروع";
    document.title = "پومودورو";
  }
}

/* ===== تایمر ===== */
function start() {
  if (intervalId !== null) return;   // جلوی ساخته شدن interval دوم
  intervalId = setInterval(tick, 1000);
  statusText.textContent = "";
  render();
}

function pause() {
  clearInterval(intervalId);
  intervalId = null;
  render();
}

function reset() {
  pause();
  secondsLeft = getModeSeconds();
  statusText.textContent = "";
  render();
}

function tick() {
  secondsLeft--;
  if (secondsLeft <= 0) {
    finish();
  } else {
    render();
  }
}

// پایان یک جلسه: رفتن از کار به استراحت یا برعکس
function finish() {
  pause();
  if (mode === "work") {
    completed++;
    mode = "break";
    statusText.textContent = "آفرین! وقت استراحت است ☕";
  } else {
    mode = "work";
    statusText.textContent = "استراحت تمام شد؛ برگردیم سر کار 💪";
  }
  secondsLeft = getModeSeconds();
  render();
  document.title = "⏰ " + statusText.textContent;
}

function toggleTimer() {
  if (intervalId !== null) {
    pause();
    statusText.textContent = "متوقف شد.";
  } else {
    start();
  }
}

/* ===== رویدادها ===== */
toggleBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", reset);

settingsForm.addEventListener("submit", event => {
  event.preventDefault();
  const workMinutes = Number(workInput.value);
  const breakMinutes = Number(breakInput.value);

  if (!isValidMinutes(workMinutes, 90)) {
    settingsError.textContent = "مدت کار باید عدد صحیح بین ۱ تا ۹۰ دقیقه باشد.";
    return;
  }
  if (!isValidMinutes(breakMinutes, 30)) {
    settingsError.textContent = "مدت استراحت باید عدد صحیح بین ۱ تا ۳۰ دقیقه باشد.";
    return;
  }

  settings = { workMinutes: workMinutes, breakMinutes: breakMinutes };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  settingsError.textContent = "";
  reset();
  statusText.textContent = "تنظیمات ذخیره شد.";
});

document.addEventListener("keydown", event => {
  if (event.code !== "Space" || event.repeat) return;
  // روی input باید فاصله تایپ شود و روی دکمه‌ها Space خودش کلیک می‌کند
  const tag = event.target.tagName;
  if (tag === "INPUT" || tag === "BUTTON" || tag === "SUMMARY") return;

  event.preventDefault();   // جلوی اسکرول صفحه را می‌گیرد
  toggleTimer();
});

/* ===== شروع ===== */
workInput.value = settings.workMinutes;
breakInput.value = settings.breakMinutes;
render();
