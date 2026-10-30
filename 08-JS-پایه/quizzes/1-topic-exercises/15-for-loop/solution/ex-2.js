// تمرین ۲ — جدول پس‌انداز ماهانه

const monthlySaving = 1500000;
const months = 6;
let balance = 0;

for (let month = 1; month <= months; month++) {
  balance += monthlySaving;
  console.log(`ماه ${month}: موجودی ${balance.toLocaleString("fa-IR")} تومان`);
}

console.log(`بعد از ${months} ماه: ${balance.toLocaleString("fa-IR")} تومان`);
