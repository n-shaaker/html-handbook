/* ========== عنصرهای صفحه ========== */

const form = document.getElementById("reserve-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const dateInput = document.getElementById("date");
const guestsInput = document.getElementById("guests");
const areaSelect = document.getElementById("area");
const formMessage = document.getElementById("form-message");

/* تاریخ امروز به شکل 2026-10-25؛ رشته‌های این قالب را می‌شود مستقیم با < مقایسه کرد */
function todayString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}


/* ========== قانون‌های هر کادر ========== */
/* هر تابع اگر مقدار درست باشد رشته خالی، وگرنه متن خطا را برمی‌گرداند */

function validateName(value) {
  if (value.trim().length < 3) {
    return "نام را کامل بنویسید (حداقل ۳ حرف).";
  }
  return "";
}

function validatePhone(value) {
  if (!/^09\d{9}$/.test(value.trim())) {
    return "شماره موبایل باید ۱۱ رقم باشد و با ۰۹ شروع شود.";
  }
  return "";
}

function validateDate(value) {
  if (value === "") {
    return "تاریخ رزرو را انتخاب کنید.";
  }
  if (value < todayString()) {
    return "تاریخ رزرو نمی‌تواند در گذشته باشد.";
  }
  return "";
}

function validateGuests(value) {
  const guests = Number(value);
  if (value === "" || !Number.isInteger(guests) || guests < 1 || guests > 20) {
    return "تعداد نفرات باید عددی صحیح بین ۱ تا ۲۰ باشد.";
  }
  return "";
}


/* ========== نمایش خطا ========== */

/* پیام را در <small> زیر کادر می‌نویسد و کلاس invalid را می‌گذارد یا برمی‌دارد */
function setError(input, message) {
  document.getElementById(input.id + "-error").textContent = message;
  input.classList.toggle("invalid", message !== "");
}

/* همه کادرها بررسی می‌شوند (نه فقط تا اولین خطا) */
function validateForm() {
  setError(nameInput, validateName(nameInput.value));
  setError(phoneInput, validatePhone(phoneInput.value));
  setError(dateInput, validateDate(dateInput.value));
  setError(guestsInput, validateGuests(guestsInput.value));

  /* querySelector اولین کادر نامعتبر را به ترتیب فرم برمی‌گرداند (یا null) */
  return form.querySelector(".invalid");
}


/* ========== رویدادها ========== */

dateInput.min = todayString();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstInvalid = validateForm();
  if (firstInvalid) {
    formMessage.textContent = "لطفاً خطاهای فرم را برطرف کنید.";
    formMessage.className = "form-message error";
    firstInvalid.focus();
    return;
  }

  /* روز هفته جدا ساخته می‌شود تا ترتیب فارسی درست بماند: «دوشنبه ۴ آبان ۱۴۰۵» */
  const date = new Date(dateInput.value + "T00:00");
  const dateText = date.toLocaleDateString("fa-IR", { weekday: "long" }) + " " +
    date.toLocaleDateString("fa-IR", { day: "numeric", month: "long", year: "numeric" });
  const guests = Number(guestsInput.value).toLocaleString("fa-IR");
  const areaText = areaSelect.options[areaSelect.selectedIndex].text;

  formMessage.textContent = `✔ ${nameInput.value.trim()} عزیز، رزرو ${guests} نفر برای ${dateText} (${areaText}) ثبت شد.`;
  formMessage.className = "form-message success";
  form.reset();
});

/* وقتی کاربر کادر نامعتبر را تغییر می‌دهد، خطای همان کادر پاک شود */
form.addEventListener("input", (event) => {
  if (event.target.classList.contains("invalid")) {
    setError(event.target, "");
  }
});
