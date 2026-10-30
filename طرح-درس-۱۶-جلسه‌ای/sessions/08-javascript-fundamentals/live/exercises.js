const output = document.querySelector("#output");
const lines = [];

function log(message) {
  lines.push(String(message));
  console.log(message);
}

// Exercise 1: age category
function getAgeCategory(age) {
  if (age < 13) return "کودک";
  if (age < 18) return "نوجوان";
  return "بزرگسال";
}

// Exercise 2: grade from score (0–20); reject out-of-range input first
function getGrade(score) {
  if (score < 0 || score > 20 || Number.isNaN(score)) return "نمره نامعتبر";
  if (score >= 17) return "عالی (A)";
  if (score >= 14) return "خوب (B)";
  if (score >= 10) return "قابل قبول (C)";
  return "مردود (F)";
}

// Exercise 3: even check (works for negative numbers too)
function isEven(value) {
  return value % 2 === 0;
}

// Exercise 4: tiny login helper (demo only — real auth happens on the server)
function canLogin(user, pass) {
  return user === "admin" && pass === "1234";
}

// Exercise 5: shipping cost — free for orders of 500,000 Toman or more
function getShippingCost(orderTotal) {
  return orderTotal >= 500000 ? 0 : 45000;
}

log(`سن ۱۵ => ${getAgeCategory(15)}`);
log(`نمره ۱۶ => ${getGrade(16)}`);
log(`نمره ۲۵ => ${getGrade(25)}`);
log(`آیا ۷ زوج است؟ ${isEven(7) ? "بله" : "خیر"}`);
log(`ورود admin/1234 => ${canLogin("admin", "1234") ? "موفق" : "ناموفق"}`);
log(`هزینه ارسال برای سفارش ۳۲۰٬۰۰۰ تومانی => ${getShippingCost(320000).toLocaleString("fa-IR")} تومان`);

output.textContent = lines.join("\n");
