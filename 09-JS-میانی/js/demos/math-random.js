/* ۶) ریاضی و عدد تصادفی (Math & Random) */

runIn("#out-1", function () {
  console.log(Math.round(4.5), Math.floor(4.9), Math.ceil(4.1));
  console.log(Math.sqrt(144), Math.abs(-3.5));
  console.log(Math.max(12, 45, 7), Math.min(12, 45, 7));
  const r = 5;
  const area = (Math.PI * r ** 2).toFixed(2);
  console.log("مساحت دایره:", area, typeof area);
  const price = 123456;
  console.log(Math.round(price / 1000) * 1000);
  console.log(Math.ceil(43 / 10));
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

runIn("#out-2", function () {
  console.log(randomInt(1, 6));
  console.log(randomInt(1, 100));
});

const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const dice = document.getElementById("dice");
const diceBtn = document.getElementById("dice-btn");

diceBtn.addEventListener("click", function () {
  const n = randomInt(1, 6);
  dice.textContent = faces[n - 1] + " " + n;
});

const quotes = [
  "دانایی توانایی است.",
  "هر روز یک قدم کوچک، یک سال یک قدم بزرگ.",
  "کد خوب، کدی است که دیگران هم بفهمند.",
  "اشتباه کردن بخشی از یادگیری است."
];
const quote = document.getElementById("quote");
const quoteBtn = document.getElementById("quote-btn");

quoteBtn.addEventListener("click", function () {
  const i = randomInt(0, quotes.length - 1);
  quote.textContent = quotes[i];
});
