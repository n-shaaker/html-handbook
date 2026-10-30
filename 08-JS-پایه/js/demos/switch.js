/* ۱۷) دستور Switch */

runIn("#out-1", function () {
  let day = new Date().getDay();
  let dayName;

  switch (day) {
    case 6:
      dayName = "شنبه";
      break;
    case 0:
      dayName = "یکشنبه";
      break;
    case 1:
      dayName = "دوشنبه";
      break;
    case 2:
      dayName = "سه‌شنبه";
      break;
    case 3:
      dayName = "چهارشنبه";
      break;
    case 4:
      dayName = "پنج‌شنبه";
      break;
    case 5:
      dayName = "جمعه";
      break;
    default:
      dayName = "نامعلوم";
  }

  console.log("امروز " + dayName + " است.");
});

runIn("#out-2", function () {
  let level = 2;

  switch (level) {
    case 1:
      console.log("دسترسی: مشاهده");
    case 2:
      console.log("دسترسی: ویرایش");
    case 3:
      console.log("دسترسی: حذف");
  }
});

const fruitSelect = document.getElementById("fruit-select");
const fruitInfo = document.getElementById("fruit-info");

fruitSelect.addEventListener("change", function () {
  const fruit = fruitSelect.value;
  let info;

  switch (fruit) {
    case "سیب":
    case "گلابی":
      info = "میوه پاییزی";
      break;
    case "هندوانه":
    case "گیلاس":
      info = "میوه تابستانی";
      break;
    default:
      info = "فصل این میوه در فهرست ما نیست!";
  }

  fruitInfo.textContent = fruit + ": " + info;
});
