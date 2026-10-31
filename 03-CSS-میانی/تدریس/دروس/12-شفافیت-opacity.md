# سناریوی تدریس درس ۱۲: شفافیت (Opacity)

**صفحه جزوه:** [`pages/12-opacity.html`](../../pages/12-opacity.html)  
**پیش‌نیاز:** [pseudo-elements](./11-شبه-عنصرها.md)  
**مدت پیشنهادی:** حدود 65 دقیقه  
**هدف جلسه:** opacity vs alpha در background؛ stacking context.

**چرخه ثابت تدریس:** مسئله واقعی → دیالوگ → Live Coding → مرورگر → سؤال → راه‌حل

| موضوع | زمان |
|------|------|
| overlay تیره | 15 دقیقه |
| opacity subtree | 20 دقیقه |
| rgba/hsla | 20 دقیقه |
| تمرین | 10 دقیقه |
| **مجموع** | **65 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله واقعی

«overlay روی hero داریم — با `opacity:0.5` روی div کل متن هم محو شد. راه درست **alpha فقط روی پس‌زمینه**.»

---

## 2) opacity

«`opacity` روی element + **همه فرزندان**. برای bg: `rgb(15 23 42 / 0.6)`. opacity<1 stacking context.»

```css
.overlay { background: rgb(15 23 42 / 0.6); }
.fade { opacity: 0.85; }
.fade:hover { opacity: 1; }
```

### انتقال

«navbar افقی — flex در 07.»

---

## پروژه کوچک جلسه

hero overlay با alpha نه opacity parent.

---

## جمع‌بندی و سؤالات پایانی

1. متن محو؟
   **پاسخ راهنما:** opacity parent — از alpha bg.

2. opacity vs visibility؟
   **پاسخ راهنما:** متفاوت — visibility inherit محتوا.

---

## تمرین‌ها (ساده → چالشی)

1. overlay readable.
2. hover fade card.
3. contrast check.

---

## انتقال به درس بعدی

→ [`13-navbar.html`](../pages/13-navbar.html) · [`13-نوار-منو.md`](./13-نوار-منو.md)
