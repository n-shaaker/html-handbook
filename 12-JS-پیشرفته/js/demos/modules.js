/* ۱۲) ماژول‌ها (Modules) */

import { add, circleArea, PI as piNumber } from "../modules/math-utils.js";
import formatPrice from "../modules/format.js";

const output = document.getElementById("module-out");

output.textContent = `✔ ماژول با موفقیت اجرا شد:
add(2, 3) = ${add(2, 3)}
circleArea(2) = ${circleArea(2).toFixed(2)}
PI = ${piNumber}
formatPrice(1250000) = ${formatPrice(1250000)}
typeof window.add = ${typeof window.add}`;
