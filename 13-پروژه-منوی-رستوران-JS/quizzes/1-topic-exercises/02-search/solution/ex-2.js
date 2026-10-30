/* تمرین ۲ — جستجو با پیام نتیجه */

const searchInput = document.getElementById("search");
const dishes = document.querySelectorAll(".dish");
const resultCount = document.getElementById("result-count");
const noResult = document.getElementById("no-result");

function applySearch() {
  const query = searchInput.value.trim();
  let count = 0;

  dishes.forEach((dish) => {
    const show = dish.dataset.name.includes(query);
    dish.hidden = !show;
    if (show) count++;
  });

  if (query === "") {
    resultCount.textContent = count.toLocaleString("fa-IR") + " غذا در منو";
  } else {
    resultCount.textContent = count.toLocaleString("fa-IR") + " غذا پیدا شد.";
  }
  noResult.hidden = count > 0;
}

searchInput.addEventListener("input", applySearch);

applySearch();
