// تمرین ۲ — جمع قیمت‌های ویترین
const prices = document.querySelectorAll(".price");
let total = 0;
prices.forEach(price => {
  total = total + Number(price.textContent);
});

const available = document.querySelectorAll(".item:not(.sold-out)");
const soldOutNames = document.querySelectorAll(".sold-out .name");

console.log("جمع قیمت‌ها: " + total);
console.log("تعداد موجودها: " + available.length);
soldOutNames.forEach(name => {
  console.log("ناموجود: " + name.textContent);
});
