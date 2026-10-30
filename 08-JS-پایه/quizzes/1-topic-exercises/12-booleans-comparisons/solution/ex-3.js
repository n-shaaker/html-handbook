// تمرین ۳ — بررسی زنده فرم ثبت‌نام

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const userOut = document.getElementById("user-out");
const passOut = document.getElementById("pass-out");
const allowOut = document.getElementById("allow-out");

function checkForm() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  const isUserValid = username.length >= 3;
  const isPassValid = password.length >= 8 && password !== username;

  userOut.textContent = "نام کاربری معتبر: " + isUserValid;
  passOut.textContent = "رمز معتبر: " + isPassValid;
  allowOut.textContent = "اجازه ثبت‌نام: " + (isUserValid && isPassValid);
}

usernameInput.addEventListener("input", checkForm);
passwordInput.addEventListener("input", checkForm);
