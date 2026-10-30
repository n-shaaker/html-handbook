// تمرین ۳ — تبدیل هگز به rgb()

function hexToRgbText(hex) {
  const clean = hex.trim().toLowerCase();

  if (clean.length !== 7 || !clean.startsWith("#")) {
    return "هگز نامعتبر";
  }

  // هر جفت رقم را از مبنای ۱۶ به عدد معمولی تبدیل می‌کنیم
  const r = parseInt(clean.slice(1, 3), 16);
  const g = parseInt(clean.slice(3, 5), 16);
  const b = parseInt(clean.slice(5, 7), 16);

  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
    return "هگز نامعتبر";
  }

  return `rgb(${r}, ${g}, ${b})`;
}

console.log(hexToRgbText("#1a5fb4"));
console.log(hexToRgbText("#FF8800"));
console.log(hexToRgbText("  #000000 "));
console.log(hexToRgbText("ff8800"));
console.log(hexToRgbText("#f80"));
console.log(hexToRgbText("#zz8800"));
