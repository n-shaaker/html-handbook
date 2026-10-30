/* تمرین ۱ — به خاطر سپردن نام کاربر */

const greeting = document.getElementById("greeting");
const form = document.getElementById("name-form");
const nameInput = document.getElementById("name");

function showGreeting() {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    greeting.textContent = `خوش برگشتی، ${savedName}!`;
  } else {
    greeting.textContent = "سلام مهمان!";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (name === "") {
    return;
  }
  localStorage.setItem("userName", name);
  nameInput.value = "";
  showGreeting();
});

document.getElementById("forget").addEventListener("click", () => {
  localStorage.removeItem("userName");
  showGreeting();
});

showGreeting();
