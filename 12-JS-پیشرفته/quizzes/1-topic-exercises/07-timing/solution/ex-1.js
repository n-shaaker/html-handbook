/* تمرین ۱ — پیام «ذخیره شد» که خودش محو می‌شود */

const statusText = document.getElementById("status");
let hideTimer; // شناسه setTimeout تا بشود لغوش کرد

function hideMessage() {
  statusText.textContent = "";
}

document.getElementById("save").addEventListener("click", () => {
  statusText.textContent = "✔ تغییرات ذخیره شد.";

  clearTimeout(hideTimer);
  hideTimer = setTimeout(hideMessage, 3000);
});
