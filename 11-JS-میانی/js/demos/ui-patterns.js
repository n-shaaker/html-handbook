/* ۲۱) الگوهای رایج UI در سایت‌ها */

/* ---------- ۱) آکاردئون ---------- */
document.querySelectorAll("[data-accordion] .accordion-trigger").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".accordion-item");
    const open = item.classList.contains("is-open");
    // در این نسخه فقط یکی باز می‌ماند (مثل FAQ رایج)
    btn.closest("[data-accordion]").querySelectorAll(".accordion-item").forEach((el) => {
      el.classList.remove("is-open");
      el.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
    });
    if (!open) {
      item.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

/* ---------- ۲) تب‌ها ---------- */
const tabRoot = document.querySelector("[data-tabs]");
if (tabRoot) {
  const tabs = tabRoot.querySelectorAll('[role="tab"]');
  const panels = tabRoot.querySelectorAll('[role="tabpanel"]');

  function activateTab(tab) {
    tabs.forEach((t) => {
      const selected = t === tab;
      t.setAttribute("aria-selected", selected ? "true" : "false");
      t.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((p) => {
      p.classList.toggle("is-active", p.id === tab.getAttribute("aria-controls"));
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab));
  });
}

/* ---------- ۳) مودال ---------- */
const backdrop = document.getElementById("modal-backdrop");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtns = document.querySelectorAll("[data-close-modal]");

function openModal() {
  backdrop.classList.add("is-open");
  document.body.classList.add("modal-open");
  backdrop.querySelector(".modal").focus();
}

function closeModal() {
  backdrop.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  openModalBtn.focus();
}

openModalBtn.addEventListener("click", openModal);
closeModalBtns.forEach((btn) => btn.addEventListener("click", closeModal));

backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && backdrop.classList.contains("is-open")) {
    closeModal();
  }
});

/* ---------- ۴) توست ---------- */
const toastStack = document.getElementById("toast-stack");

function showToast(message, type = "ok") {
  const el = document.createElement("div");
  el.className = `toast is-${type}`;
  el.setAttribute("role", "status");
  el.textContent = message;
  toastStack.append(el);
  setTimeout(() => el.remove(), 2800);
}

document.getElementById("toast-ok").addEventListener("click", () => {
  showToast("با موفقیت ذخیره شد.", "ok");
});
document.getElementById("toast-err").addEventListener("click", () => {
  showToast("خطا در ارسال فرم.", "err");
});

/* ---------- ۵) منوی همبرگری ---------- */
const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");

menuToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  menuToggle.textContent = open ? "بستن" : "منو";
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "منو";
  });
});

/* ---------- ۶) فیلتر زنده لیست ---------- */
const filterInput = document.getElementById("live-filter");
const products = document.querySelectorAll("#product-list li");
const emptyMsg = document.getElementById("filter-empty");

filterInput.addEventListener("input", () => {
  const q = filterInput.value.trim().toLowerCase();
  let visible = 0;
  products.forEach((li) => {
    const text = li.textContent.toLowerCase();
    const show = text.includes(q);
    li.classList.toggle("is-hidden", !show);
    if (show) visible += 1;
  });
  emptyMsg.classList.toggle("is-visible", visible === 0);
});

/* ---------- ۷) برگشت به بالا ---------- */
const backTop = document.getElementById("back-top");

window.addEventListener("scroll", () => {
  backTop.classList.toggle("is-visible", window.scrollY > 400);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
