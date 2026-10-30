// تمرین ۳ — سود سپرده بانکی

function formatToman(amount) {
  // اول بدون اعشار، بعد با رقم فارسی و جداکننده
  return Number(amount.toFixed(0)).toLocaleString("fa-IR") + " تومان";
}

const amountInput = document.getElementById("amount");
const percentInput = document.getElementById("percent");
const monthsInput = document.getElementById("months");
const calcBtn = document.getElementById("calc-btn");
const profitOut = document.getElementById("profit-out");
const totalOut = document.getElementById("total-out");

calcBtn.addEventListener("click", function () {
  const amount = Number(amountInput.value);
  const percent = Number(percentInput.value);
  const months = Number(monthsInput.value);

  const profit = amount * percent / 100 * months / 12;

  profitOut.textContent = `سود: ${formatToman(profit)}`;
  totalOut.textContent = `موجودی آخر دوره: ${formatToman(amount + profit)}`;
});
