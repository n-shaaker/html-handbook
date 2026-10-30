/* ۱۶) عملگرهای مدرن و متدهای Object */

runIn("#out-1", function () {
  const user = { name: "سارا", address: { city: "شیراز" } };
  const guest = { name: "مهمان" };
  console.log(user.address.city);
  console.log(guest.address?.city);
  console.log(guest.getAge?.());
  console.log(user.orders?.[0]);
});

runIn("#out-2", function () {
  const settings = { volume: 0, title: "" };
  console.log(settings.volume || 50);
  console.log(settings.volume ?? 50);
  console.log(settings.title ?? "بدون عنوان");
  console.log(settings.color ?? "آبی");
});

runIn("#out-3", function () {
  let a = null;
  a ??= "پیش‌فرض";
  console.log(a);
  let count = 0;
  count ||= 10;
  console.log(count);
  let isAdmin = true;
  isAdmin &&= "دسترسی کامل";
  console.log(isAdmin);
});

runIn("#out-4", function () {
  const scores = { سارا: 18, علی: 15, مریم: 19 };
  console.log(Object.keys(scores));
  console.log(Object.values(scores));
  for (const [name, score] of Object.entries(scores)) {
    console.log(`${name}: ${score}`);
  }
  const withBonus = Object.fromEntries(
    Object.entries(scores).map(([name, score]) => [name, score + 1])
  );
  console.log(withBonus);
});

runIn("#out-5", function () {
  const original = { name: "سارا", skills: ["JS"] };
  const shallow = { ...original };
  const deep = structuredClone(original);
  shallow.skills.push("CSS");
  console.log(original.skills);
  deep.skills.push("React");
  console.log(original.skills, deep.skills);
});

runIn("#out-6", function () {
  const big = 1_000_000;
  console.log(big);
  const name = "علی", age = 30;
  const person = { name, age };
  console.log(person);
  const key = "color";
  const obj = { [key]: "قرمز" };
  console.log(obj);
  console.log([10, 20, 30].at(-1));
});
