/* تمرین ۲ — فهرست خرید پویا با Event Delegation */

const form = document.getElementById("item-form");
const itemInput = document.getElementById("item");
const list = document.getElementById("shopping-list");

function addItem(name) {
  const text = document.createElement("span");
  text.textContent = name;
  text.dataset.action = "toggle";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "✕";
  deleteButton.dataset.action = "delete";
  deleteButton.setAttribute("aria-label", "حذف " + name);

  const li = document.createElement("li");
  li.append(text, " ", deleteButton);
  list.append(li);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = itemInput.value.trim();
  if (name === "") return;
  addItem(name);
  itemInput.value = "";
});

// فقط یک listener برای همه آیتم‌ها، حتی آن‌هایی که بعداً اضافه می‌شوند
list.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const li = target.closest("li");

  if (target.dataset.action === "toggle") {
    li.classList.toggle("done");
  } else if (target.dataset.action === "delete") {
    li.remove();
  }
});
