# سناریوی تدریس درس 11: fetch

**صفحه جزوه:** [`pages/11-fetch.html`](../../pages/11-fetch.html)
**پیش‌نیاز مفهومی:** درس 10
**مدت پیشنهادی:** حدود 55 دقیقه
**هدف جلسه:** درس 11 — 11-fetch.html

**چرخه ثابت تدریس (در کل جلسه تکرار کن):**  
مفهوم → کد → نتیجه در مرورگر/Console → سؤال چالشی → راه‌حل

| موضوع | زمان |
|------|------|
| شروع و مسئله واقعی | ۸–۱۰ دقیقه |
| Live Coding | ۲۰–۲۵ دقیقه |
| نمایش و DevTools | ۸ دقیقه |
| سؤالات کلاسی | ۱۰ دقیقه |
| mini-project / جمع‌بندی | ۱۰–۱۵ دقیقه |
| **مجموع** | **~55 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله قبل از تعریف

اول با **مسئله** شروع کن — نه با لیست property.

«fetch از مرورگر به یک نشانی درخواست می‌فرستد و پاسخ را به‌صورت Promise برمی‌گرداند. با آن هم داده می‌خوانید و هم، اگر سرور اجازه بدهد، داده می‌فرستید. چون نتیجه Promise است، معمولاً داخل تابع async با await نوشته می‌شود. رسیدن پاسخ به‌تنهایی یعنی همه‌چیز درست بوده است؛ وضعیت‌هایی مثل ۴۰۴ را باید جدا بررسی کنید.»

«async function getPosts() { const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3"); const data = await response.json(); // تبدیل بدنه پاسخ از JSON به شیء console.log(data); // آرایه‌ای از ۳ پست } fetch درخواست را می‌فرستد و یک Promise برمی‌گرداند که با رسیدن پاسخ resolve می‌شود. await همان پاسخ را در response می‌گذارد. response.json بدنه را از متن JSON به مقدار JavaScript تبدیل می‌کند و خودش هم Promise است، پس آن را هم await می‌کنیم. این تابع وضعیت HTTP را بررسی نکرده است؛ آن بررسی در تابع بعدی است.»

«کد بالا برای شروع خوب است ولی در پروژه واقعی ناقص است: اگر اینترنت قطع باشد، سرور خطای ۴۰۴/۵۰۰ بدهد یا اصلاً جواب ندهد، کاربر هیچ پیامی نمی‌بیند. در ادامه یک تابع کمکی کامل می‌نویسیم.»

«async function fetchJSON(url, options = {}) { let response; try { response = await fetch(url, options); } catch (err) { // fetch فقط وقتی خطا می‌دهد که اصلاً پاسخی نرسد (قطعی شبکه، مسدود شدن) throw new Error("اتصال به سرور برقرار نشد؛ اتصال اینترنت خود را بررسی کنید."); } if (!response.ok) { // ۴۰۴ و ۵۰۰ را خودمان باید خطا حساب کنیم throw new Error(`سرور خطا داد (کد ${response.status}).`); } return response.json(); } اگر شبکه قطع باشد یا درخواست اصلاً به پاسخ نرسد، fetch reject می‌شود و catch پیام اتصال را می‌سازد. پاسخ 404 یا 500 معمولاً reject نمی‌شود؛ response.ok برای وضعیت‌های ۲۰۰ تا ۲۹۹ true است و بقیه را خودمان باید خطا حساب کنیم. فقط بعد از این بررسی، بدنه به JSON تبدیل می‌شود.»

**روی جزوه این عناوین را دنبال کنید:** *۱۱) دریافت داده از سرور (Fetch API)* · *تابع کمکی fetchJSON: بررسی response.ok و پیام خطای فارسی* · *مثال زنده: فهرست کاربران با حالت «در حال بارگذاری» و خطا* · *ارسال داده (POST)*

**چرخه این بخش:** نشان بده → دانشجو حدس بزند → یک خط کد → refresh.

---

## ۲) مفهوم — حرف قابل گفتن سر کلاس

«بچه‌ها، جزوه را باز کنید؛ من روی همان مثال live جلو می‌روم. هر بار که property عوض می‌شود، در DevTools overlay (Flex/Grid) یا Computed styles را نگاه کنید.»

«async function getPosts() { const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3"); const data = await response.json(); // تبدیل بدنه پاسخ از JSON به شیء console.log(data); // آرایه‌ای از ۳ پست } fetch درخواست را می‌فرستد و یک Promise برمی‌گرداند که با رسیدن پاسخ resolve می‌شود. await همان پاسخ را در response می‌گذارد. response.json بدنه را از متن JSON به مقدار JavaScript تبدیل می‌کند و خودش هم Promise است، پس آن را هم await می‌کنیم. این تابع وضعیت HTTP را بررسی نکرده است؛ آن بررسی در تابع بعدی است.»

«کد بالا برای شروع خوب است ولی در پروژه واقعی ناقص است: اگر اینترنت قطع باشد، سرور خطای ۴۰۴/۵۰۰ بدهد یا اصلاً جواب ندهد، کاربر هیچ پیامی نمی‌بیند. در ادامه یک تابع کمکی کامل می‌نویسیم.»

«async function fetchJSON(url, options = {}) { let response; try { response = await fetch(url, options); } catch (err) { // fetch فقط وقتی خطا می‌دهد که اصلاً پاسخی نرسد (قطعی شبکه، مسدود شدن) throw new Error("اتصال به سرور برقرار نشد؛ اتصال اینترنت خود را بررسی کنید."); } if (!response.ok) { // ۴۰۴ و ۵۰۰ را خودمان باید خطا حساب کنیم throw new Error(`سرور خطا داد (کد ${response.status}).`); } return response.json(); } اگر شبکه قطع باشد یا درخواست اصلاً به پاسخ نرسد، fetch reject می‌شود و catch پیام اتصال را می‌سازد. پاسخ 404 یا 500 معمولاً reject نمی‌شود؛ response.ok برای وضعیت‌های ۲۰۰ تا ۲۹۹ true است و بقیه را خودمان باید خطا حساب کنیم. فقط بعد از این بررسی، بدنه به JSON تبدیل می‌شود.»

اگر دانشجو گفت «حفظ کنم؟» بگو: «نه — **مسئله** را بشناسید؛ property نامش را بعداً هم از MDN پیدا می‌کنید.»

---

## ۳) Live Coding — مرحله‌به‌مرحله

«فایل live جدا می‌سازم تا index پروژه قاطی نشود — مثلاً `تدریس/live/` در همین ماژول.»

**مرحله 1 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
  const data = await response.json();     // تبدیل بدنه پاسخ از JSON به شیء
  console.log(data);                      // آرایه‌ای از ۳ پست
}
```

**مرحله 2 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
async function fetchJSON(url, options = {}) {
  let response;
  try {
    response = await fetch(url, options);
  } catch (err) {
    // fetch فقط وقتی خطا می‌دهد که اصلاً پاسخی نرسد (قطعی شبکه، مسدود شدن)
    throw new Error("اتصال به سرور برقرار نشد؛ اتصال اینترنت خود را بررسی کنید.");
  }

  if (!response.ok) {                     // ۴۰۴ و ۵۰۰ را خودمان باید خطا حساب کنیم
    throw new Error(`سرور خطا داد (کد ${response.status}).`);
  }
  return response.json();
}
```

**مرحله 3 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
const API = "https://jsonplaceholder.typicode.com";

async function loadUsers(url) {
  statusEl.textContent = "در حال بارگذاری...";
  list.innerHTML = "";
  // جلوی کلیک دوباره در حین بارگذاری
  loadBtn.disabled = true;
  badBtn.disabled = true;

  try {
    const users = await fetchJSON(url);
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} — ${user.email} — ${user.address.city}`;
      list.append(li);
    });
    statusEl.textContent = `✔ ${users.length} کاربر دریافت شد.`;
  } catch (err) {
    statusEl.textContent = "✖ " + err.message;
  } finally {
    loadBtn.disabled = false;
    badBtn.disabled = false;
  }
}

loadBtn.addEventListener("click", () => loadUsers(`${API}/users`));
badBtn.addEventListener("click", () => loadUsers(`${API}/no-such-page`));     // خطای ۴۰۴
```


**در حین تایپ بگو:** «الان فقط یک تغییر — save — refresh — چه فرقی دیدید؟»

**اشتباه عمدی (یک بار):** یک selector اشتباه یا property روی فرزند نادرست — خطا را با کلاس debug کنید.

---

## ۴) نمایش در مرورگر و DevTools

- جزوه `11-fetch.html` را کنار live بگذارید و پارagraph به paragraph جلو بروید.
- DevTools → Elements → computed styles؛ برای Flex/Grid overlay را فعال کنید.
- عرض viewport را باریک و پهن کنید — رفتار واکنش‌گرا را **قبل** media query هم بحث کنید اگر relevant است.

---

## ۵) سؤال کلاسی

- «ایده اصلی این درس در یک جمله چیست؟»  
  **پاسخ:** fetch از مرورگر به یک نشانی درخواست می‌فرستد و پاسخ را به‌صورت Promise برمی‌گرداند. با آن هم داده می‌خوانید و هم، اگر سر…
- «اگر کد را روی عنصر اشتباه بگذاریم چه می‌شود؟»  
  **پاسخ:** معمولاً هیچ تغییری نمی‌بینیم یا layout غیرمنتظره می‌شود — DevTools کمک می‌کند.

---

## ۶) اشتباهات رایج

- file CORS
- no timeout

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

«modules»
---

---
