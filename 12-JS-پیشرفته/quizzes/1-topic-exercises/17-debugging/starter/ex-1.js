/* تمرین ۱ — این کد سه باگ دارد. پیدا و درستش کنید. */

const prices = ["120000", 250000, 180000];

function getTotal(list) {
  let total = 0;
  for (let i = 1; i <= list.length; i++) {
    total += list[i];
  }
  return total;
}

function getShippingText(total) {
  if ((total = 500000)) {
    return "🚚 ارسال رایگان است.";
  }
  return "هزینه ارسال: ۴۵٬۰۰۰ تومان";
}

const total = getTotal(prices);

document.getElementById("total").textContent = "جمع کل: " + total.toLocaleString("fa-IR") + " تومان";
document.getElementById("shipping").textContent = getShippingText(total);
