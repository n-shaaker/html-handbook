/* تمرین ۳ — این کد سه باگ دارد. پیدا و درستش کنید. */

// سرور شبیه‌سازی‌شده (این تابع باگ ندارد)
function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "کیبورد", price: 950000, stock: 3 },
        { name: "ماوس", price: 420000, stock: 0 },
        { name: "هدفون", price: 1300000, stock: 5 },
      ]);
    }, 800);
  });
}

const statusText = document.getElementById("status");
const refreshButton = document.getElementById("refresh");

function render(title, list) {
  if (list.length === 0) {
    statusText.textContent = title + " — کالایی موجود نیست.";
    return;
  }
  const names = list.map((product) => product.name).join("، ");
  statusText.textContent = `${title} — ${list.length.toLocaleString("fa-IR")} کالای موجود: ${names}`;
}

const store = {
  title: "فروشگاه دیجیتال",
  products: [],

  async refresh() {
    statusText.textContent = "در حال بارگذاری...";
    this.products = getProducts();
    const available = this.products.filter((product) => {
      product.stock > 0;
    });
    render(this.title, available);
  },
};

refreshButton.addEventListener("click", store.refresh);
