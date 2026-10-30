/* ۶) عملگرها (Operators) */

runIn("#out-1", function () {
  let x = 10;
  let y = 3;
  console.log(x + y, x - y, x * y);
  console.log(x / y);
  console.log(x % y);
  console.log(2 ** 10);

  let counter = 0;
  counter++;
  counter++;
  console.log(counter);
});

runIn("#out-2", function () {
  console.log(2 + 3 * 4);
  console.log((2 + 3) * 4);

  console.log(18 + 16 + 14 / 3);
  console.log((18 + 16 + 14) / 3);
});

runIn("#out-3", function () {
  let total = 0;
  total += 250000;
  total += 2 * 45000;
  total -= 40000;

  let tax = total * 10 / 100;
  total += tax;
  console.log("مالیات:", tax);
  console.log("مبلغ قابل پرداخت:", total);
});

runIn("#out-4", function () {
  let first = "علی";
  let last = "رضایی";
  console.log(first + " " + last);
  console.log("5" + 2);
  console.log(5 + 2 + "3");
  console.log("3" + 5 + 2);
  console.log("5" - 2);
});
