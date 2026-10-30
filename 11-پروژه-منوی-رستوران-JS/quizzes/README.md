# تمرین‌ها و پروژه‌های ترکیبی — پروژه منوی رستوران (JavaScript)

تمرین‌های این پوشه بعد از بررسی کد [پروژه منوی نارنج](../index.html) (و فایل [`js/app.js`](../js/app.js)) انجام می‌شوند و دو بخش دارند:

1. **بخش ۱ — تمرین‌های مبحثی** (`1-topic-exercises`): هر رفتار صفحه منو جداگانه، با سه تمرین کوتاه ⭐ ← ⭐⭐ ← ⭐⭐⭐.
2. **بخش ۲ — پروژه‌های ترکیبی** (`2-combined-projects`): چند مبحث بخش ۱ کنار هم، در یک صفحه کامل.

در همه تمرین‌ها HTML و CSS آماده است (پوشه `starter`، با همان ظاهر پروژه و همان تصویرهای پوشه `images`) و شما فقط JavaScript می‌نویسید؛
درست مثل کار واقعی که طراح صفحه را تحویل می‌دهد و برنامه‌نویس رفتارش را می‌سازد.

## روش کار

**برای هنرجو:**

1. **اول بخش ۱ را مبحث به مبحث** جلو بروید. هر تمرین ۱۰ تا ۲۵ دقیقه وقت می‌برد.
2. پوشه `starter` هر مبحث یا پروژه را **کنار همان پوشه** کپی کنید (مثلاً `01-select-dataset/my-answer`) تا آدرس تصویرها (`../../../../images/...`) درست بماند.
3. پوشه `solution` را تا وقتی خودتان تمام نکرده‌اید **باز نکنید**.
4. همه «تست‌ها» را در مرورگر امتحان کنید و Console (<kbd>F12</kbd>) را باز نگه دارید؛ هیچ خطای قرمزی نباید ببینید. صفحه را با <kbd>Tab</kbd> هم امتحان کنید.
5. وقتی مباحث هر پروژه را تمام کردید، سراغ **بخش ۲** بروید (به ترتیب جدول، از آسان به سخت).

**برای استاد:**

- پوشه `solution` هر تمرین یا پروژه یک پاسخ کامل و کارا است (`html` و `style.css` همان starter هستند، به‌اضافه فایل JS).
- پاسخ هنرجو لازم نیست عین پاسخ استاد باشد؛ هر راه‌حل درستی که الزامات و محدودیت‌ها را رعایت کند قابل قبول است.
- جدول بارم‌بندی پروژه‌ها در انتهای هر README آمده است (از ۲۰ نمره).

---

## بخش ۱ — تمرین‌های مبحثی

| پوشه | بخش مرتبط پروژه | تعداد تمرین | مهارت‌ها |
| --- | --- | :---: | --- |
| [01-select-dataset](1-topic-exercises/01-select-dataset/README.md) | [کارت‌های منو](../index.html) | ۳ | `querySelectorAll`، `dataset`، `classList`، `closest` |
| [02-search](1-topic-exercises/02-search/README.md) | [جستجوی منو](../index.html) | ۳ | رویداد `input`، `trim`، `includes`، `hidden`، پیام «پیدا نشد» |
| [03-category-filter](1-topic-exercises/03-category-filter/README.md) | [فیلتر دسته‌ها](../index.html) | ۳ | `data-filter`، دکمه فعال، `aria-pressed`، ترکیب با جستجو |
| [04-cart](1-topic-exercises/04-cart/README.md) | [سبد سفارش](../index.html) | ۳ | آرایه و شیء سبد، `createElement`، Event Delegation با `data-action` |
| [05-total-format](1-topic-exercises/05-total-format/README.md) | [جمع کل سبد](../index.html) | ۳ | `toLocaleString("fa-IR")`، جمع ردیف و کل، تخفیف و مالیات، تابع محاسبه خالص |
| [06-local-storage](1-topic-exercises/06-local-storage/README.md) | [ذخیره سبد](../index.html) | ۳ | `setItem`/`getItem`، `JSON.stringify`/`parse`، `try...catch`، اعتبارسنجی داده |
| [07-form-validation](1-topic-exercises/07-form-validation/README.md) | [فرم رزرو](../index.html#reserve) | ۳ | `preventDefault`، Regex، کلاس `invalid`، شمارنده زنده، `focus()` |
| [08-toast](1-topic-exercises/08-toast/README.md) | [پیام «اضافه شد»](../index.html) | ۳ | `setTimeout`/`clearTimeout`، نوع پیام، حذف با بازگردانی |
| [09-open-status-date](1-topic-exercises/09-open-status-date/README.md) | [وضعیت باز/بسته](../index.html) | ۳ | `Date`، `getHours`/`getDay`، دقیقه از اول روز، `setInterval` |
| [10-panel-toggle](1-topic-exercises/10-panel-toggle/README.md) | [پنل شناور سبد](../index.html) | ۳ | `hidden`، `aria-expanded`، Escape، فوکوس، کلیک بیرون با `contains` |

جمع: **۱۰ مبحث، ۳۰ تمرین**.

---

## بخش ۲ — پروژه‌های ترکیبی

به ترتیب از آسان به سخت:

| پروژه | مباحث ترکیب‌شده (بخش ۱) | هدف | سطح | زمان |
| --- | --- | --- | :---: | :---: |
| [۱ — فیلتر دسته‌بندی و جستجوی منو](2-combined-projects/project-01-category-filter/README.md) | ۰۱، ۰۲، ۰۳ | یک تابع مشترک برای جستجو + فیلتر | ⭐⭐ | ۴۵ دقیقه |
| [۳ — اعتبارسنجی فرم رزرو میز](2-combined-projects/project-03-reservation-validation/README.md) | ۰۷، ۰۹ | فرم رزرو کامل با قانون‌های جدا و بررسی تاریخ | ⭐⭐ | ۶۰ دقیقه |
| [۲ — سبد سفارش با ذخیره در مرورگر](2-combined-projects/project-02-order-cart/README.md) | ۰۱، ۰۴، ۰۵، ۰۶ | سبد کامل که با بستن صفحه پاک نشود | ⭐⭐⭐ | ۷۵ دقیقه |
| [۴ — سفارش آنلاین کافه](2-combined-projects/project-04-cafe-order/README.md) | ۰۳، ۰۴، ۰۵، ۰۶ (+۰۸ امتیازی) | فیلتر + سبد + هزینه پیک + ذخیره، همه از روی یک شیء داده | ⭐⭐⭐ | ۹۰ دقیقه |
| [۵ — نوبت‌دهی میز با ظرفیت سانس‌ها](2-combined-projects/project-05-table-booking/README.md) | ۰۷، ۰۹، ۰۶، ۰۸، ۰۴ | رزرو با ظرفیت محدود هر سانس، تاریخ و ذخیره | ⭐⭐⭐ | ۱۰۰ دقیقه |

---

## نکات کلی نمره‌دهی

- خطای قرمز در Console هنگام باز شدن صفحه یا کار معمولی: ۲ نمره کسر.
- `onclick` داخل HTML، `alert`/`confirm` یا `var`: هر مورد ۱ نمره کسر.
- نوشتن متنی که کاربر وارد کرده با `innerHTML`: ۲ نمره کسر (خطر اجرای کد).
- تغییر دادن HTML یا CSS آماده بدون این‌که تمرین خواسته باشد: ۱ نمره کسر.
- بخش «امتیازی» تا ۲ نمره اضافه دارد، ولی جمع نمره از ۲۰ بیشتر نمی‌شود.
- تمرین‌های بخش ۱ نمره جدا ندارند؛ تمرین هستند تا پروژه‌های بخش ۲ راحت‌تر شوند. استاد می‌تواند چند تمرین ⭐⭐⭐ را به عنوان کار کلاسی بررسی کند.
