/* تمرین ۲ — دکمه فعال و عنوان نتیجه */

const filterButtons = document.querySelectorAll(".filter-btn");
const dishes = document.querySelectorAll(".dish");
const filterTitle = document.getElementById("filter-title");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let count = 0;

    // فقط دکمه زده‌شده فعال باشد
    filterButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    dishes.forEach((dish) => {
      const show = filter === "all" || dish.dataset.category === filter;
      dish.hidden = !show;
      if (show) count++;
    });

    const label = filter === "all" ? "همه غذاها" : button.textContent;
    filterTitle.textContent = `${label} (${count.toLocaleString("fa-IR")} مورد)`;
  });
});
