/* =========================================================
   پروژه ترکیبی ۵: نوبت‌دهی میز با ظرفیت سانس‌ها (پاسخ نمونه)
   ========================================================= */

const STORAGE_KEY = "naranj-bookings";
const CAPACITY = 20;
const PHONE_PATTERN = /^09\d{9}$/;

const SESSIONS = {
  lunch: { label: "ناهار", end: 16 },
  dinner: { label: "شام", end: 23 },
};

const form = document.getElementById("booking-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const dateInput = document.getElementById("date");
const sessionSelect = document.getElementById("session");
const guestsInput = document.getElementById("guests");
const capacityText = document.getElementById("capacity");
const bookingList = document.getElementById("booking-list");
const toast = document.getElementById("toast");


/* ========== ذخیره و بازیابی ========== */

/* هر رزرو: { id, name, phone, date: "2026-10-30", session: "dinner", guests: 4 } */
function isValidBooking(booking) {
  if (booking === null || typeof booking !== "object") return false;
  if (SESSIONS[booking.session] === undefined) return false;
  return typeof booking.guests === "number" && typeof booking.date === "string";
}

function loadBookings() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(data)) {
      // رزروهای ناقص یا خراب کنار گذاشته می‌شوند
      return data.filter(isValidBooking);
    }
    return [];
  } catch (error) {
    return [];
  }
}

let bookings = loadBookings();

function saveBookings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}


/* ========== ظرفیت ========== */

function getRemaining(date, session) {
  let used = 0;
  for (const booking of bookings) {
    if (booking.date === date && booking.session === session) {
      used += booking.guests;
    }
  }
  return CAPACITY - used;
}

function showCapacity() {
  if (dateInput.value === "") {
    capacityText.textContent = "برای دیدن ظرفیت، تاریخ را انتخاب کنید.";
    return;
  }

  const remaining = getRemaining(dateInput.value, sessionSelect.value);
  if (remaining <= 0) {
    capacityText.textContent = "این سانس پر است.";
  } else {
    capacityText.textContent =
      `ظرفیت باقی‌مانده این سانس: ${remaining.toLocaleString("fa-IR")} نفر`;
  }
}


/* ========== تاریخ ========== */

// "2026-10-30" ← تاریخ ساعت ۰۰:۰۰ به وقت محلی
function toDate(value) {
  return new Date(value + "T00:00");
}

function getToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

function formatDate(value) {
  return toDate(value).toLocaleDateString("fa-IR");
}


/* ========== اعتبارسنجی ========== */

function showError(input, message) {
  document.getElementById(input.id + "-error").textContent = message;
  input.classList.add("invalid");
}

function clearError(input) {
  document.getElementById(input.id + "-error").textContent = "";
  input.classList.remove("invalid");
}

function checkName(name) {
  if (name.length < 3) return "نام را کامل بنویسید (حداقل ۳ حرف).";
  return "";
}

function checkPhone(phone) {
  if (!PHONE_PATTERN.test(phone)) return "شماره باید ۱۱ رقم و با ۰۹ شروع شود.";
  return "";
}

function checkDate(value) {
  if (value === "") return "تاریخ را انتخاب کنید.";
  if (toDate(value) < getToday()) return "تاریخ گذشته را نمی‌شود رزرو کرد.";
  return "";
}

function checkSession(dateValue, session) {
  if (dateValue === "") return "";

  const isToday = toDate(dateValue).getTime() === getToday().getTime();
  if (isToday && new Date().getHours() >= SESSIONS[session].end) {
    return `سانس ${SESSIONS[session].label} امروز تمام شده است.`;
  }
  return "";
}

function checkGuests(guests, remaining) {
  if (!Number.isInteger(guests) || guests < 1 || guests > 10) {
    return "تعداد نفرات باید بین ۱ تا ۱۰ باشد.";
  }
  if (remaining <= 0) return "این سانس پر است؛ سانس یا روز دیگری انتخاب کنید.";
  if (guests > remaining) {
    return `فقط ${remaining.toLocaleString("fa-IR")} جای خالی در این سانس باقی مانده است.`;
  }
  return "";
}


/* ========== نمایش ========== */

let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2500);
}

function renderBookings() {
  bookingList.textContent = "";

  if (bookings.length === 0) {
    const li = document.createElement("li");
    li.textContent = "هنوز رزروی ثبت نشده است.";
    bookingList.append(li);
    return;
  }

  for (const booking of bookings) {
    const text = document.createElement("span");
    text.textContent =
      `${formatDate(booking.date)} — ${SESSIONS[booking.session].label} — ` +
      `${booking.name} (${booking.guests.toLocaleString("fa-IR")} نفر)`;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "icon-btn";
    button.dataset.id = booking.id;
    button.textContent = "✕";
    button.setAttribute("aria-label", "لغو رزرو " + booking.name);

    const li = document.createElement("li");
    li.append(text, button);
    bookingList.append(li);
  }
}


/* ========== رویدادها ========== */

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const date = dateInput.value;
  const session = sessionSelect.value;
  const guests = Number(guestsInput.value);

  const checks = [
    { input: nameInput, message: checkName(name) },
    { input: phoneInput, message: checkPhone(phone) },
    { input: dateInput, message: checkDate(date) },
    { input: sessionSelect, message: checkSession(date, session) },
    { input: guestsInput, message: checkGuests(guests, getRemaining(date, session)) },
  ];

  let firstInvalid = null;
  for (const check of checks) {
    if (check.message === "") {
      clearError(check.input);
    } else {
      showError(check.input, check.message);
      if (firstInvalid === null) firstInvalid = check.input;
    }
  }

  if (firstInvalid !== null) {
    firstInvalid.focus();
    return;
  }

  bookings.push({
    id: Date.now(),
    name: name,
    phone: phone,
    date: date,
    session: session,
    guests: guests,
  });
  saveBookings();
  renderBookings();
  showToast(`رزرو ${name} ثبت شد.`);

  form.reset();
  showCapacity();
});

bookingList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const id = Number(button.dataset.id);
  const booking = bookings.find((item) => item.id === id);
  if (!booking) return;

  bookings = bookings.filter((item) => item.id !== id);
  saveBookings();
  renderBookings();
  showCapacity();
  showToast(`رزرو ${booking.name} لغو شد.`);
});

dateInput.addEventListener("change", showCapacity);
sessionSelect.addEventListener("change", showCapacity);

[nameInput, phoneInput, dateInput, sessionSelect, guestsInput].forEach((input) => {
  input.addEventListener("input", () => {
    clearError(input);
  });
});

renderBookings();
showCapacity();
