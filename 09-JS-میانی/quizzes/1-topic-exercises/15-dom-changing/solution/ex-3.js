// تمرین ۳ — نوار پیشرفت کارها
const tasks = document.querySelectorAll("#tasks li");
const bar = document.getElementById("bar");
const summary = document.getElementById("summary");

let doneCount = 0;
tasks.forEach(task => {
  // data-done رشته است، پس با "true" مقایسه می‌کنیم
  if (task.getAttribute("data-done") === "true") {
    task.classList.add("done");
    doneCount++;
  }
});

const percent = Math.round(doneCount / tasks.length * 100);
bar.style.width = percent + "%";

if (doneCount === tasks.length) {
  summary.textContent = "همه کارها انجام شد!";
  bar.classList.add("complete");
} else {
  summary.textContent = doneCount.toLocaleString("fa-IR") + " از " + tasks.length.toLocaleString("fa-IR") +
    " کار انجام شده (" + percent.toLocaleString("fa-IR") + "٪)";
}
