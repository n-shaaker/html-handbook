# سناریوی تدریس درس ۵: سرریز (Overflow)

**صفحه جزوه:** [`pages/05-overflow.html`](../../pages/05-overflow.html)  
**پیش‌نیاز:** [position](./03-موقعیت.md)  
**مدت پیشنهادی:** حدود 70 دقیقه  
**هدف جلسه:** visible/hidden/scroll/auto و ارتباط با crop تصویر و sticky.

**چرخه ثابت تدریس:** مسئله واقعی → دیالوگ → Live Coding → مرورگر → سؤال → راه‌حل

| موضوع | زمان |
|------|------|
| متن از card بیرون زد | 12 دقیقه |
| overflow values | 25 دقیقه |
| sticky و hidden | 18 دقیقه |
| تمرین | 15 دقیقه |
| **مجموع** | **70 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله واقعی

«کارت گالری تصویر بزرگ‌تر از قاب است — یا scroll می‌خواهیم یا crop. **`overflow`** تصمیم می‌گیرد.»

---

## 2) overflow

«`visible` (پیش‌فرض)، `hidden` (برش)، `scroll` (همیشه scrollbar)، `auto` (وقتی لازم). محور: overflow-x/y.»

```css
.card-media {
  width: 12rem;
  height: 8rem;
  overflow: hidden;
  border-radius: 0.5rem;
}
.card-media img { width: 100%; height: 100%; object-fit: cover; }
```

**در مرورگر:** گوشه گرد + crop؛ dropdown بریده → ancestor overflow hidden.

### سؤال کلاسی

- «sticky نمی‌چسبد؟» → ancestor overflow hidden.

### انتقال

«float — میراث layout.»

---

## پروژه کوچک جلسه

card با overflow hidden و تصویر cover.

---

## جمع‌بندی و سؤالات پایانی

1. overflow hidden روی body؟
   **پاسخ راهنما:** معمولاً برای lock scroll modal — با احتیاط.

2. auto vs scroll؟
   **پاسخ راهنما:** auto فقط وقتی لازم scroll نشان می‌دهد.

---

## تمرین‌ها (ساده → چالشی)

1. div با scroll.
2. crop تصویر.
3. پیدا کردن ancestor بریده‌کننده dropdown.

---

## انتقال به درس بعدی

→ [`06-float.html`](../pages/06-float.html) · [`06-شناور-float.md`](./06-شناور-float.md)
