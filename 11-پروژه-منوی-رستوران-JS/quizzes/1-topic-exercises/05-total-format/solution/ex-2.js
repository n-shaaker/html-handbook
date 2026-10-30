/* تمرین ۲ — فاکتور میز ۷ */

const tableOrder = [
  { name: "چلوکباب کوبیده", price: 420000, qty: 2 },
  { name: "سالاد شیرازی", price: 75000, qty: 1 },
  { name: "دوغ محلی", price: 45000, qty: 3 },
];

function fa(number) {
  return number.toLocaleString("fa-IR");
}

const invoice = document.getElementById("invoice");
let total = 0;
let count = 0;

for (const item of tableOrder) {
  const rowTotal = item.price * item.qty;
  total += rowTotal;
  count += item.qty;

  const li = document.createElement("li");
  li.textContent = `${item.name} — ${fa(item.qty)} × ${fa(item.price)} = ${fa(rowTotal)} تومان`;
  invoice.append(li);
}

document.getElementById("count").textContent = "تعداد اقلام: " + fa(count);
document.getElementById("total").textContent = "جمع کل: " + fa(total) + " تومان";
