// تمرین ۲ — ثبت‌نام با پیام خطای هر فیلد
const form = document.getElementById("signup");
const success = document.getElementById("success");

function showError(fieldName, text) {
  document.getElementById(fieldName + "-error").textContent = text;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(p => {
    p.textContent = "";
  });
  success.textContent = "";
}

form.addEventListener("submit", event => {
  event.preventDefault();
  clearErrors();

  const name = form.elements.fullname.value.trim();
  const age = Number(form.elements.age.value);
  const password = form.elements.password.value;
  let hasError = false;

  if (name.length < 3) {
    showError("fullname", "نام باید حداقل ۳ حرف باشد.");
    hasError = true;
  }
  if (!Number.isInteger(age) || age < 12 || age > 90) {
    showError("age", "سن باید عددی بین ۱۲ تا ۹۰ باشد.");
    hasError = true;
  }
  if (password.length < 8) {
    showError("password", "رمز باید حداقل ۸ کاراکتر باشد.");
    hasError = true;
  }

  if (hasError) {
    return;
  }

  success.textContent = name + " عزیز، ثبت‌نام شما انجام شد.";
  form.reset();
});
