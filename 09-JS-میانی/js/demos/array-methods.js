/* ۲) متدهای آرایه (Array Methods) */

runIn("#out-1", function () {
  const list = ["ب", "پ"];
  list.push("ت");
  list.unshift("الف");
  console.log(list);
  const last = list.pop();
  const first = list.shift();
  console.log(last, first);
  console.log(list);
});

runIn("#out-2", function () {
  const nums = [1, 2, 3, 4, 5];
  const removed = nums.splice(1, 2);
  console.log(removed);
  console.log(nums);
  nums.splice(1, 0, "x", "y");
  console.log(nums);
});

runIn("#out-3", function () {
  const letters = ["a", "b", "c", "d", "e"];
  console.log(letters.slice(1, 3));
  console.log(letters.concat(["f", "g"]));
  console.log(letters.join(" - "));
  console.log(letters);
});

// صف انتظار
const queue = [];
const nameInput = document.getElementById("q-name");
const addBtn = document.getElementById("q-add");
const nextBtn = document.getElementById("q-next");
const info = document.getElementById("q-info");
const view = document.getElementById("q-view");

function render() {
  view.textContent = "صف: " + queue.join("، ");
}

addBtn.addEventListener("click", function () {
  let name = nameInput.value.trim();
  if (name === "") {
    name = "مهمان";
  }
  queue.push(name);
  nameInput.value = "";
  render();
});

nextBtn.addEventListener("click", function () {
  if (queue.length === 0) {
    info.textContent = "صف خالی است.";
  } else {
    const person = queue.shift();
    info.textContent = `نوبت ${person} است.`;
  }
  render();
});

render();
