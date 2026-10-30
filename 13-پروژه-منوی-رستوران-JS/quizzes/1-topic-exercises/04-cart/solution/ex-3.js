/* تمرین ۳ — تغییر تعداد در سبد با Event Delegation */

const cartList = document.getElementById("cart-list");
const cartCount = document.getElementById("cart-count");

const order = {};

function addToOrder(name, price) {
  if (order[name]) {
    order[name].qty++;
  } else {
    order[name] = { price: price, qty: 1 };
  }
  renderCart();
}

function changeQty(name, amount) {
  order[name].qty += amount;
  if (order[name].qty <= 0) {
    delete order[name];
  }
  renderCart();
}

function createButton(text, action, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.dataset.action = action;
  button.setAttribute("aria-label", label);
  return button;
}

function renderCart() {
  cartList.textContent = "";
  let count = 0;

  for (const name in order) {
    const qty = order[name].qty;
    count += qty;

    const info = document.createElement("span");
    info.textContent = `${name} × ${qty.toLocaleString("fa-IR")}`;

    const controls = document.createElement("span");
    controls.className = "qty";
    controls.append(
      createButton("+", "plus", "یکی بیشتر " + name),
      " ",
      createButton("−", "minus", "یکی کمتر " + name),
      " ",
      createButton("✕", "remove", "حذف " + name)
    );

    const li = document.createElement("li");
    li.dataset.name = name;
    li.append(info, controls);
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

// یک listener برای همه دکمه‌های داخل سبد
cartList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const name = button.closest("li").dataset.name;
  const action = button.dataset.action;

  if (action === "plus") {
    changeQty(name, 1);
  } else if (action === "minus") {
    changeQty(name, -1);
  } else if (action === "remove") {
    delete order[name];
    renderCart();
  }
});

renderCart();
