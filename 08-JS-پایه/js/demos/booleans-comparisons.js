/* ۱۵) بولین و مقایسه (Booleans & Comparisons) */

runIn("#out-1", function () {
  let x = 5;
  console.log(x == "5");
  console.log(x === "5");
  console.log(x > 3);
  console.log(x !== 5);
});

runIn("#out-2", function () {
  console.log(0 == "");
  console.log(0 == "0");
  console.log("" == "0");
  console.log(null == undefined);
  console.log(null === undefined);
  console.log(0 === "");
});

runIn("#out-3", function () {
  console.log("10" < "9");
  console.log(10 < 9);
  console.log("apple" === "Apple");
});

runIn("#out-4", function () {
  let age = 22;
  let hasTicket = true;
  console.log(age >= 18 && hasTicket);
  console.log(age < 12 || age > 60);
  console.log(!hasTicket);
});

runIn("#out-5", function () {
  let username = "  sara_ahmadi ";
  let password = "Sara1405";

  const cleanUser = username.trim();
  const isUserValid = cleanUser.length >= 3;
  const isPassValid = password.length >= 8 && password !== cleanUser;

  console.log("نام کاربری معتبر:", isUserValid);
  console.log("رمز معتبر:", isPassValid);
  console.log("اجازه ورود:", isUserValid && isPassValid);
});

runIn("#out-6", function () {
  console.log(Boolean(false), Boolean(0), Boolean(""));
  console.log(Boolean(null), Boolean(undefined), Boolean(NaN));
  console.log(Boolean("0"), Boolean(" "), Boolean([]), Boolean("false"));
});
