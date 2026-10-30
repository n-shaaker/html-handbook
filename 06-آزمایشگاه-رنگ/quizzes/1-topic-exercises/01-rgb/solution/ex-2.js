// تمرین ۲ — تابع‌های کوچک RGB

function rgbText(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

// اگر هر سه عدد برابر باشند، رنگ خاکستری (یا سیاه و سفید) است
function isGray(r, g, b) {
  return r === g && g === b;
}

// رنگ مقابل: هر عدد را از ۲۵۵ کم می‌کنیم
function invertColor(r, g, b) {
  return rgbText(255 - r, 255 - g, 255 - b);
}

console.log(rgbText(255, 136, 0));
console.log(isGray(128, 128, 128));
console.log(isGray(128, 128, 129));
console.log(invertColor(255, 255, 255));
console.log(invertColor(255, 136, 0));
console.log(invertColor(26, 95, 180));
