/* تمرین ۲ — ورود با سرور شبیه‌سازی‌شده */

function fakeLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "sara" && password === "1234") {
        resolve({ name: "سارا" });
      } else {
        reject(new Error("نام کاربری یا رمز عبور اشتباه است."));
      }
    }, 1000);
  });
}

const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const output = document.getElementById("output");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  output.classList.remove("error");

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (username === "" || password === "") {
    output.classList.add("error");
    output.textContent = "هر دو کادر را پر کنید.";
    return;
  }

  output.textContent = "در حال ورود...";
  submitButton.disabled = true;

  try {
    const user = await fakeLogin(username, password);
    output.textContent = `✔ خوش آمدید ${user.name}!`;
  } catch (error) {
    output.classList.add("error");
    output.textContent = error.message;
  } finally {
    submitButton.disabled = false;
  }
});
