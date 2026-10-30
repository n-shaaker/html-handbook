/* ۱۸) حلقه For */

runIn("#out-1", function () {
  for (let i = 1; i <= 5; i++) {
    console.log("تکرار شماره " + i);
  }
});

runIn("#out-2", function () {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
});

runIn("#out-3", function () {
  for (let c = 0; c <= 40; c += 10) {
    const f = c * 9 / 5 + 32;
    console.log(`${c}°C = ${f}°F`);
  }
});

runIn("#out-4", function () {
  for (let i = 1; i <= 3; i++) {
    // i فقط اینجا قابل استفاده است
  }
  console.log(typeof i);

  let tries;
  for (tries = 1; tries <= 3; tries++) {
    // ...
  }
  console.log(tries);
});

runIn("#out-5", function () {
  let word = "سلام";
  for (let i = 0; i < word.length; i++) {
    console.log(i, word[i]);
  }
});

runIn("#out-6", function () {
  let vowels = 0;
  for (const letter of "JavaScript") {
    if ("aeiou".includes(letter.toLowerCase())) {
      vowels++;
    }
  }
  console.log("تعداد حروف صدادار:", vowels);
});

const numInput = document.getElementById("table-num");
const tableBtn = document.getElementById("table-btn");
const list = document.getElementById("table-list");

tableBtn.addEventListener("click", function () {
  const n = Number(numInput.value);
  let html = "";
  for (let i = 1; i <= 10; i++) {
    html += `<li>${n} × ${i} = ${n * i}</li>`;
  }
  list.innerHTML = html;
});
