/* ۱۹) پروژه جمع‌بندی: فهرست کارها (Todo List) */

let todos = [
  { id: 1, text: "خواندن درس آرایه‌ها", done: true },
  { id: 2, text: "تمرین map و filter", done: false }
];
let filter = "all";

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const count = document.getElementById("todo-count");
const filterButtons = document.querySelectorAll("#filters button");

function render() {
  const visible = todos.filter(t => {
    if (filter === "active") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  list.innerHTML = "";
  visible.forEach(todo => {
    const li = document.createElement("li");
    if (todo.done) li.classList.add("done");

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const span = document.createElement("span");
    span.textContent = todo.text;
    label.append(checkbox, span);

    const del = document.createElement("button");
    del.type = "button";
    del.className = "btn danger";
    del.textContent = "حذف";
    del.addEventListener("click", () => deleteTodo(todo.id));

    li.append(label, del);
    list.append(li);
  });

  if (visible.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "کاری در این فهرست نیست.";
    list.append(empty);
  }

  const left = todos.filter(t => !t.done).length;
  count.textContent = `${left} کار باقی‌مانده از ${todos.length}`;
}

function addTodo(text) {
  todos.push({ id: Date.now(), text, done: false });
  render();
}

function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  todo.done = !todo.done;
  render();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") return;
  addTodo(text);
  input.value = "";
  input.focus();
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filter = btn.dataset.filter;
    // همه دکمه‌ها کم‌رنگ، فقط دکمه کلیک‌شده رنگ اصلی
    filterButtons.forEach(b => b.classList.add("secondary"));
    btn.classList.remove("secondary");
    render();
  });
});

render();
