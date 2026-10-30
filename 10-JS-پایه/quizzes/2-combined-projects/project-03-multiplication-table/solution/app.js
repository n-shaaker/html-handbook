/* ===== عنصرهای صفحه ===== */

const rowsInput = document.getElementById("rows");
const colStartInput = document.getElementById("col-start");
const colEndInput = document.getElementById("col-end");
const buildBtn = document.getElementById("build-btn");
const summary = document.getElementById("summary");
const tableWrap = document.getElementById("table-wrap");


/* ===== ساختن جدول ===== */

function buildTableHtml(rows, colStart, colEnd) {
  // ردیف اول: سرستون‌ها
  let html = '<table class="times-table"><tr><th>×</th>';
  for (let j = colStart; j <= colEnd; j++) {
    html += `<th>${j}</th>`;
  }
  html += "</tr>";

  // بقیه ردیف‌ها: اول عدد ردیف، بعد حاصل‌ضرب‌ها
  for (let i = 1; i <= rows; i++) {
    html += `<tr><th>${i}</th>`;
    for (let j = colStart; j <= colEnd; j++) {
      if (i === j) {
        html += `<td class="square">${i * j}</td>`;
      } else {
        html += `<td>${i * j}</td>`;
      }
    }
    html += "</tr>";
  }

  html += "</table>";
  return html;
}

function isValidSize(n) {
  return Number.isInteger(n) && n >= 1 && n <= 12;
}

function showError(text) {
  summary.textContent = text;
  summary.classList.add("msg-error");
  tableWrap.innerHTML = "";
}


/* ===== دکمه ===== */

buildBtn.addEventListener("click", function () {
  if (rowsInput.value === "" || colStartInput.value === "" || colEndInput.value === "") {
    showError("همه کادرها را با عدد پر کنید.");
    return;
  }

  const rows = Number(rowsInput.value);
  const colStart = Number(colStartInput.value);
  const colEnd = Number(colEndInput.value);

  if (!isValidSize(rows) || !isValidSize(colStart) || !isValidSize(colEnd)) {
    showError("عددها باید صحیح و بین ۱ تا ۱۲ باشند.");
    return;
  }
  if (colStart > colEnd) {
    showError("عدد شروع ستون‌ها نباید از عدد پایان بزرگ‌تر باشد.");
    return;
  }

  const colCount = colEnd - colStart + 1;
  summary.textContent = `جدول ${rows} ردیف × ${colCount} ستون ساخته شد (${rows * colCount} خانه).`;
  summary.classList.remove("msg-error");
  tableWrap.innerHTML = buildTableHtml(rows, colStart, colEnd);
});
