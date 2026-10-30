/* ۱۲) قالب JSON */

runIn("#out-1", function () {
  const user = { name: "علی", age: 30, skills: ["JS", "React"] };
  const text = JSON.stringify(user);
  console.log(text);
  console.log(typeof text);
  console.log(JSON.stringify(user, null, 2));
});

runIn("#out-2", function () {
  const json = '{"title":"کتاب JS","price":250000,"tags":["آموزش","برنامه‌نویسی"]}';
  const book = JSON.parse(json);
  console.log(book.title);
  console.log(book.tags[1]);
  console.log(typeof book);
});

runIn("#out-3", function () {
  const order = {
    id: 15,
    note: undefined,
    print: function () { return "..."; },
    createdAt: new Date("2026-03-21T08:30:00Z"),
    discount: NaN
  };
  const saved = JSON.stringify(order);
  console.log(saved);
  const restored = JSON.parse(saved);
  console.log(typeof restored.createdAt);
  console.log(new Date(restored.createdAt).getFullYear());
});

const editor = document.getElementById("json-editor");
const checkBtn = document.getElementById("json-btn");
const output = document.getElementById("json-out");

checkBtn.addEventListener("click", () => {
  try {
    const data = JSON.parse(editor.value);
    output.textContent = "✔ JSON درست است:\n" + JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "✖ خطا: " + err.message;
  }
});
