/* ۱۱) تجزیه و پخش (Destructuring، Spread و Rest) */

runIn("#out-1", function () {
  const colors = ["قرمز", "سبز", "آبی"];
  const [first, second] = colors;
  console.log(first, second);
  let a = 1, b = 2;
  [a, b] = [b, a];
  console.log(a, b);
});

runIn("#out-2", function () {
  const user = { name: "سارا", age: 25, city: "شیراز" };
  const { name, age } = user;
  console.log(name, age);
  const { city: town, job = "نامشخص" } = user;
  console.log(town, job);
});

runIn("#out-3", function () {
  function showUser({ name, age }) {
    console.log(`${name} - ${age} ساله`);
  }
  showUser({ name: "علی", age: 30, city: "تبریز" });
});

runIn("#out-4", function () {
  const a1 = [1, 2, 3];
  const a2 = [4, 5];
  const all = [...a1, ...a2, 6];
  console.log(all);
  const copy = [...a1];
  copy.push(99);
  console.log(a1, copy);
  const base = { theme: "روشن", lang: "fa" };
  const settings = { ...base, theme: "تیره" };
  console.log(settings);
  console.log(Math.max(...all));
  const cart = [{ name: "دفتر", qty: 2 }];
  const newCart = [...cart, { name: "خودکار", qty: 1 }];
  console.log(cart.length, newCart.length);
});

runIn("#out-6", function () {
  const order = { id: 7, customer: { name: "سارا" } };
  const orderCopy = { ...order };
  orderCopy.id = 8;
  orderCopy.customer.name = "مریم";
  console.log(order.id, order.customer.name);
  const deepCopy = { ...order, customer: { ...order.customer } };
  deepCopy.customer.name = "رضا";
  console.log(order.customer.name);
});

runIn("#out-5", function () {
  function sum(...numbers) {
    return numbers.reduce((s, n) => s + n, 0);
  }
  console.log(sum(1, 2), sum(1, 2, 3, 4, 5));
  const [head, ...tail] = [10, 20, 30, 40];
  console.log(head, tail);
  const { name: n, ...others } = { name: "رضا", age: 22, city: "یزد" };
  console.log(n, others);
});
