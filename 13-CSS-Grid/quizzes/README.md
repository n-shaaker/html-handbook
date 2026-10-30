# تمرین‌ها و پروژه‌های CSS Grid

تمرین‌های این دوره دو بخش دارند:

1. **بخش ۱ — تمرین‌های مبحثی** (`1-topic-exercises`): برای هر درس یک پوشه با سه تمرین کوتاه (۱۰ تا ۲۵ دقیقه)
   از آسان ⭐ تا سخت ⭐⭐⭐. هر تمرین **فقط یک مهارت** را می‌سنجد و فقط از همان درس و درس‌های قبلی استفاده می‌کند.
2. **بخش ۲ — پروژه‌های ترکیبی** (`2-combined-projects`): هر پروژه چند مبحث بخش ۱ را **هدفمند** کنار هم می‌گذارد
   تا یک صفحه واقعی ساخته شود.

## روش کار

**برای هنرجو:**

1. بعد از خواندن هر درس، سراغ پوشه همان مبحث در بخش ۱ بروید و سه تمرینش را **به ترتیب** حل کنید.
2. برای هر تمرین دو فایل جدا بسازید (مثلاً `ex-1.html` و `ex-1.css`). اگر تمرین پوشه `starter` دارد، از آن شروع کنید.
3. اول خودتان حل کنید و فهرست «الزامات» را تیک بزنید؛ بعد با `solution` مقایسه کنید.
4. وقتی مبحث‌های یک پروژه را تمام کردید (در برگه هر پروژه آمده)، سراغ بخش ۲ بروید. پروژه‌ها از آسان به سخت مرتب شده‌اند.
5. قبل از تحویل هر پروژه، صفحه را یک بار در عرض موبایل (کمتر از ۴۰۰ پیکسل) و یک بار در دسکتاپ ببینید.

**برای استاد:**

- پوشه `solution` یک پاسخ ساده و کارا است، نه «تنها پاسخ درست». هر راه‌حلی که الزامات را برآورده کند و تمیز باشد، قبول است.
- تمرین‌های «درستش کنید» (با پوشه `starter`) برای کلاس عالی‌اند: اول بپرسید «چرا خراب است؟» و بعد بگذارید درستش کنند.
- در DevTools روی نشان `grid` کنار عنصر کلیک کنید تا خط‌ها و شماره‌های شبکه روی صفحه دیده شوند.

## بخش ۱ — تمرین‌های مبحثی

| پوشه | درس | تعداد تمرین | مهارت‌ها |
|---|---|:---:|---|
| [01-intro](1-topic-exercises/01-intro/README.md) | [۰۱) Grid چیست؟](../pages/01-intro.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | `display: grid`، ظرف و آیتم، خط/ترک/خانه، خط ۱ در راست‌چین |
| [02-columns-rows](1-topic-exercises/02-columns-rows/README.md) | [۰۲) ستون‌ها و ردیف‌ها](../pages/02-columns-rows.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | `px` و `fr`، ستون ثابت + منعطف، `grid-template-rows` |
| [03-repeat-minmax](1-topic-exercises/03-repeat-minmax/README.md) | [۰۳) repeat و minmax](../pages/03-repeat-minmax.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | `repeat(4, 1fr)`، `minmax(150px, 1fr)`، الگوی `repeat(2, 120px 1fr)` |
| [04-gap](1-topic-exercises/04-gap/README.md) | [۰۴) gap](../pages/04-gap.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | `gap`، `row-gap` و `column-gap`، `fr` به‌جای درصد |
| [05-placement](1-topic-exercises/05-placement/README.md) | [۰۵) جای‌گذاری با شماره خط](../pages/05-placement.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | `1 / -1`، `span`، شمردن خط‌ها در راست‌چین |
| [06-template-areas](1-topic-exercises/06-template-areas/README.md) | [۰۶) template-areas](../pages/06-template-areas.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | اسکلت صفحه، خانه خالی با `.`، قانون‌های نقشه |
| [07-align-items](1-topic-exercises/07-align-items/README.md) | [۰۷) تراز آیتم داخل خانه](../pages/07-align-items.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | `place-items`، `justify-self`، `align-self` |
| [08-align-content](1-topic-exercises/08-align-content/README.md) | [۰۸) تراز کل شبکه](../pages/08-align-content.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | `justify-content`، `place-content`، چرا با `fr` بی‌اثر است |
| [09-auto-fit-fill](1-topic-exercises/09-auto-fit-fill/README.md) | [۰۹) auto-fill و auto-fit](../pages/09-auto-fit-fill.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | شبکه خودکار بدون media query، فرق fill و fit |
| [10-implicit-grid](1-topic-exercises/10-implicit-grid/README.md) | [۱۰) شبکه ضمنی](../pages/10-implicit-grid.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | `grid-auto-rows`، `grid-auto-flow: column`، `dense` |
| [11-grid-vs-flex](1-topic-exercises/11-grid-vs-flex/README.md) | [۱۱) Grid یا Flexbox؟](../pages/11-grid-vs-flex.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | انتخاب ابزار، Grid بیرون + Flex داخل کارت |
| [12-patterns](1-topic-exercises/12-patterns/README.md) | [۱۲) الگوهای پرکاربرد](../pages/12-patterns.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | وسط‌چین کامل، فرم دوستونه، گالری با عکس ۲×۲ |
| [13-responsive](1-topic-exercises/13-responsive/README.md) | [۱۳) Grid واکنش‌گرا](../pages/13-responsive.html) | ۳ (⭐ ⭐⭐ ⭐⭐⭐) | عوض کردن نقشه و `repeat` در یک media query |

درس ۱۴ («تمرین جمع‌بندی») مبحث جدیدی ندارد؛ تمرین‌های آن در پروژه‌های بخش ۲ آمده‌اند.

## بخش ۲ — پروژه‌های ترکیبی

| پروژه | مباحث ترکیب‌شده (پوشه‌های بخش ۱) | هدف | سطح | زمان |
|---|---|---|:---:|:---:|
| [۱. چیدمان صفحه کافه](2-combined-projects/project-01-page-layout/README.md) | ۰۲، ۰۳، ۰۴، ۰۶، ۱۳ | اسکلت صفحه با نقشه ناحیه‌ها، واکنش‌گرا | ⭐⭐ | ۶۰ دقیقه |
| [۲. گالری عکس سفر](2-combined-projects/project-02-photo-gallery/README.md) | ۰۳، ۰۵، ۰۹، ۱۰، ۱۱، ۱۲ | گالری خودکار با عکس منتخب، بدون media query | ⭐⭐ | ۷۵ دقیقه |
| [۳. داشبورد مدیریت](2-combined-projects/project-03-admin-dashboard/README.md) | ۰۲، ۰۳، ۰۴، ۰۵، ۰۶، ۰۸، ۱۳ | template-areas + کارت‌های آمار + پنل ۲×۲ | ⭐⭐ | ۷۵ دقیقه |
| [۴. مجله خبری](2-combined-projects/project-04-news-magazine/README.md) | ۰۳، ۰۵، ۰۷، ۰۹، ۱۰، ۱۲، ۱۳ | خبر ویژه با span، auto-fill و dense | ⭐⭐⭐ | ۹۰ دقیقه |
| [۵. صفحه کامل Grid + Flex](2-combined-projects/project-05-full-page/README.md) | ۰۵، ۰۶، ۰۷، ۰۹، ۱۱، ۱۲، ۱۳ | اسکلت با Grid، سربرگ و کارت‌ها با Flexbox، از صفر | ⭐⭐⭐ | ۱۲۰ دقیقه |
| [۶. شبکه خراب را درست کنید](2-combined-projects/project-06-fix-the-grid/README.md) | ۰۱، ۰۳، ۰۴، ۰۵، ۰۶، ۰۹، ۱۳ | اشکال‌زدایی یک صفحه واقعی و توضیح علت هر خطا | ⭐⭐⭐ | ۶۰ دقیقه |

## نکات نمره‌دهی

- **بخش ۱:** تمرین‌ها نمره جدا ندارند؛ برای تمرین و بازخورد سریع‌اند. پیشنهاد: هر پوشه مبحث «انجام شد / ناقص» ثبت شود.
- **بخش ۲:** بارم هر پروژه از **۲۰** است و جدولش در برگه همان پروژه آمده.
- «محدودیت‌ها» شرط قبولی‌اند: `style` درون‌خطی، JavaScript یا `!important` هر مورد **۲ نمره** کسر دارد.
- استفاده از `float` یا `position: absolute` برای ساختن ستون‌ها **۲ نمره** کسر دارد؛ چیدمان باید با Grid باشد (به‌جز جاهایی که برگه Flexbox خواسته).
- HTML نامعتبر (تگ بسته‌نشده، `id` تکراری، `img` بدون `alt`) هر مورد **۰٫۵ نمره** کسر دارد.
- کد خوانا (تورفتگی یکدست، نام کلاس معنادار، گروه‌بندی CSS با کامنت) بخشی از نمره است.
- بخش «امتیازی» تا **۲ نمره** اضافه دارد، ولی جمع نمره از ۲۰ بیشتر نمی‌شود.
