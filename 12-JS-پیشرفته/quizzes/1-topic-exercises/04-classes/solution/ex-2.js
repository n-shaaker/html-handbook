/* تمرین ۲ — کلاس سبد خرید */

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price) {
    const existing = this.items.find((item) => item.name === name);
    if (existing) {
      existing.qty++;
      return;
    }
    this.items.push({ name: name, price: price, qty: 1 });
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  getTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.qty;
    }
    return total;
  }

  getCount() {
    let count = 0;
    for (const item of this.items) {
      count += item.qty;
    }
    return count;
  }
}

const cart = new ShoppingCart();

const cartList = document.getElementById("cart-list");
const summary = document.getElementById("summary");

function render() {
  cartList.textContent = "";
  for (const item of cart.items) {
    const li = document.createElement("li");
    li.textContent = `${item.name} × ${item.qty.toLocaleString("fa-IR")}`;
    cartList.append(li);
  }
  summary.textContent =
    `تعداد: ${cart.getCount().toLocaleString("fa-IR")} — ` +
    `جمع: ${cart.getTotal().toLocaleString("fa-IR")} تومان`;
}

document.getElementById("add-novel").addEventListener("click", () => {
  cart.addItem("رمان", 150000);
  render();
});

document.getElementById("add-poem").addEventListener("click", () => {
  cart.addItem("دیوان حافظ", 220000);
  render();
});

document.getElementById("add-drawing").addEventListener("click", () => {
  cart.addItem("دفتر نقاشی", 60000);
  render();
});

document.getElementById("remove-drawing").addEventListener("click", () => {
  cart.removeItem("دفتر نقاشی");
  render();
});

render();
