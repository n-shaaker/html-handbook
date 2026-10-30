/* ۴) کلاس‌ها (Classes) */

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  age() {
    return new Date().getFullYear() - this.year;
  }
  info() {
    return `${this.brand} مدل ${this.year} (${this.age()} ساله)`;
  }
}

runIn("#out-1", function () {
  const car1 = new Car("پژو", 2015);
  const car2 = new Car("تویوتا", 2020);
  console.log(car1.info());
  console.log(car2.info());
  console.log(car1 instanceof Car);
});

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(f) {
    this.celsius = (f - 32) / 1.8;
  }
}

runIn("#out-2", function () {
  const t = new Temperature(25);
  console.log(t.fahrenheit);
  t.fahrenheit = 212;
  console.log(t.celsius);
});

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  add(name, price, qty = 1) {
    const found = this.items.find(item => item.name === name);
    if (found) found.qty += qty;
    else this.items.push({ name, price, qty });
    return this;
  }
  remove(name) {
    this.items = this.items.filter(item => item.name !== name);
    return this;
  }
  get count() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }
  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
}

runIn("#out-3", function () {
  const cart = new ShoppingCart();
  cart.add("کتاب", 250000).add("خودکار", 30000, 3).add("کتاب", 250000);
  console.log(cart.count);
  console.log(cart.total);
  cart.remove("خودکار");
  console.log(cart.count, cart.total);
});

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  priceWithTax() {
    return Math.round(this.price * 1.1);
  }
  toCard() {
    const card = document.createElement("div");
    card.className = "js-card";
    const title = document.createElement("h4");
    title.textContent = this.name;
    const text = document.createElement("p");
    text.textContent = `قیمت با مالیات: ${this.priceWithTax().toLocaleString("fa-IR")} تومان`;
    card.append(title, text);
    return card;
  }
}

const nameInput = document.getElementById("p-name");
const priceInput = document.getElementById("p-price");
const addBtn = document.getElementById("p-add");
const cards = document.getElementById("p-cards");
const errorText = document.getElementById("p-error");

addBtn.addEventListener("click", () => {
  const price = Number(priceInput.value);
  if (priceInput.value === "" || !Number.isFinite(price) || price <= 0) {
    errorText.textContent = "قیمت باید یک عدد بزرگ‌تر از صفر باشد.";
    return;
  }
  errorText.textContent = "";
  const p = new Product(nameInput.value.trim() || "محصول", price);
  cards.append(p.toCard());
});
