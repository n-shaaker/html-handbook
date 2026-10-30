/* ۷) محدوده دسترسی (Scope) */

const siteName = "آموزش JS";

function showInfo() {
  const author = "سارا";
  console.log(siteName + " - " + author);
}

runIn("#out-1", function () {
  showInfo();
  console.log(siteName);
  console.log(author);
});

runIn("#out-2", function () {
  if (true) {
    let x = 10;
    const y = 20;
    var z = 30;
  }
  console.log(z);
  console.log(x);
});

runIn("#out-3", function () {
  let color = "قرمز";
  function paint() {
    let color = "آبی";
    console.log("داخل:", color);
  }
  paint();
  console.log("بیرون:", color);
});

runIn("#out-5", function () {
  const prices = [120000, 85000, 40000];
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    total += price;
  }
  console.log(total);
  console.log(typeof i);
});

runIn("#out-4", function () {
  let cartCount = 0;
  function addToCart() {
    cartCount++;
    const message = "کالا اضافه شد";
  }
  addToCart();
  addToCart();
  console.log(cartCount);
  console.log(typeof message);
});
