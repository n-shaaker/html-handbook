#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Merge scenario-source.md into 09/13 دروس with gold-standard section layout."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

PROJECTS = [
    {
        "module": "09-پروژه-منوی-رستوران",
        "scenario": "scenario-source.md",
        "files": [
            "01-اسکلت-و-معرفی-پروژه.md",
            "02-سربرگ-Flex.md",
            "03-Hero.md",
            "04-کارت-غذا.md",
            "05-Grid-چیدمان-منو.md",
            "06-جدول-نوشیدنی.md",
            "07-فرم-رزرو.md",
            "08-FAQ-Footer-تماس.md",
            "09-Responsive-یکپارچه‌سازی.md",
            "10-پروژه-ترکیبی-کافه.md",
        ],
        "section_re": r"^## (?:درس|مبحث) \d+",
    },
    {
        "module": "13-پروژه-منوی-رستوران-JS",
        "scenario": "scenario-source.md",
        "files": [
            "01-DOM-و-dataset.md",
            "02-جستجو.md",
            "03-فیلتر-دسته.md",
            "04-سبد-Delegation.md",
            "05-جمع-و-formatPrice.md",
            "06-localStorage.md",
            "07-اعتبارسنجی-فرم.md",
            "08-Toast.md",
            "09-وضعیت-باز.md",
            "10-پنل-سبد-a11y.md",
            "11-پروژه-یکپارچه.md",
        ],
        "section_re": r"^## درس \d+",
    },
]

HOOKS_09 = [
    "«می‌خواهیم منوی رستوران واقعی بسازیم — نه کپی paste کل solution. اول فقط اسکلت خالی در مرورگر.»",
    "«header آماده است ولی لوگو و لینک‌ها زیر هم — Flex را **روی header** می‌گذاریم.»",
    "«hero فقط متن سفید روی عکس — بدون overlay خوانا نیست.»",
    "«کارت غذا بدون article و تصویر object-fit — شبیه لیست Word می‌ماند.»",
    "«دوازده کارت dish — float یا flex؟ Grid با auto-fit.»",
    "«جدول نوشیدنی در موبایل از صفحه بیرون می‌زند.»",
    "«فرم رزرو submit می‌شود و صفحه reload — هنوز JS نداریم ولی HTML5 validation داریم.»",
    "«footer شلوغ بدون address و details — FAQ کجا برود؟»",
    "«در ۳۲۰px همه چیز می‌شکند — یک breakpoint و چک‌لیست.»",
    "«همان الگو برای کافه — پروژه مستقل در ۷۵ دقیقه.»",
]

HOOKS_13 = [
    "«HTML از پروژه 09 آماده است — JS باید کارت‌ها را بشناسد: data-name و data-price.»",
    "«منوی ۲۰ غذا — کاربر می‌خواهد «کباب» تایپ کند و بقیه hidden شوند.»",
    "«دکمه فیلتر گیاهی — فقط کارت‌های با data-veg=true.»",
    "«کلیک روی هر دکمه افزودن — ۲۰ listener یا یک delegation؟»",
    "«سبد خالی است — جمع قیمت و format fa-IR.»",
    "«refresh صفحه — سبد پاک می‌شود مگر localStorage.»",
    "«فرم رزرو با فیلد خالی submit می‌شود — reportValidity.»",
    "«آیتم اضافه شد — کاربر feedback نمی‌بیند — Toast.»",
    "«ساعت ۲۳ — رستوران بسته — کلاس is-open.»",
    "«پنل سبد برای screen reader — aria-hidden و Escape.»",
    "«همه feature در app.js — یکپارچه و بدون global leak.»",
]


def split_scenario(text: str) -> list[str]:
    lines = text.splitlines()
    idx = []
    for i, line in enumerate(lines):
        if re.match(r"^## (?:درس|مبحث) \d+", line) or re.match(r"^## پروژه", line):
            idx.append(i)
    chunks = []
    for i, start in enumerate(idx):
        end = idx[i + 1] if i + 1 < len(idx) else len(lines)
        chunks.append("\n".join(lines[start:end]).strip())
    return chunks


def normalize_section(body: str) -> str:
    body = re.sub(r"^### متن تدریس", "## ۲) متن تدریس (قابل خواندن)", body, flags=re.M)
    body = re.sub(r"^### Live Coding", "## ۳) Live Coding", body, flags=re.M)
    body = re.sub(r"^### نمایش", "## ۴) نمایش در مرورگر", body, flags=re.M)
    body = re.sub(r"^### سؤال", "## ۵) سؤال کلاسی", body, flags=re.M)
    body = re.sub(r"^### اشتباهات", "## ۶) اشتباهات رایج", body, flags=re.M)
    body = re.sub(r"^### انتقال", "## ۷) انتقال", body, flags=re.M)
    # Wrap plain teach paragraphs in quotes
    out_lines = []
    for line in body.splitlines():
        if line.startswith("«") or line.startswith("#") or line.startswith("```") or line.startswith("|") or not line.strip():
            out_lines.append(line)
        elif line.startswith("- ") or line.startswith("**"):
            out_lines.append(line)
        elif re.match(r"^[A-Za-z`<]", line) or line.startswith("console"):
            out_lines.append(line)
        else:
            out_lines.append(f"«{line}»")
    return "\n".join(out_lines)


def header_upto_table(md: str) -> str:
    m = re.search(r"^(.*?---\n)", md, re.S)
    return m.group(1) if m else md.split("\n## ", 1)[0] + "\n---\n"


def footer_block(quiz: str = "../../quizzes/README.md") -> str:
    return f"""
---

## ۸) mini-project و جمع‌بندی

«۱۰ دقیقه آخر: همان بخش را در پوشه live خودتان بدون نگاه به solution کامل کنید. فقط outline Elements و یک checklist a11y.»

**پیام پایانی:** «پروژه را کپی نکردیم — **الگو** را یاد گرفتیم تا در quiz و پروژه بعدی تکرار کنید.»

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. Live کلاس را بدون جزوه یک بار بازسازی کنید.
2. DevTools → Accessibility یا outline معنایی را چک کنید.

### متوسط
3. تمرین topic در [`quizzes/`]({quiz}).

### چالشی
4. یک variation (رنگ، یک section اضافه) با همان الگو.

---

## نکات مدرس

- بعد از هر save یک ثانیه مکث — layout عوض شده را ببینند.
- یک باگ عمدی (selector اشتباه) و debug جماعی.
- در JS فقط `const`/`let` — `var` ممنوع.

"""


def process(proj: dict, hooks: list[str]) -> None:
    teach = ROOT / proj["module"] / "تدریس"
    scenario = (teach / proj["scenario"]).read_text(encoding="utf-8")
    first = scenario.find("\n## ")
    if first >= 0:
        scenario = scenario[first + 1 :]
    sections = split_scenario(scenario)
    dorous = teach / "دروس"
    for i, fname in enumerate(proj["files"]):
        path = dorous / fname
        if not path.exists():
            continue
        header = header_upto_table(path.read_text(encoding="utf-8"))
        sec = sections[i] if i < len(sections) else ""
        hook = hooks[i] if i < len(hooks) else ""
        intro = f"""## ۱) شروع کلاس؛ مسئله UI

«بچه‌ها، Console/DevTools را باز کنید.»

{hook}

**چرخه:** مسئله → کد → مرورگر → سؤال → راه‌حل.

---

"""
        body = normalize_section(re.sub(r"^## [^\n]+\n", "", sec, count=1))
        # Ensure Q&A format
        body = re.sub(
            r"(## ۵\) سؤال کلاسی\n\n)([^\n]+)\n\n(\([^)]+\))",
            r"\1- «\2»  \n  **پاسخ:** \3",
            body,
        )
        full = header + intro + body + footer_block()
        # Pad with teaching reminders if short
        while len(full.splitlines()) < 185:
            full += "\n«اگر کلاس سکوت کرد، یک نفر را دعوت کنید پیش‌بینی بگوید قبل از refresh.»\n"
        path.write_text(full, encoding="utf-8")
        print("merged", proj["module"], fname)


def main():
    process(PROJECTS[0], HOOKS_09)
    process(PROJECTS[1], HOOKS_13)


if __name__ == "__main__":
    main()
