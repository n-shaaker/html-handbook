# تمرین‌ها و پروژه‌های عملی — JavaScript سطح پایه

این پوشه دو بخش دارد:

1. **[بخش ۱ — تمرین‌های مبحثی](1-topic-exercises/)**: برای هر درس یک پوشه با ۳ تمرین کوتاه و هدف‌دار (⭐ ← ⭐⭐ ← ⭐⭐⭐).
   هر تمرین فقط یک مهارت را تمرین می‌دهد و فقط با همان درس و درس‌های قبلش حل می‌شود.
2. **[بخش ۲ — پروژه‌های ترکیبی](2-combined-projects/)**: پروژه‌های بزرگ‌تری که چند مبحث بخش ۱ را **عمداً** کنار هم می‌گذارند تا یک کار واقعی انجام شود.

## روش کار

**برای هنرجو:**

1. بعد از هر درس، پوشه همان مبحث در بخش ۱ را باز کنید و سه تمرینش را **به ترتیب** حل کنید (هر تمرین ۱۰ تا ۲۵ دقیقه).
2. برای هر تمرین دو فایل `ex-n.html` و `ex-n.js` بسازید و JS را با `<script src="ex-n.js" defer></script>` در `head` وصل کنید.
   تمرین‌های Console را با کلید <kbd>F12</kbd> و زبانه Console ببینید.
3. خروجی خودتان را با بخش «تست‌ها» مقایسه کنید. هر تست «ورودی ← خروجی مورد انتظار» است.
4. وقتی همه مباحث یک پروژه (ستون «مباحث ترکیب‌شده» پایین) را تمام کردید، سراغ آن پروژه در بخش ۲ بروید.
5. پوشه `solution` را **بعد از** حل کردن باز کنید؛ پاسخ استاد فقط یک راه درست است، نه تنها راه.

**برای استاد:**

- پاسخ همه تمرین‌ها و پروژه‌ها در پوشه `solution` هر کدام است و بدون نصب چیزی در مرورگر اجرا می‌شود.
- تمرین‌های بخش ۱ برای کار کلاسی و تکلیف کوتاه‌اند؛ پروژه‌های بخش ۲ برای ارزشیابی و جدول بارم‌بندی (از ۲۰) دارند.

## بخش ۱ — تمرین‌های مبحثی

| پوشه | درس | تمرین | مهارت‌ها |
| --- | --- | :---: | --- |
| [01-start-and-output](1-topic-exercises/01-start-and-output/README.md) | [۱ تا ۴: شروع، محل کد، خروجی، Syntax](../pages/01-intro.html) | ۳ | `console.log`، `textContent` و `innerHTML`، `defer`، توضیحات، رفع خطای نوشتاری |
| [02-variables](1-topic-exercises/02-variables/README.md) | [۵: متغیرها](../pages/05-variables.html) | ۳ | `const` یا `let`، تغییر مقدار، جابه‌جایی با `temp` |
| [03-operators](1-topic-exercises/03-operators/README.md) | [۶: عملگرها](../pages/06-operators.html) | ۳ | `+=` و `-=`، باقیمانده `%`، اولویت و پرانتز، `++` |
| [04-data-types](1-topic-exercises/04-data-types/README.md) | [۷: انواع داده](../pages/07-data-types.html) | ۳ | `typeof`، `Number()` و `String()`، مقدار رشته‌ای کادرها |
| [05-functions](1-topic-exercises/05-functions/README.md) | [۸: توابع](../pages/08-functions.html) | ۳ | پارامتر و `return`، تابع پیکانی، پارامتر پیش‌فرض، تابع در رویداد |
| [06-objects](1-topic-exercises/06-objects/README.md) | [۹: اشیا](../pages/09-objects.html) | ۳ | نقطه و براکت، افزودن و `delete`، متد و `this` |
| [07-events](1-topic-exercises/07-events/README.md) | [۱۰: رویدادها](../pages/10-events.html) | ۳ | `click`، `input`، `mouseover`/`mouseout`، `keydown`، شمارنده، `classList` |
| [08-strings](1-topic-exercises/08-strings/README.md) | [۱۱: رشته‌ها](../pages/11-strings.html) | ۳ | `length`، شماره حرف، `at(-1)`، Escape |
| [09-string-methods](1-topic-exercises/09-string-methods/README.md) | [۱۲: متدهای رشته](../pages/12-string-methods.html) | ۳ | `trim`، `toLowerCase`، `slice`، `includes`، `endsWith`، `replace` |
| [10-template-literals](1-topic-exercises/10-template-literals/README.md) | [۱۳: Template Literal](../pages/13-template-literals.html) | ۳ | `${}`، عبارت داخل قالب، متن چندخطی |
| [11-numbers](1-topic-exercises/11-numbers/README.md) | [۱۴: اعداد](../pages/14-numbers.html) | ۳ | `toFixed`، `toLocaleString("fa-IR")`، `Number.isNaN`، `isInteger`، `parseInt` |
| [12-booleans-comparisons](1-topic-exercises/12-booleans-comparisons/README.md) | [۱۵: بولین و مقایسه](../pages/15-booleans-comparisons.html) | ۳ | `===` و `==`، truthy/falsy، `&&` `\|\|` `!` |
| [13-if-else](1-topic-exercises/13-if-else/README.md) | [۱۶: شرط‌ها](../pages/16-if-else.html) | ۳ | `if / else if / else`، ترتیب شرط‌ها، `return` زودهنگام، `? :` |
| [14-switch](1-topic-exercises/14-switch/README.md) | [۱۷: Switch](../pages/17-switch.html) | ۳ | `case` و `break`، `default`، گروه کردن `case`ها |
| [15-for-loop](1-topic-exercises/15-for-loop/README.md) | [۱۸: حلقه For](../pages/18-for-loop.html) | ۳ | گام دلخواه، جمع در حلقه، پیمایش رشته |
| [16-while-break](1-topic-exercises/16-while-break/README.md) | [۱۹: While، Break، Continue](../pages/19-while-break.html) | ۳ | `while`، تعداد تکرار نامعلوم، `break`، `continue` |

**جمع:** ۱۶ مبحث، ۴۸ تمرین. (درس ۲۰ «تمرین جمع‌بندی» خودش تمرین است و پوشه جدا ندارد.)

## بخش ۲ — پروژه‌های ترکیبی

| پروژه | مباحث ترکیب‌شده (پوشه‌های بخش ۱) | هدف | سطح | زمان |
| --- | --- | --- | :---: | :---: |
| [۱. ماشین‌حساب انعام و تقسیم صورتحساب](2-combined-projects/project-01-tip-calculator/README.md) | 02، 03، 05، 07، 11، 13 | سهم هر نفر از صورتحساب با گرد کردن و اعتبارسنجی | ⭐ | ۴۵ دقیقه |
| [۲. کارنامه نمره](2-combined-projects/project-02-grade-report/README.md) | 06، 07، 09، 10، 12، 13، 14 | کارت کارنامه رنگی با `if`، `switch` و شیء | ⭐⭐ | ۴۵ دقیقه |
| [۳. جدول ضرب پویا](2-combined-projects/project-03-multiplication-table/README.md) | 05، 07، 10، 11، 13، 15 | جدول ضرب با حلقه تودرتو و اندازه دلخواه | ⭐⭐ | ۶۰ دقیقه |
| [۴. ماشین‌حساب اقساط وام](2-combined-projects/project-04-loan-installments/README.md) | 05، 07، 10، 11، 13 | مبلغ هر قسط با سود ساده، نوع وام و اعتبارسنجی | ⭐⭐ | ۵۰ دقیقه |
| [۵. بازی سنگ، کاغذ، قیچی](2-combined-projects/project-05-rock-paper-scissors/README.md) | 05، 07، 10، 12، 13، 14 | بازی کامل تا ۵ امتیاز با شمارنده و `switch` | ⭐⭐⭐ | ۶۰ دقیقه |
| [۶. شکار باگ: فرم ورود](2-combined-projects/project-06-fix-the-bugs/README.md) | 01، 02، 04، 05، 07، 08، 09، 12 | پیدا و درست کردن ۹ باگ در کد آماده (`starter`) | ⭐⭐⭐ | ۶۰ دقیقه |

## نکات کلی نمره‌دهی

- خطای قرمز در Console هنگام باز شدن صفحه یا هنگام کار معمولی: ۲ نمره کسر.
- استفاده از `var`، `onclick` داخل HTML یا `alert` برای نمایش نتیجه: هر مورد ۱ نمره کسر.
- نام‌گذاری بی‌معنی (`a`، `x1`، `btn2`) یا تورفتگی نامرتب: تا ۱ نمره کسر.
- کدی که فقط برای موارد تست «جواب درست» چاپ کند ولی منطق کلی نداشته باشد، نمره آن بند را صفر می‌کند.
- استفاده از چیزی که هنوز درس داده نشده (مثلاً آرایه) لازم نیست و امتیاز اضافه ندارد؛ کد ساده و خوانا مهم‌تر است.
- بخش «امتیازی» تا ۲ نمره اضافه دارد، ولی جمع نمره از ۲۰ بیشتر نمی‌شود.
- در تمرین‌های بخش ۱ نمره‌ای در کار نیست؛ اگر همه تست‌ها درست بود، تمرین قبول است.
