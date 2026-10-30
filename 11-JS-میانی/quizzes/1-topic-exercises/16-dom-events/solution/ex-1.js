// تمرین ۱ — شمارنده لیوان آب
const countEl = document.getElementById("count");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const resetBtn = document.getElementById("reset-btn");

let glasses = 0;

function showCount() {
  countEl.textContent = glasses.toLocaleString("fa-IR");
}

plusBtn.addEventListener("click", () => {
  glasses++;
  showCount();
});

minusBtn.addEventListener("click", () => {
  if (glasses === 0) {
    return;
  }
  glasses--;
  showCount();
});

resetBtn.addEventListener("click", () => {
  glasses = 0;
  showCount();
});
