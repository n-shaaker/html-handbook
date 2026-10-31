# سناریو تدریس زنده — JavaScript پایه

**مدت پیشنهادی:** ۲۴۰–۳۲۰ دقیقه (۳–۴ جلسه)  
**پیام جلسه:** JavaScript **رفتار** صفحه است — بعد از HTML (ساختار) و CSS (ظاهر). متغیر، شرط، حلقه، تابع، و دستکاری **DOM** با رویدادها؛ همه با `const`/`let` و `===`.

**پوشش جزوه:** درس‌های [`01`–`21`](../index.html) در **۲۰ درس + پروژه** زیر.

---

## شروع جلسه (۳–۵ دقیقه)

«سلام؛ تا اینجا صفحهٔ استاتیک ساختید. امروز **JavaScript**: وقتی کاربر کلیک می‌کند، فرم submit می‌شود، یا متن عوض می‌شود — JS اجرا می‌شود. مرورگر HTML را parse می‌کند، **DOM** می‌سازد، و JS روی همان DOM کار می‌کند. Console را باز نگه دارید — F12 — best friend دیباگ. تا آخر این بخش tip calculator یا تمرین [`21-practice`](../pages/21-practice.html) را می‌زنید. بعد از کلاس [`quizzes`](../quizzes/README.md).»

---

## درس ۱ — JavaScript چیست؟

**صفحه:** [`01-intro.html`](../pages/01-intro.html)

### ۱) متن تدریس

«**JavaScript** زبان برنامه‌نویسی سمت **مرورگر** است — رفتار تعاملی صفحه. HTML می‌گوید *چه* هست؛ CSS *چطور* دیده می‌شود؛ JS *چه اتفاقی* بیفتد.

کلیک دکمه، باز/بسته منو، اعتبارسنجی فرم، به‌روز کردن قیمت — همه JS. استاندارد مدرن **ES6+** است: `const` و `let` به‌جای `var`. JS فقط مرورگر نیست — **Node.js** هم هست — ولی focus ما مرورگر و DOM است.

کد JS **interpret** می‌شود — خط به خط اجرا — compile جداگانه مثل C++ ندارید (با build tools story فرق دارد).»

### ۲) Live Coding

فایل `live-js-01.html` — `<script>` در body:

«اولین خط را در Console هم می‌توانید بزنید؛ در فایل داخل script.»

```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>JS intro</title>
</head>
<body>
  <h1>JavaScript پایه</h1>
  <script>
    console.log("سلام از JS");
  </script>
</body>
</html>
```

«فایل را refresh کنید — Console را باز کنید — پیام را ببینید.»

### ۳) نمایش در مرورگر

- [`01-intro.html`](../pages/01-intro.html) — تب Console خالی نباشد.
- یک خط typo عمدی — خطای syntax قرمز.

### ۴) سؤال کلاسی (with answers)

- «JS فقط در مرورگر اجرا می‌شود؟»  
  **پاسخ:** نه — **Node.js** و runtimeهای دیگر؛ در این دوره **مرورگر + DOM**.

- «تفاوت HTML و JS؟»  
  **پاسخ:** HTML ساختار/معنا؛ JS منطق و تعامل.

### ۵) اشتباهات رایج

- **اشتباه:** Console را باز نکردن — «کار نمی‌کند».  
  **درست:** **F12 → Console** همیشه.

- **اشتباه:** انتظار compile قبل از run.  
  **درست:** مرورگر script را parse و **اجرا** می‌کند.

### ۶) انتقال به مبحث بعدی

«کد JS را **کجا** می‌نویسیم — inline، فایل خارجی، defer.»

---

## درس ۲ — کجا JS بنویسیم

**صفحه:** [`02-where-to.html`](../pages/02-where-to.html)

### ۱) متن تدریس

«**Inline** `onclick="..."` — کم استفاده؛ HTML و JS قاطی می‌شود. **`<script>` در body** انتهای صفحه — OK برای demo. حرفه‌ای: **`<script defer src="app.js">`** — فایل جدا، **`defer`** یعنی بعد از parse HTML اجرا شود، ترتیب فایل‌ها حفظ می‌شود.

**`async`** برای script مستقل (analytics) — ترتیب با script بعدی guaranteed نیست. **Modules** `type="module"` — import/export — جلسه بعدی تر.

مسیر **`src`** relative به HTML — 404 در Network یعنی فایل پیدا نشد.»

### ۲) Live Coding

`index.html`:

```html
<script defer src="app.js"></script>
```

`app.js`:

```javascript
console.log("app.js loaded");
console.log("عنوان صفحه:", document.title);
```

«script را در `<head>` بدون defer بگذارید — ممکن است DOM هنوز نباشد. با defer `document.title` کار می‌کند.»

### ۳) نمایش در مرورگر

- [`02-where-to.html`](../pages/02-where-to.html) — Network tab: app.js 200.
- src اشتباه — 404 قرمز.

### ۴) سؤال کلاسی (with answers)

- «defer vs async؟»  
  **پاسخ:** **defer:** بعد از HTML، **ترتیب** حفظ. **async:** دانload شد اجرا، ترتیب independent.

### ۵) اشتباهات رایج

- **اشتباه:** `<script src>` در head بدون defer و دست زدن DOM در top-level.  
  **درست:** **defer** یا script انتهای body.

### ۶) انتقال به مبحث بعدی

«ابزار دیباگ: **console.log** و دوستان.»

---

## درس ۳ — console.log و خروجی

**صفحه:** [`03-output.html`](../pages/03-output.html)

### ۱) متن تدریس

«**`console.log`** برای مقدار و پیام. **`console.warn`** زرد — هشدار. **`console.error`** قرمز — خطا. **`console.table`** برای آرایه object — خوانا.

**`alert`** modal مزاحم — فقط demo؛ debug با Console. **`document.write`** legacy — استفاده نکنید.

object را log کنید بعد property عوض کنید — Console ممکن است reference live نشان دهد — برای snapshot **`JSON.stringify`** یا log قبل/بعد.»

### ۲) Live Coding

```javascript
const name = "نارنج";
console.log(`رستوران ${name}`);
console.warn("موجودی کم");
const menu = [
  { dish: "کباب", price: 420000 },
  { dish: "چلو", price: 180000 },
];
console.table(menu);
```

### ۳) نمایش در مرورگر

- [`03-output.html`](../pages/03-output.html) — table expand.

### ۴) سؤال کلاسی (with answers)

- «alert برای debug روزانه؟»  
  **پاسخ:** **Console** بهتر — flow را قطع نمی‌کند.

### ۵) اشتباهات رایج

- **اشتباه:** فقط alert.  
  **درست:** **log / table**.

### ۶) انتقال به مبحث بعدی

«قواعد نوشتن: **syntax** و comment.»

---

## درس ۴ — Syntax و comments

**صفحه:** [`04-syntax.html`](../pages/04-syntax.html)

### ۱) متن تدریس

«JS **case-sensitive** — `name` و `Name` فرق دارند. **statement** با `;` تمام می‌شود — گاهی ASI خودکار؛ برای clarity `;` بگذارید. **Comment:** `//` یک خط، `/* */` چند خط.

**Numeric separator** `_` برای خوانایی: `185_000`. quote mismatch `"` و `'` — syntax error کل script را می‌شکند.»

### ۲) Live Coding

```javascript
const price = 185_000; // تومان
/* تخفیف آخر هفته
   TODO: از API بخوان */
console.log(price);
```

عمدی `"unclosed` — خطا را نشان دهید.

### ۳) نمایش در مرورگر

- [`04-syntax.html`](../pages/04-syntax.html).

### ۴) سؤال کلاسی (with answers)

- «`1_000` valid است؟»  
  **پاسخ:** بله — **`185_000`** همان 185000.

### ۵) اشتباهات رایج

- **اشتباه:** comment `/*` بسته نشده.  
  **درست:** بستن `*/`.

### ۶) انتقال به مبحث بعدی

«داده را **نام** می‌دهیم: **const** و **let**.»

---

## درس ۵ — متغیر const و let

**صفحه:** [`05-variables.html`](../pages/05-variables.html)

### ۱) متن تدریس

«**`const`** پیش‌فرض — bind یک بار؛ برای object/array **محتوا** can mutate، **reference** ثابت. **`let`** وقتی **reassign** لازم است — counter، flag.

**Block scope** — داخل `{ if for }` — `var` function scope قدیمی — **استفاده نکنید**. Temporal dead zone — قبل از declare به let دست نزنید.»

### ۲) Live Coding

```javascript
const VAT = 0.09;
let count = 0;
count++;
console.log(count, VAT);
const dish = { name: "کباب" };
dish.price = 400000; // OK
// dish = {} // خطا
```

### ۳) نمایش در مرورگر

- [`05-variables.html`](../pages/05-variables.html) — block demo.

### ۴) سؤال کلاسی (with answers)

- «const object — mutate property؟»  
  **پاسخ:** **بله** — reference ثابت، properties نه.

### ۵) اشتباهات رایج

- **اشتباه:** `const x;` بدون init.  
  **درست:** مقدار اولیه.

- **اشتباه:** `var` در کد جدید.  
  **درست:** **const / let**.

### ۶) انتقال به مبحث بعدی

«محاسبه: **عملگرها**.»

---

## درس ۶ — عملگرها

**صفحه:** [`06-operators.html`](../pages/06-operators.html)

### ۱) متن تدریس

«ریاضی `+ - * / %`. **`+`** با string **concat** — `5 + "5"` → `"55"`. مقایسه: **`===`** strict — type و value؛ **`==`** coercion عجیب — **avoid**.

منطقی **`&&`** AND، **`||`** OR، **`!`** NOT. **`??`** nullish — بعداً. **`+=`** shorthand.»

### ۲) Live Coding

```javascript
console.log(5 + "5");
console.log(5 === 5);
console.log(5 == "5"); // true — چرا === بهتر است
console.log(true && false);
```

### ۳) نمایش در مرورگر

- [`06-operators.html`](../pages/06-operators.html).

### ۴) سؤال کلاسی (with answers)

- «`==` با `1` و `"1"`?»  
  **پاسخ:** **true** — coercion؛ **`===`** false.

### ۵) اشتباهات رایج

- **اشتباه:** `==` با null/undefined.  
  **درست:** **`===`**.

### ۶) انتقال به مبحث بعدی

«نوع داده: **typeof**.»

---

## درس ۷ — typeof و انواع

**صفحه:** [`07-data-types.html`](../pages/07-data-types.html)

### ۱) متن تدریس

«Primitive: **string**, **number**, **boolean**, **undefined**, **null**, **bigint**, **symbol**. **object** — array و function هم object(typeof).

**undefined** assign نشده. **null** عمدی «خالی». quirk: **`typeof null === "object"`** — historical bug. **NaN** number است — `NaN === NaN` false — **`Number.isNaN`**.»

### ۲) Live Coding

```javascript
console.log(typeof "سلام", typeof 42, typeof true);
console.log(typeof null, typeof undefined);
console.log(typeof [], typeof function(){});
```

### ۳) نمایش در مرورگر

- [`07-data-types.html`](../pages/07-data-types.html).

### ۴) سؤال کلاسی (with answers)

- «undefined vs null؟»  
  **پاسخ:** **undefined** default؛ **null** intentional empty.

### ۵) اشتباهات رایج

- **اشتباه:** `NaN === NaN`.  
  **درست:** **Number.isNaN(x)**.

### ۶) انتقال به مبحث بعدی

«منطق را **بسته** می‌کنیم: **توابع**.»

---

## درس ۸ — توابع

**صفحه:** [`08-functions.html`](../pages/08-functions.html)

### ۱) متن تدریس

«**Function declaration** — hoisted. **Arrow** `(x) => x * 2` — concise؛ **`this`** بعداً. **return** — بدون return → **undefined**. parameters — default `function f(a = 1)`.

تابع = reusable block — formatPrice، calcTip.»

### ۲) Live Coding

```javascript
function formatPrice(n) {
  return n.toLocaleString("fa-IR") + " تومان";
}
const double = (x) => x * 2;
console.log(formatPrice(420000));
console.log(double(3));
```

### ۳) نمایش در مرورگر

- [`08-functions.html`](../pages/08-functions.html) — call در Console.

### ۴) سؤال کلاسی (with answers)

- «arrow vs function declaration؟»  
  **پاسخ:** syntax؛ hoisting؛ **this** در methods — بعداً.

### ۵) اشتباهات رایج

- **اشتباه:** فراموش **return**.  
  **درست:** explicit return برای نتیجه.

### ۶) انتقال به مبحث بعدی

«چند value یک جا: **object**.»

---

## درس ۹ — شیء object

**صفحه:** [`09-objects.html`](../pages/09-objects.html)

### ۱) متن تدریس

«**key-value** — `{ name: "کباب", price: 420000 }`. دسترسی **dot** `dish.price` یا **bracket** `dish["price"]` — bracket برای key dynamic.

**const obj** — mutate property OK. **copy** — `{...obj}` shallow — بعداً deep. reference: `const b = a` همان object.»

### ۲) Live Coding

```javascript
const dish = { name: "کباب", price: 420000 };
dish.price = 430000;
const key = "name";
console.log(dish[key]);
```

### ۳) نمایش در مرورگر

- [`09-objects.html`](../pages/09-objects.html).

### ۴) سؤال کلاسی (with answers)

- «کی bracket؟»  
  **پاسخ:** key **متغیر** یا کاراکتر خاص.

### ۵) اشتباهات رایج

- **اشتباه:** فکر کردن const = deep freeze.  
  **درست:** properties changeable.

### ۶) انتقال به مبحث بعدی

«مرورگر tree: **DOM**.»

---

## درس ۱۰ — DOM پایه

**صفحه:** [`10-dom-basics.html`](../pages/10-dom-basics.html)

### ۱) متن تدریس

«**DOM** = Document Object Model — in-memory tree از HTML. **`document.querySelector("h1")`** اولین match. **`querySelectorAll`**. **`textContent`** متن safe — **`innerHTML`** HTML parse — user input → **XSS** — textContent برای متن کاربر.

**`classList.add/remove/toggle`**. null اگر selector نباشد — crash — optional chaining یا check.»

### ۲) Live Coding

```html
<h1 id="title">عنوان</h1>
<script>
  const title = document.querySelector("#title");
  title.textContent = "منوی نارنج";
  title.classList.add("brand");
</script>
```

### ۳) نمایش در مرورگر

- [`10-dom-basics.html`](../pages/10-dom-basics.html) — live تغییر.

### ۴) سؤال کلاسی (with answers)

- «innerHTML با input کاربر؟»  
  **پاسخ:** **خطر XSS** — **textContent**.

### ۵) اشتباهات رایج

- **اشتباه:** selector null — `.textContent` crash.  
  **درست:** `if (el)`.

### ۶) انتقال به مبحث بعدی

«کاربر action: **events**.»

---

## درس ۱۱ — رویداد events

**صفحه:** [`11-events.html`](../pages/11-events.html)

### ۱) متن تدریس

«**`addEventListener("click", handler)`** — چند listener. **`removeEventListener`** same reference. **`preventDefault()`** — مثلاً submit فرم. **`event.target`** element کلیک‌شده.

**`onclick` attribute** — یک handler. delegation — listener روی parent — بعداً.»

### ۲) Live Coding

```html
<button id="btn">کلیک</button>
<script>
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    console.log("click!");
  });
</script>
```

form submit با preventDefault demo.

### ۳) نمایش در مرورگر

- [`11-events.html`](../pages/11-events.html) — Enter on button.

### ۴) سؤال کلاسی (with answers)

- «onclick attr vs addEventListener؟»  
  **پاسخ:** listener **چندتایی** و جدا از HTML.

### ۵) اشتباهات رایج

- **اشتباه:** duplicate listeners هر بار render.  
  **درست:** یک بار bind یا remove.

### ۶) انتقال به مبحث بعدی

«متن: **Strings**.»

---

## درس ۱۲ — Strings

**صفحه:** [`12-strings.html`](../pages/12-strings.html)

### ۱) متن تدریس

«string **immutable** — تغییر in-place نیست — method جدید برمی‌گرداند. **`.length`** — UTF-16 — emoji ممکن است ۲ unit. **index** `[0]` — **`charAt`**. index `-1` یعنی not found در search methods.

single `'` double `"` — **backtick** template — درس ۱۴.»

### ۲) Live Coding

```javascript
const s = "نارنج";
console.log(s.length, s[0]);
console.log(s[s.length - 1]);
```

### ۳) نمایش در مرورگر

- [`12-strings.html`](../pages/12-strings.html).

### ۴) سؤال کلاسی (with answers)

- «string mutable؟»  
  **پاسخ:** **خیر**.

### ۵) اشتباهات رایج

- **اشتباه:** `s[99]` undefined بدون check.  
  **درست:** length یا includes.

### ۶) انتقال به مبحث بعدی

«**متدهای string**.»

---

## درس ۱۳ — متدهای string

**صفحه:** [`13-string-methods.html`](../pages/13-string-methods.html)

### ۱) متن تدریس

«**trim** فاصله طرف. **includes** boolean. **slice(start, end)** — end exclusive — index منفی از آخر. **split** → array. **replace** / **replaceAll**. **toLowerCase** برای compare case-insensitive.»

### ۲) Live Coding

```javascript
console.log("  کباب  ".trim());
console.log("چلوکباب".includes("کباب"));
console.log("abcdef".slice(2, 5));
console.log("a,b,c".split(","));
```

search ساده روی منو fake.

### ۳) نمایش در مرورگر

- [`13-string-methods.html`](../pages/13-string-methods.html).

### ۴) سؤال کلاسی (with answers)

- «slice vs substring?»  
  **پاسخ:** **slice** negative index؛ substring نه.

### ۵) اشتباهات رایج

- **اشتباه:** mutate با `[0] =`.  
  **درست:** method جدید string.

### ۶) انتقال به مبحث بعدی

«**Template literals**.»

---

## درس ۱۴ — Template literals

**صفحه:** [`14-template-literals.html`](../pages/14-template-literals.html)

### ۱) متن تدریس

«backtick **` ` **` — multiline طبیعی. **`${expression}`** — مقدار داخل string. expression هر JS — call function OK. nest backtick — escape `\` `.»

### ۲) Live Coding

```javascript
const guests = 3;
const line = `${guests} نفر — میز ${guests * 2}`;
console.log(line);
const multiline = `
  خط ۱
  خط ۲
`;
```

### ۳) نمایش در مرورگر

- [`14-template-literals.html`](../pages/14-template-literals.html).

### ۴) سؤال کلاسی (with answers)

- «`${}` چه می‌گذارد؟»  
  **پاسخ:** **نتیجه expression** as string.

### ۵) اشتباهات رایج

- **اشتباه:** `"${x}"` با quote معمولی — interpolate نمی‌شود.  
  **درست:** **backtick**.

### ۶) انتقال به مبحث بعدی

«**Numbers**.»

---

## درس ۱۵ — Numbers

**صفحه:** [`15-numbers.html`](../pages/15-numbers.html)

### ۱) متن تدریس

«**Number** — IEEE float. **`Number("42")`** parse. **`parseInt(str, 10)`** — **radix 10** بدهید. **`parseFloat`**. **NaN** — **`Number.isNaN`**. **`toFixed(2)`** string با decimal — money display careful.

**0.1 + 0.2 !== 0.3** — float — rounding برای currency. **BigInt** جدا از Number — mix نکنید.»

### ۲) Live Coding

```javascript
console.log(Number("42"), Number("x"));
console.log(Number.isNaN(Number("x")));
console.log((0.1 + 0.2).toFixed(2));
console.log(parseInt("08", 10));
```

### ۳) نمایش در مرورگر

- [`15-numbers.html`](../pages/15-numbers.html).

### ۴) سؤال کلاسی (with answers)

- «parseInt بدون radix?»  
  **پاسخ:** **همیشه 10** (یا 16 اگر hex) — octal legacy.

### ۵) اشتباهات رایج

- **اشتباه:** `isNaN("hello")` — coercion.  
  **درست:** **Number.isNaN**.

### ۶) انتقال به مبحث بعدی

«true/false: **Boolean**.»

---

## درس ۱۶ — Boolean و مقایسه

**صفحه:** [`16-booleans-comparisons.html`](../pages/16-booleans-comparisons.html)

### ۱) متن تدریس

«**Truthy/falsy** — falsy: `0`, `""`, `null`, `undefined`, `NaN`, `false`. **`[]` و `{}` truthy** — empty هم.

**`&&`** اول falsy را برمی‌گرداند؛ **`||`** اول truthy. **`!!x`** به boolean — readable name بهتر. comparison: **`> >= < <=`**.»

### ۲) Live Coding

```javascript
const name = "Ali";
const ok = name.length >= 3;
console.log(ok, Boolean(""), Boolean([]));
```

### ۳) نمایش در مرورگر

- [`16-booleans-comparisons.html`](../pages/16-booleans-comparisons.html).

### ۴) سؤال کلاسی (with answers)

- «[] truthy?»  
  **پاسخ:** **بله**.

### ۵) اشتباهات رایج

- **اشتباه:** `if ([])` false فکر کردن.  
  **درست:** empty array truthy.

### ۶) انتقال به مبحث بعدی

«شاخه: **if / else**.»

---

## درس ۱۷ — if / else

**صفحه:** [`17-if-else.html`](../pages/17-if-else.html)

### ۱) متن تدریس

«**if (condition) { }** — condition coerced to boolean. **else if** chain. **else** default. **blocks `{}`** — یک خط هم brace برای clarity.

**ternary** `cond ? a : b` — کوتah — nested کم. **`=` assign** vs **`===` compare** — if (`x = 1`) bug.»

### ۲) Live Coding

```javascript
const hour = 20;
let label;
if (hour >= 19) {
  label = "شام";
} else if (hour >= 12) {
  label = "ناهار";
} else {
  label = "صبحانه";
}
console.log(label);
```

### ۳) نمایش در مرورگر

- [`17-if-else.html`](../pages/17-if-else.html).

### ۴) سؤال کلاسی (with answers)

- «ternary کی؟»  
  **پاسخ:** assignment/simple branch **یک خط**؛ وگرنه if.

### ۵) اشتباهات رایج

- **اشتباه:** `if (x = 5)`.  
  **درست:** **`===`**.

### ۶) انتقال به مبحث بعدی

«چند مقدار discrete: **switch**.»

---

## درس ۱۸ — switch

**صفحه:** [`18-switch.html`](../pages/18-switch.html)

### ۱) متن تدریس

«**switch (expr)** — **`case`** با **`===`**. **`break`** — بدون break **fall-through**. **`default`**. string category منو — veg/nonveg.

switch vs if chain — مقادیر **گسسته** one variable. case **حساس** به case string.»

### ۲) Live Coding

```javascript
const cat = "veg";
let icon;
switch (cat) {
  case "veg":
    icon = "🥗";
    break;
  case "meat":
    icon = "🍖";
    break;
  default:
    icon = "🍽";
}
console.log(icon);
```

fall-through bug demo — break حذف.

### ۳) نمایش در مرورگر

- [`18-switch.html`](../pages/18-switch.html).

### ۴) سؤال کلاسی (with answers)

- «switch vs if?»  
  **پاسخ:** **یک** expression، cases **ثابت**؛ if برای ranges.

### ۵) اشتباهات رایج

- **اشتباه:** forget **break**.  
  **درست:** break یا comment intentional fall-through.

### ۶) انتقال به مبحث بعدی

«تکرار: **for**.»

---

## درس ۱۹ — حلقه for

**صفحه:** [`19-for-loop.html`](../pages/19-for-loop.html)

### ۱) متن تدریس

«**classic for** `for (let i = 0; i < arr.length; i++)`. **`for...of`** روی iterable — array values — **preferred** برای array. **`for...in`** keys object — **نه array** — index string.

accumulate **sum** prices — **`let sum = 0`**. infinite loop — condition را check.»

### ۲) Live Coding

```javascript
const prices = [100, 200, 150];
let sum = 0;
for (const p of prices) {
  sum += p;
}
console.log(sum);
```

### ۳) نمایش در مرورگر

- [`19-for-loop.html`](../pages/19-for-loop.html).

### ۴) سؤال کلاسی (with answers)

- «for...in روی array?»  
  **پاسخ:** **keys** — string indices — **for...of** برای values.

### ۵) اشتباهات رایج

- **اشتباه:** `var i` leak.  
  **درست:** **`let`** in for.

### ۶) انتقال به مبحث بعدی

«**while** و break.»

---

## درس ۲۰ — while و break

**صفحه:** [`20-while-break.html`](../pages/20-while-break.html)

### ۱) متن تدریس

«**while (cond)** — قبل از body check. **do...while** — یک بار حداقل. **`break`** exit loop. **`continue`** skip iteration.

while وقتی **تعداد تکرار unknown** — counter known → **for**. forget **increment** → infinite.»

### ۲) Live Coding

```javascript
let n = 0;
while (n < 3) {
  console.log("n =", n);
  n++;
}
```

break با جستجو در array تا پیدا شود.

### ۳) نمایش در مرورگر

- [`20-while-break.html`](../pages/20-while-break.html).

### ۴) سؤال کلاسی (with answers)

- «while vs for?»  
  **پاسخ:** **for** counter known؛ **while** condition-driven.

### ۵) اشتباهات رایج

- **اشتباه:** `while(true)` بدون break path.  
  **درست:** guaranteed exit.

### ۶) انتقال به مبحث بعدی

«همه را **ترکیب** می‌کنیم — پروژه practice.»

---

## پروژه جلسه — practice / fix bugs

**مدت:** ۳۰–۴۵ دقیقه · [`pages/21-practice.html`](../pages/21-practice.html)

### ۱) متن تدریس

«ترکیب **function**، **if**، **DOM** — tip calculator: input bill و percent، دکمه محاسبه، `#result` با **textContent**. یا [`project-06-fix-the-bugs`](../quizzes/2-combined-projects/project-06-fix-the-bugs/README.md) — typo و logic bug پیدا کنید.

validate input — NaN check — UX پیام خطا. بدون **var**؛ بدون **innerHTML** با user data.»

### ۲) Live Coding

```html
<label>مبلغ: <input id="bill" type="number"></label>
<label>درصد: <input id="pct" type="number" value="10"></label>
<button id="go">محاسبه</button>
<p id="result"></p>
<script>
  function calcTip(bill, percent) {
    if (!Number.isFinite(bill) || bill <= 0) return null;
    return bill * (percent / 100);
  }
  document.querySelector("#go").addEventListener("click", () => {
    const bill = Number(document.querySelector("#bill").value);
    const pct = Number(document.querySelector("#pct").value);
    const tip = calcTip(bill, pct);
    const out = document.querySelector("#result");
    out.textContent = tip == null ? "مبلغ نامعتبر" : `انعام: ${tip.toLocaleString("fa-IR")} تومان`;
  });
</script>
```

«قدم‌قدم: تابع pure → listener → DOM update.»

### ۳) نمایش در مرورگر

- [`21-practice.html`](../pages/21-practice.html) — همه exercise.
- Console بدون خطای قرمز.

### ۴) سؤال کلاسی (with answers)

- «چرا tip را در تابع جدا می‌نویسیم؟»  
  **پاسخ:** **test** و reuse — DOM فقط در listener.

### ۵) اشتباهات رایج

- **اشتباه:** string از input بدون **Number()**.  
  **درست:** convert + validate.

### ۶) انتقال به مبحث بعدی

«جمع‌بندی و تمرین خانه.»

---

## جمع‌بندی مدرس (۵–۷ دقیقه)

| موضوع | کلید |
|--------|------|
| متغیر | **const** default، **let** reassign |
| مقایسه | **===** |
| Debug | **console.log / table** |
| DOM | **querySelector**, **textContent** |
| Events | **addEventListener** |
| جریان | **if**, **for...of**, **while** |
| تابع | **return**, format helpers |

«HTML/CSS skeleton را نگه دارید — JS لایه رفتار است. سؤال؟ … در **JS میانی** array methods، scope، و event delegation عمیق‌تر.»

**بعدی:** [11 JS میانی](../../11-JS-میانی/)

---

## تمرین‌ها (ساده → چالشی)

### ساده

1. Console: log name و typeof  
2. const/let — block scope در [`05-variables`](../pages/05-variables.html)  
3. formatPrice با toLocaleString  

### متوسط

4. [`06-operators`](../pages/06-operators.html) — === drills  
5. DOM: عوض کردن h1 + classList  
6. click handler روی دکمه  
7. string search روی منو fake  

### چالشی

8. [`pages/21-practice.html`](../pages/21-practice.html) — کامل  
9. [`quizzes/`](../quizzes/README.md) — topic + combined  
10. **fix-the-bugs** project  

**معیار تحویل:** بدون **var**؛ Console بدون خطا؛ tip calculator با validation؛ **textContent** نه innerHTML برای user output.
