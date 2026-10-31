# سناریوی تدریس درس ۵: متغیر const و let

**صفحه جزوه:** [`05-variables.html`](../../pages/05-variables.html)  
**پیش‌نیاز مفهومی:** [`04-Syntax-و-کامنت`](./04-Syntax-و-کامنت.md)  
**مدت پیشنهادی:** حدود ۵۵ دقیقه  
**هدف جلسه:** دانشجو «جعبه برچسب‌دار» متغیر را بفهمد؛ **`const` پیش‌فرض**، **`let` برای reassign**، تفاوت reference/object، block scope و خطای TDZ را در Console ببیند.

**چرخه ثابت تدریس (در کل جلسه تکرار کن):**  
مفهوم → کد → نتیجه در Console → سؤال چالشی → راه‌حل

| موضوع | زمان |
|------|------|
| مسئله قیمت تکراری در کد | ۸ دقیقه |
| const / let / جدول جزوه | ۱۲ دقیقه |
| Live سبد خرید و VAT | ۱۵ دقیقه |
| block scope و var | ۱۰ دقیقه |
| نام‌گذاری + اشتباهات | ۵ دقیقه |
| mini-project + تمرین | ۵ دقیقه |
| **مجموع** | **۵۵ دقیقه** |

---

## ۱) شروع کلاس؛ بدون متغیر همه‌جا را دستی عوض می‌کنیم

«بچه‌ها، Console را باز کنید — F12.

فرض کنید در منوی رستوران سه غذا داریم و برای هر کدام **۹٪ مالیات** اضافه می‌کنیم. بدون متغیر شاید بنویسیم:

```javascript
console.log(420000 * 1.09);
console.log(380000 * 1.09);
console.log(95000 * 1.09);
```

فردا نرخ مالیات عوض شد — باید **سه جا** عدد را عوض کنیم. اگر ده غذا داشتیم؟

**متغیر** یعنی یک **اسم** برای یک **مقدار** — یک بار تعریف، چند بار استفاده. امروز یاد می‌گیریم *چطور* اسم بگذاریم: `const` و `let` — **`var` در کد جدید نمی‌نویسیم.**»

---

## ۲) سه کلمه — جدول جزوه

از [`05-variables.html`](../../pages/05-variables.html) جدول را با کلاس پر کنید:

| کلمه | مقدار بعداً عوض شود؟ | کی استفاده کنیم؟ |
|------|----------------------|------------------|
| `const` | reassign نه | **پیش‌فرض** — هر وقت مقدار ثابت است |
| `let` | بله | شمارنده، جمع موقت، flag |
| `var` | بله | قدیمی — **استفاده نکنید** |

**قانون ساده (tip جزوه):** همیشه با `const` شروع کنید؛ اگر دیدید باید مقدار عوض شود، همان متغیر را `let` کنید (تعریف اولیه را با `let` بزنید از اول اگر می‌دانید reassign دارید).

---

## ۳) Live Coding — VAT و سبد

فایل: `تدریس/live/05-variables.html` — `<script defer src="05-variables.js">`

**HTML:**

```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>Live — const و let</title>
  <script defer src="05-variables.js"></script>
</head>
<body>
  <h1>متغیرها</h1>
  <p>Console را باز کنید.</p>
</body>
</html>
```

**JS — مرحله ۱:**

«اول مالیات را **const** می‌گذاریم — در طول این اسکریپت عوض نمی‌شود.»

```javascript
const VAT_RATE = 0.09;
const dishKebab = 420_000;
const dishJooje = 380_000;

console.log("کباب با مالیات:", dishKebab * (1 + VAT_RATE));
console.log("جوجه با مالیات:", dishJooje * (1 + VAT_RATE));
```

**مرحله ۲ — `let` برای شمارنده:**

```javascript
let count = 0;
count++;
count++;
console.log("تعداد کلیک منو:", count);
```

«`count++` یعنی reassign — پس از اول `let` بود.»

**مرحله ۳ — `const` با object (مهم):**

```javascript
const dish = { name: "کباب", price: 420_000 };
dish.price = 430_000; // ✔ property عوض شد
console.log(dish);
// dish = { name: "قیمه" }; // ✖ TypeError — reassign ممنوع
```

بگو:

«`const` یعنی **reference** ثابت — نمی‌توانید dish را به object دیگر وصل کنید؛ ولی **property**های همان object را می‌توانید عوض کنید. برای آرایه هم همین‌طور است — `push` OK، `arr = []` خطا.»

---

## ۴) let قابل تغییر، const نه — خطای عمدی

از جزوه demo `out-2`:

```javascript
let score = 10;
score = 15;
console.log(score);

const pi = 3.14;
pi = 3; // خطا — در کلاس uncomment کنید
```

«پیام `TypeError: Assignment to constant variable.` را با هم بخوانید. **بعد از خطا** بقیه script ممکن است اجرا نشود — پس خطای عمدی را جدا تست کنید.»

**`const` بدون مقدار:**

```javascript
// const empty; // SyntaxError
```

---

## ۵) block scope — چرا var نمی‌نویسیم

```javascript
{
  const secret = 42;
  let temp = 1;
}
// console.log(secret); // ReferenceError
```

مقایسه با `var` (فقط نشان بده، تکرار نکنید):

```javascript
{
  var leaked = 10;
}
console.log(leaked); // 10 — نشت از بلوک
```

«`let` و `const` **block scope** دارند — داخل `{ if for }` ساخته شوند، بیرون دیده نمی‌شوند. `var` function scope و legacy است.»

### سؤال کلاسی

- «`const dish = {}; dish.price = 1` مجاز است؟»  
  **پاسخ:** بله — mutate property؛ reassign کل object نه.

- «دو بار `let score = 1` در یک scope؟»  
  **پاسخ:** خطا — `Identifier already declared`؛ برای تغییر فقط `score = 2`.

- «قبل از `let x = 1` بنویسیم `console.log(x)`؟»  
  **پاسخ:** TDZ — `Cannot access before initialization`.

---

## ۶) نام‌گذاری (خلاصه live)

از لیست جزوه:

- انگلیسی، camelCase: `totalPrice` نه `tp`
- بدون فاصله؛ `_` و `$` مجاز
- عدد اول اسم ممنوع
- کلمات رزرو شده (`let`, `if`, …) ممنوع

---

## ۷) mini-project — سبد خرید

تمرین جزوه را **در کلاس** شروع کنید:

«`productName` با const، `price` const، `count` با let — `total` را حساب کنید؛ بعد `count++` و total دوباره.»

```javascript
const productName = "کتاب CSS";
const unitPrice = 240_000;
let count = 2;

let total = unitPrice * count;
console.log(productName, "جمع:", total);

count = count + 1;
total = unitPrice * count;
console.log("بعد از افزودن یک عدد:", total);
```

---

## ۸) نمایش در مرورگر

- [`05-variables.html`](../../pages/05-variables.html) — هر demo `out-1` تا `out-4` را با پیش‌بینی کلاس اجرا کنید.
- Sources → `05-variables.js` یا inline — breakpoint روی `count++`.

---

## ۹) اشتباهات رایج

- **`const x;` بدون مقدار** — SyntaxError.
- **`var` در کد جدید** — block scope را قاطی می‌کند.
- **فکر کردن const = freeze عمیق object** — فقط top-level reassign ممنوع.
- **تکرار `let` برای assign** — `let score = 1; score = 2` درست است نه `let score = 2`.

---

## ۱۰) جمع‌بندی و سؤالات پایانی

1. پیش‌فرض شما `const` است یا `let`?  
   **پاسخ:** `const`.

2. چه زمانی `let`?  
   **پاسخ:** وقتی reassign لازم است.

3. تفاوت mutate property و reassign reference?  
   **پاسخ:** const اولی را ممنوع، دومی را برای object/array مجاز.

**پیام پایانی:** «از این درس به بعد در Live فقط const/let — var را در جزوه قدیمی دیدید ولی تقلید نکنید.»

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. VAT و دو قیمت — `const VAT_RATE = 0.09`.
2. `let clicks = 0` و سه بار `clicks++`.

### متوسط
3. تمرین سبد جزوه — کدام متغیر const و کدام let؟ توضیح یک خطی.
4. block scope: دو `const` هم‌نام در دو بلوک جدا — چرا خطا نمی‌دهد؟

### چالشی
5. object `cart` با const — داخلش `items` آرایه؛ `push` یک آیتم؛ سپس سعی کنید `cart = {}` — خطا را capture کنید.

**ارجاع:** [`05-variables.html`](../../pages/05-variables.html) · [`quizzes/`](../../quizzes/README.md)

---

## انتقال به درس بعد

«حالا که مقدار را اسم گذاشتیم، **عملگرها** برای حساب و مقایسه — و تفاوت `+` با string.»  
→ [`06-operators.html`](../../pages/06-operators.html) · سناریو: [`06-عملگرها.md`](./06-عملگرها.md)

---
