# سناریوی تدریس درس 18: Forms JS

**صفحه جزوه:** [`pages/18-forms.html`](../../pages/18-forms.html)
**پیش‌نیاز مفهومی:** درس 17
**مدت پیشنهادی:** حدود 50 دقیقه
**هدف جلسه:** درس 18 — 18-forms.html

**چرخه ثابت تدریس (در کل جلسه تکرار کن):**  
مفهوم → کد → نتیجه در مرورگر/Console → سؤال چالشی → راه‌حل

| موضوع | زمان |
|------|------|
| شروع و مسئله واقعی | ۸–۱۰ دقیقه |
| Live Coding | ۲۰–۲۵ دقیقه |
| نمایش و DevTools | ۸ دقیقه |
| سؤالات کلاسی | ۱۰ دقیقه |
| mini-project / جمع‌بندی | ۱۰–۱۵ دقیقه |
| **مجموع** | **~50 دقیقه** |

---

## ۱) شروع کلاس؛ مسئله قبل از تعریف

اول با **مسئله** شروع کن — نه با لیست property.

«برای کار با فرم، رویداد submit را روی خود form می‌گیریم (نه روی دکمه). مرورگر به‌طور پیش‌فرض بعد از submit صفحه را دوباره بارگذاری می‌کند؛ با preventDefault() جلویش را می‌گیریم.»

«<form id="signup" novalidate> <label for="su-name">نام کامل:</label> <input type="text" id="su-name" name="fullname" autocomplete="name"> <label for="su-email">ایمیل:</label> <input type="email" id="su-email" name="email" autocomplete="email" dir="ltr"> <label for="su-pass">رمز عبور:</label> <input type="password" id="su-pass" name="password" autocomplete="new-password"> <label for="su-pass2">تکرار رمز عبور:</label> <input type="password" id="su-pass2" name="password2" autocomplete="new-password"> <label for="su-level">سطح:</label> <select id="su-level" name="level"> <option value="">سطح خود را انتخاب کنید</option> <option value="basic">پایه</option> <option value="mid">میانی</option> </select> <label><input type="checkbox" name="rules"> قوانین را می‌پذیرم</label> <button type="submit">ثبت‌نام</button> </form> <ul id="errors" aria-live="polite"></ul> این فرم فیلدهای نام، ایمیل، دو رمز، سطح و پذیرش قوانین را دارد. for هر برچسب با id فیلد یکی است تا کلیک روی نوشته هم کادر را فعال کند. name همان کلیدی است که بعداً از form.elements خوانده می‌شود. novalidate اعتبارسنجی آمادهٔ مرورگر را خاموش می‌کند تا قانون‌ها را خود برنامه با JavaScript بررسی کند. فهرست errors جای پیام‌هاست.»

«const form = document.getElementById("signup"); const errorList = document.getElementById("errors"); form.addEventListener("submit", (event) => { event.preventDefault(); // صفحه دوباره بارگذاری نشود const name = form.elements.fullname.value.trim(); const email = form.elements.email.value.trim(); const password = form.elements.password.value; // رمز را trim نمی‌کنیم const password2 = form.elements.password2.value; const level = form.elements.level.value; const rules = form.elements.rules.checked; const errors = []; if (name.length < 3) errors.push("نام باید حداقل ۳ حرف باشد."); if (!email.includes("@") || !email.includes(".")) errors.push("ایمیل معتبر نیست (مثال: ali@example.com)."); if (password.length < 8) errors.push("رمز عبور باید حداقل ۸ کاراکتر باشد."); if (password !== password2) errors.push("رمز عبور و تکرار آن یکسان نیستند."); if (level === "") errors.push("سطح را انتخاب کنید."); if (!rules) errors.push("پذیرفتن قوانین الزامی است."); errorList.textContent = ""; // پیام‌های قبلی پاک شود if (errors.length > 0) { errors.forEach(message => { const li = document.createElement("li"); li.className = "msg-error"; li.textContent = message; errorList.append(li); }); } else { const li = document.createElement("li"); li.className = "msg-ok"; li.textContent = `✔ ${name} عزیز، ثبت‌نام انجام شد.`; // متن کاربر ← textContent errorList.append(li); form.reset(); } }); submit هم با دکمه و هم با Enter در کادر اجرا می‌شود. preventDefault جلوی بارگذاری دوبارهٔ صفحه را می‌گیرد تا پیام خطا پاک نشود. مقدار فیلدها از روی name خوانده می‌شود. نام و ایمیل فاصله‌های اضافه را از دست می‌دهند، ولی رمز بدون trim می‌ماند چون فاصله می‌تواند بخشی از رمز باشد. هر شرط نامعتبر یک جمله به آرایهٔ خطا اضافه می‌کند. اگر خطایی باشد، هر جمله یک li می‌شود؛ وگرنه پیام موفقیت با نام کاربر ساخته می‌شود و form.reset فیلدها را خالی می‌کند.»

«form.elements.fullname یعنی فیلدی از فرم که name="fullname" دارد؛ form.elements همه فیلدهای فرم را بر اساس name در اختیار می‌گذارد (شکل کوتاه‌تر form.fullname هم در مرورگرها کار می‌کند، ولی اگر اسم فیلد با یک ویژگی خود فرم مثل action یکی باشد، مشکل‌ساز می‌شود). بررسی ایمیل را ساده گرفته‌ایم: فقط اینکه @ و نقطه داشته باشد.»

**روی جزوه این عناوین را دنبال کنید:** *۱۸) فرم‌ها و اعتبارسنجی (Forms & Validation)* · *خواندن مقدار انواع فیلد* · *اعتبارسنجی زنده هنگام تایپ*

**چرخه این بخش:** نشان بده → دانشجو حدس بزند → یک خط کد → refresh.

---

## ۲) مفهوم — حرف قابل گفتن سر کلاس

«بچه‌ها، جزوه را باز کنید؛ من روی همان مثال live جلو می‌روم. هر بار که property عوض می‌شود، در DevTools overlay (Flex/Grid) یا Computed styles را نگاه کنید.»

«<form id="signup" novalidate> <label for="su-name">نام کامل:</label> <input type="text" id="su-name" name="fullname" autocomplete="name"> <label for="su-email">ایمیل:</label> <input type="email" id="su-email" name="email" autocomplete="email" dir="ltr"> <label for="su-pass">رمز عبور:</label> <input type="password" id="su-pass" name="password" autocomplete="new-password"> <label for="su-pass2">تکرار رمز عبور:</label> <input type="password" id="su-pass2" name="password2" autocomplete="new-password"> <label for="su-level">سطح:</label> <select id="su-level" name="level"> <option value="">سطح خود را انتخاب کنید</option> <option value="basic">پایه</option> <option value="mid">میانی</option> </select> <label><input type="checkbox" name="rules"> قوانین را می‌پذیرم</label> <button type="submit">ثبت‌نام</button> </form> <ul id="errors" aria-live="polite"></ul> این فرم فیلدهای نام، ایمیل، دو رمز، سطح و پذیرش قوانین را دارد. for هر برچسب با id فیلد یکی است تا کلیک روی نوشته هم کادر را فعال کند. name همان کلیدی است که بعداً از form.elements خوانده می‌شود. novalidate اعتبارسنجی آمادهٔ مرورگر را خاموش می‌کند تا قانون‌ها را خود برنامه با JavaScript بررسی کند. فهرست errors جای پیام‌هاست.»

«const form = document.getElementById("signup"); const errorList = document.getElementById("errors"); form.addEventListener("submit", (event) => { event.preventDefault(); // صفحه دوباره بارگذاری نشود const name = form.elements.fullname.value.trim(); const email = form.elements.email.value.trim(); const password = form.elements.password.value; // رمز را trim نمی‌کنیم const password2 = form.elements.password2.value; const level = form.elements.level.value; const rules = form.elements.rules.checked; const errors = []; if (name.length < 3) errors.push("نام باید حداقل ۳ حرف باشد."); if (!email.includes("@") || !email.includes(".")) errors.push("ایمیل معتبر نیست (مثال: ali@example.com)."); if (password.length < 8) errors.push("رمز عبور باید حداقل ۸ کاراکتر باشد."); if (password !== password2) errors.push("رمز عبور و تکرار آن یکسان نیستند."); if (level === "") errors.push("سطح را انتخاب کنید."); if (!rules) errors.push("پذیرفتن قوانین الزامی است."); errorList.textContent = ""; // پیام‌های قبلی پاک شود if (errors.length > 0) { errors.forEach(message => { const li = document.createElement("li"); li.className = "msg-error"; li.textContent = message; errorList.append(li); }); } else { const li = document.createElement("li"); li.className = "msg-ok"; li.textContent = `✔ ${name} عزیز، ثبت‌نام انجام شد.`; // متن کاربر ← textContent errorList.append(li); form.reset(); } }); submit هم با دکمه و هم با Enter در کادر اجرا می‌شود. preventDefault جلوی بارگذاری دوبارهٔ صفحه را می‌گیرد تا پیام خطا پاک نشود. مقدار فیلدها از روی name خوانده می‌شود. نام و ایمیل فاصله‌های اضافه را از دست می‌دهند، ولی رمز بدون trim می‌ماند چون فاصله می‌تواند بخشی از رمز باشد. هر شرط نامعتبر یک جمله به آرایهٔ خطا اضافه می‌کند. اگر خطایی باشد، هر جمله یک li می‌شود؛ وگرنه پیام موفقیت با نام کاربر ساخته می‌شود و form.reset فیلدها را خالی می‌کند.»

«form.elements.fullname یعنی فیلدی از فرم که name="fullname" دارد؛ form.elements همه فیلدهای فرم را بر اساس name در اختیار می‌گذارد (شکل کوتاه‌تر form.fullname هم در مرورگرها کار می‌کند، ولی اگر اسم فیلد با یک ویژگی خود فرم مثل action یکی باشد، مشکل‌ساز می‌شود). بررسی ایمیل را ساده گرفته‌ایم: فقط اینکه @ و نقطه داشته باشد.»

اگر دانشجو گفت «حفظ کنم؟» بگو: «نه — **مسئله** را بشناسید؛ property نامش را بعداً هم از MDN پیدا می‌کنید.»

---

## ۳) Live Coding — مرحله‌به‌مرحله

«فایل live جدا می‌سازم تا index پروژه قاطی نشود — مثلاً `تدریس/live/` در همین ماژول.»

**مرحله 1 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
<form id="signup" novalidate>
  <label for="su-name">نام کامل:</label>
  <input type="text" id="su-name" name="fullname" autocomplete="name">

  <label for="su-email">ایمیل:</label>
  <input type="email" id="su-email" name="email" autocomplete="email" dir="ltr">

  <label for="su-pass">رمز عبور:</label>
  <input type="password" id="su-pass" name="password" autocomplete="new-password">

  <label for="su-pass2">تکرار رمز عبور:</label>
  <input type="password" id="su-pass2" name="password2" autocomplete="new-password">

  <label for="su-level">سطح:</label>
  <select id="su-level" name="level">
    <option value="">سطح خود را انتخاب کنید</option>
    <option value="basic">پایه</option>
    <option value="mid">میانی</option>
  </select>

  <label><input type="checkbox" name="rules"> قوانین را می‌پذیرم</label>
  <button type="submit">ثبت‌نام</button>
</form>
<ul id="errors" aria-live="polite"></ul>
```

**مرحله 2 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
const form = document.getElementById("signup");
const errorList = document.getElementById("errors");

form.addEventListener("submit", (event) => {
  event.preventDefault();                  // صفحه دوباره بارگذاری نشود

  const name = form.elements.fullname.value.trim();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value;    // رمز را trim نمی‌کنیم
  const password2 = form.elements.password2.value;
  const level = form.elements.level.value;
  const rules = form.elements.rules.checked;

  const errors = [];
  if (name.length < 3) errors.push("نام باید حداقل ۳ حرف باشد.");
  if (!email.includes("@") || !email.includes(".")) errors.push("ایمیل معتبر نیست (مثال: ali@example.com).");
  if (password.length < 8) errors.push("رمز عبور باید حداقل ۸ کاراکتر باشد.");
  if (password !== password2) errors.push("رمز عبور و تکرار آن یکسان نیستند.");
  if (level === "") errors.push("سطح را انتخاب کنید.");
  if (!rules) errors.push("پذیرفتن قوانین الزامی است.");

  errorList.textContent = "";              // پیام‌های قبلی پاک شود
  if (errors.length > 0) {
    errors.forEach(message => {
      const li = document.createElement("li");
      li.className = "msg-error";
      li.textContent = message;
      errorList.append(li);
    });
  } else {
    const li = document.createElement("li");
    li.className = "msg-ok";
    li.textContent = `✔ ${name} عزیز، ثبت‌نام انجام شد.`;   // متن کاربر ← textContent
    errorList.append(li);
    form.reset();
  }
});
```

**مرحله 3 — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»

```javascript
const passInput = document.getElementById("pass-live");
const strength = document.getElementById("strength");

passInput.addEventListener("input", () => {
  const len = passInput.value.length;
  if (len === 0) {
    strength.textContent = "";
  } else if (len < 8) {
    strength.textContent = `ضعیف (${len} از حداقل ۸ کاراکتر)`;
    strength.className = "msg-error";
  } else {
    strength.textContent = "قابل قبول";
    strength.className = "msg-ok";
  }
});
```


**در حین تایپ بگو:** «الان فقط یک تغییر — save — refresh — چه فرقی دیدید؟»

**اشتباه عمدی (یک بار):** یک selector اشتباه یا property روی فرزند نادرست — خطا را با کلاس debug کنید.

---

## ۴) نمایش در مرورگر و DevTools

- جزوه `18-forms.html` را کنار live بگذارید و پارagraph به paragraph جلو بروید.
- DevTools → Elements → computed styles؛ برای Flex/Grid overlay را فعال کنید.
- عرض viewport را باریک و پهن کنید — رفتار واکنش‌گرا را **قبل** media query هم بحث کنید اگر relevant است.

---

## ۵) سؤال کلاسی

- «ایده اصلی این درس در یک جمله چیست؟»  
  **پاسخ:** برای کار با فرم، رویداد submit را روی خود form می‌گیریم (نه روی دکمه). مرورگر به‌طور پیش‌فرض بعد از submit صفحه را دوبار…
- «اگر کد را روی عنصر اشتباه بگذاریم چه می‌شود؟»  
  **پاسخ:** معمولاً هیچ تغییری نمی‌بینیم یا layout غیرمنتظره می‌شود — DevTools کمک می‌کند.

---

## ۶) اشتباهات رایج

- missing name
- checkbox absent

---

## ۷) mini-project جلسه

«۵–۱۰ دقیقه: همان ایده را در یک کامپوننت کوچک **خودتان** تکرار کنید — مثلاً navbar، کارت، یا یک تابع JS — بدون کپی کامل از جزوه. فقط وقتی گیر کردید به Live کلاس نگاه کنید.»

اگر ماژول پروژه است (۰۹ یا ۱۳): «یک section از `index.html` پروژه را امروز complete کنید و در Elements outline معنایی را چک کنید.»

---


---

## ۸) جمع‌بندی مدرس و سؤالات پایانی

1. مهم‌ترین ایده این جلسه چه بود؟  
   **پاسخ راهنما:** از بخش مفهوم و سؤالات کلاسی بالا.

2. یک اشتباه رایج که امروز دیدیم؟  
   **پاسخ راهنما:** از بخش اشتباهات.

3. چطور در پروژه خودتان همین الگو را به کار می‌برید؟  
   **پاسخ راهنما:** mini-project انتهای درس.

**پیام پایانی:**

«هدف حفظ تعریف نبود — هدف این بود که بتوانید همین ایده را در پروژه خودتان پیاده کنید؛ با Console و DevTools باز.»

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. همان مثال Live را بدون نگاه کردن یک بار دیگر بنویسید.
2. جزوه را باز کنید و خروجی مرورگر/Console را با پیش‌بینی خودتان مقایسه کنید.

### متوسط
3. یک variation کوچک روی مثال کلاس (مقدار دیگر، یک selector دیگر، یک عنصر DOM دیگر).
4. تمرین موضوعی در [`quizzes/`](../../quizzes/README.md) همان ماژول.

### چالشی
5. mini-project انتهای درس را کامل کنید و برای یک همکلاسی توضیح دهید **چرا** این راه‌حل کار می‌کند.

---

## انتقال به درس بعد

«debugging»
---

---
