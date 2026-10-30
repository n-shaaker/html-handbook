/* ۱۷) اشکال‌زدایی و نکات حرفه‌ای (Debugging & Best Practices) */

const users = [
  { name: "سارا", age: 25, city: "شیراز" },
  { name: "علی", age: 32, city: "تبریز" }
];

/* نسخه واقعی: خروجی در Console مرورگر (F12) */
console.table(users);
console.group("اطلاعات سفارش");
console.log("شماره: 1024");
console.warn("موجودی کم است");
console.groupEnd();
console.time("حلقه");
for (let i = 0; i < 1_000_000; i++) {}
console.timeEnd("حلقه");

/* نسخه ساده‌شده برای جعبه صفحه */
runIn("#out-1", function () {
  users.forEach(u => console.log(`| ${u.name} | ${u.age} | ${u.city} |`));
  console.log("▼ اطلاعات سفارش");
  console.log("   شماره: 1024");
  console.warn("موجودی کم است");
  const start = performance.now();
  for (let i = 0; i < 1_000_000; i++) {}
  console.log(`حلقه: ${(performance.now() - start).toFixed(2)} ms`);
});

runIn("#out-2", function () {
  function parsePrice(text) {
    const n = Number(text);
    if (text.trim() === "" || Number.isNaN(n)) {
      throw new TypeError(`«${text}» عدد نیست`);
    }
    if (n < 0) throw new RangeError("قیمت نمی‌تواند منفی باشد");
    return n;
  }

  for (const input of ["250000", "abc", "-5"]) {
    try {
      console.log("✔", parsePrice(input));
    } catch (err) {
      console.log("✖", err.name + ":", err.message);
    }
  }
});

function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    debugger;
    total += item.price * item.qty;
  }
  return total;
}

document.getElementById("debug-btn").addEventListener("click", () => {
  const total = calculateTotal([
    { price: 120000, qty: 2 },
    { price: 45000, qty: 3 }
  ]);
  document.getElementById("debug-out").textContent = "جمع کل: " + total.toLocaleString("fa-IR") + " تومان";
});
