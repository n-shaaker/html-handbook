// تمرین ۱ — بازنویسی با Template Literal

const customer = "پریسا";
const orderId = 1045;
const city = "رشت";
const days = 3;

// قبل:
console.log("سلام " + customer + "، سفارش شماره " + orderId + " ثبت شد.");

// بعد:
console.log(`سلام ${customer}، سفارش شماره ${orderId} ثبت شد.`);
console.log(`مقصد ارسال: ${city}`);
console.log(`زمان تقریبی رسیدن: ${days} روز کاری`);
