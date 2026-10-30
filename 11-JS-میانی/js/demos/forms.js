/* ۱۸) فرم‌ها و اعتبارسنجی (Forms & Validation) */

const form = document.getElementById("signup");
const errorList = document.getElementById("errors");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.elements.fullname.value.trim();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value;
  const password2 = form.elements.password2.value;
  const level = form.elements.level.value;
  const rules = form.elements.rules.checked;

  const errors = [];
  if (name.length < 3) errors.push("نام باید حداقل ۳ حرف باشد.");
  if (!email.includes("@") || !email.includes(".")) errors.push("ایمیل معتبر نیست (مثال: ali@example.com).");
  if (password.length < 8) errors.push("رمز عبور باید حداقل ۸ کاراکتر باشد.");
  if (password !== password2) errors.push("رمز عبور و تکرار آن یکسان نیستند.");
  if (level === "") errors.push("سطح را انتخاب کنید.");
  if (!rules) errors.push("پذیرفتن قوانین الزامی است.");

  errorList.textContent = "";
  if (errors.length > 0) {
    errors.forEach(message => {
      const li = document.createElement("li");
      li.className = "msg-error";
      li.textContent = message;
      errorList.append(li);
    });
  } else {
    const li = document.createElement("li");
    li.className = "msg-ok";
    li.textContent = `✔ ${name} عزیز، ثبت‌نام انجام شد.`;
    errorList.append(li);
    form.reset();
  }
});

const passInput = document.getElementById("pass-live");
const strength = document.getElementById("strength");

passInput.addEventListener("input", () => {
  const len = passInput.value.length;
  if (len === 0) {
    strength.textContent = "";
  } else if (len < 8) {
    strength.textContent = `ضعیف (${len} از حداقل ۸ کاراکتر)`;
    strength.className = "msg-error";
  } else {
    strength.textContent = "قابل قبول";
    strength.className = "msg-ok";
  }
});
