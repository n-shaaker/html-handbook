// تمرین ۱ — دمای هفته
const celsius = [12, 15, 9, 20, 18];

celsius.forEach(function (temp, index) {
  console.log("روز " + (index + 1) + ": " + temp + " درجه");
});

const fahrenheit = celsius.map(function (c) {
  return c * 9 / 5 + 32;
});

console.log("فارنهایت: " + fahrenheit);
console.log("سانتی‌گراد: " + celsius);
