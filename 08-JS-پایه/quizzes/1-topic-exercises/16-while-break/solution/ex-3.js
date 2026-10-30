// تمرین ۳ — break و continue

// بخش الف: روزهای کاری دو هفته (هر روز هفتم جمعه است و رد می‌شود)
for (let day = 1; day <= 14; day++) {
  if (day % 7 === 0) {
    continue;
  }
  console.log("روز کاری", day);
}

// بخش ب: اولین شماره صندلی بزرگ‌تر از ۱۰۰ که هم بر ۷ و هم بر ۹ بخش‌پذیر است
let winner = -1;
for (let seat = 101; seat <= 500; seat++) {
  if (seat % 7 === 0 && seat % 9 === 0) {
    winner = seat;
    // پیدا شد؛ بقیه صندلی‌ها را لازم نیست بگردیم
    break;
  }
}
console.log("صندلی برنده:", winner);
