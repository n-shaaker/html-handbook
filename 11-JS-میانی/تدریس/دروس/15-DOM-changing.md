# سناریوی تدریس درس 15: DOM changing

**صفحه جزوه:** [`pages/15-dom-changing.html`](../../pages/15-dom-changing.html)
**پیش‌نیاز مفهومی:** درس 14
**مدت پیشنهادی:** حدود 50 دقیقه
**هدف جلسه:** درس 15 — 15-dom-changing.html

**چرخه ثابت تدریس (در کل جلسه تکرار کن):**  
مفهوم → کد → نتیجه در مرورگر/Console → سؤال چالشی → راه‌حل

| موضوع | زمان |
|------|------|
| شروع و مسئله واقعی | ۸–۱۰ دقیقه |
| Live Coding | ۲۰–۲۵ دقیقه |
| نمایش و DevTools | ۸ دقیقه |
| سؤالات کلاسی | ۱۰ دقیقه |
| mini-project / جمع‌بندی | ۱۰–۱۵ دقیقه |
| **مجموع** | **~50 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله قبل از تعریف

اول با **مسئله** شروع کن — نه با لیست property.

«بعد از پیدا کردن عنصر، معمولاً می‌خواهید متن، ویژگی HTML یا کلاس CSS آن را عوض کنید. متنی که از کاربر آمده را با textContent بنویسید تا به‌صورت نوشته دیده شود. کلاس‌ها ظاهر را از CSS می‌گیرند و JavaScript فقط بود و نبود آن‌ها را عوض می‌کند. ویژگی‌هایی مثل href ، value و disabled رفتار خود عنصر را تغییر می‌دهند.»

«const link = document.querySelector("#demo-link"); console.log(link.getAttribute("href")); // https://developer.mozilla.org/ link.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"); link.textContent = "مستندات DOM در MDN"; console.log(link.href); // آدرس جدید const back = document.querySelector("#back-link"); console.log(back.getAttribute("href")); // ../index.html ← همان چیزی که در HTML نوشته شده console.log(back.href); // آدرس کامل؛ حروف فارسی مسیر به شکل %D8%... کدگذاری می‌شوند const product = document.querySelector("#product"); console.log(product.dataset.price, product.dataset.color); // 120000 آبی console.log(typeof product.dataset.price); // string ← برای حساب Number(...) لازم است مستندات MDN — فهرست درس‌ها محصول: کوله‌پشتی (data-price و data-color)»

«getAttribute("href") دقیقاً متنی را برمی‌گرداند که در HTML نوشته شده؛ ولی ویژگی link.href آدرس کامل را می‌دهد (آدرس نسبی را به آدرس مطلق تبدیل می‌کند). مقدار dataset همیشه رشته است.»

«const commentInput = document.getElementById("comment-input"); const previewBtn = document.getElementById("preview-btn"); const preview = document.getElementById("preview"); previewBtn.addEventListener("click", () => { preview.textContent = commentInput.value; // ✔ امن: تگ‌ها به شکل متن نمایش داده می‌شوند // preview.innerHTML = commentInput.value; // ✖ خطرناک: کد کاربر اجرا می‌شود (XSS) }); مقدار کادر، متنی است که کاربر نوشته، حتی اگر داخلش علامت تگ باشد. textContent آن را به‌صورت نویسه نشان می‌دهد و مرورگر تگ را اجرا نمی‌کند. اگر همان رشته را به innerHTML بدهید، مرورگر آن را HTML تفسیر می‌کند و این برای متن کاربر ناامن است.»

**روی جزوه این عناوین را دنبال کنید:** *۱۵) DOM: تغییر محتوا، ویژگی و ظاهر* · *مثال ۱: ویژگی‌ها* · *textContent یا innerHTML؟* · *مثال ۲: classList (روش پیشنهادی برای تغییر ظاهر)*

**چرخه این بخش:** نشان بده → دانشجو حدس بزند → یک خط کد → refresh.

---

## ۲) مفهوم — حرف قابل گفتن سر کلاس

«بچه‌ها، جزوه را باز کنید؛ من روی همان مثال live جلو می‌روم. هر بار که property عوض می‌شود، در DevTools overlay (Flex/Grid) یا Computed styles را نگاه کنید.»

«const link = document.querySelector("#demo-link"); console.log(link.getAttribute("href")); // https://developer.mozilla.org/ link.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"); link.textContent = "مستندات DOM در MDN"; console.log(link.href); // آدرس جدید const back = document.querySelector("#back-link"); console.log(back.getAttribute("href")); // ../index.html ← همان چیزی که در HTML نوشته شده console.log(back.href); // آدرس کامل؛ حروف فارسی مسیر به شکل %D8%... کدگذاری می‌شوند const product = document.querySelector("#product"); console.log(product.dataset.price, product.dataset.color); // 120000 آبی console.log(typeof product.dataset.price); // string ← برای حساب Number(...) لازم است مستندات MDN — فهرست درس‌ها محصول: کوله‌پشتی (data-price و data-color)»

«getAttribute("href") دقیقاً متنی را برمی‌گرداند که در HTML نوشته شده؛ ولی ویژگی link.href آدرس کامل را می‌دهد (آدرس نسبی را به آدرس مطلق تبدیل می‌کند). مقدار dataset همیشه رشته است.»

«const commentInput = document.getElementById("comment-input"); const previewBtn = document.getElementById("preview-btn"); const preview = document.getElementById("preview"); previewBtn.addEventListener("click", () => { preview.textContent = commentInput.value; // ✔ امن: تگ‌ها به شکل متن نمایش داده می‌شوند // preview.innerHTML = commentInput.value; // ✖ خطرناک: کد کاربر اجرا می‌شود (XSS) }); مقدار کادر، متنی است که کاربر نوشته، حتی اگر داخلش علامت تگ باشد. textContent آن را به‌صورت نویسه نشان می‌دهد و مرورگر تگ را اجرا نمی‌کند. اگر همان رشته را به innerHTML بدهید، مرورگر آن را HTML تفسیر می‌کند و این برای متن کاربر ناامن است.»

اگر دانشجو گفت «حفظ کنم؟» بگو: «نه — **مسئله** را بشناسید؛ property نامش را بعداً هم از MDN پیدا می‌کنید.»

---

## ۳) Live Coding — مرحله‌به‌مرحله

«فایل live جدا می‌سازم تا index پروژه قاطی نشود — مثلاً `تدریس/live/` در همین ماژول.»

**مرحله 1 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
const link = document.querySelector("#demo-link");
console.log(link.getAttribute("href"));    // https://developer.mozilla.org/

link.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model");
link.textContent = "مستندات DOM در MDN";
console.log(link.href);                    // آدرس جدید

const back = document.querySelector("#back-link");
console.log(back.getAttribute("href"));    // ../index.html ← همان چیزی که در HTML نوشته شده
console.log(back.href);                    // آدرس کامل؛ حروف فارسی مسیر به شکل %D8%... کدگذاری می‌شوند

const product = document.querySelector("#product");
console.log(product.dataset.price, product.dataset.color);   // 120000 آبی
console.log(typeof product.dataset.price);                   // string ← برای حساب Number(...) لازم است
```

**مرحله 2 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
const commentInput = document.getElementById("comment-input");
const previewBtn = document.getElementById("preview-btn");
const preview = document.getElementById("preview");

previewBtn.addEventListener("click", () => {
  preview.textContent = commentInput.value;   // ✔ امن: تگ‌ها به شکل متن نمایش داده می‌شوند
  // preview.innerHTML = commentInput.value;  // ✖ خطرناک: کد کاربر اجرا می‌شود (XSS)
});
```

**مرحله 3 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
const box = document.getElementById("cls-box");
const addBtn = document.getElementById("cls-add");
const removeBtn = document.getElementById("cls-remove");
const toggleBtn = document.getElementById("cls-toggle");
const checkBtn = document.getElementById("cls-check");

addBtn.addEventListener("click", () => box.classList.add("active"));
removeBtn.addEventListener("click", () => box.classList.remove("active"));
toggleBtn.addEventListener("click", () => box.classList.toggle("active"));
checkBtn.addEventListener("click", () => {
  box.textContent = "کلاس active دارد؟ " + box.classList.contains("active");
});
```


**در حین تایپ بگو:** «الان فقط یک تغییر — save — refresh — چه فرقی دیدید؟»

**اشتباه عمدی (یک بار):** یک selector اشتباه یا property روی فرزند نادرست — خطا را با کلاس debug کنید.

---

## ۴) نمایش در مرورگر و DevTools

- جزوه `15-dom-changing.html` را کنار live بگذارید و پارagraph به paragraph جلو بروید.
- DevTools → Elements → computed styles؛ برای Flex/Grid overlay را فعال کنید.
- عرض viewport را باریک و پهن کنید — رفتار واکنش‌گرا را **قبل** media query هم بحث کنید اگر relevant است.

---

## ۵) سؤال کلاسی

- «ایده اصلی این درس در یک جمله چیست؟»  
  **پاسخ:** بعد از پیدا کردن عنصر، معمولاً می‌خواهید متن، ویژگی HTML یا کلاس CSS آن را عوض کنید. متنی که از کاربر آمده را با textCon…
- «اگر کد را روی عنصر اشتباه بگذاریم چه می‌شود؟»  
  **پاسخ:** معمولاً هیچ تغییری نمی‌بینیم یا layout غیرمنتظره می‌شود — DevTools کمک می‌کند.

---

## ۶) اشتباهات رایج

- append vs appendChild
- remove leak

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

«DOM events»
---

---
