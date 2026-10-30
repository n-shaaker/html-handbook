/* تمرین ۳ — ویرایش پروفایل با spread، destructuring و structuredClone */

const output = document.getElementById("output");

function show(text) {
  const line = document.createElement("p");
  line.textContent = text;
  output.append(line);
}

// ۱) ترکیب تنظیمات: مقدارهای بعدی روی قبلی‌ها می‌نشینند
const defaults = { theme: "light", fontSize: 16, language: "fa" };
const userSettings = { fontSize: 20 };
const settings = { ...defaults, ...userSettings };
show(`theme: ${settings.theme} — fontSize: ${settings.fontSize} — language: ${settings.language}`);

// ۲) کپی سطحی و کپی کامل
const user = { name: "سارا", city: "شیراز", skills: ["JS"] };

const shallow = { ...user };
shallow.skills.push("CSS"); // آرایه بین user و shallow مشترک است
show("بعد از push روی کپی سطحی: " + user.skills.join("، "));

const deep = structuredClone(user);
deep.skills.push("React"); // این آرایه کاملاً جداست
show("بعد از push روی structuredClone: " + user.skills.join("، "));

// ۳) نسخه جدید از روی فرم، بدون تغییر user
const form = document.getElementById("profile-form");
const cityInput = document.getElementById("city");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCity = cityInput.value.trim();
  if (newCity === "") return;

  const updated = { ...user, city: newCity };
  const { name, city } = updated;

  show(`نسخه جدید: ${name}، ${city} — شهر در داده اصلی: ${user.city}`);
});
