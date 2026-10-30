// تمرین ۲ — تبدیل RGB به هگز

// یک عدد ۰ تا ۲۵۵ را به دو رقم هگز تبدیل می‌کند (مثلاً 5 ← "05")
function toHex(number) {
  return number.toString(16).padStart(2, "0");
}

function rgbToHex(r, g, b) {
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

console.log(toHex(255));
console.log(toHex(136));
console.log(toHex(5));
console.log(rgbToHex(255, 136, 0));
console.log(rgbToHex(26, 95, 180));
console.log(rgbToHex(0, 0, 0));
console.log(rgbToHex(5, 10, 15));
