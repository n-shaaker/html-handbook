/* تمرین ۳ — ارسال پست جدید با POST */

const form = document.getElementById("post-form");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const submitButton = document.getElementById("submit");
const output = document.getElementById("output");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  output.classList.remove("error");

  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (title === "" || body === "") {
    output.classList.add("error");
    output.textContent = "عنوان و متن را بنویسید.";
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "در حال ارسال...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, body: body, userId: 1 }),
    });
    if (!response.ok) {
      throw new Error("خطای سرور: " + response.status);
    }
    const newPost = await response.json();

    output.textContent = `✔ پست با شماره ${newPost.id.toLocaleString("fa-IR")} ساخته شد.`;
    form.reset();
  } catch (error) {
    console.error(error);
    output.classList.add("error");
    output.textContent = "ارسال ناموفق بود. دوباره تلاش کنید.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "ارسال";
  }
});
