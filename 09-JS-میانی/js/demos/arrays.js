/* ۱) آرایه‌ها (Arrays) */

const fruits = ["سیب", "موز", "پرتقال"];

runIn("#out-1", function () {
  console.log(fruits);
  console.log(fruits[0]);
  console.log(fruits.length);
  console.log(fruits[fruits.length - 1]);
  console.log(fruits.at(-1));
});

runIn("#out-2", function () {
  fruits[1] = "انگور";
  fruits[fruits.length] = "کیوی";
  console.log(fruits);
});

runIn("#out-3", function () {
  const mixed = [10, "متن", true, null, { name: "علی" }, [1, 2]];
  console.log(mixed.length);
  console.log(mixed[4].name);
  console.log(mixed[5][1]);
});

const colors = ["قرمز", "سبز", "آبی"];

runIn("#out-4", function () {
  for (let i = 0; i < colors.length; i++) {
    console.log(i + ": " + colors[i]);
  }
  for (const color of colors) {
    console.log(color);
  }
});

runIn("#out-5", function () {
  console.log(typeof colors);
  console.log(Array.isArray(colors));
});

const students = ["سارا", "علی", "مریم", "رضا"];
const showBtn = document.getElementById("show-btn");
const list = document.getElementById("student-list");

showBtn.addEventListener("click", function () {
  let html = "";
  for (const s of students) {
    html += `<li><span>${s}</span></li>`;
  }
  list.innerHTML = html;
});
