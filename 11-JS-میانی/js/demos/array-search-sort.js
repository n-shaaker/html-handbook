/* ۳) جستجو و مرتب‌سازی آرایه (Search & Sort) */

runIn("#out-1", function () {
  const nums = [4, 9, 16, 25, 29];
  console.log(nums.indexOf(16));
  console.log(nums.indexOf(100));
  console.log(nums.includes(25));
  const firstBig = nums.find(function (n) {
    return n > 10;
  });
  console.log(firstBig);
  console.log(nums.findIndex(function (n) { return n > 10; }));
});

runIn("#out-2", function () {
  const names = ["Sara", "Ali", "Maryam", "Reza"];
  names.sort();
  console.log(names);
  names.reverse();
  console.log(names);

  const mixedCase = ["banana", "Cherry", "apple"];
  console.log(mixedCase.sort());

  const cities = ["مشهد", "گرگان", "تبریز", "پاوه", "اصفهان", "چالوس"];
  console.log(cities.slice().sort());
  cities.sort(function (a, b) { return a.localeCompare(b, "fa"); });
  console.log(cities);
});

runIn("#out-3", function () {
  const scores = [40, 100, 1, 5, 25, 10];
  scores.sort();
  console.log(scores);
  scores.sort(function (a, b) { return a - b; });
  console.log(scores);
  scores.sort(function (a, b) { return b - a; });
  console.log(scores);
});

runIn("#out-6", function () {
  const prices = [300, 120, 450];
  const sorted = prices.sort(function (a, b) { return a - b; });
  console.log(prices);
  console.log(sorted === prices);

  const original = [300, 120, 450];
  const sortedCopy = original.slice().sort(function (a, b) { return a - b; });
  console.log(original);
  console.log(sortedCopy);
});

runIn("#out-4", function () {
  const products = [
    { name: "کتاب", price: 120 },
    { name: "خودکار", price: 15 },
    { name: "کیف", price: 450 }
  ];
  products.sort(function (a, b) { return a.price - b.price; });
  console.log(products);
  const cheap = products.find(function (p) { return p.price < 100; });
  console.log(cheap.name);
  const missing = products.find(function (p) { return p.price > 1000; });
  console.log(missing);
});

runIn("#out-5", function () {
  const temps = [4, 9, 2];
  console.log(Math.min(...temps));
  console.log(Math.max(...temps));
  console.log(Math.max(temps));
});

// مرتب‌سازی محصولات فروشگاه
const shopItems = [
  { name: "هدفون", price: 1850000 },
  { name: "کابل شارژ", price: 240000 },
  { name: "پاوربانک", price: 1290000 },
  { name: "قاب گوشی", price: 350000 }
];

const sortSelect = document.getElementById("sort-select");
const shopList = document.getElementById("shop-list");

function showProducts() {
  if (sortSelect.value === "cheap") {
    shopItems.sort(function (a, b) { return a.price - b.price; });
  } else if (sortSelect.value === "expensive") {
    shopItems.sort(function (a, b) { return b.price - a.price; });
  } else {
    shopItems.sort(function (a, b) { return a.name.localeCompare(b.name, "fa"); });
  }

  let html = "";
  for (const item of shopItems) {
    html += `<li><span>${item.name}</span><span>${item.price.toLocaleString("fa-IR")} تومان</span></li>`;
  }
  shopList.innerHTML = html;
}

sortSelect.addEventListener("change", showProducts);
showProducts();
