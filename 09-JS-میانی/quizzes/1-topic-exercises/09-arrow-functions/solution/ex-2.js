// تمرین ۲ — پیکانی در متدهای آرایه
const products = [
  { name: "دفتر", price: 45000, inStock: true },
  { name: "خودکار", price: 15000, inStock: true },
  { name: "کیف", price: 650000, inStock: false },
  { name: "ماشین‌حساب", price: 320000, inStock: true }
];

const available = products.filter(p => p.inStock);
const availableNames = available.map(p => p.name);
const availableTotal = available.reduce((sum, p) => sum + p.price, 0);
const byPrice = products.slice().sort((a, b) => a.price - b.price);

console.log("موجودها: " + availableNames.join("، "));
console.log("جمع قیمت موجودها: " + availableTotal);
console.log("از ارزان به گران: " + byPrice.map(p => p.name).join("، "));
