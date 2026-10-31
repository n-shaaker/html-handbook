# تدریس زنده — آبشاری بودن CSS (ماژول ۰۴)

اسکریپت **کلاس Live** برای [`04-CSS-آبشاری`](../index.html) — ۷ صفحه [`pages/`](../pages/) و [`quizzes/`](../quizzes/README.md).

## رویکرد تدریس

اسکریپت هر درس: [`دروس/`](./دروس/) · navigator: [`سناریو-تدریس.md`](./سناریو-تدریس.md) (بدون تکرار متن درس).

| اصل | معنی برای مدرس |
|-----|----------------|
| **مسئله اول** | «چرا رنگ من اعمال نشد؟» — بعد cascade |
| **DevTools** | Styles خط‌خورده + Computed در هر درس |
| **چرخه** | مسئله → Live → مرورگر → سؤال → راه‌حل |
| **!important** | آخرین چوب‌دستی — تم با variables بهتر |
| **پایان** | پروژه تم روشن/تاریک + quiz predict-the-winner |

**الگوی سبک:** [`02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md`](../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md)

## فهرست سناریوها

| # | سناریو | جزوه |
|---|--------|------|
| 1 | [`01-ترتیب-قوانین.md`](./دروس/01-ترتیب-قوانین.md) | [01-order](../pages/01-order.html) |
| 2 | [`02-قدرت-انتخابگر.md`](./دروس/02-قدرت-انتخابگر.md) | [02-specificity](../pages/02-specificity.html) |
| 3 | [`03-چند-stylesheet.md`](./دروس/03-چند-stylesheet.md) | [03-stylesheets](../pages/03-stylesheets.html) |
| 4 | [`04-وراثت.md`](./دروس/04-وراثت.md) | [04-inheritance](../pages/04-inheritance.html) |
| 5 | [`05-important.md`](./دروس/05-important.md) | [05-important](../pages/05-important.html) |
| 6 | [`06-تساوی-کلاس‌ها.md`](./دروس/06-تساوی-کلاس‌ها.md) | [06-tie-break](../pages/06-tie-break.html) |
| 7 | [`07-متغیرهای-CSS.md`](./دروس/07-متغیرهای-CSS.md) | [07-variables](../pages/07-variables.html) |

## پیش‌نیاز

- [03-CSS-میانی](../../03-CSS-میانی/index.html) — class، id، combinators
- لینک چند فایل CSS در HTML

## زمان‌بندی

| طرح | محتوا | مدت |
|-----|--------|-----|
| **فشرده** | ۱–۷ + پروژه تم | ۱ × ۹۰–۱۲۰ د |
| **کامل** | + تمرین DevTools (`quizzes/07-devtools`) | ۲ × ۹۰ د |

**جلسه ۱:** order → inheritance (۱–۴)  
**جلسه ۲:** important → variables + [`project-02-light-dark-theme`](../quizzes/2-combined-projects/project-02-light-dark-theme/README.md)

## پیام ثابت

«Cascading = برای هر property **یک برنده**. Specificity و ترتیب را **قبل از** باز کردن Computed پیش‌بینی کنید.»

## ابزار Live

- دو فایل `base.css` + `theme.css` — جابه‌جایی ترتیب `<link>`
- DevTools → Styles / Computed
