/* =========================================================
   ابزار کمکی صفحه‌های آموزشی
   این فایل خروجی console.log مثال‌ها را داخل صفحه (جعبه سیاه Console) هم نشان می‌دهد
   تا لازم نباشد برای هر مثال Console مرورگر (کلید F12) را باز کنید.
   لازم نیست الان کد این فایل را بفهمید؛ در دوره‌های بعد همه این دستورها را یاد می‌گیرید.
   ========================================================= */

const realLog = console.log.bind(console);

/* تبدیل هر مقدار به متن، شبیه چیزی که Console مرورگر نشان می‌دهد */
function formatValue(value) {
  if (typeof value === "string") return value;
  if (typeof value === "function") return "ƒ " + (value.name || "anonymous") + "()";
  if (value instanceof Error) return value.name + ": " + value.message;
  if (value instanceof Date) return value.toString();
  if (value instanceof Map) {
    const items = [...value].map(([k, v]) => formatInner(k) + " => " + formatInner(v));
    return "Map(" + value.size + ") {" + items.join(", ") + "}";
  }
  if (value instanceof Set) {
    return "Set(" + value.size + ") {" + [...value].map(formatInner).join(", ") + "}";
  }
  if (value instanceof Promise) return "Promise {...}";
  if (value instanceof Element) return "<" + value.tagName.toLowerCase() + ">";
  if (typeof value === "object" && value !== null) {
    let text;
    try {
      text = JSON.stringify(value, (k, v) => (v === undefined ? "undefined" : v));
    } catch (e) {
      text = String(value);
    }
    const name = value.constructor && value.constructor.name;
    if (name && name !== "Object" && name !== "Array") return name + " " + text;
    return text;
  }
  return String(value);
}

function formatInner(value) {
  return typeof value === "string" ? '"' + value + '"' : formatValue(value);
}

/* یک تابع log می‌سازد که هم در Console مرورگر و هم در جعبه صفحه می‌نویسد */
function createLog(selector) {
  const box = document.querySelector(selector);
  return function (...values) {
    realLog(...values);
    box.textContent += values.map(formatValue).join(" ") + "\n";
  };
}

/* کد داخل fn را اجرا می‌کند و هر console.log آن را در جعبه selector نشان می‌دهد */
function runIn(selector, fn) {
  const box = document.querySelector(selector);
  box.textContent = "";
  const log = createLog(selector);
  const saved = { log: console.log, error: console.error, warn: console.warn };
  console.log = log;
  console.error = (...v) => log("✖", ...v);
  console.warn = (...v) => log("⚠", ...v);
  try {
    fn();
  } catch (err) {
    log("✖ Uncaught " + err.name + ": " + err.message);
  } finally {
    console.log = saved.log;
    console.error = saved.error;
    console.warn = saved.warn;
  }
}
