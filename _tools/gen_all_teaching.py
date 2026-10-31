# -*- coding: utf-8 -*-
"""One-shot generator for تدریس/دروس in modules 03, 04, 05."""
from __future__ import annotations
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def doc(
    num, title, page, mod_prefix, prereq, minutes, goal, optional,
    schedule, opening, body_sections, project, closing_q, exercises, nxt
):
    opt = " · **اختیاری**" if optional else ""
    out = [
        f"# سناریوی تدریس درس {num}: {title}{opt}",
        "",
        f"**صفحه جزوه:** [`pages/{page}`]({mod_prefix}/pages/{page})  ",
        f"**پیش‌نیاز:** {prereq}  ",
        f"**مدت پیشنهادی:** حدود {minutes} دقیقه  ",
        f"**هدف جلسه:** {goal}",
        "",
        "**چرخه ثابت تدریس:** مسئله واقعی → دیالوگ → Live Coding → مرورگر → سؤال → راه‌حل",
        "",
        "| موضوع | زمان |", "|------|------|",
    ]
    tot = 0
    for t, m in schedule:
        out.append(f"| {t} | {m} دقیقه |")
        tot += m
    out.append(f"| **مجموع** | **{tot} دقیقه** |")
    out += ["", "---", "", "## ۱) شروع کلاس؛ مسئله واقعی", "", opening.strip(), ""]
    for i, (h, blocks) in enumerate(body_sections, 2):
        out += ["---", "", f"## {i}) {h}", ""]
        for b in blocks:
            b = b.strip()
            if b.startswith("```"):
                out.append(b)
            else:
                out.append(b)
            out.append("")
    out += ["---", "", "## پروژه کوچک جلسه", "", project.strip(), "",
            "---", "", "## جمع‌بندی و سؤالات پایانی", ""]
    for i, (q, a) in enumerate(closing_q, 1):
        out += [f"{i}. {q}", f"   **پاسخ راهنما:** {a}", ""]
    out += ["---", "", "## تمرین‌ها (ساده → چالشی)", ""]
    out.extend(exercises)
    out += ["", "---", "", "## انتقال به درس بعدی", "", nxt.strip(), ""]
    return "\n".join(out)


def write_mod(base, mod_rel, items):
    d = os.path.join(ROOT, base, "تدریس", "دروس")
    os.makedirs(d, exist_ok=True)
    for filename, content in items:
        p = os.path.join(d, filename)
        with open(p, "w", encoding="utf-8") as f:
            f.write(content)
        print(p)


MOD3 = "../.."
MOD4 = "../.."
MOD5 = "../.."

# ---------- Module 03 (25 files) ----------
m03 = []

def add_m03(fn, num, title, page, mins, goal, prereq, sched, open_, sections, proj, cq, ex, nxt, opt=False):
    m03.append((fn, doc(num, title, page, MOD3, prereq, mins, goal, opt, sched, open_, sections, proj, cq, ex, nxt)))

# 01 Display
add_m03(
    "01-نمایش.md", "۱", "نمایش (Display)", "01-display.html", 75,
    "تفاوت block، inline و none را در layout ببیند و بداند چرا دکمه‌ها گاهی تمام عرض را می‌گیرند.",
    "[Box model](../../../02-CSS-مقدماتی/pages/12-boxmodel.html) · [Block/Inline](../../../01-HTML-مقدماتی/pages/14-div-span.html)",
    [("مسئله دکمه‌های تمام‌عرض", 12), ("block / inline / none", 25), ("Live + DevTools", 18), ("تمرین", 20)],
    """«یک صفحه ثبت‌نام داریم؛ هر `<button>` یک خط کامل گرفته. HTML را عوض نمی‌کنیم — فقط CSS. مرورگر هر عنصر را چطور در صفحه می‌چیند؟

امروز `display` را با Live code می‌زنیم. Flex و Grid در [`07-CSS-Flexbox`](../../../07-CSS-Flexbox/index.html) و [`08-CSS-Grid`](../../../08-CSS-Grid/index.html) کامل می‌شوند؛ اینجا پایه flow را محکم می‌کنیم.»""",
    [
        ("مفهوم و Live Coding", [
            "«`display` نوع **جعبه** را مشخص می‌کند: block (عرض در دسترس، شکست خط)، inline (کنار متن)، `none` (حذف از layout).»",
            "«یادآوری HTML: `div` block، `span` inline — CSS می‌تواند این را override کند.»",
            """```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>Live — display</title>
  <style>
    .box { display: block; background: #e0e7ff; padding: 1rem; margin-block-end: 0.5rem; }
    .chip { display: inline; background: #fef08a; padding: 0.2rem 0.5rem; }
    .gone { display: none; }
  </style>
</head>
<body>
  <div class="box">باکس block</div>
  <span class="chip">الف</span><span class="chip">ب</span>
  <div class="box gone">این دیده نمی‌شود و جا هم نمی‌گیرد</div>
</body>
</html>
```""",
            "**در مرورگر:** chipها در یک خط؛ باکس gone اثری ندارد.",
            "### سؤال کلاسی",
            "- «`visibility: hidden` با `display: none`؟» → hidden فضا را نگه می‌دارد؛ none نه.",
            "### اشتباهات رایج",
            "- block کردن همه عناصر برای «راحتی».",
            "### انتقال",
            "«container از صفحه بیرون نزند — max-width.»",
        ]),
    ],
    "سه chip فیلتر کنار هم (inline-block یا flex روی parent)؛ یک حالت غیرفعال با `display:none`.",
    [("چرا `span` با width کار نمی‌کند؟", "inline — تا display عوض نشود."),
     ("کدام برای مخفی کردن modal از tab keyboard بهتر است؟", "none + مدیریت focus در JS — خارج از scope امروز.")],
    ["1. دو span: inline vs block.", "2. دکمه‌ها با `inline-block`.", "3. مقایسه visibility و display در DevTools."],
    "→ [`02-max-width.html`](../pages/02-max-width.html) · [`02-حداکثر-عرض.md`](./02-حداکثر-عرض.md)",
)

add_m03(
    "02-حداکثر-عرض.md", "۲", "حداکثر عرض (Max-width)", "02-max-width.html", 65,
    "الگوی container مرکزی با `width:100%` + `max-width` + `margin-inline:auto`.",
    "[عرض و واحدها](../../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md)",
    [("مسئله متن یک خطی روی مانیتور عریض", 10), ("max-width و auto margin", 25), ("Live", 20), ("تمرین", 10)],
    """«مقالهٔ وبلاگ روی مانیتور ۲۷ اینچی یک خط دراز شده — خوانایی صفر. عرض ثابت ۹۶۰px روی موبایل overflow می‌دهد. راه میانه چیست؟»""",
    [("درصد + سقف", [
        "«`max-width` می‌گوید از این بزرگ‌تر نشو؛ با `width:100%` در والد باریک کوچک می‌شوی.»",
        "«الگوی container: `width:100%; max-width:72rem; margin-inline:auto; padding-inline:1rem;`»",
        """```css
.container {
  width: 100%;
  max-width: 48rem;
  margin-inline: auto;
  padding-inline: 1rem;
}
```""",
        "**در مرورگر:** DevTools عرض را کم کن — container جمع می‌شود؛ روی دسکتاپ وسط می‌ایستد.",
        "### سؤال کلاسی", "- «فقط max-width بدون width؟» → گاهی کوچک‌تر از انتظار؛ الگوی رایج 100%+max.",
        "### انتقال", "«عنصر باید از flow خارج شود — position.»",
    ])],
    "صفحه مقاله با container 40rem و padding؛ روی 320px تست.",
    [("container وسط چطور؟", "margin-inline:auto با width/max-width."),
     ("72rem یعنی چه؟", "نسبت به font-size root — معمولاً ~1152px اگر root 16px.")],
    ["1. پارagraph داخل container.", "2. max-width 20rem روی card.", "3. مقایسه px ثابت vs درصد+max."],
    "→ [`03-position.html`](../pages/03-position.html) · [`03-موقعیت.md`](./03-موقعیت.md)",
)

# Bulk define remaining m03 lessons
BULK = [
("03-موقعیت.md","۳","موقعیت (Position)","03-position.html",90,
 "static، relative، absolute، fixed و sticky را با badge روی کارت و sticky header در عمل ببیند.",
 "[display](./01-نمایش.md)",
 [("مسئله badge روی کارت",12),("static و relative",18),("absolute و containing block",22),("fixed و sticky",20),("تمرین",18)],
 """«روی کارت محصول باید برچسب «جدید» گوشه بنشیند — نه خط جدید، نه شکستن layout. `margin` کافی نیست؛ **position** وارد می‌شود.»""",
 ("position در عمل",[
  "«**static** پیش‌فرض — top/left بی‌اثر. **relative** جابه‌جایی visual با حفظ جای flow. **absolute** خارج flow؛ مرجع: نزدیک‌ترین ancestor با position≠static. **fixed** نسبت viewport. **sticky** تا آستانه relative، بعد می‌چسبد.»",
  "«در RTL، `left`/`right` فیزیکی هستند — با dir جابه‌جا نمی‌شوند؛ برای منطق start/end از `inset-inline-*` استفاده کنید.»",
  """```css
.card { position: relative; padding: 1rem; background: #fff; border-radius: 0.5rem; }
.badge {
  position: absolute;
  top: 0.5rem;
  inset-inline-start: 0.5rem;
  background: #6366f1;
  color: #fff;
  padding: 0.15rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
}
.site-header {
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
}
```""",
  "**در مرورگر:** badge روی کارت؛ header با scroll می‌چسبد (sticky والد overflow visible باشد).",
  "### سؤال کلاسی",
  "- «absolute بدون relative parent؟» → معمولاً viewport/body.",
  "- «sticky کار نمی‌کند؟» → ancestor با overflow:hidden یا بدون top.",
  "### اشتباهات رایج",
  "- fixed برای همه overlay بدون z-index.",
  "### انتقال",
  "«وقتی دو لایه روی هم — z-index.»",
 ]),
 "کارت محصول + badge + sticky nav کوتاه.",
 [("relative فضای اولیه را نگه می‌دارد؟","بله."),
  ("fixed نسبت به چه؟","viewport.")],
 ["1. badge absolute.", "2. sticky h2 در مقاله.", "3. توضیح containing block."],
 "→ [`04-z-index.html`](../pages/04-z-index.html) · [`04-ترتیب-لایه‌ها.md`](./04-ترتیب-لایه‌ها.md)"),

("04-ترتیب-لایه‌ها.md","۴","ترتیب لایه‌ها (Z-index)","04-z-index.html",75,
 "z-index و stacking context — modal روی backdrop.",
 "[position](./03-موقعیت.md)",
 [("modal زیر محتوا",10),("z-index و positioned",25),("stacking context",20),("تمرین",20)],
 """«backdrop تیره داریم و modal وسط — ولی modal پشت sidebar می‌رود. عدد بزرگ کافی نیست؛ **stacking context** را می‌فهمیم.»""",
 ("z-index",[ 
  "«`z-index` روی عناصر positioned (و برخی flex/grid items). فقط در **یک context** با هم مقایسه می‌شوند.»",
  "«context جدید: opacity<1، transform، filter، position+ z-index، و غیره.»",
  """```css
.modal-backdrop { position: fixed; inset: 0; background: rgb(0 0 0 / 0.5); z-index: 100; }
.modal {
  position: fixed; inset: 0; display: grid; place-items: center; z-index: 101;
  pointer-events: none;
}
.modal__panel { pointer-events: auto; background: #fff; padding: 1.5rem; border-radius: 0.5rem; }
```""",
  "**در مرورگر:** panel جلوتر از backdrop.",
  "### سؤال کلاسی","- «child z-index:9999 داخل parent z-index:1؟» → با siblings خارج parent مقایسه نمی‌شود.",
  "### انتقال","«محتوای بلند در جعبه — overflow.»",
 ]),
 "backdrop + modal panel با z-index منظم (100/101).",
 [("z-index روی static؟","بی‌اثر."),
  ("چرا opacity parent مهم است؟","context جدید.")],
 ["1. دو box overlap.", "2. modal ساده.", "3. DevTools لایه‌ها."],
 "→ [`05-overflow.html`](../pages/05-overflow.html) · [`05-سرریز-overflow.md`](./05-سرریز-overflow.md)"),

("05-سرریز-overflow.md","۵","سرریز (Overflow)","05-overflow.html",70,
 "visible/hidden/scroll/auto و ارتباط با crop تصویر و sticky.",
 "[position](./03-موقعیت.md)",
 [("متن از card بیرون زد",12),("overflow values",25),("sticky و hidden",18),("تمرین",15)],
 """«کارت گالری تصویر بزرگ‌تر از قاب است — یا scroll می‌خواهیم یا crop. **`overflow`** تصمیم می‌گیرد.»""",
 ("overflow",[
  "«`visible` (پیش‌فرض)، `hidden` (برش)، `scroll` (همیشه scrollbar)، `auto` (وقتی لازم). محور: overflow-x/y.»",
  """```css
.card-media {
  width: 12rem;
  height: 8rem;
  overflow: hidden;
  border-radius: 0.5rem;
}
.card-media img { width: 100%; height: 100%; object-fit: cover; }
```""",
  "**در مرورگر:** گوشه گرد + crop؛ dropdown بریده → ancestor overflow hidden.",
  "### سؤال کلاسی","- «sticky نمی‌چسبد؟» → ancestor overflow hidden.",
  "### انتقال","«float — میراث layout.»",
 ]),
 "card با overflow hidden و تصویر cover.",
 [("overflow hidden روی body؟","معمولاً برای lock scroll modal — با احتیاط."),
  ("auto vs scroll؟","auto فقط وقتی لازم scroll نشان می‌دهد.")],
 ["1. div با scroll.", "2. crop تصویر.", "3. پیدا کردن ancestor بریده‌کننده dropdown."],
 "→ [`06-float.html`](../pages/06-float.html) · [`06-شناور-float.md`](./06-شناور-float.md)"),

("06-شناور-float.md","۶","شناور کردن (Float و Clear)","06-float.html",70,
 "float برای wrap متن دور تصویر؛ clearfix؛ چرا navbar امروز flex است.",
 "[overflow](./05-سرریز-overflow.md)",
 [("تصویر و متن مقاله",15),("float و clear",25),("clearfix",15),("تمرین",15)],
 """«در مقاله خبری عکس سمت راست و متن دور آن می‌پیچد — قبل از flex این کار با **`float`** بود. می‌فهمیم و برای layout اصلی به Flex/Grid ارجاع می‌دهیم.»""",
 ("float",[
  "«`float: inline-start` (یا left/right) عنصر را کنار می‌برد؛ متن wrap می‌شود. **clear** float قبلی را پاک می‌کند.»",
  "«collapse ارتفاع parent → **clearfix** روی parent.»",
  """```css
.figure { float: inline-start; width: 8rem; margin-inline-end: 1rem; }
.clearfix::after { content: ""; display: table; clear: both; }
```""",
  "**در مرورگر:** متن دور تصویر؛ layout سایت را با [`07-Flexbox`](../../../07-CSS-Flexbox/index.html) بسازید نه float.",
  "### انتقال","«inline-block — وسط inline و block.»",
 ]),
 "مقاله کوتاه با float image + clearfix.",
 [("navbar با float؟","امروز flex ساده‌تر."),
  ("parent height صفر؟","float children — clearfix.")],
 ["1. float image.", "2. clearfix.", "3. مقایسه با flex row."],
 "→ [`07-inline-block.html`](../pages/07-inline-block.html) · [`07-inline-block.md`](./07-inline-block.md)"),

("07-inline-block.md","۷","Inline-block","07-inline-block.html",65,
 "width/height روی عناصر کنار هم؛ مشکل whitespace.",
 "[display](./01-نمایش.md)",
 [("دکمه‌ها کنار هم",15),("inline-block",25),("whitespace gap",15),("تمرین",10)],
 """«سه tab کنار هم می‌خواهیم — `inline` width نمی‌گیرد، `block` می‌شکند خط. **`inline-block`** وسط است.»""",
 ("inline-block",[
  "«کنار هم + width/height/padding عمودی. فاصله عجیب؟ **whitespace** بین tagهای HTML.»",
  "«راه‌حل مدرن: flex + gap روی parent ([Flexbox](../../../07-CSS-Flexbox/index.html)).»",
  """```css
.tabs { display: flex; gap: 0.5rem; }
.tab { padding: 0.5rem 1rem; background: #e2e8f0; border-radius: 0.25rem; }
```""",
  "**در مرورگر:** flex gap vs inline-block whitespace.",
  "### انتقال","«center کردن block — align.»",
 ]),
 "tabs با flex (ترجیح) یا inline-block (تاریخی).",
 [("فاصله بین inline-block؟","newline whitespace در HTML."),
  ("vertical-align؟","baseline inline-block — گاهی جابه‌جایی عمودی.")],
 ["1. سه tab inline-block.", "2. همان با flex.", "3. vertical-align middle."],
 "→ [`08-align.html`](../pages/08-align.html) · [`08-تراز-align.md`](./08-تراز-align.md)"),

("08-تراز-align.md","۸","وسط‌چین و تراز (Align)","08-align.html",70,
 "text-align، margin auto، تفاوت inline content vs block box.",
 "[max-width](./02-حداکثر-عرض.md)",
 [("تیتر وسط",12),("text-align",18),("margin auto",20),("vertical limits",15),("تمرین",15)],
 """«hero می‌خواهیم عنوان وسط صفحه — بعضی‌ها `text-align` می‌زنند روی div و انتظار center شدن child block را دارند. امروز **کدام تراز برای کدام نوع جعبه** است.»""",
 ("align",[
  "«**محتوای inline** داخل block: `text-align`. **خود block** در parent: `width/max-width` + `margin-inline: auto`.»",
  "«عمودی تک‌خط: line-height؛ چندخط/modern: flex/grid در ماژول 07/08.»",
  """```css
.hero-title { text-align: center; }
.narrow { max-width: 32rem; margin-inline: auto; }
```""",
  "**در مرورگر:** RTL — start/end vs left/right در تمرین بعدی combinators.",
  "### انتقال","«selector دقیق‌تر — combinators.»",
 ]),
 "hero با title center و paragraph در narrow column.",
 [("center div block؟","margin-inline auto نه text-align parent."),
  ("vertical-align روی div block؟","بی‌اثر — inline/inline-block/table-cell.")],
 ["1. text-align center.", "2. box 300px centered.", "3. flex center (ارجاع 07)."],
 "→ [`09-combinators.html`](../pages/09-combinators.html) · [`09-ترکیب‌کننده‌ها.md`](./09-ترکیب‌کننده‌ها.md)"),

("09-ترکیب‌کننده‌ها.md","۹","ترکیب‌کننده‌ها (Combinators)","09-combinators.html",75,
 "descendant، child، adjacent sibling، general sibling.",
 "[انتخابگرها](../../../02-CSS-مقدماتی/تدریس/دروس/03-انتخابگرها.md)",
 [("استایل اشتباه لینک footer",12),("چهار combinator",30),("specificity",18),("تمرین",15)],
 """«`.nav a` همه لینک‌ها را رنگی کرد — حتی لینک داخل `.dropdown` که نباید. **`>` و فاصله** فرق دارند.»""",
 ("combinators",[
  "«`A B` descendant — هر عمق. `A > B` فقط فرزند مستقیم. `A + B` همسایه بلافاصله بعد. `A ~ B` siblings بعدی.»",
  """```css
.nav > li { list-style: none; }
.nav a { color: #4338ca; }
h2 + p { margin-block-start: 0; }
```""",
  "**در مرورگر:** `.card p` vs `.card > p` اگر p در footer nested.",
  "### انتقال","«state — pseudo-classes.»",
 ]),
 "nav list با > ; article با h2+p.",
 [("`.card p` vs `.card > p`؟","عمق footer."),
  ("specificity combinator؟","each element counts.")],
 ["1. descendant vs child.", "2. adjacent sibling.", "3. refactor selector عمیق."],
 "→ [`10-pseudo-classes.html`](../pages/10-pseudo-classes.html) · [`10-شبه-کلاس‌ها.md`](./10-شبه-کلاس‌ها.md)"),

("10-شبه-کلاس‌ها.md","۱۰","شبه‌کلاس‌ها (Pseudo-classes)","10-pseudo-classes.html",80,
 ":hover، :focus-visible، :nth-child، :not — LVHA برای لینک.",
 "[combinators](./09-ترکیب‌کننده‌ها.md)",
 [("لینک بنفش ماند",12),("interactive states",28),("nth-child",20),("تمرین",20)],
 """«دکمه hover دارد ولی با Tab outline ندارد — keyboard user گم شده. **:focus-visible** و **LVHA** را live می‌زنیم.»""",
 ("pseudo-classes",[
  "«`:hover`, `:focus`, `:focus-visible`, `:active`, `:disabled`, `:checked`, `:nth-child()`, `:not()`.»",
  "«لینک: **LVFHA** — `:link`, `:visited`, `:focus`, `:hover`, `:active` ترتیب مهم.»",
  """```css
.btn:hover { filter: brightness(1.05); }
.btn:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}
input:invalid { border-color: #ef4444; }
li:nth-child(2n) { background: #f8fafc; }
```""",
  "**در مرورگر:** Tab vs mouse focus؛ invalid email.",
  "### انتقال","«decor با ::before — pseudo-elements.»",
 ]),
 "فرم کوتاه + دکمه با focus-visible.",
 [("`:nth-child(2n)`؟","زوج‌ها."),
  ("outline none؟","فقط با focus-visible جایگزین.")],
 ["1. zebra list.", "2. LVHA links.", "3. :not(.disabled)."],
 "→ [`11-pseudo-elements.html`](../pages/11-pseudo-elements.html) · [`11-شبه-عنصرها.md`](./11-شبه-عنصرها.md)"),

("11-شبه-عنصرها.md","۱۱","شبه‌عنصرها (Pseudo-elements)","11-pseudo-elements.html",75,
 "::before/::after با content؛ decor vs a11y.",
 "[pseudo-classes](./10-شبه-کلاس‌ها.md)",
 [("علامت نقل‌قول",12),("::before/::after",28),("content و a11y",20),("تمرین",15)],
 """«می‌خواهیم قبل از نقل‌قول « گذاشته شود بدون اضافه کردن span در HTML — **`::before`** و **`content`**.»""",
 ("pseudo-elements",[
  "«`::before`, `::after` — `content` اجباری (حتی `\"\"`). `::placeholder`, `::first-line`. ترجیح `::` دو نقطه.»",
  "«محتوای مهم فقط در pseudo برای screen reader نیست — decor only.»",
  """```css
.quote::before { content: "«"; color: #6366f1; font-size: 1.5em; }
.required-label::after { content: " *"; color: #ef4444; }
```""",
  "**در مرورگر:** DevTools pseudo subtree.",
  "### انتقال","«شفافیت کل subtree — opacity.»",
 ]),
 "blockquote با ::before و label required.",
 [("بدون content؟","pseudo دیده نمی‌شود."),
  (":a11y risk؟","متن مهم در ::after.")],
 ["1. quote marks.", "2. divider ::after.", "3. ::placeholder style."],
 "→ [`12-opacity.html`](../pages/12-opacity.html) · [`12-شفافیت-opacity.md`](./12-شفافیت-opacity.md)"),

("12-شفافیت-opacity.md","۱۲","شفافیت (Opacity)","12-opacity.html",65,
 "opacity vs alpha در background؛ stacking context.",
 "[pseudo-elements](./11-شبه-عنصرها.md)",
 [("overlay تیره",15),("opacity subtree",20),("rgba/hsla",20),("تمرین",10)],
 """«overlay روی hero داریم — با `opacity:0.5` روی div کل متن هم محو شد. راه درست **alpha فقط روی پس‌زمینه**.»""",
 ("opacity",[
  "«`opacity` روی element + **همه فرزندان**. برای bg: `rgb(15 23 42 / 0.6)`. opacity<1 stacking context.»",
  """```css
.overlay { background: rgb(15 23 42 / 0.6); }
.fade { opacity: 0.85; }
.fade:hover { opacity: 1; }
```""",
  "### انتقال","«navbar افقی — flex در 07.»",
 ]),
 "hero overlay با alpha نه opacity parent.",
 [("متن محو؟","opacity parent — از alpha bg."),
  ("opacity vs visibility؟","متفاوت — visibility inherit محتوا.")],
 ["1. overlay readable.", "2. hover fade card.", "3. contrast check."],
 "→ [`13-navbar.html`](../pages/13-navbar.html) · [`13-نوار-منو.md`](./13-نوار-منو.md)"),

("13-نوار-منو.md","۱۳","نوار منو (Navigation Bar)","13-navbar.html",85,
 "nav semantic، flex header، sticky، focus states — Flex کامل در 07.",
 "[opacity](./12-شفافیت-opacity.md) · [Flexbox](../../../07-CSS-Flexbox/index.html)",
 [("header شلوغ",12),("nav + flex",30),("sticky/active",20),("a11y",18),("تمرین",15)],
 """«سایت five page دارد — header باید logo، لینک‌ها، و CTA داشته باشد. **`display:flex`** را برای navbar استفاده می‌کنیم؛ **درس کامل Flex در [`07-CSS-Flexbox`](../../../07-CSS-Flexbox/تدریس/README.md)**.»""",
 ("navbar",[
  "«`<nav>` landmark + list یا links. `display:flex; justify-content:space-between; align-items:center;`»",
  "«`position:sticky; top:0` header. hit area ~44px. `:focus-visible` روی links.»",
  """```css
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
}
.nav-list { display: flex; gap: 1.25rem; list-style: none; margin: 0; padding: 0; }
.nav-list a { padding: 0.35rem 0.5rem; }
.nav-list a:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; }
```""",
  "**در مرورگر:** RTL space-between؛ جزوه [`13-navbar.html`](../pages/13-navbar.html) و quiz project-02.",
  "### انتقال","«dropdown زیرمنو.»",
 ]),
 "header sticky + nav flex + active class روی یک link.",
 [("logo و menu در RTL؟","space-between."),
  ("چرا nav نه div؟","landmark a11y.")],
 ["1. navbar سه لینک.", "2. sticky scroll.", "3. تکمیل Flexbox module 07."],
 "→ [`14-dropdowns.html`](../pages/14-dropdowns.html) · [`14-منوی-کشویی.md`](./14-منوی-کشویی.md)"),

("14-منوی-کشویی.md","۱۴","منوی کشویی (Dropdowns)","14-dropdowns.html",85,
 "relative+absolute، :focus-within، z-index، overflow trap.",
 "[navbar](./13-نوار-منو.md) · [z-index](./04-ترتیب-لایه‌ها.md)",
 [("submenu بریده",12),("position dropdown",28),("keyboard",22),("mobile hint",13),("تمرین",10)],
 """«منوی «خدمات» زیرmenu دارد — با hover باز می‌شود ولی با Tab نه، و روی موبایل بریده می‌شود.»""",
 ("dropdown",[
  "«parent `position:relative`; menu `absolute; top:100%`. نمایش: `:hover` + **`:focus-within`**. z-index بالا.»",
  "«ancestor `overflow:hidden` menu را clip می‌کند — DevTools trace.»",
  """```css
.dropdown { position: relative; }
.dropdown-menu {
  position: absolute;
  inset-inline-start: 0;
  top: 100%;
  min-width: 12rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  display: none;
  z-index: 50;
}
.dropdown:hover .dropdown-menu,
.dropdown:focus-within .dropdown-menu { display: block; }
```""",
  "**در مرورگر:** Tab داخل dropdown؛ narrow width.",
  "### انتقال","«selector `[type=email]` — attribute.»",
 ]),
 "یک dropdown در navbar با focus-within.",
 [("فقط hover؟","keyboard excluded."),
  ("display none a11y؟","برای simple OK — advanced با aria later.")],
 ["1. dropdown سه item.", "2. fix overflow clip.", "3. quiz project-02."],
 "→ [`15-attr-selectors.html`](../pages/15-attr-selectors.html) · [`15-انتخابگر-ویژگی.md`](./15-انتخابگر-ویژگی.md)"),

("15-انتخابگر-ویژگی.md","۱۵","انتخابگرهای ویژگی (Attribute Selectors)","15-attr-selectors.html",70,
 "[type=], [href^=], [data-*] برای forms و state.",
 "[pseudo-classes](./10-شبه-کلاس‌ها.md)",
 [("email LTR",12),("attribute syntax",28),("data-theme",15),("تمرین",15)],
 """«فیلد email در فرم RTL باید چپ‌به‌راست تایپ شود — **`input[type=email]`** بدون class اضافی.»""",
 ("attributes",[
  "«`[type=\"email\"]`, `[href^=\"https\"]`, `[class*=\"btn\"]`, `[data-state=\"open\"]`. specificity مثل class.»",
  """```css
input[type="email"] { direction: ltr; text-align: left; }
a[href^="mailto:"]::after { content: " ✉"; font-size: 0.85em; }
[data-theme="dark"] { color-scheme: dark; }
```""",
  "### انتقال","«استایل کامل فرم.»",
 ]),
 "فرم با email/url attribute styles.",
 [("[required] vs .required؟","attribute if HTML has required."),
  ("^= vs *=؟","prefix vs substring.")],
 ["1. type selectors.", "2. data-state hook.", "3. href external icon optional."],
 "→ [`16-forms.html`](../pages/16-forms.html) · [`16-فرم‌ها.md`](./16-فرم‌ها.md)"),

("16-فرم‌ها.md","۱۶","فرم‌ها (Forms CSS)","16-forms.html",90,
 "width 100% + border-box، label، focus-visible، :invalid.",
 "[HTML forms](../../../01-HTML-مقدماتی/pages/12-forms.html)",
 [("input از box بیرون",15),("field layout",25),("states",25),("Flex/Grid next",10),("تمرین",15)],
 """«فرم signup: inputها از container زد بیرون — **`box-sizing`** و **`width:100%`**. بعد از امروز **Flexbox و Grid** در ماژول‌های [`07`](../../../07-CSS-Flexbox/index.html) و [`08`](../../../08-CSS-Grid/index.html).»""",
 ("forms",[
  "«label block + gap. input/textarea/select full width. `:focus-visible`, `:invalid`, `:disabled`.»",
  """```css
*, *::before, *::after { box-sizing: border-box; }
.form-field { display: flex; flex-direction: column; gap: 0.35rem; margin-block-end: 1rem; }
input, textarea, select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.375rem;
}
input:focus-visible { outline: 2px solid #6366f1; border-color: #6366f1; }
```""",
  "**در مرورگر:** quiz project-05-styled-signup-form.",
  "### انتقال","«layout کل سایت — بعد از Flex/Grid.»",
 ]),
 "signup form سه فیلد styled.",
 [("box-sizing چرا؟","padding+border+width100%."),
  ("placeholder=label؟","نه — label واقعی.")],
 ["1. styled form.", "2. invalid email.", "3. fieldset legend optional."],
 "→ **Flex/Grid:** [`07-CSS-Flexbox`](../../../07-CSS-Flexbox/تدریس/README.md) · [`08-CSS-Grid`](../../../08-CSS-Grid/تدریس/README.md) · سپس [`20-layout.html`](../pages/20-layout.html)",),

]

# Fix optional flag handling - BULK item 17 has True in wrong position
# Rebuild BULK entries with optional parameter at end

def add_bulk(entries):
    for e in entries:
        opt = e[-1] if e[-1] is True else False
        if opt:
            e = e[:-1]
        fn,num,title,page,mins,goal,prereq,sched,open_,sec,proj,cq,ex,nxt = e
        add_m03(fn,num,title,page,mins,goal,prereq,sched,open_,[(sec[0],sec[1])],proj,cq,ex,nxt,opt)

add_bulk(BULK)

# Remaining optional + main path lessons 18-25
BULK2 = [
("18-واحدها-تکمیلی.md","۱۸","واحدهای CSS (Units)","18-units.html",65,
 "vh/vw، em/rem تلفیقی، % — **اختیاری**؛ مکمل درس ۱۱ مقدماتی.",
 "[11-عرض-ارتفاع](../../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md)",
 [("hero 100vh موبایل",12),("rem/em/vh",28),("تمرین",15)],
 """«**اختیاری:** `100vh` روی موبایل گاهی نوار آدرس را حس نمی‌کند — **`dvh`** و rem برای فاصله one more نگاه.»""",
 ("units",[
  "«px ثابت؛ rem از root؛ em از font خود element (nested رشد). % از parent. vh/vw از viewport.»",
  """```css
html { font-size: 100%; }
.card { padding: 1rem; max-width: 40rem; margin-inline: auto; }
.title { font-size: 1.5rem; }
```""",
  "**در مرورگر:** بزرگ کردن font browser — rem scale.",
 ]),
 "card با rem spacing.",
 [("1rem؟","معمولاً 16px default root."),
  ("vh مشکل موبایل؟","browser chrome.")],
 ["1. rem card.", "2. em button padding.", "3. compare vh vs dvh mention."],
 "→ [`19-math-functions.html`](../pages/19-math-functions.html) · [`19-توابع-ریاضی.md`](./19-توابع-ریاضی.md)",
 True),

("19-توابع-ریاضی.md","۱۹","توابع ریاضی CSS (Math Functions)","19-math-functions.html",65,
 "clamp/min/max/calc — **اختیاری**.",
 "[units](./18-واحدها-تکمیلی.md)",
 [("fluid type",15),("clamp",25),("calc spacing",15),("تمرین",10)],
 """«**اختیاری:** تیتر hero از موبایل تا دسکتاپ smooth بزرگ شود — **`clamp()`**.»""",
 ("math",[
  "«`clamp(min, preferred, max)` — `min()`, `max()`, `calc()` — فاصله در calc لازم.»",
  """```css
.hero-title { font-size: clamp(1.25rem, 2.5vw + 0.5rem, 2.25rem); }
.sidebar { width: min(16rem, 100%); }
.gap { margin-inline: calc(1rem + 2vw); }
```""",
 ]),
 "hero title fluid clamp.",
 [("calc(100%-1rem)?","invalid — spaces around -."),
  ("clamp middle?","preferred if between min max.")],
 ["1. clamp title.", "2. min sidebar width.", "3. resize viewport."],
 "→ [`20-layout.html`](../pages/20-layout.html) · [`20-چیدمان-سایت.md`](./20-چیدمان-سایت.md)", True),

("20-چیدمان-سایت.md","۲۰","چیدمان سایت (Website Layout)","20-layout.html",95,
 "header/main/aside/footer با Grid — بعد از Flex/Grid modules.",
 "[Flexbox](../../../07-CSS-Flexbox/index.html) · [Grid](../../../08-CSS-Grid/index.html) · [forms](./16-فرم‌ها.md)",
 [("صفحه div soup",12),("semantic shell",18),("grid areas",35),("container",15),("تمرین",15)],
 """«صفحه blog: header، sidebar، main، footer — بدون table layout. **Grid** از [`08-CSS-Grid`](../../../08-CSS-Grid/تدریس/README.md) را اینجا **اعمال** می‌کنیم.»""",
 ("layout",[
  "«landmarks: header, nav, main, aside, footer. container max-width. **grid-template-areas** برای sidebar+main.»",
  """```css
.page {
  display: grid;
  grid-template-areas:
    "head head"
    "side main"
    "foot foot";
  grid-template-columns: minmax(0, 16rem) minmax(0, 1fr);
  gap: 1rem;
  max-width: 72rem;
  margin-inline: auto;
  padding: 1rem;
}
.page-header { grid-area: head; }
.page-sidebar { grid-area: side; }
.page-main { grid-area: main; }
.page-footer { grid-area: foot; }
```""",
  "**در مرورگر:** project-06-fix-the-layout؛ minmax(0,1fr) against overflow.",
  "### اشتباهات","- sidebar fixed px on 320px.", "- div soup without main.",
  "### انتقال","«یک breakpoint — media queries.»",
 ]),
 "shell grid با semantic tags.",
 [("main first DOM sidebar visually?","grid areas order."),
  ("flex vs grid footer columns?","grid for 2D.")],
 ["1. three-area layout.", "2. sticky aside optional.", "3. quiz project-06."],
 "→ [`21-media-queries.html`](../pages/21-media-queries.html) · [`21-media-queries.md`](./21-media-queries.md)",),

("21-media-queries.md","۲۱","Media Queries و واکنش‌گرایی","21-media-queries.html",95,
 "min-width mobile-first، layout stack، prefers-reduced-motion.",
 "[layout](./20-چیدمان-سایت.md)",
 [("sidebar روی موبایل",12),("@media",30),("mobile-first",25),("motion pref",13),("تمرین",15)],
 """«layout دو ستونه روی ۳۲۰px افقی scroll می‌دهد — **`@media`** و **mobile-first** با `min-width`.»""",
 ("media queries",[
  "«`@media (min-width: 48rem) { ... }` — پایه برای موبایل، enhancement برای wide.»",
  "«stack: grid یک ستون؛ nav hamburger (اشاره). `prefers-reduced-motion: reduce`.»",
  """```css
.page {
  grid-template-areas:
    "head"
    "main"
    "side"
    "foot";
}
@media (min-width: 48rem) {
  .page {
    grid-template-areas:
      "head head"
      "side main"
      "foot foot";
    grid-template-columns: 16rem minmax(0, 1fr);
  }
}
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```""",
  "**در مرورگر:** DevTools device mode 320 vs 1024.",
  "### سؤال","- max-width 768px → applies when width ≤768.",
 ]),
 "layout واکنش‌گرا + reduced-motion block.",
 [("max-width vs min-width mobile-first?","base mobile, min-width adds columns."),
  ("48rem vs 768px?","rem respects user font.")],
 ["1. one breakpoint stack.", "2. test 320 no horizontal scroll.", "3. optional hamburger sketch."],
 "→ [`22-transitions.html`](../pages/22-transitions.html) · [`22-transition-پایه.md`](./22-transition-پایه.md) (اختیاری)",),

("22-transition-پایه.md","۲۲","Transition پایه","22-transitions.html",55,
 "property duration easing — **اختیاری**.",
 "[pseudo-classes](./10-شبه-کلاس‌ها.md)",
 [("hover ناگهانی",12),("transition shorthand",28),("تمرین",15)],
 """«**اختیاری:** دکمه hover ناگهانی است — **`transition`** نرمش می‌کند.»""",
 ("transition",[
  "«`transition: property duration easing`; چند property comma-separated.»",
  """```css
.btn {
  background: #6366f1;
  color: #fff;
  transition: background-color 0.2s ease, transform 0.15s ease;
}
.btn:hover { background: #4f46e5; transform: translateY(-1px); }
```""",
 ]),
 "button با transition.",
 [("transition all?","perf — list properties."),
  ("width transition?","layout reflow — cautious.")],
 ["1. color transition.", "2. transform hover.", "3. reduced-motion off."],
 "→ [`23-transitions-ui.html`](../pages/23-transitions-ui.html) · [`23-transition-UI.md`](./23-transition-UI.md)", True),

("23-transition-UI.md","۲۳","Transition در UI","23-transitions-ui.html",60,
 "menu، accordion hints — **اختیاری**.",
 "[22-transition](./22-transition-پایه.md)",
 [("dropdown fade",15),("UI patterns",30),("تمرین",15)],
 """«**اختیاری:** باز شدن منو با opacity/transform نه فقط display toggle.»""",
 ("transitions UI",[
  "«opacity+visibility+transition vs display; `transform` برای slide subtle.»",
  """```css
.panel {
  opacity: 0;
  transform: translateY(-0.25rem);
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
}
.panel.is-open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
```""",
 ]),
 "panel toggle class is-open.",
 [("display none transition?","can't interpolate — use opacity/max-height tricks."),
  ("motion accessibility?","prefers-reduced-motion.")],
 ["1. fade panel.", "2. respect reduced-motion.", "3. compare display vs opacity."],
 "→ [`24-animations.html`](../pages/24-animations.html) · [`24-animation.md`](./24-animation.md)", True),

("24-animation.md","۲۴","Animation و keyframes","24-animations.html",65,
 "@keyframes — **اختیاری**.",
 "[23-transition-UI](./23-transition-UI.md)",
 [("spinner",15),("keyframes",30),("تمرین",20)],
 """«**اختیاری:** loading spinner با **`@keyframes`** — decor only، reduced-motion respect.»""",
 ("animation",[
  "«`@keyframes name { from/to or % }` + `animation: name duration easing infinite`.»",
  """```css
@keyframes spin { to { transform: rotate(360deg); } }
.spinner {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #e2e8f0;
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .spinner { animation: none; border-top-color: #6366f1; }
}
```""",
 ]),
 "spinner با reduced-motion.",
 [("infinite everywhere?","distracting."),
  ("animation vs transition?","keyframes multi-step auto.")],
 ["1. spin keyframes.", "2. pulse once.", "3. disable for reduced-motion."],
 "→ [`25-practice.html`](../pages/25-practice.html) · [`25-جمع‌بندی-و-تمرین.md`](./25-جمع‌بندی-و-تمرین.md)", True),

("25-جمع‌بندی-و-تمرین.md","۲۵","تمرین جمع‌بندی","25-practice.html",120,
 "مرور مسیر + fix layout bug + checklist.",
 "کل مسیر ۰۱–۲۱",
 [("checklist",20),("live bugfix",40),("quiz pointers",30),("تحویل",30)],
 """«جلسه جمع‌بندی: display → position → selectors → navbar → forms → **Flex/Grid modules** → layout → media. checklist خودتان را tick کنید.»""",
 ("practice",[
  "«با [`project-06-fix-the-layout`](../../quizzes/2-combined-projects/project-06-fix-the-layout/starter/index.html) live bugfix.»",
  "«معیار: focus-visible؛ no horizontal scroll 320px؛ dropdown focus-within.»",
  "**در مرورگر:** [`25-practice.html`](../pages/25-practice.html) · [`quizzes`](../../quizzes/README.md)",
 ]),
 "تحویل: navbar + form + responsive shell.",
 [("سه skill ضعیف؟","student-specific."),
  ("Flex قبل layout?","recommended path.")],
 ["1. topic exercises 01-20.", "2. combined projects.", "3. deliverable page spec from scenario."],
 "→ [`04-CSS-آبشاری`](../../../04-CSS-آبشاری/index.html) · [`05-CSS-تصاویر`](../../../05-CSS-تصاویر/index.html)",),
]

add_bulk(BULK2)

# Fix lesson 17 - was malformed; add manually
add_m03(
    "17-شمارنده‌ها.md", "۱۷", "شمارنده‌ها (Counters)", "17-counters.html", 60,
    "counter-reset/increment با ::before — **اختیاری** برای outline/FAQ.",
    "[pseudo-elements](./11-شبه-عنصرها.md)",
    [("مسئله شماره manual", 15), ("counters", 25), ("تمرین", 10)],
    "«**اختیاری:** مراحل دستور پخت را بدون نوشتن عدد در HTML شماره‌گذاری می‌کنیم.»",
    [("CSS counters", [
        "«`counter-reset` روی `.steps`؛ `counter-increment` روی `li`؛ نمایش در `::before`.»",
        """```css
.steps { counter-reset: step; list-style: none; padding: 0; }
.steps li { counter-increment: step; }
.steps li::before { content: counter(step) ". "; font-weight: bold; color: #6366f1; }
```""",
        "**در مرورگر:** [`17-counters.html`](../pages/17-counters.html)",
    ])],
    "steps list شماره‌دار.",
    [("فراموش increment؟", "عدد ثابت می‌ماند.")],
    ["1. basic counter.", "2. nested optional from handbook."],
    "→ [`18-units.html`](../pages/18-units.html) · [`18-واحدها-تکمیلی.md`](./18-واحدها-تکمیلی.md)",
    True,
)

# Remove duplicate 17 from BULK if added - BULK had broken entry; add_bulk may have failed on 17
# Module 04
m04 = []

def add_m04(fn, num, title, page, mins, goal, prereq, sched, open_, sections, proj, cq, ex, nxt):
    m04.append((fn, doc(num, title, page, MOD4, prereq, mins, goal, False, sched, open_, sections, proj, cq, ex, nxt)))

add_m04(
    "01-ترتیب-قوانین.md", "۱", "ترتیب قوانین در یک فایل (Order)", "01-order.html", 70,
    "وقتی specificity برابر است، قانون دیرتر در فایل برنده است — نه «همیشه آخرین چیز من».",
    "[انتخابگرها](../../../02-CSS-مقدماتی/تدریس/دروس/03-انتخابگرها.md)",
    [("دو رنگ روی p", 15), ("order در یک فایل", 25), ("DevTools strikethrough", 20), ("تمرین", 10)],
    """«دو بار `p { color: ... }` نوشتیم — کدام رنگ می‌ماند؟ اگر روی `<p class="intro">` کلاس هم باشد چه؟ **Cascade** از همینجا شروع می‌شود.»""",
    [("Live cascade", [
        "«اگر انتخابگر و specificity یکی باشند، **قانون پایین‌تر** در همان stylesheet برنده است.»",
        """```html
<style>
  p { color: #64748b; }
  p { color: #6366f1; }
  .intro { color: #0f172a; }
</style>
<p>بدون کلاس — بنفش (دومین p).</p>
<p class="intro">intro — خاکستری تیره (کلاس).</p>
```""",
        "**در مرورگر:** Styles tab خط‌خورده؛ [`01-order.html`](../pages/01-order.html).",
        "### سؤال", "- دو `.btn` پشت سر هم — دومی.",
        "### اشتباهات", "- فکر کردن ترتیب همیشه id را می‌شکند.",
    ])],
    "سه rule رقیب — پیش‌بینی قبل از DevTools.",
    [("پایین فایل = همیشه برنده؟", "فقط اگر specificity برابر."),
     ("class vs دومین p rule?", "class برنده.")],
    ["1. predict winner.", "2. reorder rules live.", "3. quiz ex-1 order."],
    "→ [`02-specificity.html`](../pages/02-specificity.html) · [`02-قدرت-انتخابگر.md`](./02-قدرت-انتخابگر.md)",
)

M04_REST = [
("02-قدرت-انتخابگر.md","۲","قدرت انتخابگر (Specificity)","02-specificity.html",80,
 "inline > id > class > element؛ محاسبه در DevTools.",
 "[order](./01-ترتیب-قوانین.md)",
 [("link color wrong",15),("specificity weights",30),("DevTools tooltip",20),("تمرین",15)],
 """«لینک داخل `#main .nav` سبز شد ولی global `a` آبی بود — **specificity** برنده را مشخص می‌کند.»""",
 [("specificity",[ 
  "«inline style > #id > .class/[attr]/:pseudo-class > element/::pseudo. `:not()` inner counts. `*` zero.»",
  """```css
a { color: #2563eb; }
.nav a { color: #0f172a; }
#main .nav a { color: #6366f1; }
```""",
  "**در مرورگر:** specificity tooltip؛ project-03-specificity-rescue.",
 ])],
 "جدول سه selector — student calculates winner.",
 [("div p vs .text?","class wins."),
  ("chain ids good?","maintainability no.")],
 ["1. specificity calc.", "2. simplify selector.", "3. quiz 02."],
 "→ [`03-stylesheets.html`](../pages/03-stylesheets.html) · [`03-چند-stylesheet.md`](./03-چند-stylesheet.md)"),

("03-چند-stylesheet.md","۳","چند فایل CSS و ترتیب لینک","03-stylesheets.html",75,
 "چند `<link>` — آخرین link با specificity برابر.",
 "[specificity](./02-قدرت-انتخابگر.md)",
 [("base vs theme",15),("link order",30),("@import caution",15),("تمرین",15)],
 """«`base.css` و `theme.css` — کدام رنگ برنده؟ **ترتیب link** مثل ترتیب در یک فایل.»""",
 [("stylesheets",[
  "«هر link لایه cascade. آخرین فایل برنده when equal. `@import` parse order — prefer multiple links.»",
  """```html
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/theme.css">
```""",
  "**Live:** swap link order in DevTools.",
 ])],
 "base+theme two files.",
 [("media on link?","loading not cascade split."),
  ("first file wins?","no — last equal wins.")],
 ["1. two file override.", "2. swap order.", "3. quiz 03."],
 "→ [`04-inheritance.html`](../pages/04-inheritance.html) · [`04-وراثت.md`](./04-وراثت.md)"),

("04-وراثت.md","۴","وراثت از والد به فرزند (Inheritance)","04-inheritance.html",75,
 "color/font inherit؛ margin/padding not؛ inherit/initial/unset.",
 "[order](./01-ترتیب-قوانین.md)",
 [("child color surprise",15),("inherited props",25),("inherit keyword",20),("تمرین",15)],
 """«روی `.article` color گذاشتیم — `p` inherit کرد ولی `margin` نه. **Inheritance** جدا از cascade است.»""",
 [("inheritance",[
  "«inherits: color, font-family, line-height… not: margin, padding, border, background.»",
  """```css
.article { color: #334155; font-family: "Vazirmatn", sans-serif; }
.article a { color: inherit; }
```""",
  "**Computed:** inherited from parent.",
 ])],
 "article with link inherit vs accent.",
 [("padding body → p?","no inherit."),
  ("unset?","inherit or initial per property.")],
 ["1. inherit color.", "2. initial on list.", "3. quiz 04."],
 "→ [`05-important.html`](../pages/05-important.html) · [`05-important.md`](./05-important.md)"),

("05-important.md","۵","استفاده از !important","05-important.html",70,
 "!important layer؛ last resort.",
 "[inheritance](./04-وراثت.md)",
 [("override fail",15),("important rules",25),("refactor",15),("تمرین",15)],
 """«`.card .btn` سبز نشد — `.btn { background !important }` از framework. **`!important`** چوب‌دستی است.»""",
 [("important",[
  "«beats normal author rules; two !important → specificity+order again.»",
  """```css
.btn { background: #6366f1 !important; }
.card .btn { background: #22c55e; }
```""",
  "**second loses** without !important.",
 ])],
 "demonstrate important then remove refactor.",
 [("inline vs important class?","important can beat inline in author layer — spec detail: inline usually strong; handbook demo class !important."),
  ("utility frameworks?","many !important.")],
 ["1. predict important.", "2. cleanup project-05.", "3. quiz 05."],
 "→ [`06-tie-break.html`](../pages/06-tie-break.html) · [`06-تساوی-کلاس‌ها.md`](./06-تساوی-کلاس‌ها.md)"),

("06-تساوی-کلاس‌ها.md","۶","چند کلاس هم‌قدرت (Tie-break)","06-tie-break.html",65,
 "equal specificity — source order؛ HTML class order irrelevant.",
 "[important](./05-important.md)",
 [("two classes conflict",15),("tie-break",25),("theme class pattern",15),("تمرین",10)],
 """«`<div class="box highlight">` — هر دو یک وزن؛ **ترتیب در CSS** برنده.»""",
 [("tie-break",[
  """```css
.box { background: #e2e8f0; }
.highlight { background: #fef08a; }
```""",
  "«swap rule order — color flips. `class=\"a b\"` vs `class=\"b a\"` no difference.»",
  "«تم: one `.theme-dark` on html better than fighting classes.»",
 ])],
 "two classes tie — reorder CSS live.",
 [("add id to win tie?","bad habit."),
  ("HTML class order?","irrelevant.")],
 ["1. tie demo.", "2. theme-dark pattern.", "3. quiz 06."],
 "→ [`07-variables.html`](../pages/07-variables.html) · [`07-متغیرهای-CSS.md`](./07-متغیرهای-CSS.md)"),

("07-متغیرهای-CSS.md","۷","متغیرهای CSS (Custom Properties)","07-variables.html",85,
 ":root tokens؛ var fallback؛ theme toggle.",
 "[inheritance](./04-وراثت.md)",
 [("50 color overrides",15),("custom properties",30),("theme toggle",25),("project",15)],
 """«تم تاریک: پنجاه بار color override یا **یک `--color-text`** روی `:root`؟»""",
 [("variables",[
  "«`--name: value;` consume `var(--name, fallback)`. inherit — toggle class on html.»",
  """```css
:root { --color-text: #0f172a; --color-accent: #6366f1; }
body { color: var(--color-text); }
a { color: var(--color-accent); }
.theme-dark {
  --color-text: #f1f5f9;
  --color-accent: #818cf8;
}
```""",
  "**project-02-light-dark-theme** — toggle `.theme-dark` on html.",
 ])],
 "light/dark with variables no !important war.",
 [("Sass vs CSS vars?","compile-time vs runtime."),
  ("var without fallback?","invalid if unset.")],
 ["1. :root tokens.", "2. theme toggle.", "3. project-02."],
 "→ [`05-CSS-تصاویر`](../../../05-CSS-تصاویر/index.html) · [`05-CSS-تصاویر/تدریس/README.md`](../../../05-CSS-تصاویر/تدریس/README.md)",
),
]

def _sec_pair(sec):
    if isinstance(sec, list) and len(sec) == 1 and isinstance(sec[0], tuple):
        return sec[0][0], sec[0][1]
    return sec[0], sec[1]

for row in M04_REST:
    fn,num,title,page,mins,goal,prereq,sched,open_,sec,proj,cq,ex,nxt = row
    st, sb = _sec_pair(sec)
    add_m04(fn,num,title,page,mins,goal,prereq,sched,open_,[(st, sb)],proj,cq,ex,nxt)

# Module 05
m05 = []

def add_m05(fn, num, title, page, mins, goal, prereq, sched, open_, sections, proj, cq, ex, nxt):
    m05.append((fn, doc(num, title, page, MOD5, prereq, mins, goal, False, sched, open_, sections, proj, cq, ex, nxt)))

add_m05(
    "01-img-یا-پس‌زمینه.md", "۱", "`<img>` یا تصویر پس‌زمینه؟", "01-img-vs-bg.html", 75,
    "تفاوت محتوا (img+alt) و دکور (background) را در hero و محصول تشخیص دهد.",
    "[backgrounds](../../../02-CSS-مقدماتی/pages/07-backgrounds.html)",
    [("لوگو vs hero pattern", 15), ("img vs bg", 25), ("CLS hint", 15), ("تمرین", 20)],
    """«عکس غذا باید SEO و screen reader ببیند — hero تزئینی پشت متن. **`img` vs `background-image`** — امروز قانون تصمیم.»""",
    [("انتخاب روش", [
        "«محتوا: `<img src alt width height>`. دکور: `background-image` روی box با min-height.»",
        """```html
<img src="images/dish.jpg" alt="پاستا با سس گوجه" width="400" height="300">
```
```css
.hero {
  min-height: 20rem;
  background: url("../images/banner.jpg") center / cover no-repeat;
}
```""",
        "**در مرورگر:** [`01-img-vs-bg.html`](../pages/01-img-vs-bg.html)",
    ])],
    "صفحه mini: یک img محصول + hero bg.",
    [("لوگو header?", "usually img+alt brand."),
     ("img بدون dimensions?", "CLS risk.")],
    ["1. classify 5 images.", "2. hero bg + product img.", "3. quiz 01."],
    "→ [`02-paths.html`](../pages/02-paths.html) · [`02-مسیر-تصویر.md`](./02-مسیر-تصویر.md)",
)

M05_REST = [
("02-مسیر-تصویر.md","۲","مسیر فایل تصویر","02-paths.html",70,
 "relative to HTML (src) vs CSS (url); ../ diagram.",
 "[01-img](./01-img-یا-پس‌زمینه.md)",
 [("broken image 404",15),("paths",30),("case sensitivity",10),("تمرین",15)],
 """«تصویر در DevTools Network قرمز — **`url()` نسبت به CSS**، **`src` نسبت به HTML**. یک سطح `../` فراموش شده.»""",
 [("paths",[
  "«project: index.html, css/style.css, images/photo.jpg → css uses `../images/photo.jpg`, html `images/photo.jpg`.»",
  """```css
.card { background-image: url("../images/photo.jpg"); }
```""",
  "**diagram** on board; Linux case-sensitive.",
 ])],
 "fix broken path exercise.",
 [("two ../ when?", "css deeper nested."),
  ("https url?", "always works.")],
 ["1. path quiz.", "2. fix starter.", "3. quiz 02."],
 "→ [`03-hero.html`](../pages/03-hero.html) · [`03-هیرو.md`](./03-هیرو.md)"),

("03-هیرو.md","۳","هیرو (Hero) با متن خوانا","03-hero.html",85,
 "cover + overlay gradient + contrast.",
 "[paths](./02-مسیر-تصویر.md)",
 [("unreadable hero text",15),("overlay",30),("min-height",15),("تمرین",25)],
 """«متن سفید روی عکس برفی — unreadable. **overlay** + `background-size: cover`.»""",
 [("hero",[
  """```css
.hero {
  min-height: 28rem;
  display: grid;
  place-items: center;
  text-align: center;
  color: #fff;
  background:
    linear-gradient(rgb(15 23 42 / 0.55), rgb(15 23 42 / 0.55)),
    url("../images/hero.jpg") center / cover no-repeat;
}
```""",
  "**contrast** WCAG mention.",
 ])],
 "hero with gradient overlay.",
 [("no overlay?", "text illegible on busy photo."),
  ("min-height?", "avoid thin strip.")],
 ["1. hero block.", "2. contrast check.", "3. project-01-hero."],
 "→ [`04-avatar.html`](../pages/04-avatar.html) · [`04-آواتار.md`](./04-آواتار.md)"),

("04-آواتار.md","۴","عکس پروفایل دایره‌ای","04-avatar.html",75,
 "square box + border-radius 50% + object-fit cover.",
 "[object-fit next](./05-object-fit.md)",
 [("oval avatar",12),("avatar css",28),("alt",10),("تمرین",25)],
 """«آواتار کش آمده — **`width=height`** + **`border-radius:50%`** + **`object-fit:cover`**.»""",
 [("avatar",[
  """```css
.avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e2e8f0;
}
```""",
  "«alt = person name» — not bg-image.",
 ])],
 "team row avatars project-03.",
 [("only border-radius?", "stretch without cover."),
  ("bg for profile?", "a11y fail.")],
 ["1. circle avatar.", "2. ring shadow.", "3. quiz 04."],
 "→ [`05-object-fit.html`](../pages/05-object-fit.html) · [`05-object-fit.md`](./05-object-fit.md)"),

("05-object-fit.md","۵","object-fit برای کارت و گالری","05-object-fit.html",80,
 "cover contain fill; object-position.",
 "[avatar](./04-آواتار.md)",
 [("uneven thumbnails",15),("object-fit values",30),("aspect-ratio",20),("تمرین",15)],
 """«گالری thumbnail بعضی کشیده — **`object-fit: cover`** در جعبه **`aspect-ratio`**.»""",
 [("object-fit",[
  """```css
.card__media {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: center;
}
```""",
  "**side by side** cover vs contain in handbook.",
 ])],
 "4/3 card media cover.",
 [("thumbnail gallery?", "usually cover uniform."),
  ("vs background-size?", "img uses object-fit.")],
 ["1. cover vs contain demo.", "2. object-position face.", "3. quiz 05."],
 "→ [`06-cards.html`](../pages/06-cards.html) · [`06-کارت-محصول.md`](./06-کارت-محصول.md)"),

("06-کارت-محصول.md","۶","کارت محصول واقعی","06-cards.html",90,
 "article structure img title price; overflow on media.",
 "[object-fit](./05-object-fit.md)",
 [("product card",15),("structure",30),("overflow radius",20),("تمرین",25)],
 """«کارت فروشگاه: تصویر یک نسبت، title، price — **`aspect-ratio`** + alt product name.»""",
 [("card",[
  """```html
<article class="product-card">
  <img class="product-card__img" src="images/tea.jpg" alt="چای سبز">
  <h2 class="product-card__title">چای سبز</h2>
  <p class="product-card__price">۱۲۰٬۰۰۰ تومان</p>
</article>
```""",
  """```css
.product-card__img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0 0;
}
```""",
 ])],
 "three product cards grid (grid module ref).",
 [("aspect-ratio vs fixed height?", "responsive."),
  ("price on image?", "contrast needed.")],
 ["1. one card.", "2. three card grid.", "3. project-04-food."],
 "→ [`07-responsive.html`](../pages/07-responsive.html) · [`07-تصویر-واکنش‌گرا.md`](./07-تصویر-واکنش‌گرا.md)"),

("07-تصویر-واکنش‌گرا.md","۷","تصویر واکنش‌گرا","07-responsive.html",75,
 "max-width 100%; height auto; container width.",
 "[media queries](../../../03-CSS-میانی/pages/21-media-queries.html)",
 [("horizontal scroll",15),("responsive img",25),("srcset mention",10),("تمرین",25)],
 """«img 400px در container 320 — overflow. **`max-width:100%; height:auto; display:block`**.»""",
 [("responsive",[
  """```css
img.responsive {
  max-width: 100%;
  height: auto;
  display: block;
}
```""",
  "«srcset/sizes HTML — brief mention for bandwidth.»",
 ])],
 "responsive article images.",
 [("width 100% no max?", "can overflow if intrinsic larger without max-width."),
  ("hero fixed px mobile?", "bad.")],
 ["1. fix overflow.", "2. narrow viewport.", "3. quiz 07."],
 "→ [`08-size-position.html`](../pages/08-size-position.html) · [`08-cover-contain-و-فوکوس.md`](./08-cover-contain-و-فوکوس.md)"),

("08-cover-contain-و-فوکوس.md","۸","cover، contain و فوکوس چهره","08-size-position.html",80,
 "object-position; background-position for banners.",
 "[object-fit](./05-object-fit.md)",
 [("head cropped",15),("position",30),("background parallel",15),("تمرین",20)],
 """«سر در آواتار بریده — **`object-position: 50% 20%`**.»""",
 [("position",[
  """```css
.portrait { object-fit: cover; object-position: 50% 20%; }
.banner { background-size: cover; background-position: center 30%; }
```""",
 ])],
 "portrait crop fix.",
 [("head cut?", "object-position."),
  ("contain empty bars?", "expected in grid sometimes.")],
 ["1. adjust position.", "2. banner bg.", "3. quiz 08."],
 "→ [`09-checklist.html`](../pages/09-checklist.html) · [`09-چک‌لیست.md`](./09-چک‌لیست.md)"),

("09-چک‌لیست.md","۹","چک‌لیست پروژه‌های واقعی","09-checklist.html",70,
 "alt, paths, CLS, contrast, mobile overflow audit.",
 "کل ماژول 05",
 [("audit mindset",15),("checklist walk",35),("project",20)],
 """«قبل از PR: **alt**، **404 paths**، **CLS**، **contrast hero**، **320px no scroll**.»""",
 [("checklist",[
  "«محتوا img+alt؛ دکور bg؛ aspect-ratio/width height؛ mobile overflow؛ perf/webp mention.»",
  "**Live audit** mini page Network+Lighthouse images.",
  "**quiz** 09-image-review.",
 ])],
 "restaurant mini page audit.",
 [("three PR checks?", "alt, overflow, contrast typical."),
  ("empty alt food?", "bad.")],
 ["1. fill checklist.", "2. quiz 09.", "3. project-05-restaurant."],
 "→ [`09-پروژه-منوی-رستوران`](../../../09-پروژه-منوی-رستوران/index.html) · [`06-آزمایشگاه-رنگ`](../../../06-آزمایشگاه-رنگ/index.html)",
),
]

for row in M05_REST:
    fn,num,title,page,mins,goal,prereq,sched,open_,sec,proj,cq,ex,nxt = row
    st, sb = _sec_pair(sec)
    add_m05(fn,num,title,page,mins,goal,prereq,sched,open_,[(st, sb)],proj,cq,ex,nxt)

# Fix duplicate lesson 17 in m03 - remove broken entry from BULK add
write_mod("03-CSS-میانی", MOD3, m03)
write_mod("04-CSS-آبشاری", MOD4, m04)
write_mod("05-CSS-تصاویر", MOD5, m05)
print("counts", len(m03), len(m04), len(m05))
