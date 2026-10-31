# سناریو تدریس زنده — پروژه منوی رستوران (JavaScript)

**پیشنهاد:** ۳–۴ جلسه · **مرجع:** [`js/app.js`](../js/app.js) · [`index.html`](../index.html)

---

## درس ۱ — انتخاب DOM و data-* روی کارت‌ها

**تمرین:** [`01-select-dataset`](../quizzes/1-topic-exercises/01-select-dataset/README.md)

### متن تدریس

صفحه HTML از پروژه 09 آماده است. JS با `defer` بعد از DOM اجرا می‌شود. اول **مرجع‌ها** را بگیرید: `querySelector`، `querySelectorAll`. هر `.dish` باید `data-name` و `data-price` داشته باشد تا بعداً بدون parse متن، قیمت عددی بخوانیم. `classList` برای حالت فعال فیلتر.

### Live Coding

```javascript
const dishes = document.querySelectorAll(".dish");
dishes.forEach((dish) => {
  console.log(dish.dataset.name, dish.dataset.price);
});
const filterButtons = document.querySelectorAll(".filter-btn");
```

HTML نمونه روی یک کارت:

```html
<article class="dish" data-name="چلوکباب" data-price="420000">
```

### نمایش

Console — لیست نام‌ها؛ Elements — dataset در DevTools.

### سؤال

«`dataset.price` چه نوعی برمی‌گرداند؟» (همیشه string — بعداً `Number()`.)

### اشتباهات

- `getElementByID` با حروف اشتباه (`Id` نه `ID`).
- قیمت فقط در `.price` بدون `data-price`.

### انتقال

«جستجو با رویداد input.»

---

## درس ۲ — جستجوی منو

**تمرین:** [`02-search`](../quizzes/1-topic-exercises/02-search/README.md)

### متن تدریس

`input` جستجو → رویداد `input` (هر keystroke). `trim()` و `includes()` روی `dataset.name`. پنهان کردن با attribute **`hidden`** (نه فقط CSS). `#no-result` وقتی هیچ آیتمی نماند.

### Live Coding

```javascript
const searchInput = document.getElementById("search");
const menuItems = document.querySelectorAll(".dish, #drinks-table tbody tr");
const noResult = document.getElementById("no-result");

function applySearch() {
  const query = searchInput.value.trim();
  let visible = 0;
  menuItems.forEach((item) => {
    const show = item.dataset.name.includes(query);
    item.hidden = !show;
    if (show) visible++;
  });
  noResult.hidden = visible > 0;
}
searchInput.addEventListener("input", applySearch);
```

### نمایش

تایپ «کباب» — فیلتر زنده؛ خالی کردن input.

### سؤال

«چرا `input` به‌جای `keyup`؟» (paste و autofill هم پوشش داده می‌شود.)

### اشتباهات

- `display: none` در JS بدون به‌روزرسانی شمارنده.
- حساسیت به حروف بدون توافق (`toLowerCase` اگر لازم شد).

### انتقال

«فیلتر دسته کنار جستجو.»

---

## درس ۳ — فیلتر دسته (گیاهی، تند، جدید)

**تمرین:** [`03-category-filter`](../quizzes/1-topic-exercises/03-category-filter/README.md)

### متن تدریس

دکمه‌های `.filter-btn` با `data-filter`. یک `currentFilter` — ترکیب با جستجو در یک تابع `applyFilters`. نوشیدنی‌ها برچسب ندارند؛ فقط در «همه» یا وقتی جستجو match می‌دهد. `section.menu-section` اگر خالی شد `hidden`. کلاس `active` و ترجیحاً `aria-pressed`.

### Live Coding

```javascript
let currentFilter = "all";
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
  noResult.hidden = visibleCount > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    applyFilters();
  });
});
```

### نمایش

[`app.js`](../js/app.js) خطوط 36–83 — رفتار کامل.

### سؤال

«اگر فیلتر «گیاهی» و جستجو «کباب» با هم؟» (AND — هر دو شرط.)

### اشتباهات

- listener جدا برای search و filter که state را desync کند.
- `innerHTML` برای دکمه active.

### انتقال

«سبد سفارش و ساخت UI با createElement.»

---

## درس ۴ — سبد سفارش و Event Delegation

**تمرین:** [`04-cart`](../quizzes/1-topic-exercises/04-cart/README.md)

### متن تدریس

شیء `order`: `{ "نام غذا": { price, qty } }`. دکمه «+ افزودن» با `createElement` — `type="button"`. **یک** listener روی `main` با `closest(".add-btn")` — delegation. قیمت از `Number(item.dataset.price)`.

### Live Coding

```javascript
let order = {};

function addToOrder(name, price) {
  if (order[name]) order[name].qty++;
  else order[name] = { price, qty: 1 };
  renderCart();
}

document.querySelector("main").addEventListener("click", (event) => {
  const button = event.target.closest(".add-btn, .drink-add");
  if (!button) return;
  const item = button.closest("[data-name]");
  addToOrder(item.dataset.name, Number(item.dataset.price));
});
```

### نمایش

کلیک چند غذا — لیست سبد پر می‌شود.

### سؤال

«چرا listener روی هر دکمه جدا بد است؟» (تعداد listener و غذاهای داینامیک.)

### اشتباهات

- `innerHTML` برای ردیف سبد با نام کاربر (XSS در پروژه‌های بزرگ).
- فراموش `type="button"` داخل form.

### انتقال

«renderCart و formatPrice.»

---

## درس ۵ — جمع کل و formatPrice

**تمرین:** [`05-total-format`](../quizzes/1-topic-exercises/05-total-format/README.md)

### متن تدریس

`formatPrice` با `toLocaleString("fa-IR")`. `renderCart`: حلقه `for...in` روی order، جمع `price * qty`، `textContent` برای متن. دکمه‌های ± با delegation روی `#cart-list`. حالت خالی سبد.

### Live Coding

```javascript
function formatPrice(number) {
  return number.toLocaleString("fa-IR") + " تومان";
}

function renderCart() {
  cartList.textContent = "";
  let total = 0;
  let count = 0;
  for (const name in order) {
    const item = order[name];
    total += item.price * item.qty;
    count += item.qty;
    // li با createElement ...
  }
  cartTotal.textContent = "جمع کل: " + formatPrice(total);
  cartCount.textContent = count.toLocaleString("fa-IR");
}
```

### نمایش

افزایش qty — جمع به‌روز؛ اعداد فارسی.

### سؤال

«`for...in` روی آرایه مناسب است؟» (خیر — اینجا object سفارش.)

### اشتباهات

- جمع کردن string قیمت (`"100" + "200"`).
- به‌روز نکردن `disabled` دکمه submit.

### انتقال

«localStorage برای ماندگاری سبد.»

---

## درس ۶ — localStorage و JSON

**تمرین:** [`06-local-storage`](../quizzes/1-topic-exercises/06-local-storage/README.md)

### متن تدریس

کلید ثابت `STORAGE_KEY`. `JSON.stringify` هنگام save؛ `JSON.parse` در load با **`try/catch`** — داده خراب → `{}`. بعد از هر تغییر `updateCart()` ذخیره + render.

### Live Coding

```javascript
const STORAGE_KEY = "naranj-order";

function loadOrder() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

let order = loadOrder();

function updateCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  renderCart();
}
```

### نمایش

Refresh صفحه — سبد باقی بماند؛ Application tab.

### سؤال

«چرا localStorage string است؟»

### اشتباهات

- ذخیره object بدون stringify.
- catch خالی بدون fallback.

### انتقال

«اعتبارسنجی فرم رزرو.»

---

## درس ۷ — اعتبارسنجی فرم رزرو

**تمرین:** [`07-form-validation`](../quizzes/1-topic-exercises/07-form-validation/README.md)

### متن تدریس

`submit` → `preventDefault`. تابع `check(input, isOk, message)` برای `#id-error` و class `invalid`. Regex موبایل `^09\d{9}$`. `dateInput.min = todayString()`. اولین `.invalid` → `focus()`. رویداد `input` برای پاک کردن خطا هنگام اصلاح.

### Live Coding

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();
  check(nameInput, nameInput.value.trim().length >= 3, "نام را کامل بنویسید.");
  check(phoneInput, /^09\d{9}$/.test(phoneInput.value.trim()), "موبایل معتبر وارد کنید.");
  const firstInvalid = form.querySelector(".invalid");
  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }
  formMessage.textContent = "✔ رزرو ثبت شد.";
  form.reset();
});
```

### نمایش

[`#reserve`](../index.html#reserve) — خطا و موفقیت.

### سؤال

«HTML5 validation کافی نبود؟» (کنترل پیام فارسی و UX یکپارچه.)

### اشتباهات

- submit بدون preventDefault → reload.
- فقط `alert` بدون focus management.

### انتقال

«Toast بعد از افزودن به سبد.»

---

## درس ۸ — Toast (setTimeout)

**تمرین:** [`08-toast`](../quizzes/1-topic-exercises/08-toast/README.md)

### متن تدریس

عنصر `#toast` — `showToast(message)`: متن، class `is-visible`، `clearTimeout` قبلی، `setTimeout` ۲٫۵ثانیه برای hide. بعد از `addToOrder` صدا بزنید.

### Live Coding

```javascript
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2500);
}
```

### نمایش

افزودن سریع چند غذا — toast overwrite بدون باگ.

### سؤال

«چرا clearTimeout؟»

### اشتباهات

- چند timer همزمان class را early remove کند.
- `innerHTML` برای message.

### انتقال

«وضعیت باز/بسته رستوران.»

---

## درس ۹ — وضعیت باز (Date)

**تمرین:** [`09-open-status-date`](../quizzes/1-topic-exercises/09-open-status-date/README.md)

### متن تدریس

`new Date().getHours()` — منطق ساده: ناهار ۱۲–۱۶، شام ۱۹–۲۳. متن و class `is-open` / `is-closed` روی `#open-status`. (اختیاری تمرین: `getDay` برای تعطیلی.)

### Live Coding

```javascript
const openStatus = document.getElementById("open-status");
const hour = new Date().getHours();

if ((hour >= 12 && hour < 16) || (hour >= 19 && hour < 23)) {
  openStatus.textContent = "● الان باز هستیم";
  openStatus.classList.add("is-open");
} else {
  openStatus.textContent = "● الان بسته‌ایم";
  openStatus.classList.add("is-closed");
}
```

### نمایش

تغییر ساعت سیستم (یا mock در Console) برای تست.

### سؤال

«UTC vs local؟» (`getHours` محلی مرورگر.)

### اشتباهات

- hard-code متن بدون به‌روزرسانی class.
- فراموش edge ساعت ۱۶ و ۲۳.

### انتقال

«پنل سبد و a11y.»

---

## درس ۱۰ — پنل سبد (hidden، Escape، aria)

**تمرین:** [`10-panel-toggle`](../quizzes/1-topic-exercises/10-panel-toggle/README.md)

### متن تدریس

`setCartOpen(isOpen)`: `cartPanel.hidden`، `aria-expanded` روی toggle. submit/clear سبد. بستن با دکمه close؛ (پیشرفته: Escape، click outside — مطابق [`app.js`](../js/app.js) اگر در HTML hook دارید.)

### Live Coding

```javascript
function setCartOpen(isOpen) {
  cartPanel.hidden = !isOpen;
  cartToggle.setAttribute("aria-expanded", String(isOpen));
}

cartToggle.addEventListener("click", () => setCartOpen(cartPanel.hidden));
cartClose.addEventListener("click", () => setCartOpen(false));

cartSubmit.addEventListener("click", () => {
  order = {};
  updateCart();
  setCartOpen(false);
  showToast("✔ سفارش شما ثبت شد.");
});

renderCart();
```

### نمایش

Tab به toggle — Enter؛ screen reader expanded state.

### سؤال

«`hidden` vs `aria-hidden`؟»

### اشتباهات

- `display:none` دستی بدون `hidden`.
- باز کردن پنل بدون focus trap (در سطح این دوره: focus روی close کافی است.)

### انتقال

«پروژه ترکیبی و مرور کل app.js.»

---

## پروژه جلسه — یکپارچه‌سازی یا فیلتر دسته

**مدت:** ۴۵–۶۰ دقیقه

### شرح

[`project-01-category-filter`](../quizzes/2-combined-projects/project-01-category-filter/README.md) یا بازسازی تدریجی `app.js` از starter HTML بدون نگاه همزمان به solution.

### Live Coding

ترتیب پیشنهادی: dataset → search → filter → cart → storage → toast → form → open status → panel.

### نمایش

[`index.html`](../index.html) نسخه کامل — Diff mental با کار کلاس.

---

## جمع‌بندی

| بخش app.js | ایده کلید |
|------------|-----------|
| applyFilters | ترکیب state، hidden، sections |
| order + renderCart | object، createElement، fa-IR |
| delegation | یک listener، closest |
| localStorage | JSON + try/catch |
| form | preventDefault، regex، focus |
| toast / open | timing، Date |

**بعدی:** پروژه‌های ترکیبی quizzes و طرح ۱۶ جلسه‌ای.

---

## تمرین

1. [`quizzes/1-topic-exercises/`](../quizzes/1-topic-exercises/) — ۱۰ مبحث
2. [`quizzes/2-combined-projects/`](../quizzes/2-combined-projects/)
3. **تحویل:** فیچر کوچک خودتان (مثلاً «خالی کردن جستجو» یا فیلتر قیمت)

**معیار:** Console بدون خطا؛ سبد بعد از refresh؛ فرم invalid focus؛ Tab روی کنترل‌های اصلی.
