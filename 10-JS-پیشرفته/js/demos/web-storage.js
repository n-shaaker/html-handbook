/* ۱۳) ذخیره‌سازی در مرورگر (localStorage) */

runIn("#out-1", function () {
  localStorage.setItem("username", "سارا");
  console.log(localStorage.getItem("username"));
  localStorage.removeItem("username");
  console.log(localStorage.getItem("username"));
  localStorage.setItem("age", 25);
  console.log(typeof localStorage.getItem("age"));
});

runIn("#out-2", function () {
  const settings = { theme: "dark", fontSize: 18, langs: ["fa", "en"] };
  localStorage.setItem("settings", JSON.stringify(settings));
  const saved = JSON.parse(localStorage.getItem("settings"));
  console.log(saved.theme, saved.langs);
});

function loadJSON(key, fallback) {
  const text = localStorage.getItem(key);
  if (text === null) return fallback;
  try {
    return JSON.parse(text);
  } catch (err) {
    console.warn(`داده «${key}» خراب است؛ مقدار پیش‌فرض استفاده شد.`);
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    console.error("ذخیره ناموفق بود:", err.name);
    return false;
  }
}

runIn("#out-3", function () {
  localStorage.setItem("demo-cart", "{خراب");
  console.log(loadJSON("demo-cart", []));
  saveJSON("demo-cart", [{ id: 1, qty: 2 }]);
  console.log(loadJSON("demo-cart", []));
  console.log(loadJSON("not-saved-yet", { theme: "light" }));
});

// حالت شب ماندگار
const themeBox = document.getElementById("theme-box");
const themeBtn = document.getElementById("theme-btn");

function applyTheme(theme) {
  themeBox.classList.toggle("dark", theme === "dark");
  themeBtn.textContent = theme === "dark" ? "☀ حالت روز" : "🌙 حالت شب";
  themeBtn.setAttribute("aria-pressed", theme === "dark");
}

let theme = localStorage.getItem("theme") || "light";
applyTheme(theme);

themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  applyTheme(theme);
});

// یادداشت ماندگار
const note = document.getElementById("note");
const savedMsg = document.getElementById("saved-msg");
const clearBtn = document.getElementById("clear-note");

note.value = localStorage.getItem("note") || "";

note.addEventListener("input", () => {
  localStorage.setItem("note", note.value);
  savedMsg.textContent = "ذخیره شد ✔ " + new Date().toLocaleTimeString("fa-IR");
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("note");
  note.value = "";
  savedMsg.textContent = "";
});

// شمارنده بازدید
const visitText = document.getElementById("visit-text");
let visits = Number(localStorage.getItem("visits")) || 0;
visits++;
localStorage.setItem("visits", visits);
visitText.textContent = `شما ${visits} بار این صفحه را باز کرده‌اید.`;
