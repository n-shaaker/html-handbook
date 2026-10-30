// Function declaration
function add(a, b) {
  return a + b;
}

// Arrow function (common in modern frontend code)
const multiply = (a, b) => a * b;

// Default parameter: used when the argument is missing
const formatPrice = (value, currency = "تومان") => `${value.toLocaleString("fa-IR")} ${currency}`;

console.log(add(2, 3), multiply(2, 3), formatPrice(120000));

const products = [
  { id: 1, name: "ماگ", price: 120000 },
  { id: 2, name: "دفترچه", price: 80000 },
  { id: 3, name: "چراغ", price: 350000 },
];

// Mutating helpers (change the original array)
products.push({ id: 4, name: "قلم", price: 30000 });
const last = products.pop();
console.log("حذف شد", last);

// Non-mutating slice (returns a new array)
const firstTwo = products.slice(0, 2);
console.log(firstTwo);

// Iteration helpers
products.forEach((product) => {
  console.log(product.name);
});

const names = products.map((product) => product.name);
const affordable = products.filter((product) => product.price < 150000);
const lamp = products.find((product) => product.name === "چراغ"); // undefined if not found

// reduce: fold the array into one value (here: total price); 0 is the starting value
const total = products.reduce((sum, product) => sum + product.price, 0);

// sort mutates; copy first with [...array] to keep the original order
const cheapestFirst = [...products].sort((a, b) => a.price - b.price);

console.log({ names, affordable, lamp, total, cheapestFirst });
