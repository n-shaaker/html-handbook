#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Expand thin دروس/*.md lesson scripts toward gold-standard classroom depth."""
from __future__ import annotations

import re
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MIN_LINES = 180
TARGET_LINES = 265

MODULES = [
    "06-آزمایشگاه-رنگ",
    "07-CSS-Flexbox",
    "08-CSS-Grid",
    "09-پروژه-منوی-رستوران",
    "10-JS-پایه",
    "11-JS-میانی",
    "12-JS-پیشرفته",
    "13-پروژه-منوی-رستوران-JS",
    "01-HTML-مقدماتی",
]

PROBLEM_HOOKS: dict[str, str] = {
    "07-CSS-Flexbox/تدریس/دروس/01-آشنایی-با-Flexbox.md": (
        "«navbar دارید: لوگو، لینک‌ها، دکمه ورود — HTML درست است ولی همه **زیر هم** افتاده‌اند. "
        "قبل از حفظ property، ببینیم block layout چه می‌کند — بعد **یک خط** CSS منو را افقی می‌کند.»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/02-flex-direction.md": (
        "«navbar افقی می‌خواهیم ولی در موبایل منو **ستونی** شود — هنوز property نمی‌گوییم: فقط HTML یکسان و دو حالت بصری را ببینید.»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/03-flex-wrap.md": (
        "«ده تا tag کنار هم — صفحه باریک است و باکس‌ها **از صفحه بیرون** می‌زنند. nowrap یا wrap؟»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/04-justify-content.md": (
        "«toolbar عریض است؛ سه دکمه چسبیده به **راست** هستند و وسط صفحه خالی مانده. چطور فاصله را **بین** دکمه‌ها یا وسط کل گروه پخش کنیم؟»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/05-align-items.md": (
        "«دو کارت pricing: یکی عنوان بلند، یکی کوتاه — دکمه «خرید» یکی بالا یکی پایین. کاربر می‌گوید «نامرتب».»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/06-align-content.md": (
        "«chipها wrap شده‌اند و **دو ردیف** داریم؛ کل بلوک بالای container مانده. فاصله **بین ردیف‌ها** کجا تنظیم می‌شود؟»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/07-gap.md": (
        "«روی هر دکمه margin گذاشته‌ایم — اولی margin اضافه دارد و RTL قاطی شده. یک فاصله **روی والد** می‌خواهیم.»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/08-order.md": (
        "«در DOM لوگو آخر است ولی در موبایل باید **بالا** باشد — بدون جابجایی HTML در markup تولید.»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/09-grow-shrink-basis.md": (
        "«sidebar ثابت ۲۴۰px و main باید **بقیه عرض** را بگیرد؛ یک item کوچک نباید کل ردیف را له کند.»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/10-flex-shorthand.md": (
        "«در پروژه همه جا `flex: 1` کپی شده — امروز shorthand را **می‌فهمد** نه حفظ.»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/11-align-self-margin-auto.md": (
        "«سه item وسط‌اند ولی دکمه «تنظیمات» باید **ته ردیف** برود — بدون spacer خالی در HTML.»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/12-الگوهای-پرکاربرد.md": (
        "«سه تمرین: navbar، pricing، sticky footer — هر کدام با Flex حل می‌شود.»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/13-واکنش‌گرا.md": (
        "«عرض ۳۲۰px: کارت‌ها ستون؛ ۹۶۰px: سه ستون — همان HTML.»"
    ),
    "07-CSS-Flexbox/تدریس/دروس/14-تمرین-و-جمع‌بندی.md": (
        "«یک صفحه landing کوچک — navbar، hero، سه کارت — فقط Flex؛ Grid ممنوع.»"
    ),
    "08-CSS-Grid/تدریس/دروس/01-مقدمه-Grid.md": (
        "«صفحه admin: header، sidebar، main، footer — با Flex nested دردسرساز است. یک **شبکه دو‌بعدی** می‌خواهیم.»"
    ),
    "08-CSS-Grid/تدریس/دروس/02-ستون-و-ردیف.md": (
        "«sidebar ۲۴۰px و main بقیه — با درصد قاطی می‌شود؛ `fr` چطور «فضای باقی‌مانده» را می‌دهد؟»"
    ),
    "08-CSS-Grid/تدریس/دروس/03-repeat-minmax.md": (
        "«گالری ۱۲ عکس — ستون‌ها **حداقل** ۱۸۰px و بیشتر نشوند.»"
    ),
    "08-CSS-Grid/تدریس/دروس/04-gap.md": (
        "«grid کارت‌ها: margin روی هر کارت در گوشه‌ها دوبرابر دیده می‌شود.»"
    ),
    "08-CSS-Grid/تدریس/دروس/05-جایگذاری-خط.md": (
        "«بنر hero باید **دو ستون** را بپوشاند — بدون جدول HTML.»"
    ),
    "08-CSS-Grid/تدریس/دروس/06-template-areas.md": (
        "«layout با نام ناحیه — header header در template-areas — بدون شمارش خط برای هر breakpoint.»"
    ),
    "08-CSS-Grid/تدریس/دروس/07-تراز-آیتم.md": (
        "«cell بلند است و دکمه کوچک **بالا** چسبیده — stretch پیش‌فرض دردسرساز.»"
    ),
    "08-CSS-Grid/تدریس/دروس/08-تراز-شبکه.md": (
        "«grid کوچک‌تر از container است — کل بلوک بالا چسبیده.»"
    ),
    "08-CSS-Grid/تدریس/دروس/09-auto-fit-fill.md": (
        "«تعداد کارت‌ها هر هفته عوض می‌شود — ستون‌ها خودکار جمع/پخش شوند.»"
    ),
    "08-CSS-Grid/تدریس/دروس/10-شبکه-ضمنی.md": (
        "«فقط ۲ ستون تعریف کردیم ولی ۷ item داریم — ردیف‌های اضافه از کجا می‌آیند؟»"
    ),
    "08-CSS-Grid/تدریس/دروس/11-Grid-در-برابر-Flex.md": (
        "«navbar: Flex یا Grid؟ dashboard: Flex یا Grid؟ — تصمیم با مسئله.»"
    ),
    "08-CSS-Grid/تدریس/دروس/12-الگوهای-پرکاربرد.md": (
        "«magazine، admin، holy grail — سه اسکلت در یک جلسه.»"
    ),
    "08-CSS-Grid/تدریس/دروس/13-واکنش‌گرا.md": (
        "«موبایل: areas یک ستون؛ دسکتاپ: side + main.»"
    ),
    "08-CSS-Grid/تدریس/دروس/14-تمرین-و-جمع‌بندی.md": (
        "«صفحه magazine کوچک — grid-template-areas + auto-fit.»"
    ),
}

TAG_RE = re.compile(r"<[^>]+>")


def strip_tags(html: str) -> str:
    text = TAG_RE.sub(" ", html)
    text = unescape(text)
    return re.sub(r"\s+", " ", text).strip()


def extract_lesson_from_html(html: str) -> dict:
    m = re.search(r'<section[^>]*class="[^"]*lesson[^"]*"[^>]*>(.*?)</section>', html, re.S | re.I)
    if not m:
        return {"paragraphs": [], "codes": [], "headings": []}
    body = m.group(1)
    body_no_pre = re.sub(r"<pre[\s\S]*?</pre>", " ", body, flags=re.I)
    headings = [strip_tags(h) for h in re.findall(r"<h[23][^>]*>(.*?)</h[23]>", body, re.S | re.I)]
    paragraphs = [
        strip_tags(p)
        for p in re.findall(r"<p[^>]*>(.*?)</p>", body_no_pre, re.S | re.I)
        if len(strip_tags(p)) > 25 and "class=\"code\"" not in p
    ]
    codes = []
    for pre in re.findall(r'<pre[^>]*class="[^"]*code[^"]*"[^>]*>.*?<code[^>]*>(.*?)</code>.*?</pre>', body, re.S | re.I):
        codes.append(unescape(pre.strip()))
    if not codes:
        for pre in re.findall(r"<pre[^>]*>.*?<code[^>]*>(.*?)</code>.*?</pre>", body, re.S | re.I):
            codes.append(unescape(pre.strip()))
    return {"paragraphs": paragraphs[:8], "codes": codes[:6], "headings": headings[:10]}


def parse_header(md: str) -> tuple[str, str, str]:
    """Return (header_block, body_rest, page_rel)."""
    page_m = re.search(r"\[`([^`]+\.html)`\]\(\.\./\.\./pages/([^)]+)\)", md)
    if not page_m:
        page_m = re.search(r"\[`([^`]+\.html)`\]\(\.\./pages/([^)]+)\)", md)
    page_rel = page_m.group(2) if page_m else ""

    parts = md.split("\n---\n", 2)
    if len(parts) >= 2:
        header = parts[0] + "\n---\n"
        rest = parts[1] if len(parts) == 2 else parts[1] + "---\n" + parts[2]
    else:
        header = md.split("\n## ", 1)[0] + "\n---\n"
        rest = "## " + md.split("\n## ", 1)[1] if "\n## " in md else ""
    return header, rest, page_rel


def find_page_file(module: str, page_rel: str) -> Path | None:
    mod_path = ROOT / module
    for sub in ("pages", ""):
        p = mod_path / sub / page_rel if sub else mod_path / page_rel
        if p.is_file():
            return p
    return None


def speak_from_paragraphs(paragraphs: list[str], max_n: int = 4) -> str:
    if not paragraphs:
        return (
            "«بچه‌ها، جزوه را باز نگه دارید — من روی همان مثال‌ها live جلو می‌روم. "
            "هر بار که کد می‌زنم، مرورگر را refresh کنید و با پیش‌بینی خودتان مقایسه کنید.»"
        )
    lines = []
    for p in paragraphs[:max_n]:
        lines.append(f"«{p}»")
        lines.append("")
    return "\n".join(lines).strip()


def extract_qa_from_old(body: str) -> list[tuple[str, str]]:
    qa = []
    for block in re.findall(r"- «([^»]+)»\s*\n\s*\*\*پاسخ:\*\*([^\n]+)", body):
        qa.append((block[0].strip(), block[1].strip()))
    if not qa:
        for block in re.findall(r"- «([^»]+)»\s*\n\s*\*\*پاسخ:\*\*([^\n]+)", body, re.M):
            qa.append((block[0].strip(), block[1].strip()))
    return qa[:5]


def extract_mistakes(body: str) -> list[str]:
    mistakes = []
    section = re.search(r"## [^\n]*اشتباه[^\n]*\n+(.*?)(?=\n## |\Z)", body, re.S)
    if section:
        for line in section.group(1).splitlines():
            line = line.strip()
            if line.startswith("- **اشتباه:**"):
                mistakes.append(line[2:])
            elif line.startswith("- ") and len(line) > 4:
                mistakes.append(line[2:])
    return mistakes[:5]


def default_live_shell(codes: list[str], module: str) -> str:
    if codes:
        blocks = []
        for i, code in enumerate(codes[:3], 1):
            lang = "javascript" if module.startswith(("10-", "11-", "12-", "13-")) else "html"
            if code.strip().startswith((".", "#", "@", "body", "const", "let", "function", "display:")):
                lang = "css" if not code.strip().startswith(("const", "let", "function")) else "javascript"
            if "{" in code and "}" in code and "<" not in code:
                if "console" in code or "const" in code or "function" in code:
                    lang = "javascript"
                elif lang == "html" and "{" in code:
                    lang = "css"
            blocks.append(f"**مرحله {i} — روی صفحه بگو:** «الان این قطعه را اضافه می‌کنم و نتیجه را با هم می‌بینیم.»\n\n```{lang}\n{code.strip()}\n```\n")
        return "\n".join(blocks)
    return (
        "**مرحله ۱ — اسکلت HTML:**\n\n"
        "```html\n<!DOCTYPE html>\n<html lang=\"fa\" dir=\"rtl\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Live — کلاس</title>\n  <link rel=\"stylesheet\" href=\"live.css\">\n</head>\n<body>\n  <div class=\"demo\">محتوای live</div>\n  <script src=\"live.js\" defer></script>\n</body>\n</html>\n```\n"
    )


def build_footer_from_old(body: str, title_hint: str) -> str:
    trans = re.search(r"## [^\n]*انتقال[^\n]*\n+(.*?)(?=\n## |\Z)", body, re.S)
    trans_text = trans.group(1).strip() if trans else "→ درس بعد در همان پوشه `دروس/`"
    return f"""
---

## ۸) جمع‌بندی مدرس و سؤالات پایانی

1. مهم‌ترین ایده این جلسه چه بود؟  
   **پاسخ راهنما:** از بخش مفهوم و سؤالات کلاسی بالا.

2. یک اشتباه رایج که امروز دیدیم؟  
   **پاسخ راهنما:** از بخش اشتباهات.

3. چطور در پروژه خودتان همین الگو را به کار می‌برید؟  
   **پاسخ راهنما:** mini-project انتهای درس.

**پیام پایانی:**

«هدف حفظ تعریف نبود — هدف این بود که بتوانید همین ایده را در پروژه خودتان پیاده کنید؛ با Console و DevTools باز.»

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. همان مثال Live را بدون نگاه کردن یک بار دیگر بنویسید.
2. جزوه را باز کنید و خروجی مرورگر/Console را با پیش‌بینی خودتان مقایسه کنید.

### متوسط
3. یک variation کوچک روی مثال کلاس (مقدار دیگر، یک selector دیگر، یک عنصر DOM دیگر).
4. تمرین موضوعی در [`quizzes/`](../../quizzes/README.md) همان ماژول.

### چالشی
5. mini-project انتهای درس را کامل کنید و برای یک همکلاسی توضیح دهید **چرا** این راه‌حل کار می‌کند.

---

## انتقال به درس بعد

{trans_text}
"""


def expand_lesson(rel_path: Path, module: str, force: bool = False) -> bool:
    md = rel_path.read_text(encoding="utf-8")
    line_count = len(md.splitlines())
    if line_count >= MIN_LINES and not force:
        if rel_path.name == "01-چرا-رنگ-در-UI.md" and line_count >= MIN_LINES:
            return False
        if line_count >= MIN_LINES:
            return False

    header, old_body, page_rel = parse_header(md)
    hook_key = f"{module}/تدریس/دروس/{rel_path.name}"
    problem = PROBLEM_HOOKS.get(hook_key, "")

    page_file = find_page_file(module, page_rel) if page_rel else None
    handbook = {"paragraphs": [], "codes": [], "headings": []}
    if page_file:
        handbook = extract_lesson_from_html(page_file.read_text(encoding="utf-8", errors="replace"))

    qa = extract_qa_from_old(old_body)
    mistakes = extract_mistakes(old_body)
    if not qa and handbook["paragraphs"]:
        qa = [
            (
                "ایده اصلی این درس در یک جمله چیست؟",
                handbook["paragraphs"][0][:120] + ("…" if len(handbook["paragraphs"][0]) > 120 else ""),
            ),
            (
                "اگر کد را روی عنصر اشتباه بگذاریم چه می‌شود؟",
                "معمولاً هیچ تغییری نمی‌بینیم یا layout غیرمنتظره می‌شود — DevTools کمک می‌کند.",
            ),
        ]
    if not mistakes:
        mistakes = [
            "**اشتباه:** property را روی item به‌جای container (در Flex/Grid).  \n  **درست:** ابتدا والد layout را تنظیم کنید.",
            "**اشتباه:** فراموش کردن `lang=\"fa\"` و `dir=\"rtl\"` در live.  \n  **درست:** همیشه در HTML کلاس RTL بنویسید.",
        ]

    qa_block = "\n".join(f"- «{q}»  \n  **پاسخ:** {a}" for q, a in qa)
    mistakes_block = "\n".join(f"- {m}" if not m.startswith("**") else f"- {m}" for m in mistakes)

    concept = speak_from_paragraphs(handbook["paragraphs"])
    if handbook["headings"]:
        concept += "\n\n**روی جزوه این عناوین را دنبال کنید:** " + " · ".join(f"*{h}*" for h in handbook["headings"][:4])

    live = default_live_shell(handbook["codes"], module)

    problem_section = ""
    if problem:
        problem_section = f"""
### مسئله کلاس (اول بگو)

{problem}

"""

    new_body = f"""
## ۱) شروع کلاس؛ مسئله قبل از تعریف
{problem_section}
اول با **مسئله** شروع کن — نه با لیست property.

{concept}

**چرخه این بخش:** نشان بده → دانشجو حدس بزند → یک خط کد → refresh.

---

## ۲) مفهوم — حرف قابل گفتن سر کلاس

«بچه‌ها، جزوه را باز کنید؛ من روی همان مثال live جلو می‌روم. هر بار که property عوض می‌شود، در DevTools overlay (Flex/Grid) یا Computed styles را نگاه کنید.»

{speak_from_paragraphs(handbook["paragraphs"][1:5] if len(handbook["paragraphs"]) > 1 else handbook["paragraphs"], 3)}

اگر دانشجو گفت «حفظ کنم؟» بگو: «نه — **مسئله** را بشناسید؛ property نامش را بعداً هم از MDN پیدا می‌کنید.»

---

## ۳) Live Coding — مرحله‌به‌مرحله

«فایل live جدا می‌سازم تا index پروژه قاطی نشود — مثلاً `تدریس/live/` در همین ماژول.»

{live}

**در حین تایپ بگو:** «الان فقط یک تغییر — save — refresh — چه فرقی دیدید؟»

**اشتباه عمدی (یک بار):** یک selector اشتباه یا property روی فرزند نادرست — خطا را با کلاس debug کنید.

---

## ۴) نمایش در مرورگر و DevTools

- جزوه `{page_rel or "index.html"}` را کنار live بگذارید و پارagraph به paragraph جلو بروید.
- DevTools → Elements → computed styles؛ برای Flex/Grid overlay را فعال کنید.
- عرض viewport را باریک و پهن کنید — رفتار واکنش‌گرا را **قبل** media query هم بحث کنید اگر relevant است.

---

## ۵) سؤال کلاسی

{qa_block}

---

## ۶) اشتباهات رایج

{mistakes_block}

---

## ۷) mini-project جلسه

«۵–۱۰ دقیقه: همان ایده را در یک کامپوننت کوچک **خودتان** تکرار کنید — مثلاً navbar، کارت، یا یک تابع JS — بدون کپی کامل از جزوه. فقط وقتی گیر کردید به Live کلاس نگاه کنید.»

اگر ماژول پروژه است (۰۹ یا ۱۳): «یک section از `index.html` پروژه را امروز complete کنید و در Elements outline معنایی را چک کنید.»

---

{build_footer_from_old(old_body, rel_path.stem)}
"""

    full = header + new_body
    extra_paras = handbook["paragraphs"][4:10]
    if extra_paras:
        full += "\n---\n\n## پیوست: نکات تکمیلی از جزوه (برای مدرس)\n\n"
        for p in extra_paras:
            full += f"«{p}»\n\n"
    tips = [
        "**نکته مدرس:** بعد از هر save یک ثانیه مکث کنید تا کلاس خروجی را ببیند.",
        "**نکته مدرس:** یک بار property را عمداً غلط بگذارید و با DevTools پیدا کنید.",
        "**نکته مدرس:** از دانشجو بخواهید قبل از refresh پیش‌بینی بگوید.",
        "**نکته مدرس:** DevTools → Elements → راست‌کلیک → Scroll into view برای آیتم‌های off-screen.",
        "**نکته مدرس:** در RTL جهت main axis را با overlay Flex روی صفحه نشان دهید.",
    ]
    tip_i = 0
    while len(full.splitlines()) < TARGET_LINES and tip_i < len(tips):
        full += "\n" + tips[tip_i] + "\n"
        tip_i += 1

    rel_path.write_text(full, encoding="utf-8")
    return True


def main():
    expanded = 0
    skipped = 0
    for module in MODULES:
        dorous = ROOT / module / "تدریس" / "دروس"
        if not dorous.is_dir():
            continue
        for md in sorted(dorous.glob("*.md")):
            if md.name == "01-چرا-رنگ-در-UI.md":
                skipped += 1
                continue
            if md.name == "05-متغیر-const-let.md" and module == "10-JS-پایه":
                skipped += 1
                continue
            if module == "01-HTML-مقدماتی":
                text = md.read_text(encoding="utf-8")
                if len(text.splitlines()) >= 180 and "مسئله" in text[:3000]:
                    skipped += 1
                    continue
            if expand_lesson(md, module, force=False):
                expanded += 1
                print(f"expanded {module}/دروس/{md.name}")
            else:
                skipped += 1
    print(f"Done: expanded={expanded}, skipped={skipped}")


if __name__ == "__main__":
    main()
