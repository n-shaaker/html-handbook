/* پروژه ۲: فهرست کاربران با Fetch — پاسخ */

const API = "https://jsonplaceholder.typicode.com";

const searchInput = document.getElementById("search");
const statusText = document.getElementById("status");
const retryBtn = document.getElementById("retry-btn");
const usersList = document.getElementById("users-list");
const postsPanel = document.getElementById("posts-panel");
const postsTitle = document.getElementById("posts-title");
const postsStatus = document.getElementById("posts-status");
const postsList = document.getElementById("posts-list");
const closePostsBtn = document.getElementById("close-posts");

let users = [];
let selectedUserId = null;
let searchTimer = null;

function toFa(number) {
  return number.toLocaleString("fa-IR");
}

async function fetchJSON(url) {
  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    throw new Error("اتصال به سرور برقرار نشد؛ اینترنت خود را بررسی کنید.");
  }

  // fetch برای ۴۰۴ و ۵۰۰ خطا نمی‌دهد؛ خودمان بررسی می‌کنیم
  if (!response.ok) {
    throw new Error(`سرور خطا داد (کد ${response.status}).`);
  }
  return response.json();
}

/* ===== کاربران ===== */
function getVisibleUsers() {
  const q = searchInput.value.trim().toLowerCase();
  return users.filter(user =>
    user.name.toLowerCase().includes(q) ||
    user.email.toLowerCase().includes(q) ||
    user.address.city.toLowerCase().includes(q)
  );
}

function renderUsers() {
  const visible = getVisibleUsers();
  usersList.innerHTML = "";

  visible.forEach(user => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "user-btn";
    button.dataset.userId = user.id;
    button.setAttribute("aria-pressed", user.id === selectedUserId);

    const name = document.createElement("span");
    name.className = "user-name";
    name.dir = "auto";
    name.textContent = user.name;

    const meta = document.createElement("span");
    meta.className = "user-meta";
    meta.dir = "auto";
    meta.textContent = `${user.email} · ${user.address.city} · ${user.company.name}`;

    button.append(name, meta);
    const li = document.createElement("li");
    li.append(button);
    usersList.append(li);
  });

  if (searchInput.value.trim() === "") {
    statusText.textContent = `${toFa(users.length)} کاربر`;
  } else {
    statusText.textContent = `${toFa(visible.length)} کاربر از ${toFa(users.length)} پیدا شد.`;
  }
}

async function loadUsers() {
  statusText.textContent = "در حال بارگذاری کاربران...";
  retryBtn.hidden = true;
  searchInput.disabled = true;
  usersList.innerHTML = "";

  try {
    users = await fetchJSON(`${API}/users`);
    searchInput.disabled = false;
    renderUsers();
  } catch (error) {
    statusText.textContent = "✖ " + error.message;
    retryBtn.hidden = false;
  }
}

/* ===== پست‌ها ===== */
// فقط aria-pressed را عوض می‌کنیم تا فوکوس کیبورد روی دکمه بماند
function updatePressedButtons() {
  usersList.querySelectorAll(".user-btn").forEach(button => {
    button.setAttribute("aria-pressed", Number(button.dataset.userId) === selectedUserId);
  });
}

async function loadPosts(userId) {
  const user = users.find(user => user.id === userId);
  selectedUserId = userId;
  updatePressedButtons();

  postsPanel.hidden = false;
  postsTitle.textContent = "پست‌های " + user.name;
  postsStatus.textContent = "در حال بارگذاری پست‌ها...";
  postsList.innerHTML = "";

  try {
    const posts = await fetchJSON(`${API}/posts?userId=${userId}`);
    // اگر در این فاصله کاربر دیگری انتخاب شده، این پاسخ قدیمی است
    if (selectedUserId !== userId) return;

    posts.forEach(post => {
      const title = document.createElement("h3");
      title.dir = "auto";
      title.textContent = post.title;
      const body = document.createElement("p");
      body.dir = "auto";
      body.textContent = post.body;

      const li = document.createElement("li");
      li.append(title, body);
      postsList.append(li);
    });
    postsStatus.textContent = `${toFa(posts.length)} پست`;
  } catch (error) {
    if (selectedUserId !== userId) return;
    postsStatus.textContent = "✖ " + error.message;
  }
}

function closePosts() {
  selectedUserId = null;
  postsPanel.hidden = true;
  updatePressedButtons();
}

/* ===== رویدادها ===== */
// debounce: هر حرف تازه، تایمر قبلی را لغو می‌کند؛ جستجو ۳۰۰ میلی‌ثانیه بعد از آخرین حرف انجام می‌شود
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(renderUsers, 300);
});

usersList.addEventListener("click", event => {
  const button = event.target.closest(".user-btn");
  if (!button) return;
  loadPosts(Number(button.dataset.userId));
});

retryBtn.addEventListener("click", loadUsers);
closePostsBtn.addEventListener("click", closePosts);

loadUsers();
