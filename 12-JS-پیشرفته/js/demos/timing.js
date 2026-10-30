/* ۷) زمان‌بندی (setTimeout و setInterval) */

const log = createLog("#out-1");

document.getElementById("timeout-btn").addEventListener("click", () => {
  document.getElementById("out-1").textContent = "";

  log("۱. شروع");

  setTimeout(() => {
    log("۳. بعد از ۱.۵ ثانیه");
  }, 1500);

  log("۲. این خط منتظر نمی‌ماند!");
});

// کرنومتر
let seconds = 0;
let timerId = null;
const display = document.getElementById("watch");

function format(s) {
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const r = String(s % 60).padStart(2, "0");
  return `${m}:${r}`;
}

const startBtn = document.getElementById("watch-start");
const stopBtn = document.getElementById("watch-stop");
const resetBtn = document.getElementById("watch-reset");

startBtn.addEventListener("click", () => {
  if (timerId !== null) return;
  timerId = setInterval(() => {
    seconds++;
    display.textContent = format(seconds);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  seconds = 0;
  display.textContent = format(0);
});

// Toast
const toast = document.getElementById("toast");
const toastBtn = document.getElementById("toast-btn");
let hideId = null;

toastBtn.addEventListener("click", () => {
  toast.classList.remove("hidden");
  clearTimeout(hideId);
  hideId = setTimeout(() => toast.classList.add("hidden"), 2000);
});

// جستجو با debounce
function debounce(fn, delay) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
}

const searchInput = document.getElementById("city-search");
const results = document.getElementById("city-results");
const stats = document.getElementById("city-stats");

const cities = ["تهران", "تبریز", "شیراز", "اصفهان", "مشهد", "کرج", "کرمان", "کرمانشاه", "رشت", "یزد"];
let keys = 0;
let searches = 0;

function search(query) {
  searches++;
  const q = query.trim();
  const found = q ? cities.filter(c => c.includes(q)) : [];
  results.textContent = `«${q}»: ${found.join("، ") || "نتیجه‌ای نیست"}`;
  stats.textContent = `${keys} بار تایپ ← فقط ${searches} بار جستجو`;
}

const debouncedSearch = debounce(search, 500);

searchInput.addEventListener("input", () => {
  keys++;
  debouncedSearch(searchInput.value);
});
