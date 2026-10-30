/* ۲۰) اسلایدر عکس */

const slides = [
  { src: "../images/slide-1.jpg", caption: "اسلاید ۱ — غذای اول" },
  { src: "../images/slide-2.jpg", caption: "اسلاید ۲ — غذای دوم" },
  { src: "../images/slide-3.jpg", caption: "اسلاید ۳ — غذای سوم" },
  { src: "../images/slide-4.jpg", caption: "اسلاید ۴ — تصویر هیرو" },
];

const img = document.getElementById("slider-img");
const caption = document.getElementById("slider-caption");
const counter = document.getElementById("slider-counter");
const prevBtn = document.getElementById("slider-prev");
const nextBtn = document.getElementById("slider-next");
const dotsBox = document.getElementById("slider-dots");
const playBtn = document.getElementById("slider-play");

let index = 0;
let timerId = null;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  const slide = slides[index];
  img.src = slide.src;
  img.alt = slide.caption;
  caption.textContent = slide.caption;
  counter.textContent = `${index + 1} / ${slides.length}`;

  dotsBox.querySelectorAll("button").forEach((btn, n) => {
    btn.setAttribute("aria-current", n === index ? "true" : "false");
  });
}

function next() {
  showSlide(index + 1);
}

function prev() {
  showSlide(index - 1);
}

function stopAutoplay() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
    playBtn.textContent = "پخش خودکار";
    playBtn.setAttribute("aria-pressed", "false");
  }
}

function startAutoplay() {
  stopAutoplay();
  timerId = setInterval(next, 3000);
  playBtn.textContent = "توقف خودکار";
  playBtn.setAttribute("aria-pressed", "true");
}

slides.forEach((_, n) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `رفتن به اسلاید ${n + 1}`);
  dot.addEventListener("click", () => {
    showSlide(n);
    if (timerId !== null) startAutoplay();
  });
  dotsBox.append(dot);
});

prevBtn.addEventListener("click", () => {
  prev();
  if (timerId !== null) startAutoplay();
});

nextBtn.addEventListener("click", () => {
  next();
  if (timerId !== null) startAutoplay();
});

playBtn.addEventListener("click", () => {
  if (timerId === null) startAutoplay();
  else stopAutoplay();
});

showSlide(0);
