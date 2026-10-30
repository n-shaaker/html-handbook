// تمرین ۱ — اول صدا بزن، بعد تعریف کن؟
greet("مریم");

// calcTax داخل const است؛ تا قبل از این خط در TDZ است و صدا زدنش خطا می‌دهد
const calcTax = function (price) {
  return price * 0.1;
};

console.log("مالیات 200000 تومان: " + calcTax(200000));

// تابع اعلانی کامل بالا برده می‌شود، پس بالای فایل هم قابل صدا زدن است
function greet(name) {
  console.log("سلام " + name + "!");
}
