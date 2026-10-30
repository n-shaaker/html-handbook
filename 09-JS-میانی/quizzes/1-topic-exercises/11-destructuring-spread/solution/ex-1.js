// تمرین ۱ — پروفایل کاربر
const user = { name: "نیما", city: "شیراز", age: 17 };
const { name, city, job = "نامشخص", age: userAge } = user;

console.log(name + " از " + city + "، شغل: " + job + "، سن: " + userAge);

const podium = ["سارا", "علی", "مریم"];
let [first, second] = podium;
console.log("اول: " + first + "، دوم: " + second);

[first, second] = [second, first];
console.log("بعد از جابه‌جایی — اول: " + first + "، دوم: " + second);
