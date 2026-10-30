/* تمرین ۲ — ماژول سبد خرید */

// export نشده؛ بیرون از این فایل دیده نمی‌شود
const items = [];

export function addItem(name, price) {
  items.push({ name: name, price: price });
}

export function getTotal() {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}
