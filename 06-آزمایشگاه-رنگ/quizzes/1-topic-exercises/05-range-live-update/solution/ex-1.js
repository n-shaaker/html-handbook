// تمرین ۱ — اسلایدر شفافیت

const opacityInput = document.getElementById("opacity");
const opacityValue = document.getElementById("opacity-value");
const logoBox = document.getElementById("logo-box");

opacityInput.addEventListener("input", function () {
  const percent = Number(opacityInput.value);

  opacityValue.textContent = percent + "%";
  // opacity عددی بین ۰ تا ۱ می‌خواهد
  logoBox.style.opacity = percent / 100;
});
