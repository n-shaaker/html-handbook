/* تمرین ۳ — جدول قیمت خودکار از روی کارت‌ها */

const categoryNames = {
  starter: "پیش‌غذا",
  main: "غذای اصلی",
  dessert: "دسر",
  drink: "نوشیدنی",
};

const priceBody = document.getElementById("price-body");

const items = [];
document.querySelectorAll(".dish").forEach((dish) => {
  items.push({
    name: dish.dataset.name,
    price: Number(dish.dataset.price),
    category: dish.dataset.category,
  });
});

// ارزان به گران
items.sort((a, b) => a.price - b.price);

function createCell(text) {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
}

for (const item of items) {
  const tr = document.createElement("tr");
  tr.append(
    createCell(item.name),
    createCell(categoryNames[item.category]),
    createCell(item.price.toLocaleString("fa-IR"))
  );
  priceBody.append(tr);
}
