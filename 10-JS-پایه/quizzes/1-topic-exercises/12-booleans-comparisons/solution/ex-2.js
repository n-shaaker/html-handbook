// تمرین ۲ — قانون‌های تخفیف موزه

// تخفیف دانشجویی: سن ۱۸ تا ۳۰ «و» کارت دانشجویی
function hasStudentDiscount(age, hasCard) {
  return age >= 18 && age <= 30 && hasCard;
}

// ورود رایگان: زیر ۵ سال «یا» ۶۵ سال و بیشتر
function hasFreeEntry(age) {
  return age < 5 || age >= 65;
}

console.log("سارا ۲۲ ساله با کارت:", hasStudentDiscount(22, true));
console.log("امید ۲۲ ساله بدون کارت:", hasStudentDiscount(22, false));
console.log("مهدی ۳۵ ساله با کارت:", hasStudentDiscount(35, true));
console.log("آوا ۳ ساله:", hasFreeEntry(3));
console.log("پدربزرگ ۷۰ ساله:", hasFreeEntry(70));
console.log("مریم ۴۰ ساله:", hasFreeEntry(40));
console.log("مریم بلیت کامل می‌خرد؟", !hasFreeEntry(40));
