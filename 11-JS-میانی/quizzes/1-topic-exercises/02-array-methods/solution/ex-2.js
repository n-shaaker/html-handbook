// تمرین ۲ — برنامه کلاسی
const classes = ["ریاضی", "فیزیک", "شیمی", "زبان", "ورزش"];

// از اندیس ۲، یک عضو حذف کن و دو درس جدید بگذار
const removed = classes.splice(2, 1, "ادبیات", "هنر");
console.log("حذف شد: " + removed[0]);
console.log("برنامه جدید: " + classes.join("، "));

const firstThree = classes.slice(0, 3);
console.log("سه زنگ اول: " + firstThree.join("، "));
console.log("تعداد درس‌های امروز هنوز: " + classes.length);
