/* تمرین ۱ — قیمت با واحد پیش‌فرض */

const output = document.getElementById("output");

// یک خط متن به کادر خروجی اضافه می‌کند
function show(text) {
  const line = document.createElement("p");
  line.textContent = text;
  output.append(line);
}

function formatPrice(amount, unit = "تومان") {
  if (typeof amount !== "number") {
    return "قیمت نامعتبر";
  }
  return amount.toLocaleString("fa-IR") + " " + unit;
}

show(formatPrice(25000));
show(formatPrice(5, "دلار"));
show(formatPrice(1200000, "ریال"));
show(formatPrice("abc"));
