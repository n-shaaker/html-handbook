/* ========== عنصرهای صفحه ========== */

const addButtons = document.querySelectorAll(".add-btn");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const cartClear = document.getElementById("cart-clear");

const STORAGE_KEY = "naranj-quiz-cart";

/* قیمت هر غذا از خود HTML خوانده می‌شود: { "دوغ محلی": 45000, ... } */
const prices = {};
addButtons.forEach((button) => {
  prices[button.dataset.name] = Number(button.dataset.price);
});

function formatPrice(number) {
  return number.toLocaleString("fa-IR") + " تومان";
}


/* ========== ذخیره و بازیابی ========== */

/* شکل سبد: { "چلوکباب کوبیده": 2, "دوغ محلی": 1 } */
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};   // داده خراب بود؛ با سبد خالی شروع کن
  }
}

let cart = loadCart();

/* بعد از هر تغییر: ذخیره کن و سبد را از نو بساز */
function updateCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  renderCart();
}


/* ========== نمایش سبد ========== */

function createCartButton(action, symbol, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.action = action;
  button.textContent = symbol;
  button.setAttribute("aria-label", label);
  return button;
}

function createCartItem(name, qty) {
  const price = prices[name];

  const info = document.createElement("span");
  info.textContent = name;
  const detail = document.createElement("small");
  detail.textContent = `${qty.toLocaleString("fa-IR")} × ${formatPrice(price)} = ${formatPrice(qty * price)}`;
  info.append(detail);

  const controls = document.createElement("span");
  controls.className = "qty";
  controls.append(
    createCartButton("increase", "+", "اضافه کردن " + name),
    createCartButton("decrease", "−", "کم کردن " + name),
    createCartButton("remove", "✕", "حذف " + name)
  );

  const li = document.createElement("li");
  li.dataset.name = name;
  li.append(info, controls);
  return li;
}

function renderCart() {
  cartList.textContent = "";
  let total = 0;
  let count = 0;

  for (const name in cart) {
    cartList.append(createCartItem(name, cart[name]));
    total += prices[name] * cart[name];
    count += cart[name];
  }

  if (count === 0) {
    const empty = document.createElement("li");
    empty.className = "cart-empty";
    empty.textContent = "سبد شما خالی است.";
    cartList.append(empty);
  }

  cartTotal.textContent = "جمع کل: " + formatPrice(total);
  cartCount.textContent = count.toLocaleString("fa-IR");
  cartClear.disabled = count === 0;
}


/* ========== رویدادها ========== */

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    cart[name] = (cart[name] || 0) + 1;
    updateCart();
  });
});

/* Event Delegation: یک listener برای همه دکمه‌های داخل سبد، حتی آن‌هایی که بعداً ساخته می‌شوند */
cartList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const name = button.closest("li").dataset.name;
  const action = button.dataset.action;

  if (action === "increase") {
    cart[name]++;
  } else if (action === "decrease") {
    cart[name]--;
  }

  if (action === "remove" || cart[name] <= 0) {
    delete cart[name];
  }
  updateCart();
});

cartClear.addEventListener("click", () => {
  cart = {};
  updateCart();
});

renderCart();
