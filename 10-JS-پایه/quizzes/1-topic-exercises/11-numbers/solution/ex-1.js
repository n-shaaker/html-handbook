// تمرین ۱ — اعشار، گرد کردن و قالب‌بندی

console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(2));

const average = (17 + 18 + 18) / 3;
console.log("معدل خام:", average);
console.log("معدل با دو رقم اعشار:", average.toFixed(2));

const price = 2450000;
console.log(price.toLocaleString("fa-IR") + " تومان");

console.log("۳ صحیح است؟", Number.isInteger(3));
console.log("۲.۵ صحیح است؟", Number.isInteger(2.5));
