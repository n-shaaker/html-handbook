/* تمرین ۳ — حذف سفارش با امکان بازگردانی */

const orderList = document.getElementById("order-list");
const toast = document.getElementById("toast");
const toastText = document.getElementById("toast-text");
const undoButton = document.getElementById("toast-undo");

const orders = [
  { id: 1, text: "میز ۳ — چلوکباب کوبیده" },
  { id: 2, text: "میز ۵ — فالوده شیرازی" },
  { id: 3, text: "میز ۱ — چای سنتی" },
  { id: 4, text: "بیرون‌بر — زرشک‌پلو با مرغ" },
];

let toastTimer;
let lastDeleted = null; // { item, index }

function renderOrders() {
  orderList.textContent = "";

  if (orders.length === 0) {
    const li = document.createElement("li");
    li.textContent = "سفارشی باقی نمانده است.";
    orderList.append(li);
    return;
  }

  for (const order of orders) {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = order.text;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "icon-btn";
    button.dataset.id = order.id;
    button.textContent = "✕";
    button.setAttribute("aria-label", "حذف " + order.text);

    li.append(text, button);
    orderList.append(li);
  }
}

function hideToast() {
  toast.classList.remove("is-visible");
  lastDeleted = null; // بعد از بسته شدن، بازگردانی ممکن نیست
}

function showUndoToast(message) {
  clearTimeout(toastTimer);
  toastText.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(hideToast, 4000);
}

orderList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const id = Number(button.dataset.id);
  const index = orders.findIndex((order) => order.id === id);
  if (index === -1) return;

  // splice آرایه‌ای از حذف‌شده‌ها برمی‌گرداند
  const removed = orders.splice(index, 1);
  lastDeleted = { item: removed[0], index: index };

  renderOrders();
  showUndoToast(`"${removed[0].text}" حذف شد.`);
});

undoButton.addEventListener("click", () => {
  if (lastDeleted === null) return;

  orders.splice(lastDeleted.index, 0, lastDeleted.item);
  renderOrders();

  clearTimeout(toastTimer);
  hideToast();
});

renderOrders();
