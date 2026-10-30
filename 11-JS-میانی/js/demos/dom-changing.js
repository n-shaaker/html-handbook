/* ۱۵) DOM: تغییر محتوا، ویژگی و ظاهر */

runIn("#out-1", function () {
  const link = document.querySelector("#demo-link");
  console.log(link.getAttribute("href"));
  link.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model");
  link.textContent = "مستندات DOM در MDN";
  console.log(link.href);
  const back = document.querySelector("#back-link");
  console.log(back.getAttribute("href"));
  console.log(back.href);
  const product = document.querySelector("#product");
  console.log(product.dataset.price, product.dataset.color);
  console.log(typeof product.dataset.price);
});

// textContent یا innerHTML
const commentInput = document.getElementById("comment-input");
const previewBtn = document.getElementById("preview-btn");
const preview = document.getElementById("preview");

previewBtn.addEventListener("click", () => {
  preview.textContent = commentInput.value;
});

// classList
const box = document.getElementById("cls-box");
const addBtn = document.getElementById("cls-add");
const removeBtn = document.getElementById("cls-remove");
const toggleBtn = document.getElementById("cls-toggle");
const checkBtn = document.getElementById("cls-check");

addBtn.addEventListener("click", () => box.classList.add("active"));
removeBtn.addEventListener("click", () => box.classList.remove("active"));
toggleBtn.addEventListener("click", () => box.classList.toggle("active"));
checkBtn.addEventListener("click", () => {
  box.textContent = "کلاس active دارد؟ " + box.classList.contains("active");
});

// style
let size = 16;
const text = document.getElementById("size-text");
const biggerBtn = document.getElementById("size-up");
const smallerBtn = document.getElementById("size-down");

biggerBtn.addEventListener("click", () => {
  size += 2;
  text.style.fontSize = size + "px";
});

smallerBtn.addEventListener("click", () => {
  size = Math.max(10, size - 2);
  text.style.fontSize = size + "px";
});

// غیرفعال کردن دکمه
const agree = document.getElementById("agree");
const sendBtn = document.getElementById("send-btn");

agree.addEventListener("change", () => {
  sendBtn.disabled = !agree.checked;
});
