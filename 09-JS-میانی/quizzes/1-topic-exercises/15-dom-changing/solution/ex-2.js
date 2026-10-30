// تمرین ۲ — برچسب قیمت
const items = document.querySelectorAll("#menu li");
let maxPrice = 0;
let maxItem = null;

items.forEach(item => {
  const price = Number(item.getAttribute("data-price"));

  if (price >= 300000) {
    item.classList.add("expensive");
  } else if (price < 100000) {
    item.classList.add("cheap");
  }

  item.textContent = item.textContent + " — " + price.toLocaleString("fa-IR") + " تومان";

  if (price > maxPrice) {
    maxPrice = price;
    maxItem = item;
  }
});

maxItem.style.fontWeight = "bold";
