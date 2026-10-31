# سناریوی تدریس درس ۵: object-fit

**صفحه جزوه:** [`pages/05-object-fit.html`](../../pages/05-object-fit.html)  
**پیش‌نیاز:** [آواتار](./04-آواتار.md) — `width`/`height` روی img  
**مدت پیشنهادی:** حدود ۸۰ دقیقه  
**هدف جلسه:** در **قاب ثابت** (مثلاً 150px ارتفاع) تفاوت `fill` / `cover` / `contain` را ببیند، برای گرید محصول **cover** انتخاب کند، و بداند `object-fit` فقط وقتی کار می‌کند هر دو بعد قاب مشخص باشد.

**چرخه ثابت تدریس:** مسئله → دیالوگ → Live Coding → مرورگر → سؤال → پروژه

| موضوع | زمان |
|------|------|
| مسئله: گالری ا heights نامتجانس | ۱۵ دقیقه |
| قاب ثابت + display block | ۱۰ دقیقه |
| fill / cover / contain | ۲۵ دقیقه |
| grid واکنش‌گرا | ۱۲ دقیقه |
| پروژه mini: سه محصول | ۱۳ دقیقه |
| پرسش و تمرین | ۵ دقیقه |
| **مجموع** | **۸۰ دقیقه** |

---

## ۱) شروع کلاس — مسئله اول (دیالوگ)

«بچه‌ها، فروشگاه آنلاین — هر محصول یک `<img>`. عکس‌ها از عکاس مختلف: یکی **عمودی**، یکی **افقی**، یکی مربع.

طراح گفته: *«همه thumbnailها یک ارتفاع — 150px — و عرض کامل ستون.»*

شما می‌نویسید:

```css
.product img {
  width: 100%;
  height: 150px;
}
```

**در مرورگر:** یکی **کش** می‌آید (غذا له شده)، یکی **بریده** می‌شود، یکی **نوار خالی** دارد — همه بدون `object-fit` رفتار پیش‌فرض **`fill`** است: کش تا پر شدن قاب.

امروز **`object-fit`** — به img می‌گوید *چطور* داخل قاب بنشیند، نه فقط *چقدر* بزرگ.»

---

## ۲) Live Coding مرحله ۱ — ساختار کارت (مطابق جزوه)

HTML از [`05-object-fit.html`](../../pages/05-object-fit.html):

```html
<div class="demo-fit-grid">
  <article class="demo-fit-card">
    <div class="frame">
      <img class="fill" src="../images/food-3.jpg" alt="نمونه fill">
    </div>
    <p class="caption"><code>fill</code> — کش</p>
  </article>
  <article class="demo-fit-card">
    <div class="frame">
      <img class="cover" src="../images/food-3.jpg" alt="نمونه cover">
    </div>
    <p class="caption"><code>cover</code></p>
  </article>
  <article class="demo-fit-card">
    <div class="frame">
      <img class="contain" src="../images/food-3.jpg" alt="نمونه contain">
    </div>
    <p class="caption"><code>contain</code></p>
  </article>
</div>
```

CSS ([`object-fit.css`](../../css/demos/object-fit.css)):

```css
.demo-fit-card img {
  width: 100%;
  height: 150px;
  display: block;
}
.demo-fit-card .fill    { object-fit: fill; }
.demo-fit-card .cover   { object-fit: cover; }
.demo-fit-card .contain { object-fit: contain; }
```

«**`display: block`** — فاصله inline زیر img حذف شود.

**شرط طلایی:** `width` و `height` (یا frame با هر دو بعد) — اگر `height: auto`، قاب ratio عکس را می‌گیرد و object-fit بی‌اثر می‌شود.»

**در مرورگر:** **یک عکس عمودی** در قاب افقی — سه رفتار واضح (جزوه توضیح fill/cover/contain).

---

## ۳) جدول تصمیم (بعد از دیدن)

| مقدار | رفتار | کی؟ |
|--------|--------|-----|
| `fill` | کش تا پر شدن قاب | تقریباً هرگز برای عکس محصول |
| `cover` | scale + crop — قاب پر | **thumbnail فروشگاه، کارت، گالری** |
| `contain` | کل عکس visible — letterbox | لوگو، diagram، وقتی crop ممنوع |

### سؤال کلاسی

«برای آواتار دایره درس ۴ از cover استفاده کردیم — چرا؟»  
**پاسخ:** قاب ثابت پر شود؛ لبه‌ها crop — چهره مرکز `object-position` (درس ۸).

---

## ۴) Live Coding مرحله ۲ — grid responsive

```css
.demo-fit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
@media (max-width: 700px) {
  .demo-fit-grid {
    grid-template-columns: 1fr;
  }
}
```

**در مرورگر:** DevTools باریک — یک ستون؛ پهن — سه ستون؛ هر سلول img با **cover** یکسان.

---

## ۵) اشتباهات رایج

| غلط | درست |
|-----|------|
| `cover` بدون `height` ثابت | هر دو بعد قاب |
| `background-size: cover` روی `<img>` | `object-fit` برای replaced element |
| `contain` برای shop grid یکدست | معمولاً `cover` |
| فراموش `alt` | accessibility |

---

## ۶) پروژه mini — سه محصول با cover

```html
<div class="shop-grid">
  <article class="shop-card">
    <img src="../images/food-1.jpg" alt="پیتزا">
    <h2>پیتزا</h2>
  </article>
  <!-- food-2, food-3 -->
</div>
```

```css
.shop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem;
}
.shop-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
  border-radius: 0.5rem 0.5rem 0 0;
}
```

**نمایش:** ا heights یکسان — بدون کش deform.

---

## ۷) جمع‌بندی و سؤالات پایانی

1. پیش‌فرض object-fit?  
   **پاسخ:** `fill`.

2. cover use case?  
   **پاسخ:** grid thumbnail یکدست.

3. contain?  
   **پاسخ:** نمایش کامل عکس با letterbox.

**پیام پایانی:** «object-fit = قانون img داخل قاب. فردا **کارت محصول** — img + caption + layout.»

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. سه class fill/cover/contain روی یک src.  
2. height را auto کنید — object-fit را observe کنید.

### متوسط
3. grid 3→1 با media query.  
4. shop-card فقط cover.

### چالشی
5. مقایسه screenshot fill vs cover برای portrait image.  
6. توضیح: چرا `object-fit` به video هم می‌خورد.

**ارجاع:** [`05-object-fit.html`](../../pages/05-object-fit.html)

---

## انتقال به درس بعدی

→ [`06-cards.html`](../../pages/06-cards.html) · [`06-کارت-محصول.md`](./06-کارت-محصول.md)
