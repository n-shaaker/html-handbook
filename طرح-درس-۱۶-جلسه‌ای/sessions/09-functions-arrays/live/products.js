const products = [
  { id: 1, name: "ماگ سرامیکی", price: 140000, category: "home" },
  { id: 2, name: "هاب USB", price: 220000, category: "tech" },
  { id: 3, name: "دفترچه", price: 90000, category: "office" },
  { id: 4, name: "چراغ رومیزی", price: 390000, category: "home" },
  { id: 5, name: "پد ماوس", price: 110000, category: "tech" },
];

const out = document.querySelector("#out");

const formatPrice = (value) => `${value.toLocaleString("fa-IR")} تومان`;

// 1) Display all product names
const names = products.map((p) => p.name);

// 2) Filter products under 200,000 Toman
const under200k = products.filter((p) => p.price < 200000);

// 3) Find one product by id
const lamp = products.find((p) => p.id === 4);

// 4) Create a new array with 10% discount (do not mutate originals; round to whole Toman)
const discounted = products.map((p) => ({
  ...p,
  price: Math.round(p.price * 0.9),
}));

// 5) Total value of all products
const total = products.reduce((sum, p) => sum + p.price, 0);

out.textContent = [
  "نام‌ها:",
  names.join("، "),
  "",
  "زیر ۲۰۰ هزار تومان:",
  under200k.map((p) => `${p.name} (${formatPrice(p.price)})`).join("، "),
  "",
  `پیدا شد: ${lamp?.name ?? "یافت نشد"}`,
  "",
  "با ۱۰٪ تخفیف:",
  discounted.map((p) => `${p.name}: ${formatPrice(p.price)}`).join("\n"),
  "",
  `جمع کل: ${formatPrice(total)}`,
].join("\n");
