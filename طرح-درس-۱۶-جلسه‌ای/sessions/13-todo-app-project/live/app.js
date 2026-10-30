const STORAGE_KEY = "bootcamp.todos.v1";

/** @typedef {{ id: string, text: string, completed: boolean }} Todo */

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const emptyEl = document.querySelector("#todo-empty");
const counterEl = document.querySelector("#todo-counter");
const clearDoneBtn = document.querySelector("#clear-completed");
const filterButtons = document.querySelectorAll("[data-filter]");

/** @type {Todo[]} */
let todos = loadTodos();
let currentFilter = "all";

// localStorage can contain anything (old versions, manual edits): keep only valid todos
function isValidTodo(item) {
  return (
    item !== null &&
    typeof item === "object" &&
    typeof item.id === "string" &&
    typeof item.text === "string" &&
    typeof item.completed === "boolean"
  );
}

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter(isValidTodo) : [];
  } catch {
    return [];
  }
}

function saveTodos() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    // Storage can be full or blocked (e.g. some private modes); the app still works in memory
    console.warn("Could not save todos", error);
  }
}

// crypto.randomUUID only exists in secure contexts (https, localhost)
function createId() {
  if (window.crypto?.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getVisibleTodos() {
  if (currentFilter === "active") {
    return todos.filter((todo) => !todo.completed);
  }
  if (currentFilter === "completed") {
    return todos.filter((todo) => todo.completed);
  }
  return todos;
}

function createTodoItem(todo) {
  const li = document.createElement("li");
  li.className = `todo-item${todo.completed ? " is-completed" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => toggleTodo(todo.id));

  // A real <label> makes the text clickable and names the checkbox for screen readers
  const text = document.createElement("label");
  text.htmlFor = checkbox.id;
  text.className = "todo-text";
  text.textContent = todo.text;

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "todo-remove";
  removeBtn.textContent = "حذف";
  removeBtn.setAttribute("aria-label", `حذف «${todo.text}»`);
  removeBtn.addEventListener("click", () => deleteTodo(todo.id));

  li.append(checkbox, text, removeBtn);
  return li;
}

function render() {
  const visible = getVisibleTodos();
  list.replaceChildren(...visible.map(createTodoItem));

  const emptyMessages = {
    all: "هنوز کاری اضافه نشده است.",
    active: "کار فعالی باقی نمانده است.",
    completed: "هنوز کاری انجام نشده است.",
  };
  emptyEl.textContent = emptyMessages[currentFilter];
  emptyEl.hidden = visible.length > 0;

  const remaining = todos.filter((todo) => !todo.completed).length;
  counterEl.textContent = `${remaining.toLocaleString("fa-IR")} کار باقی مانده`;
  clearDoneBtn.disabled = !todos.some((todo) => todo.completed);
}

function addTodo(text) {
  todos.push({ id: createId(), text, completed: false });
  saveTodos();
  render();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  render();
}

function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
  saveTodos();
  render();
}

function clearCompleted() {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) {
    input.focus();
    return;
  }
  addTodo(text);
  input.value = "";
  input.focus();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((btn) => {
      const isActive = btn === button;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
    render();
  });
});

clearDoneBtn.addEventListener("click", clearCompleted);

// Keep several open tabs in sync: the storage event fires in the *other* tabs
window.addEventListener("storage", (event) => {
  if (event.key === STORAGE_KEY) {
    todos = loadTodos();
    render();
  }
});

render();
