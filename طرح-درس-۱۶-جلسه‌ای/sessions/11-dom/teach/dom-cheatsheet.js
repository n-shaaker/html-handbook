/*
  DOM cheatsheet — paste into the DevTools Console while live/index.html is open
  (it has an <h1>, .card elements after rendering, and #products).
*/

// Selection: querySelector returns the first match or null
const title = document.querySelector("h1");
const cards = document.querySelectorAll(".card"); // NodeList (supports forEach)
const productsRoot = document.querySelector("#products");

if (!title || !productsRoot) {
  throw new Error("Element not found — check the selector or run after the page loads.");
}

// Reading / writing content
title.textContent = "عنوان به‌روزشده"; // safe: treated as plain text
// title.innerHTML = "<em>HTML</em>"; // parses HTML — never use with user input (XSS)

// Classes and inline style
title.classList.add("is-active");
title.classList.toggle("is-active"); // add if missing, remove if present
title.style.color = "#2563eb"; // prefer toggling classes over inline styles

// Attributes and data-* attributes
productsRoot.setAttribute("aria-label", "لیست محصولات");
productsRoot.dataset.view = "grid"; // → data-view="grid"

// Looping over many elements
cards.forEach((card, index) => {
  card.dataset.index = String(index);
});

// Creating nodes
const note = document.createElement("p");
note.textContent = "این پاراگراف با JavaScript ساخته شد.";
productsRoot.before(note); // before / after / append / prepend

// Removing nodes
note.remove();
