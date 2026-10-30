// تمرین ۳ — رتبه‌بندی دانش‌آموزان
const students = [
  { name: "سارا", score: 18 },
  { name: "علی", score: 9.5 },
  { name: "رضا", score: 15 },
  { name: "مریم", score: 9 }
];

const firstFailed = students.find(function (student) {
  return student.score < 10;
});
console.log("اولین مردود: " + firstFailed.name);

const rezaIndex = students.findIndex(function (student) {
  return student.name === "رضا";
});
console.log("اندیس رضا: " + rezaIndex);

const nima = students.find(function (student) {
  return student.name === "نیما";
});
if (nima === undefined) {
  console.log("نیما پیدا نشد");
}

const ranking = students.slice().sort(function (a, b) {
  return b.score - a.score;
});
for (let i = 0; i < ranking.length; i++) {
  console.log((i + 1) + ". " + ranking[i].name + " - " + ranking[i].score);
}
