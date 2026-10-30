/* تمرین ۱ — باز هستیم یا بسته؟ */

const openStatus = document.getElementById("open-status");
const testHourInput = document.getElementById("test-hour");
const hourResult = document.getElementById("hour-result");

// ناهار ۱۲ تا ۱۶، شام ۱۹ تا ۲۳ (ساعت پایان بسته است)
function isOpenAt(hour) {
  const lunch = hour >= 12 && hour < 16;
  const dinner = hour >= 19 && hour < 23;
  return lunch || dinner;
}

function showHeaderStatus() {
  const hour = new Date().getHours();

  if (isOpenAt(hour)) {
    openStatus.textContent = "● الان باز هستیم";
    openStatus.className = "open-status is-open";
  } else {
    openStatus.textContent = "● الان بسته‌ایم";
    openStatus.className = "open-status is-closed";
  }
}

document.getElementById("check-hour").addEventListener("click", () => {
  const value = testHourInput.value;
  const hour = Number(value);

  if (value === "" || !Number.isInteger(hour) || hour < 0 || hour > 23) {
    hourResult.textContent = "ساعت باید عددی بین ۰ تا ۲۳ باشد.";
    return;
  }

  const hourText = hour.toLocaleString("fa-IR");
  if (isOpenAt(hour)) {
    hourResult.textContent = `ساعت ${hourText}: باز هستیم ✔`;
  } else {
    hourResult.textContent = `ساعت ${hourText}: بسته‌ایم ✖`;
  }
});

showHeaderStatus();
