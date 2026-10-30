/* ۵) تاریخ و زمان (Dates) */

runIn("#out-1", function () {
  const now = new Date();
  console.log(now);
  const exam = new Date(2026, 0, 15, 10, 30);
  console.log(exam);
  const d2 = new Date("2026-03-21");
  console.log(d2);
  const d3 = new Date("2026-03-21T00:00");
  console.log(d3);
  const overflow = new Date(2026, 12, 1);
  console.log(overflow);
});

runIn("#out-2", function () {
  const today = new Date();
  const weekDays = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
  console.log("سال:", today.getFullYear());
  console.log("ماه:", today.getMonth() + 1);
  console.log("روز:", today.getDate());
  console.log("روز هفته:", weekDays[today.getDay()]);
  const hh = String(today.getHours()).padStart(2, "0");
  const mm = String(today.getMinutes()).padStart(2, "0");
  console.log("ساعت:", hh + ":" + mm);
});

runIn("#out-3", function () {
  const nowruz = new Date(2026, 2, 21);
  console.log(nowruz.toLocaleDateString("fa-IR"));
  console.log(nowruz.getMonth());
  const date = new Date();
  console.log(date.toLocaleDateString("fa-IR"));
  console.log(date.toLocaleTimeString("fa-IR"));
});

runIn("#out-4", function () {
  const termStart = new Date(2026, 0, 1);
  const nowruzDay = new Date(2026, 2, 21);
  const diffMs = nowruzDay - termStart;
  const DAY_MS = 1000 * 60 * 60 * 24;
  const days = Math.round(diffMs / DAY_MS);
  console.log(`${days} روز فاصله`);
});

// ساعت دیجیتال
const clock = document.getElementById("clock");
const dateText = document.getElementById("date-text");

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString("fa-IR");
  dateText.textContent = now.toLocaleDateString("fa-IR");
}

updateClock();
setInterval(updateClock, 1000);

// شمارش معکوس تا یک رویداد
const eventInput = document.getElementById("event-date");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  if (eventInput.value === "") {
    countdown.textContent = "یک تاریخ انتخاب کنید.";
    return;
  }
  const target = new Date(eventInput.value + "T00:00");
  const diff = target - new Date();

  if (diff <= 0) {
    countdown.textContent = "این تاریخ گذشته است.";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  countdown.textContent = `${days} روز و ${hours} ساعت و ${minutes} دقیقه و ${seconds} ثانیه مانده`;
}

// مقدار اولیه کادر: نوروز سال بعد
eventInput.value = (new Date().getFullYear() + 1) + "-03-21";

eventInput.addEventListener("input", updateCountdown);
updateCountdown();
setInterval(updateCountdown, 1000);
