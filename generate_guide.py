# -*- coding: utf-8 -*-
"""Generate Persian HTML teaching Word documents."""

from pathlib import Path

from docx import Document
from docx.shared import Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

from docx_utils import (
    configure_document,
    add_heading_fa,
    add_para,
    add_bullet,
    add_code_block,
    add_callout,
    add_table_fa,
    add_toc_placeholder,
    add_section_label,
    set_paragraph_rtl,
    set_run_font,
    set_run_rtl,
    PERSIAN_FONT,
)
from content_intro import (
    COURSE_META,
    INTRO_TEXT,
    HOW_TO_USE,
    HTML_VS_OTHERS,
    REFERENCE_NOTE,
    SESSIONS,
    SESSION_TIMING_TEMPLATE,
    session_schedule_rows,
)
from content_s1_6 import SESSIONS_CONTENT as S1_6
from content_s7_12 import SESSIONS_CONTENT as S7_12, FINAL_EXAM

OUT_DIR = Path(__file__).resolve().parent
ALL_SESSIONS = S1_6 + S7_12


def cover_page(doc, title, subtitle_extra=""):
    for _ in range(3):
        doc.add_paragraph()
    p = doc.add_paragraph()
    set_paragraph_rtl(p)
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run(title)
    set_run_font(run, size=22, bold=True, color=RGBColor(0x1A, 0x3A, 0x5C))
    set_run_rtl(run)

    p2 = doc.add_paragraph()
    set_paragraph_rtl(p2)
    p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r2 = p2.add_run(COURSE_META["subtitle"])
    set_run_font(r2, size=12)
    set_run_rtl(r2)

    if subtitle_extra:
        p3 = doc.add_paragraph()
        set_paragraph_rtl(p3)
        p3.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r3 = p3.add_run(subtitle_extra)
        set_run_font(r3, size=12, bold=True, color=RGBColor(0x0B, 0x6E, 0x4F))
        set_run_rtl(r3)

    add_para(doc, COURSE_META["version"], size=11)
    add_para(doc, COURSE_META["project"], size=11)
    add_para(doc, "مرجع فنی پیشنهادی: MDN Web Docs (developer.mozilla.org)", size=10)
    doc.add_page_break()


def write_front_matter(doc):
    add_heading_fa(doc, "مقدمه و نحوه استفاده", 1)
    for t in INTRO_TEXT:
        add_para(doc, t)
    add_callout(doc, "نکته درباره مرجع", REFERENCE_NOTE, "E8F4FD")

    add_heading_fa(doc, "چگونه از این جزوه تدریس کنیم؟", 2)
    for item in HOW_TO_USE:
        add_bullet(doc, item)

    add_heading_fa(doc, HTML_VS_OTHERS["title"], 2)
    add_section_label(doc, "متن پیشنهادی مدرس")
    add_para(doc, HTML_VS_OTHERS["teacher_script"])
    headers = HTML_VS_OTHERS["table"][0]
    rows = HTML_VS_OTHERS["table"][1:]
    add_table_fa(doc, headers, rows)

    add_heading_fa(doc, "پروژه پیوسته دوره", 2)
    add_para(
        doc,
        "در طول ۱۲ جلسه، هر دانشجو یک وب‌سایت معرفی شخصی می‌سازد: "
        "از فایل خالی تا ساختار معنایی، فهرست مهارت، جدول نمونه کار، تصویر و لینک، "
        "فرم تماس، بخش رسانه و تحویل نهایی. این پروژه مفاهیم را به کاربرد واقعی وصل می‌کند.",
    )
    add_bullet(doc, "نام پوشه پیشنهادی: personal-site")
    add_bullet(doc, "فایل اصلی: index.html")
    add_bullet(doc, "پوشه‌های فرعی: images/ ، css/ ، media/")

    add_heading_fa(doc, "جدول جلسات دوره (۹۰ دقیقه‌ای)", 1)
    add_table_fa(
        doc,
        ["جلسه", "عنوان", "مدت", "مباحث اصلی", "گام پروژه"],
        session_schedule_rows(),
    )

    add_heading_fa(doc, "الگوی زمان‌بندی هر جلسه ۹۰ دقیقه‌ای", 2)
    add_table_fa(
        doc,
        SESSION_TIMING_TEMPLATE[0],
        SESSION_TIMING_TEMPLATE[1:],
    )
    add_para(
        doc,
        "اگر کلاس کندتر پیش رفت، بخش پروژه را کوتاه و تکلیف خانه را پررنگ‌تر کنید. "
        "مباحث پیشرفته جلسه ۱۲ فشرده آموزش داده نمی‌شوند؛ فقط مرزبندی می‌شوند.",
    )
    doc.add_page_break()


def write_topic(doc, topic, include_answers=True):
    add_heading_fa(doc, topic["title"], 2)
    if topic.get("ref"):
        add_para(doc, f"مباحث مرتبط: {topic['ref']}", size=10)

    add_section_label(doc, "۱) هدف یادگیری و کاربرد واقعی")
    add_para(doc, topic["goal"])

    add_section_label(doc, "۲) متن پیشنهادی مدرس برای بیان در کلاس")
    add_para(doc, topic["teacher"])

    add_section_label(doc, "۳) مثال کد HTML")
    add_code_block(doc, topic["code"], caption="کد نمونه (چپ‌چین):")
    add_para(doc, "توضیح بخش‌های مهم:", bold=True)
    for note in topic.get("code_notes", []):
        add_bullet(doc, note)

    add_section_label(doc, "۴) نتیجه مورد انتظار در مرورگر")
    add_para(doc, topic["browser"])

    add_section_label(doc, "۵) سؤال‌های درگیرکننده")
    for i, (q, a) in enumerate(topic.get("qas", []), 1):
        add_para(doc, f"سؤال {i}: {q}")
        if include_answers:
            add_para(doc, f"پاسخ مورد انتظار: {a}", size=10)
        else:
            add_para(doc, "پاسخ: (در کلاس / پاسخ‌نامه مدرس)", size=10)

    add_section_label(doc, "۶) اشتباهات رایج و روش رفع")
    for m, fix in topic.get("mistakes", []):
        add_bullet(doc, f"اشتباه: {m}")
        add_para(doc, f"رفع: {fix}", size=10)

    add_section_label(doc, "۷) تمرین کلاسی (ساده تا چالشی)")
    for ex in topic.get("exercises", []):
        add_para(doc, f"[{ex['level']}] {ex['prompt']}")
        if include_answers:
            add_para(doc, f"پاسخ تشریحی: {ex['answer']}", size=10)
        else:
            add_para(doc, "پاسخ: ……………………………………", size=10)

    add_section_label(doc, "۸) سؤال ارزیابی درک")
    assess = topic.get("assessment", {})
    if assess:
        add_para(doc, assess.get("q", ""))
        if include_answers:
            add_para(doc, f"پاسخ معیار: {assess.get('a', '')}", size=10)
        else:
            add_para(doc, "پاسخ دانشجو: ……………………………………", size=10)

    activities = topic.get("activities") or {}
    if activities:
        add_section_label(doc, "فعالیت‌های تکمیلی کلاس")
        for key, label in [
            ("predict", "پیش‌بینی خروجی"),
            ("debug", "پیدا کردن خطا"),
            ("complete", "تکمیل کد ناقص"),
        ]:
            act = activities.get(key)
            if not act:
                continue
            add_para(doc, f"{label}: {act['prompt']}")
            if include_answers:
                add_para(doc, f"پاسخ: {act['answer']}", size=10)
            else:
                add_para(doc, "پاسخ: ……………………………………", size=10)


def write_session(doc, session, include_answers=True):
    add_heading_fa(doc, f"جلسه {session['num']}: {session['title']}", 1)
    add_para(doc, f"مدت جلسه: {session['duration']} دقیقه", bold=True)

    add_heading_fa(doc, "اهداف جلسه", 3)
    for g in session["objectives"]:
        add_bullet(doc, g)

    add_heading_fa(doc, "شروع گرم", 3)
    add_para(doc, session["warmup"])

    add_heading_fa(doc, "زمان‌بندی دقیق جلسه", 3)
    add_table_fa(doc, ["بازه زمانی", "فعالیت"], session["timing"])

    for topic in session["topics"]:
        write_topic(doc, topic, include_answers=include_answers)

    add_heading_fa(doc, "کدنویسی زنده با مدرس", 3)
    add_para(doc, session["live_coding"])

    add_heading_fa(doc, "گام پروژه پیوسته در این جلسه", 3)
    add_para(doc, session["project_step"])

    add_heading_fa(doc, "فعالیت مستقل / تمرین پایانی", 3)
    add_para(
        doc,
        "دانشجو بدون نگاه به مثال مدرس، مفهوم جلسه را روی فایل خودش پیاده می‌کند. "
        "مدرس بین صندلی‌ها می‌چرخد و فقط با سؤال راهنمایی می‌کند نه با نوشتن کامل کد.",
    )

    add_heading_fa(doc, "جمع‌بندی سه‌نقطه‌ای", 3)
    for s in session["summary"]:
        add_bullet(doc, s)

    add_heading_fa(doc, "تکلیف خانه", 3)
    for hw in session["homework"]:
        add_bullet(doc, hw)

    doc.add_page_break()


def write_final_section(doc, include_answers=True):
    add_heading_fa(doc, "آزمون پایانی دوره (سنجش درک واقعی)", 1)
    add_para(
        doc,
        "این آزمون حفظ طوطی‌وار تگ نیست؛ هدف سنجش فهم کاربرد، انتخاب درست و استدلال است. "
        "زمان پیشنهادی: ۴۰ تا ۵۰ دقیقه.",
    )
    for i, item in enumerate(FINAL_EXAM, 1):
        add_para(doc, f"{i}. {item['q']}")
        if include_answers:
            add_para(doc, f"پاسخ نمونه: {item['a']}", size=10)
        else:
            add_para(doc, "پاسخ: ……………………………………", size=10)

    add_heading_fa(doc, "روبیک ساده ارزیابی پروژه نهایی", 2)
    add_table_fa(
        doc,
        ["معیار", "عالی", "قابل قبول", "نیاز به بهبود"],
        [
            ["ساختار HTML5 و head", "کامل و تمیز", "اکثر موارد درست", "نواقص اساسی"],
            ["معناشناسی و تیترها", "landmark درست + سلسله‌مراتب", "تا حدی", "فقط div/پراکنده"],
            ["دسترس‌پذیری پایه", "alt/label/لینک گویا", "ناقص ولی تلاش‌شده", "نادیده گرفته شده"],
            ["فرم و رسانه", "درست و مرتبط", "حداقلی", "ندارد/غلط"],
            ["وضوح ارائه", "توضیح چرایی تصمیم‌ها", "توضیح سطحی", "فقط نمایش صفحه"],
        ],
    )

    add_heading_fa(doc, "پیشنهاد ادامه مسیر بعد از HTML", 2)
    add_bullet(doc, "CSS: انتخابگر، جعبه، Flexbox/Grid، واکنش‌گرایی")
    add_bullet(doc, "JavaScript پایه: DOM، رویدادها، اعتبارسنجی فرم")
    add_bullet(doc, "دسترس‌پذیری عمیق‌تر و آزمون با صفحه‌کلید/صفحه‌خوان")
    add_bullet(doc, "مرجع: MDN Web Docs — https://developer.mozilla.org/en-US/docs/Web/HTML")


def build_teacher_guide():
    doc = Document()
    configure_document(doc)
    cover_page(doc, COURSE_META["title"], "نسخه کامل مدرس (همراه پاسخ‌ها)")
    add_heading_fa(doc, "فهرست مطالب", 1)
    add_toc_placeholder(doc)
    write_front_matter(doc)
    for session in ALL_SESSIONS:
        write_session(doc, session, include_answers=True)
    write_final_section(doc, include_answers=True)
    path = OUT_DIR / "HTML_Teaching_Guide_FA.docx"
    doc.save(path)
    return path


def build_student_guide():
    doc = Document()
    configure_document(doc)
    cover_page(doc, COURSE_META["title"], "نسخه دانشجو (بدون پاسخ تمرین‌ها)")
    add_heading_fa(doc, "فهرست مطالب", 1)
    add_toc_placeholder(doc)

    add_heading_fa(doc, "راهنمای دانشجو", 1)
    add_para(
        doc,
        "این نسخه برای تمرین و همراهی در کلاس است. پاسخ تمرین‌ها، سؤال‌های درگیرکننده و آزمون "
        "را خودتان بنویسید. هدف فهمیدن است نه کپی کردن.",
    )
    add_para(doc, COURSE_META["project"], bold=True)
    add_heading_fa(doc, "جدول جلسات", 2)
    add_table_fa(
        doc,
        ["جلسه", "عنوان", "مدت", "مباحث اصلی", "گام پروژه"],
        session_schedule_rows(),
    )
    doc.add_page_break()

    for session in ALL_SESSIONS:
        write_session(doc, session, include_answers=False)
    write_final_section(doc, include_answers=False)
    path = OUT_DIR / "HTML_Student_Workbook_FA.docx"
    doc.save(path)
    return path


def build_answer_key():
    doc = Document()
    configure_document(doc)
    cover_page(doc, "پاسخ‌نامه مدرس — آموزش HTML", "فقط برای مدرس")
    add_para(
        doc,
        "این فایل خلاصه پاسخ‌های مورد انتظار برای تمرین‌ها، فعالیت‌ها، ارزیابی‌ها و آزمون پایانی است. "
        "پاسخ‌ها معیارند؛ پاسخ هم‌معنی دانشجو را بپذیرید.",
    )
    add_callout(doc, "یادآوری", REFERENCE_NOTE, "FFF8E7")

    for session in ALL_SESSIONS:
        add_heading_fa(doc, f"جلسه {session['num']}: {session['title']}", 1)
        for topic in session["topics"]:
            add_heading_fa(doc, topic["title"], 2)
            add_para(doc, "سؤال‌های کلاسی:", bold=True)
            for q, a in topic.get("qas", []):
                add_bullet(doc, f"{q} → {a}")
            add_para(doc, "تمرین‌ها:", bold=True)
            for ex in topic.get("exercises", []):
                add_bullet(doc, f"[{ex['level']}] {ex['prompt']}")
                add_para(doc, f"پاسخ: {ex['answer']}", size=10)
            assess = topic.get("assessment")
            if assess:
                add_para(doc, f"ارزیابی: {assess['q']}")
                add_para(doc, f"پاسخ معیار: {assess['a']}", size=10)
            for key, label in [
                ("predict", "پیش‌بینی"),
                ("debug", "دیباگ"),
                ("complete", "تکمیل"),
            ]:
                act = (topic.get("activities") or {}).get(key)
                if act:
                    add_para(doc, f"{label}: {act['prompt']}")
                    add_para(doc, f"پاسخ: {act['answer']}", size=10)
        doc.add_page_break()

    add_heading_fa(doc, "پاسخ آزمون پایانی", 1)
    for i, item in enumerate(FINAL_EXAM, 1):
        add_para(doc, f"{i}. {item['q']}")
        add_para(doc, f"پاسخ نمونه: {item['a']}", size=10)

    path = OUT_DIR / "HTML_Answer_Key_FA.docx"
    doc.save(path)
    return path


def validate(paths):
    from docx import Document as D

    report = []
    for p in paths:
        d = D(str(p))
        texts = []
        for para in d.paragraphs:
            if para.text.strip():
                texts.append(para.text.strip())
        joined = "\n".join(texts)
        report.append(
            {
                "file": p.name,
                "exists": p.exists(),
                "size_kb": round(p.stat().st_size / 1024, 1),
                "paragraphs": len(texts),
                "has_sessions": all(f"جلسه {i}" in joined for i in range(1, 13)),
                "has_form": "form" in joined.lower() or "فرم" in joined,
                "has_semantic": "Semantics" in joined or "معناشناسی" in joined or "semantic" in joined.lower(),
                "sample_h1": next((t for t in texts if t.startswith("جلسه 1") or t.startswith("جلسه ۱")), texts[0] if texts else ""),
            }
        )
    return report


def main():
    import sys
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    t = build_teacher_guide()
    s = build_student_guide()
    a = build_answer_key()
    print("CREATED:")
    for p in (t, s, a):
        print(f" - {p.name} ({p.stat().st_size} bytes)")
    print("VALIDATE:")
    for row in validate([t, s, a]):
        print(row)


if __name__ == "__main__":
    main()
