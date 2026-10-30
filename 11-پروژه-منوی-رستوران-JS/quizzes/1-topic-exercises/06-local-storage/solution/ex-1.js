/* تمرین ۱ — سفارش به نام شما */

const STORAGE_KEY = "naranj-customer";

const form = document.getElementById("name-form");
const customerInput = document.getElementById("customer");
const greeting = document.getElementById("greeting");

function showGreeting(name) {
  if (name === "") {
    greeting.textContent = "نام خود را بنویسید تا دفعه بعد یادمان بماند.";
  } else {
    greeting.textContent = "سفارش به نام: " + name;
  }
}

customerInput.addEventListener("input", () => {
  const name = customerInput.value.trim();
  if (name === "") {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, name);
  }
  showGreeting(name);
});

document.getElementById("forget").addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  customerInput.value = "";
  showGreeting("");
});

// Enter در کادر صفحه را دوباره بارگذاری نکند
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// getItem برای کلید ناموجود null برمی‌گرداند
const savedName = localStorage.getItem(STORAGE_KEY) || "";
customerInput.value = savedName;
showGreeting(savedName);
