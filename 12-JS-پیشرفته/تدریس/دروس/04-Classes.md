# سناریوی تدریس درس 4: Classes

**صفحه جزوه:** [`pages/04-classes.html`](../../pages/04-classes.html)
**پیش‌نیاز مفهومی:** درس 3
**مدت پیشنهادی:** حدود 55 دقیقه
**هدف جلسه:** درس 4 — 04-classes.html

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

«کلاس یک قالب (نقشه) برای ساختن اشیای مشابه است. از روی یک کلاس می‌توان هر تعداد شیء (نمونه / instance) ساخت.»

«class Car { constructor(brand, year) { // موقع ساختن شیء اجرا می‌شود this.brand = brand; this.year = year; } age() { // متد return new Date().getFullYear() - this.year; } info() { return `${this.brand} مدل ${this.year} (${this.age()} ساله)`; } } const car1 = new Car("پژو", 2015); const car2 = new Car("تویوتا", 2020); console.log(car1.info()); // پژو مدل 2015 (... ساله) console.log(car2.info()); // تویوتا مدل 2020 (... ساله) console.log(car1 instanceof Car); // true constructor هنگام new اجرا می‌شود و ویژگی‌های همان نمونه را روی this می‌گذارد. age و info متد هستند و برای هر نمونه جدا کپی نمی‌شوند؛ از روی شیء ساخته‌شده صدا زده می‌شوند. instanceof بررسی می‌کند شیء با آن کلاس ساخته شده است یا نه.»

«سن خودرو از روی سال جاری سیستم حساب می‌شود؛ پس عددی که شما می‌بینید ممکن است با هم‌کلاسی‌تان در سال دیگر فرق کند. متدهایی مثل age و info یک بار روی Car.prototype ساخته می‌شوند و همه نمونه‌ها از همان یک نسخه استفاده می‌کنند.»

«getter (با get ) مقداری را «محاسبه» می‌کند ولی مثل یک ویژگی معمولی و بدون پرانتز خوانده می‌شود. setter (با set ) موقع مقداردهی با = اجرا می‌شود و جای خوبی برای تبدیل یا اعتبارسنجی مقدار است.»

**روی جزوه این عناوین را دنبال کنید:** *۴) کلاس‌ها (Classes)* · *getter و setter* · *مثال کاربردی: کلاس سبد خرید* · *مثال زنده: ساختن اشیا از روی کلاس*

**چرخه این بخش:** نشان بده → دانشجو حدس بزند → یک خط کد → refresh.

---

## ۲) مفهوم — حرف قابل گفتن سر کلاس

«بچه‌ها، جزوه را باز کنید؛ من روی همان مثال live جلو می‌روم. هر بار که property عوض می‌شود، در DevTools overlay (Flex/Grid) یا Computed styles را نگاه کنید.»

«class Car { constructor(brand, year) { // موقع ساختن شیء اجرا می‌شود this.brand = brand; this.year = year; } age() { // متد return new Date().getFullYear() - this.year; } info() { return `${this.brand} مدل ${this.year} (${this.age()} ساله)`; } } const car1 = new Car("پژو", 2015); const car2 = new Car("تویوتا", 2020); console.log(car1.info()); // پژو مدل 2015 (... ساله) console.log(car2.info()); // تویوتا مدل 2020 (... ساله) console.log(car1 instanceof Car); // true constructor هنگام new اجرا می‌شود و ویژگی‌های همان نمونه را روی this می‌گذارد. age و info متد هستند و برای هر نمونه جدا کپی نمی‌شوند؛ از روی شیء ساخته‌شده صدا زده می‌شوند. instanceof بررسی می‌کند شیء با آن کلاس ساخته شده است یا نه.»

«سن خودرو از روی سال جاری سیستم حساب می‌شود؛ پس عددی که شما می‌بینید ممکن است با هم‌کلاسی‌تان در سال دیگر فرق کند. متدهایی مثل age و info یک بار روی Car.prototype ساخته می‌شوند و همه نمونه‌ها از همان یک نسخه استفاده می‌کنند.»

«getter (با get ) مقداری را «محاسبه» می‌کند ولی مثل یک ویژگی معمولی و بدون پرانتز خوانده می‌شود. setter (با set ) موقع مقداردهی با = اجرا می‌شود و جای خوبی برای تبدیل یا اعتبارسنجی مقدار است.»

اگر دانشجو گفت «حفظ کنم؟» بگو: «نه — **مسئله** را بشناسید؛ property نامش را بعداً هم از MDN پیدا می‌کنید.»

---

## ۳) Live Coding — مرحله‌به‌مرحله

«فایل live جدا می‌سازم تا index پروژه قاطی نشود — مثلاً `تدریس/live/` در همین ماژول.»

**مرحله 1 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
class Car {
  constructor(brand, year) {      // موقع ساختن شیء اجرا می‌شود
    this.brand = brand;
    this.year = year;
  }

  age() {                         // متد
    return new Date().getFullYear() - this.year;
  }

  info() {
    return `${this.brand} مدل ${this.year} (${this.age()} ساله)`;
  }
}

const car1 = new Car("پژو", 2015);
const car2 = new Car("تویوتا", 2020);

console.log(car1.info());            // پژو مدل 2015 (... ساله)
console.log(car2.info());            // تویوتا مدل 2020 (... ساله)
console.log(car1 instanceof Car);    // true
```

**مرحله 2 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {                 // مثل ویژگی خوانده می‌شود، نه با ()
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(f) {
    this.celsius = (f - 32) / 1.8;
  }
}

const t = new Temperature(25);
console.log(t.fahrenheit);    // 77   ← getter اجرا شد
t.fahrenheit = 212;           // setter اجرا شد
console.log(t.celsius);       // 100
```

**مرحله 3 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  add(name, price, qty = 1) {
    const found = this.items.find(item => item.name === name);
    if (found) found.qty += qty;            // کالای تکراری: فقط تعداد زیاد شود
    else this.items.push({ name, price, qty });
    return this;                            // برگرداندن this ← امکان زنجیره‌ای صدا زدن
  }

  remove(name) {
    this.items = this.items.filter(item => item.name !== name);
    return this;
  }

  get count() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
}

const cart = new ShoppingCart();
cart.add("کتاب", 250000).add("خودکار", 30000, 3).add("کتاب", 250000);
console.log(cart.count);                 // 5
console.log(cart.total);                 // 590000
cart.remove("خودکار");
console.log(cart.count, cart.total);     // 2 500000
```


**در حین تایپ بگو:** «الان فقط یک تغییر — save — refresh — چه فرقی دیدید؟»

**اشتباه عمدی (یک بار):** یک selector اشتباه یا property روی فرزند نادرست — خطا را با کلاس debug کنید.

---

## ۴) نمایش در مرورگر و DevTools

- جزوه `04-classes.html` را کنار live بگذارید و پارagraph به paragraph جلو بروید.
- DevTools → Elements → computed styles؛ برای Flex/Grid overlay را فعال کنید.
- عرض viewport را باریک و پهن کنید — رفتار واکنش‌گرا را **قبل** media query هم بحث کنید اگر relevant است.

---

## ۵) سؤال کلاسی

- «ایده اصلی این درس در یک جمله چیست؟»  
  **پاسخ:** کلاس یک قالب (نقشه) برای ساختن اشیای مشابه است. از روی یک کلاس می‌توان هر تعداد شیء (نمونه / instance) ساخت.
- «اگر کد را روی عنصر اشتباه بگذاریم چه می‌شود؟»  
  **پاسخ:** معمولاً هیچ تغییری نمی‌بینیم یا layout غیرمنتظره می‌شود — DevTools کمک می‌کند.

---

## ۶) اشتباهات رایج

- arrow field confusion

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

«inheritance»
---

---
