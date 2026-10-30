// تمرین ۱ — سلام به‌موقع

function greeting(hour) {
  if (hour < 0 || hour > 23) {
    return "ساعت نامعتبر است";
  } else if (hour < 12) {
    return "صبح بخیر ☀️";
  } else if (hour < 17) {
    return "ظهر بخیر";
  } else {
    return "عصر بخیر 🌙";
  }
}

console.log(8, greeting(8));
console.log(12, greeting(12));
console.log(16, greeting(16));
console.log(20, greeting(20));
console.log(25, greeting(25));
