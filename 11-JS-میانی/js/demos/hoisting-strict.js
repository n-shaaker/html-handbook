/* ۸) بالا بردن و حالت سخت‌گیرانه (Hoisting & Strict Mode) */

runIn("#out-1", function () {
  sayHi();
  function sayHi() {
    console.log("سلام از تابع!");
  }
});

runIn("#out-2", function () {
  console.log(a);
  var a = 5;
  console.log(b);
  let b = 10;
});

runIn("#out-4", function () {
  console.log(calcTax(1000));
  const calcTax = (price) => price * 0.1;
});

runIn("#out-3", function () {
  function test() {
    "use strict";
    total = 100;
  }
  test();
});
