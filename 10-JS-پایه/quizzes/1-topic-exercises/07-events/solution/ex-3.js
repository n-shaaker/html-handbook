// تمرین ۳ — کارت محصول فروشگاه

let cartCount = 0;

const card = document.getElementById("product-card");
const cardHint = document.getElementById("card-hint");
const buyBtn = document.getElementById("buy-btn");
const cartText = document.getElementById("cart-text");
const searchInput = document.getElementById("search");
const keyText = document.getElementById("key-text");

card.addEventListener("mouseover", function () {
  card.classList.add("active");
  cardHint.textContent = "برای خرید، دکمه را بزنید 👇";
});

card.addEventListener("mouseout", function () {
  card.classList.remove("active");
  cardHint.textContent = "ماوس را روی کارت ببرید";
});

buyBtn.addEventListener("click", function () {
  cartCount++;
  cartText.textContent = "سبد خرید: " + cartCount + " کالا";
});

searchInput.addEventListener("keydown", function (event) {
  keyText.textContent = "آخرین کلید: " + event.key;
});
