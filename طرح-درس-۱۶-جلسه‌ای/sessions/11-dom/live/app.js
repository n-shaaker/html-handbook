const products = [
  {
    id: 1,
    name: "چراغ رومیزی",
    price: 390000,
    image: "https://picsum.photos/seed/dom1/400/260",
  },
  {
    id: 2,
    name: "ماوس بی‌سیم",
    price: 280000,
    image: "https://picsum.photos/seed/dom2/400/260",
  },
  {
    id: 3,
    name: "بسته دفترچه",
    price: 160000,
    image: "https://picsum.photos/seed/dom3/400/260",
  },
];

const root = document.querySelector("#products");

function formatPrice(value) {
  return `${value.toLocaleString("fa-IR")} تومان`;
}

function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "card";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.width = 400;
  img.height = 260;
  img.loading = "lazy";

  const body = document.createElement("div");
  body.className = "card__body";

  const title = document.createElement("h2");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.className = "card__price";
  price.textContent = formatPrice(product.price);

  body.append(title, price);
  article.append(img, body);
  return article;
}

// Render all products into the page
for (const product of products) {
  root.append(createProductCard(product));
}
