/* تمرین ۳ — بستن با کلیک بیرون پنل */

const toggleButton = document.getElementById("cart-toggle");
const closeButton = document.getElementById("cart-close");
const cart = document.getElementById("cart");

function openCart() {
  cart.hidden = false;
  toggleButton.setAttribute("aria-expanded", "true");
  closeButton.focus();
}

function closeCart(moveFocus) {
  cart.hidden = true;
  toggleButton.setAttribute("aria-expanded", "false");
  if (moveFocus) {
    toggleButton.focus();
  }
}

toggleButton.addEventListener("click", () => {
  if (cart.hidden) {
    openCart();
  } else {
    closeCart(true);
  }
});

closeButton.addEventListener("click", () => {
  closeCart(true);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cart.hidden) {
    closeCart(true);
  }
});

document.addEventListener("click", (event) => {
  if (cart.hidden) return;

  // دکمه شناور خودش باز و بسته می‌کند؛ این‌جا نادیده بگیر
  const clickedInside = cart.contains(event.target) || toggleButton.contains(event.target);
  if (!clickedInside) {
    closeCart(false);
  }
});
