// تمرین ۳ — فهرست مهمان‌های جشن
const momGuests = ["خاله مینا", "عمو رضا"];
const dadGuests = ["دایی حسن", "عمه زری"];

const allGuests = momGuests.concat(dadGuests, ["مادربزرگ"]);
console.log("همه مهمان‌ها: " + allGuests.join("، "));
console.log("فهرست مادر هنوز " + momGuests.length + " نفر است");

function addFirst(list, name) {
  return list.unshift(name);
}

function cancelGuest(list, index) {
  const removed = list.splice(index, 1);
  return removed[0];
}

console.log("تعداد بعد از اضافه شدن پدربزرگ: " + addFirst(allGuests, "پدربزرگ"));
console.log("لغو شد: " + cancelGuest(allGuests, 3));
console.log("فهرست نهایی: " + allGuests.join("، "));
