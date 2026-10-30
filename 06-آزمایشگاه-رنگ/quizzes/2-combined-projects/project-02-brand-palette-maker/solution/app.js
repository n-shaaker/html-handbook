/* ===== عنصرهای صفحه ===== */

const nameInput = document.getElementById("brand-name");
const hueInput = document.getElementById("hue");
const satInput = document.getElementById("sat");
const hueValue = document.getElementById("hue-value");
const satValue = document.getElementById("sat-value");
const brandTitle = document.getElementById("brand-title");
const codeOut = document.getElementById("code-out");

const shade90 = document.getElementById("shade-90");
const shade75 = document.getElementById("shade-75");
const shade50 = document.getElementById("shade-50");
const shade35 = document.getElementById("shade-35");
const shade20 = document.getElementById("shade-20");


/* ===== تابع‌های کوچک ===== */

function hslText(h, s, l) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function paintShade(shade, h, s, l) {
  shade.style.backgroundColor = hslText(h, s, l);
  shade.textContent = hslText(h, s, l);

  // روی سایه‌های روشن متن تیره، روی سایه‌های تیره متن سفید
  if (l >= 60) {
    shade.style.color = hslText(h, s, 15);
  } else {
    shade.style.color = "hsl(0, 0%, 100%)";
  }
}

function updatePalette() {
  const h = Number(hueInput.value);
  const s = Number(satInput.value);

  hueValue.textContent = h + "°";
  satValue.textContent = s + "%";

  paintShade(shade90, h, s, 90);
  paintShade(shade75, h, s, 75);
  paintShade(shade50, h, s, 50);
  paintShade(shade35, h, s, 35);
  paintShade(shade20, h, s, 20);

  // دکمه و کارت پیش‌نمایش در CSS از این دو متغیر رنگ می‌گیرند
  document.body.style.setProperty("--brand-h", h);
  document.body.style.setProperty("--brand-s", s + "%");

  codeOut.textContent = `:root {\n  --brand-h: ${h};\n  --brand-s: ${s}%;\n}`;
}


/* ===== رویدادها ===== */

nameInput.addEventListener("input", function () {
  const name = nameInput.value.trim();

  if (name === "") {
    brandTitle.textContent = "نام برند";
    return;
  }
  brandTitle.textContent = name;
});

hueInput.addEventListener("input", updatePalette);
satInput.addEventListener("input", updatePalette);

// بار اول صفحه را با مقدارهای پیش‌فرض پر می‌کنیم
updatePalette();
