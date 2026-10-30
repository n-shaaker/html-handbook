/* تمرین ۲ — نظرسنجی ناهار با Map */

const votes = new Map(); // نام غذا ← تعداد رأی

const results = document.getElementById("results");
const summary = document.getElementById("summary");

function addVote(food) {
  if (votes.has(food)) {
    votes.set(food, votes.get(food) + 1);
  } else {
    votes.set(food, 1);
  }
}

function render() {
  results.textContent = "";

  if (votes.size === 0) {
    summary.textContent = "هنوز رأیی ثبت نشده.";
    return;
  }

  for (const [food, count] of votes) {
    const li = document.createElement("li");
    li.textContent = `${food}: ${count.toLocaleString("fa-IR")} رأی`;
    results.append(li);
  }

  summary.textContent = votes.size.toLocaleString("fa-IR") + " غذا رأی گرفته‌اند";
}

document.querySelectorAll(".vote").forEach((button) => {
  button.addEventListener("click", () => {
    addVote(button.dataset.food);
    render();
  });
});

render();
