// تمرین ۱ — نام روز هفته

// در این برنامه شماره ۰ یعنی شنبه
function dayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "شنبه";
    case 1:
      return "یکشنبه";
    case 2:
      return "دوشنبه";
    case 3:
      return "سه‌شنبه";
    case 4:
      return "چهارشنبه";
    case 5:
      return "پنج‌شنبه";
    case 6:
      return "جمعه";
    default:
      return "روز نامعتبر";
  }
}

console.log(0, dayName(0));
console.log(3, dayName(3));
console.log(6, dayName(6));
console.log(9, dayName(9));
// switch با === مقایسه می‌کند؛ رشته "3" با عدد 3 برابر نیست
console.log('"3"', dayName("3"));
