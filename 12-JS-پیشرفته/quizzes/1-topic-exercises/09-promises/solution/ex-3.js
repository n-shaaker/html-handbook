/* تمرین ۳ — داشبورد با Promise.all */

function fakeRequest(data, ms, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(data + " بارگذاری نشد."));
        return;
      }
      resolve(data);
    }, ms);
  });
}

const failCheckbox = document.getElementById("fail");
const loadButton = document.getElementById("load");
const output = document.getElementById("output");

function show(text) {
  const line = document.createElement("p");
  line.textContent = text;
  output.append(line);
}

loadButton.addEventListener("click", () => {
  output.textContent = "در حال بارگذاری...";
  output.classList.remove("error");
  loadButton.disabled = true;

  const startTime = Date.now();

  Promise.all([
    fakeRequest({ name: "سارا" }, 800, false),
    fakeRequest([101, 102, 103], 1500, false),
    fakeRequest("پیام‌ها", 1200, failCheckbox.checked),
  ])
    .then((results) => {
      const profile = results[0];
      const orders = results[1];

      output.textContent = "";
      show("کاربر: " + profile.name);
      show("تعداد سفارش‌ها: " + orders.length.toLocaleString("fa-IR"));
      show("پیام‌ها: آماده");

      const seconds = (Date.now() - startTime) / 1000;
      show("زمان بارگذاری: " + seconds.toLocaleString("fa-IR") + " ثانیه");
    })
    .catch((error) => {
      output.classList.add("error");
      output.textContent = "بارگذاری داشبورد ناموفق بود: " + error.message;
    })
    .finally(() => {
      loadButton.disabled = false;
    });
});
