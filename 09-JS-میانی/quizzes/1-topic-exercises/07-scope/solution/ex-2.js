// تمرین ۲ — سایه‌انداختن (Shadowing)
let score = 10;

// این score پارامتر خود تابع است، نه score بیرونی
function previewBonus(score) {
  return score + 5;
}

function addBonus() {
  score = score + 5;
}

console.log("پیش‌نمایش: " + previewBonus(score));
console.log("امتیاز واقعی بعد از پیش‌نمایش: " + score);

addBonus();
console.log("امتیاز واقعی بعد از addBonus: " + score);
