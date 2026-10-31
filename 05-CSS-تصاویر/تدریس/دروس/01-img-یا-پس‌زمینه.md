# سناریوی تدریس درس ۱: `<img>` یا تصویر پس‌زمینه؟

**صفحه جزوه:** [`pages/01-img-vs-bg.html`](../../pages/01-img-vs-bg.html)  
**پیش‌نیاز:** [پس‌زمینه](../../../02-CSS-مقدماتی/pages/07-backgrounds.html)  
**مدت پیشنهادی:** حدود ۷۵ دقیقه  
**هدف جلسه:** دانشجو **قانون تصمیم** را در عمل ببیند: محتوا → `img` + `alt`؛ دکور و متن روی تصویر → `background-image` روی جعبه — مطابق [`compare.css`](../../css/demos/compare.css).

**چرخه ثابت تدریس:** مسئله → دیالوگ → Live → مرورگر → سؤال → پروژه

| موضوع | زمان |
|------|------|
| منوی رستوران vs بنر | ۱۵ دقیقه |
| demo compare | ۲۵ دقیقه |
| جدول سؤالات جزوه | ۱۲ دقیقه |
| CLS و width/height | ۱۰ دقیقه |
| پروژه mini | ۱۳ دقیقه |
| **مجموع** | **۷۵ دقیقه** |

---

## ۱) شروع کلاس — دیالوگ کامل

«بچه‌ها، فرض کنید سایت **رستوران** می‌سازید.

مدیر می‌گوید: «عکس **چلو کباب** باید توی منو باشه — مشتری بدون عکس سفارش نمی‌ده.»

طراح UI می‌گوید: «پس‌زمینهٔ **hero** اول صفحه هم عکس غذا باشه، روش بنویسیم *«سلام، خوش آمدید»*.»

شما یک `<div>` با `background-image` برای **هر دو** می‌گذارید — سریع است، درست؟

فردا SEO می‌گوید عکس محصول در Google Images نیست. accessibility می‌گوید screen reader برای عکس غذا چیزی نمی‌خواند. و اگر CSS لود نشود، hero خالی است — **بد**؛ ولی عکس محصول که `<img>` باشد هنوز دیده می‌شود.

**سؤال کلاس:** اولین تصمیم قبل از `width` و `object-fit` چیست؟ — **img یا background؟**

امروز همان [`01-img-vs-bg.html`](../../pages/01-img-vs-bg.html) را Live می‌زنیم.»

---

## ۲) Live — ستون محتوا (img)

«اگر عکس **بخشی از معنی** صفحه است — غذا، محصول، نمودار — در **HTML** با `<img>` می‌آید.»

### HTML (مطابق جزوه)

```html
<div class="compare demo-compare">
  <div>
    <h3>محتوا → img</h3>
    <img class="content-img"
         src="../images/food-1.jpg"
         alt="چلو کباب کوبیده">
  </div>
</div>
```

### CSS — در حین تایپ

«عرض واکنش‌گرا؛ ارتفاع auto تا نسبت حفظ شود.»

```css
.demo-compare .content-img {
  width: 100%;
  max-width: 280px;
  height: auto;
  display: block;
  border-radius: 8px;
}
```

**در مرورگر:** تصویر غذا با گوشه گرد؛ در DevTools → Accessibility → name از **alt**.

بگو:

«موتور جستجو و screen reader این را **محتوا** می‌بینند. `alt` توضیح معنادار است — نه "image1".»

### سؤال کلاسی

«اگر `alt=""` بگذاریم برای عکس محصول؟»  
**پاسخ:** برای decorative گاهی OK؛ برای غذا/محصول **نه** — اطلاعات از دست می‌رود.

---

## ۳) Live — ستون دکور (background)

«اگر حذف عکس **معنی** را نشکند و فقط فضا را زیبا کند — یا متن **روی** تصویر بنشیند — `background-image` روی یک **box**.»

```css
.demo-compare .decor-bg {
  width: 100%;
  min-height: 160px;
  border-radius: 8px;
  background-image: url("../../images/hero.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 12px;
  color: white;
  font-weight: bold;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
}
```

HTML:

```html
<div class="decor-bg">متن روی پس‌زمینه</div>
```

**در مرورگر:** متن سفید پایین جعبه؛ تصویر **پشت** متن — بدون `<img>` جدا.

«مسیر `url(...)` نسبت به **فایل CSS** است — در [`02-مسیر-تصویر.md`](./02-مسیر-تصویر.md) عمیق می‌شویم. اینجا همان مسیر جزوه: `../../images/hero.jpg` از `css/demos/compare.css`.»

### سؤال کلاسی

«آیا `.decor-bg` برای screen reader «عکس» است؟»  
**پاسخ:** خیر — decorative background؛ معنی از **متن داخل div** می‌آید.

---

## ۴) جدول تصمیم — walkthrough جزوه

|Sؤال|اگر بله|
|---|---|
|عکس بخشی از معنی است؟|`img` + `alt`|
|حذف عکس = از دست دادن اطلاعات؟|`img`|
|فقط تزئین و متن کنار کافی است؟|`background-image`|
|متن روی تصویر (بنر)؟|معمولاً background + لایه/readability|

از کلاس بخواه هر مورد را classify کند: لوگو header، pattern تکراری، عکس تیم، آیکون decorative.

**پاسخ راهنما:**

- لوگو برند → معمولاً `img` + alt نام برند.  
- pattern → background.  
- عکس تیم در «درباره ما» → `img`.  
- آیکون purely decorative کنار متن → بسته به design؛ اگر معنا دارد `img` یا SVG با title.

---

## ۵) CLS — width و height روی img

«`img` بدون ابعاد می‌تواند layout shift بدهد — بعداً [`07-تصویر-واکنش‌گرا.md`](./07-تصویر-واکنش‌گرا.md). امروز فقط mention:

```html
<img src="..." alt="..." width="400" height="300">
```

یا CSS با `aspect-ratio` — **برای محتوا** مهم است.»

### سؤال کلاسی

«background بدون min-height چه می‌شود؟»  
**پاسخ:** جعبه جمع می‌شود — تصویر دیده نمی‌شود؛ hence `min-height: 160px` در demo.

---

## ۶) اشتباهات — غلط / درست

| غلط | درست |
|-----|------|
| عکس محصول فقط `background-image` | `<img alt="نام محصول">` |
| hero مهم با `<img>` + overlay سنگین بدون plan | background + flex/text shadow طبق demo |
| `alt` نام فایل | توضیح human-readable |
| copy مسیر HTML برای CSS | مسیر نسبت به **فایل CSS** |

**غلط:**

```html
<div class="product" style="background:url(dish.jpg)"></div>
```

**درست:**

```html
<img src="images/dish.jpg" alt="پاستا با سس گوجه" class="content-img">
```

---

## ۷) پروژه mini — «صفحه رستوران کوچک»

Live یک section:

1. `.hero.decor-bg` — بنر با متن خوش‌آمد.  
2. یک `.content-img` — یک غذا.  
3. پاراگراف توضیح **بدون** عکس تکراری در background.

**چک:** disable CSS در DevTools — img هنوز دیده شود؛ hero ممکن است خالی — بحث acceptable tradeoff برای decorative hero.

---

## ۸) جمع‌بندی

1. عکس غذا در منو?  
   **پاسخ:** `img` + alt.

2. بنر با title روی عکس?  
   **پاسخ:** معمولاً background روی box + متن HTML.

3. SEO برای background product?  
   **پاسخ:** به‌عنوان content image index نمی‌شود مثل img.

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. پنج تصویر سایت دلخواه — img یا bg?  
2. `decor-bg` — `min-height` را 80px کن — observe.

### متوسط
3. hero را با `img` + overlay نیمه‌شفاف بساز — compare readability با background demo.  
4. چرا فروشگاه اینترنتی `img` برای thumbnail؟

### چالشی
5. صفحه mini: یک محصول img، یک pattern bg، یک hero — checklist accessibility.  
6. بدون جزوه: دو دلیل technical برای img محتوا.

**ارجاع:** [`01-img-vs-bg.html`](../../pages/01-img-vs-bg.html) · [`compare.css`](../../css/demos/compare.css)

---

## انتقال به درس بعدی

«روش را انتخاب کردیم. قدم بعد: **مسیر** — چرا `../images` در HTML با `../../images` در CSS فرق دارد.»

→ [`02-paths.html`](../../pages/02-paths.html) · [`02-مسیر-تصویر.md`](./02-مسیر-تصویر.md)
