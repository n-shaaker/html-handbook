/* تمرین ۳ — فایل اصلی: داده و نمایش را به هم وصل می‌کند */

import { books } from "./ex-3-data.js";
import { renderBooks } from "./ex-3-render.js";

const searchInput = document.getElementById("search");
const bookList = document.getElementById("book-list");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  const found = books.filter((book) => book.title.includes(query) || book.author.includes(query));
  renderBooks(found, bookList);
});

renderBooks(books, bookList);
