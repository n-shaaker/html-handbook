// تمرین ۲ — قیمت نوشیدنی بر اساس اندازه

const sizeSelect = document.getElementById("size");
const priceText = document.getElementById("price-text");

sizeSelect.addEventListener("change", function () {
  const size = sizeSelect.value;
  let price;

  switch (size) {
    case "small":
      price = 45000;
      break;
    case "medium":
      price = 60000;
      break;
    case "large":
      price = 75000;
      break;
    default:
      price = 0;
  }

  if (price === 0) {
    priceText.textContent = "لطفاً یک اندازه انتخاب کنید.";
    return;
  }
  priceText.textContent = `قیمت: ${price.toLocaleString("fa-IR")} تومان`;
});
