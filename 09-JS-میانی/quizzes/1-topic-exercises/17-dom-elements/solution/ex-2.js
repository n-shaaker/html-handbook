// تمرین ۲ — یادداشت‌های سریع
const input = document.getElementById("note-input");
const addBtn = document.getElementById("add-btn");
const notes = document.getElementById("notes");
const noteCount = document.getElementById("note-count");

function updateCount() {
  const count = notes.querySelectorAll("li").length;
  noteCount.textContent = "تعداد: " + count.toLocaleString("fa-IR");
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") {
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "حذف";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateCount();
  });

  li.append(span, " ", deleteBtn);
  notes.append(li);

  input.value = "";
  input.focus();
  updateCount();
});
