/* ۱۲) ماژول‌ها — اسکریپت معمولی (غیر ماژول) برای وقتی که صفحه با دوبار کلیک (file://) باز شده است */

if (location.protocol === "file:") {
  const box = document.getElementById("module-out");
  box.textContent =
    "✖ مثال ماژول اجرا نشد، چون صفحه مستقیم از روی دیسک (آدرس file://) باز شده است.\n" +
    "مرورگر به دلیل سیاست امنیتی CORS اجازه بارگذاری ماژول از file:// را نمی‌دهد.\n\n" +
    "راه‌حل: پوشه پروژه را در VS Code باز کنید، روی فایل HTML کلیک راست کنید و\n" +
    "«Open with Live Server» را بزنید (آدرس باید با http://127.0.0.1 یا http://localhost شروع شود).";
}
