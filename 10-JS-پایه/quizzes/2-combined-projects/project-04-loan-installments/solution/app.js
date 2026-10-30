/* ===== عنصرهای صفحه ===== */

const amountInput = document.getElementById("amount");
const rateInput = document.getElementById("rate");
const monthsInput = document.getElementById("months");
const calcBtn = document.getElementById("calc-btn");
const message = document.getElementById("message");
const resultBox = document.getElementById("result");
const typeOut = document.getElementById("type-out");
const interestOut = document.getElementById("interest-out");
const totalOut = document.getElementById("total-out");
const installmentOut = document.getElementById("installment-out");
const summaryOut = document.getElementById("summary-out");


/* ===== تابع‌های کوچک ===== */

// سود ساده: مبلغ × درصد سالانه ÷ ۱۰۰ × ماه ÷ ۱۲
function calculateInterest(amount, rate, months) {
  return amount * rate / 100 * months / 12;
}

// مثلاً 3041666.67 را 3042000 می‌کند
function roundUpToThousand(amount) {
  return Math.ceil(amount / 1000) * 1000;
}

function formatToman(amount) {
  return Number(amount.toFixed(0)).toLocaleString("fa-IR") + " تومان";
}

function loanType(rate) {
  if (rate === 0) {
    return "قرض‌الحسنه (بدون سود)";
  } else if (rate <= 18) {
    return "وام کم‌بهره";
  } else {
    return "وام پربهره";
  }
}

function showError(text) {
  message.textContent = text;
  message.classList.remove("msg-ok");
  message.classList.add("msg-error");
  resultBox.classList.add("hidden");
}


/* ===== دکمه محاسبه ===== */

calcBtn.addEventListener("click", function () {
  const amount = Number(amountInput.value);
  const rate = Number(rateInput.value);
  const months = Number(monthsInput.value);

  // Number("") صفر می‌شود، پس خالی بودن کادرها را جدا بررسی می‌کنیم
  if (amountInput.value === "") {
    showError("مبلغ وام را وارد کنید.");
    return;
  }
  if (amount <= 0) {
    showError("مبلغ وام باید بیشتر از صفر باشد.");
    return;
  }
  if (rateInput.value === "" || rate < 0 || rate > 100) {
    showError("نرخ سود باید بین ۰ تا ۱۰۰ درصد باشد.");
    return;
  }
  if (!Number.isInteger(months) || months < 1 || months > 60) {
    showError("تعداد اقساط باید عدد صحیح بین ۱ تا ۶۰ باشد.");
    return;
  }

  const interest = calculateInterest(amount, rate, months);
  const total = amount + interest;
  const installment = roundUpToThousand(total / months);

  typeOut.textContent = loanType(rate);
  interestOut.textContent = formatToman(interest);
  totalOut.textContent = formatToman(total);
  installmentOut.textContent = formatToman(installment);
  summaryOut.textContent = `${months} قسط ماهانه، هر قسط ${formatToman(installment)}`;

  message.textContent = "محاسبه انجام شد.";
  message.classList.remove("msg-error");
  message.classList.add("msg-ok");
  resultBox.classList.remove("hidden");
});
