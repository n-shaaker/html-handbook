"use strict";
// تمرین ۳ — پیش‌بینی کن، بعد درست کن
// مشکل ۱: studentName قبل از تعریف استفاده شده بود (TDZ → ReferenceError)
// مشکل ۲: var i از حلقه بیرون می‌زد؛ با let فقط داخل حلقه است
// مشکل ۳: average بدون let بود و در strict خطا می‌داد
// مشکل ۴: showReport (داخل const) قبل از تعریف صدا زده شده بود

function showReport(avg) {
  return "معدل: " + avg;
}

const studentName = "سارا";
console.log("دانش‌آموز: " + studentName);

let lessonCount = 0;
for (let i = 0; i < 3; i++) {
  lessonCount++;
}
console.log("تعداد درس‌ها: " + lessonCount);

const average = (18 + 16 + 17) / 3;
console.log(showReport(average));
