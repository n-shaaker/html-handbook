// تمرین ۳ — ساعت و روز اضافه
function addDays(date, n) {
  // اگر روز از آخر ماه بیشتر شود، Date خودش به ماه بعد می‌رود
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + n);
}

function formatDate(date) {
  return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
}

function formatTime(date) {
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return hh + ":" + mm;
}

function weekDayName(date) {
  const weekDays = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
  return weekDays[date.getDay()];
}

const loanDate = new Date(2026, 0, 30);
const returnDate = addDays(loanDate, 3);

console.log("امانت: " + formatDate(loanDate) + " — برگشت (3 روز بعد): " + formatDate(returnDate));
console.log("تاریخ امانت عوض نشد: " + formatDate(loanDate));
console.log("ساعت تحویل: " + formatTime(new Date(2026, 0, 30, 9, 5)));
console.log("نوروز 2026 چه روزی است؟ " + weekDayName(new Date(2026, 2, 21)));
