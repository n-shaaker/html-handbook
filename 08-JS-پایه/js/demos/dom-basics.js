(function () {
  const btn = document.getElementById("dom-btn");
  const title = document.getElementById("demo-title");
  const box = document.querySelector(".demo-box");
  const log = document.getElementById("dom-log");
  if (!btn || !title || !box) return;
  btn.addEventListener("click", function () {
    title.textContent = "سلام از DOM";
    box.style.backgroundColor = "#0b6e4f";
    box.style.color = "#fff";
    if (log) log.textContent = "textContent و style به‌روز شد.";
    if (window.jslog) jslog("DOM update OK");
  });
})();
