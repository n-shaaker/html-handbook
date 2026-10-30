// تمرین ۲ — کی سرمایه دو برابر می‌شود؟

const startAmount = 10000000;
const monthlyPercent = 3;
const goal = startAmount * 2;

let amount = startAmount;
let months = 0;

// نمی‌دانیم چند بار تکرار لازم است، پس while
while (amount < goal) {
  amount += amount * monthlyPercent / 100;
  months++;
}

const rounded = Number(amount.toFixed(0));
console.log(`بعد از ${months} ماه سرمایه به ${rounded.toLocaleString("fa-IR")} تومان می‌رسد.`);
