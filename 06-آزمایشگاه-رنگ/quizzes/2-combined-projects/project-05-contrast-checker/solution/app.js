const textColorInput = document.getElementById("text-color");
const bgColorInput = document.getElementById("bg-color");
const preview = document.getElementById("preview");
const ratioOut = document.getElementById("ratio-out");

// input[type=color] همیشه "#rrggbb" برمی‌گرداند
function hexToRgb(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
}

// یک کانال ۰ تا ۲۵۵ را طبق فرمول WCAG خطی می‌کند
function linearChannel(value) {
  const c = value / 255;
  if (c <= 0.03928) {
    return c / 12.92;
  }
  return Math.pow((c + 0.055) / 1.055, 2.4);
}

function relativeLuminance(rgb) {
  return 0.2126 * linearChannel(rgb.r) + 0.7152 * linearChannel(rgb.g) + 0.0722 * linearChannel(rgb.b);
}

// رنگ روشن‌تر همیشه بالای کسر می‌رود، پس ترتیب ورودی‌ها مهم نیست
function contrastRatio(hex1, hex2) {
  const l1 = relativeLuminance(hexToRgb(hex1));
  const l2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// یک ردیف «قبول/رد» را پر می‌کند
function showLevel(id, label, min, ratio) {
  const item = document.getElementById(id);
  if (ratio >= min) {
    item.textContent = `${label} (حداقل ${min}): قبول ✔`;
    item.className = "pass";
  } else {
    item.textContent = `${label} (حداقل ${min}): رد ✘`;
    item.className = "fail";
  }
}

function update() {
  const textColor = textColorInput.value;
  const bgColor = bgColorInput.value;
  const ratio = contrastRatio(textColor, bgColor);

  document.getElementById("text-hex").textContent = textColor;
  document.getElementById("bg-hex").textContent = bgColor;
  preview.style.color = textColor;
  preview.style.backgroundColor = bgColor;
  ratioOut.textContent = ratio.toFixed(2) + ":1";

  showLevel("level-aa", "AA — متن معمولی", 4.5, ratio);
  showLevel("level-aa-large", "AA — متن درشت", 3, ratio);
  showLevel("level-aaa", "AAA — متن معمولی", 7, ratio);
}

textColorInput.addEventListener("input", update);
bgColorInput.addEventListener("input", update);

document.getElementById("swap-btn").addEventListener("click", function () {
  const oldText = textColorInput.value;
  textColorInput.value = bgColorInput.value;
  bgColorInput.value = oldText;
  update();
});

update();
