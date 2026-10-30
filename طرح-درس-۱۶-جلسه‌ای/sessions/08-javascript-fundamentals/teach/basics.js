// Prefer const by default; use let only when the value must be reassigned.
const courseName = "بوت‌کمپ فرانت‌اند";
let seatsLeft = 12;

// Common primitive types
const title = "JavaScript"; // string
const year = 2026; // number
const isActive = true; // boolean
let notSet; // undefined (declared, no value yet)
const emptyValue = null; // null (intentionally empty)

console.log(courseName, seatsLeft, title, year, isActive, notSet, emptyValue);

// typeof tells you the type at runtime (note the historical quirk for null)
console.log(typeof title, typeof year, typeof isActive, typeof notSet, typeof emptyValue);
// → string number boolean undefined object

// const prevents reassignment, not mutation of objects/arrays
seatsLeft = seatsLeft - 1; // OK with let
// courseName = "x"; // TypeError: Assignment to constant variable.

// Template literals: readable string building
console.log(`${courseName}: ${seatsLeft} صندلی خالی`);

// Arithmetic and comparison operators
const score = 18;
const passed = score >= 10;
const exactMatch = score === 18; // strict equality (type + value)

// Always prefer === over ==; == converts types first and surprises beginners
console.log("5" == 5, "5" === 5); // true false
console.log("5" + 1, "5" - 1); // "51" 4  (+ joins strings, - converts to number)
console.log(0.1 + 0.2); // 0.30000000000000004 — floating point; round money values

// Values from inputs are always strings: convert before doing math
const qtyFromInput = "3";
console.log(Number(qtyFromInput) * 2); // 6

// Logical operators
const canEnroll = seatsLeft > 0 && isActive;
const needsWaitlist = seatsLeft === 0 || !isActive;

console.log({ passed, exactMatch, canEnroll, needsWaitlist });

// Conditions
const age = 20;

if (age < 13) {
  console.log("بلیت کودک");
} else if (age < 18) {
  console.log("بلیت نوجوان");
} else {
  console.log("بلیت بزرگسال");
}

// Simple login check (demo only — never store real passwords in frontend code)
const username = "ali";
const password = "secret123";

if (username === "ali" && password === "secret123") {
  console.log("ورود موفق");
} else {
  console.log("اطلاعات ورود نامعتبر است");
}

// Even / odd
const number = 7;
if (number % 2 === 0) {
  console.log("زوج");
} else {
  console.log("فرد");
}

// Truthy / falsy: false, 0, "", null, undefined and NaN are falsy; everything else is truthy
const nickname = "";
if (!nickname) {
  console.log("نام مستعار وارد نشده است");
}

// Ternary: a compact if/else that returns a value
const status = seatsLeft > 0 ? "ثبت‌نام باز است" : "ظرفیت تکمیل";
console.log(status);
