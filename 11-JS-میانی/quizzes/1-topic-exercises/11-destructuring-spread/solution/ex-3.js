// تمرین ۳ — ثبت سفارش با Rest
const sum = (...prices) => prices.reduce((total, p) => total + p, 0);

const printOrder = ({ dish, qty = 1, table }) => "میز " + table + ": " + qty + " × " + dish;

console.log("sum(1, 2, 3) → " + sum(1, 2, 3));
console.log("sum(420000, 45000, 75000, 60000) → " + sum(420000, 45000, 75000, 60000));

console.log(printOrder({ dish: "کوبیده", qty: 2, table: 4 }));
console.log(printOrder({ dish: "قورمه‌سبزی", table: 7 }));

const names = ["سارا", "علی", "مریم", "رضا"];
const [winner, ...others] = names;
console.log("برنده: " + winner + " | بقیه: " + others.join("، "));
