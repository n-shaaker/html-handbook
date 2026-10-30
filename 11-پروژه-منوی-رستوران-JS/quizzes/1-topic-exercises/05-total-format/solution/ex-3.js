/* تمرین ۳ — فاکتور با تخفیف، مالیات و هزینه ارسال */

const DISCOUNT_CODE = "NARANJ10";
const DELIVERY_FEE = 40000;
const FREE_DELIVERY_FROM = 500000;

const order = [
  { name: "چلوکباب کوبیده", price: 420000, qty: 1 },
  { name: "دوغ محلی", price: 45000, qty: 2 },
];

/* فقط محاسبه؛ با DOM کاری ندارد */
function calculateInvoice(subtotal, hasDiscount) {
  let discount = 0;
  if (hasDiscount) {
    discount = Math.round(subtotal * 0.1);
  }

  const afterDiscount = subtotal - discount;
  const tax = Math.round(afterDiscount * 0.1);

  let delivery = DELIVERY_FEE;
  if (afterDiscount >= FREE_DELIVERY_FROM) {
    delivery = 0;
  }

  return {
    discount: discount,
    tax: tax,
    delivery: delivery,
    total: afterDiscount + tax + delivery,
  };
}

function formatPrice(number) {
  return number.toLocaleString("fa-IR") + " تومان";
}

/* ---------- نمایش ---------- */

const itemsList = document.getElementById("items");
const codeInput = document.getElementById("code");
const codeMessage = document.getElementById("code-message");

let subtotal = 0;
for (const item of order) {
  subtotal += item.price * item.qty;

  const li = document.createElement("li");
  li.textContent = `${item.name} × ${item.qty.toLocaleString("fa-IR")}`;
  itemsList.append(li);
}

function showInvoice(hasDiscount) {
  const result = calculateInvoice(subtotal, hasDiscount);

  document.getElementById("subtotal").textContent = formatPrice(subtotal);
  document.getElementById("discount").textContent = formatPrice(result.discount);
  document.getElementById("tax").textContent = formatPrice(result.tax);
  document.getElementById("delivery").textContent =
    result.delivery === 0 ? "رایگان" : formatPrice(result.delivery);
  document.getElementById("total").textContent = formatPrice(result.total);
}

document.getElementById("discount-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const code = codeInput.value.trim().toUpperCase();

  if (code === DISCOUNT_CODE) {
    codeMessage.className = "form-message success";
    codeMessage.textContent = "✔ کد تخفیف اعمال شد.";
    showInvoice(true);
  } else {
    codeMessage.className = "form-message error";
    codeMessage.textContent = "کد تخفیف معتبر نیست.";
    showInvoice(false);
  }
});

showInvoice(false);
