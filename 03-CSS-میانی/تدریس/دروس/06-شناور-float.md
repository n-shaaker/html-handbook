# سناریوی تدریس درس ۶: شناور کردن (Float و Clear)

**صفحه جزوه:** [`pages/06-float.html`](../../pages/06-float.html)  
**پیش‌نیاز:** [overflow](./05-سرریز-overflow.md)  
**مدت پیشنهادی:** حدود 70 دقیقه  
**هدف جلسه:** float برای wrap متن دور تصویر؛ clearfix؛ چرا navbar امروز flex است.

**چرخه ثابت تدریس:** مسئله واقعی → دیالوگ → Live Coding → مرورگر → سؤال → راه‌حل

| موضوع | زمان |
|------|------|
| تصویر و متن مقاله | 15 دقیقه |
| float و clear | 25 دقیقه |
| clearfix | 15 دقیقه |
| تمرین | 15 دقیقه |
| **مجموع** | **70 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله واقعی

«در مقاله خبری عکس سمت راست و متن دور آن می‌پیچد — قبل از flex این کار با **`float`** بود. می‌فهمیم و برای layout اصلی به Flex/Grid ارجاع می‌دهیم.»

---

## 2) float

«`float: inline-start` (یا left/right) عنصر را کنار می‌برد؛ متن wrap می‌شود. **clear** float قبلی را پاک می‌کند.»

«collapse ارتفاع parent → **clearfix** روی parent.»

```css
.figure { float: inline-start; width: 8rem; margin-inline-end: 1rem; }
.clearfix::after { content: ""; display: table; clear: both; }
```

**در مرورگر:** متن دور تصویر؛ layout سایت را با [`07-Flexbox`](../../../07-CSS-Flexbox/index.html) بسازید نه float.

### انتقال

«inline-block — وسط inline و block.»

---

## پروژه کوچک جلسه

مقاله کوتاه با float image + clearfix.

---

## جمع‌بندی و سؤالات پایانی

1. navbar با float؟
   **پاسخ راهنما:** امروز flex ساده‌تر.

2. parent height صفر؟
   **پاسخ راهنما:** float children — clearfix.

---

## تمرین‌ها (ساده → چالشی)

1. float image.
2. clearfix.
3. مقایسه با flex row.

---

## انتقال به درس بعدی

→ [`07-inline-block.html`](../pages/07-inline-block.html) · [`07-inline-block.md`](./07-inline-block.md)
