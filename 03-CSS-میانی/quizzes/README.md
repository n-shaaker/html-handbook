# تمرین‌ها و پروژه‌های عملی — CSS سطح میانی

تمرین‌های این دوره دو بخش دارند:

1. **بخش ۱ — تمرین‌های مبحثی** (`1-topic-exercises`): برای هر درس یک پوشه با **سه تمرین کوتاه** (⭐ ← ⭐⭐ ← ⭐⭐⭐). هر تمرین فقط همان مبحث و درس‌های قبل از آن را لازم دارد و ۱۰ تا ۲۵ دقیقه وقت می‌گیرد.
2. **بخش ۲ — پروژه‌های ترکیبی** (`2-combined-projects`): هر پروژه چند مبحث بخش ۱ را **هدفمند** کنار هم می‌گذارد تا یک کار واقعی کوچک ساخته شود.

## روش کار

**برای هنرجو:**

1. بعد از هر درس، پوشه همان مبحث را در بخش ۱ باز کنید و سه تمرینش را **به ترتیب** حل کنید. تا تمرین ⭐⭐⭐ یک مبحث را حل نکرده‌اید، سراغ مبحث بعد نروید.
2. وقتی همه مباحثی که یک پروژه لازم دارد (ستون «مباحث ترکیب‌شده» در جدول بخش ۲) تمام شد، آن پروژه را انجام دهید. پروژه‌ها از آسان به سخت مرتب شده‌اند.
3. هر تمرین را در یک فایل HTML و یک فایل CSS جدا بنویسید (مثلاً `ex-1.html` و `ex-1.css`). کارتان را در پوشه‌ای **هم‌عمق با `solution`** بسازید (مثلاً `1-topic-exercises/03-position/my-work/`) تا مسیر عکس‌ها مثل پاسخ‌ها `../../../../images/bg.jpg` باشد.
4. اگر تمرین پوشه `starter` دارد، فایل‌هایش را کپی کنید و از روی آن شروع کنید.
5. داخل `solution` را فقط **بعد از** حل کردن نگاه کنید و کد خودتان را با آن مقایسه کنید.

**برای استاد:**

- پاسخ‌ها عمداً ساده و کوتاه نوشته شده‌اند (سطح یک هنرجوی مرتب، نه یک برنامه‌نویس حرفه‌ای). هر راه‌حلی که الزامات را برآورده کند قبول است.
- تمرین‌های بخش ۱ را می‌توان سر کلاس یا به‌عنوان تکلیف کوتاه داد؛ پروژه‌های بخش ۲ برای ارزشیابی‌اند.

## بخش ۱ — تمرین‌های مبحثی

| پوشه | درس | تعداد تمرین | مهارت‌ها |
|---|---|:---:|---|
| [01-display](1-topic-exercises/01-display/README.md) | [۱) Display](../pages/01-display.html) | ۳ | `inline`، `block`، `none` در برابر `visibility: hidden` |
| [02-max-width](1-topic-exercises/02-max-width/README.md) | [۲) Max-width](../pages/02-max-width.html) | ۳ | ستون متن وسط، عکس بیرون‌نزن، `width` در برابر `max-width` |
| [03-position](1-topic-exercises/03-position/README.md) | [۳) Position](../pages/03-position.html) | ۳ | `relative`، `absolute` با پدر مرجع، `sticky` و `fixed` |
| [04-z-index](1-topic-exercises/04-z-index/README.md) | [۴) Z-index](../pages/04-z-index.html) | ۳ | ترتیب کارت‌ها، متن روی عکس، لایه‌های sticky/fixed |
| [05-overflow](1-topic-exercises/05-overflow/README.md) | [۵) Overflow](../pages/05-overflow.html) | ۳ | جعبه اسکرول‌دار، اسکرول افقی جدول، سه‌نقطه |
| [06-float](1-topic-exercises/06-float/README.md) | [۶) Float](../pages/06-float.html) | ۳ | عکس کنار متن، `flow-root`، سه ستون و `clear` |
| [07-inline-block](1-topic-exercises/07-inline-block/README.md) | [۷) Inline-block](../pages/07-inline-block.html) | ۳ | برچسب، صفحه‌بندی، کارت‌ها با `vertical-align` |
| [08-align](1-topic-exercises/08-align/README.md) | [۸) Align](../pages/08-align.html) | ۳ | `margin: auto`، `line-height`، `translate(-50%, -50%)` |
| [09-combinators](1-topic-exercises/09-combinators/README.md) | [۹) Combinators](../pages/09-combinators.html) | ۳ | فاصله، `>`، `+`، `~` (HTML آماده در `starter`) |
| [10-pseudo-classes](1-topic-exercises/10-pseudo-classes/README.md) | [۱۰) Pseudo-classes](../pages/10-pseudo-classes.html) | ۳ | حالت‌های لینک، `nth-child`، `:not`، `:checked`، `:focus` |
| [11-pseudo-elements](1-topic-exercises/11-pseudo-elements/README.md) | [۱۱) Pseudo-elements](../pages/11-pseudo-elements.html) | ۳ | `first-letter/line`، `before/after`، `marker`، `selection` |
| [12-opacity](1-topic-exercises/12-opacity/README.md) | [۱۲) Opacity](../pages/12-opacity.html) | ۳ | گالری hover، دکمه غیرفعال، `opacity` در برابر `rgba` |
| [13-navbar](1-topic-exercises/13-navbar/README.md) | [۱۳) Navbar](../pages/13-navbar.html) | ۳ | منوی عمودی، منوی افقی، نوار فروشگاه با Flexbox |
| [14-dropdowns](1-topic-exercises/14-dropdowns/README.md) | [۱۴) Dropdowns](../pages/14-dropdowns.html) | ۳ | منوی کشویی، `:focus-within`، کارت اطلاعات hover |
| [15-attr-selectors](1-topic-exercises/15-attr-selectors/README.md) | [۱۵) Attribute Selectors](../pages/15-attr-selectors.html) | ۳ | `[target]`، `[type]`، `[required]`، `^=` `$=` `*=` |
| [16-forms](1-topic-exercises/16-forms/README.md) | [۱۶) Forms](../pages/16-forms.html) | ۳ | کادر تمام‌عرض، `select`/`textarea`، فرم ورود کامل |
| [17-counters](1-topic-exercises/17-counters/README.md) | [۱۷) Counters](../pages/17-counters.html) | ۳ | شماره تیترها، دایره شماره‌دار، `counters()` فارسی |
| [18-units](1-topic-exercises/18-units/README.md) | [۱۸) Units](../pages/18-units.html) | ۳ | `%`، `em` در برابر `rem`، `vw` و `vh` |
| [19-math-functions](1-topic-exercises/19-math-functions/README.md) | [۱۹) Math Functions](../pages/19-math-functions.html) | ۳ | `calc()`، `min()`، `max()`، `clamp()` |
| [20-layout](1-topic-exercises/20-layout/README.md) | [۲۰) Layout](../pages/20-layout.html) | ۳ | اسکلت معنایی، دوستونه با Flexbox، سه‌ستونه با Grid |

**جمع بخش ۱:** ۲۰ مبحث، ۶۰ تمرین.

## بخش ۲ — پروژه‌های ترکیبی

| پروژه | مباحث ترکیب‌شده (پوشه‌های بخش ۱) | هدف | سطح | زمان |
|---|---|---|:---:|:---:|
| [۱. راهنمای قدم‌به‌قدم نصب](2-combined-projects/project-01-install-guide/README.md) | ۰۲، ۰۹، ۱۰، ۱۱، ۱۷، ۱۸ | شماره‌گذاری خودکار قدم‌ها و زیرقدم‌ها بدون افزودن کلاس | ⭐⭐ | ۵۰ دقیقه |
| [۲. نوار منو با زیرمنوی کشویی](2-combined-projects/project-02-navbar-dropdown/README.md) | ۰۱، ۰۳، ۰۴، ۱۰، ۱۳، ۱۴ | سربرگ چسبان با زیرمنویی که با کیبورد هم کار کند | ⭐⭐ | ۶۰ دقیقه |
| [۳. هدر سایت با منوی کشویی و بنر](2-combined-projects/project-03-site-header-banner/README.md) | ۰۳، ۰۴، ۰۸، ۱۱، ۱۲، ۱۳، ۱۴ | سربرگ و بنر با لایه تیره و نشان، با ترتیب درست لایه‌ها | ⭐⭐ | ۷۵ دقیقه |
| [۴. کارت محصول با نشان تخفیف](2-combined-projects/project-04-product-card-badges/README.md) | ۰۳، ۰۵، ۰۷، ۰۹، ۱۱، ۱۲ | ردیف کارت‌ها با نشان، سه‌نقطه و حالت ناموجود | ⭐⭐ | ۷۵ دقیقه |
| [۵. فرم ثبت‌نام مرحله‌ای](2-combined-projects/project-05-styled-signup-form/README.md) | ۱۰، ۱۱، ۱۲، ۱۵، ۱۶، ۱۷، ۱۸، ۱۹ | فرم خوش‌ظاهر با بازخورد اعتبارسنجی و مراحل شماره‌دار | ⭐⭐⭐ | ۹۰ دقیقه |
| [۶. چیدمان خراب را درست کنید](2-combined-projects/project-06-fix-the-layout/README.md) | ۰۳، ۰۴، ۰۵، ۰۶، ۰۸، ۱۹، ۲۰ | اشکال‌زدایی چیدمان یک صفحه آماده و توضیح علت خطاها | ⭐⭐⭐ | ۶۰ دقیقه |

پروژه‌هایی که پوشه `starter` دارند: ۱ (HTML آماده) و ۶ (صفحه خراب).

## نکات نمره‌دهی

- تمرین‌های بخش ۱ نمره جدا ندارند؛ معیار قبولی برآورده شدن همه «الزامات» آن تمرین است. پیشنهاد: هر مبحث = قبول / نیاز به تکرار.
- بارم هر پروژه بخش ۲ از **۲۰** است و جدولش در برگه همان پروژه آمده.
- «محدودیت‌ها» شرط قبولی‌اند: استفاده از `style` درون‌خطی، JavaScript یا `!important` (مگر برگه اجازه داده باشد) از هر مورد **۲ نمره** کم می‌کند.
- HTML نامعتبر (تگ بسته‌نشده، `id` تکراری، `img` بدون `alt`) هر مورد **۰٫۵ نمره** کسر دارد.
- کد خوانا (تورفتگی یکدست، نام کلاس معنادار، گروه‌بندی CSS با کامنت) بخشی از نمره است، نه سلیقه.
- بخش «امتیازی» تا **۲ نمره** اضافه دارد، ولی جمع نمره از ۲۰ بیشتر نمی‌شود.
