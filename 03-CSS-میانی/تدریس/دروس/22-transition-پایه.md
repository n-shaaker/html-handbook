# سناریوی تدریس درس ۲۲: Transition پایه · **اختیاری**

**صفحه جزوه:** [`pages/22-transitions.html`](../../pages/22-transitions.html)  
**پیش‌نیاز:** [pseudo-classes](./10-شبه-کلاس‌ها.md)  
**مدت پیشنهادی:** حدود 55 دقیقه  
**هدف جلسه:** property duration easing — **اختیاری**.

**چرخه ثابت تدریس:** مسئله واقعی → دیالوگ → Live Coding → مرورگر → سؤال → راه‌حل

| موضوع | زمان |
|------|------|
| hover ناگهانی | 12 دقیقه |
| transition shorthand | 28 دقیقه |
| تمرین | 15 دقیقه |
| **مجموع** | **55 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله واقعی

«**اختیاری:** دکمه hover ناگهانی است — **`transition`** نرمش می‌کند.»

---

## 2) transition

«`transition: property duration easing`; چند property comma-separated.»

```css
.btn {
  background: #6366f1;
  color: #fff;
  transition: background-color 0.2s ease, transform 0.15s ease;
}
.btn:hover { background: #4f46e5; transform: translateY(-1px); }
```

---

## پروژه کوچک جلسه

button با transition.

---

## جمع‌بندی و سؤالات پایانی

1. transition all?
   **پاسخ راهنما:** perf — list properties.

2. width transition?
   **پاسخ راهنما:** layout reflow — cautious.

---

## تمرین‌ها (ساده → چالشی)

1. color transition.
2. transform hover.
3. reduced-motion off.

---

## انتقال به درس بعدی

→ [`23-transitions-ui.html`](../pages/23-transitions-ui.html) · [`23-transition-UI.md`](./23-transition-UI.md)
