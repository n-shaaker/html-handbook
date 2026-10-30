// تمرین ۳ — اطلاعات زنده نام کاربری

const usernameInput = document.getElementById("username");
const lengthOut = document.getElementById("length-out");
const firstOut = document.getElementById("first-out");
const lastOut = document.getElementById("last-out");

usernameInput.addEventListener("input", function () {
  const text = usernameInput.value;

  lengthOut.textContent = "تعداد حرف: " + text.length;
  firstOut.textContent = "حرف اول: " + text[0];
  lastOut.textContent = "حرف آخر: " + text.at(-1);
});
