/* تمرین ۱ — ماشین‌حساب با callback */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(a, b, operation) {
  return operation(a, b);
}

const inputA = document.getElementById("num-a");
const inputB = document.getElementById("num-b");
const output = document.getElementById("output");

// گرفتن عددها و نمایش نتیجه فقط یک بار نوشته شده است
function showResult(operation) {
  if (inputA.value === "" || inputB.value === "") {
    output.textContent = "هر دو عدد را وارد کنید.";
    return;
  }
  const result = calculate(Number(inputA.value), Number(inputB.value), operation);
  output.textContent = "نتیجه: " + result.toLocaleString("fa-IR");
}

document.getElementById("btn-add").addEventListener("click", () => showResult(add));
document.getElementById("btn-subtract").addEventListener("click", () => showResult(subtract));
document.getElementById("btn-multiply").addEventListener("click", () => showResult(multiply));

console.log(calculate(6, 3, add)); // 9
