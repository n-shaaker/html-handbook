# سناریو تدریس زنده — پروژه منوی رستوران (استاتیک)

**پیشنهاد:** ۲–۳ جلسه · **مرجع:** [`index.html`](../index.html) · **روش:** walkthrough از صفر (کپی کل فایل ممنوع در کلاس)

---

## درس ۱ — معرفی پروژه و اسکلت معنایی

**مرجع:** [`README.md`](../README.md) · خطوط ۱–۵۰ `index.html`

### متن تدریس

امروز یک **منوی رستوران واقعی** می‌سازیم: فقط HTML و CSS. هدف یادگیری است نه کپی — هر بخش را خودمان می‌نویسیم و فقط وقتی گیر کردیم به نمونه نگاه می‌کنیم. اسکلت: `header`، `main` با `section`‌های جدا، `footer`. زبان فارسی: `lang="fa"` و `dir="rtl"`. لینک فونت و CSS خارجی.

### Live Coding

```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>رستوران سنتی نارنج | منوی غذا</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header"></header>
  <section class="hero"></section>
  <main class="container"></main>
  <footer class="site-footer"></footer>
</body>
</html>
```

```css
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: Vazirmatn, Tahoma, sans-serif; line-height: 1.7; color: #3b2314; }
.container { max-width: 56rem; margin-inline: auto; padding: 1rem; }
```

### نمایش

صفحه خالی با ساختار در Elements — نشان دهید outline معنایی.

### سؤال

«چرا `main` یک‌بار و `section` چندبار؟» (یک محتوای اصلی؛ بخش‌های موضوعی.)

### اشتباهات

- چند `main` یا `header` تو در تو بدون دلیل.
- فراموش `viewport` در موبایل.

### انتقال

«سربرگ و ناوبری با Flex.»

---

## درس ۲ — سربرگ و منوی بالا (Flex)

**مرجع:** [`index.html`](../index.html) سربرگ · [`quizzes/01-header-nav`](../quizzes/1-topic-exercises/01-header-nav/README.md)

### متن تدریس

`header.site-header`: لوگو (`a.logo`) + `nav.main-nav` با لینک‌های `#starters`، `#mains`، `#reserve`. Flex روی header: `justify-content: space-between`، `align-items: center`. لینک‌ها قرصی با `:hover` و `:focus-visible`.

### Live Coding

```html
<header class="site-header">
  <a href="index.html" class="logo">رستوران سنتی <strong>نارنج</strong></a>
  <nav class="main-nav" aria-label="منوی صفحه">
    <a href="#starters">پیش‌غذا</a>
    <a href="#mains">غذای اصلی</a>
    <a href="#reserve">رزرو میز</a>
  </nav>
</header>
```

```css
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #3b2314;
  color: #fff8f0;
}
.main-nav { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.main-nav a { color: inherit; text-decoration: none; padding: 0.35rem 0.75rem; border-radius: 999px; }
.main-nav a:focus-visible { outline: 2px solid #f4a261; outline-offset: 2px; }
```

### نمایش

پیمایش با Tab روی لینک‌ها؛ کلیک روی «رزرو» — پرش به `#reserve` (بعداً).

### سؤال

«Flex روی کدام عنصر — header یا nav؟» (header برای logo/nav؛ nav برای لینک‌ها.)

### اشتباهات

- `display: flex` روی هر `<a>` به‌جای nav.
- لینک بدون متن (فقط آیکون بدون `aria-label`).

### انتقال

«بخش hero با تصویر پس‌زمینه.»

---

## درس ۳ — Hero (معرفی و دکمه‌ها)

**مرجع:** `.hero` در [`css/style.css`](../css/style.css) · [`02-hero`](../quizzes/1-topic-exercises/02-hero/README.md)

### متن تدریس

`section.hero`: `background-image` + `cover` + رنگ پشتیبان؛ لایه تیره با `linear-gradient` برای خوانایی متن. `.hero-box` با `max-width` و padding. دو دکمه: `.btn` پررنگ و `.btn-outline`. دکمه‌ها در hero هم با Flex کنار هم (wrap در موبایل).

### Live Coding

```html
<section class="hero">
  <div class="hero-box">
    <h1>طعم اصیل آشپزی ایرانی</h1>
    <p>کباب تازه روی ذغال، هر روز از ظهر تا شب.</p>
    <a href="#mains" class="btn">دیدن منو</a>
    <a href="#reserve" class="btn btn-outline">رزرو میز</a>
  </div>
</section>
```

```css
.hero {
  min-height: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5c4033 url("../images/hero.jpg") center/cover no-repeat;
  color: #fff;
}
.hero-box { background: rgba(0,0,0,0.45); padding: 2rem; border-radius: 0.5rem; max-width: 36rem; }
.btn { display: inline-block; padding: 0.5rem 1rem; background: #e76f51; color: #fff; text-decoration: none; border-radius: 0.35rem; margin-inline-end: 0.5rem; }
```

### نمایش

[`index.html`](../index.html) hero — contrast متن روی عکس.

### سؤال

«اگر تصویر لود نشود چه می‌بینیم؟» (رنگ پس‌زمینه solid.)

### اشتباهات

- متن روشن روی عکس روشن بدون overlay.
- `h1` داخل hero و دوباره در هر section بدون سلسله‌مراتب.

### انتقال

«کامپوننت کارت غذا.»

---

## درس ۴ — کارت غذا (article، تصویر، برچسب)

**مرجع:** `.dish` · [`03-dish-card`](../quizzes/1-topic-exercises/03-dish-card/README.md)

### متن تدریس

هر غذا `article.dish`: `img` با `alt` توصیفی، `h3`، پاراگراف، `.price`. برچسب‌ها: `span.tag-veg`، `mark` برای جدید. تخفیف: `del` + `ins`. تصویر: `width: 100%`، `object-fit: cover`، ارتفاع ثابت.

### Live Coding

```html
<article class="dish">
  <img src="images/mirza.jpg" alt="میرزاقاسمی با نان و سبزی">
  <div class="dish-body">
    <h3>میرزاقاسمی <span class="tag tag-veg">گیاهی</span></h3>
    <p>بادمجان کبابی و تخم‌مرغ به سبک گیلانی.</p>
    <p class="price">۱۸۵٬۰۰۰ تومان</p>
  </div>
</article>
```

```css
.dish { border: 1px solid #e8dcc8; border-radius: 0.5rem; overflow: hidden; background: #fff; }
.dish img { width: 100%; height: 11rem; object-fit: cover; display: block; }
.tag-veg { font-size: 0.75rem; background: #d4edda; padding: 0.1rem 0.4rem; border-radius: 0.25rem; }
```

### نمایش

یک کارت در DevTools — box model تصویر.

### سؤال

«`alt=""` برای عکس تزئینی کافی است؟» (اینجا خیر — محتوا معنادار است.)

### اشتباهات

- `alt="image"` یا نام فایل.
- قیمت فقط در `title` بدون متن visible.

### انتقال

«چیدمان چند کارت با Grid.»

---

## درس ۵ — چیدمان منو (Grid + راهنما)

**مرجع:** `.dishes-grid` · [`04-menu-layout`](../quizzes/1-topic-exercises/04-menu-layout/README.md)

### متن تدریس

هر بخش منو `section#starters` با `h2` و `div.dishes-grid`. Grid: `repeat(auto-fit, minmax(14rem, 1fr))` و `gap`. راهنمای نمادها: `dl` با `dt`/`dd`. `main.container` عرض محدود.

### Live Coding

```html
<section id="starters">
  <h2>پیش‌غذا</h2>
  <div class="dishes-grid">
    <!-- چند article.dish -->
  </div>
</section>
```

```css
.dishes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1.25rem;
}
.legend dl { display: grid; grid-template-columns: auto 1fr; gap: 0.25rem 1rem; }
```

### نمایش

Grid overlay در DevTools — shrink viewport.

### سؤال

«`auto-fit` با سه کارت ثابت چه می‌کند؟» (ستون‌ها تا جا باز می‌شوند.)

### اشتباهات

- float برای کارت‌ها در پروژه جدید.
- `minmax` بدون `minmax(0, 1fr)` و overflow متن.

### انتقال

«جدول نوشیدنی‌ها.»

---

## درس ۶ — جدول نوشیدنی (دسترس‌پذیری)

**مرجع:** `#drinks` · [`05-drinks-table`](../quizzes/1-topic-exercises/05-drinks-table/README.md)

### متن تدریس

`table` با `caption`، `thead`/`tbody`/`tfoot`، `th scope="col"`. راه‌راه با `:nth-child`. در موبایل: wrapper با `overflow-x: auto`. اختیاری: `figure` برای عکس کنار جدول.

### Live Coding

```html
<section id="drinks">
  <h2>نوشیدنی</h2>
  <div class="table-wrap">
    <table>
      <caption>نوشیدنی‌های سرد و گرم</caption>
      <thead>
        <tr><th scope="col">نام</th><th scope="col">حجم</th><th scope="col">قیمت</th></tr>
      </thead>
      <tbody>
        <tr><td>دوغ محلی</td><td>۵۰۰ ml</td><td>۴۵٬۰۰۰</td></tr>
      </tbody>
    </table>
  </div>
</section>
```

```css
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 0.5rem; border-bottom: 1px solid #e8dcc8; text-align: start; }
```

### نمایش

عرض 375px — scroll افقی جدول.

### سؤال

«تفاوت `th` و `td` برای screen reader؟»

### اشتباهات

- جدول فقط برای layout (div grid بهتر است).
- بدون `caption` یا `scope`.

### انتقال

«فرم رزرو میز.»

---

## درس ۷ — فرم رزرو (HTML5 + استایل focus)

**مرجع:** `#reserve` · [`06-reservation-form`](../quizzes/1-topic-exercises/06-reservation-form/README.md)

### متن تدریس

`form#reserve-form`: هر فیلد با `label for`، انواع `text`، `tel`، `date`، `time`، `number`، `select`. `required`، `pattern` برای موبایل، `min`/`max` برای نفرات. `fieldset` برای گروه. `:focus` و `:focus-visible` واضح. **بدون JS** — ارسال واقعی نیست.

### Live Coding

```html
<section id="reserve">
  <h2>رزرو میز</h2>
  <form id="reserve-form" action="#" method="get">
    <p>
      <label for="name">نام</label>
      <input id="name" name="name" type="text" required minlength="3" autocomplete="name">
    </p>
    <p>
      <label for="phone">موبایل</label>
      <input id="phone" name="phone" type="tel" required pattern="09[0-9]{9}">
    </p>
    <button type="submit" class="btn">ثبت درخواست</button>
  </form>
</section>
```

```css
input:focus-visible, select:focus-visible, button:focus-visible {
  outline: 2px solid #e76f51;
  outline-offset: 2px;
}
```

### نمایش

Tab بین فیلدها؛ validator HTML5 با موبایل نادرست.

### سؤال

«`method="get"` اینجا مشکلی دارد؟» (برای دمو OK؛ در production POST + backend.)

### اشتباهات

- `placeholder` به‌جای `label`.
- دکمه submit بدون `type="submit"`.

### انتقال

«FAQ و پاورقی تماس.»

---

## درس ۸ — FAQ، تماس و footer

**مرجع:** [`07-faq-details`](../quizzes/1-topic-exercises/07-faq-details/README.md) · [`08-footer-contact`](../quizzes/1-topic-exercises/08-footer-contact/README.md)

### متن تدریس

سوالات: `details`/`summary` — بدون JS باز/بسته. `#contact`: `address`، لینک `tel:` و `mailto:` با `rel="noopener"` برای لینک خارجی. `footer`: کپی‌رایت و `time datetime`.

### Live Coding

```html
<section aria-labelledby="faq-title">
  <h2 id="faq-title">پرسش‌های پرتکرار</h2>
  <details>
    <summary>آیا غذای گیاهی دارید؟</summary>
    <p>بله؛ غذاهای با برچسب گیاهی.</p>
  </details>
</section>
<footer class="site-footer" id="contact">
  <address>
    تهران، خیابان … · <a href="tel:+982112345678">۰۲۱-۱۲۳۴۵۶۷۸</a>
  </address>
  <p><small>© <time datetime="2026">۱۴۰۵</time> رستوران نارنج</small></p>
</footer>
```

### نمایش

باز کردن `details` با keyboard (Enter/Space).

### سؤال

«چرا `address` فقط برای تماس رستوران؟»

### اشتباهات

- `summary` داخل heading اضافی که outline را خراب کند.
- `target="_blank"` بدون `rel="noopener noreferrer"`.

### انتقال

«واکنش‌گرایی و polish نهایی.»

---

## درس ۹ — Responsive و یکپارچه‌سازی

**مرجع:** انتهای [`css/style.css`](../css/style.css) · [`09-responsive`](../quizzes/1-topic-exercises/09-responsive/README.md)

### متن تدریس

یک `@media (max-width: 40rem)`: nav عمودی یا wrap، hero padding کمتر، فرم تک‌ستونه. چک لیست: Validator، Lighthouse accessibility سطح پایه، contrast. مقایسه با [`index.html`](../index.html) کامل — تفاوت‌ها OK اگر الزامات برآورده شود.

### Live Coding

```css
@media (max-width: 40rem) {
  .site-header { flex-direction: column; align-items: stretch; gap: 0.5rem; }
  .main-nav { justify-content: center; }
  .hero-box { margin: 1rem; padding: 1.25rem; }
}
```

### نمایش

DevTools device toolbar — 375px و 1280px.

### سؤال

«اول mobile-first می‌نویسیم یا desktop-first؟» (هر دو OK؛ یک breakpoint کافی برای تمرین.)

### اشتباهات

- ده media query بدون نیاز.
- مخفی کردن محتوای مهم فقط با `display: none` در موبایل.

### انتقال

«پروژه کلاس و تمرین خانه.»

---

## پروژه جلسه — منوی کافه «بهارنارنج»

**مدت:** ۴۵–۹۰ دقیقه · **راهنما:** [`project-04-cafe-menu`](../quizzes/2-combined-projects/project-04-cafe-menu/README.md)

### شرح

بازسازی الگوی نارنج برای یک کافه: header، hero کوتاه، حداقل ۴ کارت با Grid، جدول ۳ ردیف، فرم ساده، footer. پالت رنگ متفاوت از جدول quizzes.

### Live Coding

از درس ۱ اسکلت؛ کپی **نکنید** — نام غذا و classها را خودتان نام‌گذاری کنید.

### نمایش

[`index.html`](../index.html) کنار کار هنرجو — فقط برای ایده layout.

---

## جمع‌بندی

| موضوع | کلید |
|--------|------|
| معنایی | header, nav, main, section, article, footer |
| Flex | سربرگ، دکمه‌های hero |
| Grid | dishes-grid، auto-fit |
| فرم | label، validation HTML5، focus |
| a11y | alt، caption، scope، focus-visible |

**بعدی:** [10 JS پایه](../../10-JS-پایه/) — بعداً [13 نسخه تعاملی](../../13-پروژه-منوی-رستوران-JS/)

---

## تمرین

1. [`quizzes/1-topic-exercises/`](../quizzes/1-topic-exercises/) — ۹ مبحث، ۲۷ تمرین
2. [`quizzes/2-combined-projects/`](../quizzes/2-combined-projects/) — از project-01
3. **تحویل:** صفحه منوی شخصی (رستوران یا کافه) بدون کپی مستقیم CSS نارنج

**معیار:** Validator بدون خطای جدی؛ Grid+Flex؛ فرم با label؛ یک breakpoint موبایل.
