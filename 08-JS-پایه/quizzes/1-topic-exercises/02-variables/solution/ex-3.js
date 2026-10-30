// تمرین ۳ — موجودی کیف پول

// قیمت‌ها ثابت‌اند، پس const
const bookPrice = 180000;
const snackPrice = 45000;
const chargeAmount = 250000;

// موجودی عوض می‌شود، پس let
let balance = 500000;
console.log("موجودی اول:", balance);

balance = balance - bookPrice;
console.log("بعد از خرید کتاب:", balance);

balance = balance - snackPrice;
console.log("بعد از خرید خوراکی:", balance);

balance = balance + chargeAmount;
console.log("بعد از شارژ کیف پول:", balance);

// bookPrice = 200000;  ← خطا می‌دهد: مقدار const را نمی‌شود دوباره عوض کرد
