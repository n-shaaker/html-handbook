// پروژه ترکیبی ۵ — کتابخانه کوچک مدرسه
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const onlyAvailable = document.getElementById("only-available");
const stats = document.getElementById("stats");
const bookBody = document.getElementById("book-body");
const emptyMessage = document.getElementById("empty-message");
const addForm = document.getElementById("add-form");
const formError = document.getElementById("form-error");

let nextId = books.length + 1;

// useGrouping: false یعنی سال را «۱۹۴۳» بنویس، نه «۱٬۹۴۳»
const formatYear = year => year.toLocaleString("fa-IR", { useGrouping: false });

function getVisibleBooks() {
  const query = searchInput.value.trim();

  // filter آرایه جدید می‌سازد؛ پس sort پایین‌تر به books دست نمی‌زند
  let result = books.filter(book => book.title.includes(query) || book.author.includes(query));

  if (onlyAvailable.checked) {
    result = result.filter(book => book.available);
  }

  if (sortSelect.value === "title") {
    result.sort((a, b) => a.title.localeCompare(b.title, "fa"));
  } else if (sortSelect.value === "newest") {
    result.sort((a, b) => b.year - a.year);
  } else if (sortSelect.value === "oldest") {
    result.sort((a, b) => a.year - b.year);
  }

  return result;
}

function createRow(book) {
  const { id, title, author, year, available } = book;
  const tr = document.createElement("tr");
  if (!available) {
    tr.classList.add("borrowed");
  }

  const texts = [title, author, formatYear(year), available ? "موجود" : "امانت"];
  texts.forEach(text => {
    const td = document.createElement("td");
    td.textContent = text;
    tr.append(td);
  });

  const actionCell = document.createElement("td");
  const button = document.createElement("button");
  button.type = "button";
  button.className = "toggle-btn";
  button.setAttribute("data-id", id);
  button.textContent = available ? "امانت بده" : "تحویل گرفتم";
  actionCell.append(button);
  tr.append(actionCell);

  return tr;
}

function renderStats(list) {
  if (list.length === 0) {
    stats.textContent = "آماری برای نمایش نیست.";
    return;
  }

  const availableCount = list.filter(book => book.available).length;
  const oldest = list.reduce((old, book) => (book.year < old.year ? book : old), list[0]);

  stats.textContent = "نمایش " + list.length.toLocaleString("fa-IR") + " کتاب — " +
    availableCount.toLocaleString("fa-IR") + " موجود — قدیمی‌ترین: " +
    oldest.title + " (" + formatYear(oldest.year) + ")";
}

function render() {
  const list = getVisibleBooks();

  bookBody.textContent = "";
  list.forEach(book => {
    bookBody.append(createRow(book));
  });

  emptyMessage.hidden = list.length > 0;
  renderStats(list);
}

function validateBook(title, author, yearText) {
  if (title === "" || author === "") {
    throw new Error("عنوان و نویسنده را وارد کنید.");
  }
  const year = Number(yearText);
  const thisYear = new Date().getFullYear();
  if (!Number.isInteger(year) || year < 1000 || year > thisYear) {
    throw new Error("سال انتشار درست نیست.");
  }
  return year;
}

searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);
onlyAvailable.addEventListener("change", render);

// یک شنونده برای همه دکمه‌های امانت/برگشت
bookBody.addEventListener("click", event => {
  const button = event.target.closest(".toggle-btn");
  if (button === null) {
    return;
  }
  const id = Number(button.getAttribute("data-id"));
  const book = books.find(b => b.id === id);
  book.available = !book.available;
  render();
});

addForm.addEventListener("submit", event => {
  event.preventDefault();
  formError.textContent = "";

  const title = addForm.elements.title.value.trim();
  const author = addForm.elements.author.value.trim();

  try {
    const year = validateBook(title, author, addForm.elements.year.value);
    books.push({ id: nextId, title: title, author: author, year: year, available: true });
    nextId++;
    addForm.reset();
    render();
  } catch (error) {
    formError.textContent = error.message;
  }
});

render();
