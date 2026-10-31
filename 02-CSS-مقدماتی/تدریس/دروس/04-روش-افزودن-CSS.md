# سناریوی تدریس درس ۴: سه روش افزودن CSS

**صفحه جزوه:** [`pages/04-howto.html`](../../pages/04-howto.html)  
**پیش‌نیاز:** درس ۲–۳  
**مدت پیشنهادی:** حدود ۶۵ دقیقه  
**هدف:** دانشجو بداند CSS را **کجا** بنویسد؛ فایل خارجی را به‌عنوان استاندارد پروژه انتخاب کند.

| موضوع | زمان |
|------|------|
| مسئله: ۱۰ صفحه، یک رنگ برند | ۱۰ دقیقه |
| External / Internal / Inline | ۲۰ دقیقه |
| ترتیب cascade | ۱۰ دقیقه |
| Live سه لایه | ۱۵ دقیقه |
| تمرین | ۱۰ دقیقه |
| **مجموع** | **۶۵ دقیقه** |

---

## ۱) شروع — کابوس نگهداری

«سایت ۱۰ صفحه. مدیر می‌گوید آبی برند از `#2563eb` به `#1d4ed8` عوض شود.

اگر CSS **داخل هر HTML** کپی شده باشد، ده فایل را باز می‌کنید. اگر **یک** `style.css` لینک شده باشد، **یک خط** — تمام.

این درس *کجا* بنویسیم، نه *چه* بنویسیم.»

---

## ۲) روش ۱ — فایل خارجی (External) ✅

```html
<link rel="stylesheet" href="css/style.css">
```

«در `<head>`. مسیر relative به فایل HTML. **پیش‌فرض هر پروژه واقعی.**  
مزایا: یک منبع حقیقت، کش مرورگر، تیم جدا HTML/CSS کار می‌کند.»

**Live:** `style.css` بسازید:

```css
body {
  font-family: Tahoma, sans-serif;
  color: #1e293b;
}
.from-file { color: #1d4ed8; }
```

---

## ۳) روش ۲ — `<style>` در head (Internal)

```html
<style>
  .banner {
    background: #fef3c7;
    border: 1px solid #f59e0b;
    padding: 0.75rem 1rem;
  }
</style>
```

«برای **prototype**، demo کلاس، یا یک صفحه landing که هیچ‌وقت مشترک نمی‌شود. جزوه اصلی از external استفاده می‌کند.»

---

## ۴) روش ۳ — Inline

```html
<p style="color: #dc2626;">فقط این خط قرمز.</p>
```

«**استثناء:** ایمیل HTML، CMS یک فیلد، تست یک ثانیه‌ای. در پروژه دوره: **ممنوع** مگر استاد بگوید.»

چرا بد؟ تکرار، specificity خیلی بالا، نگهداری سخت.

---

## ۵) cascade روی یک عنصر

«اگر سه لایه رنگ `p` بدهند:

1. فایل خارجی: خاکستری  
2. `<style>`: آبی  
3. inline: قرمز  

معمولاً **inline برنده** — مگر specificity پیچیده‌تر شود.»

**Live:** سه لایه را روی یک `<p class="from-file">` تست کنید.

### سؤال کلاسی

«چرا جزوه گفت CSS inline در demo نیست؟»  
**پاسخ:** الگوی حرفه‌ای external؛ inline فقط override موقت.

### اشتباهات رایج

- `href="style.css"` اشتباه از پوشه فرعی.  
- فراموش `rel="stylesheet"`.  
- ده `<link>` بدون ترتیب و نام‌گذاری.

---

## ۶) پروژه mini — ساختار پوشه

```
project/
  index.html
  css/
    style.css
```

`index.html` فقط لینک؛ تمام ruleها در `style.css`. یک `.banner` در internal برای «هشدار تعمیرات» — بحث کنید کدام روش برای کدام بخش.

---

## ۷) چند `<link>` و ترتیب

«پروژه واقعی:

```html
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/components.css">
```

قوانین **بعدی** در cascade روی قبلی می‌نشیند — reset اول، component آخر. نام فایل convention تیم است؛ مهم **ترتیب link** است.»

**Live:** در `base.css` `p { color: gray }` و در `components.css` `.lead { color: blue }` — Inspect روی `.lead`.

---

## ۸) inline فقط برای override موقت

«گاهی CMS یک فیلد «رنگ بنر» می‌دهد — یک style attribute. در دوره ما **تمرین** با external است.

مقایسه specificity: inline attribute اغلب بر stylesheet غالب است — برای همین maintenance سخت است.»

### اشتباهات رایج (تکرار)

- duplicate CSS در هر صفحه  
- `<style>` ۵۰۰ خطی در one pager marketing  
- path شکسته: `href="/css/style.css"` vs relative

---

## ۹) جمع‌بندی و سؤالات پایانی

1. سه روش افزودن CSS نام ببرید.  
2. کدام برای سایت ۲۰ صفحه‌ای؟  
3. inline چه وقت استثناست؟

**پیام:** «از امروز folder `css/` و `style.css` habit شود.»

---

## تمرین‌ها (ساده → چالشی)

### ساده — لینk فایل خارجی به صفحه خالی.  
### متوسط — external + internal؛ پیش‌بینی رنگ.  
### چالشی — refactor: CSS از `<style>` به `style.css` بدون تغییر ظاهر.

**ارجاع:** [`04-howto.html`](../../pages/04-howto.html)

---

## انتقال

→ [`05-comments.html`](../../pages/05-comments.html) · [`05-کامنت-در-CSS.md`](./05-کامنت-در-CSS.md)
