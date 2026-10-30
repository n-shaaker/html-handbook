/* تمرین ۲ — تایمر از نو و پیام خطا */

const toast = document.getElementById("toast");
const soldOut = ["فالوده شیرازی"];

// بیرون از تابع، تا بین چند بار صدا زدن باقی بماند
let toastTimer;

function showToast(message, type) {
  clearTimeout(toastTimer);

  toast.textContent = message;
  toast.classList.toggle("toast-error", type === "error");
  toast.classList.add("is-visible");

  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2500);
}

document.querySelectorAll(".add-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.closest(".dish").dataset.name;

    if (soldOut.includes(name)) {
      showToast(`متأسفیم، "${name}" امروز تمام شده است.`, "error");
      return;
    }

    showToast(`"${name}" به سفارش اضافه شد.`, "success");
  });
});
