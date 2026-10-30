// تمرین ۱ — کی کجا دیده می‌شود؟
const siteName = "فروشگاه نارنج";

function welcome() {
  const message = "به " + siteName + " خوش آمدید";
  console.log(message);
}

welcome();

if (true) {
  let discount = 15;
  console.log("تخفیف امروز: " + discount + " درصد");
}

console.log("بیرون از تابع، message: " + typeof message);
console.log("بیرون از بلوک، discount: " + typeof discount);
console.log("siteName همه جا دیده می‌شود: " + siteName);
