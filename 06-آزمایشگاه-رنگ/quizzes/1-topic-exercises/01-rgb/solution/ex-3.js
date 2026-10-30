// تمرین ۳ — ساختن رنگ با سه عدد

const rInput = document.getElementById("r");
const gInput = document.getElementById("g");
const bInput = document.getElementById("b");
const showBtn = document.getElementById("show-btn");
const swatch = document.getElementById("swatch");
const codeOut = document.getElementById("code-out");
const message = document.getElementById("message");

// کادر خالی نباشد و عدد صحیح بین ۰ تا ۲۵۵ باشد
function isValidChannel(text) {
  if (text === "") {
    return false;
  }
  const number = Number(text);
  return Number.isInteger(number) && number >= 0 && number <= 255;
}

showBtn.addEventListener("click", function () {
  if (!isValidChannel(rInput.value) || !isValidChannel(gInput.value) || !isValidChannel(bInput.value)) {
    message.textContent = "هر سه عدد باید عدد صحیح بین ۰ تا ۲۵۵ باشند.";
    return;
  }

  const r = Number(rInput.value);
  const g = Number(gInput.value);
  const b = Number(bInput.value);
  const color = `rgb(${r}, ${g}, ${b})`;

  swatch.style.backgroundColor = color;
  codeOut.textContent = `background-color: ${color};`;
  message.textContent = "";
});
