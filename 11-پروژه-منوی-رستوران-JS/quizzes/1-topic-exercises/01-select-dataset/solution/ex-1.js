/* تمرین ۱ — انتخاب غذا و خواندن data-* */

const message = document.getElementById("message");
const dishes = document.querySelectorAll(".dish");
const selectButtons = document.querySelectorAll(".select-btn");

selectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dish = button.closest(".dish");
    const name = dish.dataset.name;
    const price = Number(dish.dataset.price);

    dishes.forEach((d) => d.classList.remove("selected"));
    dish.classList.add("selected");

    message.textContent = `انتخاب شما: ${name} — ${price.toLocaleString("fa-IR")} تومان`;
  });
});
