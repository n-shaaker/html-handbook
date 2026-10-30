// تمرین ۲ — مرتب کردن قیمت‌ها و میوه‌ها
const prices = [120000, 45000, 9000, 300000, 75000];
const fruits = ["پرتقال", "انار", "سیب", "به"];

const wrong = prices.slice().sort();
console.log("sort بدون مقایسه (غلط): " + wrong);

const ascending = prices.slice().sort(function (a, b) {
  return a - b;
});
const descending = prices.slice().sort(function (a, b) {
  return b - a;
});
console.log("صعودی: " + ascending);
console.log("نزولی: " + descending);
console.log("ارزان‌ترین: " + ascending[0]);

fruits.sort(function (a, b) {
  return a.localeCompare(b, "fa");
});
console.log("میوه‌ها: " + fruits.join("، "));

console.log("آرایه اصلی: " + prices);
