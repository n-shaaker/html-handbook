# سناریوی تدریس درس ۲۴: Animation و keyframes · **اختیاری**

**صفحه جزوه:** [`pages/24-animations.html`](../../pages/24-animations.html)  
**پیش‌نیاز:** [23-transition-UI](./23-transition-UI.md)  
**مدت پیشنهادی:** حدود 65 دقیقه  
**هدف جلسه:** @keyframes — **اختیاری**.

**چرخه ثابت تدریس:** مسئله واقعی → دیالوگ → Live Coding → مرورگر → سؤال → راه‌حل

| موضوع | زمان |
|------|------|
| spinner | 15 دقیقه |
| keyframes | 30 دقیقه |
| تمرین | 20 دقیقه |
| **مجموع** | **65 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله واقعی

«**اختیاری:** loading spinner با **`@keyframes`** — decor only، reduced-motion respect.»

---

## 2) animation

«`@keyframes name { from/to or % }` + `animation: name duration easing infinite`.»

```css
@keyframes spin { to { transform: rotate(360deg); } }
.spinner {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #e2e8f0;
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .spinner { animation: none; border-top-color: #6366f1; }
}
```

---

## پروژه کوچک جلسه

spinner با reduced-motion.

---

## جمع‌بندی و سؤالات پایانی

1. infinite everywhere?
   **پاسخ راهنما:** distracting.

2. animation vs transition?
   **پاسخ راهنما:** keyframes multi-step auto.

---

## تمرین‌ها (ساده → چالشی)

1. spin keyframes.
2. pulse once.
3. disable for reduced-motion.

---

## انتقال به درس بعدی

→ [`25-practice.html`](../pages/25-practice.html) · [`25-جمع‌بندی-و-تمرین.md`](./25-جمع‌بندی-و-تمرین.md)
