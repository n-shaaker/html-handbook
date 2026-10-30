/* ۱۴) اعداد (Numbers) */

runIn("#out-1", function () {
  let a = 25;
  let b = 3.75;
  let c = 2.5e3;
  console.log(a, b, c);
});

runIn("#out-2", function () {
  console.log(0.1 + 0.2);
  console.log(0.1 + 0.2 === 0.3);
  console.log((0.1 + 0.2).toFixed(2));
  console.log(Number((0.1 + 0.2).toFixed(2)) === 0.3);
});

runIn("#out-3", function () {
  console.log(100 / "سیب");
  console.log(10 / 0);
  console.log(NaN === NaN);
  console.log(Number.isNaN(NaN));
  console.log(isNaN("سلام"));
  console.log(Number.isNaN("سلام"));
});

runIn("#out-4", function () {
  let price = 1250000;
  let x = 9.656;
  console.log(x.toFixed(1));
  console.log(Number.isInteger(5));
  console.log(Number.isInteger(5.5));
  console.log(price.toLocaleString("en-US"));
  console.log(price.toLocaleString("fa-IR"));
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sumBtn = document.getElementById("sum-btn");
const sumOut = document.getElementById("sum-out");

sumBtn.addEventListener("click", function () {
  const n1 = Number(num1.value);
  const n2 = Number(num2.value);
  sumOut.textContent = `نتیجه: ${n1 + n2}`;
});
