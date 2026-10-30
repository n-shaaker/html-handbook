/* ۴) پیمایش آرایه (forEach، map، filter، reduce) */

runIn("#out-1", function () {
  const fruits = ["سیب", "موز", "انار"];
  fruits.forEach(function (fruit, index) {
    console.log(index + 1 + ". " + fruit);
  });
});

runIn("#out-2", function () {
  const prices = [100, 250, 80];
  const withTax = prices.map(function (p) {
    return p * 1.1;
  });
  console.log(withTax);
  console.log(prices);
  const rounded = prices.map(function (p) {
    return Math.round(p * 1.1);
  });
  console.log(rounded);
});

runIn("#out-3", function () {
  const ages = [12, 25, 17, 40, 8, 19];
  const adults = ages.filter(function (age) {
    return age >= 18;
  });
  console.log(adults);
});

runIn("#out-4", function () {
  const cart = [120, 45, 300];
  const total = cart.reduce(function (sum, item) {
    return sum + item;
  }, 0);
  console.log(total);

  const basket = [
    { name: "دفتر", price: 45000, qty: 3 },
    { name: "خودکار", price: 12000, qty: 5 },
    { name: "کوله‌پشتی", price: 680000, qty: 1 }
  ];
  const basketTotal = basket.reduce(function (sum, item) {
    return sum + item.price * item.qty;
  }, 0);
  console.log(basketTotal);
});

runIn("#out-5", function () {
  const scores = [15, 18, 9, 20];
  console.log(scores.some(function (s) { return s < 10; }));
  console.log(scores.every(function (s) { return s >= 10; }));
});

runIn("#out-6", function () {
  const products = [
    { name: "لپ‌تاپ", price: 40000000, inStock: true },
    { name: "ماوس", price: 600000, inStock: false },
    { name: "کیبورد", price: 1500000, inStock: true }
  ];
  const available = products
    .filter(function (p) { return p.inStock; })
    .map(function (p) { return p.name; });
  console.log(available);
});

// جستجوی فوری
const cities = ["تهران", "تبریز", "مشهد", "اصفهان", "شیراز", "یزد", "کرمان", "رشت", "ساری", "اهواز"];
const searchInput = document.getElementById("search");
const list = document.getElementById("city-list");

function showCities(items) {
  if (items.length === 0) {
    list.innerHTML = "<li>شهری پیدا نشد</li>";
    return;
  }
  list.innerHTML = items.map(function (city) {
    return `<li><span>${city}</span></li>`;
  }).join("");
}

searchInput.addEventListener("input", function () {
  const text = searchInput.value.trim();
  const found = cities.filter(function (city) {
    return city.includes(text);
  });
  showCities(found);
});

showCities(cities);
