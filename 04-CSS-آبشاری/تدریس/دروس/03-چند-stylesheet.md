# سناریوی تدریس درس ۳: چند فایل CSS و ترتیب لینک

**صفحه جزوه:** [`pages/03-stylesheets.html`](../../pages/03-stylesheets.html)  
**پیش‌نیاز:** [قدرت انتخابگر](./02-قدرت-انتخابگر.md)  
**مدت پیشنهادی:** حدود ۷۵ دقیقه  
**هدف جلسه:** دانشجو بفهمد cascade فقط داخل یک فایل نیست — **ترتیب `<link>`** مثل «پایین‌تر در یک فایل» عمل می‌کند **وقتی specificity برابر است**؛ و باز هم **property به property** ادغام می‌شود.

**چرخه ثابت تدریس:** مسئله → دیالوگ → Live → مرورگر → سؤال → راه‌حل

| موضوع | زمان |
|------|------|
| دو فایل CSS روی یک پروژه | ۱۵ دقیقه |
| sheet-a / sheet-b demo | ۲۵ دقیقه |
| جابه‌جایی link و پیش‌بینی | ۱۵ دقیقه |
| تداخل با specificity | ۱۰ دقیقه |
| پروژه mini + تمرین | ۱۰ دقیقه |
| **مجموع** | **۷۵ دقیقه** |

---

## ۱) شروع کلاس — دیالوگ کامل

«بچه‌ها، فرض کنید سایت فروشگاه را به دو فایل تقسیم کرده‌اید:

- `base.css` — رنگ‌ها و تایپوگرافی کلی  
- `components.css` — دکمه و کارت

در `index.html` داخل `<head>` می‌نویسید:

```html
<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="components.css">
```

یک روز در `base.css` دارید:

```css
.msg { color: red; font-size: 20px; font-weight: bold; }
```

و در `components.css`:

```css
.msg { color: green; }
```

صفحه را باز می‌کنید. **رنگ** چیست؟ **اندازه** و **ضخامت** چطور؟

آیا فایل دوم **کل** استایل `.msg` را پاک می‌کند؟ یا فقط چیزهایی که دوباره نوشته؟

امروز همان demo جزوه [`03-stylesheets.html`](../../pages/03-stylesheets.html) را Live می‌زنیم — با `sheet-a.css` و `sheet-b.css`.»

---

## ۲) Live Coding — دو فایل واقعی

### HTML (Live)

```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live — چند stylesheet</title>
  <link rel="stylesheet" href="sheet-a.css">
  <link rel="stylesheet" href="sheet-b.css">
</head>
<body>
  <div class="demo-sheets">
    <p class="msg">پیام تست</p>
    <div class="from-a">فقط در A</div>
    <div class="from-b">فقط در B</div>
  </div>
</body>
</html>
```

### sheet-a.css — در حین تایپ بگو

«فایل اول — پایه. رنگ قرمز، فونت درشت، bold.»

```css
.demo-sheets .msg {
  color: #c92a2a;
  font-size: 20px;
  font-weight: bold;
}

.demo-sheets .from-a {
  background-color: #ffe0b2;
  padding: 10px;
}
```

### sheet-b.css

«فایل دوم — **دیرتر** لینک شده. فقط رنگ را عوض می‌کنیم.»

```css
.demo-sheets .msg {
  color: #0b6e4f;
}

.demo-sheets .from-b {
  background-color: #c3fae8;
  padding: 10px;
}
```

**در مرورگر:**

- `.msg` → سبز، ولی **20px** و **bold** از A مانده.
- `.from-a` / `.from-b` → هر کدام پس‌زمینهٔ خودش.

### سؤال کلاسی

«اگر ترتیب دو `<link>` را عوض کنیم چه می‌شود؟»  
**پاسخ:** برای `.msg` رنگ از فایلی که **دیرتر** لینک شده می‌آید — با specificity برابر.

---

## ۳) مشاهده مرورگر — Sources و cascade

1. DevTools → Sources — هر دو CSS را ببین.  
2. Elements → `.msg` → Styles — rule از `sheet-a` و `sheet-b`؛ یکی خط‌خورده.  
3. Computed → `color`, `font-size`, `font-weight` جدا.

«مرورگر همهٔ stylesheetها را **به ترتیب document** جمع می‌کند — inline `<style>` و linkها — بعد cascade.»

---

## ۴) وقتی specificity برابر نیست

«اگر در A بنویسیم `.msg` و در B `#banner .msg`، دیگر «دیرتر لینک» کافی نیست — id برنده است. **اول specificity، بعد order.**»

**Live کوتاه (فقط گفتاری + جزوه):** به [`02-specificity.html`](../../pages/02-specificity.html) ارجاع بده؛ در این درس تمرکز روی **دو فایل هم‌قدرت** است.

### سؤال کلاسی

«دو فایل، selector یکسان، property متفاوت — برنده؟»  
**پاسخ:** فایل دوم در `<head>` برای آن property.

---

## ۵) اشتباهات رایج

| غلط | درست |
|-----|------|
| فکر کردن فایل دوم کل CSS اول را override می‌کند | فقط properties مشترک |
| لینک random بدون ترتیب فکر‌شده | convention: reset → base → components → page |
| duplicate selector در دو فایل بدون doc | تیم باید بداند کدام «منبع حقیقت» است |

---

## ۶) پروژه mini — «theme + override»

ساختار پیشنهادی:

- `tokens.css` — `:root { --text: #1a3a5c; }`  
- `layout.css` — `.demo-sheets .msg { color: var(--text); font-size: 18px; }`  
- `hotfix.css` — `.demo-sheets .msg { color: #0b6e4f; }` (فقط رنگ)

دانشجو قبل از لینک `hotfix` پیش‌بینی کند؛ بعد لینک کند و تأیید.

---

## ۷) جمع‌بندی و سؤالات پایانی

1. دو `.msg` هم‌قدرت در دو فایل — چه چیز برنده را تعیین می‌کند؟  
   **پاسخ:** ترتیب link؛ فایل دیرتر برای property مشترک.

2. B فقط `color` دارد؛ A هم `color` هم `padding`. `padding`؟  
   **پاسخ:** از A.

3. آیا ترتیب class در HTML مثل ترتیب link است؟  
   **پاسخ:** خیر — HTML class order در tie-break اثر ندارد (درس ۶).

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. جای `sheet-a` و `sheet-b` را در `<head>` عوض کن — رنگ `.msg`؟  
2. از B فقط `font-size` اضافه کن — چه properties از A می‌مانند؟

### متوسط
3. rule `.msg` را فقط در A نگه دار؛ B خالی — نتیجه؟  
4. diagram بکش: document order → cascade layers.

### چالشی
5. بدون merge فایل‌ها، hotfix سبز را «موقت» نگه دار و در comment توضیح بده چرا specificity-safe است.  
6. چرا `@import` داخل CSS برای performance معمولاً بدتر از `<link>` است؟ (بحث کوتاه)

**ارجاع:** [`sheet-a.css`](../../css/demos/sheet-a.css) · [`sheet-b.css`](../../css/demos/sheet-b.css)

---

## انتقال به درس بعدی

«فایل‌ها را جمع کردیم. بعضی propertyها اصلاً روی فرزند نوشته نمی‌شوند — از **والد ارث** می‌برند. لایهٔ بعد cascade: **inheritance**.»

→ [`04-inheritance.html`](../../pages/04-inheritance.html) · [`04-وراثت.md`](./04-وراثت.md)
