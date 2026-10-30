/* ===== عنصرهای صفحه ===== */

const hueInput = document.getElementById("hue");
const modeSelect = document.getElementById("mode");
const alphaInput = document.getElementById("alpha");
const hueValue = document.getElementById("hue-value");
const alphaValue = document.getElementById("alpha-value");
const preview = document.getElementById("preview");
const codeOut = document.getElementById("code-out");


/* ===== ساختن رنگ‌های تم ===== */

// همه رنگ‌ها از یک فام ساخته می‌شوند؛ فقط اشباع، روشنایی و شفافیت فرق دارد
function buildTheme(h, mode, alpha) {
  if (mode === "dark") {
    return {
      pageBg: `hsl(${h}, 25%, 12%)`,
      cardBg: `hsla(${h}, 20%, 22%, ${alpha})`,
      text: `hsl(${h}, 20%, 92%)`,
      primary: `hsl(${h}, 70%, 60%)`,
      primaryHover: `hsl(${h}, 70%, 68%)`,
      onPrimary: `hsl(${h}, 30%, 10%)`,
      primarySoft: `hsla(${h}, 70%, 60%, 0.15)`
    };
  }

  return {
    pageBg: `hsl(${h}, 30%, 96%)`,
    cardBg: `hsla(0, 0%, 100%, ${alpha})`,
    text: `hsl(${h}, 30%, 15%)`,
    primary: `hsl(${h}, 70%, 40%)`,
    primaryHover: `hsl(${h}, 70%, 33%)`,
    onPrimary: "hsl(0, 0%, 100%)",
    primarySoft: `hsla(${h}, 70%, 50%, 0.12)`
  };
}

function applyTheme(theme) {
  preview.style.setProperty("--page-bg", theme.pageBg);
  preview.style.setProperty("--card-bg", theme.cardBg);
  preview.style.setProperty("--text", theme.text);
  preview.style.setProperty("--primary", theme.primary);
  preview.style.setProperty("--primary-hover", theme.primaryHover);
  preview.style.setProperty("--on-primary", theme.onPrimary);
  preview.style.setProperty("--primary-soft", theme.primarySoft);
}

function themeCode(theme) {
  return `:root {
  --page-bg: ${theme.pageBg};
  --card-bg: ${theme.cardBg};
  --text: ${theme.text};
  --primary: ${theme.primary};
  --primary-hover: ${theme.primaryHover};
  --on-primary: ${theme.onPrimary};
}`;
}

function updateTheme() {
  const h = Number(hueInput.value);
  const mode = modeSelect.value;
  const alphaPercent = Number(alphaInput.value);

  hueValue.textContent = h + "°";
  alphaValue.textContent = alphaPercent + "%";

  // hsla عدد شفافیت را بین ۰ تا ۱ می‌خواهد
  const theme = buildTheme(h, mode, alphaPercent / 100);
  applyTheme(theme);
  codeOut.textContent = themeCode(theme);
}


/* ===== رویدادها ===== */

hueInput.addEventListener("input", updateTheme);
alphaInput.addEventListener("input", updateTheme);
modeSelect.addEventListener("change", updateTheme);

updateTheme();
