const form = document.querySelector("#search-form");
const queryInput = document.querySelector("#query");
const statusEl = document.querySelector("#status");
const resultsEl = document.querySelector("#results");

const API_BASE = "https://api.tvmaze.com";
const PLACEHOLDER_IMAGE = "https://placehold.co/300x450/1f2937/94a3b8?text=No+Image";

// Lets a new search cancel the previous request so an old, slower response
// can never overwrite newer results.
let currentController = null;

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle("is-error", isError);
}

async function searchShows(query, signal) {
  const url = `${API_BASE}/search/shows?q=${encodeURIComponent(query)}`;
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

function createCard(show) {
  const article = document.createElement("article");
  article.className = "card";

  const img = document.createElement("img");
  img.src = show.image?.medium ?? PLACEHOLDER_IMAGE;
  img.alt = show.name ? `پوستر ${show.name}` : "پوستر نمایش";
  img.width = 210;
  img.height = 295;
  img.loading = "lazy";

  const body = document.createElement("div");
  body.className = "card__body";

  const title = document.createElement("h2");
  if (show.url) {
    const link = document.createElement("a");
    link.href = show.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = show.name ?? "بدون عنوان";
    title.append(link);
  } else {
    title.textContent = show.name ?? "بدون عنوان";
  }

  const meta = document.createElement("p");
  const year = show.premiered ? show.premiered.slice(0, 4) : "نامشخص";
  const rating = show.rating?.average ?? "—";
  meta.textContent = `${year} · ★ ${rating}`;

  const genres = document.createElement("p");
  genres.className = "card__genres";
  genres.textContent = show.genres?.length ? show.genres.join("، ") : "ژانر نامشخص";

  body.append(title, meta, genres);
  article.append(img, body);
  return article;
}

function renderShows(items, query) {
  const shows = items.map((item) => item.show).filter(Boolean);

  if (shows.length === 0) {
    resultsEl.replaceChildren();
    setStatus(`نتیجه‌ای برای «${query}» پیدا نشد. عنوان دیگری را امتحان کنید.`);
    return;
  }

  resultsEl.replaceChildren(...shows.map(createCard));
  setStatus(`${shows.length.toLocaleString("fa-IR")} نتیجه برای «${query}» پیدا شد.`);
}

function getErrorMessage(error) {
  if (error instanceof TypeError) {
    return "اتصال به سرور برقرار نشد. اینترنت خود را بررسی کنید و دوباره تلاش کنید.";
  }
  return `در دریافت داده‌ها مشکلی پیش آمد (${error.message}). کمی بعد دوباره تلاش کنید.`;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = queryInput.value.trim();
  if (!query) {
    setStatus("لطفاً عنوان یک سریال را وارد کنید.", true);
    queryInput.focus();
    return;
  }

  currentController?.abort();
  const controller = new AbortController();
  currentController = controller;

  setStatus("در حال بارگذاری…");
  resultsEl.replaceChildren();
  resultsEl.setAttribute("aria-busy", "true");

  try {
    const data = await searchShows(query, controller.signal);
    renderShows(data, query);
  } catch (error) {
    // AbortError = a newer search replaced this one; nothing to report
    if (error.name === "AbortError") return;
    console.error(error);
    setStatus(getErrorMessage(error), true);
  } finally {
    if (currentController === controller) {
      resultsEl.removeAttribute("aria-busy");
      currentController = null;
    }
  }
});
