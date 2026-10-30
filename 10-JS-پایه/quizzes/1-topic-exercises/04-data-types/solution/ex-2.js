// تمرین ۲ — مقدارهای فرم همیشه رشته‌اند

// فرض کنید این دو مقدار از کادرهای فرم آمده‌اند
const priceText = "120000";
const countText = "3";

console.log("جمع اشتباه:", priceText + countText);
console.log("جمع درست:", Number(priceText) + Number(countText));
console.log("نوع قبل از تبدیل:", typeof priceText);
console.log("نوع بعد از تبدیل:", typeof Number(priceText));

console.log("درصد:", String(25) + "%");
console.log("متن غیرعددی:", Number("دو"));
console.log("کادر خالی:", Number(""));
console.log("نوع NaN:", typeof Number("دو"));
