/* تمرین ۳ — جدول تعداد کالا با داده و Event Delegation */

let products = [
  { id: 1, name: "دفتر", price: 45000, qty: 2 },
  { id: 2, name: "خودکار", price: 15000, qty: 5 },
  { id: 3, name: "پاک‌کن", price: 8000, qty: 1 },
];

const tbody = document.getElementById("order-body");
const totalText = document.getElementById("total");

function createButton(text, action, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.dataset.action = action;
  button.setAttribute("aria-label", label);
  return button;
}

function createCell(content) {
  const td = document.createElement("td");
  td.append(content);
  return td;
}

function render() {
  tbody.textContent = "";
  let total = 0;

  for (const product of products) {
    total += product.price * product.qty;

    const actions = document.createElement("span");
    actions.append(
      createButton("+", "plus", "یکی بیشتر " + product.name),
      " ",
      createButton("−", "minus", "یکی کمتر " + product.name),
      " ",
      createButton("حذف", "remove", "حذف " + product.name)
    );

    const tr = document.createElement("tr");
    tr.dataset.id = product.id;
    tr.append(
      createCell(product.name),
      createCell(product.qty.toLocaleString("fa-IR")),
      createCell(product.price.toLocaleString("fa-IR")),
      createCell(actions)
    );
    tbody.append(tr);
  }

  if (products.length === 0) {
    totalText.textContent = "سفارشی ندارید.";
  } else {
    totalText.textContent = "جمع کل: " + total.toLocaleString("fa-IR") + " تومان";
  }
}

// یک listener برای همه دکمه‌های جدول
tbody.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const id = Number(button.closest("tr").dataset.id);
  const product = products.find((p) => p.id === id);
  const action = button.dataset.action;

  if (action === "plus") {
    product.qty++;
  } else if (action === "minus") {
    product.qty--;
  }

  if (action === "remove" || product.qty === 0) {
    products = products.filter((p) => p.id !== id);
  }

  render();
});

render();
