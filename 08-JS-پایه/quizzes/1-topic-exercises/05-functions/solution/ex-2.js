// تمرین ۲ — قیمت نهایی با تخفیف و مالیات

// اگر درصد تخفیف داده نشود، صفر حساب می‌شود
function finalPrice(price, discountPercent = 0) {
  const discount = price * discountPercent / 100;
  return price - discount;
}

function withTax(price) {
  return price + price * 10 / 100;
}

console.log(finalPrice(800000, 25));
console.log(finalPrice(800000));
console.log(finalPrice(150000, 10));
console.log(withTax(200000));
// خروجی یک تابع، ورودی تابع دیگر
console.log(withTax(finalPrice(800000, 25)));
