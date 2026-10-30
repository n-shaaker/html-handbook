/* پروژه ۴: اعتبارسنج فرم با RegExp — پاسخ */

const form = document.getElementById("signup-form");
const formStatus = document.getElementById("form-status");

const FIELDS = ["fullName", "mobile", "email", "nationalCode", "postalCode", "password", "confirmPassword"];

const mobilePattern = /^09\d{9}$/;
const emailPattern = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
const tenDigitsPattern = /^\d{10}$/;

// فیلدهایی که کاربر یک بار از آن‌ها خارج شده؛ فقط خطای این‌ها نمایش داده می‌شود
let touched = [];

/* ===== تمیز کردن ورودی ===== */
function toEnglishDigits(text) {
  return text.replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
}

// ارقام فارسی ← انگلیسی، و حذف فاصله و خط تیره
function cleanNumber(text) {
  return toEnglishDigits(text).replace(/[\s-]/g, "");
}

function getValues() {
  return {
    fullName: form.elements.fullName.value.trim(),
    mobile: cleanNumber(form.elements.mobile.value),
    email: form.elements.email.value.trim(),
    nationalCode: cleanNumber(form.elements.nationalCode.value),
    postalCode: cleanNumber(form.elements.postalCode.value),
    password: form.elements.password.value,
    confirmPassword: form.elements.confirmPassword.value
  };
}

/* ===== قوانین ===== */
function isValidNationalCode(code) {
  if (code === code[0].repeat(10)) return false;   // مثل ۱۱۱۱۱۱۱۱۱۱

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += Number(code[i]) * (10 - i);
  }
  const remainder = sum % 11;
  const checkDigit = Number(code[9]);

  if (remainder < 2) return checkDigit === remainder;
  return checkDigit === 11 - remainder;
}

// پیام خطای یک فیلد را برمی‌گرداند؛ اگر خطایی نبود رشته خالی
function getError(name, values) {
  const value = values[name];

  if (name === "fullName") {
    if (value === "") return "نام و نام خانوادگی را وارد کنید.";
    if (value.length < 3) return "حداقل ۳ کاراکتر وارد کنید.";
  }
  if (name === "mobile") {
    if (value === "") return "شماره موبایل را وارد کنید.";
    if (!mobilePattern.test(value)) return "شماره موبایل باید ۱۱ رقم باشد و با ۰۹ شروع شود.";
  }
  if (name === "email") {
    if (value === "") return "ایمیل را وارد کنید.";
    if (!emailPattern.test(value)) return "ایمیل معتبر نیست (مثال: name@example.com).";
  }
  if (name === "nationalCode") {
    if (value === "") return "کد ملی را وارد کنید.";
    if (!tenDigitsPattern.test(value)) return "کد ملی باید دقیقاً ۱۰ رقم باشد.";
    if (!isValidNationalCode(value)) return "کد ملی معتبر نیست.";
  }
  if (name === "postalCode") {
    // اختیاری است؛ فقط اگر پر شده بررسی می‌کنیم
    if (value !== "" && !tenDigitsPattern.test(value)) return "کد پستی باید ۱۰ رقم باشد.";
  }
  if (name === "password") {
    if (value === "") return "رمز عبور را وارد کنید.";
    if (value.length < 8) return "رمز عبور باید حداقل ۸ کاراکتر باشد.";
    if (!/\d/.test(value) || !/[a-z]/i.test(value)) return "رمز عبور باید حداقل یک حرف انگلیسی و یک عدد داشته باشد.";
  }
  if (name === "confirmPassword") {
    if (value === "") return "تکرار رمز عبور را وارد کنید.";
    if (value !== values.password) return "تکرار رمز با رمز عبور یکسان نیست.";
  }
  return "";
}

/* ===== نمایش ===== */
function showFieldError(name, message, value) {
  const input = form.elements[name];
  document.getElementById(name + "-error").textContent = message;

  if (message !== "") {
    input.setAttribute("aria-invalid", "true");
  } else if (value === "") {
    input.removeAttribute("aria-invalid");   // فیلد اختیاری خالی نه درست است نه غلط
  } else {
    input.setAttribute("aria-invalid", "false");
  }
}

function checkTouchedFields() {
  const values = getValues();
  touched.forEach(name => showFieldError(name, getError(name, values), values[name]));
}

/* ===== رویدادها ===== */
// blur حباب نمی‌زند ولی focusout می‌زند؛ پس یک listener روی فرم کافی است
form.addEventListener("focusout", event => {
  const name = event.target.name;
  if (!FIELDS.includes(name)) return;
  if (!touched.includes(name)) touched.push(name);
  checkTouchedFields();
});

// با هر تایپ، خطای فیلدهای لمس‌شده به‌روز می‌شود (مثلاً تغییر رمز، خطای «تکرار رمز» را هم عوض می‌کند)
form.addEventListener("input", () => {
  if (touched.length === 0) return;
  formStatus.textContent = "";
  checkTouchedFields();
});

form.addEventListener("submit", event => {
  event.preventDefault();
  touched = FIELDS.slice();
  checkTouchedFields();

  const values = getValues();
  const invalidFields = FIELDS.filter(name => getError(name, values) !== "");

  if (invalidFields.length > 0) {
    formStatus.textContent = `${invalidFields.length.toLocaleString("fa-IR")} مورد در فرم نیاز به اصلاح دارد.`;
    formStatus.className = "form-status failure";
    form.elements[invalidFields[0]].focus();
    return;
  }

  formStatus.textContent = "✔ ثبت‌نام شما با موفقیت انجام شد.";
  formStatus.className = "form-status success";
  form.reset();
  touched = [];
  FIELDS.forEach(name => showFieldError(name, "", ""));
});
