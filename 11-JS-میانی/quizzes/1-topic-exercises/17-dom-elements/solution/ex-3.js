// تمرین ۳ — کارت غذاها از روی داده
let dishes = [
  { id: 1, name: "چلوکباب کوبیده", price: 420000 },
  { id: 2, name: "قورمه‌سبزی", price: 320000 },
  { id: 3, name: "دوغ محلی", price: 45000 },
  { id: 4, name: "فالوده", price: 90000 }
];

const cards = document.getElementById("cards");
const dishCount = document.getElementById("dish-count");

function createCard(dish) {
  const article = document.createElement("article");
  article.className = "card";

  const title = document.createElement("h3");
  title.textContent = dish.name;

  const price = document.createElement("p");
  price.textContent = dish.price.toLocaleString("fa-IR") + " تومان";

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "حذف از منو";
  removeBtn.addEventListener("click", () => {
    dishes = dishes.filter(d => d.id !== dish.id);
    render();
  });

  article.append(title, price, removeBtn);
  return article;
}

function render() {
  cards.textContent = "";
  dishCount.textContent = dishes.length.toLocaleString("fa-IR") + " غذا";

  if (dishes.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "منو خالی است.";
    cards.append(empty);
    return;
  }

  dishes.forEach(dish => {
    cards.append(createCard(dish));
  });
}

render();
