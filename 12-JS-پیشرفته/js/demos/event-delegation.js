/* ۱۵) انتشار رویداد و Event Delegation */

const log = createLog("#out-1");
const outBox = document.getElementById("out-1");
const stopCheck = document.getElementById("stop-check");
const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

outer.addEventListener("click", () => log("outer (پدربزرگ)"));
middle.addEventListener("click", () => log("middle (پدر)"));
inner.addEventListener("click", (event) => {
  log("inner (خود دکمه)");
  if (stopCheck.checked) {
    event.stopPropagation();
    log("— stopPropagation: رویداد بالاتر نرفت —");
  }
});

outer.addEventListener("click", () => (outBox.textContent = ""), true);

const list = document.getElementById("deleg-list");
const addBtn = document.getElementById("add-item");
let counter = 3;

list.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".delete");
  if (deleteBtn) {
    deleteBtn.closest("li").remove();
    return;
  }
  const li = event.target.closest("li");
  if (li && list.contains(li)) li.classList.toggle("done");
});

addBtn.addEventListener("click", () => {
  counter++;
  list.insertAdjacentHTML("beforeend",
    `<li><span>آیتم جدید ${counter}</span><button class="btn danger delete">حذف</button></li>`);
});
