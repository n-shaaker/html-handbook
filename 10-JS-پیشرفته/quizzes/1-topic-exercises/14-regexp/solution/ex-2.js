/* تمرین ۲ — اعتبارسنجی فرم ثبت‌نام با چند الگو */

const USERNAME_PATTERN = /^[a-z][a-z0-9_]{3,11}$/i;
const POSTAL_PATTERN = /^\d{10}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById("signup-form");
const result = document.getElementById("result");

// یک کادر را بررسی می‌کند و اگر درست بود true برمی‌گرداند
function checkField(id, pattern, errorMessage) {
  const input = document.getElementById(id);
  const errorText = document.getElementById(id + "-error");
  const isValid = pattern.test(input.value.trim());

  errorText.textContent = isValid ? "" : errorMessage;
  input.setAttribute("aria-invalid", !isValid);
  return isValid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameOk = checkField(
    "username",
    USERNAME_PATTERN,
    "۴ تا ۱۲ کاراکتر؛ با حرف انگلیسی شروع شود و فقط حرف، رقم و _ داشته باشد."
  );
  const postalOk = checkField("postal", POSTAL_PATTERN, "کد پستی باید دقیقاً ۱۰ رقم باشد.");
  const emailOk = checkField("email", EMAIL_PATTERN, "ایمیل معتبر نیست.");

  if (usernameOk && postalOk && emailOk) {
    result.textContent = "✔ ثبت‌نام انجام شد.";
  } else {
    result.textContent = "";
  }
});
