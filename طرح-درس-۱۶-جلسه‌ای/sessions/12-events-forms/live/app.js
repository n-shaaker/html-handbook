const form = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorEl = document.querySelector("#error");
const successEl = document.querySelector("#success");

function clearMessages() {
  errorEl.hidden = true;
  successEl.hidden = true;
  emailInput.removeAttribute("aria-invalid");
  passwordInput.removeAttribute("aria-invalid");
}

// Show the message, mark the field invalid for screen readers and move focus to it
function showError(message, field) {
  clearMessages();
  errorEl.textContent = message;
  errorEl.hidden = false;
  field.setAttribute("aria-invalid", "true");
  field.focus();
}

function showSuccess() {
  clearMessages();
  successEl.hidden = false;
}

function isValidEmail(value) {
  // Practical demo check — not a full RFC parser
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email) {
    showError("ایمیل الزامی است.", emailInput);
    return;
  }

  if (!isValidEmail(email)) {
    showError("لطفاً یک ایمیل معتبر وارد کنید.", emailInput);
    return;
  }

  if (!password) {
    showError("رمز عبور الزامی است.", passwordInput);
    return;
  }

  if (password.length < 6) {
    showError("رمز عبور باید حداقل ۶ کاراکتر باشد.", passwordInput);
    return;
  }

  // Front-end checks only improve UX; the server must validate credentials again
  showSuccess();
});

// Hide the old error as soon as the user starts fixing either field
for (const input of [emailInput, passwordInput]) {
  input.addEventListener("input", () => {
    if (!errorEl.hidden) clearMessages();
  });
}
