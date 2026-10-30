/* تمرین ۳ — کلاس فهرست کارها با رابط کاربری */

class TodoList {
  constructor() {
    this.tasks = [];
  }

  add(title) {
    const cleanTitle = title.trim();
    if (cleanTitle === "") {
      return false;
    }
    this.tasks.push({ id: Date.now(), title: cleanTitle, done: false });
    return true;
  }

  toggle(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.done = !task.done;
    }
  }

  getRemaining() {
    return this.tasks.filter((t) => !t.done).length;
  }
}

const todos = new TodoList();

const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const errorText = document.getElementById("error");
const taskList = document.getElementById("task-list");
const remainingText = document.getElementById("remaining");

// نمایش: فهرست را از روی داده‌های کلاس از نو می‌سازد
function render() {
  taskList.textContent = "";

  for (const task of todos.tasks) {
    const li = document.createElement("li");
    li.textContent = task.title;
    if (task.done) {
      li.classList.add("done");
    }
    li.addEventListener("click", () => {
      todos.toggle(task.id);
      render();
    });
    taskList.append(li);
  }

  remainingText.textContent = todos.getRemaining().toLocaleString("fa-IR") + " کار باقی مانده";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const added = todos.add(titleInput.value);
  if (!added) {
    errorText.textContent = "عنوان کار را بنویسید.";
    return;
  }

  errorText.textContent = "";
  titleInput.value = "";
  render();
});

render();
