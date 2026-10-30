// تمرین ۳ — انتخابگرهای ترکیبی و null
const starterTitles = document.querySelectorAll("#starters .dish h3");
const starterNames = [];
starterTitles.forEach(title => {
  starterNames.push(title.textContent);
});
console.log("پیش‌غذاها: " + starterNames.join("، "));

console.log("تعداد کل غذاها: " + document.querySelectorAll(".dish").length);
console.log("اولین دسر: " + document.querySelector("#desserts .dish h3").textContent);

function getText(selector) {
  const element = document.querySelector(selector);
  if (element === null) {
    return "پیدا نشد";
  }
  return element.textContent;
}

console.log('getText("#drinks h2") → ' + getText("#drinks h2"));
console.log('getText("#starters h2") → ' + getText("#starters h2"));
