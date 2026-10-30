// تمرین ۱ — JSON خراب
function readUser(text) {
  try {
    const user = JSON.parse(text);
    console.log("کاربر: " + user.name);
  } catch (error) {
    console.log("خطا: " + error.name);
  } finally {
    console.log("بررسی تمام شد");
  }
}

readUser('{"name":"سارا"}');
readUser("{name: سارا}");
console.log("برنامه ادامه دارد");
