/* ۱) توابع پیشرفته (پارامترها و توابع مرتبه بالا) */

runIn("#out-1", function () {
  function greet(name = "مهمان", greeting = "سلام") {
    return `${greeting} ${name}!`;
  }
  console.log(greet("سارا", "درود"));
  console.log(greet("علی"));
  console.log(greet());
  console.log(greet(undefined, "صبح بخیر"));
  console.log(greet(null));
});

runIn("#out-2", function () {
  function average(...nums) {
    if (nums.length === 0) return 0;
    return nums.reduce((s, n) => s + n, 0) / nums.length;
  }
  console.log(average(10, 20, 30));
  const scores = [17, 19, 15];
  console.log(average(...scores));
  function oldStyle() {
    console.log(arguments.length, arguments[0]);
  }
  oldStyle("a", "b", "c");
});

runIn("#out-3", function () {
  function calculate(a, b, operation) {
    return operation(a, b);
  }
  const add = (x, y) => x + y;
  const multiply = (x, y) => x * y;
  console.log(calculate(4, 5, add));
  console.log(calculate(4, 5, multiply));
  console.log(calculate(4, 5, (x, y) => x ** y));
});

runIn("#out-4", function () {
  function makeMultiplier(factor) {
    return function (n) {
      return n * factor;
    };
  }
  const double = makeMultiplier(2);
  const triple = makeMultiplier(3);
  console.log(double(10), triple(10));

  function makeDiscount(percent) {
    return price => price - (price * percent) / 100;
  }
  const studentPrice = makeDiscount(20);
  const vipPrice = makeDiscount(35);
  console.log(studentPrice(500000), vipPrice(500000));
});

runIn("#out-5", function () {
  (function () {
    const secret = "فقط این‌جا دیده می‌شود";
    console.log(secret);
  })();
});
