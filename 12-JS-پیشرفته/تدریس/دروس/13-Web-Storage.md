# سناریوی تدریس درس 13: Web Storage

**صفحه جزوه:** [`pages/13-web-storage.html`](../../pages/13-web-storage.html)
**پیش‌نیاز مفهومی:** درس 12
**مدت پیشنهادی:** حدود 55 دقیقه
**هدف جلسه:** درس 13 — 13-web-storage.html

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

«با localStorage می‌توان داده را در مرورگر کاربر ذخیره کرد تا با بستن صفحه پاک نشود.»

«داده هر سایت جداست: سایت دیگری نمی‌تواند localStorage سایت شما را بخواند. هر دو، متدهای یکسانی دارند؛ یعنی هر جا localStorage نوشته شده، می‌توانید sessionStorage بگذارید.»

«localStorage.setItem("username", "سارا"); console.log(localStorage.getItem("username")); // سارا localStorage.removeItem("username"); console.log(localStorage.getItem("username")); // null ← کلیدی که وجود ندارد localStorage.setItem("age", 25); // عدد خودکار به رشته تبدیل می‌شود console.log(typeof localStorage.getItem("age")); // string setItem یک رشته را با یک کلید در حافظهٔ محلی مرورگر ذخیره می‌کند و بعد از بستن صفحه هم می‌ماند. getItem همان رشته را برمی‌گرداند و اگر کلید نباشد null می‌دهد. removeItem فقط همان کلید را پاک می‌کند. عدد را هم به رشته تبدیل می‌کند؛ اگر بعداً جمع لازم دارید باید آن را با Number برگردانید.»

«ذخیره شیء و آرایه با JSON const settings = { theme: "dark", fontSize: 18, langs: ["fa", "en"] }; localStorage.setItem("settings", JSON.stringify(settings)); // شیء ← متن const saved = JSON.parse(localStorage.getItem("settings")); // متن ← شیء console.log(saved.theme, saved.langs); // dark ["fa","en"] حافظهٔ محلی فقط رشته نگه می‌دارد. شیء و آرایه را اول با JSON.stringify به متن تبدیل می‌کنیم و هنگام خواندن با JSON.parse برمی‌گردانیم. بعد از parse، saved.langs دوباره آرایه است و می‌شود عضوهایش را جدا خواند.»

**روی جزوه این عناوین را دنبال کنید:** *۱۳) ذخیره‌سازی در مرورگر (localStorage)* · *ذخیره رشته* · *ذخیره شیء و آرایه با JSON* · *خواندن و نوشتن امن با try...catch*

**چرخه این بخش:** نشان بده → دانشجو حدس بزند → یک خط کد → refresh.

---

## ۲) مفهوم — حرف قابل گفتن سر کلاس

«بچه‌ها، جزوه را باز کنید؛ من روی همان مثال live جلو می‌روم. هر بار که property عوض می‌شود، در DevTools overlay (Flex/Grid) یا Computed styles را نگاه کنید.»

«داده هر سایت جداست: سایت دیگری نمی‌تواند localStorage سایت شما را بخواند. هر دو، متدهای یکسانی دارند؛ یعنی هر جا localStorage نوشته شده، می‌توانید sessionStorage بگذارید.»

«localStorage.setItem("username", "سارا"); console.log(localStorage.getItem("username")); // سارا localStorage.removeItem("username"); console.log(localStorage.getItem("username")); // null ← کلیدی که وجود ندارد localStorage.setItem("age", 25); // عدد خودکار به رشته تبدیل می‌شود console.log(typeof localStorage.getItem("age")); // string setItem یک رشته را با یک کلید در حافظهٔ محلی مرورگر ذخیره می‌کند و بعد از بستن صفحه هم می‌ماند. getItem همان رشته را برمی‌گرداند و اگر کلید نباشد null می‌دهد. removeItem فقط همان کلید را پاک می‌کند. عدد را هم به رشته تبدیل می‌کند؛ اگر بعداً جمع لازم دارید باید آن را با Number برگردانید.»

«ذخیره شیء و آرایه با JSON const settings = { theme: "dark", fontSize: 18, langs: ["fa", "en"] }; localStorage.setItem("settings", JSON.stringify(settings)); // شیء ← متن const saved = JSON.parse(localStorage.getItem("settings")); // متن ← شیء console.log(saved.theme, saved.langs); // dark ["fa","en"] حافظهٔ محلی فقط رشته نگه می‌دارد. شیء و آرایه را اول با JSON.stringify به متن تبدیل می‌کنیم و هنگام خواندن با JSON.parse برمی‌گردانیم. بعد از parse، saved.langs دوباره آرایه است و می‌شود عضوهایش را جدا خواند.»

اگر دانشجو گفت «حفظ کنم؟» بگو: «نه — **مسئله** را بشناسید؛ property نامش را بعداً هم از MDN پیدا می‌کنید.»

---

## ۳) Live Coding — مرحله‌به‌مرحله

«فایل live جدا می‌سازم تا index پروژه قاطی نشود — مثلاً `تدریس/live/` در همین ماژول.»

**مرحله 1 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
localStorage.setItem("username", "سارا");
console.log(localStorage.getItem("username"));   // سارا
localStorage.removeItem("username");
console.log(localStorage.getItem("username"));   // null ← کلیدی که وجود ندارد

localStorage.setItem("age", 25);                  // عدد خودکار به رشته تبدیل می‌شود
console.log(typeof localStorage.getItem("age"));  // string
```

**مرحله 2 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
const settings = { theme: "dark", fontSize: 18, langs: ["fa", "en"] };

localStorage.setItem("settings", JSON.stringify(settings));    // شیء ← متن

const saved = JSON.parse(localStorage.getItem("settings"));    // متن ← شیء
console.log(saved.theme, saved.langs);                         // dark ["fa","en"]
```

**مرحله 3 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
function loadJSON(key, fallback) {
  const text = localStorage.getItem(key);
  if (text === null) return fallback;            // هنوز چیزی ذخیره نشده
  try {
    return JSON.parse(text);
  } catch (err) {
    console.warn(`داده «${key}» خراب است؛ مقدار پیش‌فرض استفاده شد.`);
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {                                // مثلاً پر شدن فضا
    console.error("ذخیره ناموفق بود:", err.name);
    return false;
  }
}

localStorage.setItem("demo-cart", "{خراب");      // شبیه‌سازی داده خراب
console.log(loadJSON("demo-cart", []));          // ⚠ هشدار و سپس []

saveJSON("demo-cart", [{ id: 1, qty: 2 }]);
console.log(loadJSON("demo-cart", []));          // [{"id":1,"qty":2}]
console.log(loadJSON("not-saved-yet", { theme: "light" }));   // {"theme":"light"}
```


**در حین تایپ بگو:** «الان فقط یک تغییر — save — refresh — چه فرقی دیدید؟»

**اشتباه عمدی (یک بار):** یک selector اشتباه یا property روی فرزند نادرست — خطا را با کلاس debug کنید.

---

## ۴) نمایش در مرورگر و DevTools

- جزوه `13-web-storage.html` را کنار live بگذارید و پارagraph به paragraph جلو بروید.
- DevTools → Elements → computed styles؛ برای Flex/Grid overlay را فعال کنید.
- عرض viewport را باریک و پهن کنید — رفتار واکنش‌گرا را **قبل** media query هم بحث کنید اگر relevant است.

---

## ۵) سؤال کلاسی

- «ایده اصلی این درس در یک جمله چیست؟»  
  **پاسخ:** با localStorage می‌توان داده را در مرورگر کاربر ذخیره کرد تا با بستن صفحه پاک نشود.
- «اگر کد را روی عنصر اشتباه بگذاریم چه می‌شود؟»  
  **پاسخ:** معمولاً هیچ تغییری نمی‌بینیم یا layout غیرمنتظره می‌شود — DevTools کمک می‌کند.

---

## ۶) اشتباهات رایج

- quota
- secrets

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

«regexp»
---

---
