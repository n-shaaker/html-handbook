/* تمرین ۲ — بررسی موجودی انبار با resolve و reject */

const stock = { کیبورد: 5, ماوس: 0, هدفون: 2 };

function checkStock(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stock[product] === undefined) {
        reject(new Error("کالایی با این نام نداریم."));
        return;
      }
      if (stock[product] === 0) {
        reject(new Error(`«${product}» ناموجود است.`));
        return;
      }
      resolve(stock[product]);
    }, 1000);
  });
}

const productInput = document.getElementById("product");
const checkButton = document.getElementById("check");
const loading = document.getElementById("loading");
const output = document.getElementById("output");

checkButton.addEventListener("click", () => {
  const product = productInput.value.trim();

  output.textContent = "";
  output.classList.remove("error");
  loading.textContent = "در حال بررسی...";
  checkButton.disabled = true;

  checkStock(product)
    .then((count) => {
      output.textContent = `✔ ${product} موجود است (${count.toLocaleString("fa-IR")} عدد).`;
    })
    .catch((error) => {
      output.classList.add("error");
      output.textContent = error.message;
    })
    .finally(() => {
      loading.textContent = "";
      checkButton.disabled = false;
    });
});
