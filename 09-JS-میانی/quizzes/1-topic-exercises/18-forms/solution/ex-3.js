// تمرین ۳ — سفارش چای با قیمت زنده
const form = document.getElementById("order");
const liveTotal = document.getElementById("live-total");
const summary = document.getElementById("summary");

const SIZE_PRICES = { small: 40000, large: 60000 };
const SIZE_NAMES = { small: "کوچک", large: "بزرگ" };
const EXTRA_PRICE = 10000;

function getExtras() {
  const extras = [];
  if (form.elements.cardamom.checked) {
    extras.push("هل");
  }
  if (form.elements.cinnamon.checked) {
    extras.push("دارچین");
  }
  return extras;
}

function getQty() {
  return Number(form.elements.qty.value);
}

function isQtyValid() {
  const qty = getQty();
  return Number.isInteger(qty) && qty >= 1 && qty <= 10;
}

function calcTotal() {
  const sizePrice = SIZE_PRICES[form.elements.size.value];
  const extrasPrice = getExtras().length * EXTRA_PRICE;
  return (sizePrice + extrasPrice) * getQty();
}

function toToman(n) {
  return n.toLocaleString("fa-IR") + " تومان";
}

function updateTotal() {
  if (!isQtyValid()) {
    liveTotal.textContent = "تعداد باید بین ۱ تا ۱۰ باشد.";
    return;
  }
  liveTotal.textContent = toToman(calcTotal());
}

form.addEventListener("input", updateTotal);

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!isQtyValid()) {
    return;
  }

  const extras = getExtras();
  const lines = [
    "اندازه: " + SIZE_NAMES[form.elements.size.value],
    "شیرینی: " + form.elements.sweet.value,
    "افزودنی: " + (extras.length > 0 ? extras.join("، ") : "ندارد"),
    "تعداد: " + getQty().toLocaleString("fa-IR"),
    "جمع: " + toToman(calcTotal())
  ];

  const ul = document.createElement("ul");
  lines.forEach(line => {
    const li = document.createElement("li");
    li.textContent = line;
    ul.append(li);
  });

  summary.textContent = "";
  summary.append(ul);
});

updateTotal();
