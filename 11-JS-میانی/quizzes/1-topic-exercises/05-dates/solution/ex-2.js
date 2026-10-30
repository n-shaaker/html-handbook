// تمرین ۲ — چند روز مانده؟
const DAY_MS = 1000 * 60 * 60 * 24;

function daysBetween(start, end) {
  return Math.round((end - start) / DAY_MS);
}

console.log("daysBetween(1 ژانویه 2026، 21 مارس 2026) → " + daysBetween(new Date(2026, 0, 1), new Date(2026, 2, 21)));
console.log("daysBetween(20 مه 2026، 1 ژوئن 2026) → " + daysBetween(new Date(2026, 4, 20), new Date(2026, 5, 1)));

const today = new Date();
const nextNowruz = new Date(today.getFullYear() + 1, 2, 21);
console.log("تا نوروز سال بعد: " + daysBetween(today, nextNowruz) + " روز");
