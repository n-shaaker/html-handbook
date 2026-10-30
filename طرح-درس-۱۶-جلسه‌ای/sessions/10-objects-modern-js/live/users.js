const users = [
  { id: 1, name: "علی رضایی", role: "دانشجو", city: "تهران", email: "ali@example.com" },
  { id: 2, name: "سارا محمدی", role: "منتور", city: "اصفهان", email: "sara@example.com" },
  { id: 3, name: "نیما کریمی", role: "دانشجو", city: "شیراز" },
];

const container = document.querySelector("#users");

// Any value placed inside innerHTML must be escaped; otherwise data such as
// "<img src=x onerror=alert(1)>" (from an API or a form) would run as code.
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// Build cards from an array of objects using destructuring + template literals
const html = users
  .map(({ name, role, city, email = "ایمیل ثبت نشده" }) => {
    return `
      <article class="card">
        <h2>${escapeHtml(name)}</h2>
        <p>${escapeHtml(role)} · ${escapeHtml(city)}</p>
        <p class="card__email">${escapeHtml(email)}</p>
      </article>
    `;
  })
  .join("");

container.innerHTML = html;
