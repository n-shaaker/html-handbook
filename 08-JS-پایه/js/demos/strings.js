/* ۱۱) رشته‌ها (Strings) */

runIn("#out-1", function () {
  let a = "سلام";
  let b = 'سلام';
  let c = `سلام`;
  console.log(a, b, c);
});

runIn("#out-2", function () {
  let word = "JavaScript";
  console.log(word.length);
  console.log(word[0]);
  console.log(word[4]);
  console.log(word.at(-1));
  console.log(word[20]);
});

runIn("#out-3", function () {
  let s1 = "او گفت: 'سلام'";
  let s2 = "او گفت: \"سلام\"";
  let s3 = "خط اول\nخط دوم";
  console.log(s1);
  console.log(s2);
  console.log(s3);
});

runIn("#out-4", function () {
  let name = "sara";
  name[0] = "S";
  console.log(name);
  name = "Sara";
  console.log(name);
});
