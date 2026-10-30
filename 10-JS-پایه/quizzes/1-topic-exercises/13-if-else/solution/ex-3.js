// تمرین ۳ — قیمت بلیت سینما

const ageInput = document.getElementById("age");
const checkBtn = document.getElementById("check-btn");
const message = document.getElementById("message");

function showMessage(text, isError) {
  message.textContent = text;
  if (isError) {
    message.classList.remove("ok");
    message.classList.add("error");
  } else {
    message.classList.remove("error");
    message.classList.add("ok");
  }
}

checkBtn.addEventListener("click", function () {
  const age = Number(ageInput.value);

  // ورودی بد را اول رد می‌کنیم و از تابع بیرون می‌آییم
  if (ageInput.value === "") {
    showMessage("لطفاً سن را وارد کنید.", true);
    return;
  }
  if (age < 0 || age > 120) {
    showMessage("سن باید بین ۰ تا ۱۲۰ باشد.", true);
    return;
  }

  let price;
  if (age < 5) {
    price = 0;
  } else if (age < 12) {
    price = 60000;
  } else if (age >= 65) {
    price = 50000;
  } else {
    price = 100000;
  }

  if (price === 0) {
    showMessage("ورود رایگان است 🎈", false);
  } else {
    showMessage(`قیمت بلیت: ${price.toLocaleString("fa-IR")} تومان`, false);
  }
});
