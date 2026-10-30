/* تمرین ۱ — خواندن یک پست با fetch */

const idInput = document.getElementById("post-id");
const output = document.getElementById("output");

async function loadPost(id) {
  output.classList.remove("error");
  output.textContent = "در حال بارگذاری...";

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error("پستی با این شماره پیدا نشد.");
    }
    const post = await response.json();

    const title = document.createElement("h2");
    title.textContent = post.title;
    const body = document.createElement("p");
    body.textContent = post.body;

    output.textContent = "";
    output.append(title, body);
  } catch (error) {
    console.error(error);
    output.classList.add("error");
    if (error.name === "TypeError") {
      // وقتی اینترنت قطع است، fetch خودش خطای TypeError می‌دهد
      output.textContent = "اتصال اینترنت برقرار نیست.";
    } else {
      output.textContent = error.message;
    }
  }
}

document.getElementById("load").addEventListener("click", () => {
  loadPost(idInput.value);
});
