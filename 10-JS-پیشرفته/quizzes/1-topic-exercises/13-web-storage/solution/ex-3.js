/* تمرین ۳ — غذاهای مورد علاقه (آرایه با JSON) */

const STORAGE_KEY = "favorites";

function loadFavorites() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(data)) {
      return data;
    }
    return []; // null یا داده‌ای که آرایه نیست
  } catch (error) {
    return []; // JSON خراب
  }
}

let favorites = loadFavorites();

function saveFavorites() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

const form = document.getElementById("food-form");
const foodInput = document.getElementById("food");
const errorText = document.getElementById("error");
const foodList = document.getElementById("food-list");

function render() {
  foodList.textContent = "";

  if (favorites.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "هنوز غذایی اضافه نکرده‌اید.";
    foodList.append(empty);
    return;
  }

  for (const food of favorites) {
    const li = document.createElement("li");
    li.textContent = food + " ";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "حذف";
    deleteButton.setAttribute("aria-label", "حذف " + food);
    deleteButton.addEventListener("click", () => {
      favorites = favorites.filter((item) => item !== food);
      saveFavorites();
      render();
    });

    li.append(deleteButton);
    foodList.append(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const food = foodInput.value.trim();

  if (food === "") {
    return;
  }
  if (favorites.includes(food)) {
    errorText.textContent = "این غذا در فهرست هست.";
    return;
  }

  errorText.textContent = "";
  favorites.push(food);
  saveFavorites();
  foodInput.value = "";
  render();
});

render();
