// تمرین ۳ — مقایسه جمع با و بدون Number()

const firstInput = document.getElementById("first");
const secondInput = document.getElementById("second");
const addBtn = document.getElementById("add-btn");
const wrongOut = document.getElementById("wrong-out");
const rightOut = document.getElementById("right-out");
const typeOut = document.getElementById("type-out");

addBtn.addEventListener("click", function () {
  const first = firstInput.value;
  const second = secondInput.value;

  wrongOut.textContent = "بدون تبدیل: " + (first + second);
  rightOut.textContent = "با Number(): " + (Number(first) + Number(second));
  typeOut.textContent = "نوع مقدار کادر: " + typeof first;
});
