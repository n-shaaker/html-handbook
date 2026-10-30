/* ۱۴) DOM: انتخاب عنصرها */

runIn("#out-1", function () {
  const menu = document.getElementById("menu");
  const firstItem = document.querySelector("#menu .item");
  const special = document.querySelector(".special");
  const allItems = document.querySelectorAll("#menu li");
  console.log(menu);
  console.log(firstItem.textContent);
  console.log(special.textContent);
  console.log(allItems.length);
  allItems.forEach(item => console.log("-", item.textContent));
  console.log(document.querySelector("#no-such-id"));
});

const selectorInput = document.getElementById("sel-input");
const info = document.getElementById("sel-info");
const lab = document.getElementById("lab");

function highlight() {
  lab.querySelectorAll(".demo-box").forEach(el => el.classList.remove("active"));
  if (selectorInput.value.trim() === "") {
    info.textContent = "یک انتخابگر بنویسید";
    return;
  }
  try {
    const found = lab.querySelectorAll(selectorInput.value);
    found.forEach(el => el.classList.add("active"));
    info.textContent = found.length + " عنصر پیدا شد";
  } catch (error) {
    info.textContent = "انتخابگر نامعتبر است";
  }
}

selectorInput.addEventListener("input", highlight);
highlight();
