# سناریوی تدریس درس ۷: Inline-block

**صفحه جزوه:** [`pages/07-inline-block.html`](../../pages/07-inline-block.html)  
**پیش‌نیاز:** [display](./01-نمایش.md)  
**مدت پیشنهادی:** حدود 65 دقیقه  
**هدف جلسه:** width/height روی عناصر کنار هم؛ مشکل whitespace.

**چرخه ثابت تدریس:** مسئله واقعی → دیالوگ → Live Coding → مرورگر → سؤال → راه‌حل

| موضوع | زمان |
|------|------|
| دکمه‌ها کنار هم | 15 دقیقه |
| inline-block | 25 دقیقه |
| whitespace gap | 15 دقیقه |
| تمرین | 10 دقیقه |
| **مجموع** | **65 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله واقعی

«سه tab کنار هم می‌خواهیم — `inline` width نمی‌گیرد، `block` می‌شکند خط. **`inline-block`** وسط است.»

---

## 2) inline-block

«کنار هم + width/height/padding عمودی. فاصله عجیب؟ **whitespace** بین tagهای HTML.»

«راه‌حل مدرن: flex + gap روی parent ([Flexbox](../../../07-CSS-Flexbox/index.html)).»

```css
.tabs { display: flex; gap: 0.5rem; }
.tab { padding: 0.5rem 1rem; background: #e2e8f0; border-radius: 0.25rem; }
```

**در مرورگر:** flex gap vs inline-block whitespace.

### انتقال

«center کردن block — align.»

---

## پروژه کوچک جلسه

tabs با flex (ترجیح) یا inline-block (تاریخی).

---

## جمع‌بندی و سؤالات پایانی

1. فاصله بین inline-block؟
   **پاسخ راهنما:** newline whitespace در HTML.

2. vertical-align؟
   **پاسخ راهنما:** baseline inline-block — گاهی جابه‌جایی عمودی.

---

## تمرین‌ها (ساده → چالشی)

1. سه tab inline-block.
2. همان با flex.
3. vertical-align middle.

---

## انتقال به درس بعدی

→ [`08-align.html`](../pages/08-align.html) · [`08-تراز-align.md`](./08-تراز-align.md)
