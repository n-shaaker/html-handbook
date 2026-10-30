// تمرین ۳ — هزینه ارسال (رفع باگ محدوده)
function getShippingCost(total) {
  let cost;
  if (total >= 500000) {
    cost = 0;
  } else {
    cost = 40000;
  }
  return cost;
}

const cartPrices = [120000, 85000, 40000];
let total = 0;
for (let i = 0; i < cartPrices.length; i++) {
  const price = cartPrices[i];
  total = total + price;
}

console.log("جمع سبد: " + total);
console.log("بعد از حلقه، i: " + typeof i);
console.log("هزینه ارسال سبد: " + getShippingCost(total));
console.log("هزینه ارسال برای 600000: " + getShippingCost(600000));
console.log("هزینه ارسال برای 500000: " + getShippingCost(500000));
