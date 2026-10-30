/* تمرین ۲ — فاکتور با apply */

const output = document.getElementById("output");

function show(text) {
  const line = document.createElement("p");
  line.textContent = text;
  output.append(line);
}

function makeReceipt(food, count, price) {
  const total = count * price;
  return `${this.shopName}: ${count.toLocaleString("fa-IR")} × ${food} = ${total.toLocaleString("fa-IR")} تومان`;
}

const shop = { shopName: "فست‌فود آلبالو" };

// سفارش‌ها به شکل آرایه از سرور رسیده‌اند
const orders = [
  ["پیتزا", 2, 180000],
  ["ساندویچ", 1, 95000],
  ["نوشابه", 3, 40000],
];

const prices = [];

for (const order of orders) {
  show(makeReceipt.apply(shop, order));
  prices.push(order[2]);
}

const maxPrice = Math.max.apply(null, prices);
const minPrice = Math.min.apply(null, prices);

show(`گران‌ترین: ${maxPrice.toLocaleString("fa-IR")} — ارزان‌ترین: ${minPrice.toLocaleString("fa-IR")}`);
