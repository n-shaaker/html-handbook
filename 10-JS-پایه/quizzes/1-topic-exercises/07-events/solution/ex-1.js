// تمرین ۱ — شمارنده لیوان آب

// شمارنده بیرون از تابع است تا با هر کلیک صفر نشود
let glasses = 0;

const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset-btn");
const glassesText = document.getElementById("glasses-text");

addBtn.addEventListener("click", function () {
  glasses++;
  glassesText.textContent = "امروز " + glasses + " لیوان آب خوردی.";
});

resetBtn.addEventListener("click", function () {
  glasses = 0;
  glassesText.textContent = "امروز " + glasses + " لیوان آب خوردی.";
});
