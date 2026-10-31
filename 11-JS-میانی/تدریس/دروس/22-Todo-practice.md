# سناریوی تدریس درس 22: Todo List

**صفحه جزوه:** [`pages/22-practice.html`](../../pages/22-practice.html)
**پیش‌نیاز مفهومی:** درس 21
**مدت پیشنهادی:** حدود 90 دقیقه
**هدف جلسه:** درس 22 — 22-practice.html

**چرخه ثابت تدریس (در کل جلسه تکرار کن):**  
مفهوم → کد → نتیجه در مرورگر/Console → سؤال چالشی → راه‌حل

| موضوع | زمان |
|------|------|
| شروع و مسئله واقعی | ۸–۱۰ دقیقه |
| Live Coding | ۲۰–۲۵ دقیقه |
| نمایش و DevTools | ۸ دقیقه |
| سؤالات کلاسی | ۱۰ دقیقه |
| mini-project / جمع‌بندی | ۱۰–۱۵ دقیقه |
| **مجموع** | **~90 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله قبل از تعریف

اول با **مسئله** شروع کن — نه با لیست property.

«این پروژه مهم‌ترین مباحث دوره را کنار هم می‌گذارد: آرایه اشیا، متدهای آرایه، تابع پیکانی، DOM، رویداد و فرم. اول نسخه زنده را امتحان کنید، بعد کد را بخوانید.»

«حالت برنامه (state) در یک آرایه نگه داشته می‌شود و هر بار که تغییر کرد، تابع render فهرست را از نو می‌سازد. قانون مهم این الگو: در این الگو صفحه را جدا از داده عوض نکنید ؛ اول آرایه todos را تغییر دهید و بعد render() را صدا بزنید. این‌طوری صفحه همیشه با داده هماهنگ است.»

«let todos = [ { id: 1, text: "خواندن درس آرایه‌ها", done: true }, { id: 2, text: "تمرین map و filter", done: false } ]; let filter = "all"; هر کار یک شیء با شناسه، متن و وضعیت انجام است. todos فهرست همهٔ کارهاست و filter می‌گوید کدام زیرمجموعه روی صفحه دیده شود. مقدار all یعنی در شروع، هر دو کار نشان داده شوند. این دو متغیر وضعیت برنامه هستند؛ صفحه باید از روی آن‌ها ساخته شود.»

«const form = document.getElementById("todo-form"); const input = document.getElementById("todo-input"); const list = document.getElementById("todo-list"); const count = document.getElementById("todo-count"); const filterButtons = document.querySelectorAll("#filters button"); function render() { const visible = todos.filter(t => { if (filter === "active") return !t.done; if (filter === "done") return t.done; return true; }); list.innerHTML = ""; visible.forEach(todo => { const li = document.createElement("li"); if (todo.done) li.classList.add("done"); const label = document.createElement("label"); const checkbox = document.createElement("input"); checkbox.type = "checkbox"; checkbox.checked = todo.done; checkbox.addEventListener("change", () => toggleTodo(todo.id)); const span = document.createElement("span"); span.textContent = todo.text; label.append(checkbox, span); const del = document.createElement("button"); del.type = "button"; del.className = "btn danger"; del.textContent = "حذف"; del.addEventListener("click", () => deleteTodo(todo.id)); li.append(label, del); list.append(li); }); if (visible.length === 0) { const empty = document.createElement("li"); empty.textContent = "کاری در این فهرست نیست."; list.append(empty); } const left = todos.filter(t => !t.done).length; count.textContent = `${left} کار باقی‌مانده از ${todos.length}`; } function addTodo(text) { todos.push({ id: Date.now(), text, done: false }); render(); } function toggleTodo(id) { const todo = todos.find(t => t.id === id); todo.done = !todo.done; render(); } function deleteTodo(id) { todos = todos.filter(t => t.id !== id); render(); } form.addEventListener("submit", (event) => { event.preventDefault(); const text = input.value.trim(); if (text === "") return; addTodo(text); input.value = ""; input.focus(); }); filterButtons.forEach(btn => { btn.addEventListener("click", () => { filter = btn.dataset.filter; // همه دکمه‌ها کم‌رنگ، فقط دکمه کلیک‌شده رنگ اصلی filterButtons.forEach(b => b.classList.add("secondary")); btn.classList.remove("secondary"); render(); }); }); render(); render اول با filter تصمیم می‌گیرد کدام کارها دیده شوند، بعد محتوای فهرست را خالی می‌کند و ردیف‌ها را از نو می‌سازد. تغییر چک‌باکس و حذف، مستقیم فقط همان عنصر را به‌روز نمی‌کنند؛ تابع‌های toggleTodo و deleteTodo آرایه را عوض می‌کنند و دوباره render را صدا می‌زنند. افزودن کار هم شیء تازه‌ای با Date.now به‌عنوان شناسه به آرایه اضافه می‌کند. ارسال فرم با preventDefault جلوی بارگذاری صفحه را می‌گیرد و متن خالی را رد می‌کند.»

**روی جزوه این عناوین را دنبال کنید:** *۲۲) پروژه جمع‌بندی: فهرست کارها (Todo List)* · *ساختار داده* · *کد کامل* · *تمرین‌های تکمیلی*

**چرخه این بخش:** نشان بده → دانشجو حدس بزند → یک خط کد → refresh.

---

## ۲) مفهوم — حرف قابل گفتن سر کلاس

«بچه‌ها، جزوه را باز کنید؛ من روی همان مثال live جلو می‌روم. هر بار که property عوض می‌شود، در DevTools overlay (Flex/Grid) یا Computed styles را نگاه کنید.»

«حالت برنامه (state) در یک آرایه نگه داشته می‌شود و هر بار که تغییر کرد، تابع render فهرست را از نو می‌سازد. قانون مهم این الگو: در این الگو صفحه را جدا از داده عوض نکنید ؛ اول آرایه todos را تغییر دهید و بعد render() را صدا بزنید. این‌طوری صفحه همیشه با داده هماهنگ است.»

«let todos = [ { id: 1, text: "خواندن درس آرایه‌ها", done: true }, { id: 2, text: "تمرین map و filter", done: false } ]; let filter = "all"; هر کار یک شیء با شناسه، متن و وضعیت انجام است. todos فهرست همهٔ کارهاست و filter می‌گوید کدام زیرمجموعه روی صفحه دیده شود. مقدار all یعنی در شروع، هر دو کار نشان داده شوند. این دو متغیر وضعیت برنامه هستند؛ صفحه باید از روی آن‌ها ساخته شود.»

«const form = document.getElementById("todo-form"); const input = document.getElementById("todo-input"); const list = document.getElementById("todo-list"); const count = document.getElementById("todo-count"); const filterButtons = document.querySelectorAll("#filters button"); function render() { const visible = todos.filter(t => { if (filter === "active") return !t.done; if (filter === "done") return t.done; return true; }); list.innerHTML = ""; visible.forEach(todo => { const li = document.createElement("li"); if (todo.done) li.classList.add("done"); const label = document.createElement("label"); const checkbox = document.createElement("input"); checkbox.type = "checkbox"; checkbox.checked = todo.done; checkbox.addEventListener("change", () => toggleTodo(todo.id)); const span = document.createElement("span"); span.textContent = todo.text; label.append(checkbox, span); const del = document.createElement("button"); del.type = "button"; del.className = "btn danger"; del.textContent = "حذف"; del.addEventListener("click", () => deleteTodo(todo.id)); li.append(label, del); list.append(li); }); if (visible.length === 0) { const empty = document.createElement("li"); empty.textContent = "کاری در این فهرست نیست."; list.append(empty); } const left = todos.filter(t => !t.done).length; count.textContent = `${left} کار باقی‌مانده از ${todos.length}`; } function addTodo(text) { todos.push({ id: Date.now(), text, done: false }); render(); } function toggleTodo(id) { const todo = todos.find(t => t.id === id); todo.done = !todo.done; render(); } function deleteTodo(id) { todos = todos.filter(t => t.id !== id); render(); } form.addEventListener("submit", (event) => { event.preventDefault(); const text = input.value.trim(); if (text === "") return; addTodo(text); input.value = ""; input.focus(); }); filterButtons.forEach(btn => { btn.addEventListener("click", () => { filter = btn.dataset.filter; // همه دکمه‌ها کم‌رنگ، فقط دکمه کلیک‌شده رنگ اصلی filterButtons.forEach(b => b.classList.add("secondary")); btn.classList.remove("secondary"); render(); }); }); render(); render اول با filter تصمیم می‌گیرد کدام کارها دیده شوند، بعد محتوای فهرست را خالی می‌کند و ردیف‌ها را از نو می‌سازد. تغییر چک‌باکس و حذف، مستقیم فقط همان عنصر را به‌روز نمی‌کنند؛ تابع‌های toggleTodo و deleteTodo آرایه را عوض می‌کنند و دوباره render را صدا می‌زنند. افزودن کار هم شیء تازه‌ای با Date.now به‌عنوان شناسه به آرایه اضافه می‌کند. ارسال فرم با preventDefault جلوی بارگذاری صفحه را می‌گیرد و متن خالی را رد می‌کند.»

اگر دانشجو گفت «حفظ کنم؟» بگو: «نه — **مسئله** را بشناسید؛ property نامش را بعداً هم از MDN پیدا می‌کنید.»

---

## ۳) Live Coding — مرحله‌به‌مرحله

«فایل live جدا می‌سازم تا index پروژه قاطی نشود — مثلاً `تدریس/live/` در همین ماژول.»

**مرحله 1 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
let todos = [
  { id: 1, text: "خواندن درس آرایه‌ها", done: true },
  { id: 2, text: "تمرین map و filter", done: false }
];
let filter = "all";
```

**مرحله 2 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const count = document.getElementById("todo-count");
const filterButtons = document.querySelectorAll("#filters button");

function render() {
  const visible = todos.filter(t => {
    if (filter === "active") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  list.innerHTML = "";
  visible.forEach(todo => {
    const li = document.createElement("li");
    if (todo.done) li.classList.add("done");

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const span = document.createElement("span");
    span.textContent = todo.text;
    label.append(checkbox, span);

    const del = document.createElement("button");
    del.type = "button";
    del.className = "btn danger";
    del.textContent = "حذف";
    del.addEventListener("click", () => deleteTodo(todo.id));

    li.append(label, del);
    list.append(li);
  });

  if (visible.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "کاری در این فهرست نیست.";
    list.append(empty);
  }

  const left = todos.filter(t => !t.done).length;
  count.textContent = `${left} کار باقی‌مانده از ${todos.length}`;
}

function addTodo(text) {
  todos.push({ id: Date.now(), text, done: false });
  render();
}

function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  todo.done = !todo.done;
  render();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") return;
  addTodo(text);
  input.value = "";
  input.focus();
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filter = btn.dataset.filter;
    // همه دکمه‌ها کم‌رنگ، فقط دکمه کلیک‌شده رنگ اصلی
    filterButtons.forEach(b => b.classList.add("secondary"));
    btn.classList.remove("secondary");
    render();
  });
});

render();
```


**در حین تایپ بگو:** «الان فقط یک تغییر — save — refresh — چه فرقی دیدید؟»

**اشتباه عمدی (یک بار):** یک selector اشتباه یا property روی فرزند نادرست — خطا را با کلاس debug کنید.

---

## ۴) نمایش در مرورگر و DevTools

- جزوه `22-practice.html` را کنار live بگذارید و پارagraph به paragraph جلو بروید.
- DevTools → Elements → computed styles؛ برای Flex/Grid overlay را فعال کنید.
- عرض viewport را باریک و پهن کنید — رفتار واکنش‌گرا را **قبل** media query هم بحث کنید اگر relevant است.

---

## ۵) سؤال کلاسی

- «ایده اصلی این درس در یک جمله چیست؟»  
  **پاسخ:** این پروژه مهم‌ترین مباحث دوره را کنار هم می‌گذارد: آرایه اشیا، متدهای آرایه، تابع پیکانی، DOM، رویداد و فرم. اول نسخه زن…
- «اگر کد را روی عنصر اشتباه بگذاریم چه می‌شود؟»  
  **پاسخ:** معمولاً هیچ تغییری نمی‌بینیم یا layout غیرمنتظره می‌شود — DevTools کمک می‌کند.

---

## ۶) اشتباهات رایج

- **اشتباه:** property را روی item به‌جای container (در Flex/Grid).  
  **درست:** ابتدا والد layout را تنظیم کنید.
- **اشتباه:** فراموش کردن `lang="fa"` و `dir="rtl"` در live.  
  **درست:** همیشه در HTML کلاس RTL بنویسید.

---

## ۷) mini-project جلسه

«۵–۱۰ دقیقه: همان ایده را در یک کامپوننت کوچک **خودتان** تکرار کنید — مثلاً navbar، کارت، یا یک تابع JS — بدون کپی کامل از جزوه. فقط وقتی گیر کردید به Live کلاس نگاه کنید.»

اگر ماژول پروژه است (۰۹ یا ۱۳): «یک section از `index.html` پروژه را امروز complete کنید و در Elements outline معنایی را چک کنید.»

---


---

## ۸) جمع‌بندی مدرس و سؤالات پایانی

1. مهم‌ترین ایده این جلسه چه بود؟  
   **پاسخ راهنما:** از بخش مفهوم و سؤالات کلاسی بالا.

2. یک اشتباه رایج که امروز دیدیم؟  
   **پاسخ راهنما:** از بخش اشتباهات.

3. چطور در پروژه خودتان همین الگو را به کار می‌برید؟  
   **پاسخ راهنما:** mini-project انتهای درس.

**پیام پایانی:**

«هدف حفظ تعریف نبود — هدف این بود که بتوانید همین ایده را در پروژه خودتان پیاده کنید؛ با Console و DevTools باز.»

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. همان مثال Live را بدون نگاه کردن یک بار دیگر بنویسید.
2. جزوه را باز کنید و خروجی مرورگر/Console را با پیش‌بینی خودتان مقایسه کنید.

### متوسط
3. یک variation کوچک روی مثال کلاس (مقدار دیگر، یک selector دیگر، یک عنصر DOM دیگر).
4. تمرین موضوعی در [`quizzes/`](../../quizzes/README.md) همان ماژول.

### چالشی
5. mini-project انتهای درس را کامل کنید و برای یک همکلاسی توضیح دهید **چرا** این راه‌حل کار می‌کند.

---

## انتقال به درس بعد

«این بخش را بستیم؛ قدم بعد را از quizzes بردارید.»  
→ [ماژول بعد](../../12-JS-پیشرفته/)
