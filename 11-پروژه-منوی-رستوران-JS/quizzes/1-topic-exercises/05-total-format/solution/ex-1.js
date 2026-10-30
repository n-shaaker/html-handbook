/* تمرین ۱ — نوشتن قیمت کارت‌ها از روی data-price */

// 420000 ← «۴۲۰٬۰۰۰ تومان»
function formatPrice(number) {
  if (number === 0) {
    return "رایگان";
  }
  return number.toLocaleString("fa-IR") + " تومان";
}

document.querySelectorAll(".dish").forEach((dish) => {
  const price = Number(dish.dataset.price);
  dish.querySelector(".price").textContent = formatPrice(price);
});
