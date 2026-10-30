/* ۱) JavaScript چیست؟ */

// مثال ۱: تغییر متن با کلیک
const title = document.getElementById("demo-title");
const button = document.getElementById("demo-btn");

button.addEventListener("click", function () {
  title.textContent = "سلام! این متن را JavaScript عوض کرد.";
});

// مثال ۲: روشن و خاموش کردن جعبه
const box = document.getElementById("light-box");
const toggle = document.getElementById("light-btn");

toggle.addEventListener("click", function () {
  box.classList.toggle("active");
});
