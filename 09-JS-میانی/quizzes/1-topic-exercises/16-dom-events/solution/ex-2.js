// تمرین ۲ — شمارنده حروف پیام
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const MAX = 120;

function updateCounter() {
  const length = message.value.length;
  counter.textContent = length.toLocaleString("fa-IR") + " / " + MAX.toLocaleString("fa-IR");
  counter.classList.toggle("warn", MAX - length < 20);
}

message.addEventListener("input", updateCounter);

message.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    message.value = "";
    updateCounter();
  }
});
