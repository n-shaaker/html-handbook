/* سرور آب‌وهوای شبیه‌سازی‌شده — این فایل را تغییر ندهید. */

const WEATHER_DATA = {
  تهران: { temp: 18, condition: "آفتابی" },
  تبریز: { temp: 9, condition: "ابری" },
  رشت: { temp: 14, condition: "بارانی" },
  بندرعباس: { temp: 31, condition: "آفتابی" },
  مشهد: { temp: 12, condition: "نیمه‌ابری" },
};

/* بعد از ۱٫۲ ثانیه:
   - اگر shouldFail درست باشد ← reject با «سرور در دسترس نیست.»
   - اگر شهر نباشد ← reject با «شهر پیدا نشد.»
   - وگرنه ← resolve با { city, temp, condition } */
function fakeWeatherApi(city, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("سرور در دسترس نیست."));
        return;
      }
      const data = WEATHER_DATA[city];
      if (data === undefined) {
        reject(new Error("شهر پیدا نشد."));
        return;
      }
      resolve({ city: city, temp: data.temp, condition: data.condition });
    }, 1200);
  });
}
