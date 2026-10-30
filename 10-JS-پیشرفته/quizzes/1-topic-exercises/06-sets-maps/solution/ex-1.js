/* تمرین ۱ — حذف شماره‌های تکراری با Set */

const phonesInput = document.getElementById("phones");
const message = document.getElementById("message");
const output = document.getElementById("output");

document.getElementById("clean").addEventListener("click", () => {
  output.textContent = "";

  const numbers = phonesInput.value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");

  if (numbers.length === 0) {
    message.textContent = "شماره‌ای وارد نشده است.";
    return;
  }

  const uniqueNumbers = new Set(numbers);
  const removed = numbers.length - uniqueNumbers.size;

  for (const phone of uniqueNumbers) {
    const li = document.createElement("li");
    li.textContent = phone;
    output.append(li);
  }

  message.textContent = removed.toLocaleString("fa-IR") + " شماره تکراری حذف شد.";
});
