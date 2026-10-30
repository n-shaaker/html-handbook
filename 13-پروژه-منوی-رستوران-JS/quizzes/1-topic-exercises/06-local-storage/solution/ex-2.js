/* تمرین ۲ — غذاهای محبوب (آرایه در localStorage) */

const STORAGE_KEY = "naranj-favorites";

const favCount = document.getElementById("fav-count");
const favButtons = document.querySelectorAll(".fav-btn");

function loadFavorites() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(data)) {
      return data;
    }
    return [];
  } catch (error) {
    return [];
  }
}

let favorites = loadFavorites();

function saveFavorites() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

function updateButton(button) {
  const name = button.closest(".dish").dataset.name;
  const isFav = favorites.includes(name);

  button.textContent = isFav ? "♥" : "♡";
  button.setAttribute("aria-pressed", isFav);
}

function showCount() {
  if (favorites.length === 0) {
    favCount.textContent = "هنوز غذای محبوبی انتخاب نکرده‌اید.";
    return;
  }
  favCount.textContent =
    `${favorites.length.toLocaleString("fa-IR")} غذای محبوب: ${favorites.join("، ")}`;
}

favButtons.forEach((button) => {
  updateButton(button);

  button.addEventListener("click", () => {
    const name = button.closest(".dish").dataset.name;

    if (favorites.includes(name)) {
      favorites = favorites.filter((item) => item !== name);
    } else {
      favorites.push(name);
    }

    saveFavorites();
    updateButton(button);
    showCount();
  });
});

showCount();
