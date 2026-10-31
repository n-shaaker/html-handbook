# سناریوی تدریس درس ۲۱: Media Queries و واکنش‌گرایی

**صفحه جزوه:** [`pages/21-media-queries.html`](../../pages/21-media-queries.html)  
**پیش‌نیاز:** [چیدمان سایت](./20-چیدمان-سایت.md) — grid `.page`  
**مدت پیشنهادی:** حدود ۹۰ دقیقه  
**هدف جلسه:** `@media` با **mobile-first** (`min-width`)، stack layout در موبایل بدون scroll افقی، demo `.cards` جزوه، و `prefers-reduced-motion`.

**چرخه ثابت تدریس:** مسئله → دیالوگ → Live Coding → مرورگر → سؤال → راه‌حل

| موضوع | زمان |
|------|------|
| مسئله: sidebar روی موبایل | ۱۴ دقیقه |
| viewport meta | ۸ دقیقه |
| max-width vs min-width | ۱۸ دقیقه |
| Live: cards grid جزوه | ۱۸ دقیقه |
| layout shell درس ۲۰ | ۱۵ دقیقه |
| prefers-reduced-motion | ۱۰ دقیقه |
| پروژه + تمرین | ۷ دقیقه |
| **مجموع** | **۹۰ دقیقه** |

---

## ۱) شروع کلاس — مسئله اول (دیالوگ)

«بچه‌ها، layout دو ستونه درس ۲۰ را روی لپ‌تاپ deploy کردید — sidebar 16rem کنار main.

مدیر با **گوشی** باز می‌کند: sidebar و main **کنار هم** مانده‌اند — یا scroll افقی، یا متن ۳ کلمه در خط.

HTML درست است — **یک CSS برای همه عرض‌ها کافی نیست**.

Media Query = *«اگر شرط برقرار بود، این قوانین اضافه شوند.»*  
امروز **mobile-first**: پایه برای باریک؛ از `min-width` به بالا غنی‌تر.»

---

## ۲) viewport — بدون آن media query گمراه‌کننده است

«در `<head>` هر demo فارسی:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

بدون viewport، موبایل صفحه 980px دسکتاپ را scale down می‌کند — `@media (max-width: 700px)` شاید هرگز fire نشود.

**در مرورگر:** DevTools → responsive → بدون meta (در iframe آموزش) vs با meta — تفاوت عرض layout.»

### سؤال کلاسی

«viewport meta محتوا HTML را عوض می‌کند؟»  
**پاسخ:** خیر — فقط به مرورger می‌گوید CSS pixel layout چطور map شود.

---

## ۳) Live Coding مرحله ۱ — demo `.box` جزوه

CSS [`media-queries.css`](../../css/demos/media-queries.css) — `.box` با breakpoint رنگ عوض می‌کند.

«پنجره را باریک/پهن کنید — **بدون reload** CSS عوض می‌شود.»

**نمایش:** [`21-media-queries.html`](../../pages/21-media-queries.html) مثال ۱.

---

## ۴) Live Coding مرحله ۲ — `.cards` سه ستون → یک ستون

مطابق جزوه:

```css
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
@media (max-width: 700px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```

«این **desktop-first** با `max-width` — جزوه برای clarity.  
**Mobile-first معادل:**

```css
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
@media (min-width: 44rem) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**در مرورگر:** 320px — سه کارت زیر هم؛ 1024px — سه ستون.»

### سؤال کلاسی

«`min-width: 48rem` یعنی از چه عرضی؟»  
**پاسخ:** وقتی viewport **≥ 48rem** — قوانین داخل block اعمال می‌شوند.

«`48rem` vs `768px`?»  
**پاسخ:** rem به font-size root وابسته — accessibility بهتر؛ px ثابت.

---

## ۵) Live Coding مرحله ۳ — shell `.page` از درس ۲۰

```css
.page {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "head"
    "main"
    "side"
    "foot";
}
@media (min-width: 48rem) {
  .page {
    grid-template-areas:
      "head head"
      "side main"
      "foot foot";
    grid-template-columns: 16rem minmax(0, 1fr);
  }
}
```

«**پایه:** یک ستون — sidebar زیر main.  
**wide:** sidebar چپ (در RTL area names همان منطق).

`minmax(0, 1fr)` — جلوگیری overflow grid item.»

**Live:** DevTools 320 vs 1024 — **بدون horizontal scroll** در 320.

---

## ۶) nav stack (اشاره)

```css
.nav-list {
  flex-direction: column;
  gap: 0.5rem;
}
@media (min-width: 48rem) {
  .nav-list {
    flex-direction: row;
    gap: 1.25rem;
  }
}
```

«hamburger با JS خارج scope — CSS فقط stack.»

---

## ۷) prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

«کاربر در OS «Reduce motion» — transition/animation ما آزاردهنده.  
`!important` اینجا استثنای accessibility — با درس cascade contrast.»

**در مرورگر:** OS setting یا DevTools rendering emulation (اگر موجود).

---

## ۸) اشتباهات رایج

- media query بدون viewport meta.  
- ده breakpoint بدون design need.  
- `grid-template-columns: 16rem 1fr` بدون minmax — overflow.  
- mix بی‌نظم max-width و min-width در یک پروژه.

---

## ۹) پروژه mini

layout `.page` mobile-first + `.cards` + block reduced-motion.

---

## ۱۰) جمع‌بندی و سؤالات پایانی

1. mobile-first با کدام keyword?  
   **پاسخ:** `min-width` روی base تک‌ستونه.

2. max-width 700px یعنی?  
   **پاسخ:** viewport ≤ 700px — rules apply.

3. چرا rem برای breakpoint?  
   **پاسخ:** scale با user font root.

**پیام پایانی:** «Responsive = همان HTML، CSS شرطی. transition اختیاری درس ۲۲.»

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. یک breakpoint — cards 1 vs 3 column.  
2. viewport meta را حذف موقت — observe.

### متوسط
3. `.page` stack → two column at 48rem.  
4. nav column → row.

### چالشی
5. 320px screenshot بدون horizontal scroll.  
6. mobile-first rewrite max-width cards example.

**ارجاع:** [`21-media-queries.html`](../../pages/21-media-queries.html)

---

## انتقال به درس بعدی

→ [`22-transitions.html`](../../pages/22-transitions.html) · [`22-transition-پایه.md`](./22-transition-پایه.md)
