/* ۵) متغیرها (Variables: let، const، var) */

runIn("#out-1", function () {
  let name = "سارا";
  const birthYear = 1380;
  let age = 1405 - birthYear;
  console.log(name);
  console.log(age);
});

runIn("#out-2", function () {
  let score = 10;
  score = 15;
  console.log(score);

  const pi = 3.14;
  pi = 3;
});

runIn("#out-3", function () {
  let city;
  console.log(city);

  let a = 1, b = 2, c = 3;
  console.log(a + b + c);
});

runIn("#out-4", function () {
  {
    var discountA = 10;
    let discountB = 20;
  }
  console.log(discountA);
  console.log(discountB);
});
