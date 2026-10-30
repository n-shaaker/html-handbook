/*
  Event notes — run in the Console on any page that contains this markup
  (or paste the markup into a blank HTML file):

  <button id="demo-btn" type="button">کلیک کن</button>
  <form id="demo-form">
    <label for="demo-name">نام</label>
    <input id="demo-name" name="name" />
    <select id="demo-city"><option>تهران</option><option>شیراز</option></select>
    <button type="submit">ارسال</button>
  </form>
  <ul id="demo-list"><li><button type="button" data-id="1">حذف ۱</button></li></ul>
*/

const button = document.querySelector("#demo-btn");

// click: event.target is the element that received the event
button?.addEventListener("click", (event) => {
  console.log("clicked", event.target);
});

const form = document.querySelector("#demo-form");

// submit: listen on the form (not the button) so Enter key submits too
form?.addEventListener("submit", (event) => {
  // Stop the browser from reloading the page on submit
  event.preventDefault();
  const data = new FormData(form); // reads values by each field's name attribute
  console.log("form submit handled in JavaScript", Object.fromEntries(data));
});

// input: fires on every keystroke — good for live validation / search
document.querySelector("#demo-name")?.addEventListener("input", (event) => {
  console.log("typing:", event.target.value);
});

// change: fires when the value is committed (select, checkbox, input on blur)
document.querySelector("#demo-city")?.addEventListener("change", (event) => {
  console.log("city:", event.target.value);
});

// keydown: event.key tells which key was pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") console.log("Escape pressed");
});

// Event delegation: one listener on the parent handles buttons added later too
document.querySelector("#demo-list")?.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest("button[data-id]");
  if (!deleteBtn) return;
  console.log("delete item", deleteBtn.dataset.id);
});
