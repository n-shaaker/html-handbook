/* ۳) نمایش خروجی (Output) */

// مثال ۱
const a = document.getElementById("out-text");
const b = document.getElementById("out-html");
a.textContent = "<strong>سلام</strong>";
b.innerHTML = "<strong>سلام</strong>";

// مثال ۲
runIn("#out-console", function () {
  console.log("سلام دنیا");
  console.log(5 + 6);
  console.log("جمع:", 10 + 20);
});

// مثال ۳
const alertButton = document.getElementById("alert-btn");
alertButton.addEventListener("click", function () {
  alert("این یک پیام هشدار است!");
});
