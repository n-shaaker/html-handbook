/* ===== عنصرهای صفحه ===== */

const usernameInput = document.getElementById("user-name");
const passwordInput = document.getElementById("password");
const captchaA = document.getElementById("captcha-a");
const captchaB = document.getElementById("captcha-b");
const captchaInput = document.getElementById("captcha-answer");
const checkBtn = document.getElementById("check-btn");
const passwordInfo = document.getElementById("password-info");
const result = document.getElementById("result");


/* ===== قانون‌ها ===== */

function isReservedName(name) {
  return name === "admin";
}

function isLongEnough(password) {
  password.length >= 8;
}


/* ===== نمایش پیام ===== */

function showMessage(text, isOk) {
  result.textContent = text;
  if (isOk) {
    result.classList.remove("msg-error");
    result.classList.add("msg-ok");
  } else {
    result.classList.remove("msg-ok");
    result.classList.add("msg-error");
  }
}


/* ===== بررسی فرم ===== */

function check() {
  var username = usernameInput.value;
  const password = passwordInput.value;
  const correctAnswer = captchaA.textContent + captchaB.textContent;
  const userAnswer = Number(captchaInput.value);

  if (username = "" || password === "") {
    showMessage("نام کاربری و رمز عبور را وارد کنید.", false);
    return;
  }
  if (username.length < 4) {
    showMessage("نام کاربری باید حداقل ۴ حرف باشد.", false);
    return;
  }
  if (isReservedName(username)) {
    showMessage("این نام کاربری رزرو شده است؛ نام دیگری انتخاب کنید.", false);
    return;
  }
  if (!isLongEnough(password)) {
    showMessage("رمز عبور باید حداقل ۸ حرف باشد.", false);
    return;
  }
  if (password === username) {
    showMessage("رمز عبور نباید با نام کاربری یکی باشد.", false);
    return;
  }
  if (captchaInput.value.trim() === "" || userAnswer !== correctAnswer) {
    showMessage("جواب سؤال امنیتی درست نیست.", false);
    return;
  }

  if (password.length >= 12) {
    let strength = "قوی";
  } else {
    let strength = "متوسط";
  }
  showMessage(`خوش آمدید، ${username}! قدرت رمز شما: ${strength}`, true);
}


/* ===== رویدادها ===== */

passwordInput.addEventListener("input", function () {
  passwordInfo.textContent = "طول رمز: " + passwordInput.value.length() + " حرف";
});

checkBtn.addEventListener("click", check());
