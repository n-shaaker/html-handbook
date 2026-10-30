/* تمرین ۳ — شمارنده با bind */

const visitsText = document.getElementById("visits");
const output = document.getElementById("output");

const visitCounter = {
  clicks: 0,

  add() {
    this.clicks++;
    this.render();
  },

  render() {
    visitsText.textContent = "بازدید: " + this.clicks.toLocaleString("fa-IR");
  },
};

/* بدون bind، داخل add مقدار this خودِ دکمه است (نه visitCounter)؛
   دکمه clicks ندارد و undefined + 1 می‌شود NaN. */
document.getElementById("visit").addEventListener("click", visitCounter.add.bind(visitCounter));

// bind با آرگومان از پیش‌تعیین‌شده
function calculateTax(rate, price) {
  return price * rate;
}

const addVat = calculateTax.bind(null, 0.09);
const addServiceFee = calculateTax.bind(null, 0.1);

function show(text) {
  const line = document.createElement("p");
  line.textContent = text;
  output.append(line);
}

show("مالیات ۹٪ روی ۲۰۰٬۰۰۰: " + addVat(200000));
show("حق سرویس ۱۰٪ روی ۲۰۰٬۰۰۰: " + addServiceFee(200000));
