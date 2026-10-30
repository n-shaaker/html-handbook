// تمرین ۲ — JSON خوانا و چیزهایی که جا می‌مانند
const settings = {
  theme: "dark",
  nickname: undefined,
  createdAt: new Date(Date.UTC(2026, 2, 21, 8, 30)),
  sayHi: function () {
    return "سلام";
  }
};

const pretty = JSON.stringify(settings, null, 2);
console.log(pretty);

const restored = JSON.parse(pretty);
console.log("sayHi بعد از JSON هست؟", "sayHi" in restored);
console.log("نوع createdAt بعد از parse: " + typeof restored.createdAt);

const date = new Date(restored.createdAt);
console.log("سال: " + date.getFullYear());
