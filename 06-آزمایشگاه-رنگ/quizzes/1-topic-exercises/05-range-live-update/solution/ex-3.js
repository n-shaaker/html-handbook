// تمرین ۳ — بررسی خوانایی متن

const bgInput = document.getElementById("bg-light");
const textInput = document.getElementById("text-light");
const bgValue = document.getElementById("bg-value");
const textValue = document.getElementById("text-value");
const quoteCard = document.getElementById("quote-card");
const statusText = document.getElementById("status");

function updateCard() {
  const bgLight = Number(bgInput.value);
  const textLight = Number(textInput.value);

  bgValue.textContent = bgLight + "%";
  textValue.textContent = textLight + "%";

  quoteCard.style.backgroundColor = `hsl(220, 30%, ${bgLight}%)`;
  quoteCard.style.color = `hsl(220, 30%, ${textLight}%)`;

  // فاصله روشنایی دو رنگ، همیشه مثبت
  let difference = bgLight - textLight;
  if (difference < 0) {
    difference = -difference;
  }

  if (difference < 40) {
    statusText.textContent = `اختلاف روشنایی ${difference} است: خوانایی کم ⚠️`;
    statusText.classList.remove("ok");
    statusText.classList.add("error");
  } else {
    statusText.textContent = `اختلاف روشنایی ${difference} است: خوانایی خوب ✅`;
    statusText.classList.remove("error");
    statusText.classList.add("ok");
  }
}

bgInput.addEventListener("input", updateCard);
textInput.addEventListener("input", updateCard);

updateCard();
