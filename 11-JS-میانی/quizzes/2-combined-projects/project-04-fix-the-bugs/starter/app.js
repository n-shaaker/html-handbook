/* کارهای امروز */

/* ===== عنصرهای صفحه ===== */
const taskList = document.querySelectorAll("#task-list");
const summaryText = document.getElementById("summary");
const timeRangeText = document.getElementById("time-range");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortPriorityBtn = document.getElementById("sort-priority");
const sortResetBtn = document.getElementById("sort-reset");
const importInput = document.getElementById("import-input");
const importBtn = document.getElementById("import-btn");
const importMsg = document.getElementById("import-msg");

/* ===== داده ===== */
const priorityLabels = { 1: "اولویت کم", 2: "اولویت متوسط", 3: "اولویت زیاد" };

let tasks = [
  { id: 1, title: "نوشتن گزارش هفتگی", priority: 2, minutes: 120, done: false },
  { id: 2, title: "جواب دادن به ایمیل‌ها", priority: 1, minutes: 15, done: true },
  { id: 3, title: "مرور کد همکار", priority: 3, minutes: 45, done: false },
  { id: 4, title: "به‌روزرسانی تقویم", priority: 1, minutes: 5, done: true },
  { id: 5, title: "جلسه با تیم طراحی", priority: 2, minutes: 30, done: false }
];

render();

/* ===== حالت نمایش ===== */
let currentFilter = "all";
let isSortedByPriority = false;

const stats = {
  title: "کارهای امروز",
  summary: () => {
    const doneCount = tasks.filter((task) => task.done).length;
    return `${this.title}: ${toFa(doneCount)} از ${toFa(tasks.length)} انجام شده`;
  }
};

/* ===== توابع کمکی ===== */
function toFa(number) {
  return number.toLocaleString("fa-IR");
}

function getVisibleTasks() {
  const filtered = tasks.forEach((task) => {
    if (currentFilter === "active") {
      return !task.done;
    }
    if (currentFilter === "done") {
      return task.done;
    }
    return true;
  });

  if (isSortedByPriority) {
    filtered.sort((a, b) => b.priority - a.priority);
  }
  return filtered;
}

function getMostImportantTask() {
  const copy = tasks;
  copy.sort((a, b) => b.priority - a.priority);
  return copy[0];
}

function toggleTask(id) {
  const task = tasks.find((item) => item.id === id);
  task.done = !task.done;
  render();
}

/* ===== رندر ===== */
function createTaskItem(task) {
  const li = document.createElement("li");
  if (task.done) {
    li.classList.add("done");
  }

  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;
  checkbox.addEventListener("change", () => toggleTask(task.id));

  const title = document.createElement("span");
  title.className = "task-title";
  title.textContent = task.title;
  label.append(checkbox, " ", title);

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = `${priorityLabels[task.priority]} · ${toFa(task.minutes)} دقیقه`;

  li.append(label, badge);
  return li;
}

function renderSummary() {
  const topTask = getMostImportantTask();
  if (topTask) {
    summaryText.textContent = `${stats.summary()} | مهم‌ترین کار: ${topTask.title}`;
  } else {
    summaryText.textContent = stats.summary();
  }
}

function renderTimeRange() {
  if (tasks.length === 0) {
    timeRangeText.textContent = "";
    return;
  }
  const minutesList = tasks.map((task) => task.minutes).sort();
  const shortest = minutesList[0];
  const longest = minutesList[minutesList.length - 1];
  timeRangeText.textContent = `کوتاه‌ترین کار: ${toFa(shortest)} دقیقه | طولانی‌ترین کار: ${toFa(longest)} دقیقه`;
}

function render() {
  const visible = getVisibleTasks();

  taskList.innerHTML = "";
  visible.forEach((task) => {
    taskList.append(createTaskItem(task));
  });

  if (visible.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "کاری در این فهرست نیست.";
    taskList.append(empty);
  }

  renderSummary();
  renderTimeRange();
}

function updateFilterButtons() {
  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.filter === currentFilter);
  });
}

/* ===== رویدادها ===== */
for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    currentFilter = filterButtons[i].dataset.filter;
    updateFilterButtons();
    render();
  });
}

sortPriorityBtn.addEventListener("click", () => {
  isSortedByPriority = true;
  render();
});

sortResetBtn.addEventListener("click", () => {
  isSortedByPriority = false;
  render();
});

importBtn.addEventListener("click", () => {
  const data = JSON.parse(importInput.value);
  tasks = data;
  importMsg.textContent = `✔ ${toFa(data.length)} کار وارد شد.`;
  render();
});
