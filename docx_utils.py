# -*- coding: utf-8 -*-
"""Utilities for building RTL Persian Word documents with LTR code blocks."""

from docx import Document
from docx.shared import Pt, Cm, RGBColor, Twips
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.style import WD_STYLE_TYPE
from docx.oxml.ns import qn, nsmap
from docx.oxml import OxmlElement


PERSIAN_FONT = "Tahoma"
CODE_FONT = "Consolas"
TITLE_SIZE = 22
H1_SIZE = 16
H2_SIZE = 13
H3_SIZE = 12
BODY_SIZE = 11
CODE_SIZE = 9
SMALL_SIZE = 10


def set_run_font(run, font_name=PERSIAN_FONT, size=BODY_SIZE, bold=False, color=None, italic=False):
    run.font.name = font_name
    run._element.rPr.rFonts.set(qn("w:eastAsia"), font_name)
    run._element.rPr.rFonts.set(qn("w:cs"), font_name)
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic
    if color is not None:
        run.font.color.rgb = color


def set_paragraph_rtl(paragraph, rtl=True):
    pPr = paragraph._p.get_or_add_pPr()
    # bidi
    for child in list(pPr):
        if child.tag == qn("w:bidi"):
            pPr.remove(child)
    bidi = OxmlElement("w:bidi")
    bidi.set(qn("w:val"), "1" if rtl else "0")
    pPr.append(bidi)
    # jc
    if rtl:
        paragraph.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    else:
        paragraph.alignment = WD_ALIGN_PARAGRAPH.LEFT


def set_paragraph_ltr(paragraph):
    set_paragraph_rtl(paragraph, rtl=False)
    paragraph.alignment = WD_ALIGN_PARAGRAPH.LEFT


def set_run_rtl(run, rtl=True):
    rPr = run._element.get_or_add_rPr()
    for child in list(rPr):
        if child.tag == qn("w:rtl"):
            rPr.remove(child)
    if rtl:
        rtl_el = OxmlElement("w:rtl")
        rtl_el.set(qn("w:val"), "1")
        rPr.append(rtl_el)


def add_page_number(section):
    footer = section.footer
    footer.is_linked_to_previous = False
    p = footer.paragraphs[0] if footer.paragraphs else footer.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_rtl(p, rtl=False)

    run = p.add_run("صفحه ")
    set_run_font(run, size=9)

    fld_begin = OxmlElement("w:fldChar")
    fld_begin.set(qn("w:fldCharType"), "begin")
    instr = OxmlElement("w:instrText")
    instr.set(qn("xml:space"), "preserve")
    instr.text = " PAGE "
    fld_sep = OxmlElement("w:fldChar")
    fld_sep.set(qn("w:fldCharType"), "separate")
    fld_end = OxmlElement("w:fldChar")
    fld_end.set(qn("w:fldCharType"), "end")

    run2 = p.add_run()
    run2._r.append(fld_begin)
    run2._r.append(instr)
    run2._r.append(fld_sep)
    run2._r.append(fld_end)
    set_run_font(run2, size=9)


def configure_document(doc):
    for section in doc.sections:
        section.top_margin = Cm(2)
        section.bottom_margin = Cm(2)
        section.left_margin = Cm(2)
        section.right_margin = Cm(2)
        # RTL section
        sectPr = section._sectPr
        for child in list(sectPr):
            if child.tag == qn("w:bidi"):
                sectPr.remove(child)
        bidi = OxmlElement("w:bidi")
        bidi.set(qn("w:val"), "1")
        sectPr.append(bidi)
        add_page_number(section)

    styles = doc.styles
    normal = styles["Normal"]
    normal.font.name = PERSIAN_FONT
    normal.font.size = Pt(BODY_SIZE)
    normal._element.rPr.rFonts.set(qn("w:eastAsia"), PERSIAN_FONT)
    normal._element.rPr.rFonts.set(qn("w:cs"), PERSIAN_FONT)
    pf = normal.paragraph_format
    pf.space_after = Pt(6)
    pf.line_spacing_rule = WD_LINE_SPACING.ONE_POINT_FIVE

    for style_name, size, bold in [
        ("Heading 1", H1_SIZE, True),
        ("Heading 2", H2_SIZE, True),
        ("Heading 3", H3_SIZE, True),
    ]:
        style = styles[style_name]
        style.font.name = PERSIAN_FONT
        style.font.size = Pt(size)
        style.font.bold = bold
        style.font.color.rgb = RGBColor(0x1A, 0x3A, 0x5C)
        style._element.rPr.rFonts.set(qn("w:eastAsia"), PERSIAN_FONT)
        style._element.rPr.rFonts.set(qn("w:cs"), PERSIAN_FONT)


def add_heading_fa(doc, text, level=1):
    h = doc.add_heading(text, level=level)
    set_paragraph_rtl(h)
    for run in h.runs:
        set_run_font(run, size={1: H1_SIZE, 2: H2_SIZE, 3: H3_SIZE}.get(level, BODY_SIZE), bold=True,
                     color=RGBColor(0x1A, 0x3A, 0x5C))
        set_run_rtl(run)
    return h


def add_para(doc, text, bold=False, size=BODY_SIZE, space_after=6):
    p = doc.add_paragraph()
    set_paragraph_rtl(p)
    p.paragraph_format.space_after = Pt(space_after)
    run = p.add_run(text)
    set_run_font(run, size=size, bold=bold)
    set_run_rtl(run)
    return p


def add_bullet(doc, text, level=0):
    p = doc.add_paragraph(style="List Bullet")
    set_paragraph_rtl(p)
    p.clear()
    run = p.add_run(text)
    set_run_font(run)
    set_run_rtl(run)
    if level:
        p.paragraph_format.left_indent = Cm(0.5 * level)
    return p


def add_numbered(doc, text):
    p = doc.add_paragraph(style="List Number")
    set_paragraph_rtl(p)
    p.clear()
    run = p.add_run(text)
    set_run_font(run)
    set_run_rtl(run)
    return p


def shade_cell(cell, color_hex="E8F0FE"):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), color_hex)
    shd.set(qn("w:val"), "clear")
    tcPr.append(shd)


def set_cell_rtl(cell, text, bold=False, center=False):
    cell.text = ""
    p = cell.paragraphs[0]
    set_paragraph_rtl(p)
    if center:
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run(text)
    set_run_font(run, size=SMALL_SIZE, bold=bold)
    set_run_rtl(run)


def add_code_block(doc, code, caption=None):
    if caption:
        add_para(doc, caption, bold=True, size=SMALL_SIZE, space_after=2)

    # outer table for background
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = table.cell(0, 0)
    shade_cell(cell, "F4F6F8")
    cell.text = ""
    p = cell.paragraphs[0]
    set_paragraph_ltr(p)
    p.paragraph_format.space_before = Pt(4)
    p.paragraph_format.space_after = Pt(4)
    # keep code as single run with newlines
    run = p.add_run(code.strip("\n"))
    set_run_font(run, font_name=CODE_FONT, size=CODE_SIZE)
    set_run_rtl(run, rtl=False)
    # spacer
    doc.add_paragraph()


def add_callout(doc, title, body, color="FFF8E7"):
    table = doc.add_table(rows=1, cols=1)
    cell = table.cell(0, 0)
    shade_cell(cell, color)
    cell.text = ""
    p1 = cell.paragraphs[0]
    set_paragraph_rtl(p1)
    r1 = p1.add_run(title)
    set_run_font(r1, size=BODY_SIZE, bold=True, color=RGBColor(0x8A, 0x5A, 0x00))
    set_run_rtl(r1)
    p2 = cell.add_paragraph()
    set_paragraph_rtl(p2)
    r2 = p2.add_run(body)
    set_run_font(r2, size=BODY_SIZE)
    set_run_rtl(r2)
    doc.add_paragraph()


def add_table_fa(doc, headers, rows, col_widths=None):
    table = doc.add_table(rows=1 + len(rows), cols=len(headers))
    table.style = "Table Grid"
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    for i, h in enumerate(headers):
        set_cell_rtl(table.rows[0].cells[i], h, bold=True, center=True)
        shade_cell(table.rows[0].cells[i], "1A3A5C")
        # white header text
        for p in table.rows[0].cells[i].paragraphs:
            for run in p.runs:
                run.font.color.rgb = RGBColor(255, 255, 255)
    for r_idx, row in enumerate(rows):
        for c_idx, val in enumerate(row):
            set_cell_rtl(table.rows[r_idx + 1].cells[c_idx], str(val), center=False)
            if r_idx % 2 == 1:
                shade_cell(table.rows[r_idx + 1].cells[c_idx], "F0F4F8")
    doc.add_paragraph()
    return table


def add_toc_placeholder(doc):
    add_para(
        doc,
        "راهنما: پس از باز کردن فایل در Word، روی فهرست مطالب کلیک راست کنید و گزینه Update Field / به‌روزرسانی فیلد را بزنید تا شماره صفحات به‌روز شود.",
        size=SMALL_SIZE,
    )
    p = doc.add_paragraph()
    set_paragraph_rtl(p)
    run = p.add_run()
    fld_begin = OxmlElement("w:fldChar")
    fld_begin.set(qn("w:fldCharType"), "begin")
    instr = OxmlElement("w:instrText")
    instr.set(qn("xml:space"), "preserve")
    instr.text = ' TOC \\o "1-2" \\h \\z \\u '
    fld_sep = OxmlElement("w:fldChar")
    fld_sep.set(qn("w:fldCharType"), "separate")
    fld_text = OxmlElement("w:t")
    fld_text.text = "فهرست مطالب — برای به‌روزرسانی در Word راست‌کلیک کنید."
    fld_end = OxmlElement("w:fldChar")
    fld_end.set(qn("w:fldCharType"), "end")
    run._r.append(fld_begin)
    run._r.append(instr)
    run._r.append(fld_sep)
    run._r.append(fld_text)
    run._r.append(fld_end)
    set_run_font(run, size=BODY_SIZE)
    doc.add_page_break()


def add_section_label(doc, label):
    p = doc.add_paragraph()
    set_paragraph_rtl(p)
    p.paragraph_format.space_before = Pt(8)
    p.paragraph_format.space_after = Pt(2)
    run = p.add_run(label)
    set_run_font(run, size=BODY_SIZE, bold=True, color=RGBColor(0x0B, 0x6E, 0x4F))
    set_run_rtl(run)
    return p
