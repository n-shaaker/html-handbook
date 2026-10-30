// تمرین ۲ — هزینه ارسال فروشگاه

function shippingCost(cartTotal, city) {
  if (cartTotal >= 1000000) {
    return 0;
  } else if (city === "تهران") {
    return 35000;
  } else {
    return 50000;
  }
}

console.log(shippingCost(1200000, "یزد"));
console.log(shippingCost(400000, "تهران"));
console.log(shippingCost(400000, "یزد"));
console.log(shippingCost(1000000, "تهران"));

// شرط سه‌تایی برای یک انتخاب ساده بین دو متن
const stock = 0;
const stockMessage = stock > 0 ? "موجود" : "ناموجود";
console.log("وضعیت انبار:", stockMessage);
