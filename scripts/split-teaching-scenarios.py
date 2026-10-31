#!/usr/bin/env python3
"""Split module سناریو-تدریس.md into per-lesson دروس/*.md with gold-standard headers."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

CYCLE = (
    "**چرخه ثابت تدریس (در کل جلسه تکرار کن):**  \n"
    "مفهوم → کد → نتیجه در مرورگر → سؤال چالشی → راه‌حل\n"
)

SUB_RE = re.compile(
    r"^### (\d+)\) (.+)$",
    re.MULTILINE,
)


def renumber_sections(body: str) -> str:
    """Turn ### N) Title into ## N) Title (gold-standard section style)."""
    return SUB_RE.sub(r"## \1) \2", body)


def strip_page_line(body: str) -> str:
    return re.sub(
        r"^\*\*صفح[eh]:\*\* .+\n",
        "",
        body,
        count=1,
        flags=re.MULTILINE,
    )


def make_header(
    title: str,
    page_href: str,
    page_label: str,
    prereq: str,
    duration: str,
    goal: str,
) -> str:
    return f"""# سناریوی تدریس {title}

**صفحه جزوه:** [`{page_label}`]({page_href})  
**پیش‌نیاز مفهومی:** {prereq}  
**مدت پیشنهادی:** {duration}  
**هدف جلسه:** {goal}

{CYCLE}
---

"""


def write_lesson(path: Path, header: str, body: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    body = strip_page_line(body.strip())
    body = renumber_sections(body)
    # Normalize Live Coding headings
    body = body.replace(
        "## 2) Live Coding (complete runnable HTML + what to say while coding)",
        "## 2) Live Coding",
    )
    body = body.replace("## 3) نمایش در مرورگر", "## 3) نمایش در مرورگر")
    body = body.replace("## 4) سؤال کلاسی (with answers)", "## 4) سؤال کلاسی")
    body = body.replace("## 5) اشتباهات رایج", "## 5) اشتباهات رایج")
    body = body.replace("## 6) انتقال به مبحث بعدی", "## 6) انتقال به درس بعد")
    path.write_text(header + body + "\n", encoding="utf-8")


def split_by_h2(content: str) -> list[tuple[str, str]]:
    parts = re.split(r"\n(?=## )", content)
    out: list[tuple[str, str]] = []
    for part in parts:
        part = part.strip()
        if not part.startswith("## "):
            continue
        m = re.match(r"^## (.+)$", part.split("\n", 1)[0])
        if not m:
            continue
        title = m.group(1).strip()
        if "شروع جلسه" in title:
            continue
        out.append((title, part))
    return out


def process_color() -> None:
    base = ROOT / "06-آزمایشگاه-رنگ" / "تدریس"
    text = (base / "سناریو-تدریس.md").read_text(encoding="utf-8")
    sections = split_by_h2(text)

    meta = [
        (
            "درس ۱: چرا رنگ در UI",
            "01-چرا-رنگ-در-UI.md",
            "../../pages/01-why-color.html",
            "01-why-color.html",
            "[رنگ در CSS مقدماتی](../../02-CSS-مقدماتی/pages/06-colors.html)",
            "حدود ۲۵ دقیقه",
            "دانشجو بفهمد رنگ فقط تزئین نیست — سلسله‌مراتب، معنا (موفق/خطا) و دسترس‌پذیری را با مثال کارت زنده ببیند.",
        ),
        (
            "درس ۲: RGB و Hex",
            "02-RGB-و-Hex.md",
            "../../pages/02-rgb-hex.html",
            "02-rgb-hex.html",
            "درس ۱ همین ماژول",
            "حدود ۳۰ دقیقه",
            "انتقال از «حس رنگ» به **اعداد قابل کپی** — rgb و hex را روی پالت برند live بسازد.",
        ),
        (
            "درس ۳: HSL",
            "03-HSL.md",
            "../../pages/03-hsl.html",
            "03-hsl.html",
            "درس ۲",
            "حدود ۲۵ دقیقه",
            "با HSL variant روشن/تیره یک رنگ برند را بدون حدس hex بسازد و به آزمایشگاه وصل شود.",
        ),
        (
            "درس ۴: متغیر CSS و تم",
            "04-متغیر-و-تم.md",
            "../../pages/04-variables-theme.html",
            "04-variables-theme.html",
            "درس ۳ · [متغیر CSS](../../02-CSS-مقدماتی/pages/15-variables.html) (مرور)",
            "حدود ۲۵ دقیقه",
            "تم روشن/تاریک با `--token` و `data-theme` — نه کپی ده‌ها hex.",
        ),
        (
            "درس ۵: کنtrast و دسترس‌پذیری",
            "05-کنtrast-و-دسترس‌پذیری.md",
            "../../pages/05-contrast.html",
            "05-contrast.html",
            "درس ۴",
            "حدود ۲۵ دقیقه",
            "نسبت کنtrast WCAG را ببیند؛ متن «زیبا ولی ناخوانا» را رد کند.",
        ),
        (
            "درس ۶: جلسه آزمایشگاه + پروژه",
            "06-آزمایشگاه-و-پروژه.md",
            "../../index.html",
            "آزمایشگاه تعاملی (index.html)",
            "درس ۱–۵",
            "حدود ۴۵–۶۰ دقیقه",
            "در [آزمایشگاه](../../index.html) HSL/RGB را با اسلایدر دست بزند و کارت برند + تم را یکجا جمع کند.",
        ),
    ]

    # Map sections: first 5 topics + combine project+summary+exercises for lesson 6
    topic_sections = [s for s in sections if s[0].startswith("مبحث")]
    project_bits: list[str] = []
    for title, body in sections:
        if title.startswith("پروژه") or title.startswith("جمع‌بندی") or title.startswith("تمرین"):
            project_bits.append(body)

    for i, m in enumerate(meta):
        if i < len(topic_sections):
            _, body = topic_sections[i]
        else:
            body = "\n\n---\n\n".join(project_bits)
        header = make_header(m[0], m[2], m[3], m[4], m[5], m[6])
        write_lesson(base / "دروس" / m[1], header, body)


FLEX_META = [
    ("درس ۱: آشنایی با Flexbox", "01-آشنایی-با-Flexbox.md", "01-intro.html", "Box model · display block/inline", "حدود ۴۵ دقیقه", "مسئله navbar شکسته با float را ببیند؛ با `display: flex` سه آیتم را در یک ردیف بچیند."),
    ("درس ۲: flex-direction", "02-flex-direction.md", "02-flex-direction.html", "درس ۱", "حدود ۳۵ دقیقه", "toolbar افقی vs sidebar عمودی — محور main را بچرخاند."),
    ("درس ۳: flex-wrap", "03-flex-wrap.md", "03-flex-wrap.html", "درس ۲", "حدود ۳۵ دقیقه", "chipهای overflow — wrap vs nowrap را در عرض باریک ببیند."),
    ("درس ۴: justify-content", "04-justify-content.md", "04-justify-content.html", "درس ۳", "حدود ۴۰ دقیقه", "فضای خالی ردیف — دکمه‌ها را در navbar پخش/وسط/انتها کند."),
    ("درس ۵: align-items", "05-align-items.md", "05-align-items.html", "درس ۴", "حدود ۴۰ دقیقه", "کارت‌های نامتقارن ارتفاع — تراز عمودی روی محور cross."),
    ("درس ۶: align-content", "06-align-content.md", "06-align-content.html", "درس ۵ · wrap", "حدود ۳۵ دقیقه", "چند ردیف wrap — فاصله بین ردیف‌ها را کنترل کند."),
    ("درس ۷: gap", "07-gap.md", "07-gap.html", "درس ۶", "حدود ۲۵ دقیقه", "margin روی هر item vs یک `gap` روی والد."),
    ("درس ۸: order", "08-order.md", "08-order.html", "درس ۷", "حدود ۳۰ دقیقه", "ترتیب بصری vs DOM — موبایل اول بدون جابجایی HTML."),
    ("درس ۹: grow, shrink, basis", "09-grow-shrink-basis.md", "09-grow-shrink-basis.html", "درس ۸", "حدود ۴۵ دقیقه", "sidebar ثابت + main پرکن — سه مقدار flex را جدا امتحان کند."),
    ("درس ۱۰: flex shorthand", "10-flex-shorthand.md", "10-flex-shorthand.html", "درس ۹", "حدود ۳۰ دقیقه", "`flex: 1` را بفهمد نه فقط کپی کند."),
    ("درس ۱۱: align-self و margin auto", "11-align-self-margin-auto.md", "11-align-self-margin-auto.html", "درس ۱۰", "حدود ۳۵ دقیقه", "یک item استثنا — دکمه انتهای نوار با `margin-inline-start: auto`."),
    ("درس ۱۲: الگوهای پرکاربرد", "12-الگوهای-پرکاربرد.md", "12-patterns.html", "درس ۱–۱۱", "حدود ۵۰ دقیقه", "navbar، pricing، sticky footer را از الگوهای تکراری بسازد."),
    ("درس ۱۳: Flex واکنش‌گرا", "13-واکنش‌گرا.md", "13-responsive.html", "درس ۱۲", "حدود ۴۵ دقیقه", "ستون موبایل / ردیف دسکتاپ با wrap و direction."),
    ("درس ۱۴: تمرین و جمع‌بندی", "14-تمرین-و-جمع‌بندی.md", "14-practice.html", "درس ۱–۱۳", "حدود ۶۰–۹۰ دقیقه", "Navbar + pricing + footer را خودش مونتاژ کند؛ checklist جزوه practice."),
]

GRID_META = [
    ("درس ۱: Grid چیست؟", "01-مقدمه-Grid.md", "01-intro.html", "Flexbox (07) · box model", "حدود ۴۵ دقیقه", "کارت‌ها روی هم افتاده — دو بعدی واقعی با `display: grid`."),
    ("درس ۲: ستون‌ها و ردیف‌ها", "02-ستون-و-ردیف.md", "02-columns-rows.html", "درس ۱", "حدود ۴۰ دقیقه", "`fr` در برابر px — تقسیم فضای باقی‌مانده."),
    ("درس ۳: repeat و minmax", "03-repeat-minmax.md", "03-repeat-minmax.html", "درس ۲", "حدود ۴۰ دقیقه", "گالری واکنش‌گر بدون media query اولیه."),
    ("درس ۴: gap", "04-gap.md", "04-gap.html", "درس ۳", "حدود ۲۵ دقیقه", "فاصله یکنواخت بین cell — نه margin روی هر item."),
    ("درس ۵: placement با خط", "05-جایگذاری-خط.md", "05-placement.html", "درس ۴", "حدود ۴۰ دقیقه", "span چند ستون — hero پهن روی grid."),
    ("درس ۶: template-areas", "06-template-areas.md", "06-template-areas.html", "درس ۵", "حدود ۴۵ دقیقه", "اسکلت صفحه خوانا با نام area — head/side/main/foot."),
    ("درس ۷: align-items", "07-تراز-آیتم.md", "07-align-items.html", "درس ۶", "حدود ۳۵ دقیقه", "محتوای کوتاه داخل cell بلند — stretch vs center."),
    ("درس ۸: align-content", "08-تراز-شبکه.md", "08-align-content.html", "درس ۷", "حدود ۳۵ دقیقه", "grid کوچک‌تر از container — فضای خالی اطراف."),
    ("درس ۹: auto-fit و auto-fill", "09-auto-fit-fill.md", "09-auto-fit-fill.html", "درس ۸", "حدود ۴۰ دقیقه", "ستون‌های خودکار minmax — کارت‌ها جمع/پخش."),
    ("درس ۱۰: implicit grid", "10-شبکه-ضمنی.md", "10-implicit-grid.html", "درس ۹", "حدود ۳۵ دقیقه", "item اضافه — ردیف/ستون ضمنی auto."),
    ("درس ۱۱: Grid یا Flex؟", "11-Grid-در-برابر-Flex.md", "11-grid-vs-flex.html", "درس ۱–۱۰", "حدود ۳۰ دقیقه", "تصمیم یک‌بعدی vs دو‌بعدی با مثال واقعی."),
    ("درس ۱۲: الگوهای پرکاربرد", "12-الگوهای-پرکاربرد.md", "12-patterns.html", "درس ۱–۱۱", "حدود ۵۰ دقیقه", "dashboard، magazine، holy grail با grid."),
    ("درس ۱۳: Grid واکنش‌گرا", "13-واکنش‌گرا.md", "13-responsive.html", "درس ۱۲", "حدود ۴۵ دقیقه", "areas عوض‌شونده در breakpoint."),
    ("درس ۱۴: تمرین و جمع‌بندی", "14-تمرین-و-جمع‌بندی.md", "14-practice.html", "درس ۱–۱۳", "حدود ۶۰–۹۰ دقیقه", "اسکلت سایت واکنش‌گر + checklist practice."),
]


def process_flex_or_grid(module: str, meta: list) -> None:
    base = ROOT / module / "تدریس"
    text = (base / "سناریو-تدریس.md").read_text(encoding="utf-8")
    sections = split_by_h2(text)
    lesson_sections = [s for s in sections if s[0].startswith("درس")]
    tail: list[str] = []
    for title, body in sections:
        if title.startswith("پروژه") or title.startswith("جمع‌بندی") or title.startswith("تمرین"):
            tail.append(body)

    for i, m in enumerate(meta):
        title, fname, page, prereq, duration, goal = m
        page_href = f"../../pages/{page}"
        if i < len(lesson_sections):
            _, body = lesson_sections[i]
        elif i == len(meta) - 1 and tail:
            body = "\n\n---\n\n".join(tail)
        else:
            body = f"## 1) مرور\n\nمحتوای این درس را از جزوه [`{page}`]({page_href}) و تمرین‌های [`quizzes/`](../../quizzes/README.md) تکمیل کنید.\n"
        header = make_header(title, page_href, page, prereq, duration, goal)
        write_lesson(base / "دروس" / fname, header, body)


def main() -> None:
    process_color()
    process_flex_or_grid("07-CSS-Flexbox", FLEX_META)
    process_flex_or_grid("08-CSS-Grid", GRID_META)
    print("Done: دروس/*.md generated for modules 06, 07, 08")


if __name__ == "__main__":
    main()
