/* تمرین ۲ — فایل اصلی */

import formatPrice from "./ex-2-format.js";
import { addItem, getTotal as getCartTotal } from "./ex-2-cart.js";

const totalText = document.getElementById("total");

function showTotal() {
  totalText.textContent = "جمع کل: " + formatPrice(getCartTotal());
}

document.getElementById("add-notebook").addEventListener("click", () => {
  addItem("دفتر", 45000);
  showTotal();
});

document.getElementById("add-pencil").addEventListener("click", () => {
  addItem("مداد", 10000);
  showTotal();
});
