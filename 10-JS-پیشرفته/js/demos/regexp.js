/* ۱۴) عبارت‌های منظم (Regular Expressions) */

runIn("#out-1", function () {
  const text = "قیمت‌ها: 120 و 4500 و 78 تومان";
  console.log(/\d+/.test(text));
  console.log(text.match(/\d+/));
  console.log(text.match(/\d+/g));
  console.log(text.replace(/\d+/g, "؟"));
  console.log("JavaScript".search(/script/i));
  console.log("a, b;c  d".split(/[,;\s]+/));
});

function toEnglishDigits(str) {
  return str
    .replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    .replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d));
}

runIn("#out-3", function () {
  console.log(/^\d+$/.test("۰۹۱۲"));
  console.log(toEnglishDigits("۰۹۱۲۱۲۳۴۵۶۷"));
});

const mobile = /^09\d{9}$/;
const mobileIntl = /^(\+98|0)9\d{9}$/;
const postalCode = /^\d{5}-?\d{5}$/;
const email = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;

runIn("#out-2", function () {
  console.log(mobile.test("09121234567"));
  console.log(mobile.test("0912123"));
  console.log(mobileIntl.test("+989121234567"));
  console.log(postalCode.test("13185-34567"));
  console.log(email.test("sara@example.com"));
  console.log(email.test("ali.rezaei@mail.ut.ac.ir"));
  console.log(email.test("sara@com"));
});

function isValidNationalCode(input) {
  const code = toEnglishDigits(input.trim());
  if (!/^\d{10}$/.test(code)) return false;
  if (code === code[0].repeat(10)) return false;

  const check = Number(code[9]);
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += Number(code[i]) * (10 - i);
  }
  const r = sum % 11;
  if (r < 2) {
    return check === r;
  } else {
    return check === 11 - r;
  }
}

runIn("#out-4", function () {
  console.log(isValidNationalCode("0012345679"));
  console.log(isValidNationalCode("0012345678"));
  console.log(isValidNationalCode("1111111111"));
  console.log(isValidNationalCode("۰۰۱۲۳۴۵۶۷۹"));
});

function validate(input, check, msgEl) {
  input.addEventListener("input", () => {
    const value = toEnglishDigits(input.value.trim());
    if (value === "") {
      msgEl.textContent = "";
      input.removeAttribute("aria-invalid");
      return;
    }
    const ok = check(value);
    msgEl.textContent = ok ? "✔ معتبر" : "✖ نامعتبر";
    msgEl.className = ok ? "msg-ok" : "msg-error";
    input.setAttribute("aria-invalid", !ok);
  });
}

const mobileInput = document.getElementById("mobile-input");
const mobileMsg = document.getElementById("mobile-msg");
const emailInput = document.getElementById("email-input");
const emailMsg = document.getElementById("email-msg");
const nationalInput = document.getElementById("national-input");
const nationalMsg = document.getElementById("national-msg");
const postalInput = document.getElementById("postal-input");
const postalMsg = document.getElementById("postal-msg");

validate(mobileInput, v => mobile.test(v), mobileMsg);
validate(emailInput, v => email.test(v), emailMsg);
validate(nationalInput, isValidNationalCode, nationalMsg);
validate(postalInput, v => postalCode.test(v), postalMsg);
