/* تمرین ۲ — خطای دلخواه با throw */

function parseAge(text) {
  const age = Number(text);

  if (text.trim() === "" || Number.isNaN(age)) {
    throw new TypeError("سن باید عدد باشد.");
  }
  if (age < 5 || age > 90) {
    throw new RangeError("سن باید بین ۵ تا ۹۰ باشد.");
  }
  return age;
}

const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.classList.remove("error");

  try {
    const age = parseAge(ageInput.value);
    output.textContent = `✔ ثبت‌نام انجام شد (${age.toLocaleString("fa-IR")} سال).`;
    console.table({ name: nameInput.value.trim(), age: age });
  } catch (error) {
    output.classList.add("error");
    output.textContent = `${error.name}: ${error.message}`;
  }
});
