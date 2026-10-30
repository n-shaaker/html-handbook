// تمرین ۳ — شمارش یک حرف در متن

const textInput = document.getElementById("text");
const letterInput = document.getElementById("letter");
const countBtn = document.getElementById("count-btn");
const result = document.getElementById("result");

countBtn.addEventListener("click", function () {
  const text = textInput.value;
  const letter = letterInput.value;

  if (text.trim() === "") {
    result.textContent = "لطفاً متن را وارد کنید.";
    return;
  }
  if (letter.length !== 1) {
    result.textContent = "در کادر حرف، دقیقاً یک حرف بنویسید.";
    return;
  }

  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === letter) {
      count++;
    }
  }

  result.textContent = `حرف «${letter}» ${count} بار در متن آمده است.`;
});
