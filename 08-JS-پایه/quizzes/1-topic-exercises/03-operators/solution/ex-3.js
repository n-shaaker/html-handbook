// تمرین ۳ — صورتحساب کافه

const coffeePrice = 85000;
const cakePrice = 120000;
const people = 2;

const subtotal = 2 * coffeePrice + cakePrice;
const service = subtotal * 10 / 100;

// پرانتز لازم است: مالیات روی «جمع غذا + سرویس» حساب می‌شود
const wrongTax = subtotal + service * 9 / 100;
const tax = (subtotal + service) * 9 / 100;

const total = subtotal + service + tax;

console.log("جمع سفارش:", subtotal);
console.log("حق سرویس ۱۰٪:", service);
console.log("مالیات اشتباه (بدون پرانتز):", wrongTax);
console.log("مالیات درست ۹٪:", tax);
console.log("مبلغ قابل پرداخت:", total);
console.log("سهم هر نفر:", total / people);

let visits = 4;
visits++;
console.log("تعداد دفعات آمدن به کافه:", visits);
