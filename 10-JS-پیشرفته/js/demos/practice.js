/* ۱۸) پروژه نهایی: فروشگاه کوچک */

const PRODUCTS_DATA = [
  { id: 1, name: "هدفون بی‌سیم", price: 1850000, category: "صوتی" },
  { id: 2, name: "ماوس گیمینگ", price: 950000, category: "لوازم جانبی" },
  { id: 3, name: "کیبورد مکانیکی", price: 2400000, category: "لوازم جانبی" },
  { id: 4, name: "اسپیکر بلوتوثی", price: 1200000, category: "صوتی" },
  { id: 5, name: "فلش ۶۴ گیگ", price: 320000, category: "ذخیره‌سازی" },
  { id: 6, name: "هارد اکسترنال", price: 3100000, category: "ذخیره‌سازی" }
];

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  priceText() {
    return this.price.toLocaleString("fa-IR") + " تومان";
  }
}

// سبد خرید: آرایه‌ای از { id, qty } که در localStorage ذخیره می‌شود
class Cart {
  constructor(storageKey) {
    this.key = storageKey;
    this.items = this.load();
  }

  load() {
    try {
      const text = localStorage.getItem(this.key);
      return text ? JSON.parse(text) : [];
    } catch (err) {
      return [];
    }
  }

  save() {
    localStorage.setItem(this.key, JSON.stringify(this.items));
  }

  add(id) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.qty++;
    } else {
      this.items.push({ id: id, qty: 1 });
    }
    this.save();
  }

  remove(id) {
    const item = this.items.find(item => item.id === id);
    if (!item) return;
    item.qty--;
    if (item.qty === 0) {
      this.items = this.items.filter(item => item.id !== id);
    }
    this.save();
  }

  clear() {
    this.items = [];
    this.save();
  }
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchProducts() {
  await wait(800);
  return PRODUCTS_DATA.map(p => new Product(p.id, p.name, p.price, p.category));
}

const searchInput = document.getElementById("shop-search");
const sortSelect = document.getElementById("shop-sort");
const statusEl = document.getElementById("shop-status");
const productsBox = document.getElementById("shop-products");
const cartList = document.getElementById("shop-cart");
const totalText = document.getElementById("shop-total");
const clearBtn = document.getElementById("shop-clear");

const cart = new Cart("shop-cart");
let products = [];

function getVisibleProducts() {
  const q = searchInput.value.trim();
  const result = products.filter(p => p.name.includes(q));

  if (sortSelect.value === "price-asc") result.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "price-desc") result.sort((a, b) => b.price - a.price);
  if (sortSelect.value === "name") result.sort((a, b) => a.name.localeCompare(b.name, "fa"));

  return result;
}

function renderProducts() {
  productsBox.innerHTML = "";
  const visible = getVisibleProducts();
  if (visible.length === 0) {
    productsBox.textContent = "محصولی پیدا نشد.";
    return;
  }

  visible.forEach(p => {
    const card = document.createElement("div");
    card.className = "js-card";

    const title = document.createElement("h4");
    title.textContent = p.name;

    const info = document.createElement("p");
    info.textContent = p.category + " — " + p.priceText();

    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "افزودن به سبد";
    btn.dataset.add = p.id;

    card.append(title, info, btn);
    productsBox.append(card);
  });
}

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.items.forEach(item => {
    const p = products.find(p => p.id === item.id);
    if (!p) return;

    const sum = p.price * item.qty;
    total += sum;

    const li = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = `${p.name} × ${item.qty} = ${sum.toLocaleString("fa-IR")}`;

    const btn = document.createElement("button");
    btn.className = "btn danger";
    btn.textContent = "−";
    btn.dataset.remove = p.id;
    btn.setAttribute("aria-label", "کم کردن یکی از " + p.name);

    li.append(text, btn);
    cartList.append(li);
  });

  if (cartList.children.length === 0) {
    cartList.innerHTML = "<li>سبد خالی است</li>";
  }
  totalText.textContent = `جمع کل: ${total.toLocaleString("fa-IR")} تومان`;
}

productsBox.addEventListener("click", e => {
  const id = e.target.dataset.add;
  if (!id) return;
  cart.add(Number(id));
  renderCart();
});

cartList.addEventListener("click", e => {
  const id = e.target.dataset.remove;
  if (!id) return;
  cart.remove(Number(id));
  renderCart();
});

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);
clearBtn.addEventListener("click", () => {
  cart.clear();
  renderCart();
});

async function init() {
  statusEl.textContent = "در حال بارگذاری محصولات...";
  try {
    products = await fetchProducts();
    statusEl.textContent = `${products.length} محصول بارگذاری شد.`;
    renderProducts();
    renderCart();
  } catch (err) {
    statusEl.textContent = "خطا در بارگذاری: " + err.message;
  }
}

init();
