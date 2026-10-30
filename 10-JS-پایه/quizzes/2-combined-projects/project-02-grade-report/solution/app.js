/* ===== عنصرهای صفحه ===== */

const nameInput = document.getElementById("student-name");
const scoreInput = document.getElementById("score");
const showBtn = document.getElementById("show-btn");
const errorMsg = document.getElementById("error-msg");
const reportCard = document.getElementById("report-card");
const reportText = document.getElementById("report-text");


/* ===== منطق نمره ===== */

function getStatus(score) {
  if (score >= 17) {
    return "عالی";
  } else if (score >= 14) {
    return "خوب";
  } else if (score >= 10) {
    return "قابل قبول";
  } else {
    return "مردود";
  }
}

function getStatusStyle(status) {
  switch (status) {
    case "عالی":
      return { className: "status-excellent", emoji: "🏆" };
    case "خوب":
      return { className: "status-good", emoji: "👍" };
    case "قابل قبول":
      return { className: "status-pass", emoji: "🙂" };
    default:
      return { className: "status-fail", emoji: "📚" };
  }
}


/* ===== نمایش ===== */

function showError(text) {
  errorMsg.textContent = text;
  reportCard.classList.add("hidden");
}

function showReport() {
  const name = nameInput.value.trim();
  const score = Number(scoreInput.value);

  if (name === "") {
    showError("نام دانشجو را وارد کنید.");
    return;
  }
  // Number("") صفر می‌شود، پس کادر خالی را جدا بررسی می‌کنیم
  if (scoreInput.value === "") {
    showError("نمره را وارد کنید.");
    return;
  }
  if (score < 0 || score > 20) {
    showError("نمره باید بین ۰ تا ۲۰ باشد.");
    return;
  }

  const status = getStatus(score);
  const style = getStatusStyle(status);

  // اول همه رنگ‌های قبلی را برمی‌داریم تا کارت دو رنگ نشود
  reportCard.classList.remove("status-excellent", "status-good", "status-pass", "status-fail");
  reportCard.classList.add(style.className);

  reportText.textContent = `${name} — نمره: ${score.toLocaleString("fa-IR")} — وضعیت: ${status} ${style.emoji}`;
  errorMsg.textContent = "";
  reportCard.classList.remove("hidden");
}


/* ===== رویدادها ===== */

showBtn.addEventListener("click", showReport);

scoreInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    showReport();
  }
});
