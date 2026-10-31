# سناریوی تدریس درس 2: Closures

**صفحه جزوه:** [`pages/02-closures.html`](../../pages/02-closures.html)
**پیش‌نیاز مفهومی:** درس 1
**مدت پیشنهادی:** حدود 55 دقیقه
**هدف جلسه:** درس 2 — 02-closures.html

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

«Closure یعنی تابع، متغیرهای محیطی را که در آن ساخته شده «به خاطر می‌سپارد»؛ حتی بعد از اینکه تابع بیرونی تمام شده باشد. تابع داخلی به خود متغیر (نه یک کپی از مقدارش) دسترسی دارد؛ پس اگر متغیر تغییر کند، تابع مقدار جدید را می‌بیند.»

«function makeCounter() { let count = 0; // این متغیر از بیرون قابل دسترسی نیست return function () { count++; // ولی تابع داخلی آن را به خاطر دارد return count; }; } const counterA = makeCounter(); const counterB = makeCounter(); console.log(counterA()); // 1 console.log(counterA()); // 2 console.log(counterA()); // 3 console.log(counterB()); // 1 ← شمارنده جدا متغیر count داخل makeCounter ساخته می‌شود و بعد از پایان آن تابع هم، تا وقتی تابع برگشتی زنده است، از بین نمی‌رود. هر بار صدا زدن تابع برگشتی یکی به همان count اضافه می‌کند. counterA و counterB دو بار جدا makeCounter را صدا زده‌اند، پس هر کدام شمارندهٔ خودش را دارد.»

«داده خصوصی (Private) با closure مثال کاربردی: کیف پول که موجودی‌اش فقط از راه متدها قابل تغییر است و کسی نمی‌تواند از بیرون بنویسد balance = 1000000 .»

«function createWallet(initial) { let balance = initial; // خصوصی؛ فقط متدهای زیر به آن دسترسی دارند return { deposit(amount) { balance += amount; return balance; }, withdraw(amount) { if (amount > balance) return "موجودی کافی نیست"; balance -= amount; return balance; }, getBalance() { return balance; } }; } const wallet = createWallet(1000); console.log(wallet.deposit(500)); // 1500 console.log(wallet.withdraw(2000)); // موجودی کافی نیست console.log(wallet.getBalance()); // 1500 console.log(wallet.balance); // undefined ← مستقیم قابل دسترسی نیست موجودی در متغیر balance است و جزو ویژگی‌های شیء برگشتی نیست. فقط متدهایی که داخل همین تابع ساخته شده‌اند به آن دسترسی دارند. deposit مبلغ را اضافه می‌کند و withdraw اگر موجودی کافی نباشد برداشت را انجام نمی‌دهد. خواندن wallet.balance مقدار undefined می‌دهد، چون چنین ویژگی‌ای روی شیء تعریف نشده است.»

**روی جزوه این عناوین را دنبال کنید:** *۲) بستارها (Closures)* · *داده خصوصی (Private) با closure* · *مثال زنده: دو شمارنده مستقل* · *closure در حلقه: let در مقابل var*

**چرخه این بخش:** نشان بده → دانشجو حدس بزند → یک خط کد → refresh.

---

## ۲) مفهوم — حرف قابل گفتن سر کلاس

«بچه‌ها، جزوه را باز کنید؛ من روی همان مثال live جلو می‌روم. هر بار که property عوض می‌شود، در DevTools overlay (Flex/Grid) یا Computed styles را نگاه کنید.»

«function makeCounter() { let count = 0; // این متغیر از بیرون قابل دسترسی نیست return function () { count++; // ولی تابع داخلی آن را به خاطر دارد return count; }; } const counterA = makeCounter(); const counterB = makeCounter(); console.log(counterA()); // 1 console.log(counterA()); // 2 console.log(counterA()); // 3 console.log(counterB()); // 1 ← شمارنده جدا متغیر count داخل makeCounter ساخته می‌شود و بعد از پایان آن تابع هم، تا وقتی تابع برگشتی زنده است، از بین نمی‌رود. هر بار صدا زدن تابع برگشتی یکی به همان count اضافه می‌کند. counterA و counterB دو بار جدا makeCounter را صدا زده‌اند، پس هر کدام شمارندهٔ خودش را دارد.»

«داده خصوصی (Private) با closure مثال کاربردی: کیف پول که موجودی‌اش فقط از راه متدها قابل تغییر است و کسی نمی‌تواند از بیرون بنویسد balance = 1000000 .»

«function createWallet(initial) { let balance = initial; // خصوصی؛ فقط متدهای زیر به آن دسترسی دارند return { deposit(amount) { balance += amount; return balance; }, withdraw(amount) { if (amount > balance) return "موجودی کافی نیست"; balance -= amount; return balance; }, getBalance() { return balance; } }; } const wallet = createWallet(1000); console.log(wallet.deposit(500)); // 1500 console.log(wallet.withdraw(2000)); // موجودی کافی نیست console.log(wallet.getBalance()); // 1500 console.log(wallet.balance); // undefined ← مستقیم قابل دسترسی نیست موجودی در متغیر balance است و جزو ویژگی‌های شیء برگشتی نیست. فقط متدهایی که داخل همین تابع ساخته شده‌اند به آن دسترسی دارند. deposit مبلغ را اضافه می‌کند و withdraw اگر موجودی کافی نباشد برداشت را انجام نمی‌دهد. خواندن wallet.balance مقدار undefined می‌دهد، چون چنین ویژگی‌ای روی شیء تعریف نشده است.»

اگر دانشجو گفت «حفظ کنم؟» بگو: «نه — **مسئله** را بشناسید؛ property نامش را بعداً هم از MDN پیدا می‌کنید.»

---

## ۳) Live Coding — مرحله‌به‌مرحله

«فایل live جدا می‌سازم تا index پروژه قاطی نشود — مثلاً `تدریس/live/` در همین ماژول.»

**مرحله 1 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
function makeCounter() {
  let count = 0;               // این متغیر از بیرون قابل دسترسی نیست

  return function () {
    count++;                   // ولی تابع داخلی آن را به خاطر دارد
    return count;
  };
}

const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA());   // 1
console.log(counterA());   // 2
console.log(counterA());   // 3
console.log(counterB());   // 1  ← شمارنده جدا
```

**مرحله 2 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
function createWallet(initial) {
  let balance = initial;            // خصوصی؛ فقط متدهای زیر به آن دسترسی دارند

  return {
    deposit(amount) { balance += amount; return balance; },
    withdraw(amount) {
      if (amount > balance) return "موجودی کافی نیست";
      balance -= amount;
      return balance;
    },
    getBalance() { return balance; }
  };
}

const wallet = createWallet(1000);
console.log(wallet.deposit(500));     // 1500
console.log(wallet.withdraw(2000));   // موجودی کافی نیست
console.log(wallet.getBalance());     // 1500
console.log(wallet.balance);          // undefined ← مستقیم قابل دسترسی نیست
```

**مرحله 3 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
function setupCounter(button, display) {
  let clicks = 0;                     // هر شمارنده متغیر خودش را دارد
  button.addEventListener("click", () => {
    clicks++;
    display.textContent = clicks;
  });
}

setupCounter(btnA, displayA);
setupCounter(btnB, displayB);
```


**در حین تایپ بگو:** «الان فقط یک تغییر — save — refresh — چه فرقی دیدید؟»

**اشتباه عمدی (یک بار):** یک selector اشتباه یا property روی فرزند نادرست — خطا را با کلاس debug کنید.

---

## ۴) نمایش در مرورگر و DevTools

- جزوه `02-closures.html` را کنار live بگذارید و پارagraph به paragraph جلو بروید.
- DevTools → Elements → computed styles؛ برای Flex/Grid overlay را فعال کنید.
- عرض viewport را باریک و پهن کنید — رفتار واکنش‌گرا را **قبل** media query هم بحث کنید اگر relevant است.

---

## ۵) سؤال کلاسی

- «ایده اصلی این درس در یک جمله چیست؟»  
  **پاسخ:** Closure یعنی تابع، متغیرهای محیطی را که در آن ساخته شده «به خاطر می‌سپارد»؛ حتی بعد از اینکه تابع بیرونی تمام شده باشد. …
- «اگر کد را روی عنصر اشتباه بگذاریم چه می‌شود؟»  
  **پاسخ:** معمولاً هیچ تغییری نمی‌بینیم یا layout غیرمنتظره می‌شود — DevTools کمک می‌کند.

---

## ۶) اشتباهات رایج

- var in loop old
- over-closure

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

«call bind»
---

---
