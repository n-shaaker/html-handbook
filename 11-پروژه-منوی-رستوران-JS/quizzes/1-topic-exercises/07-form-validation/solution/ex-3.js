/* تمرین ۳ — فرم کامل رزرو با شمارنده توضیحات */

const form = document.getElementById("reserve-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const guestsInput = document.getElementById("guests");
const noteInput = document.getElementById("note");
const noteCount = document.getElementById("note-count");
const formMessage = document.getElementById("form-message");

const PHONE_PATTERN = /^09\d{9}$/;
const NOTE_MAX = 200;

function showError(input, message) {
  document.getElementById(input.id + "-error").textContent = message;
  input.classList.add("invalid");
}

function clearError(input) {
  document.getElementById(input.id + "-error").textContent = "";
  input.classList.remove("invalid");
}

function checkName(name) {
  if (name === "") return "نام را وارد کنید.";
  if (name.length < 3) return "نام باید حداقل ۳ حرف باشد.";
  return "";
}

function checkPhone(phone) {
  if (phone === "") return "شماره موبایل را وارد کنید.";
  if (!PHONE_PATTERN.test(phone)) return "شماره باید ۱۱ رقم و با ۰۹ شروع شود.";
  return "";
}

function checkGuests(guests) {
  if (!Number.isInteger(guests) || guests < 1 || guests > 20) {
    return "تعداد نفرات باید بین ۱ تا ۲۰ باشد.";
  }
  return "";
}

function checkNote(note) {
  if (note.length > NOTE_MAX) return "توضیحات حداکثر ۲۰۰ حرف است.";
  return "";
}

function updateNoteCount() {
  const length = noteInput.value.length;
  noteCount.textContent =
    `${length.toLocaleString("fa-IR")} / ${NOTE_MAX.toLocaleString("fa-IR")}`;
  noteCount.classList.toggle("field-error", length > NOTE_MAX);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "";

  const name = nameInput.value.trim();
  const guests = Number(guestsInput.value);

  // به ترتیب فرم؛ برای پیدا کردن اولین فیلد اشتباه
  const checks = [
    { input: nameInput, message: checkName(name) },
    { input: phoneInput, message: checkPhone(phoneInput.value.trim()) },
    { input: guestsInput, message: checkGuests(guests) },
    { input: noteInput, message: checkNote(noteInput.value) },
  ];

  let firstInvalid = null;

  for (const check of checks) {
    if (check.message === "") {
      clearError(check.input);
    } else {
      showError(check.input, check.message);
      if (firstInvalid === null) {
        firstInvalid = check.input;
      }
    }
  }

  if (firstInvalid !== null) {
    firstInvalid.focus();
    return;
  }

  formMessage.className = "form-message success";
  formMessage.textContent =
    `✔ رزرو ${guests.toLocaleString("fa-IR")} نفره به نام ${name} ثبت شد.`;
  form.reset();
  updateNoteCount();
});

[nameInput, phoneInput, guestsInput, noteInput].forEach((input) => {
  input.addEventListener("input", () => {
    clearError(input);
  });
});

noteInput.addEventListener("input", updateNoteCount);
