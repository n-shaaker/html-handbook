/* ۱۰) رویدادها (Events) */

// مثال ۱: شمارنده
let count = 0;
const countBtn = document.getElementById("count-btn");
const resetBtn = document.getElementById("reset-btn");
const countText = document.getElementById("count-text");

countBtn.addEventListener("click", function () {
  count++;
  countText.textContent = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countText.textContent = count;
});

// مثال ۲: input
const nameInput = document.getElementById("name-input");
const preview = document.getElementById("preview");

nameInput.addEventListener("input", function () {
  preview.textContent = "سلام " + nameInput.value;
});

// مثال ۳: mouseover / mouseout
const hoverBox = document.getElementById("hover-box");

hoverBox.addEventListener("mouseover", function () {
  hoverBox.classList.add("active");
  hoverBox.textContent = "ماوس روی من است!";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.classList.remove("active");
  hoverBox.textContent = "ماوس را روی من ببر";
});

// مثال ۴: keydown
const keyInput = document.getElementById("key-input");
const keyText = document.getElementById("key-text");

keyInput.addEventListener("keydown", function (event) {
  keyText.textContent = "کلید فشرده شده: " + event.key;
});
