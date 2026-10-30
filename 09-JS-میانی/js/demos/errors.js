/* ۱۳) مدیریت خطا (Try...Catch) */

runIn("#out-1", function () {
  try {
    console.log("قبل از خطا");
    undefinedFunction();
    console.log("این خط اجرا نمی‌شود");
  } catch (error) {
    console.log("خطا گرفته شد:", error.name);
    console.log("پیام:", error.message);
  } finally {
    console.log("finally همیشه اجرا می‌شود");
  }
  console.log("برنامه ادامه دارد ✔");
});

runIn("#out-2", function () {
  function divide(a, b) {
    if (b === 0) {
      throw new Error("تقسیم بر صفر ممکن نیست!");
    }
    return a / b;
  }
  try {
    console.log(divide(10, 2));
    console.log(divide(5, 0));
  } catch (err) {
    console.log("✖", err.message);
  }
});

runIn("#out-3", function () {
  function countCartItems(text) {
    try {
      const cart = JSON.parse(text);
      return cart.items.length;
    } catch (err) {
      if (err instanceof SyntaxError) {
        console.log("داده سبد خراب است:", err.name);
      } else {
        console.log("خطای دیگر:", err.name, "-", err.message);
      }
      return 0;
    }
  }
  console.log(countCartItems('{"items": ["دفتر", "خودکار", "کیف"]}'));
  console.log(countCartItems("{items: []}"));
  console.log(countCartItems('{"total": 5}'));
});

function checkAge(value) {
  if (value.trim() === "") {
    throw new Error("سن را وارد کنید.");
  }
  const age = Number(value);
  if (Number.isNaN(age)) {
    throw new Error("سن باید عدد باشد.");
  }
  if (!Number.isInteger(age)) {
    throw new Error("سن باید عدد صحیح باشد.");
  }
  if (age < 12 || age > 120) {
    throw new Error("سن باید بین ۱۲ تا ۱۲۰ باشد.");
  }
  return age;
}

const ageInput = document.getElementById("age-input");
const ageBtn = document.getElementById("age-btn");
const msg = document.getElementById("age-msg");

ageBtn.addEventListener("click", () => {
  try {
    const age = checkAge(ageInput.value);
    msg.textContent = `✔ سن ${age} ثبت شد.`;
    msg.className = "msg-ok";
  } catch (err) {
    msg.textContent = "✖ " + err.message;
    msg.className = "msg-error";
  }
});
