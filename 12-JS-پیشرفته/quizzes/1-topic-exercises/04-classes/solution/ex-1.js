/* تمرین ۱ — کلاس کتاب */

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getSummary() {
    return `${this.title} — ${this.author} (${this.pages.toLocaleString("fa-IR")} صفحه)`;
  }

  isLong() {
    return this.pages > 300;
  }
}

const books = [
  new Book("شازده کوچولو", "سنت‌اگزوپری", 96),
  new Book("کلیدر", "محمود دولت‌آبادی", 2836),
  new Book("قصه‌های مجید", "هوشنگ مرادی کرمانی", 512),
];

const bookList = document.getElementById("book-list");

for (const book of books) {
  const li = document.createElement("li");
  li.textContent = book.getSummary();
  if (book.isLong()) {
    li.textContent += " 📚 طولانی";
  }
  bookList.append(li);
}
