/* تمرین ۱ — نام رزروکننده */

const form = document.getElementById("reserve-form");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("name-error");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  let error = "";

  if (name === "") {
    error = "نام را وارد کنید.";
  } else if (name.length < 3) {
    error = "نام باید حداقل ۳ حرف باشد.";
  }

  if (error !== "") {
    nameError.textContent = error;
    nameInput.classList.add("invalid");
    formMessage.textContent = "";
    return;
  }

  nameError.textContent = "";
  nameInput.classList.remove("invalid");
  formMessage.className = "form-message success";
  formMessage.textContent = `✔ رزرو به نام ${name} ثبت شد.`;
});
