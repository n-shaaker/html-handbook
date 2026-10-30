// تمرین ۱ — امروز چندم است؟
const today = new Date();
const weekDays = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];

console.log("سال: " + today.getFullYear());
console.log("ماه: " + (today.getMonth() + 1));
console.log("روز: " + today.getDate());
console.log("روز هفته: " + weekDays[today.getDay()]);
console.log("تاریخ شمسی: " + today.toLocaleDateString("fa-IR"));
