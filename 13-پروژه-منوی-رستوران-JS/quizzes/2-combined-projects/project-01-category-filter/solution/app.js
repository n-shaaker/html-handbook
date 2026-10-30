/* ========== عنصرهای صفحه ========== */

const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filter-btn");
const dishes = document.querySelectorAll(".dish");
const resultCount = document.getElementById("result-count");
const noResult = document.getElementById("no-result");

let currentFilter = "all";


/* ========== شرط‌های نمایش هر کارت ========== */

function matchesFilter(dish) {
  return currentFilter === "all" || dish.dataset.category === currentFilter;
}

/* فقط نام و توضیح جستجو می‌شود، نه قیمت */
function matchesSearch(dish, query) {
  const title = dish.querySelector("h3").textContent;
  const description = dish.querySelector(".dish-body p").textContent;
  return (title + " " + description).includes(query);
}

/* هر بار هر دو شرط را با هم می‌سنجیم */
function applyFilters() {
  const query = searchInput.value.trim();
  let visibleCount = 0;

  dishes.forEach((dish) => {
    const isVisible = matchesFilter(dish) && matchesSearch(dish, query);
    dish.hidden = !isVisible;
    if (isVisible) visibleCount++;
  });

  noResult.hidden = visibleCount > 0;
  resultCount.textContent = `${visibleCount.toLocaleString("fa-IR")} مورد نمایش داده می‌شود`;
}


/* ========== رویدادها ========== */

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);

/* امتیازی: Escape جستجو را پاک می‌کند */
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchInput.value = "";
    applyFilters();
  }
});

applyFilters();
