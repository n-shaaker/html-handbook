const loadBtn = document.querySelector("#load-btn");
const statusEl = document.querySelector("#status");
const userList = document.querySelector("#user-list");

const API_URL = "https://jsonplaceholder.typicode.com/users";
const MAX_USERS = 5;

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle("is-error", isError);
}

function getErrorMessage(error) {
  // TypeError from fetch: the request never reached the server (offline, DNS, CORS)
  if (error instanceof TypeError) {
    return "اتصال به سرور برقرار نشد. اینترنت خود را بررسی کنید و دوباره تلاش کنید.";
  }
  // SyntaxError from response.json(): the body was not valid JSON
  if (error instanceof SyntaxError) {
    return "پاسخ سرور قابل خواندن نبود.";
  }
  return `سرور خطا برگرداند (${error.message}). کمی بعد دوباره تلاش کنید.`;
}

async function loadUsers() {
  setStatus("در حال بارگذاری…");
  userList.replaceChildren();
  loadBtn.disabled = true;

  try {
    const response = await fetch(API_URL);

    // fetch only rejects on network failure; HTTP errors (404, 500) must be checked manually
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const users = await response.json();

    if (!Array.isArray(users) || users.length === 0) {
      setStatus("کاربری برای نمایش وجود ندارد.");
      return;
    }

    const visibleUsers = users.slice(0, MAX_USERS);
    for (const user of visibleUsers) {
      const li = document.createElement("li");
      // textContent: API data is never inserted as HTML
      li.textContent = `${user.name} — ${user.email}`;
      userList.append(li);
    }

    setStatus(`${visibleUsers.length.toLocaleString("fa-IR")} کاربر بارگذاری شد.`);
  } catch (error) {
    console.error(error);
    setStatus(getErrorMessage(error), true);
  } finally {
    loadBtn.disabled = false;
  }
}

loadBtn.addEventListener("click", loadUsers);
