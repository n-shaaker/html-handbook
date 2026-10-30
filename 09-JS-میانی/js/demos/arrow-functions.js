/* ۹) توابع پیکانی (Arrow Functions) */

runIn("#out-1", function () {
  const add1 = function (a, b) {
    return a + b;
  };
  const add2 = (a, b) => {
    return a + b;
  };
  const add3 = (a, b) => a + b;
  console.log(add1(2, 3), add2(2, 3), add3(2, 3));
});

runIn("#out-2", function () {
  const hello = () => "سلام!";
  const double = x => x * 2;
  const makeUser = (name, age) => ({ name: name, age: age });
  console.log(hello());
  console.log(double(21));
  console.log(makeUser("مریم", 25));
});

runIn("#out-3", function () {
  const nums = [1, 2, 3, 4, 5, 6];
  const evens2 = nums.filter(n => n % 2 === 0);
  const squares = nums.map(n => n * n);
  const total = nums.reduce((sum, n) => sum + n, 0);
  console.log(evens2, squares, total);

  const products = [
    { name: "کیبورد", price: 1500000, inStock: true },
    { name: "مانیتور", price: 9800000, inStock: true },
    { name: "ماوس", price: 600000, inStock: false }
  ];
  const affordable = products
    .filter(p => p.inStock && p.price < 2000000)
    .map(p => p.name);
  console.log(affordable);
});

const btn = document.getElementById("arrow-btn");
const box = document.getElementById("arrow-box");

btn.addEventListener("click", () => {
  box.classList.toggle("active");
});
