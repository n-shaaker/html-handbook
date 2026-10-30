// تمرین ۱ — بررسی نام کاربری

const username = "mohammad_reza";

console.log("نام کاربری:", username);
console.log("طول:", username.length);
console.log("حرف اول:", username[0]);
// شماره آخرین حرف یکی کمتر از طول است
console.log("حرف آخر:", username[username.length - 1]);
console.log("حرف آخر با at:", username.at(-1));
// شماره‌گذاری از صفر است، پس حرف هشتم شماره ۷ دارد
console.log("حرف هشتم:", username[7]);
console.log("شماره ۵۰:", username[50]);
