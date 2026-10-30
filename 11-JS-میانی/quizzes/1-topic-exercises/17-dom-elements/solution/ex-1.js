// تمرین ۱ — فهرست میوه‌ها از آرایه
const fruits = ["سیب", "پرتقال", "انار", "موز", "خرمالو"];
const list = document.getElementById("fruit-list");

fruits.forEach(fruit => {
  const li = document.createElement("li");
  li.textContent = fruit;
  list.append(li);
});

const info = document.createElement("p");
info.textContent = fruits.length.toLocaleString("fa-IR") + " میوه امروز داریم";
document.body.append(info);
