// تمرین ۱ — قفسه کتابخانه
const shelf = ["شازده کوچولو", "بوف کور", "سمفونی مردگان", "کلیدر", "بوف کور"];

console.log("کلیدر داریم؟", shelf.includes("کلیدر"));
console.log("اولین بوف کور: " + shelf.indexOf("بوف کور"));
console.log("آخرین بوف کور: " + shelf.lastIndexOf("بوف کور"));

function findBook(name) {
  const index = shelf.indexOf(name);
  if (index === -1) {
    return "پیدا نشد";
  }
  return "خانه شماره " + (index + 1);
}

console.log("سووشون: " + findBook("سووشون"));
console.log("کلیدر: " + findBook("کلیدر"));
