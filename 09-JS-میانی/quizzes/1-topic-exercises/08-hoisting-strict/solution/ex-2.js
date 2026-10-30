"use strict";
// تمرین ۲ — غلط تایپی که strict پیدا می‌کند

let total = 0;

function addPrice(price) {
  total = total + price;
}

addPrice(50000);
addPrice(30000);
console.log("جمع: " + total);
