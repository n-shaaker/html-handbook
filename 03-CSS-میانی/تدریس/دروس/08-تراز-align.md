# سناریوی تدریس درس ۸: وسط‌چین و تراز (Align)

**صفحه جزوه:** [`pages/08-align.html`](../../pages/08-align.html)  
**پیش‌نیاز:** [max-width](./02-حداکثر-عرض.md)  
**مدت پیشنهادی:** حدود 70 دقیقه  
**هدف جلسه:** text-align، margin auto، تفاوت inline content vs block box.

**چرخه ثابت تدریس:** مسئله واقعی → دیالوگ → Live Coding → مرورگر → سؤال → راه‌حل

| موضوع | زمان |
|------|------|
| تیتر وسط | 12 دقیقه |
| text-align | 18 دقیقه |
| margin auto | 20 دقیقه |
| vertical limits | 15 دقیقه |
| تمرین | 15 دقیقه |
| **مجموع** | **80 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله واقعی

«hero می‌خواهیم عنوان وسط صفحه — بعضی‌ها `text-align` می‌زنند روی div و انتظار center شدن child block را دارند. امروز **کدام تراز برای کدام نوع جعبه** است.»

---

## 2) align

«**محتوای inline** داخل block: `text-align`. **خود block** در parent: `width/max-width` + `margin-inline: auto`.»

«عمودی تک‌خط: line-height؛ چندخط/modern: flex/grid در ماژول 07/08.»

```css
.hero-title { text-align: center; }
.narrow { max-width: 32rem; margin-inline: auto; }
```

**در مرورگر:** RTL — start/end vs left/right در تمرین بعدی combinators.

### انتقال

«selector دقیق‌تر — combinators.»

---

## پروژه کوچک جلسه

hero با title center و paragraph در narrow column.

---

## جمع‌بندی و سؤالات پایانی

1. center div block؟
   **پاسخ راهنما:** margin-inline auto نه text-align parent.

2. vertical-align روی div block؟
   **پاسخ راهنما:** بی‌اثر — inline/inline-block/table-cell.

---

## تمرین‌ها (ساده → چالشی)

1. text-align center.
2. box 300px centered.
3. flex center (ارجاع 07).

---

## انتقال به درس بعدی

→ [`09-combinators.html`](../pages/09-combinators.html) · [`09-ترکیب‌کننده‌ها.md`](./09-ترکیب‌کننده‌ها.md)
