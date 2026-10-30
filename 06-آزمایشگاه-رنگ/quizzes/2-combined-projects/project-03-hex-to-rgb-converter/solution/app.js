const form = document.getElementById("hex-form");
const hexInput = document.getElementById("hex-input");
const errorMsg = document.getElementById("error-msg");
const preview = document.getElementById("preview");
const hexOut = document.getElementById("hex-out");
const rgbOut = document.getElementById("rgb-out");
const hslOut = document.getElementById("hsl-out");

// متن کاربر را تمیز می‌کند: "  #F80 " ← "ff8800" ؛ اگر نامعتبر بود null
function normalizeHex(text) {
  let hex = text.trim().toLowerCase();
  if (!/^#?([0-9a-f]{6}|[0-9a-f]{3})$/.test(hex)) {
    return null;
  }
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  return hex;
}

// هر دو رقم هگز یک کانال رنگ است
function hexToRgb(hex) {
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
}

// همان فرمول README قدم به قدم
function rgbToHsl(r, g, b) {
  r = r / 255;
  g = g / 255;
  b = b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  const l = (max + min) / 2;

  // خاکستری: فام و اشباع صفر
  if (d === 0) {
    return { h: 0, s: 0, l: Math.round(l * 100) };
  }

  const s = d / (1 - Math.abs(2 * l - 1));
  let h;
  if (max === r) {
    h = 60 * (((g - b) / d) % 6);
  } else if (max === g) {
    h = 60 * ((b - r) / d + 2);
  } else {
    h = 60 * ((r - g) / d + 4);
  }
  if (h < 0) {
    h = h + 360;
  }

  return { h: Math.round(h) % 360, s: Math.round(s * 100), l: Math.round(l * 100) };
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const hex = normalizeHex(hexInput.value);

  if (hex === null) {
    errorMsg.textContent = "کد هگز معتبر نیست؛ مثال درست: #ff8800 یا f80";
    hexOut.textContent = "—";
    rgbOut.textContent = "—";
    hslOut.textContent = "—";
    preview.style.backgroundColor = "";
    return;
  }

  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  errorMsg.textContent = "";
  hexOut.textContent = "#" + hex;
  rgbOut.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  hslOut.textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  preview.style.backgroundColor = "#" + hex;
});
