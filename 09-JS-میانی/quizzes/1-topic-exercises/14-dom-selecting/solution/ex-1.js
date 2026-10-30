// تمرین ۱ — منوی کافه
const title = document.getElementById("page-title");
const intro = document.querySelector(".intro");
const items = document.querySelectorAll("#menu li");
const firstItem = document.querySelector("#menu li");

console.log("عنوان: " + title.textContent);
console.log("معرفی: " + intro.textContent);
console.log("تعداد آیتم‌ها: " + items.length);
console.log("اولین آیتم: " + firstItem.textContent);
