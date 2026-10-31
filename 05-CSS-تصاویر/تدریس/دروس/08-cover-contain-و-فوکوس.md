# سناریوی تدریس درس ۸: cover، contain و background-position

**صفحه جزوه:** [`pages/08-size-position.html`](../../pages/08-size-position.html)  
**پیش‌نیاز:** [تصویر واکنش‌گرا](./07-تصویر-واکنش‌گرا.md) · object-fit درس ۵  
**مدت پیشنهادی:** حدود ۸۰ دقیقه  
**هدف:** `background-size: cover | contain`، `background-position` برای فوکوس چهره، تفاوت **background** vs **img object-fit**.

**چرخه:** مسئله → Live → resize → سؤال → پروژه

| موضوع | زمان |
|------|------|
| مسئله: سر crop شد | ۱۴ دقیقه |
| cover vs contain | ۲۲ دقیقه |
| background-position | ۲۲ دقیقه |
| object-position on img | ۱۰ دقیقه |
| پروژه mini | ۱۰ دقیقه |
| **مجموع** | **۸۰ دقیقه** |

---

## ۱) شروع — مسئله (دیالوگ)

«Hero با `background-image` + `background-size: cover` — box 160px ارتفاع. عکس portrait — **سر نفر crop** شد.

راه‌حل: **`background-position`** — مرکز پیش‌فرض `center center` نیست همیشه بهترین — `center top` یا `50% 20%` فوکوس را بالا می‌برد.

امروز **background-size** و **position** — برای div hero؛ برای `<img>` درس ۵ `object-fit` + `object-position`.»

---

## ۲) Live Coding — cover vs contain

مطابق [`size-position.css`](../../css/demos/size-position.css):

```css
.demo-size .box {
  height: 160px;
  background-image: url("../../images/food-1.jpg");
  background-repeat: no-repeat;
}
.demo-size .cover {
  background-size: cover;
  background-position: center;
}
.demo-size .contain {
  background-size: contain;
  background-position: center;
  background-color: #1a3a5c;
}
```

**در مرورگر:** cover = crop پر; contain = کل عکس + letterbox (رنگ پس‌زمینه دیده می‌شود).

### سؤال کلاسی

«contain برای بنner فروشگاه؟»  
**پاسخ:** معمولاً cover — contain gap می‌گذارد.

---

## ۳) Live — position چهره

```css
.demo-pos .face {
  height: 140px;
  background-image: url("../../images/profile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.demo-pos .face-top {
  background-position: center top;
}
.demo-pos .face-center {
  background-position: center;
}
```

**Compare:** کدام چهره کامل‌تر — resize width box.

«مقادیر: `top`, `bottom`, `center`, `25% 75%`, `center top`.»

---

## ۴) img: object-position

```css
.thumb img {
  object-fit: cover;
  object-position: center 20%;
  width: 100%;
  height: 150px;
}
```

«همان فوکوس — روی replaced element.»

---

## ۵) اشتباهات

| غلط | درست |
|-----|------|
| cover بدون height | height/min-height روی box |
| background-size روی img | object-fit |
| position فقط horizontal | vertical `%` برای portrait |

---

## ۶) پروژه mini

دو `.face` کنار هم — top vs 20% — caption فارسی.

---

## ۷) جمع‌بندی

1. cover?  
   **پاسخ:** scale crop fill box.

2. contain?  
   **پاسخ:** full image visible.

3. position purpose?  
   **پاسخ:** which part of image stays in frame.

---

## تمرین‌ها

### ساده — cover box 160px.  
### متوسط — face-top vs center screenshot.  
### چالشی — hero `50% 25%` test 3 widths.

**ارجاع:** [`08-size-position.html`](../../pages/08-size-position.html)

---

## انتقال

→ [`09-checklist.html`](../../pages/09-checklist.html) · [`09-چک‌لیست.md`](./09-چک‌لیست.md)
