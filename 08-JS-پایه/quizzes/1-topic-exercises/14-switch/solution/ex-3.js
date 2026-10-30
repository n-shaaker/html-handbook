// تمرین ۳ — فصل هر ماه

function seasonOf(month) {
  let season;

  // چند case پشت سر هم یعنی همه یک جواب دارند
  switch (month) {
    case 1:
    case 2:
    case 3:
      season = "بهار 🌸";
      break;
    case 4:
    case 5:
    case 6:
      season = "تابستان ☀️";
      break;
    case 7:
    case 8:
    case 9:
      season = "پاییز 🍂";
      break;
    case 10:
    case 11:
    case 12:
      season = "زمستان ❄️";
      break;
    default:
      season = "ماه نامعتبر";
  }

  return season;
}

console.log(1, seasonOf(1));
console.log(5, seasonOf(5));
console.log(9, seasonOf(9));
console.log(12, seasonOf(12));
console.log(13, seasonOf(13));
