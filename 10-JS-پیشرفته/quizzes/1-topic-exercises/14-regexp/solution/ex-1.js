/* تمرین ۱ — بررسی شماره موبایل با RegExp */

// ۰۹ و بعد دقیقاً ۹ رقم دیگر؛ ^ و $ یعنی کل متن باید همین باشد
const MOBILE_PATTERN = /^09\d{9}$/;

const mobileInput = document.getElementById("mobile");
const message = document.getElementById("message");

mobileInput.addEventListener("input", () => {
  const value = mobileInput.value.trim();

  if (value === "") {
    message.textContent = "";
    return;
  }

  if (MOBILE_PATTERN.test(value)) {
    message.className = "success";
    message.textContent = "✔ شماره معتبر است.";
  } else {
    message.className = "error";
    message.textContent = "✖ شماره باید ۱۱ رقم باشد و با ۰۹ شروع شود.";
  }
});
