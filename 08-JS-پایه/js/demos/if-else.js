/* ۱۶) شرط‌ها (If...Else) */

runIn("#out-1", function () {
  let hour = 14;
  if (hour < 12) {
    console.log("صبح بخیر");
  } else {
    console.log("عصر بخیر");
  }
});

runIn("#out-2", function () {
  let score = 16;
  if (score >= 17) {
    console.log("عالی");
  } else if (score >= 14) {
    console.log("خوب");
  } else if (score >= 10) {
    console.log("قبول");
  } else {
    console.log("مردود");
  }
});

function shippingCost(cartTotal, city) {
  if (cartTotal >= 500000) {
    return 0;
  } else if (city === "تهران") {
    return 30000;
  } else {
    return 45000;
  }
}

runIn("#out-3", function () {
  console.log(shippingCost(650000, "شیراز"));
  console.log(shippingCost(200000, "تهران"));
  console.log(shippingCost(200000, "تبریز"));
});

runIn("#out-4", function () {
  let age = 20;
  let status = age >= 18 ? "بزرگسال" : "کودک";
  console.log(status);

  let stock = 0;
  console.log(stock > 0 ? "موجود" : "ناموجود");
});

const scoreInput = document.getElementById("score-input");
const checkBtn = document.getElementById("check-btn");
const message = document.getElementById("score-msg");

checkBtn.addEventListener("click", function () {
  const score = Number(scoreInput.value);

  if (scoreInput.value === "") {
    message.textContent = "لطفاً یک نمره وارد کنید";
  } else if (score < 0 || score > 20) {
    message.textContent = "نمره باید بین ۰ تا ۲۰ باشد";
  } else if (score >= 17) {
    message.textContent = "عالی 🎉";
  } else if (score >= 10) {
    message.textContent = "قبول";
  } else {
    message.textContent = "مردود";
  }
});
