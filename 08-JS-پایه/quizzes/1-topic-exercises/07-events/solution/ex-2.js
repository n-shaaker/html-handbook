// تمرین ۲ — پیش‌نمایش زنده کارت عضویت

const nameInput = document.getElementById("member-name");
const cityInput = document.getElementById("member-city");
const previewName = document.getElementById("preview-name");
const previewCity = document.getElementById("preview-city");

nameInput.addEventListener("input", function () {
  previewName.textContent = "نام: " + nameInput.value;
});

cityInput.addEventListener("input", function () {
  previewCity.textContent = "شهر: " + cityInput.value;
});
