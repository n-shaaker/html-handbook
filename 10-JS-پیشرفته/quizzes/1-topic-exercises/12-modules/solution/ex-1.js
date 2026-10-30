/* تمرین ۱ — فایل اصلی که از ماژول حساب استفاده می‌کند */

import { add, multiply, TAX_RATE } from "./ex-1-math.js";

const output = document.getElementById("output");

function show(text) {
  const line = document.createElement("p");
  line.textContent = text;
  output.append(line);
}

show("add(2, 3) = " + add(2, 3));
show("multiply(4, 5) = " + multiply(4, 5));
show("مالیات ۲۰۰٬۰۰۰ تومان: " + (200000 * TAX_RATE).toLocaleString("fa-IR") + " تومان");
