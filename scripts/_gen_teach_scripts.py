# -*- coding: utf-8 -*-
from pathlib import Path

def lesson(n, title, page, teach, live, show, q, q_a, mistakes, transition):
    mistakes_md = "\n".join(f"- {m}" for m in mistakes.split("\n") if m.strip())
    return f"""## درس {n} — {title}

**صفحه:** [`{page}`](../pages/{page})

### متن تدریس

{teach}

### Live Coding

{live}

### نمایش

`{page}` — {show}

### سؤال

«{q}» ({q_a})

### اشتباهات

{mistakes_md}

### انتقال

«{transition}»

---

"""

L10 = [
("JavaScript چیست؟", "01-intro.html", "JS زبان سمت مرورگر برای رفتار صفحه است. HTML ساختار و CSS ظاهر؛ JS کلیک، فرم، منو. ES6+: `const`/`let`.", "```javascript\nconsole.log(\"سلام از JS\");\n```", "خروجی Console.", "JS فقط در مرورگر؟", "Node هم هست — focus مرورگر.", "فراموش باز کردن Console\nانتظار compile قبل از run", "کجا JS می‌نویسیم."),
("کجا JS بنویسیم", "02-where-to.html", "inline کم؛ `<script defer src>`؛ modules. `defer` بعد از parse HTML.", "```html\n<script defer src=\"app.js\"></script>\n```\n```javascript\nconsole.log(document.title);\n```", "Network — app.js.", "defer vs async؟", "defer ترتیب؛ async مستقل.", "script بدون defer در head\nمسیر src 404", "console.log"),
("console.log و خروجی", "03-output.html", "`log`, `warn`, `error`, `table` برای debug.", "```javascript\nconst name = \"نارنج\";\nconsole.log(`رستوران ${name}`);\n```", "table چند شیء.", "alert برای debug؟", "Console بهتر.", "log بعد از mutate object\nفقط alert", "syntax"),
("Syntax و comments", "04-syntax.html", "statement، `//` و `/* */`، case-sensitive، numeric separator.", "```javascript\nconst price = 185_000;\n```", "خطای syntax.", "1_000 valid؟", "بله.", "quote mismatch\ncomment unclosed", "متغیرها"),
("متغیر const و let", "05-variables.html", "`const` پیش‌فرض؛ `let` برای reassign. block scope. بدون `var`.", "```javascript\nconst VAT = 0.09;\nlet count = 0;\ncount++;\n```", "block scope.", "const object mutate؟", "reference ثابت.", "const بدون init\nvar در کد جدید", "عملگرها"),
("عملگرها", "06-operators.html", "ریاضی، `===`، منطقی `&& ||`.", "```javascript\nconsole.log(5 + \"5\");\nconsole.log(5 === 5);\n```", "== vs ===.", "== با 1 true؟", "عجیب — ===.", "== با null\n++ در expression", "typeof"),
("typeof و انواع", "07-data-types.html", "string, number, boolean, undefined, null, object.", "```javascript\nconsole.log(typeof \"سلام\", typeof 42);\n```", "typeof null quirk.", "undefined vs null؟", "assign نشده vs عمدی.", "NaN === NaN\narray typeof object", "توابع"),
("توابع", "08-functions.html", "declaration، arrow، return، parameters.", "```javascript\nfunction formatPrice(n) {\n  return n.toLocaleString(\"fa-IR\") + \" تومان\";\n}\n```", "call در Console.", "arrow vs function؟", "hoisting/this بعداً.", "فراموش return\nshadow global", "objects"),
("شیء object", "09-objects.html", "key-value، dot/bracket، mutate.", "```javascript\nconst dish = { name: \"کباب\", price: 420000 };\ndish.price = 430000;\n```", "expand object.", "bracket کی؟", "key dynamic.", "copy reference\nmutate const confusion", "DOM"),
("DOM پایه", "10-dom-basics.html", "querySelector، textContent، classList.", "```javascript\nconst title = document.querySelector(\"h1\");\ntitle.textContent = \"منوی نارنج\";\n```", "live تغییر.", "innerHTML user input؟", "XSS — textContent.", "null crash\ngetElementById typo", "events"),
("رویداد events", "11-events.html", "addEventListener، preventDefault.", "```javascript\nbtn.addEventListener(\"click\", () => console.log(\"click\"));\n```", "click و Enter.", "onclick attr؟", "چند listener.", "duplicate listeners\nthis در arrow", "strings"),
("Strings", "12-strings.html", "length، index، immutable.", "```javascript\nconst s = \"نارنج\";\nconsole.log(s.length);\n```", "index char.", "mutable؟", "خیر.", "emoji length\nindex -1", "string methods"),
("متدهای string", "13-string-methods.html", "trim, includes, slice, split.", "```javascript\n\"  کباب  \".trim();\n\"چلوکباب\".includes(\"کباب\");\n```", "search fake.", "slice vs substring?", "slice negative.", "mutate string\nsplit wrong sep", "template"),
("Template literals", "14-template-literals.html", "backtick، ${}، multiline.", "```javascript\nconst line = `${3} نفر`;\n```", "multiline.", "${} چه می‌گذارد؟", "expression.", "nest backtick\n", "numbers"),
("Numbers", "15-numbers.html", "Number، parseInt، NaN، toFixed.", "```javascript\nNumber(\"42\");\nNumber.isNaN(Number(\"x\"));\n```", "NaN.", "parseInt radix?", "10 بدهید.", "0.1+0.2 float\nBigInt mix", "boolean"),
("Boolean و مقایسه", "16-booleans-comparisons.html", "truthy/falsy، && ||.", "```javascript\nconst ok = name.length >= 3;\n```", "falsy table.", "[] truthy?", "بله.", "== coercion\n!! unreadable", "if/else"),
("if / else", "17-if-else.html", "if else-if else، blocks.", "```javascript\nif (hour >= 19) label = \"شام\";\nelse label = \"بسته\";\n```", "branch.", "ternary?", "کوتاه OK.", "= در if\nno braces style", "switch"),
("switch", "18-switch.html", "=== match، break، default.", "```javascript\nswitch (cat) {\n  case \"veg\": break;\n  default: break;\n}\n```", "fall-through bug.", "switch vs if?", "مقادیر گسسته.", "forget break\ncase sensitive", "for"),
("حلقه for", "19-for-loop.html", "for، for...of، accumulate.", "```javascript\nlet sum = 0;\nfor (const p of [100, 200]) sum += p;\n```", "sum prices.", "for...in array?", "keys — for...of.", "infinite loop\nvar in for", "while"),
("while و break", "20-while-break.html", "while، break، continue.", "```javascript\nlet n = 0;\nwhile (n < 3) { console.log(n); n++; }\n```", "break demo.", "while vs for?", "counter known → for.", "forget n++\ncontinue skip logic", "پروژه"),
]

def write_chapter(path, title, lessons, footer):
    parts = [f"# سناریو تدریس زنده — {title}\n\n**پیشنهاد:** ۳–۴ جلسه · **جزوه:** [`index.html`](../index.html)\n\n---\n\n"]
    for i, row in enumerate(lessons, 1):
        parts.append(lesson(i, *row))
    parts.append(footer)
    Path(path).write_text("".join(parts), encoding="utf-8")

write_chapter(
    r"c:\Users\Nasrin\Desktop\html-handbook\10-JS-پایه\تدریس\سناریو-تدریس.md",
    "JavaScript پایه",
    L10,
    """## پروژه جلسه — practice / fix bugs

**مدت:** ۳۰–۴۵ د · [`pages/21-practice.html`](../pages/21-practice.html)

### متن تدریس

ترکیب function، if، DOM — tip calculator یا [`project-06-fix-the-bugs`](../quizzes/2-combined-projects/project-06-fix-the-bugs/README.md).

### Live Coding

`calcTip(bill, percent)` + `#result` با textContent.

### نمایش

21-practice.html

---

## جمع‌بندی

| موضوع | کلید |
|--------|------|
| متغیر | const / let |
| مقایسه | === |
| DOM | querySelector |
| جریان | if، for...of |

**بعدی:** [11 JS میانی](../../11-JS-میانی/)

---

## تمرین

1. [`pages/21-practice.html`](../pages/21-practice.html)
2. [`quizzes/`](../quizzes/README.md)

**معیار:** بدون var؛ Console بدون خطا.
""",
)

L11 = [
("آرایه‌ها", "01-arrays.html", "[]، index، length، push/pop.", "```javascript\nconst menu = [\"کباب\", \"جوجه\"];\nmenu.push(\"قیمه\");\n```", "mutate array.", "copy assign?", "shallow ref.", "sparse holes\nnegative index", "array methods"),
("map filter reduce", "02-array-methods.html", "map، filter، reduce.", "```javascript\nprices.map((p) => p * 1.09);\nprices.reduce((s, p) => s + p, 0);\n```", "chain.", "for vs map?", "new array.", "no return in callback\nmutate in map", "search sort"),
("find sort", "03-array-search-sort.html", "find، sort comparator.", "```javascript\nmenu.sort((a, b) => a.price - b.price);\n```", "numeric sort.", "default sort?", "lex numbers wrong.", "sort surprise\nfind vs filter", "iteration"),
("forEach", "04-array-iteration.html", "forEach، some، every.", "```javascript\nmenu.forEach((d) => console.log(d.name));\n```", "some/every.", "forEach return?", "undefined.", "async forEach pitfall\nbreak in forEach", "Date"),
("Date", "05-dates.html", "Date، getHours، toLocaleDateString fa-IR.", "```javascript\nnew Date().toLocaleDateString(\"fa-IR\");\n```", "open status.", "getMonth?", "0-based.", "UTC assume\nparse ambiguous", "Math"),
("Math random", "06-math-random.html", "floor random range، clamp.", "```javascript\nMath.floor(Math.random() * 6) + 1;\n```", "dice.", "crypto random?", "not secure.", "off-by-one\nround vs floor", "scope"),
("Scope", "07-scope.html", "block، lexical، shadow.", "```javascript\n{ const x = 1; }\n```", "TDZ demo.", "var scope?", "avoid var.", "window leak\nshadow param", "hoisting"),
("Hoisting strict", "08-hoisting-strict.html", "use strict، TDZ.", "```javascript\n\"use strict\";\nfunction hoisted() {}\n```", "error before let.", "arrow hoist?", "no.", "sloppy mix\ndelete var strict", "arrow"),
("Arrow functions", "09-arrow-functions.html", "syntax، implicit return.", "```javascript\nconst sum = (a, b) => a + b;\n```", "vs function.", "method arrow?", "this lexical.", "return object ()\nconstructor arrow", "this"),
("this", "10-this.html", "method this، arrow lexical.", "```javascript\nconst c = { n: 0, inc() { this.n++; } };\n```", "lost this.", "global this?", "undefined strict.", "bind forget\narrow method wrong", "destructuring"),
("Destructuring spread", "11-destructuring-spread.html", "destructure، ...rest spread.", "```javascript\nconst { name, price } = dish;\nconst copy = { ...dish };\n```", "swap vars.", "deep clone?", "shallow.", "rest not last\nundefined default", "JSON"),
("JSON", "12-json.html", "stringify parse.", "```javascript\nJSON.parse(JSON.stringify({ a: 1 }));\n```", "invalid JSON catch.", "Date in JSON?", "ISO string.", "parse no try\nundefined dropped", "errors"),
("Errors", "13-errors.html", "try/catch، throw Error.", "```javascript\ntry { JSON.parse(\"{\"); } catch (e) { console.error(e.message); }\n```", "stack.", "empty catch?", "hide bugs.", "throw string\nfinally return", "DOM select"),
("DOM selecting", "14-dom-selecting.html", "querySelectorAll، closest، optional chaining.", "```javascript\ndocument.querySelectorAll(\".dish\");\nbtn?.closest(\".dish\");\n```", "NodeList.", "live list?", "often static.", "bad selector\nquery in loop", "DOM change"),
("DOM changing", "15-dom-changing.html", "createElement append.", "```javascript\nconst li = document.createElement(\"li\");\nli.textContent = \"چای\";\nlist.append(li);\n```", "render list.", "innerHTML?", "createElement safer.", "append vs appendChild\nremove leak", "DOM events"),
("DOM events", "16-dom-events.html", "input، submit، bubble.", "```javascript\nform.addEventListener(\"submit\", (e) => e.preventDefault());\n```", "live input.", "capture?", "bubble default.", "duplicate listeners\nwrong preventDefault", "elements"),
("DOM elements", "17-dom-elements.html", "template، cloneNode.", "```javascript\nconst node = tpl.content.cloneNode(true);\n```", "template.", "Fragment?", "batch reflow.", "deep clone cost\n", "forms"),
("Forms JS", "18-forms.html", "FormData، checkValidity.", "```javascript\nnew FormData(form).get(\"phone\");\n```", "reportValidity.", "FormData vs manual?", "files too.", "missing name\ncheckbox absent", "debugging"),
("Debugging", "19-debugging-intro.html", "breakpoint، debugger.", "```javascript\nfunction sum(a) { debugger; return a.reduce((s,n)=>s+n,0); }\n```", "Sources.", "log enough?", "state needs bp.", "debugger in prod\n", "slider"),
("Image slider", "20-image-slider.html", "index state، next/prev.", "```javascript\nlet i = 0;\nfunction show() { img.src = imgs[i]; }\n```", "keyboard.", "interval cleanup?", "clearInterval.", "stack intervals\nno alt", "UI patterns"),
("UI patterns", "21-ui-patterns.html", "tabs، modal، class toggle.", "```javascript\ntabs.forEach((t) => (t.hidden = t.id !== id));\n```", "modal.", "hidden vs aria?", "both sometimes.", "no focus trap\ndiv as button", "todo"),
]

write_chapter(
    r"c:\Users\Nasrin\Desktop\html-handbook\11-JS-میانی\تدریس\سناریو-تدریس.md",
    "JavaScript میانی",
    L11,
    """## پروژه جلسه — Todo List

**مدت:** ۴۵–۶۰ د · [`pages/22-practice.html`](../pages/22-practice.html)

### متن تدریس

state آرایه، render با createElement، add/remove، filter done.

### Live Coding

`tasks[]` + `renderTasks()` با `replaceChildren`.

### نمایش

22-practice.html

---

## جمع‌بندی

| موضوع | کلید |
|--------|------|
| Array | map/filter/reduce |
| DOM | createElement |
| Forms | FormData |

**بعدی:** [12 JS پیشرفته](../../12-JS-پیشرفته/)

---

## تمرین

1. [`pages/22-practice.html`](../pages/22-practice.html)
2. [`quizzes/`](../quizzes/README.md)

**معیار:** render از state؛ بدون innerHTML از input.
""",
)

L12 = [
("Params rest spread", "01-function-params.html", "default، rest، spread call.", "```javascript\nfunction sum(...n) { return n.reduce((a,b)=>a+b,0); }\n```", "rest.", "arguments?", "use rest.", "mutate rest\n", "closures"),
("Closures", "02-closures.html", "lexical env، factory.", "```javascript\nfunction makeCounter() { let n=0; return ()=>++n; }\n```", "two counters.", "memory leak?", "DOM refs.", "var in loop old\nover-closure", "call bind"),
("call apply bind", "03-call-apply-bind.html", "explicit this.", "```javascript\nfmt.call({ price: 100 });\n```", "bind handler.", "arrow bind?", "no.", "forget new bound\n", "classes"),
("Classes", "04-classes.html", "class، constructor، methods.", "```javascript\nclass Dish { constructor(n,p){ this.name=n; this.price=p; } }\n```", "instanceof.", "hoist class?", "TDZ.", "arrow field confusion\n", "inheritance"),
("Inheritance", "05-inheritance.html", "extends super.", "```javascript\nclass Veg extends Dish { constructor(n,p){ super(n,p); this.veg=true; } }\n```", "super first.", "composition?", "often better.", "forget super()\n", "Set Map"),
("Set Map", "06-sets-maps.html", "unique، key any.", "```javascript\nnew Set([1,1,2]);\nnew Map([[\"a\",1]]);\n```", "dedupe.", "Map object key?", "by ref.", "key ref new\n", "timing"),
("Timing", "07-timing.html", "setTimeout، debounce.", "```javascript\nclearTimeout(t); t=setTimeout(fn,300);\n```", "toast link.", "0ms order?", "after sync.", "interval no clear\n", "callbacks"),
("Callbacks", "08-callbacks.html", "async callback style.", "```javascript\nload((err,data)=>console.log(data));\n```", "nest 3.", "sync callback?", "still ordered.", "call twice\n", "promises"),
("Promises", "09-promises.html", "then catch chain.", "```javascript\nPromise.resolve(1).then(v=>v+1);\n```", "states.", "then returns?", "Promise.", "unhandled rejection\n", "async await"),
("async await", "10-async-await.html", "async try await.", "```javascript\nasync function load(){ const r=await fetch(u); return r.json(); }\n```", "pause not block UI.", "await non-async?", "error.", "no catch\nsequential slow", "fetch"),
("fetch", "11-fetch.html", "GET، res.ok.", "```javascript\nconst res=await fetch(url); if(!res.ok) throw new Error(res.status);\n```", "Network 404.", "fetch throws 404?", "no.", "file CORS\nno timeout", "modules"),
("Modules", "12-modules.html", "import export type module.", "```javascript\nexport function add() {}\nimport { add } from \"./m.js\";\n```", "Live Server.", "global?", "module scope.", "path .js\ncircular", "storage"),
("Web Storage", "13-web-storage.html", "localStorage JSON.", "```javascript\nlocalStorage.setItem(\"k\", JSON.stringify(o));\n```", "Application tab.", "storage event?", "cross-tab.", "quota\nsecrets", "regexp"),
("RegExp", "14-regexp.html", "test phone 09.", "```javascript\n/^09\\d{9}$/.test(phone);\n```", "form 13.", "pattern attr?", "align.", "catastrophic backtrack\n^$", "delegation"),
("Delegation", "15-event-delegation.html", "closest on parent.", "```javascript\nlist.addEventListener(\"click\",(e)=>{ const b=e.target.closest(\".btn\"); if(!b)return; });\n```", "app.js main.", "document delegate?", "OK careful.", "closest null\n", "modern syntax"),
("Modern syntax", "16-modern-syntax.html", "?. ?? ||=.", "```javascript\ndish?.price ?? 0;\n```", "short-circuit.", "?? vs ||?", "0 vs falsy.", "over chain\n", "debugging"),
("Debugging pro", "17-debugging.html", "conditional bp، logpoint.", "DevTools conditional breakpoint.", "Performance.", "log vs bp?", "snapshot.", "heavy watch\n", "a11y"),
("a11y JS", "18-a11y-js.html", "aria-expanded، focus.", "```javascript\nbtn.setAttribute(\"aria-expanded\", String(open));\n```", "Escape panel.", "div button?", "keyboard.", "focus loss\n", "deploy"),
("Deploy", "19-deploy.html", "static host، paths، cache.", "Checklist assets relative.", "Netlify/GHP slide.", "module deploy?", "same origin.", "absolute paths\n", "shop practice"),
]

write_chapter(
    r"c:\Users\Nasrin\Desktop\html-handbook\12-JS-پیشرفته\تدریس\سناریو-تدریس.md",
    "JavaScript پیشرفته",
    L12,
    """## درس ۲۰ — فروشگاه (practice)

**صفحه:** [`pages/20-practice.html`](../pages/20-practice.html)

### متن تدریس

سبد، storage، format — جمع مباحث 12.

### Live Coding

الگوی storage/delegation مثل [`13/app.js`](../../13-پروژه-منوی-رستوران-JS/js/app.js) بدون کپی.

### نمایش

20-practice.html

### سؤال

«کجا async لازم است؟» (fetch.)

### اشتباهات

state پراکنده\nبدون render مرکزی

### انتقال

«13 پروژه JS.»

---

## پروژه جلسه — shop practice

**مدت:** ۶۰ د · [`pages/20-practice.html`](../pages/20-practice.html)

---

## جمع‌بندی

| موضوع | کلید |
|--------|------|
| Async | Promise → async/await |
| Storage | JSON |
| UX | delegation، a11y |

**بعدی:** [13 منوی رستوران JS](../../13-پروژه-منوی-رستوران-JS/)

---

## تمرین

1. [`pages/20-practice.html`](../pages/20-practice.html)
2. [`quizzes/`](../quizzes/README.md)

**معیار:** fetch error؛ storage try/catch.
""",
)

print("done")
