# سناریو تدریس زنده — JavaScript پیشرفته

**پیشنهاد:** ۳–۴ جلسه · **جزوه:** [`index.html`](../index.html)

---

## درس 1 — Params rest spread

**صفحه:** [`01-function-params.html`](../pages/01-function-params.html)

### متن تدریس

default، rest، spread call.

### Live Coding

```javascript
function sum(...n) { return n.reduce((a,b)=>a+b,0); }
```

### نمایش

`01-function-params.html` — rest.

### سؤال

«arguments?» (use rest.)

### اشتباهات

- mutate rest

### انتقال

«closures»

---

## درس 2 — Closures

**صفحه:** [`02-closures.html`](../pages/02-closures.html)

### متن تدریس

lexical env، factory.

### Live Coding

```javascript
function makeCounter() { let n=0; return ()=>++n; }
```

### نمایش

`02-closures.html` — two counters.

### سؤال

«memory leak?» (DOM refs.)

### اشتباهات

- var in loop old
- over-closure

### انتقال

«call bind»

---

## درس 3 — call apply bind

**صفحه:** [`03-call-apply-bind.html`](../pages/03-call-apply-bind.html)

### متن تدریس

explicit this.

### Live Coding

```javascript
fmt.call({ price: 100 });
```

### نمایش

`03-call-apply-bind.html` — bind handler.

### سؤال

«arrow bind?» (no.)

### اشتباهات

- forget new bound

### انتقال

«classes»

---

## درس 4 — Classes

**صفحه:** [`04-classes.html`](../pages/04-classes.html)

### متن تدریس

class، constructor، methods.

### Live Coding

```javascript
class Dish { constructor(n,p){ this.name=n; this.price=p; } }
```

### نمایش

`04-classes.html` — instanceof.

### سؤال

«hoist class?» (TDZ.)

### اشتباهات

- arrow field confusion

### انتقال

«inheritance»

---

## درس 5 — Inheritance

**صفحه:** [`05-inheritance.html`](../pages/05-inheritance.html)

### متن تدریس

extends super.

### Live Coding

```javascript
class Veg extends Dish { constructor(n,p){ super(n,p); this.veg=true; } }
```

### نمایش

`05-inheritance.html` — super first.

### سؤال

«composition?» (often better.)

### اشتباهات

- forget super()

### انتقال

«Set Map»

---

## درس 6 — Set Map

**صفحه:** [`06-sets-maps.html`](../pages/06-sets-maps.html)

### متن تدریس

unique، key any.

### Live Coding

```javascript
new Set([1,1,2]);
new Map([["a",1]]);
```

### نمایش

`06-sets-maps.html` — dedupe.

### سؤال

«Map object key?» (by ref.)

### اشتباهات

- key ref new

### انتقال

«timing»

---

## درس 7 — Timing

**صفحه:** [`07-timing.html`](../pages/07-timing.html)

### متن تدریس

setTimeout، debounce.

### Live Coding

```javascript
clearTimeout(t); t=setTimeout(fn,300);
```

### نمایش

`07-timing.html` — toast link.

### سؤال

«0ms order?» (after sync.)

### اشتباهات

- interval no clear

### انتقال

«callbacks»

---

## درس 8 — Callbacks

**صفحه:** [`08-callbacks.html`](../pages/08-callbacks.html)

### متن تدریس

async callback style.

### Live Coding

```javascript
load((err,data)=>console.log(data));
```

### نمایش

`08-callbacks.html` — nest 3.

### سؤال

«sync callback?» (still ordered.)

### اشتباهات

- call twice

### انتقال

«promises»

---

## درس 9 — Promises

**صفحه:** [`09-promises.html`](../pages/09-promises.html)

### متن تدریس

then catch chain.

### Live Coding

```javascript
Promise.resolve(1).then(v=>v+1);
```

### نمایش

`09-promises.html` — states.

### سؤال

«then returns?» (Promise.)

### اشتباهات

- unhandled rejection

### انتقال

«async await»

---

## درس 10 — async await

**صفحه:** [`10-async-await.html`](../pages/10-async-await.html)

### متن تدریس

async try await.

### Live Coding

```javascript
async function load(){ const r=await fetch(u); return r.json(); }
```

### نمایش

`10-async-await.html` — pause not block UI.

### سؤال

«await non-async?» (error.)

### اشتباهات

- no catch
- sequential slow

### انتقال

«fetch»

---

## درس 11 — fetch

**صفحه:** [`11-fetch.html`](../pages/11-fetch.html)

### متن تدریس

GET، res.ok.

### Live Coding

```javascript
const res=await fetch(url); if(!res.ok) throw new Error(res.status);
```

### نمایش

`11-fetch.html` — Network 404.

### سؤال

«fetch throws 404?» (no.)

### اشتباهات

- file CORS
- no timeout

### انتقال

«modules»

---

## درس 12 — Modules

**صفحه:** [`12-modules.html`](../pages/12-modules.html)

### متن تدریس

import export type module.

### Live Coding

```javascript
export function add() {}
import { add } from "./m.js";
```

### نمایش

`12-modules.html` — Live Server.

### سؤال

«global?» (module scope.)

### اشتباهات

- path .js
- circular

### انتقال

«storage»

---

## درس 13 — Web Storage

**صفحه:** [`13-web-storage.html`](../pages/13-web-storage.html)

### متن تدریس

localStorage JSON.

### Live Coding

```javascript
localStorage.setItem("k", JSON.stringify(o));
```

### نمایش

`13-web-storage.html` — Application tab.

### سؤال

«storage event?» (cross-tab.)

### اشتباهات

- quota
- secrets

### انتقال

«regexp»

---

## درس 14 — RegExp

**صفحه:** [`14-regexp.html`](../pages/14-regexp.html)

### متن تدریس

test phone 09.

### Live Coding

```javascript
/^09\d{9}$/.test(phone);
```

### نمایش

`14-regexp.html` — form 13.

### سؤال

«pattern attr?» (align.)

### اشتباهات

- catastrophic backtrack
- ^$

### انتقال

«delegation»

---

## درس 15 — Delegation

**صفحه:** [`15-event-delegation.html`](../pages/15-event-delegation.html)

### متن تدریس

closest on parent.

### Live Coding

```javascript
list.addEventListener("click",(e)=>{ const b=e.target.closest(".btn"); if(!b)return; });
```

### نمایش

`15-event-delegation.html` — app.js main.

### سؤال

«document delegate?» (OK careful.)

### اشتباهات

- closest null

### انتقال

«modern syntax»

---

## درس 16 — Modern syntax

**صفحه:** [`16-modern-syntax.html`](../pages/16-modern-syntax.html)

### متن تدریس

?. ?? ||=.

### Live Coding

```javascript
dish?.price ?? 0;
```

### نمایش

`16-modern-syntax.html` — short-circuit.

### سؤال

«?? vs ||?» (0 vs falsy.)

### اشتباهات

- over chain

### انتقال

«debugging»

---

## درس 17 — Debugging pro

**صفحه:** [`17-debugging.html`](../pages/17-debugging.html)

### متن تدریس

conditional bp، logpoint.

### Live Coding

DevTools conditional breakpoint.

### نمایش

`17-debugging.html` — Performance.

### سؤال

«log vs bp?» (snapshot.)

### اشتباهات

- heavy watch

### انتقال

«a11y»

---

## درس 18 — a11y JS

**صفحه:** [`18-a11y-js.html`](../pages/18-a11y-js.html)

### متن تدریس

aria-expanded، focus.

### Live Coding

```javascript
btn.setAttribute("aria-expanded", String(open));
```

### نمایش

`18-a11y-js.html` — Escape panel.

### سؤال

«div button?» (keyboard.)

### اشتباهات

- focus loss

### انتقال

«deploy»

---

## درس 19 — Deploy

**صفحه:** [`19-deploy.html`](../pages/19-deploy.html)

### متن تدریس

static host، paths، cache.

### Live Coding

Checklist assets relative.

### نمایش

`19-deploy.html` — Netlify/GHP slide.

### سؤال

«module deploy?» (same origin.)

### اشتباهات

- absolute paths

### انتقال

«shop practice»

---

## درس ۲۰ — فروشگاه (practice)

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

state پراکنده
بدون render مرکزی

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
