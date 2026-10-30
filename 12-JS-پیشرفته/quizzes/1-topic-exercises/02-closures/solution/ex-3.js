/* تمرین ۳ — قفل رمز با تعداد تلاش محدود */

function createPinChecker(correctPin, maxAttempts) {
  let attemptsLeft = maxAttempts;
  let isLocked = false;

  return function (pin) {
    if (isLocked) {
      return "⛔ گاوصندوق قفل شد.";
    }

    if (pin === correctPin) {
      return "✔ درِ گاوصندوق باز شد.";
    }

    attemptsLeft--;
    if (attemptsLeft === 0) {
      isLocked = true;
      return "⛔ گاوصندوق قفل شد.";
    }
    return `رمز اشتباه است. ${attemptsLeft.toLocaleString("fa-IR")} تلاش دیگر دارید.`;
  };
}

const checkPin = createPinChecker("1234", 3);

const form = document.getElementById("pin-form");
const pinInput = document.getElementById("pin");
const checkButton = document.getElementById("check");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const result = checkPin(pinInput.value);
  output.textContent = result;
  pinInput.value = "";

  if (result.startsWith("⛔")) {
    checkButton.disabled = true;
  }
});
