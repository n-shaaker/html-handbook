# Frontend Bootcamp — ۱۶ جلسه × ۱۲۰ دقیقه (۳۲ ساعت)

این برنامه را از دید مدرس بخوانید. هر جلسه پوشهٔ خودش را دارد و سه نوع فایل در آن هست:

- `README.md` می‌گوید در هر بازهٔ زمانی چه مفهومی را توضیح دهید، دانشجو چه چیزی باید بسازد، و تکلیف کدام است.
- `teach/` نمونهٔ کوتاه همان مفهوم است، وقتی لازم است رفتار را پیش از پروژهٔ کامل نشان دهید.
- `live/` کدی است که در کدنویسی زنده جلو می‌برید، یا پاسخ مرجعی که کنار دستتان می‌ماند. کامنت‌های داخل کد انگلیسی‌اند و دلیل تصمیم را می‌گویند.

## ساختار ثابت جلسه

| زمان | بخش |
|------|-----|
| ۱۰ دقیقه | مرور |
| ۲۵ دقیقه | آموزش |
| ۳۰ دقیقه | Live Coding |
| ۳۵ دقیقه | تمرین دانشجو |
| ۱۵ دقیقه | بررسی |
| ۵ دقیقه | جمع‌بندی + تکلیف |

> جلسات ۷، ۱۳، ۱۵، ۱۶ پروژه‌ای‌اند و زمان‌بندی داخل README همان جلسه است.

## نقشه جلسات

| # | فولدر | خروجی |
|---|--------|--------|
| ۱ | [`sessions/01-html-fundamentals`](./sessions/01-html-fundamentals/) | Personal Profile |
| ۲ | [`sessions/02-semantic-html-forms`](./sessions/02-semantic-html-forms/) | Registration Form |
| ۳ | [`sessions/03-css-fundamentals`](./sessions/03-css-fundamentals/) | Contact styled |
| ۴ | [`sessions/04-box-model-display-position`](./sessions/04-box-model-display-position/) | Product Card |
| ۵ | [`sessions/05-flexbox`](./sessions/05-flexbox/) | Navbar + Pricing |
| ۶ | [`sessions/06-grid-responsive`](./sessions/06-grid-responsive/) | Responsive Grid |
| ۷ | [`sessions/07-landing-page-project`](./sessions/07-landing-page-project/) | Landing Page + Git init |
| ۸ | [`sessions/08-javascript-fundamentals`](./sessions/08-javascript-fundamentals/) | Conditional exercises |
| ۹ | [`sessions/09-functions-arrays`](./sessions/09-functions-arrays/) | Products array practice |
| ۱۰ | [`sessions/10-objects-modern-js`](./sessions/10-objects-modern-js/) | User Cards |
| ۱۱ | [`sessions/11-dom`](./sessions/11-dom/) | Dynamic Product Cards |
| ۱۲ | [`sessions/12-events-forms`](./sessions/12-events-forms/) | Login + Validation |
| ۱۳ | [`sessions/13-todo-app-project`](./sessions/13-todo-app-project/) | Todo + LocalStorage |
| ۱۴ | [`sessions/14-async-api`](./sessions/14-async-api/) | Fetch users demo |
| ۱۵ | [`sessions/15-movie-search-project`](./sessions/15-movie-search-project/) | Show Search (TVMaze) |
| ۱۶ | [`sessions/16-mini-ecommerce-final`](./sessions/16-mini-ecommerce-final/) | Mini E-commerce |

## Git تدریجی

| جلسه | کار |
|------|-----|
| ۱ | فقط مفهوم را می‌گویید: Git تاریخچهٔ تغییرات فایل را نگه می‌دارد تا بتوان به نسخهٔ قبلی برگشت. در این جلسه دستوری اجرا نمی‌شود. |
| ۷ | داخل پوشهٔ صفحهٔ فرود `git init` می‌زنید و اولین commit را می‌سازید تا دانشجو فرق پوشهٔ کار، ناحیهٔ آماده‌سازی (`git add`) و تاریخچه (`git commit`) را ببیند. |
| ۱۳ | پروژهٔ فهرست کارها را commit می‌کنید تا منطق برنامه و ذخیرهٔ محلی در تاریخچه ثبت شود و بازگشت به وضعیت سالم ممکن باشد. |
| ۱۶ | پروژهٔ فروشگاه را با `git push` به مخزن دور می‌فرستید تا کار از کامپیوتر کلاس خارج شود و بشود آن را منتشر کرد. |

## نحوه استفاده در کلاس

1. `README.md` همان جلسه را باز کنید و زمان‌بندی را با مفهوم‌هایی که باید گفته شود تطبیق دهید.
2. اگر پوشهٔ `teach/` هست، اول همان نمونهٔ کوتاه را نشان دهید تا دانشجو رفتار را در مقیاس کوچک ببیند.
3. کدنویسی زنده را از روی `live/` پیش ببرید، یا از صفر تایپ کنید و آن فایل را فقط به‌عنوان پاسخ مرجع کنار دستتان نگه دارید.
4. فایل‌های HTML را مستقیم در مرورگر باز کنید. اگر خواستید با هر ذخیره صفحه تازه شود، از افزونهٔ Live Server در VS Code استفاده کنید.
5. تصویرهای نمونه از picsum.photos می‌آیند و جلسه‌های ۱۴ و ۱۵ به APIهای JSONPlaceholder و TVMaze وصل می‌شوند. هر سه به اینترنت نیاز دارند و هیچ‌کدام کلید API نمی‌خواهند.
6. هر README جلسه سه بخش آموزشی ثابت دارد: مفهوم‌های کلیدی، اشتباه‌های رایج، و تکلیف. پیش از کلاس هر سه را بخوانید تا مثال و خطای محتمل آماده باشد.

## استاندارد کد

- متنی که کاربر روی صفحه می‌بیند فارسی باشد. روی عنصر `html` هم `lang="fa"` بگذارید تا صفحه‌خوان زبان را درست انتخاب کند، و هم `dir="rtl"` تا سطر از راست شروع شود.
- سند HTML5 معنایی باشد: بخش‌ها با عنصری نام‌گذاری شوند که نقششان را می‌گوید. در `head` حتماً `meta charset="UTF-8"` برای حروف فارسی و `meta viewport` برای عرض درست در موبایل باشد.
- CSS مدرن باشد. `box-sizing: border-box` را سراسری بگذارید تا عرض اعلام‌شده شامل پدینگ و بوردر شود. چیدمان یک‌بعدی را با Flex و چیدمان سطر و ستون را با Grid بسازید. پرس‌وجوی رسانه را موبایل‌اول بنویسید؛ یعنی پایه برای صفحهٔ باریک باشد و `@media (min-width: ...)` فقط برای صفحهٔ پهن‌تر چیز اضافه کند.
- JavaScript مدرن باشد. برای نام‌هایی که نباید دوباره مقداردهی شوند `const` و در غیر این صورت `let` به کار ببرید. تابع پیکانی (arrow function)، `async/await` و `fetch` را برای کد ناهمگام به کار ببرید. عنصر تازه را با `createElement` بسازید و با `append` به صفحه اضافه کنید، نه با چسباندن HTML رشته‌ای که دادهٔ کاربر داخل آن است.
- کامنت کد انگلیسی باشد و بگوید چرا این تصمیم گرفته شده است. کامنتی که فقط خط را به فارسی ترجمه می‌کند به فهم کد کمک نمی‌کند.
