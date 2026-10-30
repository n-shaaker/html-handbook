// تمرین ۲ — تاس بازی
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 5; i++) {
  const a = randomInt(1, 6);
  const b = randomInt(1, 6);
  console.log("پرتاب " + i + ": " + a + " و " + b + " (جمع " + (a + b) + ")");
  if (a === 6 && b === 6) {
    console.log("جفت شش!");
  }
}

let smallest = 6;
let biggest = 1;
for (let i = 0; i < 1000; i++) {
  const n = randomInt(1, 6);
  smallest = Math.min(smallest, n);
  biggest = Math.max(biggest, n);
}
console.log("در 1000 پرتاب: کمترین " + smallest + "، بیشترین " + biggest);
