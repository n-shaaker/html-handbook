// تمرین ۱ — نوع داده‌های یک محصول

const title = "هدفون بی‌سیم";
const price = 1200000;
const inStock = true;
let discountCode;
const seller = null;
const size = { width: 18, height: 20 };

console.log(title, "←", typeof title);
console.log(price, "←", typeof price);
console.log(inStock, "←", typeof inStock);
console.log(discountCode, "←", typeof discountCode);
// null نوع جدایی است، ولی typeof به اشتباه object می‌گوید
console.log(seller, "←", typeof seller);
console.log(size, "←", typeof size);
