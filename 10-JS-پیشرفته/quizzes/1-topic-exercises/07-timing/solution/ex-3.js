/* تمرین ۳ — جستجوی شهر با debounce */

const cities = ["تهران", "اصفهان", "شیراز", "تبریز", "مشهد", "اهواز", "رشت", "کرمان", "یزد"];

const searchInput = document.getElementById("search");
const statusText = document.getElementById("status");
const results = document.getElementById("results");
const counterText = document.getElementById("counter");

let searchTimer; // بیرون از listener تا بین تایپ‌ها باقی بماند
let searchCount = 0;

function showCities(list) {
  results.textContent = "";
  statusText.textContent = "";

  if (list.length === 0) {
    statusText.textContent = "شهری پیدا نشد.";
    return;
  }

  for (const city of list) {
    const li = document.createElement("li");
    li.textContent = city;
    results.append(li);
  }
}

function runSearch() {
  const query = searchInput.value.trim();
  const found = cities.filter((city) => city.includes(query));

  searchCount++;
  counterText.textContent = "تعداد جستجوهای اجراشده: " + searchCount.toLocaleString("fa-IR");
  showCities(found);
}

searchInput.addEventListener("input", () => {
  statusText.textContent = "در حال تایپ...";
  clearTimeout(searchTimer);
  searchTimer = setTimeout(runSearch, 500);
});

showCities(cities);
