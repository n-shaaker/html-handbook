/* تمرین ۲ — نام، موبایل و تعداد نفرات */

const form = document.getElementById("reserve-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const guestsInput = document.getElementById("guests");
const formMessage = document.getElementById("form-message");

const PHONE_PATTERN = /^09\d{9}$/;

function showError(input, message) {
  document.getElementById(input.id + "-error").textContent = message;
  input.classList.add("invalid");
}

function clearError(input) {
  document.getElementById(input.id + "-error").textContent = "";
  input.classList.remove("invalid");
}

/* هر تابع یک پیام خطا برمی‌گرداند؛ رشته خالی یعنی درست است */
function checkName(name) {
  if (name === "") return "نام را وارد کنید.";
  if (name.length < 3) return "نام باید حداقل ۳ حرف باشد.";
  return "";
}

function checkPhone(phone) {
  if (phone === "") return "شماره موبایل را وارد کنید.";
  if (!PHONE_PATTERN.test(phone)) return "شماره باید ۱۱ رقم و با ۰۹ شروع شود.";
  return "";
}

function checkGuests(guests) {
  if (!Number.isInteger(guests) || guests < 1 || guests > 20) {
    return "تعداد نفرات باید بین ۱ تا ۲۰ باشد.";
  }
  return "";
}

// بررسی یک فیلد: اگر خطا داشت نشان بده و false برگردان
function validateField(input, message) {
  if (message === "") {
    clearError(input);
    return true;
  }
  showError(input, message);
  return false;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "";

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const guests = Number(guestsInput.value);

  // هر سه بررسی اجرا می‌شوند تا همه خطاها با هم دیده شوند
  const nameOk = validateField(nameInput, checkName(name));
  const phoneOk = validateField(phoneInput, checkPhone(phone));
  const guestsOk = validateField(guestsInput, checkGuests(guests));

  if (!nameOk || !phoneOk || !guestsOk) {
    return;
  }

  formMessage.className = "form-message success";
  formMessage.textContent =
    `✔ رزرو ${guests.toLocaleString("fa-IR")} نفره به نام ${name} ثبت شد.`;
});

[nameInput, phoneInput, guestsInput].forEach((input) => {
  input.addEventListener("input", () => {
    clearError(input);
  });
});
