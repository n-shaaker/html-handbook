// تمرین ۱ — رفت و برگشت
const book = {
  title: "شازده کوچولو",
  author: "اگزوپری",
  pages: 96,
  available: true
};

const text = JSON.stringify(book);
console.log(text);
console.log("نوع: " + typeof text);

const copy = JSON.parse(text);
console.log("عنوان از روی JSON: " + copy.title);
console.log("همان شیء است؟", copy === book);
