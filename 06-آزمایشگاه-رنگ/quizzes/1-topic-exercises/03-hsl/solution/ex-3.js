// تمرین ۳ — حساب کردن با HSL

function hslText(h, s, l) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

// رنگ مکمل: ۱۸۰ درجه آن طرف چرخ؛ باقیمانده بر ۳۶۰ عدد را داخل چرخ نگه می‌دارد
function complementHue(h) {
  return (h + 180) % 360;
}

// تیره‌تر کردن، ولی نه کمتر از صفر
function darker(l, step) {
  let result = l - step;
  if (result < 0) {
    result = 0;
  }
  return result;
}

// روشن‌تر کردن، ولی نه بیشتر از ۱۰۰
function lighter(l, step) {
  let result = l + step;
  if (result > 100) {
    result = 100;
  }
  return result;
}

console.log(hslText(175, 60, 50));
console.log(complementHue(30));
console.log(complementHue(200));
console.log(complementHue(180));
console.log(darker(50, 15));
console.log(darker(10, 15));
console.log(lighter(95, 10));
console.log(hslText(complementHue(175), 60, darker(50, 15)));
