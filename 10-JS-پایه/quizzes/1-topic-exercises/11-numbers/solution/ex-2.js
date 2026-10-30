// تمرین ۲ — بررسی مقدارهای فرم

function checkValue(text) {
  const n = Number(text);
  console.log(`«${text}» ← عدد: ${n} | NaN است؟ ${Number.isNaN(n)} | صحیح است؟ ${Number.isInteger(n)}`);
}

checkValue("25");
checkValue("12.5");
checkValue("abc");
checkValue("");
checkValue("180px");

// parseInt از اول متن تا جایی که عدد است را می‌خواند
console.log("parseInt:", parseInt("180px"));
