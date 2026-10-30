/* =========================================================
   پروژه ترکیبی ۴: سفارش آنلاین کافه (پاسخ نمونه)
   ========================================================= */

const STORAGE_KEY = "cafe-naranj-order";
const DELIVERY_FEE = 30000;
const FREE_DELIVERY_FROM = 300000;

const filterButtons = document.querySelectorAll(".filter-btn");
const dishes = document.querySelectorAll(".dish");
const cartList = document.getElementById("cart-list");
const cartCount = document.getElementById("cart-count");
const deliveryRow = document.getElementById("delivery-row");
const cartTotal = document.getElementById("cart-total");
const orderMessage = document.getElementById("order-message");
const typeRadios = document.querySelectorAll('input[name="order-type"]');
const toast = document.getElementById("toast");

function formatPrice(number) {
  return number.toLocaleString("fa-IR") + " تومان";
}


/* ========== ذخیره و بازیابی ========== */

/* شکل داده: { items: [{ name, price, qty }], type: "dine-in" یا "delivery" } */
function loadOrder() {
  const empty = { items: [], type: "dine-in" };
  let data;

  try {
    data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    return empty;
  }

  if (data === null || typeof data !== "object" || !Array.isArray(data.items)) {
    return empty;
  }
  if (data.type !== "delivery") {
    data.type = "dine-in";
  }
  return data;
}

const order = loadOrder();

function saveAndRender() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  renderCart();
}


/* ========== تغییر سبد ========== */

function findItem(name) {
  return order.items.find((item) => item.name === name);
}

function addItem(name, price) {
  const item = findItem(name);
  if (item) {
    item.qty++;
  } else {
    order.items.push({ name: name, price: price, qty: 1 });
  }
  saveAndRender();
}

function changeQty(name, step) {
  const item = findItem(name);
  if (!item) return;

  item.qty += step;
  if (item.qty <= 0) {
    removeItem(name);
    return;
  }
  saveAndRender();
}

function removeItem(name) {
  order.items = order.items.filter((item) => item.name !== name);
  saveAndRender();
}


/* ========== محاسبه (فقط عدد) ========== */

function calculateTotals() {
  let subtotal = 0;
  let count = 0;

  for (const item of order.items) {
    subtotal += item.price * item.qty;
    count += item.qty;
  }

  let delivery = 0;
  if (order.type === "delivery" && subtotal > 0 && subtotal < FREE_DELIVERY_FROM) {
    delivery = DELIVERY_FEE;
  }

  return { subtotal: subtotal, count: count, delivery: delivery, total: subtotal + delivery };
}


/* ========== نمایش ========== */

function createQtyButton(action, symbol, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.action = action;
  button.textContent = symbol;
  button.setAttribute("aria-label", label);
  return button;
}

function createRow(item) {
  const info = document.createElement("span");
  info.textContent = item.name;

  const detail = document.createElement("small");
  detail.textContent =
    ` ${item.qty.toLocaleString("fa-IR")} × ${formatPrice(item.price)} = ${formatPrice(item.qty * item.price)}`;
  info.append(detail);

  const controls = document.createElement("span");
  controls.className = "qty";
  controls.append(
    createQtyButton("plus", "+", "یکی بیشتر " + item.name),
    createQtyButton("minus", "−", "یکی کمتر " + item.name),
    createQtyButton("remove", "✕", "حذف " + item.name)
  );

  const li = document.createElement("li");
  li.dataset.name = item.name;
  li.append(info, controls);
  return li;
}

function renderCart() {
  cartList.textContent = "";

  if (order.items.length === 0) {
    const li = document.createElement("li");
    li.textContent = "سبد خالی است.";
    cartList.append(li);
  }

  for (const item of order.items) {
    cartList.append(createRow(item));
  }

  const totals = calculateTotals();
  cartCount.textContent = totals.count.toLocaleString("fa-IR");

  if (order.type === "delivery") {
    deliveryRow.hidden = false;
    deliveryRow.textContent =
      "هزینه پیک: " + (totals.delivery === 0 ? "رایگان" : formatPrice(totals.delivery));
  } else {
    deliveryRow.hidden = true;
  }

  cartTotal.textContent = "جمع کل: " + formatPrice(totals.total);

  typeRadios.forEach((radio) => {
    radio.checked = radio.value === order.type;
  });
}


/* ========== فیلتر دسته‌ها ========== */

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((other) => {
      const isActive = other === button;
      other.classList.toggle("active", isActive);
      other.setAttribute("aria-pressed", isActive);
    });

    dishes.forEach((dish) => {
      dish.hidden = filter !== "all" && dish.dataset.category !== filter;
    });
  });
});


/* ========== رویدادها ========== */

let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2500);
}

document.querySelectorAll(".add-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const dish = button.closest(".dish");
    const name = dish.dataset.name;

    addItem(name, Number(dish.dataset.price));
    orderMessage.textContent = "";
    showToast(`"${name}" به سبد اضافه شد.`);
  });
});

cartList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const name = button.closest("li").dataset.name;
  const action = button.dataset.action;

  if (action === "plus") changeQty(name, 1);
  if (action === "minus") changeQty(name, -1);
  if (action === "remove") removeItem(name);
});

typeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    order.type = radio.value;
    saveAndRender();
  });
});

document.getElementById("submit-order").addEventListener("click", () => {
  if (order.items.length === 0) {
    orderMessage.className = "form-message error";
    orderMessage.textContent = "سبد خالی است؛ اول چیزی انتخاب کنید.";
    return;
  }

  const totals = calculateTotals();
  const typeText = order.type === "delivery" ? "با پیک" : "حضوری";

  orderMessage.className = "form-message success";
  orderMessage.textContent =
    `✔ سفارش شما ثبت شد: ${totals.count.toLocaleString("fa-IR")} قلم، جمع ${formatPrice(totals.total)} (${typeText}).`;

  order.items = [];
  saveAndRender();
});

renderCart();
