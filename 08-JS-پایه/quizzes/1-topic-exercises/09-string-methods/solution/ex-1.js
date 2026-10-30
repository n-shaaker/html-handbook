// تمرین ۱ — مرتب کردن ایمیل

const rawEmail = "   Ali.Rezaei@GMAIL.com  ";

// متدها رشته جدید می‌سازند؛ نتیجه را در متغیر تازه نگه می‌داریم
const cleanEmail = rawEmail.trim().toLowerCase();

console.log("[" + rawEmail + "]");
console.log("[" + cleanEmail + "]");
console.log("طول قبل:", rawEmail.length, "| طول بعد:", cleanEmail.length);
console.log("@ دارد؟", cleanEmail.includes("@"));
console.log("جیمیل است؟", cleanEmail.endsWith("@gmail.com"));
