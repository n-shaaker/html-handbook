#!/usr/bin/env node
/**
 * Split monolithic سناریو-تدریس.md into per-lesson دروس/*.md with gold-standard headers.
 */
import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const MODULES = [
  {
    dir: "09-پروژه-منوی-رستوران",
    sectionRe: /^## (مبحث \d+ — .+|پروژه ترکیبی — .+)$/m,
    files: [
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
    meta: [
      { page: null, dur: 45, goal: "اسکلت معنایی RTL و پوشه live بدون کپی solution", prereq: "HTML + CSS Flex/Grid" },
      { page: null, dur: 50, goal: "header با Flex، nav دسترس‌پذیر و لینک‌های anchor", prereq: "07 Flexbox" },
      { page: null, dur: 55, goal: "hero با تصویر، overlay و دکمه‌های CTA", prereq: "CSS background" },
      { page: null, dur: 60, goal: "article.dish، تصویر object-fit، برچسب و قیمت", prereq: "HTML semantic" },
      { page: null, dur: 65, goal: "dishes-grid با auto-fit/minmax و legend", prereq: "08 Grid" },
      { page: null, dur: 50, goal: "جدول نوشیدنی با caption، scope و scroll موبایل", prereq: "HTML tables" },
      { page: null, dur: 55, goal: "فرم رزرو HTML5، label و focus-visible", prereq: "Forms HTML" },
      { page: null, dur: 45, goal: "details/summary، address، footer", prereq: "—" },
      { page: null, dur: 50, goal: "یک breakpoint موبایل و چک لیست a11y", prereq: "Media queries" },
      { page: null, dur: 75, goal: "منوی کافه مستقل با همان الگو", prereq: "درس ۱–۹" },
    ],
    goldRef: "../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md",
    nextModule: "../../10-JS-پایه/",
  },
  {
    dir: "10-JS-پایه",
    sectionRe: /^## (درس \d+ — .+|پروژه جلسه — .+)$/m,
    files: [
      "01-JavaScript-چیست.md",
      "02-محل-نوشتن-JS.md",
      "03-خروجی-console.md",
      "04-Syntax-و-کامنت.md",
      "05-متغیر-const-let.md",
      "06-عملگرها.md",
      "07-انواع-داده.md",
      "08-توابع.md",
      "09-اشیا.md",
      "10-DOM-پایه.md",
      "11-رویدادها.md",
      "12-رشته‌ها.md",
      "13-متدهای-رشته.md",
      "14-Template-Literals.md",
      "15-اعداد.md",
      "16-بولین-و-مقایسه.md",
      "17-if-else.md",
      "18-switch.md",
      "19-حلقه-for.md",
      "20-while-break.md",
      "21-تمرین-جمع‌بندی.md",
    ],
    pages: [
      "01-intro.html", "02-where-to.html", "03-output.html", "04-syntax.html", "05-variables.html",
      "06-operators.html", "07-data-types.html", "08-functions.html", "09-objects.html", "10-dom-basics.html",
      "11-events.html", "12-strings.html", "13-string-methods.html", "14-template-literals.html", "15-numbers.html",
      "16-booleans-comparisons.html", "17-if-else.html", "18-switch.html", "19-for-loop.html", "20-while-break.html",
      "21-practice.html",
    ],
    meta: pages => pages.map((p, i) => ({
      page: p,
      dur: i === 20 ? 90 : 45 + (i % 3) * 5,
      goal: `هم‌راستا با جزوه ${p} — مسئله واقعی، Live Coding با const/let، Console`,
      prereq: i === 0 ? "HTML پایه" : `درس ${i}`,
    })),
    goldRef: "../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md",
    nextModule: "../../11-JS-میانی/",
  },
  {
    dir: "11-JS-میانی",
    sectionRe: /^## (مبحث \d+ — .+|پروژه جلسه — .+)$/m,
    files: [
      "01-آرایه‌ها.md", "02-map-filter-reduce.md", "03-find-sort.md", "04-forEach.md", "05-Date.md",
      "06-Math-random.md", "07-Scope.md", "08-Hoisting-strict.md", "09-Arrow-functions.md", "10-this.md",
      "11-Destructuring-spread.md", "12-JSON.md", "13-Errors.md", "14-DOM-selecting.md", "15-DOM-changing.md",
      "16-DOM-events.md", "17-DOM-elements.md", "18-Forms-JS.md", "19-Debugging.md", "20-Image-slider.md",
      "21-UI-patterns.md", "22-Todo-practice.md",
    ],
    pages: [
      "01-arrays.html", "02-array-methods.html", "03-array-search-sort.html", "04-array-iteration.html", "05-dates.html",
      "06-math-random.html", "07-scope.html", "08-hoisting-strict.html", "09-arrow-functions.html", "10-this.html",
      "11-destructuring-spread.html", "12-json.html", "13-errors.html", "14-dom-selecting.html", "15-dom-changing.html",
      "16-dom-events.html", "17-dom-elements.html", "18-forms.html", "19-debugging-intro.html", "20-image-slider.html",
      "21-ui-patterns.html", "22-practice.html",
    ],
    meta: pages => pages.map((p, i) => ({
      page: p,
      dur: i === 21 ? 90 : 50,
      goal: `درس ${i + 1} — ${p}`,
      prereq: i === 0 ? "10 JS پایه" : `درس ${i}`,
    })),
    goldRef: "../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md",
    nextModule: "../../12-JS-پیشرفته/",
  },
  {
    dir: "12-JS-پیشرفته",
    sectionRe: /^## (مبحث \d+ — .+|پروژه جلسه — .+)$/m,
    files: [
      "01-Params-rest-spread.md", "02-Closures.md", "03-call-apply-bind.md", "04-Classes.md", "05-Inheritance.md",
      "06-Set-Map.md", "07-Timing.md", "08-Callbacks.md", "09-Promises.md", "10-async-await.md",
      "11-fetch.md", "12-Modules.md", "13-Web-Storage.md", "14-RegExp.md", "15-Event-delegation.md",
      "16-Modern-syntax.md", "17-Debugging-pro.md", "18-a11y-JS.md", "19-Deploy.md", "20-فروشگاه-practice.md",
      "21-پروژه-shop-جلسه.md",
    ],
    pages: [
      "01-function-params.html", "02-closures.html", "03-call-apply-bind.html", "04-classes.html", "05-inheritance.html",
      "06-sets-maps.html", "07-timing.html", "08-callbacks.html", "09-promises.html", "10-async-await.html",
      "11-fetch.html", "12-modules.html", "13-web-storage.html", "14-regexp.html", "15-event-delegation.html",
      "16-modern-syntax.html", "17-debugging.html", "18-a11y-js.html", "19-deploy.html", "20-practice.html",
      "20-practice.html",
    ],
    meta: pages => pages.map((p, i) => ({
      page: p,
      dur: i >= 19 ? 75 : 55,
      goal: i === 20 ? "پروژه جلسه shop — جمع‌بندی async/storage" : `درس ${i + 1} — ${p}`,
      prereq: i === 0 ? "11 JS میانی" : i === 20 ? "درس ۱–۲۰" : `درس ${i}`,
    })),
    goldRef: "../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md",
    nextModule: "../../13-پروژه-منوی-رستوران-JS/",
  },
  {
    dir: "13-پروژه-منوی-رستوران-JS",
    sectionRe: /^## (مبحث \d+ — .+|پروژه جلسه — .+)$/m,
    files: [
      "01-DOM-و-dataset.md", "02-جستجو.md", "03-فیلتر-دسته.md", "04-سبد-Delegation.md", "05-جمع-و-formatPrice.md",
      "06-localStorage.md", "07-اعتبارسنجی-فرم.md", "08-Toast.md", "09-وضعیت-باز.md",       "10-پنل-سبد-a11y.md",
      "11-پروژه-یکپارچه.md",
    ],
    meta: [
      { page: "js/app.js", dur: 55, goal: "querySelectorAll، data-name روی کارت‌ها", prereq: "09 پروژه استاتیک" },
      { page: "js/app.js", dur: 50, goal: "input search و hidden روی آیتم‌ها", prereq: "درس ۱" },
      { page: "js/app.js", dur: 55, goal: "filter-btn و matchesFilter", prereq: "درس ۲" },
      { page: "js/app.js", dur: 65, goal: "addToOrder و delegation روی منو", prereq: "11 delegation" },
      { page: "js/app.js", dur: 50, goal: "renderCart و toLocaleString fa-IR", prereq: "درس ۴" },
      { page: "js/app.js", dur: 60, goal: "STORAGE_KEY و JSON.parse/stringify", prereq: "12 web storage" },
      { page: "js/app.js", dur: 55, goal: "submit فرم رزرو و preventDefault", prereq: "Forms" },
      { page: "js/app.js", dur: 45, goal: "showToast و setTimeout", prereq: "07 timing" },
      { page: "js/app.js", dur: 40, goal: "getHours و کلاس is-open", prereq: "05 dates" },
      { page: "js/app.js", dur: 50, goal: "cart panel، Escape، aria-hidden", prereq: "درس ۴–۸" },
      { page: "js/app.js", dur: 75, goal: "یکپارچه‌سازی app.js یا project-01 quizzes", prereq: "درس ۱–۱۰" },
    ],
    goldRef: "../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md",
    nextModule: null,
  },
];

function normalizeBody(body) {
  let out = body.trim();
  // Compact scenario: ### متن تدریس → ## ۱) متن تدریس
  const compactMap = [
    [/^### متن تدریس/m, "## ۱) متن تدریس"],
    [/^### Live Coding/m, "## ۲) Live Coding"],
    [/^### نمایش/m, "## ۳) نمایش در مرورگر"],
    [/^### سؤال/m, "## ۴) سؤال کلاسی (with answers)"],
    [/^### اشتباهات/m, "## ۵) اشتباهات رایج"],
    [/^### انتقال/m, "## ۶) انتقال به مبحث بعدی"],
  ];
  for (const [re, rep] of compactMap) {
    out = out.replace(re, rep);
  }
  // ### N) → ## N)
  out = out.replace(/^### ([\d۰-۹]+\))/gm, "## $1");
  out = out.replace(/^## ۲\) Live Coding \(complete runnable HTML \+ what to say while coding\)/gm, "## ۲) Live Coding");
  return out;
}

function readScenarioSource(teachDir) {
  const scenarioPath = path.join(teachDir, "سناریو-تدریس.md");
  const archivePath = path.join(teachDir, "scenario-source.md");
  if (fs.existsSync(archivePath)) {
    return fs.readFileSync(archivePath, "utf8");
  }
  const raw = fs.readFileSync(scenarioPath, "utf8");
  if (raw.includes("# navigator سناریوی تدریس")) {
    throw new Error(`${teachDir}: missing scenario-source.md (navigator only)`);
  }
  fs.writeFileSync(archivePath, raw, "utf8");
  return raw;
}

function buildHeader(mod, index, titleLine, meta) {
  const n = index + 1;
  const title = titleLine
    .replace(/^## (?:درس|مبحث) [\d۰-۹]+ — /, "")
    .replace(/^## پروژه (?:ترکیبی|جلسه) — /, "");
  const pageLine = meta.page
    ? meta.page.endsWith(".html")
      ? `**صفحه جزوه:** [\`pages/${meta.page}\`](../../pages/${meta.page})`
      : `**مرجع کد:** [\`${meta.page}\`](../../${meta.page})`
    : mod.dir.startsWith("09")
      ? `**مرجع:** [\`index.html\`](../index.html) · [\`css/style.css\`](../css/style.css)`
      : "";
  return `# سناریوی تدریس ${mod.dir.includes("09") || mod.dir.includes("13") ? "مبحث" : "درس"} ${n}: ${title}

${pageLine}
**پیش‌نیاز مفهومی:** ${meta.prereq}
**مدت پیشنهادی:** حدود ${meta.dur} دقیقه
**هدف جلسه:** ${meta.goal}

**چرخه ثابت تدریس (در کل جلسه تکرار کن):**  
مفهوم → کد → نتیجه در مرورگر/Console → سؤال چالشی → راه‌حل

| موضوع | زمان |
|------|------|
| شروع و مسئله واقعی | ۸–۱۰ دقیقه |
| Live Coding | ۲۰–۲۵ دقیقه |
| نمایش و DevTools | ۸ دقیقه |
| سؤالات کلاسی | ۱۰ دقیقه |
| mini-project / جمع‌بندی | ۱۰–۱۵ دقیقه |
| **مجموع** | **~${meta.dur} دقیقه** |

---

`;
}

function buildFooter(mod, index, meta, titleLine) {
  const n = index + 1;
  const isLast = index === mod.files.length - 1;
  const quizPath = mod.dir.includes("09") || mod.dir.includes("13")
    ? `../quizzes/README.md`
    : `../../quizzes/README.md`;
  let bridge = "";
  if (!isLast && mod.pages) {
    const nextPage = mod.pages[index + 1];
    bridge = `→ [\`${nextPage}\`](../../pages/${nextPage}) · سناریو: [\`./${mod.files[index + 1]}\`](./${mod.files[index + 1]})`;
  } else if (!isLast) {
    bridge = `→ [\`./${mod.files[index + 1]}\`](./${mod.files[index + 1]})`;
  } else if (mod.nextModule) {
    bridge = `→ [ماژول بعد](${mod.nextModule})`;
  }

  return `

---

## جمع‌بندی مدرس و سؤالات پایانی

قبل از تمرین، یک سؤال باز از همان درس بپرس و پاسخ راهنما بده (از بخش «سؤال کلاسی» بالا).

**پیام پایانی:** «هدف حفظ تعریف نبود — هدف این بود که بتوانید همین ایده را در پروژه خودتان پیاده کنید.»

---

## تمرین‌ها (ساده → چالشی)

### ساده
1. همان مثال Live را بدون نگاه کردن یک بار دیگر بنویسید.
2. جزوه را باز کنید و خروجی Console/مرورگر را با پیش‌بینی خودتان مقایسه کنید.

### متوسط
3. یک variation کوچک روی مثال کلاس (مقدار دیگر، یک عنصر DOM دیگر).
4. تمرین موضوعی در [\`quizzes/\`](${quizPath}).

### چالشی
5. mini-project انتهای درس یا combined project در quizzes.

**ارجاع:** [\`quizzes/README.md\`](${quizPath})${meta.page && meta.page.endsWith(".html") ? ` · [\`${meta.page}\`](../../pages/${meta.page})` : ""}.

---

## اشتباهات رایج (مرور)

از بخش «اشتباهات رایج» همین درس — در کلاس یکی را عمداً نشان بدهید و اصلاح کنید.

---

## انتقال به ${isLast ? "ماژول بعد" : "درس بعد"}

${isLast ? `«این بخش را بستیم؛ ${mod.nextModule ? "قدم بعد" : "تمرین خانه"} را از quizzes بردارید.»` : `«قدم بعد همان زنجیره پروژه/جزوه است.»`}  
${bridge}
`;
}

function splitSections(content, sectionRe) {
  const lines = content.split("\n");
  const indices = [];
  for (let i = 0; i < lines.length; i++) {
    // Persian (۰-۹) and ASCII digits in headings
    if (
      /^## (?:درس|مبحث) [\d۰-۹]+ — /.test(lines[i]) ||
      /^## پروژه (?:ترکیبی|جلسه) — /.test(lines[i])
    ) {
      indices.push(i);
    }
  }
  const sections = [];
  for (let i = 0; i < indices.length; i++) {
    const start = indices[i];
    const end = i + 1 < indices.length ? indices[i + 1] : lines.length;
    const chunk = lines.slice(start, end).join("\n");
    const titleLine = lines[start];
    sections.push({ titleLine, body: chunk.replace(titleLine, "").trim() });
  }
  return sections;
}

function processModule(mod) {
  const teachDir = path.join(ROOT, mod.dir, "تدریس");
  const dorousDir = path.join(teachDir, "دروس");
  fs.mkdirSync(dorousDir, { recursive: true });

  let raw;
  try {
    raw = readScenarioSource(teachDir);
  } catch (e) {
    console.error(String(e.message));
    return { count: 0, dorousDir, teachDir, mod };
  }
  // Skip preamble before first lesson
  const firstLesson = raw.search(/^## (?:درس|مبحث) [\d۰-۹]+/m);
  const projectSection = raw.search(/^## پروژه (ترکیبی|جلسه)/m);
  let content = raw;
  if (firstLesson >= 0) content = raw.slice(firstLesson);

  const sections = splitSections(content, mod.sectionRe);
  const metaList = typeof mod.meta === "function" ? mod.meta(mod.pages) : mod.meta;

  if (sections.length !== mod.files.length) {
    console.warn(
      `${mod.dir}: section count ${sections.length} !== files ${mod.files.length}`
    );
  }

  const count = Math.min(sections.length, mod.files.length);
  for (let i = 0; i < count; i++) {
    const { titleLine, body } = sections[i];
    const meta = metaList[i] || { dur: 50, goal: "—", prereq: "—", page: mod.pages?.[i] };
    const header = buildHeader(mod, i, titleLine, meta);
    const footer = buildFooter(mod, i, meta, titleLine);
    const normalized = normalizeBody(body);
    const full = header + normalized + footer;
    fs.writeFileSync(path.join(dorousDir, mod.files[i]), full, "utf8");
  }
  console.log(`Wrote ${count} lessons to ${dorousDir}`);
  return { count, dorousDir, teachDir, mod };
}

function writeNavigator(mod, count) {
  const teachDir = path.join(ROOT, mod.dir, "تدریس");
  const lines = [
    `# navigator سناریوی تدریس — ${mod.dir.split("-").slice(1).join(" ")}`,
    "",
    "این فایل **فقط راهنمای مسیر** است. اسکریپت کامل Live Class (دیالوگ فارسی، Live code، سؤالات، تمرین، زمان‌بندی) در پوشه **[`دروس/`](./دروس/)** است — **خلاصهٔ جزوه اینجا تکرار نمی‌شود.**",
    "",
    `- **پدagogy و فهرست:** [\`README.md\`](./README.md)`,
    `- **الگوی طلایی:** [\`../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md\`](../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md)`,
    "",
    "---",
    "",
    "## درس‌ها (به ترتیب)",
    "",
  ];
  for (let i = 0; i < mod.files.length && i < count; i++) {
    const n = i + 1;
    const page = mod.pages?.[i];
    const pagePart = page ? ` — [\`${page}\`](../pages/${page})` : mod.dir.includes("09")
      ? ` — [\`index.html\`](../index.html)`
      : mod.dir.includes("13")
        ? ` — [\`app.js\`](../js/app.js)`
        : "";
    lines.push(`${n}. [\`${mod.files[i]}\`](./دروس/${mod.files[i]})${pagePart}`);
  }
  lines.push("");
  lines.push("---");
  lines.push("");
  if (mod.nextModule) {
    lines.push(`## بعد از ماژول`);
    lines.push("");
    lines.push(`[${mod.nextModule.replace(/\.\.\//g, "")}](${mod.nextModule}) · تمرین: [\`quizzes/\`](../quizzes/README.md)`);
  }
  lines.push("");
  fs.writeFileSync(path.join(teachDir, "سناریو-تدریس.md"), lines.join("\n"), "utf8");
}

function writeReadme(mod, count) {
  const teachDir = path.join(ROOT, mod.dir, "تدریس");
  const moduleTitle = mod.dir;
  const lines = [
    `# تدریس زنده — ${moduleTitle}`,
    "",
    `اسکریپت **کلاس Live** برای [\`${mod.dir}\`](../index.html) — هم‌راستا با جزوه و [\`quizzes/\`](../quizzes/README.md).`,
    "",
    "## رویکرد تدریس — مسئله اول، بعد مفهوم",
    "",
    "اسکریپت کامل هر درس در پوشه [`دروس/`](./دروس/) است. فایل [`سناریو-تدریس.md`](./سناریو-تدریس.md) فقط فهرست و راهنمای مسیر است، نه متن درس.",
    "",
    "| اصل | معنی برای مدرس |",
    "|-----|----------------|",
    "| **مسئله اول** | دکمه بی‌رفتار، لیست قیمت، فرم بدون validation — بعد مفهوم JS/DOM |",
    "| **دیالوگ فارسی** | جمله‌های قابل خواندن سر کلاس — نه bullet telegraphic |",
    "| **چرخه ثابت** | مفهوم → Live code → Console/مرورگر → سؤال → راه‌حل |",
    "| **const / let** | در Live Coding فقط const/let؛ var در جزوه قدیمی — تقلید نکنید |",
    "| **پایان درس** | mini-project + سؤالات + تمرین + اشتباهات + پل درس بعد |",
    "",
    `**الگوی طلایی:** [\`../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md\`](../../02-CSS-مقدماتی/تدریس/دروس/11-عرض-ارتفاع-واحدها.md)`,
    "",
    "## فهرست سناریوها (ترتیب درس)",
    "",
    "| # | سناریو | جزوه |",
    "|---|--------|------|",
  ];
  for (let i = 0; i < mod.files.length && i < count; i++) {
    const page = mod.pages?.[i];
    const col3 = page
      ? `[${page}](../pages/${page})`
      : mod.dir.includes("09")
        ? "[index](../index.html)"
        : mod.dir.includes("13")
          ? "[app.js](../js/app.js)"
          : "—";
    lines.push(`| ${i + 1} | [\`${mod.files[i]}\`](./دروس/${mod.files[i]}) | ${col3} |`);
  }
  lines.push("");
  lines.push("## navigator کوتاه");
  lines.push("");
  lines.push("[`سناریو-تدریس.md`](./سناریو-تدریس.md) — فقط لینk به `دروس/*.md`؛ **محتوای تدریس آنجا تکرار نمی‌شود.**");
  lines.push("");
  fs.writeFileSync(path.join(teachDir, "README.md"), lines.join("\n"), "utf8");
}

for (const mod of MODULES) {
  const { count } = processModule(mod);
  writeNavigator(mod, count);
  writeReadme(mod, count);
}

console.log("Done.");
