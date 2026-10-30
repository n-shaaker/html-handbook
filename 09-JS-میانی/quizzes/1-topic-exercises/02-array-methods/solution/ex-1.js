// تمرین ۱ — صف نانوایی
const queue = ["علی", "سارا"];

queue.push("رضا", "مریم");
console.log("صف: " + queue.join("، "));

const served = queue.shift();
console.log("نان گرفت: " + served);

const left = queue.pop();
console.log("از صف رفت: " + left);

console.log("صف نهایی: " + queue.join("، ") + " (" + queue.length + " نفر)");
