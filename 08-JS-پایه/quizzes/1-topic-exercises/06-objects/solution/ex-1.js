// تمرین ۱ — شناسنامه کتاب

const book = {
  title: "کلیدر",
  author: "محمود دولت‌آبادی",
  pages: 2836,
  isAvailable: true
};

console.log("عنوان:", book.title);
console.log("نویسنده:", book["author"]);
console.log("تعداد صفحه:", book.pages);
console.log("موجود است؟", book.isAvailable);
// ویژگی‌ای که وجود ندارد undefined می‌دهد، نه خطا
console.log("مترجم:", book.translator);
