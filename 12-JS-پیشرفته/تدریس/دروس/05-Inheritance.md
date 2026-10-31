# سناریوی تدریس درس 5: Inheritance

**صفحه جزوه:** [`pages/05-inheritance.html`](../../pages/05-inheritance.html)
**پیش‌نیاز مفهومی:** درس 4
**مدت پیشنهادی:** حدود 55 دقیقه
**هدف جلسه:** درس 5 — 05-inheritance.html

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

«وراثت یعنی کلاس فرزند رفتار کلاس پدر را به ارث ببرد و فقط تفاوت‌های خودش را اضافه یا جایگزین کند. extends این رابطه را می‌سازد و super سازنده یا متد پدر را صدا می‌زند. در کنار آن، عضو ایستا به خود کلاس تعلق دارد و فیلد خصوصی با # از بیرون کلاس مخفی می‌ماند.»

«کلاس فرزند همه ویژگی‌ها و متدهای کلاس پدر را به ارث می‌برد و می‌تواند چیزهای جدید اضافه یا متدها را بازنویسی (override) کند.»

«class Animal { constructor(name) { this.name = name; } speak() { return `${this.name} صدایی درمی‌آورد.`; } } class Dog extends Animal { constructor(name, breed) { super(name); // اجرای constructor پدر (اجباری، قبل از this) this.breed = breed; } speak() { // بازنویسی متد پدر return `${this.name} (${this.breed}) واق واق می‌کند!`; } } class Cat extends Animal { speak() { return super.speak() + " میو!"; // استفاده از نسخه پدر } } const animals = [new Animal("حیوان"), new Dog("رکس", "ژرمن"), new Cat("پیشی")]; animals.forEach(a => console.log(a.speak())); console.log(animals[1] instanceof Animal); // true ← سگ، حیوان هم هست extends متدهای کلاس پدر را در دسترس فرزند می‌گذارد. در سازندهٔ سگ، super(name) باید پیش از استفاده از this سازندهٔ پدر را اجرا کند تا name ساخته شود و بعد نژاد روی همان شیء ذخیره شود. سگ speak را کاملاً عوض می‌کند. گربه سازندهٔ جدا ندارد و speak پدر را با super.speak() صدا می‌زند و فقط «میو» را به آن اضافه می‌کند. هر سه نمونه در یک آرایه هستند و instanceof Animal برای سگ هم true است، چون در زنجیرهٔ وراثت حیوان مانده است.»

«شکل استفاده از super کجا کار super(...) فقط داخل constructor فرزند constructor پدر را اجرا می‌کند؛ باید قبل از اولین استفاده از this باشد super.method() داخل هر متد فرزند نسخه پدرِ یک متد را صدا می‌زند (مثل Cat بالا) کلاس Cat constructor ندارد؛ در این حالت JavaScript خودش یک constructor پیش‌فرض می‌سازد که همه آرگومان‌ها را به super(...args) می‌دهد. پس فقط وقتی constructor بنویسید که ویژگی جدیدی (مثل breed ) لازم دارید.»

**روی جزوه این عناوین را دنبال کنید:** *۵) وراثت، static و فیلدهای خصوصی* · *وراثت با extends و super* · *متد و ویژگی static* · *فیلد و متد خصوصی با #*

**چرخه این بخش:** نشان بده → دانشجو حدس بزند → یک خط کد → refresh.

---

## ۲) مفهوم — حرف قابل گفتن سر کلاس

«بچه‌ها، جزوه را باز کنید؛ من روی همان مثال live جلو می‌روم. هر بار که property عوض می‌شود، در DevTools overlay (Flex/Grid) یا Computed styles را نگاه کنید.»

«کلاس فرزند همه ویژگی‌ها و متدهای کلاس پدر را به ارث می‌برد و می‌تواند چیزهای جدید اضافه یا متدها را بازنویسی (override) کند.»

«class Animal { constructor(name) { this.name = name; } speak() { return `${this.name} صدایی درمی‌آورد.`; } } class Dog extends Animal { constructor(name, breed) { super(name); // اجرای constructor پدر (اجباری، قبل از this) this.breed = breed; } speak() { // بازنویسی متد پدر return `${this.name} (${this.breed}) واق واق می‌کند!`; } } class Cat extends Animal { speak() { return super.speak() + " میو!"; // استفاده از نسخه پدر } } const animals = [new Animal("حیوان"), new Dog("رکس", "ژرمن"), new Cat("پیشی")]; animals.forEach(a => console.log(a.speak())); console.log(animals[1] instanceof Animal); // true ← سگ، حیوان هم هست extends متدهای کلاس پدر را در دسترس فرزند می‌گذارد. در سازندهٔ سگ، super(name) باید پیش از استفاده از this سازندهٔ پدر را اجرا کند تا name ساخته شود و بعد نژاد روی همان شیء ذخیره شود. سگ speak را کاملاً عوض می‌کند. گربه سازندهٔ جدا ندارد و speak پدر را با super.speak() صدا می‌زند و فقط «میو» را به آن اضافه می‌کند. هر سه نمونه در یک آرایه هستند و instanceof Animal برای سگ هم true است، چون در زنجیرهٔ وراثت حیوان مانده است.»

«شکل استفاده از super کجا کار super(...) فقط داخل constructor فرزند constructor پدر را اجرا می‌کند؛ باید قبل از اولین استفاده از this باشد super.method() داخل هر متد فرزند نسخه پدرِ یک متد را صدا می‌زند (مثل Cat بالا) کلاس Cat constructor ندارد؛ در این حالت JavaScript خودش یک constructor پیش‌فرض می‌سازد که همه آرگومان‌ها را به super(...args) می‌دهد. پس فقط وقتی constructor بنویسید که ویژگی جدیدی (مثل breed ) لازم دارید.»

اگر دانشجو گفت «حفظ کنم؟» بگو: «نه — **مسئله** را بشناسید؛ property نامش را بعداً هم از MDN پیدا می‌کنید.»

---

## ۳) Live Coding — مرحله‌به‌مرحله

«فایل live جدا می‌سازم تا index پروژه قاطی نشود — مثلاً `تدریس/live/` در همین ماژول.»

**مرحله 1 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} صدایی درمی‌آورد.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);              // اجرای constructor پدر (اجباری، قبل از this)
    this.breed = breed;
  }
  speak() {                   // بازنویسی متد پدر
    return `${this.name} (${this.breed}) واق واق می‌کند!`;
  }
}

class Cat extends Animal {
  speak() {
    return super.speak() + " میو!";   // استفاده از نسخه پدر
  }
}

const animals = [new Animal("حیوان"), new Dog("رکس", "ژرمن"), new Cat("پیشی")];
animals.forEach(a => console.log(a.speak()));
console.log(animals[1] instanceof Animal);   // true ← سگ، حیوان هم هست
```

**مرحله 2 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
class MathHelper {
  static PI = 3.14159;

  static circleArea(r) {
    return MathHelper.PI * r * r;
  }
}

console.log(MathHelper.circleArea(2));   // 12.56636
const m = new MathHelper();
console.log(m.circleArea);    // undefined ← روی نمونه نیست
```

**مرحله 3 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
class BankAccount {
  #balance = 0;                 // فیلد خصوصی: فقط داخل کلاس قابل دسترسی

  constructor(owner, initial) {
    this.owner = owner;
    this.#balance = initial;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("مبلغ نامعتبر است");
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("موجودی کافی نیست");
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {                // تنها راه خواندن موجودی از بیرون
    return this.#balance;
  }
}

const acc = new BankAccount("سارا", 500);
console.log(acc.deposit(200));          // 700

try {
  acc.withdraw(5000);
} catch (err) {
  console.log("خطا:", err.message);    // خطا: موجودی کافی نیست
}

acc.balance = 1000000;                  // یک ویژگی معمولی تازه می‌سازد؛ ربطی به #balance ندارد
console.log(acc.getBalance());          // 700
console.log(Object.keys(acc));          // ["owner","balance"] ← فیلد خصوصی #balance دیده نمی‌شود
// console.log(acc.#balance);           // ✖ SyntaxError
```


**در حین تایپ بگو:** «الان فقط یک تغییر — save — refresh — چه فرقی دیدید؟»

**اشتباه عمدی (یک بار):** یک selector اشتباه یا property روی فرزند نادرست — خطا را با کلاس debug کنید.

---

## ۴) نمایش در مرورگر و DevTools

- جزوه `05-inheritance.html` را کنار live بگذارید و پارagraph به paragraph جلو بروید.
- DevTools → Elements → computed styles؛ برای Flex/Grid overlay را فعال کنید.
- عرض viewport را باریک و پهن کنید — رفتار واکنش‌گرا را **قبل** media query هم بحث کنید اگر relevant است.

---

## ۵) سؤال کلاسی

- «ایده اصلی این درس در یک جمله چیست؟»  
  **پاسخ:** وراثت یعنی کلاس فرزند رفتار کلاس پدر را به ارث ببرد و فقط تفاوت‌های خودش را اضافه یا جایگزین کند. extends این رابطه را م…
- «اگر کد را روی عنصر اشتباه بگذاریم چه می‌شود؟»  
  **پاسخ:** معمولاً هیچ تغییری نمی‌بینیم یا layout غیرمنتظره می‌شود — DevTools کمک می‌کند.

---

## ۶) اشتباهات رایج

- forget super()

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

«Set Map»
---

---
