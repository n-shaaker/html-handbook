/* ۸) توابع (Functions) */

function sayHello() {
  console.log("سلام!");
}

function add(a, b) {
  return a + b;
}

runIn("#out-1", function () {
  sayHello();
  sayHello();
});

runIn("#out-2", function () {
  let result = add(3, 4);
  console.log(result);
  console.log(add(10, 20));
});

// مثال تبدیل دما
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

const input = document.getElementById("f-input");
const button = document.getElementById("f-btn");
const output = document.getElementById("f-output");

button.addEventListener("click", function () {
  const f = Number(input.value);
  output.textContent = toCelsius(f).toFixed(1) + " درجه سانتی‌گراد";
});

// پارامتر پیش‌فرض
function finalPrice(price, discountPercent = 0) {
  const discounted = price - price * discountPercent / 100;
  return discounted + discounted * 10 / 100;
}

runIn("#out-3", function () {
  console.log(finalPrice(200000, 25));
  console.log(finalPrice(200000));
  console.log(add(5));
});

// محدوده متغیر در تابع
function calculateAverage(a, b, c) {
  const sum = a + b + c;
  return sum / 3;
}

runIn("#out-4", function () {
  console.log(calculateAverage(18, 15, 12));
  console.log(typeof sum);
});

// تابع پیکانی
function square(n) {
  return n * n;
}

const squareArrow = (n) => n * n;

const kmToMile = (km) => {
  const miles = km * 0.621;
  return miles;
};

runIn("#out-5", function () {
  console.log(square(4), squareArrow(4));
  console.log(kmToMile(10));
});

runIn("#out-6", function () {
  console.log(add(2, 3));
  console.log(add);
});
