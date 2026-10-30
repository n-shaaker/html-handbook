/* تمرین ۳ — فیلتر محصولات با تابع مرتبه بالا */

const products = [
  { name: "دفتر", price: 45000, stock: 10 },
  { name: "کوله‌پشتی", price: 850000, stock: 0 },
  { name: "خودکار", price: 15000, stock: 30 },
  { name: "ماشین‌حساب", price: 320000, stock: 4 },
];

const output = document.getElementById("output");

// تابع مرتبه بالا: شرط را به شکل یک تابع می‌گیرد
function filterProducts(list, testFn) {
  const result = [];
  for (const product of list) {
    if (testFn(product)) {
      result.push(product);
    }
  }
  return result;
}

function isCheap(product) {
  return product.price < 100000;
}

function isAvailable(product) {
  return product.stock > 0;
}

function showList(list) {
  output.textContent = "";

  if (list.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "محصولی پیدا نشد.";
    output.append(empty);
    return;
  }

  for (const product of list) {
    const li = document.createElement("li");
    li.textContent = `${product.name} — ${product.price.toLocaleString("fa-IR")} تومان`;
    output.append(li);
  }
}

document.getElementById("show-all").addEventListener("click", () => {
  showList(products);
});

document.getElementById("show-cheap").addEventListener("click", () => {
  showList(filterProducts(products, isCheap));
});

document.getElementById("show-available").addEventListener("click", () => {
  showList(filterProducts(products, isAvailable));
});

// تست حالت خالی در Console
console.log(filterProducts(products, (p) => p.price > 1000000)); // []

showList(products);
