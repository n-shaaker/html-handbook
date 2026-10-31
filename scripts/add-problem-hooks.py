#!/usr/bin/env python3
"""Prepend UI problem hook before ## ۱) شروع کلاس in flex/grid دروس."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

HOOKS: dict[str, str] = {
    "07-CSS-Flexbox/تدریس/دروس/02-flex-direction.md": (
        "«navbar افقی می‌خواهیم ولی در موبایل منو **ستونی** شود — هنوز property نمی‌گوییم: فقط HTML یکسان و دو حالت بصری را ببینید.»\n\n"
    ),
    "07-CSS-Flexbox/تدریس/دروس/03-flex-wrap.md": (
        "«ده تا tag/filtter کنار هم — صفحه باریک است و باکس‌ها **از صفحه بیرون** می‌زنند. nowrap یا wrap؟»\n\n"
    ),
    "07-CSS-Flexbox/تدریس/دروس/04-justify-content.md": (
        "«toolbar عریض است؛ سه دکمه چسبیده به **راست** هستند و وسط صفحه خالی مانده. چطور فاصله را **بین** دکمه‌ها یا وسط کل گروه پخش کنیم؟»\n\n"
    ),
    "07-CSS-Flexbox/تدریس/دروس/05-align-items.md": (
        "«دو کارت pricing: یکی عنوان بلند، یکی کوتاه — دکمه «خرید» یکی بالا یکی پایین. کاربر می‌گوید «نامرتب» — قبل از align-items مسئله را ببینید.»\n\n"
    ),
    "07-CSS-Flexbox/تدریس/دروس/06-align-content.md": (
        "«chipها wrap شده‌اند و **دو ردیف** داریم؛ کل بلوک بالای container مانده. فاصله **بین ردیف‌ها** کجا تنظیم می‌شود؟»\n\n"
    ),
    "07-CSS-Flexbox/تدریس/دروس/07-gap.md": (
        "«روی هر دکمه `margin-left` گذاشته‌ایم — اولی margin اضافه دارد و RTL قاطی شده. یک فاصله **روی والد** می‌خواهیم.»\n\n"
    ),
    "07-CSS-Flexbox/تدریس/دروس/08-order.md": (
        "«در DOM لوگو آخر است ولی در موبایل باید **بالا** باشد — بدون جابجایی HTML در markup تولید.»\n\n"
    ),
    "07-CSS-Flexbox/تدریس/دروس/09-grow-shrink-basis.md": (
        "«sidebar ثابت ۲۴۰px و main باید **بقیه عرض** را بگیرد؛ یک item کوچک نباید کل ردیف را له کند.»\n\n"
    ),
    "07-CSS-Flexbox/تدریس/دروس/10-flex-shorthand.md": (
        "«در پروژه همه جا `flex: 1` کپی شده — دانشجو نمی‌داند grow/shrink/basis چیست. امروز shorthand را **می‌فهمد** نه حفظ.»\n\n"
    ),
    "07-CSS-Flexbox/تدریس/دروس/11-align-self-margin-auto.md": (
        "«سه item وسط‌اند ولی دکمه «تنظیمات» باید **ته ردیف** برود — بدون spacer خالی در HTML.»\n\n"
    ),
    "07-CSS-Flexbox/تدریس/دروس/12-الگوهای-پرکاربرد.md": (
        "«سه تمرین جدا: navbar، pricing، sticky footer — هر کدام با Flex تکرارشونده حل می‌شود.»\n\n"
    ),
    "07-CSS-Flexbox/تدریس/دروس/13-واکنش‌گرا.md": (
        "«عرض ۳۲۰px: کارت‌ها باید ستون شوند؛ ۹۶۰px: سه ستون — همان HTML.»\n\n"
    ),
    "08-CSS-Grid/تدریس/دروس/02-ستون-و-ردیف.md": (
        "«sidebar ۲۴۰px و main بقیه — با درصد قاطی می‌شود؛ `fr` چطور «فضای باقی‌مانده» را می‌دهد؟»\n\n"
    ),
    "08-CSS-Grid/تدریس/دروس/03-repeat-minmax.md": (
        "«گالری ۱۲ عکس — نمی‌خواهیم ۱۲ بار `1fr` بنویسیم؛ ستون‌ها باید **حداقل** ۱۸۰px و بیشتر نشوند.»\n\n"
    ),
    "08-CSS-Grid/تدریس/دروس/04-gap.md": (
        "«جدول کارت‌ها: margin روی هر کارت در گوشه‌ها دوبرابر دیده می‌شود.»\n\n"
    ),
    "08-CSS-Grid/تدریس/دروس/05-جایگذاری-خط.md": (
        "«بنر hero باید **دو ستون** را بپوشاند — بدون جدول HTML.»\n\n"
    ),
    "08-CSS-Grid/تدریس/دروس/07-تراز-آیتم.md": (
        "«cell بلند است و دکمه کوچک **بالا** چسبیده — stretch پیش‌فرض دردسرساز.»\n\n"
    ),
    "08-CSS-Grid/تدریس/دروس/08-تراز-شبکه.md": (
        "«grid کوچک‌تر از container است — کل بلوک بالا چسبیده؛ فضای خالی **زیر** grid.»\n\n"
    ),
    "08-CSS-Grid/تدریس/دروس/09-auto-fit-fill.md": (
        "«تعداد کارت‌ها هر هفته عوض می‌شود — ستون‌ها خودکار جمع/پخش شوند.»\n\n"
    ),
    "08-CSS-Grid/تدریس/دروس/10-شبکه-ضمنی.md": (
        "«فقط ۲ ستون تعریف کردیم ولی ۷ item داریم — ردیف‌های اضافه از کجا می‌آیند؟»\n\n"
    ),
    "08-CSS-Grid/تدریس/دروس/11-Grid-در-برابر-Flex.md": (
        "«navbar: Flex یا Grid؟ dashboard: Flex یا Grid؟ — تصمیم با مسئله واقعی.»\n\n"
    ),
    "08-CSS-Grid/تدریس/دروس/12-الگوهای-پرکاربرد.md": (
        "«magazine، admin، holy grail — سه اسکلت در یک جلسه.»\n\n"
    ),
    "08-CSS-Grid/تدریس/دروس/13-واکنش‌گرا.md": (
        "«موبایل: areas یک ستون؛ دسکتاپ: side + main — همان HTML.»\n\n"
    ),
}

MARKER = "## ۱) شروع کلاس\n\n"
PROBLEM = "### مسئله کلاس (اول بگو)\n\n"

for rel, hook in HOOKS.items():
    p = ROOT / rel
    if not p.exists():
        continue
    t = p.read_text(encoding="utf-8")
    if PROBLEM in t or "مسئله کلاس" in t.split(MARKER, 1)[-1][:200]:
        continue
    if MARKER not in t:
        continue
    t = t.replace(MARKER, MARKER + PROBLEM + hook, 1)
    p.write_text(t, encoding="utf-8")

print("hooks added")
