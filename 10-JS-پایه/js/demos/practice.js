/* ۲۰) تمرین جمع‌بندی */

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const bmiBtn = document.getElementById("bmi-btn");
const bmiResult = document.getElementById("bmi-result");

function calculateBMI(weight, heightCm) {
  const heightM = heightCm / 100;
  return weight / (heightM ** 2);
}

function getStatus(bmi) {
  if (bmi < 18.5) {
    return "کمبود وزن";
  } else if (bmi < 25) {
    return "وزن طبیعی";
  } else if (bmi < 30) {
    return "اضافه وزن";
  } else {
    return "چاقی";
  }
}

bmiBtn.addEventListener("click", function () {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);

  if (weight <= 0 || height <= 0) {
    bmiResult.textContent = "لطفاً وزن و قد را درست وارد کنید.";
    return;
  }

  const bmi = calculateBMI(weight, height);
  bmiResult.textContent = `BMI شما ${bmi.toFixed(1)} است: ${getStatus(bmi)}`;
});
