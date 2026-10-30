(function () {
  const btn = document.getElementById("panel-btn");
  const panel = document.getElementById("panel-box");
  const closeBtn = document.getElementById("panel-close");
  const live = document.getElementById("panel-live");
  if (!btn || !panel) return;

  function setOpen(open) {
    panel.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
    if (live) live.textContent = open ? "پنل باز شد" : "پنل بسته شد";
    if (open) {
      (closeBtn || panel).focus();
    } else {
      btn.focus();
    }
  }

  function closePanel() {
    setOpen(false);
  }

  btn.addEventListener("click", function () {
    setOpen(panel.hidden);
  });
  if (closeBtn) closeBtn.addEventListener("click", closePanel);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) closePanel();
  });
})();
