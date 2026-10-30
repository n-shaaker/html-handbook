// تمرین ۳ — پسندیدن پست‌ها با یک شنونده
const posts = document.getElementById("posts");
const totalEl = document.getElementById("total");
let total = 0;

posts.addEventListener("click", event => {
  const button = event.target.closest(".like-btn");
  if (button === null) {
    return;
  }

  const likesEl = button.parentElement.querySelector(".likes");
  likesEl.textContent = Number(likesEl.textContent) + 1;
  button.classList.add("liked");

  total++;
  totalEl.textContent = total.toLocaleString("fa-IR");
});
