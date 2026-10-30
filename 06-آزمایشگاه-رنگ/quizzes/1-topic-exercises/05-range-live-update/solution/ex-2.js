// تمرین ۲ — اسلایدر فام با نام رنگ

const hueInput = document.getElementById("hue");
const hueValue = document.getElementById("hue-value");
const swatch = document.getElementById("swatch");
const colorName = document.getElementById("color-name");
const codeOut = document.getElementById("code-out");

function hueName(hue) {
  if (hue < 20 || hue >= 330) {
    return "قرمز";
  } else if (hue < 45) {
    return "نارنجی";
  } else if (hue < 70) {
    return "زرد";
  } else if (hue < 170) {
    return "سبز";
  } else if (hue < 260) {
    return "آبی";
  } else {
    return "بنفش";
  }
}

function updateHue() {
  const hue = Number(hueInput.value);
  const color = `hsl(${hue}, 80%, 50%)`;

  hueValue.textContent = hue + "°";
  swatch.style.backgroundColor = color;
  colorName.textContent = "این رنگ: " + hueName(hue);
  codeOut.textContent = color;
}

hueInput.addEventListener("input", updateHue);

// بار اول صفحه را با مقدار پیش‌فرض پر می‌کنیم
updateHue();
