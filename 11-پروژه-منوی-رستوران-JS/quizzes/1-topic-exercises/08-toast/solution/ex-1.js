/* تمرین ۱ — پیام «به سفارش اضافه شد» */

const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");

  setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2500);
}

document.querySelectorAll(".add-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.closest(".dish").dataset.name;
    showToast(`"${name}" به سفارش اضافه شد.`);
  });
});
