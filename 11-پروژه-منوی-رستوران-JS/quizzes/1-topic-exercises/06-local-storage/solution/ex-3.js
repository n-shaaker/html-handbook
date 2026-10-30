/* تمرین ۳ — به خاطر سپردن جستجو و فیلتر */

const STORAGE_KEY = "naranj-menu-settings";
const ALLOWED_FILTERS = ["all", "starter", "main", "dessert", "drink"];

const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filter-btn");
const dishes = document.querySelectorAll(".dish");
const noResult = document.getElementById("no-result");

function loadSettings() {
  const result = { filter: "all", search: "" };
  let data;

  try {
    data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    return result; // JSON خراب
  }

  if (data === null || typeof data !== "object") {
    return result;
  }
  if (ALLOWED_FILTERS.includes(data.filter)) {
    result.filter = data.filter;
  }
  if (typeof data.search === "string") {
    result.search = data.search;
  }
  return result;
}

const settings = loadSettings();

function saveSettings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

function markActiveButton() {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === settings.filter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive);
  });
}

function applyFilters() {
  const query = settings.search.trim();
  let count = 0;

  dishes.forEach((dish) => {
    const categoryOk = settings.filter === "all" || dish.dataset.category === settings.filter;
    const searchOk = dish.dataset.name.includes(query);
    const show = categoryOk && searchOk;

    dish.hidden = !show;
    if (show) count++;
  });

  noResult.hidden = count > 0;
}

searchInput.addEventListener("input", () => {
  settings.search = searchInput.value;
  saveSettings();
  applyFilters();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    settings.filter = button.dataset.filter;
    saveSettings();
    markActiveButton();
    applyFilters();
  });
});

// شروع: صفحه را مثل دفعه قبل بچین
searchInput.value = settings.search;
markActiveButton();
applyFilters();
