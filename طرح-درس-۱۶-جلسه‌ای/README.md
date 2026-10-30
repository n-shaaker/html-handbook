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

## نقشه جلسات + پیوند به جزوه

برای تکلیف بیشتر یا جبران عقب‌ماندگی، دانشجو را به صفحات جزوه بفرستید (ترتیب: `01–13` به شماره پوشه).

| # | فولدر جلسه | خروجی | جزوه پیشنهادی |
|---|--------|--------|--------|
| ۱ | [`sessions/01-html-fundamentals`](./sessions/01-html-fundamentals/) | Personal Profile | [01 HTML](../01-HTML-مقدماتی/) |
| ۲ | [`sessions/02-semantic-html-forms`](./sessions/02-semantic-html-forms/) | Registration Form | [01 — semantic و forms](../01-HTML-مقدماتی/pages/13-semantic.html) |
| ۳ | [`sessions/03-css-fundamentals`](./sessions/03-css-fundamentals/) | Contact styled | [02 CSS مقدماتی](../02-CSS-مقدماتی/) |
| ۴ | [`sessions/04-box-model-display-position`](./sessions/04-box-model-display-position/) | Product Card | [02 box model](../02-CSS-مقدماتی/pages/12-boxmodel.html) · [03 display/position](../03-CSS-میانی/) |
| ۵ | [`sessions/05-flexbox`](./sessions/05-flexbox/) | Navbar + Pricing | [07 Flexbox](../07-CSS-Flexbox/) · [تمرین ۲](../تمرین-۲-Flexbox/) |
| ۶ | [`sessions/06-grid-responsive`](./sessions/06-grid-responsive/) | Responsive Grid | [08 Grid](../08-CSS-Grid/) · [03 Media Queries](../03-CSS-میانی/pages/21-media-queries.html) |
| ۷ | [`sessions/07-landing-page-project`](./sessions/07-landing-page-project/) | Landing Page + Git init | [07 رستوران استاتیک](../09-پروژه-منوی-رستوران/) (الگو) |
| ۸ | [`sessions/08-javascript-fundamentals`](./sessions/08-javascript-fundamentals/) | Conditional exercises | [10 JS پایه](../10-JS-پایه/) |
| ۹ | [`sessions/09-functions-arrays`](./sessions/09-functions-arrays/) | Products array practice | [08 functions](../10-JS-پایه/pages/08-functions.html) · [09 arrays](../11-JS-میانی/) |
| ۱۰ | [`sessions/10-objects-modern-js`](./sessions/10-objects-modern-js/) | User Cards | [08 objects](../10-JS-پایه/pages/09-objects.html) · [09 destructuring](../11-JS-میانی/pages/11-destructuring-spread.html) |
| ۱۱ | [`sessions/11-dom`](./sessions/11-dom/) | Dynamic Product Cards | [08 DOM](../10-JS-پایه/pages/10-dom-basics.html) · [09 DOM](../11-JS-میانی/pages/14-dom-selecting.html) |
| ۱۲ | [`sessions/12-events-forms`](./sessions/12-events-forms/) | Login + Validation | [08 events](../10-JS-پایه/pages/11-events.html) · [09 forms](../11-JS-میانی/pages/18-forms.html) |
| ۱۳ | [`sessions/13-todo-app-project`](./sessions/13-todo-app-project/) | Todo + LocalStorage | [09 Todo](../11-JS-میانی/pages/22-practice.html) · [10 storage](../12-JS-پیشرفته/pages/13-web-storage.html) |
| ۱۴ | [`sessions/14-async-api`](./sessions/14-async-api/) | Fetch users demo | [10 fetch](../12-JS-پیشرفته/pages/11-fetch.html) |
| ۱۵ | [`sessions/15-movie-search-project`](./sessions/15-movie-search-project/) | Show Search (TVMaze) | [10 async + fetch](../12-JS-پیشرفته/) |
| ۱۶ | [`sessions/16-mini-ecommerce-final`](./sessions/16-mini-ecommerce-final/) | Mini E-commerce | [10 فروشگاه](../12-JS-پیشرفته/pages/20-practice.html) · [11 رستوران JS](../13-پروژه-منوی-رستوران-JS/) · [Deploy](../12-JS-پیشرفته/pages/19-deploy.html) |

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
