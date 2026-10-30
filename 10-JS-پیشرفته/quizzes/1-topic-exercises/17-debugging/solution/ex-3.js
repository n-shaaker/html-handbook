/* تمرین ۳ — فروشگاه دیجیتال (اصلاح‌شده) */

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

    console.time("بارگذاری");
    // باگ ۱: await نبود و products خودِ Promise بود (filter is not a function) / درست: await
    this.products = await getProducts();
    console.timeEnd("بارگذاری");
    console.table(this.products);

    // باگ ۲: تابع پیکانی با { } بدون return همیشه undefined برمی‌گرداند / درست: return
    const available = this.products.filter((product) => {
      return product.stock > 0;
    });
    render(this.title, available);
  },
};

// باگ ۳: بدون bind، this داخل refresh خود دکمه بود و title نداشت / درست: bind(store)
refreshButton.addEventListener("click", store.refresh.bind(store));
