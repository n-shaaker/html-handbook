// تمرین ۳ — کارهای ذخیره‌شده
const savedText = '[{"title":"خرید نان","done":true},{"title":"تمرین JS","done":false},{"title":"ورزش","done":false}]';

const tasks = JSON.parse(savedText);
const doneCount = tasks.filter(task => task.done).length;
console.log("تعداد کارها: " + tasks.length + " | انجام‌شده: " + doneCount);

tasks.push({ title: "زنگ به مادربزرگ", done: false });

const jsTask = tasks.find(task => task.title === "تمرین JS");
jsTask.done = true;

const newDoneCount = tasks.filter(task => task.done).length;
console.log("بعد از تغییرات: " + tasks.length + " کار، " + newDoneCount + " انجام‌شده");
console.log(JSON.stringify(tasks));
