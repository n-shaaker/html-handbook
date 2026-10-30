// تمرین ۱ — کارت پروفایل
const nameEl = document.getElementById("name");
const cityEl = document.getElementById("city");
const siteLink = document.getElementById("site");
const followBtn = document.getElementById("follow-btn");

nameEl.textContent = "سارا احمدی";
cityEl.textContent = "اصفهان";

siteLink.setAttribute("href", "https://example.com");
siteLink.textContent = "وب‌سایت سارا";

followBtn.disabled = true;
followBtn.textContent = "دنبال می‌کنید";

console.log(siteLink.getAttribute("href"));
