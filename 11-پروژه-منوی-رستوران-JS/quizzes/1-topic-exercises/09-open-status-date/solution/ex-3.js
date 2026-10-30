/* تمرین ۳ — چقدر تا باز یا بسته شدن مانده؟ */

// دقیقه از نیمه‌شب: ۱۲×۶۰ = ۷۲۰
const PERIODS = [
  { name: "ناهار", start: 720, end: 960 },
  { name: "شام", start: 1140, end: 1380 },
];

const openStatus = document.getElementById("open-status");
const countdown = document.getElementById("countdown");
const testTimeInput = document.getElementById("test-time");
const testResult = document.getElementById("test-result");

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  const parts = [];

  if (hours > 0) parts.push(hours.toLocaleString("fa-IR") + " ساعت");
  if (rest > 0) parts.push(rest.toLocaleString("fa-IR") + " دقیقه");

  return parts.join(" و ");
}

function getCountdownText(minutes) {
  for (const period of PERIODS) {
    if (minutes < period.start) {
      return `${formatDuration(period.start - minutes)} تا شروع سرو ${period.name}`;
    }
    if (minutes < period.end) {
      return `${formatDuration(period.end - minutes)} تا پایان سرو ${period.name}`;
    }
  }
  return "امروز دیگر سرو نداریم؛ فردا از ساعت ۱۲ در خدمتیم.";
}

function isOpenAt(minutes) {
  for (const period of PERIODS) {
    if (minutes >= period.start && minutes < period.end) {
      return true;
    }
  }
  return false;
}

function updateNow() {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();

  countdown.textContent = getCountdownText(minutes);

  if (isOpenAt(minutes)) {
    openStatus.textContent = "● الان باز هستیم";
    openStatus.className = "open-status is-open";
  } else {
    openStatus.textContent = "● الان بسته‌ایم";
    openStatus.className = "open-status is-closed";
  }
}

document.getElementById("check-time").addEventListener("click", () => {
  if (testTimeInput.value === "") {
    testResult.textContent = "یک ساعت انتخاب کنید.";
    return;
  }

  // "16:50" ← ["16", "50"]
  const parts = testTimeInput.value.split(":");
  const minutes = Number(parts[0]) * 60 + Number(parts[1]);
  testResult.textContent = getCountdownText(minutes);
});

updateNow();
setInterval(updateNow, 60000);
