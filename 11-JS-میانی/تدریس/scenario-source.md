# سناریو تدریس زنده — JavaScript میانی

**پیشنهاد:** ۳–۴ جلسه · **جزوه:** [`index.html`](../index.html)

---

## درس 1 — آرایه‌ها

**صفحه:** [`01-arrays.html`](../pages/01-arrays.html)

### متن تدریس

[]، index، length، push/pop.

### Live Coding

```javascript
const menu = ["کباب", "جوجه"];
menu.push("قیمه");
```

### نمایش

`01-arrays.html` — mutate array.

### سؤال

«copy assign?» (shallow ref.)

### اشتباهات

- sparse holes
- negative index

### انتقال

«array methods»

---

## درس 2 — map filter reduce

**صفحه:** [`02-array-methods.html`](../pages/02-array-methods.html)

### متن تدریس

map، filter، reduce.

### Live Coding

```javascript
prices.map((p) => p * 1.09);
prices.reduce((s, p) => s + p, 0);
```

### نمایش

`02-array-methods.html` — chain.

### سؤال

«for vs map?» (new array.)

### اشتباهات

- no return in callback
- mutate in map

### انتقال

«search sort»

---

## درس 3 — find sort

**صفحه:** [`03-array-search-sort.html`](../pages/03-array-search-sort.html)

### متن تدریس

find، sort comparator.

### Live Coding

```javascript
menu.sort((a, b) => a.price - b.price);
```

### نمایش

`03-array-search-sort.html` — numeric sort.

### سؤال

«default sort?» (lex numbers wrong.)

### اشتباهات

- sort surprise
- find vs filter

### انتقال

«iteration»

---

## درس 4 — forEach

**صفحه:** [`04-array-iteration.html`](../pages/04-array-iteration.html)

### متن تدریس

forEach، some، every.

### Live Coding

```javascript
menu.forEach((d) => console.log(d.name));
```

### نمایش

`04-array-iteration.html` — some/every.

### سؤال

«forEach return?» (undefined.)

### اشتباهات

- async forEach pitfall
- break in forEach

### انتقال

«Date»

---

## درس 5 — Date

**صفحه:** [`05-dates.html`](../pages/05-dates.html)

### متن تدریس

Date، getHours، toLocaleDateString fa-IR.

### Live Coding

```javascript
new Date().toLocaleDateString("fa-IR");
```

### نمایش

`05-dates.html` — open status.

### سؤال

«getMonth?» (0-based.)

### اشتباهات

- UTC assume
- parse ambiguous

### انتقال

«Math»

---

## درس 6 — Math random

**صفحه:** [`06-math-random.html`](../pages/06-math-random.html)

### متن تدریس

floor random range، clamp.

### Live Coding

```javascript
Math.floor(Math.random() * 6) + 1;
```

### نمایش

`06-math-random.html` — dice.

### سؤال

«crypto random?» (not secure.)

### اشتباهات

- off-by-one
- round vs floor

### انتقال

«scope»

---

## درس 7 — Scope

**صفحه:** [`07-scope.html`](../pages/07-scope.html)

### متن تدریس

block، lexical، shadow.

### Live Coding

```javascript
{ const x = 1; }
```

### نمایش

`07-scope.html` — TDZ demo.

### سؤال

«var scope?» (avoid var.)

### اشتباهات

- window leak
- shadow param

### انتقال

«hoisting»

---

## درس 8 — Hoisting strict

**صفحه:** [`08-hoisting-strict.html`](../pages/08-hoisting-strict.html)

### متن تدریس

use strict، TDZ.

### Live Coding

```javascript
"use strict";
function hoisted() {}
```

### نمایش

`08-hoisting-strict.html` — error before let.

### سؤال

«arrow hoist?» (no.)

### اشتباهات

- sloppy mix
- delete var strict

### انتقال

«arrow»

---

## درس 9 — Arrow functions

**صفحه:** [`09-arrow-functions.html`](../pages/09-arrow-functions.html)

### متن تدریس

syntax، implicit return.

### Live Coding

```javascript
const sum = (a, b) => a + b;
```

### نمایش

`09-arrow-functions.html` — vs function.

### سؤال

«method arrow?» (this lexical.)

### اشتباهات

- return object ()
- constructor arrow

### انتقال

«this»

---

## درس 10 — this

**صفحه:** [`10-this.html`](../pages/10-this.html)

### متن تدریس

method this، arrow lexical.

### Live Coding

```javascript
const c = { n: 0, inc() { this.n++; } };
```

### نمایش

`10-this.html` — lost this.

### سؤال

«global this?» (undefined strict.)

### اشتباهات

- bind forget
- arrow method wrong

### انتقال

«destructuring»

---

## درس 11 — Destructuring spread

**صفحه:** [`11-destructuring-spread.html`](../pages/11-destructuring-spread.html)

### متن تدریس

destructure، ...rest spread.

### Live Coding

```javascript
const { name, price } = dish;
const copy = { ...dish };
```

### نمایش

`11-destructuring-spread.html` — swap vars.

### سؤال

«deep clone?» (shallow.)

### اشتباهات

- rest not last
- undefined default

### انتقال

«JSON»

---

## درس 12 — JSON

**صفحه:** [`12-json.html`](../pages/12-json.html)

### متن تدریس

stringify parse.

### Live Coding

```javascript
JSON.parse(JSON.stringify({ a: 1 }));
```

### نمایش

`12-json.html` — invalid JSON catch.

### سؤال

«Date in JSON?» (ISO string.)

### اشتباهات

- parse no try
- undefined dropped

### انتقال

«errors»

---

## درس 13 — Errors

**صفحه:** [`13-errors.html`](../pages/13-errors.html)

### متن تدریس

try/catch، throw Error.

### Live Coding

```javascript
try { JSON.parse("{"); } catch (e) { console.error(e.message); }
```

### نمایش

`13-errors.html` — stack.

### سؤال

«empty catch?» (hide bugs.)

### اشتباهات

- throw string
- finally return

### انتقال

«DOM select»

---

## درس 14 — DOM selecting

**صفحه:** [`14-dom-selecting.html`](../pages/14-dom-selecting.html)

### متن تدریس

querySelectorAll، closest، optional chaining.

### Live Coding

```javascript
document.querySelectorAll(".dish");
btn?.closest(".dish");
```

### نمایش

`14-dom-selecting.html` — NodeList.

### سؤال

«live list?» (often static.)

### اشتباهات

- bad selector
- query in loop

### انتقال

«DOM change»

---

## درس 15 — DOM changing

**صفحه:** [`15-dom-changing.html`](../pages/15-dom-changing.html)

### متن تدریس

createElement append.

### Live Coding

```javascript
const li = document.createElement("li");
li.textContent = "چای";
list.append(li);
```

### نمایش

`15-dom-changing.html` — render list.

### سؤال

«innerHTML?» (createElement safer.)

### اشتباهات

- append vs appendChild
- remove leak

### انتقال

«DOM events»

---

## درس 16 — DOM events

**صفحه:** [`16-dom-events.html`](../pages/16-dom-events.html)

### متن تدریس

input، submit، bubble.

### Live Coding

```javascript
form.addEventListener("submit", (e) => e.preventDefault());
```

### نمایش

`16-dom-events.html` — live input.

### سؤال

«capture?» (bubble default.)

### اشتباهات

- duplicate listeners
- wrong preventDefault

### انتقال

«elements»

---

## درس 17 — DOM elements

**صفحه:** [`17-dom-elements.html`](../pages/17-dom-elements.html)

### متن تدریس

template، cloneNode.

### Live Coding

```javascript
const node = tpl.content.cloneNode(true);
```

### نمایش

`17-dom-elements.html` — template.

### سؤال

«Fragment?» (batch reflow.)

### اشتباهات

- deep clone cost

### انتقال

«forms»

---

## درس 18 — Forms JS

**صفحه:** [`18-forms.html`](../pages/18-forms.html)

### متن تدریس

FormData، checkValidity.

### Live Coding

```javascript
new FormData(form).get("phone");
```

### نمایش

`18-forms.html` — reportValidity.

### سؤال

«FormData vs manual?» (files too.)

### اشتباهات

- missing name
- checkbox absent

### انتقال

«debugging»

---

## درس 19 — Debugging

**صفحه:** [`19-debugging-intro.html`](../pages/19-debugging-intro.html)

### متن تدریس

breakpoint، debugger.

### Live Coding

```javascript
function sum(a) { debugger; return a.reduce((s,n)=>s+n,0); }
```

### نمایش

`19-debugging-intro.html` — Sources.

### سؤال

«log enough?» (state needs bp.)

### اشتباهات

- debugger in prod

### انتقال

«slider»

---

## درس 20 — Image slider

**صفحه:** [`20-image-slider.html`](../pages/20-image-slider.html)

### متن تدریس

index state، next/prev.

### Live Coding

```javascript
let i = 0;
function show() { img.src = imgs[i]; }
```

### نمایش

`20-image-slider.html` — keyboard.

### سؤال

«interval cleanup?» (clearInterval.)

### اشتباهات

- stack intervals
- no alt

### انتقال

«UI patterns»

---

## درس 21 — UI patterns

**صفحه:** [`21-ui-patterns.html`](../pages/21-ui-patterns.html)

### متن تدریس

tabs، modal، class toggle.

### Live Coding

```javascript
tabs.forEach((t) => (t.hidden = t.id !== id));
```

### نمایش

`21-ui-patterns.html` — modal.

### سؤال

«hidden vs aria?» (both sometimes.)

### اشتباهات

- no focus trap
- div as button

### انتقال

«todo»

---

## پروژه جلسه — Todo List

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
