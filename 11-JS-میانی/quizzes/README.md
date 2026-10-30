# تمرین‌ها و پروژه‌های عملی — JavaScript سطح میانی

تمرین‌های این دوره دو بخش دارند:

1. **بخش ۱ — تمرین‌های مبحثی** (`1-topic-exercises/`): برای هر درس یک پوشه جدا با ۳ تمرین کوتاه (⭐ ← ⭐⭐ ← ⭐⭐⭐). هر تمرین فقط از **همان مبحث و درس‌های قبل‌تر** استفاده می‌کند و ۱۰ تا ۲۵ دقیقه وقت می‌گیرد.
2. **بخش ۲ — پروژه‌های ترکیبی** (`2-combined-projects/`): برنامه‌های کوچک و واقعی که چند مبحث بخش ۱ را **هدفمند** کنار هم می‌گذارند.

کلاس، `fetch` و `localStorage` در هیچ‌کدام لازم نیست. همه چیز با دوبار کلیک روی فایل HTML اجرا می‌شود.

## روش کار

**برای دانشجو:**

1. بعد از هر درس، پوشه همان مبحث را در بخش ۱ باز کنید و تمرین‌ها را **به ترتیب** حل کنید. هر تمرین بخش‌های «هدف»، «صورت مسئله»، «الزامات» و «تست‌ها» دارد.
2. برای هر تمرین یک فایل HTML و یک فایل JS (مثلاً `my-ex-1.html` و `my-ex-1.js`) در پوشه خودتان بسازید. تمرین‌های درس ۱ تا ۱۳ خروجی را در **Console** نشان می‌دهند (F12)؛ از درس ۱۴ به بعد خروجی در خود صفحه است.
3. خروجی خودتان را با بخش «تست‌ها / خروجی مورد انتظار» مقایسه کنید. Console نباید خطای قرمز داشته باشد.
4. بخش «اشتباه‌های رایج این مبحث» را بعد از حل تمرین‌ها بخوانید و کدتان را با آن چک کنید.
5. وقتی مباحث یک پروژه بخش ۲ را تمام کردید (جدول پایین)، سراغ آن پروژه بروید. اگر پروژه پوشه `starter` دارد، محتوایش را در پوشه خودتان کپی کنید.
6. **قبل از تمام کردن کار، پوشه `solution` را باز نکنید!**

**برای استاد:**

- پوشه `solution` هر تمرین و پروژه یک پاسخ کامل و اجراشدنی است. پاسخ دانشجو لازم نیست عین آن باشد؛ هر راه‌حلی که الزامات و محدودیت‌ها را رعایت کند درست است.
- در پروژه ۴، فایل `solution/bugs-list.md` فهرست باگ‌ها، دلیل و اصلاح هر کدام را دارد.

## بخش ۱ — تمرین‌های مبحثی

| # | پوشه | درس | تمرین | مهارت‌ها |
|:---:|---|---|:---:|---|
| ۱ | [01-arrays](1-topic-exercises/01-arrays/README.md) | [آرایه‌ها](../pages/01-arrays.html) | ۳ | اندیس، `length`، `at`، آرایه تودرتو، `Array.isArray` |
| ۲ | [02-array-methods](1-topic-exercises/02-array-methods/README.md) | [متدهای آرایه](../pages/02-array-methods.html) | ۳ | `push`/`pop`/`shift`/`unshift`، `splice` در برابر `slice`، `concat`، `join` |
| ۳ | [03-array-search-sort](1-topic-exercises/03-array-search-sort/README.md) | [جستجو و مرتب‌سازی](../pages/03-array-search-sort.html) | ۳ | `indexOf`، `includes`، `find`/`findIndex`، `sort` عددی، `localeCompare` |
| ۴ | [04-array-iteration](1-topic-exercises/04-array-iteration/README.md) | [پیمایش آرایه](../pages/04-array-iteration.html) | ۳ | `forEach`، `map`، `filter`، `reduce`، `every`، `some` |
| ۵ | [05-dates](1-topic-exercises/05-dates/README.md) | [تاریخ و زمان](../pages/05-dates.html) | ۳ | متدهای `get...`، فاصله دو تاریخ، سرریز روز، `padStart` |
| ۶ | [06-math-random](1-topic-exercises/06-math-random/README.md) | [ریاضی و تصادفی](../pages/06-math-random.html) | ۳ | `round`/`floor`/`ceil`، عدد صحیح تصادفی، انتخاب تصادفی از آرایه |
| ۷ | [07-scope](1-topic-exercises/07-scope/README.md) | [Scope](../pages/07-scope.html) | ۳ | سراسری/تابعی/بلوکی، سایه‌انداختن، جای درست تعریف متغیر |
| ۸ | [08-hoisting-strict](1-topic-exercises/08-hoisting-strict/README.md) | [Hoisting و Strict](../pages/08-hoisting-strict.html) | ۳ | تابع اعلانی در برابر `const`، TDZ، `"use strict"` |
| ۹ | [09-arrow-functions](1-topic-exercises/09-arrow-functions/README.md) | [توابع پیکانی](../pages/09-arrow-functions.html) | ۳ | شکل کوتاه، برگرداندن شیء، پارامتر پیش‌فرض، callbackها |
| ۱۰ | [10-this](1-topic-exercises/10-this/README.md) | [this](../pages/10-this.html) | ۳ | متد شیء، پیکانی در برابر معمولی، `bind` |
| ۱۱ | [11-destructuring-spread](1-topic-exercises/11-destructuring-spread/README.md) | [Destructuring و Spread](../pages/11-destructuring-spread.html) | ۳ | destructuring شیء/آرایه، کپی با Spread، پارامتر Rest |
| ۱۲ | [12-json](1-topic-exercises/12-json/README.md) | [JSON](../pages/12-json.html) | ۳ | `stringify`/`parse`، تورفتگی، مقدارهای حذف‌شده، آرایه JSON |
| ۱۳ | [13-errors](1-topic-exercises/13-errors/README.md) | [مدیریت خطا](../pages/13-errors.html) | ۳ | `try`/`catch`/`finally`، `throw new Error`، `SyntaxError` |
| ۱۴ | [14-dom-selecting](1-topic-exercises/14-dom-selecting/README.md) | [DOM: انتخاب](../pages/14-dom-selecting.html) | ۳ | `getElementById`، `querySelector(All)`، انتخابگر ترکیبی، `null` |
| ۱۵ | [15-dom-changing](1-topic-exercises/15-dom-changing/README.md) | [DOM: تغییر](../pages/15-dom-changing.html) | ۳ | `textContent`، `setAttribute`، `style`، `classList` |
| ۱۶ | [16-dom-events](1-topic-exercises/16-dom-events/README.md) | [DOM: رویدادها](../pages/16-dom-events.html) | ۳ | `click`، `input`، `keydown`، واگذاری رویداد با `closest` |
| ۱۷ | [17-dom-elements](1-topic-exercises/17-dom-elements/README.md) | [DOM: ساختن و حذف](../pages/17-dom-elements.html) | ۳ | `createElement`، `append`، `remove`، الگوی `render()` |
| ۱۸ | [18-forms](1-topic-exercises/18-forms/README.md) | [فرم‌ها](../pages/18-forms.html) | ۳ | `submit` و `preventDefault`، پیام خطای هر فیلد، radio/checkbox، قیمت زنده |

جمع: **۱۸ مبحث، ۵۴ تمرین**. درس ۱۹ ([پروژه جمع‌بندی Todo](../pages/19-practice.html)) خودش ترکیبی است و تمرین مبحثی جدا ندارد؛ پروژه‌های بخش ۲ ادامه همان هستند.

## بخش ۲ — پروژه‌های ترکیبی

از ساده به سخت مرتب شده‌اند.

| # | پروژه | مباحث ترکیب‌شده (پوشه‌های بخش ۱) | هدف | سطح | زمان |
|:---:|---|---|---|:---:|:---:|
| ۱ | [کارنامه کلاس](2-combined-projects/project-01-student-scores/README.md) | ۰۱، ۰۳، ۰۴، ۰۹، ۱۱، ۱۶، ۱۷ | جدول نمره با جستجو، مرتب‌سازی و آمار | ⭐⭐ | ۴۵ دقیقه |
| ۲ | [فهرست خرید](2-combined-projects/project-02-shopping-list/README.md) | ۰۴، ۱۱، ۱۲، ۱۳، ۱۷، ۱۸ | فهرست قابل ویرایش با فرم، خطا و خروجی JSON | ⭐⭐ | ۶۰ دقیقه |
| ۳ | [چند سالته؟](2-combined-projects/project-03-age-and-birthday/README.md) | ۰۵، ۰۶، ۰۹، ۱۱، ۱۳، ۱۸ | محاسبه سن و تولد بعدی از روی تاریخ فرم | ⭐⭐⭐ | ۷۵ دقیقه |
| ۴ | [باگ‌ها را پیدا کن!](2-combined-projects/project-04-fix-the-bugs/README.md) | ۰۳، ۰۴، ۰۷، ۰۸، ۱۰، ۱۲، ۱۳، ۱۴ | پیدا و رفع کردن ۸ باگ در کد آماده | ⭐⭐⭐ | ۶۰ دقیقه |
| ۵ | [کتابخانه کوچک مدرسه](2-combined-projects/project-05-mini-library/README.md) | ۰۳، ۰۴، ۰۹، ۱۱، ۱۳، ۱۶، ۱۷، ۱۸ | آرایه اشیا + جستجو/فیلتر/مرتب‌سازی + فرم افزودن + امانت | ⭐⭐⭐ | ۷۵ دقیقه |
| ۶ | [کوییز چندگزینه‌ای با زمان‌سنج](2-combined-projects/project-06-random-quiz/README.md) | ۰۲، ۰۵، ۰۶، ۱۱، ۱۵، ۱۶، ۱۷ | ۵ سؤال تصادفی بدون تکرار، زمان با `Date`، نتیجه | ⭐⭐⭐ | ۹۰ دقیقه |

## نکات نمره‌دهی

- **تمرین‌های مبحثی:** هر تمرین «انجام شد / ناقص» ارزیابی می‌شود. ملاک: همه الزامات رعایت شده، خروجی با تست‌ها یکی است و Console خطا ندارد. پیشنهاد: ⭐ = ۱ امتیاز، ⭐⭐ = ۲، ⭐⭐⭐ = ۳ (هر مبحث ۶ امتیاز).
- **پروژه‌های ترکیبی:** بارم هر پروژه از ۲۰ است و جدولش در انتهای همان پروژه آمده. امتیازی‌ها حداکثر ۲ نمره اضافه دارند (نمره نهایی از ۲۰ بیشتر نمی‌شود).
- **خطای Console:** اگر در سناریوی عادی برنامه خطای قرمز بدهد، از بخش مربوط حداکثر نصف نمره داده شود.
- **محدودیت‌های عمومی** (همه تمرین‌ها و پروژه‌ها): استفاده از `var`، رویداد اینلاین مثل `onclick="..."`، یا `innerHTML` با داده‌ای که کاربر وارد کرده، هر مورد **۱ نمره منفی** دارد.
- **فقط مباحث درس‌داده‌شده:** در تمرین‌های بخش ۱ استفاده از ابزار درس‌های بعدی (مثلاً تابع پیکانی در تمرین درس ۴) لازم نیست و هدف تمرین را از بین می‌برد؛ از دانشجو بخواهید با ابزار همان درس بنویسد.
- **خوانایی:** نام‌گذاری توصیفی (`studentList` به جای `a`)، توابع کوچک تک‌کاره و یک تابع `render()` که صفحه را از روی داده می‌سازد، بخشی از نمره است.
- **دسترس‌پذیری:** `label` برای فیلدها، `aria-live` یا `role="alert"` برای پیام‌ها، و نمایش عددها با ارقام فارسی (`toLocaleString("fa-IR")`) انتظار می‌رود.
- کپی کردن کد از پاسخ دانشجوی دیگر یا ابزارهای تولید کد بدون فهمیدن آن قابل قبول نیست؛ استاد می‌تواند از دانشجو بخواهد بخشی از کدش را توضیح دهد.
