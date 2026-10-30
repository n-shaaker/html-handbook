// تمرین ۲ — تبدیل دقیقه به ساعت و دقیقه

const totalMinutes = 125;

// باقیمانده تقسیم بر ۶۰ همان دقیقه‌های اضافه است
const minutes = totalMinutes % 60;
// بقیه دقیقه‌ها دقیقاً بر ۶۰ بخش‌پذیرند
const hours = (totalMinutes - minutes) / 60;

console.log(totalMinutes + " دقیقه = " + hours + " ساعت و " + minutes + " دقیقه");
console.log("باقیمانده ۱۷ بر ۲:", 17 % 2);
console.log("باقیمانده ۱۸ بر ۲:", 18 % 2);
