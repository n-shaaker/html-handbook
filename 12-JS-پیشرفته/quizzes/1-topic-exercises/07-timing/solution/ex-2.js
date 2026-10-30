/* تمرین ۲ — شمارش معکوس با setInterval */

const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const display = document.getElementById("display");
const errorText = document.getElementById("error");

let timerId;
let remaining = 0;

function stopTimer() {
  clearInterval(timerId);
  startButton.disabled = false;
}

function tick() {
  remaining--;
  if (remaining <= 0) {
    stopTimer();
    display.textContent = "⏰ زمان تمام شد!";
    return;
  }
  display.textContent = remaining.toLocaleString("fa-IR");
}

startButton.addEventListener("click", () => {
  const seconds = Number(secondsInput.value);
  if (seconds <= 0) {
    errorText.textContent = "یک عدد مثبت وارد کنید.";
    return;
  }

  errorText.textContent = "";
  remaining = seconds;
  display.textContent = remaining.toLocaleString("fa-IR");

  startButton.disabled = true; // جلوی ساخته شدن چند تایمر هم‌زمان
  timerId = setInterval(tick, 1000);
});

stopButton.addEventListener("click", stopTimer);
