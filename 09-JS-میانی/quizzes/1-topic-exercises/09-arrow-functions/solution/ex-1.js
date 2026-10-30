// تمرین ۱ — تبدیل به پیکانی
const square = n => n * n;
const isAdult = age => age >= 18;
const fullName = (first, last) => first + " " + last;
const makeProduct = (name, price) => ({ name: name, price: price });

console.log("square(7) →", square(7));
console.log("isAdult(15) →", isAdult(15));
console.log('fullName("سارا", "احمدی") →', fullName("سارا", "احمدی"));
console.log('makeProduct("کیبورد", 1500000) →', makeProduct("کیبورد", 1500000));
