/* تمرین ۱ — جمع سبد خرید (اصلاح‌شده) */

// باگ: "120000" رشته بود و با + به هم چسبانده می‌شد / درست: عدد
const prices = [120000, 250000, 180000];

function getTotal(list) {
  let total = 0;
  // باگ: i از 1 شروع می‌شد و تا length می‌رفت (list[3] = undefined ← NaN) / درست: از 0 تا کمتر از length
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function getShippingText(total) {
  // باگ: = مقدار می‌داد و شرط همیشه درست بود / درست: مقایسه با >=
  if (total >= 500000) {
    return "🚚 ارسال رایگان است.";
  }
  return "هزینه ارسال: ۴۵٬۰۰۰ تومان";
}

const total = getTotal(prices);

document.getElementById("total").textContent = "جمع کل: " + total.toLocaleString("fa-IR") + " تومان";
document.getElementById("shipping").textContent = getShippingText(total);
