// ---------- پنل HSL ----------
const hueInput = document.getElementById("hue");
const satInput = document.getElementById("sat");
const lightInput = document.getElementById("light");
const hslSwatch = document.getElementById("hsl-swatch");
const hslCode = document.getElementById("hsl-code");

function updateHsl() {
  const h = hueInput.value;
  const s = satInput.value;
  const l = lightInput.value;

  // عدد کنار هر اسلایدر
  document.getElementById("hue-value").textContent = h + "°";
  document.getElementById("sat-value").textContent = s + "%";
  document.getElementById("light-value").textContent = l + "%";

  const color = `hsl(${h}, ${s}%, ${l}%)`;
  hslSwatch.style.backgroundColor = color;
  hslCode.textContent = `.sw-hsl {\n  background-color: ${color};\n}`;
}

hueInput.addEventListener("input", updateHsl);
satInput.addEventListener("input", updateHsl);
lightInput.addEventListener("input", updateHsl);

// ---------- پنل RGB ----------
const rInput = document.getElementById("r");
const gInput = document.getElementById("g");
const bInput = document.getElementById("b");
const rgbSwatch = document.getElementById("rgb-swatch");
const rgbCode = document.getElementById("rgb-code");
const hexOut = document.getElementById("hex-out");

// یک عدد ۰ تا ۲۵۵ را به دو رقم هگز تبدیل می‌کند (مثلاً 136 → "88")
function toHex(number) {
  return number.toString(16).padStart(2, "0");
}

function updateRgb() {
  const r = Number(rInput.value);
  const g = Number(gInput.value);
  const b = Number(bInput.value);

  document.getElementById("r-value").textContent = r;
  document.getElementById("g-value").textContent = g;
  document.getElementById("b-value").textContent = b;

  const color = `rgb(${r}, ${g}, ${b})`;
  rgbSwatch.style.backgroundColor = color;
  rgbCode.textContent = `.sw-rgb {\n  background-color: ${color};\n}`;
  hexOut.textContent = "#" + toHex(r) + toHex(g) + toHex(b);
}

rInput.addEventListener("input", updateRgb);
gInput.addEventListener("input", updateRgb);
bInput.addEventListener("input", updateRgb);

// بار اول صفحه را با مقدارهای پیش‌فرض پر می‌کنیم
updateHsl();
updateRgb();
