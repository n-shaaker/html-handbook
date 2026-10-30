// تمرین ۳ — قرعه‌کشی و کد تخفیف
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function makeCode() {
  const number = randomInt(0, 9999);
  return "NARENJ-" + String(number).padStart(4, "0");
}

function randomDiscount() {
  return randomInt(2, 6) * 5;
}

const buyers = ["سارا", "علی", "مریم", "رضا", "نیما"];
const discount = randomDiscount();
const price = 249900;
const finalPrice = Math.round(price * (100 - discount) / 100);

console.log("برنده: " + pickRandom(buyers));
console.log("کد تخفیف: " + makeCode());
console.log("تخفیف: " + discount + " درصد");
console.log("قیمت بعد از تخفیف: " + finalPrice + " تومان");
