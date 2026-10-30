// تمرین ۳ — قیمت فرش

function rugArea(length, width) {
  return length * width;
}

function rugPrice(area, pricePerMeter) {
  return area * pricePerMeter;
}

const lengthInput = document.getElementById("rug-length");
const widthInput = document.getElementById("rug-width");
const priceInput = document.getElementById("meter-price");
const calcBtn = document.getElementById("calc-btn");
const result = document.getElementById("result");

calcBtn.addEventListener("click", function () {
  const length = Number(lengthInput.value);
  const width = Number(widthInput.value);
  const pricePerMeter = Number(priceInput.value);

  const area = rugArea(length, width);
  const price = rugPrice(area, pricePerMeter);

  result.textContent = "مساحت: " + area + " متر مربع — قیمت: " + price + " تومان";
});
