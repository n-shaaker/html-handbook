/* ۱۳) رشته‌های قالبی (Template Literals) */

let name = "سارا";
let age = 20;

runIn("#out-1", function () {
  console.log("سلام " + name + "، تو " + age + " سال داری.");
  console.log(`سلام ${name}، تو ${age} سال داری.`);
});

runIn("#out-2", function () {
  let price = 120000;
  let count = 3;
  console.log(`جمع کل: ${price * count} تومان`);
  console.log(`سال آینده ${age + 1} ساله می‌شوی.`);
  console.log(`نام بزرگ: ${"sara".toUpperCase()}`);
  console.log(`وضعیت: ${age >= 18 ? "بزرگسال" : "نوجوان"}`);
});

runIn("#out-3", function () {
  let poem = `بنی آدم اعضای یکدیگرند
که در آفرینش ز یک گوهرند`;
  console.log(poem);
});

const makeBtn = document.getElementById("card-btn");
const nameInput = document.getElementById("card-name");
const jobInput = document.getElementById("card-job");
const cardTitle = document.getElementById("card-title");
const cardText = document.getElementById("card-text");

makeBtn.addEventListener("click", function () {
  cardTitle.textContent = nameInput.value;
  cardText.textContent = `شغل: ${jobInput.value}`;
});
