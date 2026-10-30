// تمرین ۳ — خواندن تنظیمات با مقدار پیش‌فرض
function parseSettings(text) {
  try {
    const settings = JSON.parse(text);
    if (typeof settings.fontSize !== "number") {
      throw new Error("اندازه فونت باید عدد باشد.");
    }
    return settings;
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("تنظیمات خراب است");
    } else {
      console.log(error.message);
    }
    return { theme: "light", fontSize: 14 };
  }
}

const inputs = [
  '{"theme":"dark","fontSize":18}',
  "{theme: dark}",
  '{"theme":"dark","fontSize":"بزرگ"}'
];

inputs.forEach(text => {
  const result = parseSettings(text);
  console.log(text + " → " + result.theme + " / " + result.fontSize);
});
