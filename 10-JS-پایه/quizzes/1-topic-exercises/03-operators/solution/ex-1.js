// تمرین ۱ — جمع خرید لوازم‌التحریر

const notebookPrice = 45000;
const penPrice = 12000;
const discount = 20000;

let total = 0;
total += 3 * notebookPrice;
total += 2 * penPrice;
console.log("جمع خرید:", total);

total -= discount;
console.log("بعد از کد تخفیف:", total);
