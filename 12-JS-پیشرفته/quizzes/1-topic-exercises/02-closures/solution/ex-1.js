/* تمرین ۱ — شمارنده لایک با closure */

function createCounter() {
  let count = 0; // فقط تابع داخلی به این متغیر دسترسی دارد

  return function () {
    count++;
    return count;
  };
}

const post1Likes = createCounter();
const post2Likes = createCounter();

const count1 = document.getElementById("count-1");
const count2 = document.getElementById("count-2");

document.getElementById("like-1").addEventListener("click", () => {
  count1.textContent = post1Likes().toLocaleString("fa-IR");
});

document.getElementById("like-2").addEventListener("click", () => {
  count2.textContent = post2Likes().toLocaleString("fa-IR");
});
