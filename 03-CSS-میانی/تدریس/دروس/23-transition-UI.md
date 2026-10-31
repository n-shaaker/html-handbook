# سناریوی تدریس درس ۲۳: Transition در UI · **اختیاری**

**صفحه جزوه:** [`pages/23-transitions-ui.html`](../../pages/23-transitions-ui.html)  
**پیش‌نیاز:** [22-transition](./22-transition-پایه.md)  
**مدت پیشنهادی:** حدود 60 دقیقه  
**هدف جلسه:** menu، accordion hints — **اختیاری**.

**چرخه ثابت تدریس:** مسئله واقعی → دیالوگ → Live Coding → مرورگر → سؤال → راه‌حل

| موضوع | زمان |
|------|------|
| dropdown fade | 15 دقیقه |
| UI patterns | 30 دقیقه |
| تمرین | 15 دقیقه |
| **مجموع** | **60 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله واقعی

«**اختیاری:** باز شدن منو با opacity/transform نه فقط display toggle.»

---

## 2) transitions UI

«opacity+visibility+transition vs display; `transform` برای slide subtle.»

```css
.panel {
  opacity: 0;
  transform: translateY(-0.25rem);
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
}
.panel.is-open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
```

---

## پروژه کوچک جلسه

panel toggle class is-open.

---

## جمع‌بندی و سؤالات پایانی

1. display none transition?
   **پاسخ راهنما:** can't interpolate — use opacity/max-height tricks.

2. motion accessibility?
   **پاسخ راهنما:** prefers-reduced-motion.

---

## تمرین‌ها (ساده → چالشی)

1. fade panel.
2. respect reduced-motion.
3. compare display vs opacity.

---

## انتقال به درس بعدی

→ [`24-animations.html`](../pages/24-animations.html) · [`24-animation.md`](./24-animation.md)
