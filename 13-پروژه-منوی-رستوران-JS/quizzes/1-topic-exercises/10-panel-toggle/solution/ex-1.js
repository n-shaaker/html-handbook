/* تمرین ۱ — باز و بسته کردن سبد */

const toggleButton = document.getElementById("cart-toggle");
const cart = document.getElementById("cart");

toggleButton.addEventListener("click", () => {
  cart.hidden = !cart.hidden;

  const isOpen = !cart.hidden;
  toggleButton.setAttribute("aria-expanded", isOpen);

  if (isOpen) {
    toggleButton.textContent = "✕ بستن سفارش";
  } else {
    toggleButton.textContent = "🧺 سفارش من";
  }
});
