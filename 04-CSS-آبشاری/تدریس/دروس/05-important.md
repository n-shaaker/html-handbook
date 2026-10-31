# سناریوی تدریس درس ۵: `!important`

**صفحه جزوه:** [`pages/05-important.html`](../../pages/05-important.html)  
**پیش‌نیاز:** [وراثت](./04-وراثت.md)  
**مدت پیشنهادی:** حدود ۷۵ دقیقه  
**هدف جلسه:** دانشجو بداند `!important` به **یک declaration** می‌چسبد، از almost همهٔ ruleهای عادی برنده است، ولی بین دو `!important` دوباره **specificity + order** حاکم است — و چرا **کم** باید استفاده شود.

**چرخه ثابت تدریس:** مسئله → دیالوگ → Live → مرورگر → سؤال → راه‌حل

| موضوع | زمان |
|------|------|
| باگ «رنگ عوض نمی‌شود» | ۱۲ دقیقه |
| بدون vs با !important | ۲۰ دقیقه |
| !important vs #id | ۱۵ دقیقه |
| دو !important | ۱۵ دقیقه |
| inline (اشاره) + جمع‌بندی | ۱۳ دقیقه |
| **مجموع** | **۷۵ دقیقه** |

---

## ۱) شروع کلاس — دیالوگ

«بچه‌ها، فرض کنید یک banner قدیمی دارید:

```css
.banner { color: red !important; }
```

تیم design system فایل جدید می‌دهد:

```css
.banner { color: #1a5fb4; }
```

یا حتی:

```css
#site .banner { color: #1a5fb4; }
```

شما rule پایین فایل اضافه می‌کنید — **هیچ‌چیز عوض نمی‌شود**. DevTools می‌گوید rule جدید خط‌خورده.

آیا مرورگر خراب است؟ یا لایه‌ای در cascade هست که هنوز درست نخوانده‌ایم؟

امروز **فقط** طبق [`important.css`](../../css/demos/important.css) و جزوه پیش می‌رویم — بدون `!important` روی همه‌چیز در پروژهٔ واقعی.»

---

## ۲) بدون !important — order کار می‌کند

```css
.demo-imp .normal {
  color: #c92a2a;
  font-size: 20px;
}

.demo-imp .normal {
  color: #1a5fb4;
}
```

HTML: `<p class="normal demo-imp">…</p>` (ساختار را داخل `.demo-imp` بگذار)

**در مرورگر:** آبی — همان درس ۱.

«پس far so good — specificity برابر، پایین برنده.»

---

## ۳) با !important — rule پایین شکست می‌خورد

```css
.demo-imp .force {
  color: #c92a2a !important;
  font-size: 20px;
}

.demo-imp .force {
  color: #1a5fb4;
}
```

**در مرورگر:** **قرمز** — rule دوم **بدون** important نادیده برای `color`.

### سؤال کلاسی

«آیا `font-size: 20px` از rule اول می‌ماند؟»  
**پاسخ:** بله — فقط `color` در rule دوم override شده و باز هم important برنده است.

«`!important` روی کل block است؟»  
**پاسخ:** خیر — **هر property جدا**؛ فقط کنار همان declaration.

---

## ۴) !important در برابر #id

```css
.demo-imp #force-id {
  color: #0b6e4f;
}

.demo-imp .force-vs-id {
  color: #c92a2a !important;
}
```

HTML: `<p class="force-vs-id" id="force-id">…</p>`

**در مرورگر:** قرمز — important از id **قوی‌تر** (در سطح normal declarations — طبق جزوه).

«پس specificity بالا همیشه برنده **نیست** اگر طرف important داشته باشد. **راه‌حل design:** important را از legacy حذف کنید، نه important بیشتر.»

---

## ۵) دو !important — دوباره specificity

```css
.demo-imp p.both {
  color: #0b6e4f !important;
}

.demo-imp .both {
  color: #c92a2a !important;
}
```

**در مرورگر:** سبز — `p.both` → `(0, 2, 1)` بر `(0, 2, 0)` although `.both` rule دیرتر است.

### سؤال کلاسی

«هر دو important — چه کسی تصمیم می‌گیرد؟»  
**پاسخ:** specificity؛ اگر برابر → order.

---

## ۶) inline style (سطح جزوه)

«`style="color: blue"` از rule عادی فایل قوی‌تر است — ولی `color: x !important` در CSS از inline عادی برنده می‌شود (جزوه بخش نکات دقیق‌تر را بخوان).

**پیام کلاس:** اول selector درست؛ بعد cascade layers؛ **آخر** important.»

---

## ۷) اشتباهات

| غلط | درست |
|-----|------|
| `!important` برای همه overrideها | refactor selector / ساختار |
| important + important جنگ | حذف یک طرف |
| فکر کردن important «همیشه آخرین کلمه» | بین دو important → specificity |

---

## ۸) پروژه mini — «پاکسازی legacy»

1. نمایش `.force` با important.  
2. rule آبی پایین — شکست.  
3. **تمرین:** important را بردار — آبی شود.  
4. بحث: چرا در production این refactor ارزش دارد.

---

## ۹) جمع‌بندی

1. rule عادی پایین vs important بالا?  
   **پاسخ:** important.

2. دو important —?  
   **پاسخ:** specificity سپس order.

3. بهترین جایگزین important?  
   **پاسخ:** selector مناسب، ترتیب فایل، متغیر، معماری component.

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. `.normal` — swap order — رنگ؟  
2. `.force` — بدون حذف rule دوم، چرا آبی نمی‌شود؟

### متوسط
3. `#force-id` بدون important vs `.force-vs-id` با important — پیش‌بینی.  
4. `p.both` vs `.both` — هر دو important — برنده؟

### چالشی
5. سناریو بنویس: utility `.text-red { color: red !important }` چرا design system را می‌شکند.  
6. لیست ۳ جای **مجاز** occasional important (مثلاً print helper — اگر در جزوه آمده).

**ارجاع:** [`05-important.html`](../../pages/05-important.html)

---

## انتقال به درس بعدی

«important و id و order را دیدیم. یک حالت رایج: **چند class** روی یک element — آیا ترتیب `class="a b c"` مهم است؟»

→ [`06-tie-break.html`](../../pages/06-tie-break.html) · [`06-تساوی-کلاس‌ها.md`](./06-تساوی-کلاس‌ها.md)
