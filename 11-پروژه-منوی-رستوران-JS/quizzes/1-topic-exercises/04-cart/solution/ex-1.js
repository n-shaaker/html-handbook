/* تمرین ۱ — افزودن به سفارش (آرایه ساده) */

const cartList = document.getElementById("cart-list");
const cartCount = document.getElementById("cart-count");

const orderNames = [];

function renderCart() {
  cartList.textContent = "";

  if (orderNames.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "هنوز چیزی سفارش نداده‌اید.";
    cartList.append(empty);
  }

  for (const name of orderNames) {
    const li = document.createElement("li");
    li.textContent = name;
    cartList.append(li);
  }

  cartCount.textContent = orderNames.length.toLocaleString("fa-IR");
}

document.querySelectorAll(".add-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.closest(".dish").dataset.name;
    orderNames.push(name);
    renderCart();
  });
});

renderCart();
