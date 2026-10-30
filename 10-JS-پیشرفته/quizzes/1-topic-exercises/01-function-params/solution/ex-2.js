/* تمرین ۲ — میانگین نمره‌ها با پارامتر rest */

const scoresInput = document.getElementById("scores");
const calcButton = document.getElementById("calc");
const output = document.getElementById("output");

function average(...scores) {
  if (scores.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return (sum / scores.length).toFixed(2);
}

function countPassed(minScore, ...scores) {
  let count = 0;
  for (const score of scores) {
    if (score >= minScore) {
      count++;
    }
  }
  return count;
}

// تست‌ها در Console
console.log(average(18, 15, 19)); // 17.33
console.log(average()); // 0
console.log(countPassed(10, 18, 9, 12, 7)); // 2

calcButton.addEventListener("click", () => {
  // "18,15,9" ← [18, 15, 9]
  const numbers = scoresInput.value.split(",").map(Number);

  const avg = average(...numbers);
  const passed = countPassed(10, ...numbers);

  output.textContent = `میانگین: ${avg} — قبولی: ${passed.toLocaleString("fa-IR")} نفر`;
});
