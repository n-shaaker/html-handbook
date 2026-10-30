/* تمرین ۲ — کارنامه کلاس با متدهای Object */

const scores = { سارا: 18, علی: 15, مریم: 19, رضا: 9 };

const studentCount = Object.keys(scores).length;
document.getElementById("count").textContent = studentCount.toLocaleString("fa-IR") + " دانش‌آموز";

let sum = 0;
for (const score of Object.values(scores)) {
  sum += score;
}
const average = sum / studentCount;
document.getElementById("average").textContent = "میانگین: " + average.toLocaleString("fa-IR");

const report = document.getElementById("report");
let bestName = "";
let bestScore = -1;

for (const [name, score] of Object.entries(scores)) {
  const li = document.createElement("li");
  const status = score >= 10 ? "قبول" : "مردود";
  li.textContent = `${name}: ${score.toLocaleString("fa-IR")} — ${status}`;
  report.append(li);

  if (score > bestScore) {
    bestScore = score;
    bestName = name;
  }
}

document.getElementById("best").textContent =
  `بهترین: ${bestName} (${bestScore.toLocaleString("fa-IR")})`;
