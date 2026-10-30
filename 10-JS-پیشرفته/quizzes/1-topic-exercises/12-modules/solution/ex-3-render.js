/* تمرین ۳ — ماژول نمایش: فقط چیزی را که می‌گیرد نشان می‌دهد */

export function renderBooks(list, listElement) {
  listElement.textContent = "";

  if (list.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "کتابی پیدا نشد.";
    listElement.append(empty);
    return;
  }

  for (const book of list) {
    const li = document.createElement("li");
    li.textContent = `${book.title} — ${book.author}`;
    listElement.append(li);
  }
}
