/* ۱۱) دریافت داده از سرور (Fetch API) */

const API = "https://jsonplaceholder.typicode.com";

async function fetchJSON(url, options = {}) {
  let response;
  try {
    response = await fetch(url, options);
  } catch (err) {
    throw new Error("اتصال به سرور برقرار نشد؛ اتصال اینترنت خود را بررسی کنید.");
  }

  if (!response.ok) {
    throw new Error(`سرور خطا داد (کد ${response.status}).`);
  }
  return response.json();
}

const statusEl = document.getElementById("fetch-status");
const list = document.getElementById("user-list");
const loadBtn = document.getElementById("load-btn");
const badBtn = document.getElementById("bad-btn");

async function loadUsers(url) {
  statusEl.textContent = "در حال بارگذاری...";
  list.innerHTML = "";
  loadBtn.disabled = true;
  badBtn.disabled = true;

  try {
    const users = await fetchJSON(url);
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} — ${user.email} — ${user.address.city}`;
      list.append(li);
    });
    statusEl.textContent = `✔ ${users.length} کاربر دریافت شد.`;
  } catch (err) {
    statusEl.textContent = "✖ " + err.message;
  } finally {
    loadBtn.disabled = false;
    badBtn.disabled = false;
  }
}

loadBtn.addEventListener("click", () => loadUsers(`${API}/users`));
badBtn.addEventListener("click", () => loadUsers(`${API}/no-such-page`));

document.getElementById("post-btn").addEventListener("click", async () => {
  document.getElementById("out-post").textContent = "";
  const log = createLog("#out-post");

  async function createPost() {
    const result = await fetchJSON(`${API}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "سلام", body: "اولین پست من", userId: 1 })
    });
    log(result);
  }

  log("در حال ارسال...");
  try {
    await createPost();
  } catch (err) {
    log("✖ ارسال ناموفق بود:", err.message);
  }
});
