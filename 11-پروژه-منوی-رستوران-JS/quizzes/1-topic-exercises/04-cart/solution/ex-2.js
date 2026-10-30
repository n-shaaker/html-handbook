/* تمرین ۲ — سبد بدون ردیف تکراری (شیء با کلید نام) */

const cartList = document.getElementById("cart-list");
const cartCount = document.getElementById("cart-count");

// شکل داده: { "چلوکباب کوبیده": { price: 420000, qty: 2 } }
const order = {};

function addToOrder(name, price) {
  if (order[name]) {
    order[name].qty++;
  } else {
    order[name] = { price: price, qty: 1 };
  }
  renderCart();
}

function renderCart() {
  cartList.textContent = "";
  let count = 0;

  for (const name in order) {
    count += order[name].qty;

    const li = document.createElement("li");
    li.textContent = `${name} × ${order[name].qty.toLocaleString("fa-IR")}`;
    cartList.append(li);
  }

  if (count === 0) {
    const empty = document.createElement("li");
    empty.textContent = "هنوز چیزی سفارش نداده‌اید.";
    cartList.append(empty);
  }

  cartCount.textContent = count.toLocaleString("fa-IR");
}

document.querySelectorAll(".add-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const dish = button.closest(".dish");
    addToOrder(dish.dataset.name, Number(dish.dataset.price));
  });
});

renderCart();
