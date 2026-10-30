/* ۱۶) DOM: رویدادها به صورت عمیق‌تر */

const area = document.getElementById("mouse-area");
const coords = document.getElementById("coords");

area.addEventListener("mousemove", (event) => {
  const rect = area.getBoundingClientRect();
  const x = Math.round(event.clientX - rect.left);
  const y = Math.round(event.clientY - rect.top);
  coords.textContent = `x: ${x} , y: ${y}`;
});

const link = document.getElementById("stop-link");
const linkMsg = document.getElementById("link-msg");

link.addEventListener("click", (event) => {
  event.preventDefault();
  linkMsg.textContent = "لینک باز نشد؛ preventDefault جلویش را گرفت.";
});

const searchBox = document.getElementById("search-box");
const shortcutMsg = document.getElementById("shortcut-msg");

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.code === "KeyK") {
    event.preventDefault();
    searchBox.focus();
    shortcutMsg.textContent = "میان‌بر Ctrl + K اجرا شد!";
  }
});

const onceBtn = document.getElementById("once-btn");
const onceMsg = document.getElementById("once-msg");

onceBtn.addEventListener("click", () => {
  onceMsg.textContent = "فقط یک بار اجرا می‌شوم!";
}, { once: true });

const hiBtn = document.getElementById("hi-btn");
const offBtn = document.getElementById("off-btn");
const hiMsg = document.getElementById("hi-msg");

function sayHi() { hiMsg.textContent += "سلام! "; }
hiBtn.addEventListener("click", sayHi);
offBtn.addEventListener("click", () => {
  hiBtn.removeEventListener("click", sayHi);
  hiMsg.textContent += "(listener حذف شد) ";
});

// Event Delegation
const productList = document.getElementById("product-list");
const cartInfo = document.getElementById("cart-info");
let cartCount = 0;

productList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || button.disabled) return;

  cartCount++;
  button.disabled = true;
  button.textContent = "در سبد ✔";
  cartInfo.textContent = `${cartCount} کالا در سبد (آخرین: ${button.dataset.name})`;
});
