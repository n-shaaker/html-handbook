/* تمرین ۲ — ساعت کاری آخر هفته */

// getDay(): یکشنبه 0 ... شنبه 6
const DAY_NAMES = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];

const openStatus = document.getElementById("open-status");
const testTimeInput = document.getElementById("test-time");
const timeResult = document.getElementById("time-result");

function getStatus(date) {
  const day = date.getDay();
  const hour = date.getHours();
  const isWeekend = day === 4 || day === 5; // پنجشنبه و جمعه

  let lunchEnd = 16;
  let dinnerEnd = 23;
  if (isWeekend) {
    lunchEnd = 17;
    dinnerEnd = 24;
  }

  if (hour >= 12 && hour < lunchEnd) {
    return { open: true, period: "ناهار" };
  }
  if (hour >= 19 && hour < dinnerEnd) {
    return { open: true, period: "شام" };
  }
  return { open: false, period: "" };
}

function describe(date) {
  const status = getStatus(date);
  const time = date.toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" });
  const start = `${DAY_NAMES[date.getDay()]} ساعت ${time}`;

  if (status.open) {
    return `${start} — باز هستیم (سرو ${status.period})`;
  }
  return `${start} — بسته‌ایم`;
}

function showHeaderStatus() {
  const status = getStatus(new Date());

  if (status.open) {
    openStatus.textContent = `● الان باز هستیم (سرو ${status.period})`;
    openStatus.className = "open-status is-open";
  } else {
    openStatus.textContent = "● الان بسته‌ایم";
    openStatus.className = "open-status is-closed";
  }
}

document.getElementById("check-time").addEventListener("click", () => {
  if (testTimeInput.value === "") {
    timeResult.textContent = "تاریخ و ساعت را انتخاب کنید.";
    return;
  }

  const date = new Date(testTimeInput.value);
  timeResult.textContent = describe(date);
});

showHeaderStatus();
