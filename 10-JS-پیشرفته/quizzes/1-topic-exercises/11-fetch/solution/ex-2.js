/* تمرین ۲ — فهرست کارهای یک کاربر (بارگذاری، موفق، خطا) */

const userSelect = document.getElementById("user");
const loadButton = document.getElementById("load");
const statusText = document.getElementById("status");
const todoList = document.getElementById("todo-list");

function renderTodos(todos) {
  todoList.textContent = "";
  let doneCount = 0;

  for (const todo of todos) {
    const li = document.createElement("li");
    if (todo.completed) {
      li.textContent = "✔ " + todo.title;
      doneCount++;
    } else {
      li.textContent = "⬜ " + todo.title;
    }
    todoList.append(li);
  }

  statusText.textContent =
    `${doneCount.toLocaleString("fa-IR")} کار از ${todos.length.toLocaleString("fa-IR")} کار انجام شده.`;
}

loadButton.addEventListener("click", async () => {
  statusText.classList.remove("error");
  statusText.textContent = "در حال بارگذاری...";
  todoList.textContent = "";
  loadButton.disabled = true;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userSelect.value}`);
    if (!response.ok) {
      throw new Error("خطای سرور: " + response.status);
    }
    const todos = await response.json();
    renderTodos(todos);
  } catch (error) {
    console.error(error);
    statusText.classList.add("error");
    statusText.textContent = "دریافت اطلاعات ناموفق بود. اتصال اینترنت را بررسی کنید.";
  } finally {
    loadButton.disabled = false;
  }
});
