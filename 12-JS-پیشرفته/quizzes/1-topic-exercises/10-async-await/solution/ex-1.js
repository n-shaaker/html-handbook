/* تمرین ۱ — پیگیری سفارش با async/await */

const trackButton = document.getElementById("track");
const stepsList = document.getElementById("steps");

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function addStep(message) {
  const li = document.createElement("li");
  li.textContent = message;
  stepsList.append(li);
}

async function trackOrder() {
  stepsList.textContent = "";
  trackButton.disabled = true;

  await wait(1000);
  addStep("✔ سفارش ثبت شد");

  await wait(2000);
  addStep("🍳 در حال آماده‌سازی");

  await wait(1500);
  addStep("🛵 پیک در راه است");

  await wait(1000);
  addStep("🎉 سفارش تحویل شد");

  trackButton.disabled = false;
}

trackButton.addEventListener("click", trackOrder);
