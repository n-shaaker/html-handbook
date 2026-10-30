# تمرین‌ها و پروژه‌ها — JavaScript سطح پیشرفته

این پوشه دو بخش دارد:

1. **[بخش ۱ — تمرین‌های مبحثی](1-topic-exercises/):** برای هر درس یک پوشه با **۳ تمرین کوتاه** (⭐ ← ⭐⭐ ← ⭐⭐⭐). هر تمرین فقط از همان مبحث و درس‌های قبل‌تر استفاده می‌کند و یک مهارت مشخص را تمرین می‌دهد.
2. **[بخش ۲ — پروژه‌های ترکیبی](2-combined-projects/):** برنامه‌های کوچک واقعی که **چند مبحث** را با هدف مشخص کنار هم می‌گذارند.

## روش کار

**برای دانشجو:**

1. بعد از هر درس، پوشه همان مبحث در بخش ۱ را باز کنید و سه تمرینش را **به ترتیب** حل کنید (هر تمرین ۱۰ تا ۲۵ دقیقه).
2. هر تمرین را در یک پوشه شخصی بیرون از `quizzes` بنویسید: `ex-1.html` و `ex-1.js` و ... . اگر تمرین پوشه `starter` دارد، اول محتوایش را کپی کنید.
3. «تست‌ها»ی هر تمرین را یکی‌یکی امتحان کنید؛ Console (کلید F12) باید بدون خطای قرمز باشد.
4. قبل از تمام کردن کار، پوشه `solution` را باز نکنید. بعد از آن، پاسخ خودتان را با پاسخ نمونه مقایسه کنید.
5. وقتی مباحث یک پروژه ترکیبی را تمام کردید (جدول بخش ۲)، سراغ آن پروژه بروید.

**اجرا:** بیشتر تمرین‌ها با دوبار کلیک روی فایل HTML اجرا می‌شوند، ولی اجرا با افزونه **Live Server** در VS Code توصیه می‌شود. **برای مبحث ۱۲ (ماژول‌ها) Live Server الزامی است**؛ مرورگر ماژول‌ها را از `file://` بارگذاری نمی‌کند. تمرین‌های مبحث ۱۱ و پروژه ۲ به اینترنت نیاز دارند.

## بخش ۱ — تمرین‌های مبحثی

| # | پوشه | درس | تمرین‌ها | مهارت‌ها |
|:---:|---|---|:---:|---|
| ۱ | [01-function-params](1-topic-exercises/01-function-params/README.md) | [توابع پیشرفته](../pages/01-function-params.html) | ۳ | پارامتر پیش‌فرض، rest و spread، تابع مرتبه بالا |
| ۲ | [02-closures](1-topic-exercises/02-closures/README.md) | [بستارها](../pages/02-closures.html) | ۳ | شمارنده خصوصی، چند تابع با متغیر مشترک، نگه داشتن وضعیت |
| ۳ | [03-call-apply-bind](1-topic-exercises/03-call-apply-bind/README.md) | [call، apply و bind](../pages/03-call-apply-bind.html) | ۳ | `this` دلخواه، آرگومان آرایه‌ای، `bind` برای listener |
| ۴ | [04-classes](1-topic-exercises/04-classes/README.md) | [کلاس‌ها](../pages/04-classes.html) | ۳ | `constructor` و متد، آرایه داخل کلاس، جدا کردن منطق از نمایش |
| ۵ | [05-inheritance](1-topic-exercises/05-inheritance/README.md) | [وراثت](../pages/05-inheritance.html) | ۳ | `extends` و override، `super`، `static`، فیلد خصوصی `#` |
| ۶ | [06-sets-maps](1-topic-exercises/06-sets-maps/README.md) | [Set و Map](../pages/06-sets-maps.html) | ۳ | حذف تکراری، شمارش با `Map`، انتخاب روشن/خاموش با `Set` |
| ۷ | [07-timing](1-topic-exercises/07-timing/README.md) | [زمان‌بندی](../pages/07-timing.html) | ۳ | `setTimeout`، `setInterval`، debounce |
| ۸ | [08-callbacks](1-topic-exercises/08-callbacks/README.md) | [Callback](../pages/08-callbacks.html) | ۳ | callback هم‌گام، موفقیت/خطا، callbackهای تودرتو |
| ۹ | [09-promises](1-topic-exercises/09-promises/README.md) | [Promise](../pages/09-promises.html) | ۳ | `new Promise`، `then/catch/finally`، `Promise.all` |
| ۱۰ | [10-async-await](1-topic-exercises/10-async-await/README.md) | [async و await](../pages/10-async-await.html) | ۳ | `await` پشت سر هم، `try...catch...finally`، هم‌زمانی |
| ۱۱ | [11-fetch](1-topic-exercises/11-fetch/README.md) | [Fetch API](../pages/11-fetch.html) | ۳ | GET و `response.ok`، حالت بارگذاری/خطا، POST |
| ۱۲ | [12-modules](1-topic-exercises/12-modules/README.md) | [ماژول‌ها](../pages/12-modules.html) | ۳ | export/import نام‌دار، export پیش‌فرض و `as`، تقسیم برنامه |
| ۱۳ | [13-web-storage](1-topic-exercises/13-web-storage/README.md) | [localStorage](../pages/13-web-storage.html) | ۳ | رشته ساده، تنظیمات، آرایه با JSON و `try...catch` |
| ۱۴ | [14-regexp](1-topic-exercises/14-regexp/README.md) | [RegExp](../pages/14-regexp.html) | ۳ | `test`، کلاس کاراکتر و بازه، `match` و `replace` با گروه |
| ۱۵ | [15-event-delegation](1-topic-exercises/15-event-delegation/README.md) | [Event Delegation](../pages/15-event-delegation.html) | ۳ | `closest`، `data-action`، آیتم‌های پویا، `data-id` با داده |
| ۱۶ | [16-modern-syntax](1-topic-exercises/16-modern-syntax/README.md) | [عملگرهای مدرن](../pages/16-modern-syntax.html) | ۳ | `??` و `?.`، `Object.entries`، spread و `structuredClone` |
| ۱۷ | [17-debugging](1-topic-exercises/17-debugging/README.md) | [اشکال‌زدایی](../pages/17-debugging.html) | ۳ | پیدا کردن باگ منطقی، `throw`، باگ‌های async و `this` |
| | | **جمع** | **۵۱** | |

درس ۱۸ ([پروژه نهایی: فروشگاه کوچک](../pages/18-practice.html)) خودش جمع‌بندی است و پوشه مبحثی ندارد.

## بخش ۲ — پروژه‌های ترکیبی

ترتیب پیشنهادی از آسان به سخت:

| پروژه | مباحث ترکیب‌شده (بخش ۱) | هدف | سطح | زمان |
|---|---|---|:---:|:---:|
| [۱ — دفترچه یادداشت ماندگار](2-combined-projects/project-01-notes-app/README.md) | ۰۴، ۱۳، ۱۵ (+ ۰۷ امتیازی) | آرایه اشیا + ذخیره امن + یک listener برای کل فهرست | ⭐⭐ | ۶۰ دقیقه |
| [۳ — تایمر پومودورو](2-combined-projects/project-03-pomodoro-timer/README.md) | ۰۷، ۱۳ | تایمر کار/استراحت با تنظیمات ماندگار | ⭐⭐ | ۷۵ دقیقه |
| [۴ — اعتبارسنج فرم با RegExp](2-combined-projects/project-04-form-validator-regexp/README.md) | ۱۴، ۱۵ | اعتبارسنجی کامل فرم با الگوها و یک listener روی فرم | ⭐⭐ | ۷۵ دقیقه |
| [۵ — آب‌وهوای شبیه‌سازی‌شده با cache](2-combined-projects/project-05-weather-cache/README.md) | ۰۷، ۰۹، ۱۰، ۱۳ | درخواست ناهمگام + حافظه موقت ۶۰ ثانیه‌ای + پشتیبان هنگام خطا | ⭐⭐ | ۷۵ دقیقه |
| [۲ — فهرست کاربران با Fetch](2-combined-projects/project-02-user-directory-fetch/README.md) | ۰۷، ۰۹، ۱۰، ۱۱، ۱۵ | داده واقعی از سرور با حالت‌های بارگذاری/خطا و جستجو | ⭐⭐⭐ | ۹۰ دقیقه |
| [۶ — مدیریت کتاب‌های خوانده‌شده](2-combined-projects/project-06-reading-list/README.md) | ۰۴، ۱۳، ۱۴، ۱۵ | کلاس + ISBN با RegExp + delegation + ذخیره و بازسازی اشیا | ⭐⭐⭐ | ۹۰ دقیقه |

## نکات نمره‌دهی

**تمرین‌های مبحثی (بخش ۱):** نمره‌ای جدا ندارند و برای تمرین و آمادگی‌اند. استاد می‌تواند یک یا دو تمرین را در کلاس تصادفی بپرسد: تمرین قبول است اگر همه «تست‌ها» درست باشند و دانشجو بتواند کدش را توضیح دهد.

**پروژه‌های ترکیبی (بخش ۲):**

- بارم هر پروژه از ۲۰ است و جدولش در انتهای همان پروژه آمده. امتیازی‌ها حداکثر ۲ نمره اضافه دارند (نمره نهایی از ۲۰ بیشتر نمی‌شود).
- **خطای Console:** اگر در سناریوی عادی (یا سناریوهای «داده خراب» و «قطع اینترنت» که خواسته شده) برنامه خطای قرمز بدهد، از بخش مربوط حداکثر نصف نمره داده شود.
- **محدودیت‌های عمومی:** `var`، رویداد اینلاین (`onclick="..."`)، یا `innerHTML` با داده کاربر یا سرور، هر مورد **۱ نمره منفی** دارد.
- **سادگی و خوانایی:** نام‌گذاری توصیفی، توابع کوچک تک‌کاره، بازگشت زودهنگام با `return`، و کامنت کوتاه فقط جایی که لازم است. کد ساده و درست از کد «زرنگ» و فشرده نمره بیشتری می‌گیرد.
- **دسترس‌پذیری:** `label` برای فیلدها، `aria-live`/`role="alert"` برای پیام‌ها، `aria-label` برای دکمه‌های آیکونی، و عددها با ارقام فارسی (`toLocaleString("fa-IR")`).
- پاسخ دانشجو لازم نیست عین پوشه `solution` باشد؛ هر راه‌حلی که الزامات و محدودیت‌ها را رعایت کند درست است. کدی که دانشجو نتواند توضیح دهد نمره نمی‌گیرد.
