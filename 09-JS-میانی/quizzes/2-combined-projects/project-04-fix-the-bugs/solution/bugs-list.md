# فهرست باگ‌های کوییز ۴ (فقط برای استاد)

شماره خط‌ها مربوط به فایل `starter/app.js` است. ترتیب زیر همان ترتیبی است که دانشجو معمولاً با باز کردن Console به باگ‌ها می‌رسد؛ چون هر خطای اجرایی، بقیه کد را متوقف می‌کند.

| # | خط | باگ | چرا اتفاق می‌افتد | اصلاح |
|---|:---:|---|---|---|
| ۱ | ۲۵ | `render()` بالای فایل، قبل از `let currentFilter` صدا زده شده ← `ReferenceError: Cannot access 'currentFilter' before initialization` | تعریف تابع (`function render`) کامل hoist می‌شود، ولی متغیرهای `let`/`const` تا خط تعریفشان در «منطقه مرده موقت» (TDZ) هستند. `render` اجرا می‌شود و به `currentFilter` می‌رسد که هنوز مقدار نگرفته. | فراخوانی `render()` را به آخر فایل ببرید. |
| ۲ | ۴۵ | `tasks.forEach(...)` برای فیلتر کردن ← `visible` برابر `undefined` و خطای `Cannot read properties of undefined (reading 'forEach')` | `forEach` همیشه `undefined` برمی‌گرداند؛ `return` داخل callback آن فقط از همان callback خارج می‌شود. | `tasks.filter(...)` |
| ۳ | ۴ | `document.querySelectorAll("#task-list")` ← `taskList.append is not a function` | `querySelectorAll` یک NodeList برمی‌گرداند (حتی برای یک عنصر)، نه خود عنصر. NodeList متد `append` ندارد. | `document.getElementById("task-list")` یا `querySelector` |
| ۴ | ۳۳ | متد `summary` در شیء `stats` تابع پیکانی است ← متن «undefined: ۲ از ۵ انجام شده» | تابع پیکانی `this` خودش را ندارد و `this` محدوده بیرونی (این‌جا `window`) را می‌گیرد؛ `window.title` تعریف نشده است. | متد معمولی: `summary: function () { ... }` |
| ۵ | ۶۲ | `const copy = tasks;` در `getMostImportantTask` ← بعد از اولین کلیک، ترتیب فهرست عوض می‌شود و دکمه «ترتیب اصلی» کار نمی‌کند | `=` آرایه را کپی نمی‌کند؛ `copy` و `tasks` هر دو به **همان** آرایه اشاره می‌کنند. `sort` هم آرایه را **درجا** تغییر می‌دهد، پس `tasks` مرتب می‌شود. | `const copy = tasks.slice();` (یا `[...tasks]`) |
| ۶ | ۱۱۳ | `.sort()` بدون تابع مقایسه برای دقیقه‌ها ← «کوتاه‌ترین کار: ۱۲۰ دقیقه \| طولانی‌ترین کار: ۵ دقیقه» | `sort` پیش‌فرض عناصر را به رشته تبدیل و الفبایی مقایسه می‌کند: `"120" < "15" < "30" < "45" < "5"`. | `.sort((a, b) => a - b)` |
| ۷ | ۱۴۴ | حلقه `for (var i ...)` برای listener دکمه‌های فیلتر ← با کلیک: `Cannot read properties of undefined (reading 'dataset')` | `var` محدوده تابعی دارد و فقط **یک** `i` برای همه listenerها ساخته می‌شود. وقتی کلیک اتفاق می‌افتد حلقه تمام شده و `i === 3` است؛ `filterButtons[3]` وجود ندارد. | `let i` (هر دور حلقه `i` خودش را دارد)، یا `filterButtons.forEach(button => ...)` |
| ۸ | ۱۶۳ | `JSON.parse` بدون `try...catch` ← با متن نامعتبر هیچ پیامی دیده نمی‌شود و خطای قرمز در Console می‌آید؛ با JSON معتبر ولی غیرآرایه (مثلاً `{"title":"x"}`) برنامه می‌شکند | `JSON.parse` برای متن نامعتبر `SyntaxError` پرتاب می‌کند. داده بیرونی را هم باید قبل از استفاده بررسی کرد. | `try...catch` + پیام فارسی در `#import-msg` + بررسی `Array.isArray` |

## داده‌های آزمون برای بخش وارد کردن JSON

- معتبر: `[{"id":10,"title":"خرید نان","priority":1,"minutes":10,"done":false},{"id":11,"title":"ورزش","priority":3,"minutes":40,"done":true}]` ← «✔ ۲ کار وارد شد.»
- نامعتبر: `[{title: "x"}]` ← «✖ متن واردشده JSON معتبر نیست.»
- JSON معتبر ولی غیرآرایه: `{"title":"x"}` ← «✖ ساختار داده درست نیست؛ ...»، بدون شکستن برنامه.

## نکات نمره‌دهی

- اگر دانشجو باگ ۷ را با `forEach` درست کرده، نمره کامل بگیرد؛ هر دو روش درست‌اند.
- اگر برای باگ ۸ فقط `try...catch` گذاشته و بررسی آرایه ندارد، ۱ نمره از ۲ نمره آن باگ.
- اگر در فایل `bugs-list.md` دانشجو «چرا» را ننوشته (فقط اصلاح کرده)، نصف نمره توضیح کسر شود.
