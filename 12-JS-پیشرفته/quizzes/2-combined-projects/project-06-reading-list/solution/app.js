/* پروژه ترکیبی ۶ — مدیریت کتاب‌های خوانده‌شده (پاسخ) */

const STORAGE_KEY = "reading-list";

/* ---------- کلاس‌ها (فقط داده؛ بدون DOM) ---------- */

class Book {
  constructor(title, author, isbn, isRead = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isRead = isRead;
  }

  toggleRead() {
    this.isRead = !this.isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  findByIsbn(isbn) {
    return this.books.find((book) => book.isbn === isbn);
  }

  add(book) {
    if (this.findByIsbn(book.isbn)) {
      return false;
    }
    this.books.push(book);
    return true;
  }

  remove(isbn) {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  getReadCount() {
    return this.books.filter((book) => book.isRead).length;
  }
}

/* ---------- ISBN با RegExp ---------- */

// "978-964 6194-71-5" ← "9789646194715"
function cleanIsbn(text) {
  return text.replace(/[-\s]/g, "");
}

function isValidIsbn(isbn) {
  return /^(\d{10}|\d{13})$/.test(isbn);
}

/* ---------- ذخیره و بارگذاری ---------- */

function saveLibrary() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(library.books));
}

function loadLibrary() {
  const result = new Library();
  let data;

  try {
    data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    return result; // JSON خراب
  }

  if (!Array.isArray(data)) {
    return result;
  }

  for (const item of data) {
    if (!item || !item.title || !item.isbn) {
      continue; // آیتم ناقص
    }
    // JSON متدها را نگه نمی‌دارد؛ پس دوباره Book می‌سازیم
    result.add(new Book(item.title, item.author, item.isbn, item.isRead === true));
  }
  return result;
}

const library = loadLibrary();

/* ---------- نمایش ---------- */

const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const stats = document.getElementById("stats");
const bookList = document.getElementById("book-list");

function createButton(text, action, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.dataset.action = action;
  button.setAttribute("aria-label", label);
  return button;
}

function render() {
  bookList.textContent = "";

  for (const book of library.books) {
    const info = document.createElement("span");
    info.className = "info";
    info.textContent = `${book.title} — ${book.author} (${book.isbn})`;

    const status = document.createElement("span");
    status.className = "status";
    status.textContent = book.isRead ? "✔ خوانده‌شده" : "📖 در صف";

    const li = document.createElement("li");
    li.dataset.isbn = book.isbn;
    li.classList.toggle("is-read", book.isRead);
    li.append(
      info,
      status,
      createButton(book.isRead ? "نخواندم" : "خواندم", "toggle", "تغییر وضعیت " + book.title),
      createButton("حذف", "delete", "حذف " + book.title)
    );
    bookList.append(li);
  }

  const total = library.books.length;
  if (total === 0) {
    stats.textContent = "هنوز کتابی ثبت نکرده‌اید.";
  } else {
    stats.textContent =
      `${total.toLocaleString("fa-IR")} کتاب — ` +
      `${library.getReadCount().toLocaleString("fa-IR")} خوانده‌شده`;
  }
}

/* ---------- فرم ---------- */

function setError(input, message) {
  document.getElementById(input.id + "-error").textContent = message;
  input.setAttribute("aria-invalid", message !== "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = cleanIsbn(isbnInput.value);

  setError(titleInput, title.length >= 2 ? "" : "عنوان حداقل ۲ حرف باشد.");
  setError(authorInput, author !== "" ? "" : "نام نویسنده را بنویسید.");
  setError(isbnInput, isValidIsbn(isbn) ? "" : "شابک باید ۱۰ یا ۱۳ رقم باشد.");

  if (title.length < 2 || author === "" || !isValidIsbn(isbn)) {
    return;
  }

  const added = library.add(new Book(title, author, isbn));
  if (!added) {
    setError(isbnInput, "این کتاب قبلاً ثبت شده است.");
    return;
  }

  saveLibrary();
  render();
  form.reset();
  titleInput.focus();
});

/* ---------- Event Delegation روی فهرست ---------- */

bookList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const isbn = button.closest("li").dataset.isbn;

  if (button.dataset.action === "toggle") {
    library.findByIsbn(isbn).toggleRead();
  } else if (button.dataset.action === "delete") {
    library.remove(isbn);
  }

  saveLibrary();
  render();
});

render();
