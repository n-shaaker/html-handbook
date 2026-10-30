/* تمرین ۱ — جستجوی زنده */

const searchInput = document.getElementById("search");
const dishes = document.querySelectorAll(".dish");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();

  dishes.forEach((dish) => {
    dish.hidden = !dish.dataset.name.includes(query);
  });
});
