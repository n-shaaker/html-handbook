/* تمرین ۳ — مقایسه قیمت: پشت سر هم یا هم‌زمان؟ */

function getPrice(shop, price, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ shop: shop, price: price });
    }, ms);
  });
}

const oneByOneButton = document.getElementById("one-by-one");
const togetherButton = document.getElementById("together");
const output = document.getElementById("output");

function setButtonsDisabled(isDisabled) {
  oneByOneButton.disabled = isDisabled;
  togetherButton.disabled = isDisabled;
}

function showResult(offers, startTime) {
  let cheapest = offers[0];
  for (const offer of offers) {
    if (offer.price < cheapest.price) {
      cheapest = offer;
    }
  }

  const seconds = (Date.now() - startTime) / 1000;

  output.textContent = "";
  const best = document.createElement("p");
  best.textContent = `ارزان‌ترین: ${cheapest.shop} — ${cheapest.price.toLocaleString("fa-IR")} تومان`;
  const time = document.createElement("p");
  time.textContent = `زمان: حدود ${seconds.toFixed(1)} ثانیه`;
  output.append(best, time);
}

oneByOneButton.addEventListener("click", async () => {
  setButtonsDisabled(true);
  output.textContent = "در حال پرسیدن قیمت‌ها، یکی‌یکی...";
  const startTime = Date.now();

  const alpha = await getPrice("آلفا", 19500000, 1000);
  const beta = await getPrice("بتا", 18200000, 2000);
  const gamma = await getPrice("گاما", 18900000, 1500);

  showResult([alpha, beta, gamma], startTime);
  setButtonsDisabled(false);
});

togetherButton.addEventListener("click", async () => {
  setButtonsDisabled(true);
  output.textContent = "در حال پرسیدن قیمت‌ها، هم‌زمان...";
  const startTime = Date.now();

  const offers = await Promise.all([
    getPrice("آلفا", 19500000, 1000),
    getPrice("بتا", 18200000, 2000),
    getPrice("گاما", 18900000, 1500),
  ]);

  showResult(offers, startTime);
  setButtonsDisabled(false);
});
