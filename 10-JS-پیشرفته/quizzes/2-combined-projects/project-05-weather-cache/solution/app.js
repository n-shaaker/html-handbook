/* پروژه ترکیبی ۵ — آب‌وهوای سفر (پاسخ) */

const CACHE_KEY = "weather-cache";
const CACHE_SECONDS = 60;

const form = document.getElementById("search-form");
const cityInput = document.getElementById("city");
const searchButton = document.getElementById("search-btn");
const failCheckbox = document.getElementById("fail");
const weatherText = document.getElementById("weather");
const sourceText = document.getElementById("source");

/* ---------- حافظه موقت ---------- */

// شکل داده: { "تهران": { data: { city, temp, condition }, savedAt: 1730000000000 } }
function loadCache() {
  try {
    const data = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (data !== null && typeof data === "object" && !Array.isArray(data)) {
      return data;
    }
    return {};
  } catch (error) {
    return {}; // داده خراب
  }
}

let cache = loadCache();

function saveCache() {
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
}

function secondsAgo(time) {
  return Math.round((Date.now() - time) / 1000);
}

/* ---------- نمایش ---------- */

function showWeather(weather, note) {
  weatherText.classList.remove("error");
  weatherText.textContent = `${weather.city}: ${weather.temp.toLocaleString("fa-IR")}° — ${weather.condition}`;
  sourceText.textContent = note;
}

function showError(message) {
  weatherText.classList.add("error");
  weatherText.textContent = message;
  sourceText.textContent = "";
}

/* ---------- منطق اصلی ---------- */

async function searchWeather(city) {
  const cached = cache[city];

  // داده تازه داریم؛ درخواست لازم نیست
  if (cached && secondsAgo(cached.savedAt) < CACHE_SECONDS) {
    showWeather(cached.data, `از حافظه (${secondsAgo(cached.savedAt).toLocaleString("fa-IR")} ثانیه پیش)`);
    return;
  }

  weatherText.classList.remove("error");
  weatherText.textContent = "در حال دریافت...";
  sourceText.textContent = "";
  searchButton.disabled = true;

  try {
    const weather = await fakeWeatherApi(city, failCheckbox.checked);
    cache[city] = { data: weather, savedAt: Date.now() };
    saveCache();
    showWeather(weather, "تازه از سرور");
  } catch (error) {
    if (cached) {
      const age = secondsAgo(cached.savedAt).toLocaleString("fa-IR");
      showWeather(cached.data, `⚠ ${error.message} اطلاعات قدیمی (${age} ثانیه پیش) نمایش داده شد.`);
    } else {
      showError(error.message);
    }
  } finally {
    searchButton.disabled = false;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();

  if (city === "") {
    showError("نام شهر را بنویسید.");
    return;
  }

  searchWeather(city);
});

document.getElementById("clear-cache").addEventListener("click", () => {
  localStorage.removeItem(CACHE_KEY);
  cache = {};
  sourceText.textContent = "حافظه پاک شد.";
});
