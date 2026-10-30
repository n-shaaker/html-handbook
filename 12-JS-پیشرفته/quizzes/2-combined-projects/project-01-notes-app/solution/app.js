/* پروژه ۱: دفترچه یادداشت — پاسخ */

const STORAGE_KEY = "quiz-notes";

const form = document.getElementById("note-form");
const titleInput = document.getElementById("note-title");
const bodyInput = document.getElementById("note-body");
const formError = document.getElementById("form-error");
const searchInput = document.getElementById("search");
const statusText = document.getElementById("status");
const notesList = document.getElementById("notes-list");

/* ===== داده و localStorage ===== */
function loadNotes() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // اگر چیزی ذخیره نشده بود (null) یا داده آرایه نبود، از فهرست خالی شروع می‌کنیم
    if (Array.isArray(saved)) return saved;
    return [];
  } catch (error) {
    return [];
  }
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

let notes = loadNotes();

function addNote(title, body) {
  notes.push({ id: Date.now(), title: title, body: body, pinned: false, createdAt: Date.now() });
  saveNotes();
}

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  saveNotes();
}

function togglePin(id) {
  const note = notes.find(note => note.id === id);
  note.pinned = !note.pinned;
  saveNotes();
}

// یادداشت‌های منطبق با جستجو؛ سنجاق‌شده‌ها اول، بعد جدیدترها
function getVisibleNotes(query) {
  const q = query.toLowerCase();
  const result = notes.filter(note =>
    note.title.toLowerCase().includes(q) || note.body.toLowerCase().includes(q)
  );

  result.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return b.createdAt - a.createdAt;
  });
  return result;
}

/* ===== نمایش ===== */
function createButton(action, text, label) {
  const button = document.createElement("button");
  button.className = "icon-btn";
  button.dataset.action = action;
  button.textContent = text;
  button.setAttribute("aria-label", label);
  return button;
}

function createNoteElement(note) {
  const li = document.createElement("li");
  li.className = "note";
  if (note.pinned) li.classList.add("pinned");
  li.dataset.id = note.id;

  const title = document.createElement("h2");
  title.textContent = note.title;
  li.append(title);

  if (note.body !== "") {
    const body = document.createElement("p");
    body.textContent = note.body;
    li.append(body);
  }

  const time = document.createElement("time");
  time.textContent = new Date(note.createdAt).toLocaleString("fa-IR");

  const pinButton = createButton("pin", "📌", "سنجاق کردن " + note.title);
  pinButton.setAttribute("aria-pressed", note.pinned);
  const actions = document.createElement("div");
  actions.className = "note-actions";
  actions.append(pinButton, createButton("delete", "🗑", "حذف " + note.title));

  li.append(time, actions);
  return li;
}

function render() {
  const query = searchInput.value.trim();
  const visible = getVisibleNotes(query);

  notesList.innerHTML = "";
  visible.forEach(note => notesList.append(createNoteElement(note)));

  const total = notes.length.toLocaleString("fa-IR");
  if (notes.length === 0) {
    statusText.textContent = "هنوز یادداشتی ننوشته‌اید.";
  } else if (query === "") {
    statusText.textContent = `${total} یادداشت`;
  } else {
    statusText.textContent = `${visible.length.toLocaleString("fa-IR")} یادداشت از ${total} با «${query}» پیدا شد.`;
  }
}

/* ===== رویدادها ===== */
form.addEventListener("submit", event => {
  event.preventDefault();
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (title === "") {
    formError.textContent = "عنوان یادداشت را وارد کنید.";
    titleInput.focus();
    return;
  }

  addNote(title, body);
  formError.textContent = "";
  form.reset();
  titleInput.focus();
  render();
});

// Event Delegation: یک listener برای دکمه‌های همه یادداشت‌ها
notesList.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;

  const id = Number(button.closest("li").dataset.id);
  if (button.dataset.action === "pin") {
    togglePin(id);
  } else if (button.dataset.action === "delete") {
    if (!confirm("این یادداشت حذف شود؟")) return;
    deleteNote(id);
  }
  render();
});

searchInput.addEventListener("input", render);

render();
