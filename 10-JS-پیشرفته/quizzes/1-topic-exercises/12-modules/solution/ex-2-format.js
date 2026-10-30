/* تمرین ۲ — ماژول قالب‌بندی قیمت (فقط یک export پیش‌فرض) */

export default function formatPrice(n) {
  return n.toLocaleString("fa-IR") + " تومان";
}
