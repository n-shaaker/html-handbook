# تدریس زنده — CSS Flexbox (ماژول ۰۷)

اسکریپت **کلاس Live** برای [`07-CSS-Flexbox`](../index.html) — هم‌راستا با ۱۴ صفحه [`pages/`](../pages/) و [`quizzes/`](../quizzes/README.md).

## رویکرد تدریس — مسئله اول، بعد property

اسکریپت کامل هر درس در [`دروس/`](./دروس/) است. [`سناریو-تدریس.md`](./سناریو-تدریس.md) فقط navigator است.

| اصل | معنی برای مدرس |
|-----|----------------|
| **مسئله UI اول** | navbar شکسته، کارت نامتقارن، overflow chip — بعد `justify-content` و… |
| **دیالوگ فارسی** | قابل خواندن سر کلاس؛ Live Coding سنگین |
| **چرخه ثابت** | مفهوم → کد → مرورگر → سؤال → راه‌حل |
| **یک‌بعدی** | Flex = یک ردیف **یا** یک ستون؛ Grid ماژول بعد |
| **RTL** | یک بار `dir="rtl"` + DevTools overlay |

**الگوی طلایی:** [`../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md`](../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md)

## فهرست سناریوها (ترتیب درس)

| # | سناریو | جزوه |
|---|--------|------|
| 1 | [`01-آشنایی-با-Flexbox.md`](./دروس/01-آشنایی-با-Flexbox.md) | [01-intro](../pages/01-intro.html) · Live: [`live/01-flex-intro.html`](./live/01-flex-intro.html) |
| 2 | [`02-flex-direction.md`](./دروس/02-flex-direction.md) | [02-flex-direction](../pages/02-flex-direction.html) |
| 3 | [`03-flex-wrap.md`](./دروس/03-flex-wrap.md) | [03-flex-wrap](../pages/03-flex-wrap.html) |
| 4 | [`04-justify-content.md`](./دروس/04-justify-content.md) | [04-justify-content](../pages/04-justify-content.html) |
| 5 | [`05-align-items.md`](./دروس/05-align-items.md) | [05-align-items](../pages/05-align-items.html) |
| 6 | [`06-align-content.md`](./دروس/06-align-content.md) | [06-align-content](../pages/06-align-content.html) |
| 7 | [`07-gap.md`](./دروس/07-gap.md) | [07-gap](../pages/07-gap.html) |
| 8 | [`08-order.md`](./دروس/08-order.md) | [08-order](../pages/08-order.html) |
| 9 | [`09-grow-shrink-basis.md`](./دروس/09-grow-shrink-basis.md) | [09-grow-shrink-basis](../pages/09-grow-shrink-basis.html) |
| 10 | [`10-flex-shorthand.md`](./دروس/10-flex-shorthand.md) | [10-flex-shorthand](../pages/10-flex-shorthand.html) |
| 11 | [`11-align-self-margin-auto.md`](./دروس/11-align-self-margin-auto.md) | [11-align-self-margin-auto](../pages/11-align-self-margin-auto.html) |
| 12 | [`12-الگوهای-پرکاربرد.md`](./دروس/12-الگوهای-پرکاربرد.md) | [12-patterns](../pages/12-patterns.html) |
| 13 | [`13-واکنش‌گرا.md`](./دروس/13-واکنش‌گرا.md) | [13-responsive](../pages/13-responsive.html) |
| 14 | [`14-تمرین-و-جمع‌بندی.md`](./دروس/14-تمرین-و-جمع‌بندی.md) | [14-practice](../pages/14-practice.html) |

## پیش‌نیاز

- Box model، `display` (block/inline)
- [03-CSS-میانی — فرم‌ها](../../03-CSS-میانی/pages/16-forms.html) (طبق جزوه)

## زمان‌بندی پیشنهادی

| طرح | جلسات | محتوا |
|-----|--------|--------|
| **فشرده** | ۲ × ۹۰ دقیقه | ۱–۷ · ۸–۱۴ |
| **استاندارد** | ۳ × ۹۰ دقیقه | ۱–۵ · ۶–۱۰ · ۱۱–۱۴ |
| **کامل Live** | ۴ × ۷۵ دقیقه | ~۳–۴ درس + تمرین خانه |

## ابزار Live

- DevTools → Layout → Flexbox overlay
- HTML پایه: ۳–۵ `.box` شماره‌دار
- [`live/01-flex-intro.html`](./live/01-flex-intro.html)

## navigator کوتاه

[`سناریو-تدریس.md`](./سناریو-تدریس.md)

## پیام ثابت دوره

«Flexbox برای چیدمان **یک‌بعدی** است. وقتی navbar، pricing و footer بدون float درآمد، Grid برای **صفحه کامل** مرحله بعد است — ولی داخل هر سلول Grid باز Flex دارید.»
