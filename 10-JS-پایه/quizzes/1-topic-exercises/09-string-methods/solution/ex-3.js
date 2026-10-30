// تمرین ۳ — ساختن نام کاربری

function makeUsername(fullName, birthYear) {
  const name = fullName.trim().toLowerCase().replace(" ", "_");
  // دو رقم آخر سال تولد
  const year = birthYear.trim().slice(-2);
  return name + year;
}

const fullNameInput = document.getElementById("full-name");
const yearInput = document.getElementById("birth-year");
const makeBtn = document.getElementById("make-btn");
const result = document.getElementById("result");

makeBtn.addEventListener("click", function () {
  const username = makeUsername(fullNameInput.value, yearInput.value);
  result.textContent = "نام کاربری پیشنهادی: " + username;
});
