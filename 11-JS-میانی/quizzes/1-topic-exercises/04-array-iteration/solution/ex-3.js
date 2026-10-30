// تمرین ۳ — گزارش کلاس
const scores = [
  { name: "سارا", score: 18 },
  { name: "علی", score: 12 },
  { name: "رضا", score: 9 },
  { name: "مریم", score: 16 }
];

const allPassed = scores.every(function (s) {
  return s.score >= 10;
});
const hasExcellent = scores.some(function (s) {
  return s.score >= 17;
});

const passed = scores.filter(function (s) {
  return s.score >= 10;
});
const passedNames = passed.map(function (s) {
  return s.name;
});

const sum = passed.reduce(function (total, s) {
  return total + s.score;
}, 0);
const average = sum / passed.length;

console.log("همه قبول شدند؟", allPassed);
console.log("کسی 17 به بالا دارد؟", hasExcellent);
console.log("قبول‌شده‌ها: " + passedNames.join("، "));
console.log("میانگین قبول‌شده‌ها: " + average.toFixed(2));
