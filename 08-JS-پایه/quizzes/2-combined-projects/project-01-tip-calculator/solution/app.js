/* ===== عنصرهای صفحه ===== */

const billInput = document.getElementById("bill");
const tipSelect = document.getElementById("tip-percent");
const peopleInput = document.getElementById("people");
const calcBtn = document.getElementById("calc-btn");
const message = document.getElementById("message");
const resultBox = document.getElementById("result");
const tipOut = document.getElementById("tip-out");
const totalOut = document.getElementById("total-out");
const perPersonOut = document.getElementById("per-person-out");


/* ===== تابع‌های کوچک ===== */

function calculateTip(bill, percent) {
  return bill * percent / 100;
}

// مثلاً 311200 را 312000 می‌کند
function roundUpToThousand(amount) {
  return Math.ceil(amount / 1000) * 1000;
}

function formatToman(amount) {
  return amount.toLocaleString("fa-IR") + " تومان";
}

function showError(text) {
  message.textContent = text;
  message.classList.remove("msg-ok");
  message.classList.add("msg-error");
  resultBox.classList.add("hidden");
}


/* ===== دکمه محاسبه ===== */

calcBtn.addEventListener("click", function () {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipSelect.value);
  const people = Number(peopleInput.value);

  // Number("") صفر می‌شود، پس خالی بودن کادر مبلغ را جدا بررسی می‌کنیم
  if (billInput.value === "") {
    showError("مبلغ صورتحساب را وارد کنید.");
    return;
  }
  if (bill <= 0) {
    showError("مبلغ صورتحساب باید بیشتر از صفر باشد.");
    return;
  }
  if (people < 1) {
    showError("تعداد نفرات باید حداقل ۱ نفر باشد.");
    return;
  }
  if (!Number.isInteger(people)) {
    showError("تعداد نفرات باید عدد صحیح باشد.");
    return;
  }

  const tip = calculateTip(bill, tipPercent);
  const total = bill + tip;
  const perPerson = roundUpToThousand(total / people);

  tipOut.textContent = formatToman(tip);
  totalOut.textContent = formatToman(total);
  perPersonOut.textContent = formatToman(perPerson);

  message.textContent = "محاسبه انجام شد.";
  message.classList.remove("msg-error");
  message.classList.add("msg-ok");
  resultBox.classList.remove("hidden");
});
