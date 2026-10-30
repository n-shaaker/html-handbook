const STORAGE_KEY = "bootcamp.cart.v1";

const productsEl = document.querySelector("#products");
const resultCountEl = document.querySelector("#result-count");
const cartListEl = document.querySelector("#cart-list");
const cartEmptyEl = document.querySelector("#cart-empty");
const cartCountEl = document.querySelector("#cart-count");
const cartTotalEl = document.querySelector("#cart-total");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const clearCartBtn = document.querySelector("#clear-cart");

/** @type {{ id: number, qty: number }[]} */
let cart = loadCart();

function formatMoney(value) {
  return value.toLocaleString("fa-IR");
}

function findProduct(id) {
  return PRODUCTS.find((product) => product.id === id);
}

// Arabic ي/ك look identical to Persian ی/ک but are different characters;
// normalize both sides so "کیف" typed on any keyboard still matches.
function normalizeText(value) {
  return value.replace(/ي/g, "ی").replace(/ك/g, "ک").trim().toLowerCase();
}

// Stored data may be stale or tampered with: keep only known products and positive integer quantities
function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        item !== null &&
        typeof item === "object" &&
        Number.isInteger(item.qty) &&
        item.qty > 0 &&
        findProduct(item.id) !== undefined,
    );
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn("Could not save cart", error);
  }
}

function getFilteredProducts() {
  const query = normalizeText(searchInput.value);
  const category = categorySelect.value;

  return PRODUCTS.filter((product) => {
    const matchesQuery = normalizeText(product.name).includes(query);
    const matchesCategory = category === "all" || product.category === category;
    return matchesQuery && matchesCategory;
  });
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.width = 400;
  img.height = 300;
  img.loading = "lazy";

  const body = document.createElement("div");
  body.className = "card__body";

  const title = document.createElement("h2");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `${formatMoney(product.price)} تومان`;

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "افزودن به سبد";
  button.setAttribute("aria-label", `افزودن ${product.name} به سبد`);
  button.addEventListener("click", () => changeQty(product.id, 1));

  body.append(title, price, button);
  card.append(img, body);
  return card;
}

function renderProducts() {
  const items = getFilteredProducts();
  productsEl.replaceChildren(...items.map(createProductCard));

  resultCountEl.textContent =
    items.length === 0
      ? "هیچ محصولی با این فیلترها پیدا نشد."
      : `${formatMoney(items.length)} محصول`;
}

// delta = +1 or -1; quantity 0 removes the line
function changeQty(productId, delta) {
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += delta;
    if (existing.qty <= 0) {
      cart = cart.filter((item) => item.id !== productId);
    }
  } else if (delta > 0) {
    cart.push({ id: productId, qty: delta });
  }
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

function createQtyButton(label, ariaLabel, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "qty-btn";
  button.textContent = label;
  button.setAttribute("aria-label", ariaLabel);
  button.addEventListener("click", onClick);
  return button;
}

function renderCart() {
  cartListEl.replaceChildren();

  let total = 0;
  let count = 0;

  for (const item of cart) {
    const product = findProduct(item.id);
    if (!product) continue;

    // Prices are whole Toman integers, so the sum stays exact (no floating-point drift)
    const lineTotal = product.price * item.qty;
    total += lineTotal;
    count += item.qty;

    const li = document.createElement("li");

    const label = document.createElement("span");
    label.className = "cart__label";
    label.textContent = `${product.name} — ${formatMoney(lineTotal)} تومان`;

    const controls = document.createElement("span");
    controls.className = "cart__controls";

    const qty = document.createElement("span");
    qty.textContent = formatMoney(item.qty);

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "cart__remove";
    removeBtn.textContent = "حذف";
    removeBtn.setAttribute("aria-label", `حذف ${product.name} از سبد`);
    removeBtn.addEventListener("click", () => removeFromCart(product.id));

    controls.append(
      createQtyButton("+", `افزایش تعداد ${product.name}`, () => changeQty(product.id, 1)),
      qty,
      createQtyButton("−", `کاهش تعداد ${product.name}`, () => changeQty(product.id, -1)),
      removeBtn,
    );

    li.append(label, controls);
    cartListEl.append(li);
  }

  cartEmptyEl.hidden = count > 0;
  clearCartBtn.disabled = count === 0;
  cartCountEl.textContent = formatMoney(count);
  cartTotalEl.textContent = formatMoney(total);
}

searchInput.addEventListener("input", renderProducts);
categorySelect.addEventListener("change", renderProducts);

clearCartBtn.addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
});

renderProducts();
renderCart();
