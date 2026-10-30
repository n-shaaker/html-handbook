/* تمرین ۳ — جستجوی هوشمند (نام + توضیح، حروف عربی، Escape) */

const searchInput = document.getElementById("search");
const clearButton = document.getElementById("clear-search");
const dishes = document.querySelectorAll(".dish");
const resultCount = document.getElementById("result-count");
const noResult = document.getElementById("no-result");

// «ي» و «ك» عربی ← «ی» و «ک» فارسی
function normalize(text) {
  return text.replace(/ي/g, "ی").replace(/ك/g, "ک").trim();
}

function applySearch() {
  const query = normalize(searchInput.value);
  let count = 0;

  dishes.forEach((dish) => {
    const name = normalize(dish.dataset.name);
    const desc = normalize(dish.querySelector(".desc").textContent);
    const show = name.includes(query) || desc.includes(query);

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

function clearSearch() {
  searchInput.value = "";
  applySearch();
  searchInput.focus();
}

searchInput.addEventListener("input", applySearch);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    clearSearch();
  }
});

clearButton.addEventListener("click", clearSearch);

applySearch();
