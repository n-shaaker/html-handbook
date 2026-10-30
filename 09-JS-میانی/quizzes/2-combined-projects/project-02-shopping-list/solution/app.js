/* کوییز ۲: فهرست خرید — پاسخ */

/* ===== عنصرهای صفحه ===== */
const form = document.getElementById("item-form");
const nameInput = document.getElementById("item-name");
const quantityInput = document.getElementById("item-quantity");
const formError = document.getElementById("form-error");
const list = document.getElementById("item-list");
const counter = document.getElementById("counter");
const clearBoughtBtn = document.getElementById("clear-bought");
const exportBtn = document.getElementById("export-btn");
const jsonOutput = document.getElementById("json-output");

/* ===== حالت برنامه ===== */
let items = [];

/* ===== اعتبارسنجی ===== */
function validateItem(rawName, rawQuantity) {
  const name = rawName.trim();
  const quantity = Number(rawQuantity);

  if (name === "") {
    throw new Error("نام کالا را وارد کنید.");
  }
  if (name.length > 30) {
    throw new Error("نام کالا حداکثر ۳۰ حرف باشد.");
  }
  // کادر خالی با Number صفر می‌شود و این شرط آن را هم می‌گیرد
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
    throw new Error("تعداد باید عدد صحیح بین ۱ تا ۹۹ باشد.");
  }
  if (items.some((item) => item.name === name)) {
    throw new Error(`«${name}» قبلاً در فهرست هست.`);
  }
  return { name, quantity };
}

/* ===== رندر ===== */
function createItemElement(item) {
  const li = document.createElement("li");
  if (item.bought) {
    li.classList.add("bought");
  }

  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = item.bought;
  checkbox.addEventListener("change", () => {
    item.bought = !item.bought;
    render();
  });

  const text = document.createElement("span");
  text.className = "item-text";
  text.textContent = `${item.name} × ${item.quantity.toLocaleString("fa-IR")}`;
  label.append(checkbox, text);

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "btn btn-danger";
  deleteBtn.textContent = "حذف";
  deleteBtn.addEventListener("click", () => {
    items = items.filter((other) => other.id !== item.id);
    render();
  });

  li.append(label, deleteBtn);
  return li;
}

function render() {
  // فهرست
  list.innerHTML = "";
  if (items.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "فهرست خرید خالی است.";
    list.append(empty);
  }
  items.forEach((item) => {
    list.append(createItemElement(item));
  });

  // شمارنده
  const boughtCount = items.filter((item) => item.bought).length;
  counter.textContent = `${boughtCount.toLocaleString("fa-IR")} از ${items.length.toLocaleString("fa-IR")} خریده شده`;
  clearBoughtBtn.disabled = boughtCount === 0;

  // JSON (فقط اگر باز باشد)
  if (!jsonOutput.hidden) {
    jsonOutput.textContent = JSON.stringify(items, null, 2);
  }
}

/* ===== رویدادها ===== */
form.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    const newItem = validateItem(nameInput.value, quantityInput.value);
    items.push({ id: Date.now(), name: newItem.name, quantity: newItem.quantity, bought: false });
    formError.textContent = "";
    form.reset();
    render();
  } catch (error) {
    formError.textContent = error.message;
  }
});

clearBoughtBtn.addEventListener("click", () => {
  items = items.filter((item) => !item.bought);
  render();
});

exportBtn.addEventListener("click", () => {
  jsonOutput.hidden = false;
  render();
});

render();
