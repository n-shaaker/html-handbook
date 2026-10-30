// تمرین ۳ — کارت دعوت جشن

const guestInput = document.getElementById("guest");
const dateInput = document.getElementById("party-date");
const placeInput = document.getElementById("place");
const makeBtn = document.getElementById("make-btn");
const card = document.getElementById("card");

makeBtn.addEventListener("click", function () {
  const guest = guestInput.value.trim();
  const date = dateInput.value.trim();
  const place = placeInput.value.trim();

  card.textContent = `${guest} عزیز، سلام!
با کمال میل از شما دعوت می‌کنیم
در جشن فارغ‌التحصیلی ما شرکت کنید.
تاریخ: ${date}
مکان: ${place}`;
});
