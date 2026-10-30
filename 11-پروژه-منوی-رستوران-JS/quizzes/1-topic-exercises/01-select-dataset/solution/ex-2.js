/* تمرین ۲ — خلاصه منو از روی data-price */

const summary = document.getElementById("summary");

// داده کارت‌ها ← آرایه‌ای از اشیای ساده
const items = [];
document.querySelectorAll(".dish").forEach((dish) => {
  items.push({ name: dish.dataset.name, price: Number(dish.dataset.price) });
});

let cheapest = items[0];
let mostExpensive = items[0];
let sum = 0;

for (const item of items) {
  sum += item.price;
  if (item.price < cheapest.price) {
    cheapest = item;
  }
  if (item.price > mostExpensive.price) {
    mostExpensive = item;
  }
}

const average = Math.round(sum / items.length);

function fa(number) {
  return number.toLocaleString("fa-IR");
}

function addLine(text) {
  const li = document.createElement("li");
  li.textContent = text;
  summary.append(li);
}

addLine("تعداد غذاها: " + fa(items.length));
addLine(`ارزان‌ترین: ${cheapest.name} (${fa(cheapest.price)} تومان)`);
addLine(`گران‌ترین: ${mostExpensive.name} (${fa(mostExpensive.price)} تومان)`);
addLine(`میانگین قیمت: ${fa(average)} تومان`);
