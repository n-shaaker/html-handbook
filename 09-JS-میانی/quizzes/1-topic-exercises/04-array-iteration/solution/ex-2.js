// تمرین ۲ — صورت‌حساب رستوران
const order = [
  { name: "کوبیده", price: 420000, qty: 2 },
  { name: "دوغ", price: 45000, qty: 3 },
  { name: "سالاد شیرازی", price: 75000, qty: 1 }
];

const total = order.reduce(function (sum, item) {
  return sum + item.price * item.qty;
}, 0);

const itemCount = order.reduce(function (sum, item) {
  return sum + item.qty;
}, 0);

const expensive = order.filter(function (item) {
  return item.price >= 100000;
});

console.log("جمع کل: " + total + " تومان");
console.log("تعداد اقلام: " + itemCount);
console.log("گران‌ها: " + expensive.map(function (item) {
  return item.name;
}).join("، "));
