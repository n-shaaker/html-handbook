# فرم کامل — از HTML خالی تا CSS

مسیر دو مرحله‌ای برای تمرین فرم، مطابق جزوه:

1. **[01-html-خالی](01-html-خالی/)** — فقط HTML (ظاهر پیش‌فرض مرورگر)
2. **[02-با-css](02-با-css/)** — همان فرم‌ها با CSS خارجی

فهرست مرورگر: [index.html](index.html)

## پیش‌نیاز

| مرحله | قبل از شروع بخوانید |
| --- | --- |
| HTML خالی | [درس ۱۲ فرم‌ها](../01-HTML-مقدماتی/pages/12-forms.html) و [۱۹ فرم پیشرفته](../01-HTML-مقدماتی/pages/19-forms-advanced.html) |
| با CSS | [02 CSS مقدماتی](../02-CSS-مقدماتی/) + [03 درس استایل فرم](../03-CSS-میانی/pages/16-forms.html) |

## فرم‌های داخل پوشه

| فایل | موضوع |
| --- | --- |
| `contact.html` | تماس با ما |
| `login.html` | ورود |
| `register.html` | ثبت‌نام |
| `search.html` | جستجو (`method="get"`) |
| `survey.html` | نظرسنجی (radio، checkbox، range) |
| `booking.html` | رزرو (date، time، number، select) |

## کار پیشنهادی

1. هر فایل HTML خالی را در مرورگر باز کنید و با Tab بچرخید.
2. Validator را روی HTML بزنید.
3. **بدون نگاه به CSS آماده**، خودتان یک `style.css` برای یکی از فرم‌ها بنویسید.
4. بعد با پوشهٔ `02-با-css` مقایسه کنید.

## معیار موفقیت

- هر `input`/`select`/`textarea` با `label` وصل است (`for` + `id`)
- همهٔ فیلدهای ارسالی `name` دارند
- `button type="submit"` مشخص است
- در نسخهٔ CSS: فوکوس واضح، فاصله منظم، موبایل خوانا (`max-width` + `box-sizing`)
