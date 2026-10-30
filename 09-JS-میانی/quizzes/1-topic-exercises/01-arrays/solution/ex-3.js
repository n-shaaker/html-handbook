// تمرین ۳ — صندلی‌های کلاس
const seats = [
  ["علی", "سارا", "رضا"],
  ["مریم", "نیما"],
  ["زهرا", "امیر", "هانیه", "پویا"]
];

console.log("نفر دوم ردیف دوم: " + seats[1][1]);
console.log("آخرین نفر کلاس: " + seats.at(-1).at(-1));

let total = 0;
for (let i = 0; i < seats.length; i++) {
  console.log("ردیف " + (i + 1) + ": " + seats[i].length + " نفر");
  total = total + seats[i].length;
}
console.log("کل دانش‌آموزان: " + total);

console.log("seats آرایه است؟", Array.isArray(seats));
console.log('"علی" آرایه است؟', Array.isArray("علی"));
