/* تمرین ۲ — حالت تاریک ماندگار */

const toggleButton = document.getElementById("theme-toggle");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  toggleButton.setAttribute("aria-pressed", isDark);
  if (isDark) {
    toggleButton.textContent = "☀️ حالت روشن";
  } else {
    toggleButton.textContent = "🌙 حالت تاریک";
  }
}

toggleButton.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  applyTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// هر مقداری غیر از "dark" (حتی داده خراب) یعنی حالت روشن
applyTheme(localStorage.getItem("theme") === "dark");
