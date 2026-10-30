/* کوییز ۳: محاسبه‌گر سن و تولد — پاسخ */

/* ===== عنصرهای صفحه ===== */
const form = document.getElementById("age-form");
const birthInput = document.getElementById("birth-date");
const errorText = document.getElementById("error");
const resultBox = document.getElementById("result");
const ageText = document.getElementById("age-text");
const weekdayText = document.getElementById("weekday-text");
const birthdayText = document.getElementById("birthday-text");
const factText = document.getElementById("fact-text");
const factBtn = document.getElementById("fact-btn");

const DAY_MS = 1000 * 60 * 60 * 24;
let facts = [];

function toFa(number) {
  return number.toLocaleString("fa-IR");
}

/* ===== محاسبه‌ها ===== */
function getToday() {
  const now = new Date();
  // ساعت را صفر می‌کنیم تا اختلاف روزها درست دربیاید
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function calculateAge(birth, today) {
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  // روز منفی شد: یک ماه قرض می‌گیریم (روز 0 یعنی آخرین روز ماه قبل)
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  // ماه منفی شد: یک سال قرض می‌گیریم
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}

function getNextBirthday(birth, today) {
  const thisYear = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if (thisYear >= today) {
    return thisYear;
  }
  return new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate());
}

function readBirthDate(today) {
  if (birthInput.value === "") {
    throw new Error("لطفاً تاریخ تولد را انتخاب کنید.");
  }
  // با "T00:00" تاریخ به وقت محلی خوانده می‌شود، نه UTC
  const birth = new Date(birthInput.value + "T00:00");
  if (birth > today) {
    throw new Error("تاریخ تولد نمی‌تواند در آینده باشد!");
  }
  if (today.getFullYear() - birth.getFullYear() > 120) {
    throw new Error("سن بیشتر از ۱۲۰ سال پذیرفته نمی‌شود.");
  }
  return birth;
}

/* ===== دانستنی‌ها ===== */
function showRandomFact() {
  const index = Math.floor(Math.random() * facts.length);
  factText.textContent = "💡 " + facts[index];
}

/* ===== رویدادها ===== */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const today = getToday();

  try {
    const birth = readBirthDate(today);
    const age = calculateAge(birth, today);
    const nextBirthday = getNextBirthday(birth, today);
    const daysLeft = Math.round((nextBirthday - today) / DAY_MS);
    const totalDays = Math.round((today - birth) / DAY_MS);

    ageText.textContent = `${toFa(age.years)} سال و ${toFa(age.months)} ماه و ${toFa(age.days)} روز`;

    const weekday = birth.toLocaleDateString("fa-IR", { weekday: "long" });
    weekdayText.textContent = `${weekday} (${birth.toLocaleDateString("fa-IR")})`;

    if (daysLeft === 0) {
      birthdayText.textContent = "امروز تولد شماست؛ تولدتان مبارک! 🎉";
    } else {
      birthdayText.textContent = `${toFa(daysLeft)} روز تا تولد بعدی (${nextBirthday.toLocaleDateString("fa-IR")})`;
    }

    facts = [
      `تا امروز حدود ${toFa(totalDays)} روز زندگی کرده‌اید.`,
      `قلب شما تقریباً ${toFa(totalDays * 100000)} بار تپیده است.`,
      `حدود ${toFa(Math.round(totalDays / 3))} روز از عمرتان را خواب بوده‌اید!`,
      `حدود ${toFa(totalDays * 24)} ساعت از تولد شما گذشته است.`,
      `اگر هر سال یک کیک تولد خورده باشید، تا حالا ${toFa(age.years)} کیک خورده‌اید 🍰`
    ];
    showRandomFact();

    errorText.textContent = "";
    resultBox.hidden = false;
  } catch (error) {
    errorText.textContent = error.message;
    resultBox.hidden = true;
  }
});

factBtn.addEventListener("click", showRandomFact);
