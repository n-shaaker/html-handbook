// تمرین ۲ — کپی بدون دردسر
const defaults = { theme: "light", fontSize: 14, lang: "fa" };
const userSettings = { ...defaults, theme: "dark" };
console.log("پیش‌فرض: " + defaults.theme + " / کاربر: " + userSettings.theme + " / اندازه فونت کاربر: " + userSettings.fontSize);

const shoppingList = ["نان", "شیر"];
const listCopy = [...shoppingList];
listCopy.push("چای");
console.log("اصلی: " + shoppingList.join("، ") + " (" + shoppingList.length + ") | کپی: " + listCopy.join("، ") + " (" + listCopy.length + ")");

const fruits = ["سیب", "موز"];
const vegetables = ["خیار", "گوجه"];
const basket = [...fruits, ...vegetables];
console.log("سبد بازار: " + basket.join("، "));

const scores = [17, 19.5, 12, 18];
console.log("بیشترین نمره: " + Math.max(...scores));
