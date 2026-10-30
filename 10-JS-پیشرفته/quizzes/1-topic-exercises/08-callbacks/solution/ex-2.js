/* تمرین ۲ — بارگذاری کاربر با callback موفقیت و خطا */

const users = [
  { id: 1, name: "سارا", city: "شیراز" },
  { id: 2, name: "علی", city: "تبریز" },
  { id: 3, name: "مریم", city: "رشت" },
];

// مثل یک سرور کند: جواب را یک ثانیه بعد با callback می‌دهد
function loadUser(id, onSuccess, onError) {
  setTimeout(() => {
    const user = users.find((u) => u.id === id);
    if (user) {
      onSuccess(user);
    } else {
      onError("کاربری با این شناسه پیدا نشد.");
    }
  }, 1000);
}

const idInput = document.getElementById("user-id");
const loadButton = document.getElementById("load");
const output = document.getElementById("output");

function showUser(user) {
  output.classList.remove("error");
  output.textContent = `${user.name} — ${user.city}`;
  loadButton.disabled = false;
}

function showError(message) {
  output.classList.add("error");
  output.textContent = message;
  loadButton.disabled = false;
}

loadButton.addEventListener("click", () => {
  output.classList.remove("error");
  output.textContent = "در حال بارگذاری...";
  loadButton.disabled = true;

  loadUser(Number(idInput.value), showUser, showError);
});
