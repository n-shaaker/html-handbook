// تمرین ۲ — رسید چندخطی شیرینی‌فروشی

const customer = "parisa";
const item = "کیک شکلاتی";
const price = 95000;
const count = 3;
const deliveryFee = 25000;

// داخل ${} هر عبارتی می‌شود نوشت: حساب، متد رشته و ...
const receipt = `------ رسید ------
مشتری: ${customer.toUpperCase()}
کالا: ${item} × ${count}
جمع کالا: ${price * count} تومان
هزینه پیک: ${deliveryFee} تومان
قابل پرداخت: ${price * count + deliveryFee} تومان
------------------`;

console.log(receipt);
