# سناریوی تدریس درس 20: فروشگاه (practice)

**صفحه جزوه:** [`pages/20-practice.html`](../../pages/20-practice.html)
**پیش‌نیاز مفهومی:** درس 19
**مدت پیشنهادی:** حدود 75 دقیقه
**هدف جلسه:** درس 20 — 20-practice.html

**چرخه ثابت تدریس (در کل جلسه تکرار کن):**  
مفهوم → کد → نتیجه در مرورگر/Console → سؤال چالشی → راه‌حل

| موضوع | زمان |
|------|------|
| شروع و مسئله واقعی | ۸–۱۰ دقیقه |
| Live Coding | ۲۰–۲۵ دقیقه |
| نمایش و DevTools | ۸ دقیقه |
| سؤالات کلاسی | ۱۰ دقیقه |
| mini-project / جمع‌بندی | ۱۰–۱۵ دقیقه |
| **مجموع** | **~75 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله قبل از تعریف

اول با **مسئله** شروع کن — نه با لیست property.

«این پروژه مباحث هر سه دوره را کنار هم می‌گذارد: کلاس، آرایه و متدهایش، Promise و async/await (بارگذاری شبیه‌سازی‌شده محصولات)، Event Delegation، localStorage (سبد خرید ماندگار) و ... . اول نسخه زنده را امتحان کنید؛ سبد خرید با بارگذاری دوباره صفحه پاک نمی‌شود.»

«class Product { constructor(id, name, price, category) { this.id = id; this.name = name; this.price = price; this.category = category; } priceText() { return this.price.toLocaleString("fa-IR") + " تومان"; } } کلاس محصول دادهٔ ثابت هر کالا را نگه می‌دارد: شناسه، نام، قیمت و دسته. متد priceText قیمت را با رقم فارسی و واحد پول به متن نمایش تبدیل می‌کند تا همین شکل در فهرست و سبد تکرار نشود. ساختن عنصر صفحه داخل این کلاس نیست.»

«// سبد خرید: آرایه‌ای از { id, qty } که در localStorage ذخیره می‌شود class Cart { constructor(storageKey) { this.key = storageKey; this.items = this.load(); } load() { try { const text = localStorage.getItem(this.key); return text ? JSON.parse(text) : []; } catch (err) { return []; // داده خراب بود ← سبد خالی، بدون از کار افتادن برنامه } } save() { localStorage.setItem(this.key, JSON.stringify(this.items)); } add(id) { const item = this.items.find(item => item.id === id); if (item) { item.qty++; } else { this.items.push({ id: id, qty: 1 }); } this.save(); } remove(id) { const item = this.items.find(item => item.id === id); if (!item) return; item.qty--; if (item.qty === 0) { this.items = this.items.filter(item => item.id !== id); } this.save(); } clear() { this.items = []; this.save(); } } سبد فقط شناسه و تعداد را نگه می‌دارد، نه کل اطلاعات محصول. load متن ذخیره‌شده را می‌خواند و اگر خالی یا خراب باشد آرایهٔ خالی برمی‌گرداند تا برنامه شروع شود. هر تغییری که تعداد را عوض کند باید دوباره در localStorage ذخیره شود تا با تازه‌کردن صفحه از بین نرود.»

«سبد فقط id و تعداد هر کالا را نگه می‌دارد، نه خود محصول را؛ اسم و قیمت را موقع نمایش از آرایه products پیدا می‌کنیم. بعد از هر تغییر، save() کل آرایه را با JSON.stringify در localStorage می‌نویسد و موقع ساختن سبد، load() آن را برمی‌گرداند.»

**روی جزوه این عناوین را دنبال کنید:** *۲۰) پروژه نهایی: فروشگاه کوچک* · *۱) مدل داده با کلاس* · *۲) سبد خرید با آرایه و localStorage* · *۳) بارگذاری ناهمگام محصولات*

**چرخه این بخش:** نشان بده → دانشجو حدس بزند → یک خط کد → refresh.

---

## ۲) مفهوم — حرف قابل گفتن سر کلاس

«بچه‌ها، جزوه را باز کنید؛ من روی همان مثال live جلو می‌روم. هر بار که property عوض می‌شود، در DevTools overlay (Flex/Grid) یا Computed styles را نگاه کنید.»

«class Product { constructor(id, name, price, category) { this.id = id; this.name = name; this.price = price; this.category = category; } priceText() { return this.price.toLocaleString("fa-IR") + " تومان"; } } کلاس محصول دادهٔ ثابت هر کالا را نگه می‌دارد: شناسه، نام، قیمت و دسته. متد priceText قیمت را با رقم فارسی و واحد پول به متن نمایش تبدیل می‌کند تا همین شکل در فهرست و سبد تکرار نشود. ساختن عنصر صفحه داخل این کلاس نیست.»

«// سبد خرید: آرایه‌ای از { id, qty } که در localStorage ذخیره می‌شود class Cart { constructor(storageKey) { this.key = storageKey; this.items = this.load(); } load() { try { const text = localStorage.getItem(this.key); return text ? JSON.parse(text) : []; } catch (err) { return []; // داده خراب بود ← سبد خالی، بدون از کار افتادن برنامه } } save() { localStorage.setItem(this.key, JSON.stringify(this.items)); } add(id) { const item = this.items.find(item => item.id === id); if (item) { item.qty++; } else { this.items.push({ id: id, qty: 1 }); } this.save(); } remove(id) { const item = this.items.find(item => item.id === id); if (!item) return; item.qty--; if (item.qty === 0) { this.items = this.items.filter(item => item.id !== id); } this.save(); } clear() { this.items = []; this.save(); } } سبد فقط شناسه و تعداد را نگه می‌دارد، نه کل اطلاعات محصول. load متن ذخیره‌شده را می‌خواند و اگر خالی یا خراب باشد آرایهٔ خالی برمی‌گرداند تا برنامه شروع شود. هر تغییری که تعداد را عوض کند باید دوباره در localStorage ذخیره شود تا با تازه‌کردن صفحه از بین نرود.»

«سبد فقط id و تعداد هر کالا را نگه می‌دارد، نه خود محصول را؛ اسم و قیمت را موقع نمایش از آرایه products پیدا می‌کنیم. بعد از هر تغییر، save() کل آرایه را با JSON.stringify در localStorage می‌نویسد و موقع ساختن سبد، load() آن را برمی‌گرداند.»

اگر دانشجو گفت «حفظ کنم؟» بگو: «نه — **مسئله** را بشناسید؛ property نامش را بعداً هم از MDN پیدا می‌کنید.»

---

## ۳) Live Coding — مرحله‌به‌مرحله

«فایل live جدا می‌سازم تا index پروژه قاطی نشود — مثلاً `تدریس/live/` در همین ماژول.»

**مرحله 1 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  priceText() {
    return this.price.toLocaleString("fa-IR") + " تومان";
  }
}
```

**مرحله 2 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
// سبد خرید: آرایه‌ای از { id, qty } که در localStorage ذخیره می‌شود
class Cart {
  constructor(storageKey) {
    this.key = storageKey;
    this.items = this.load();
  }

  load() {
    try {
      const text = localStorage.getItem(this.key);
      return text ? JSON.parse(text) : [];
    } catch (err) {
      return [];        // داده خراب بود ← سبد خالی، بدون از کار افتادن برنامه
    }
  }

  save() {
    localStorage.setItem(this.key, JSON.stringify(this.items));
  }

  add(id) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.qty++;
    } else {
      this.items.push({ id: id, qty: 1 });
    }
    this.save();
  }

  remove(id) {
    const item = this.items.find(item => item.id === id);
    if (!item) return;
    item.qty--;
    if (item.qty === 0) {
      this.items = this.items.filter(item => item.id !== id);
    }
    this.save();
  }

  clear() {
    this.items = [];
    this.save();
  }
}
```

**مرحله 3 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchProducts() {
  await wait(800);   // شبیه‌سازی تأخیر شبکه؛ در پروژه واقعی: await fetch(url)
  return PRODUCTS_DATA.map(p => new Product(p.id, p.name, p.price, p.category));
}
```


**در حین تایپ بگو:** «الان فقط یک تغییر — save — refresh — چه فرقی دیدید؟»

**اشتباه عمدی (یک بار):** یک selector اشتباه یا property روی فرزند نادرست — خطا را با کلاس debug کنید.

---

## ۴) نمایش در مرورگر و DevTools

- جزوه `20-practice.html` را کنار live بگذارید و پارagraph به paragraph جلو بروید.
- DevTools → Elements → computed styles؛ برای Flex/Grid overlay را فعال کنید.
- عرض viewport را باریک و پهن کنید — رفتار واکنش‌گرا را **قبل** media query هم بحث کنید اگر relevant است.

---

## ۵) سؤال کلاسی

- «ایده اصلی این درس در یک جمله چیست؟»  
  **پاسخ:** این پروژه مباحث هر سه دوره را کنار هم می‌گذارد: کلاس، آرایه و متدهایش، Promise و async/await (بارگذاری شبیه‌سازی‌شده محص…
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

«13 پروژه JS.»
---

---
