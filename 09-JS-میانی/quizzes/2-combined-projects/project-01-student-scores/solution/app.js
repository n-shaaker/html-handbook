/* کوییز ۱: کارنامه کلاس — پاسخ */

/* ===== عنصرهای صفحه ===== */
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const tableBody = document.getElementById("students-body");
const emptyMessage = document.getElementById("empty-message");
const statsText = document.getElementById("stats");

function toFa(number) {
  return number.toLocaleString("fa-IR");
}

/* ===== جستجو و مرتب‌سازی ===== */
function getVisibleStudents() {
  const text = searchInput.value.trim();

  // filter همیشه آرایه جدید می‌سازد؛ پس sort کردن found آرایه students را عوض نمی‌کند
  const found = students.filter((student) => student.name.includes(text));

  if (sortSelect.value === "name") {
    found.sort((a, b) => a.name.localeCompare(b.name, "fa"));
  } else if (sortSelect.value === "score-asc") {
    found.sort((a, b) => a.score - b.score);
  } else if (sortSelect.value === "score-desc") {
    found.sort((a, b) => b.score - a.score);
  }
  return found;
}

/* ===== ساختن جدول ===== */
function createRow(student, index) {
  const row = document.createElement("tr");
  if (student.score < 10) {
    row.classList.add("failed");
  }

  const cells = [toFa(index + 1), student.name, student.city, toFa(student.score)];
  cells.forEach((text) => {
    const cell = document.createElement("td");
    cell.textContent = text;
    row.append(cell);
  });
  return row;
}

/* ===== آمار ===== */
function renderStats(list) {
  // روی آرایه خالی میانگین و بهترین معنی ندارد
  if (list.length === 0) {
    statsText.textContent = "آماری برای نمایش وجود ندارد.";
    return;
  }

  const total = list.reduce((sum, student) => sum + student.score, 0);
  const average = Number((total / list.length).toFixed(2));

  const maxScore = Math.max(...list.map((student) => student.score));
  const best = list.find((student) => student.score === maxScore);
  const { name, score } = best;

  const allPassed = list.every((student) => student.score >= 10);
  const hasExcellent = list.some((student) => student.score >= 19);

  statsText.textContent =
    `تعداد: ${toFa(list.length)} نفر | میانگین: ${toFa(average)} | بهترین: ${name} (${toFa(score)}) | ` +
    `همه قبول شدند؟ ${allPassed ? "بله" : "خیر"} | نمره ۱۹ به بالا داریم؟ ${hasExcellent ? "بله" : "خیر"}`;
}

/* ===== رندر ===== */
function render() {
  const visible = getVisibleStudents();

  tableBody.innerHTML = "";
  visible.forEach((student, index) => {
    tableBody.append(createRow(student, index));
  });

  emptyMessage.hidden = visible.length > 0;
  renderStats(visible);
}

searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);

render();
