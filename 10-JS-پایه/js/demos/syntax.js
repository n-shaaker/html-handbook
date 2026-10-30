/* ۴) ساختار نوشتن و توضیحات (Syntax & Comments) */

runIn("#out-1", function () {
  let price = 85000;
  let count = 3;
  let total = price * count;
  console.log(total);
});

runIn("#out-2", function () {
  let price = 100; // توضیح در انتهای خط
  // console.log("این خط اجرا نمی‌شود");
  console.log("قیمت:", price);
});
