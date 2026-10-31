# سناریوی تدریس درس ۷: متغیرهای CSS (Custom Properties)

**صفحه جزوه:** [`pages/07-variables.html`](../../pages/07-variables.html)  
**پیش‌نیاز:** [تساوی کلاس‌ها](./06-تساوی-کلاس‌ها.md)  
**مدت پیشنهادی:** حدود ۷۰ دقیقه  
**هدف جلسه:** دانشجو `--name` را روی scope (مثل `.demo-var`) تعریف کند، با `var()` مصرف کند، و با **toggle class** روی والد (`theme-green`) همهٔ مصرف‌کنندگان را یک‌جا عوض کند — مطابق [`variables.css`](../../css/demos/variables.css).

**چرخه ثابت تدریس:** مسئله → Live → مرورگر → سؤال → پروژه

| موضوع | زمان |
|------|------|
| رنگ تکراری در ۲۰ rule | ۱۲ دقیقه |
| تعریف --brand و var() | ۲۰ دقیقه |
| تم با class روی والد | ۲۰ دقیقه |
| fallback و اشتباه Sass | ۱۰ دقیقه |
| پروژه کارت | ۸ دقیقه |
| **مجموع** | **۷۰ دقیقه** |

---

## ۱) شروع — دیالوگ

«بچه‌ها، فرض کنید `#1a5fb4` را در ۴۰ جا در CSS کپی کرده‌اید. مدیر می‌گوید برند سبز شد. چند ساعت find-replace؟

یا فرض کنید dark mode: هر `background: #fff` را دستی عوض کنیم؟

**Custom Properties** در CSS خام — با `--` — یک **منبع حقیقت** می‌سازند. امروز همان demo جزوه با دکمهٔ «تغییر تم» را Live می‌زنیم — **بدون** Sass (`$brand` اشتباه است در CSS خالص).»

---

## ۲) Live — variables.css

### HTML

```html
<div class="demo-var" id="var-demo">
  <div class="card">کارت با رنگ برند</div>
  <button type="button" class="btn" id="toggle-theme">تغییر تم (سبز/آبی)</button>
</div>
```

### CSS مرحله ۱

«متغیرها روی **scope** — اینجا `.demo-var` — نه حتماً فقط `:root` (در جزوه `:root` هم مثال است).»

```css
.demo-var {
  --brand: #1a5fb4;
  --brand-dark: #0b3d73;
  --radius: 8px;
  --space: 12px;
}
```

### CSS مرحله ۲ — مصرف

```css
.demo-var .card {
  background: var(--brand);
  color: #fff;
  padding: var(--space);
  border-radius: var(--radius);
  margin-bottom: 10px;
}

.demo-var .btn {
  background: var(--brand-dark);
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: var(--radius);
  cursor: pointer;
}
```

**در مرورگر:** کارت آبی — دکمه تیره‌تر.

### CSS مرحله ۳ — تم سبز

```css
.demo-var.theme-green {
  --brand: #0b6e4f;
  --brand-dark: #064c37;
}
```

### JS (همان جزوه — برای کلاس toggle)

```javascript
document.getElementById("toggle-theme").addEventListener("click", function () {
  document.getElementById("var-demo").classList.toggle("theme-green");
});
```

**در مرورگر:** کلیک — **فقط** مقدار `--brand` عوض می‌شود؛ `.card` و `.btn` خودکار follow می‌کنند.

### سؤال کلاسی

«چرا به هر `.card` جدا `background` نمی‌زنیم؟»  
**پاسخ:** یک تعریف `--brand` — cascade inheritance برای variables روی subtree.

---

## ۳) :root vs component scope

«در پروژهٔ بزرگ `:root { --text: ... }` برای token global — در demo `.demo-var` scope آموزشی است. **هر دو** valid.»

---

## ۴) var() و fallback (سطح جزوه)

```css
color: var(--muted, #64748b);
```

«اگر `--muted` تعریف نشده، fallback — برای defensive CSS.»

---

## ۵) اشتباهات

| غلط | درست |
|-----|------|
| `$brand` مثل Sass | `--brand` |
| var(--brand) بدون define روی ancestor | define روی :root یا parent |
| expect variable در selector name | فقط values |

---

## ۶) پروژه mini — کارت سه token

دانشجو اضافه کند:

```css
--text-on-brand: #fff;
--shadow: 0 2px 8px rgba(0,0,0,0.08);
```

و روی `.card` `box-shadow: var(--shadow)`.

---

## ۷) جمع‌بندی

1. syntax define?  
   **پاسخ:** `--name: value;`

2. read?  
   **پاسخ:** `var(--name)`

3. toggle theme بدون touch هر card rule?  
   **پاسخ:** class روی parent که `--brand` را override می‌کند.

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. `--radius: 16px` — observe card.  
2. three variables: text, bg, space — one card.

### متوسط
3. `.theme-green` only on `#var-demo` — child outside unaffected.  
4. `var(--x, red)` when --x missing.

### چالشی
5. plan token file for whole site `:root` (list 8 vars).  
6. تفاوت CSS variable و Sass variable (compile time vs runtime).

**ارجاع:** [`07-variables.html`](../../pages/07-variables.html)

---

## انتقال — پایان ماژule آبشاری

«از order تا variables — حالا وقتی استایل عجیب است **چک‌لیست** دارید. ماژule بعد در مسیر handbook به **تصاویر** می‌رود: `img` vs `background`.»

→ [`../../../05-CSS-تصاویر/pages/01-img-vs-bg.html`](../../../05-CSS-تصاویر/pages/01-img-vs-bg.html)
