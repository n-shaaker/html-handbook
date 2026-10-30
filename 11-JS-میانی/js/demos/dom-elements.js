/* ۱۷) DOM: ساختن و حذف عنصرها */

// مثال ۱
const container = document.getElementById("card-container");
const card = document.createElement("div");
card.className = "js-card";

const title = document.createElement("h4");
title.textContent = "کارت جدید";

const text = document.createElement("p");
text.textContent = "این کارت کاملاً با JavaScript ساخته شد.";

card.append(title, text);
container.append(card);

// مثال ۲
const itemInput = document.getElementById("item-input");
const addBtn = document.getElementById("item-add");
const list = document.getElementById("shop-list");

addBtn.addEventListener("click", () => {
  const value = itemInput.value.trim();
  if (value === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = value;

  const del = document.createElement("button");
  del.type = "button";
  del.textContent = "حذف";
  del.className = "btn danger";
  del.addEventListener("click", () => li.remove());

  li.append(span, del);
  list.append(li);
  itemInput.value = "";
  itemInput.focus();
});

itemInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});

// پیمایش
runIn("#out-1", function () {
  const middle = document.querySelector("#nav-demo .mid");
  console.log(middle.parentElement.id);
  console.log(middle.previousElementSibling.textContent);
  console.log(middle.nextElementSibling.textContent);
  console.log(middle.parentElement.children.length);
  console.log(middle.closest("section").className);
});
