// تمرین ۲ — سبد خرید
const cart = ["نان", "شیر", "پنیر"];

cart[1] = "ماست";
cart[cart.length] = "خرما";

console.log(cart);
console.log("تعداد: " + cart.length);

for (let i = 0; i < cart.length; i++) {
  console.log((i + 1) + ". " + cart[i]);
}
