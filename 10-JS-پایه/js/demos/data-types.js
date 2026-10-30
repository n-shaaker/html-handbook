/* ۷) انواع داده (Data Types) */

runIn("#out-1", function () {
  console.log(typeof "سارا");
  console.log(typeof 25);
  console.log(typeof true);
  console.log(typeof undefined);
  console.log(typeof { name: "علی" });
  console.log(typeof [1, 2, 3]);
  console.log(typeof null);
  console.log(typeof "25");
});

runIn("#out-2", function () {
  let value = 10;
  console.log(typeof value);
  value = "ده";
  console.log(typeof value);
});

runIn("#out-3", function () {
  console.log(Number("42") + 8);
  console.log(String(100) + "%");
  console.log(Number("سلام"));
  console.log(Number(""));
  console.log(typeof NaN);
  console.log(Boolean(0), Boolean(1), Boolean(""));
});
