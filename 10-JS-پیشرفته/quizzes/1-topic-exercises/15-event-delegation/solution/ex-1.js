/* تمرین ۱ — پالت رنگ با یک listener روی والد */

const palette = document.getElementById("palette");
const preview = document.getElementById("preview");
const colorText = document.getElementById("color-text");

palette.addEventListener("click", (event) => {
  const button = event.target.closest("[data-color]");
  if (!button) return; // کلیک روی فاصله بین دکمه‌ها

  const color = button.dataset.color;
  preview.style.backgroundColor = color;
  colorText.textContent = "رنگ انتخاب‌شده: " + color;
});
