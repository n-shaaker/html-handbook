/* تمرین ۲ — بستن با دکمه و Escape */

const toggleButton = document.getElementById("cart-toggle");
const closeButton = document.getElementById("cart-close");
const cart = document.getElementById("cart");

function openCart() {
  cart.hidden = false;
  toggleButton.setAttribute("aria-expanded", "true");
  closeButton.focus();
}

function closeCart() {
  cart.hidden = true;
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.focus();
}

toggleButton.addEventListener("click", () => {
  if (cart.hidden) {
    openCart();
  } else {
    closeCart();
  }
});

closeButton.addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cart.hidden) {
    closeCart();
  }
});
