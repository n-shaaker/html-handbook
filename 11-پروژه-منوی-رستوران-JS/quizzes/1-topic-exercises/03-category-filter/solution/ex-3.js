/* تمرین ۳ — فیلتر ترکیبی (دسته + گیاهی + ارزان) */

const filterButtons = document.querySelectorAll(".filter-btn");
const dishes = document.querySelectorAll(".dish");
const onlyVeg = document.getElementById("only-veg");
const onlyCheap = document.getElementById("only-cheap");
const noResult = document.getElementById("no-result");

let currentFilter = "all";

function matchesCategory(dish) {
  return currentFilter === "all" || dish.dataset.category === currentFilter;
}

function matchesVeg(dish) {
  if (!onlyVeg.checked) return true;
  return dish.querySelector(".tag-veg") !== null;
}

function matchesPrice(dish) {
  if (!onlyCheap.checked) return true;
  return Number(dish.dataset.price) < 100000;
}

function applyFilters() {
  let count = 0;

  dishes.forEach((dish) => {
    const show = matchesCategory(dish) && matchesVeg(dish) && matchesPrice(dish);
    dish.hidden = !show;
    if (show) count++;
  });

  noResult.hidden = count > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    currentFilter = button.dataset.filter;
    applyFilters();
  });
});

onlyVeg.addEventListener("change", applyFilters);
onlyCheap.addEventListener("change", applyFilters);
