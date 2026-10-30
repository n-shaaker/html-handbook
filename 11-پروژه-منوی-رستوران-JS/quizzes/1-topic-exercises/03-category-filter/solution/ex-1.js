/* تمرین ۱ — فیلتر دسته‌بندی */

const filterButtons = document.querySelectorAll(".filter-btn");
const dishes = document.querySelectorAll(".dish");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    dishes.forEach((dish) => {
      if (filter === "all") {
        dish.hidden = false;
      } else {
        dish.hidden = dish.dataset.category !== filter;
      }
    });
  });
});
