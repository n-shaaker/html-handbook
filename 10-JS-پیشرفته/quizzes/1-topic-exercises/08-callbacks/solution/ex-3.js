/* تمرین ۳ — مراحل پیگیری سفارش با callbackهای تودرتو */

const trackButton = document.getElementById("track");
const stepsList = document.getElementById("steps");

function doStep(message, delay, next) {
  setTimeout(() => {
    const li = document.createElement("li");
    li.textContent = message;
    stepsList.append(li);
    next();
  }, delay);
}

trackButton.addEventListener("click", () => {
  stepsList.textContent = "";
  trackButton.disabled = true;

  /* هر مرحله داخل callback مرحله قبل است؛ با هر مرحله جدید کد یک پله
     به راست می‌رود و خواندنش سخت‌تر می‌شود (callback hell).
     در مبحث Promise همین را صاف و خوانا می‌نویسیم. */
  doStep("✔ سفارش ثبت شد", 1000, () => {
    doStep("🍳 در حال آماده‌سازی", 2000, () => {
      doStep("🛵 پیک در راه است", 1500, () => {
        doStep("🎉 سفارش تحویل شد", 1000, () => {
          trackButton.disabled = false;
        });
      });
    });
  });
});
