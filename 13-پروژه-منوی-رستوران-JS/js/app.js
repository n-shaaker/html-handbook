/* رفتار صفحه منوی رستوران نارنج
   این فایل با defer وصل شده؛ پس وقتی اجرا می‌شود همه عنصرهای HTML ساخته شده‌اند. */

/* ========== ابزارهای کمکی ========== */

/* 420000 ← ۴۲۰٬۰۰۰ تومان */
function formatPrice(number) {
  return number.toLocaleString("fa-IR") + " تومان";
}

/* پیام کوتاه پایین صفحه که بعد از ۲٫۵ ثانیه محو می‌شود */
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2500);
}

/* ========== باز یا بسته بودن رستوران ========== */

const openStatus = document.getElementById("open-status");
const hour = new Date().getHours();

/* ناهار ۱۲ تا ۱۶ و شام ۱۹ تا ۲۳ */
if ((hour >= 12 && hour < 16) || (hour >= 19 && hour < 23)) {
  openStatus.textContent = "● الان باز هستیم";
  openStatus.classList.add("is-open");
} else {
  openStatus.textContent = "● الان بسته‌ایم";
  openStatus.classList.add("is-closed");
}

/* ========== جستجو و فیلتر ========== */

const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filter-btn");
const dishes = document.querySelectorAll(".dish");
const drinksTable = document.getElementById("drinks-table");
const drinkRows = drinksTable.querySelectorAll("tbody tr");
const menuItems = document.querySelectorAll(".dish, #drinks-table tbody tr");
const noResult = document.getElementById("no-result");
let currentFilter = "all";

/* هر فیلتر یعنی «این برچسب داخل آیتم باشد». نوشیدنی‌ها برچسب ندارند و فقط در «همه» دیده می‌شوند. */
const filterTags = { veg: ".tag-veg", hot: ".tag-hot", new: "mark" };

function matchesFilter(item) {
  if (currentFilter === "all") return true;
  return item.querySelector(filterTags[currentFilter]) !== null;
}

function applyFilters() {
  const query = searchInput.value.trim();
  let visibleCount = 0;

  menuItems.forEach((item) => {
    const show = item.dataset.name.includes(query) && matchesFilter(item);
    item.hidden = !show;
    if (show) visibleCount++;
  });

  /* بخشی که هیچ آیتم نمایانی ندارد، کامل پنهان شود */
  document.querySelectorAll(".menu-section").forEach((section) => {
    const visibleItems = section.querySelectorAll(".dish:not([hidden]), tbody tr:not([hidden])");
    section.hidden = visibleItems.length === 0;
  });

  noResult.hidden = visibleCount > 0;
}

searchInput.addEventListener("input", applyFilters);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    applyFilters();
  });
});

/* ========== سبد سفارش ========== */

const cartPanel = document.getElementById("cart");
const cartToggle = document.getElementById("cart-toggle");
const cartClose = document.getElementById("cart-close");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const cartSubmit = document.getElementById("cart-submit");
const cartClear = document.getElementById("cart-clear");

/* سفارش در localStorage می‌ماند تا با بستن صفحه پاک نشود.
   شکل داده: { "چلوکباب کوبیده": { price: 420000, qty: 2 } } */
const STORAGE_KEY = "naranj-order";

function loadOrder() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};   // اگر داده خراب بود، با سبد خالی شروع کن
  }
}

let order = loadOrder();

/* بعد از هر تغییر سفارش: ذخیره کن و سبد را از نو بساز */
function updateCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  renderCart();
}

function addToOrder(name, price) {
  if (order[name]) {
    order[name].qty++;
  } else {
    order[name] = { price: price, qty: 1 };
  }
  updateCart();
  showToast(`«${name}» به سفارش اضافه شد`);
}

function changeQty(name, amount) {
  order[name].qty += amount;
  if (order[name].qty <= 0) {
    delete order[name];
  }
  updateCart();
}

/* یک دکمه ساده با متن و کلاس دلخواه */
function createButton(text, className) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = text;
  return button;
}

/* کل سبد را از روی شیء order از نو می‌سازد (متن‌ها با textContent، نه innerHTML) */
function renderCart() {
  cartList.textContent = "";
  let total = 0;
  let count = 0;

  for (const name in order) {
    const item = order[name];
    total += item.price * item.qty;
    count += item.qty;

    const info = document.createElement("span");
    info.textContent = `${name} — ${formatPrice(item.price * item.qty)}`;

    const qty = document.createElement("strong");
    qty.textContent = item.qty.toLocaleString("fa-IR");

    const controls = document.createElement("span");
    controls.className = "qty";
    controls.append(createButton("−", "minus"), qty, createButton("+", "plus"));

    const li = document.createElement("li");
    li.dataset.name = name;
    li.append(info, controls);
    cartList.append(li);
  }

  if (count === 0) {
    const empty = document.createElement("li");
    empty.className = "cart-empty";
    empty.textContent = "هنوز چیزی سفارش نداده‌اید.";
    cartList.append(empty);
  }

  cartTotal.textContent = "جمع کل: " + formatPrice(total);
  cartCount.textContent = count.toLocaleString("fa-IR");
  cartSubmit.disabled = count === 0;
  cartClear.disabled = count === 0;
}

/* دکمه «افزودن» برای هر کارت غذا، و یک ستون «سفارش» با دکمه + برای جدول نوشیدنی */
dishes.forEach((dish) => {
  dish.querySelector(".dish-body").append(createButton("+ افزودن به سفارش", "btn add-btn"));
});

const headerCell = document.createElement("th");
headerCell.textContent = "سفارش";
drinksTable.querySelector("thead tr").append(headerCell);

drinkRows.forEach((row) => {
  const cell = document.createElement("td");
  cell.append(createButton("+", "drink-add"));
  row.append(cell);
});

/* Event Delegation: یک listener روی کل منو برای همه دکمه‌های افزودن.
   نام و قیمت از data-name و data-price کارت یا ردیف خوانده می‌شود. */
document.querySelector("main").addEventListener("click", (event) => {
  const button = event.target.closest(".add-btn, .drink-add");
  if (!button) return;
  const item = button.closest("[data-name]");
  addToOrder(item.dataset.name, Number(item.dataset.price));
});

/* Event Delegation: دکمه‌های + و − داخل سبد */
cartList.addEventListener("click", (event) => {
  const button = event.target.closest(".qty button");
  if (!button) return;
  const name = button.closest("li").dataset.name;
  if (button.classList.contains("plus")) {
    changeQty(name, 1);
  } else {
    changeQty(name, -1);
  }
});

/* باز و بسته کردن پنل سبد */
function setCartOpen(isOpen) {
  cartPanel.hidden = !isOpen;
  cartToggle.setAttribute("aria-expanded", isOpen);
}

cartToggle.addEventListener("click", () => setCartOpen(cartPanel.hidden));
cartClose.addEventListener("click", () => setCartOpen(false));

cartClear.addEventListener("click", () => {
  order = {};
  updateCart();
});

cartSubmit.addEventListener("click", () => {
  order = {};
  updateCart();
  setCartOpen(false);
  showToast("✔ سفارش شما ثبت شد. نوش جان!");
});

renderCart();

/* ========== اعتبارسنجی فرم رزرو ========== */

const form = document.getElementById("reserve-form");
const formMessage = document.getElementById("form-message");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const guestsInput = document.getElementById("guests");
const areaSelect = document.getElementById("area");

/* تاریخ امروز به شکل 2026-10-25؛ همان قالب مقدار input[type=date] */
function todayString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

dateInput.min = todayString();   // روزهای گذشته در تقویم قابل انتخاب نباشند

/* اگر کادر درست نباشد، پیام خطا در <small> زیرش نوشته و کادر قرمز می‌شود */
function check(input, isOk, message) {
  document.getElementById(input.id + "-error").textContent = isOk ? "" : message;
  input.classList.toggle("invalid", !isOk);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();   // صفحه دوباره بارگذاری نشود

  const guests = Number(guestsInput.value);
  check(nameInput, nameInput.value.trim().length >= 3, "نام را کامل بنویسید (حداقل ۳ حرف).");
  check(phoneInput, /^09\d{9}$/.test(phoneInput.value.trim()), "شماره موبایل باید ۱۱ رقم باشد و با ۰۹ شروع شود.");
  check(dateInput, dateInput.value !== "" && dateInput.value >= todayString(), "یک تاریخ از امروز به بعد انتخاب کنید.");
  check(timeInput, timeInput.value !== "", "ساعت رزرو را انتخاب کنید.");
  check(guestsInput, guests >= 1 && guests <= 20, "تعداد نفرات باید بین ۱ تا ۲۰ باشد.");

  /* اولین کادر نامعتبر (به ترتیب فرم) فوکوس بگیرد */
  const firstInvalid = form.querySelector(".invalid");
  if (firstInvalid) {
    formMessage.textContent = "لطفاً خطاهای فرم را برطرف کنید.";
    formMessage.className = "form-message error";
    firstInvalid.focus();
    return;
  }

  const dateText = new Date(dateInput.value + "T00:00").toLocaleDateString("fa-IR");
  const areaText = areaSelect.options[areaSelect.selectedIndex].text;
  formMessage.textContent =
    `✔ ${nameInput.value.trim()} عزیز، رزرو ${guests.toLocaleString("fa-IR")} نفر برای ${dateText} ` +
    `ساعت ${timeInput.value} (${areaText}) ثبت شد. برای تأیید با شما تماس می‌گیریم.`;
  formMessage.className = "form-message success";
  form.reset();
});

/* وقتی کاربر کادر نامعتبر را اصلاح می‌کند، خطای همان کادر پاک شود */
form.addEventListener("input", (event) => {
  if (event.target.classList.contains("invalid")) {
    check(event.target, true, "");
  }
});
