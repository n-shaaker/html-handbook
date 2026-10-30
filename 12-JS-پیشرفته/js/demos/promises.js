/* ۹) وعده‌ها (Promises) */

function wait(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}

function fail(ms, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(message)), ms);
  });
}

/* log هر مثال در جعبه خودش می‌نویسد؛ با هر کلیک، جعبه همان مثال پاک می‌شود */
let log;
function startLog(selector) {
  document.querySelector(selector).textContent = "";
  log = createLog(selector);
}

// مثال ۱
function orderPizza(type) {
  return new Promise((resolve, reject) => {
    log(`سفارش ${type} ثبت شد...`);
    setTimeout(() => {
      if (type === "آناناس") {
        reject(new Error("این پیتزا را نداریم!"));
      } else {
        resolve(`پیتزا ${type} آماده است 🍕`);
      }
    }, 1200);
  });
}

function order(type) {
  startLog("#out-1");
  orderPizza(type)
    .then(message => log("✔", message))
    .catch(error => log("✖", error.message))
    .finally(() => log("— پایان سفارش —"));
}

document.getElementById("pizza-ok").addEventListener("click", () => order("پپرونی"));
document.getElementById("pizza-bad").addEventListener("click", () => order("آناناس"));

// مثال ۲
document.getElementById("chain-btn").addEventListener("click", () => {
  startLog("#out-2");
  wait(500, 1)
    .then(n => { log("مرحله اول:", n); return wait(500, n + 1); })
    .then(n => { log("مرحله دوم:", n); return wait(500, n + 1); })
    .then(n => { log("مرحله سوم:", n); })
    .catch(err => log("خطا:", err));
});

// ترتیب اجرا (همان لحظه بارگذاری صفحه)
{
  const log = createLog("#out-4");
  log("1: همگام");
  setTimeout(() => log("4: setTimeout با تأخیر 0"), 0);
  Promise.resolve().then(() => log("3: then (microtask)"));
  log("2: همگام");
}

// مثال ۳
document.getElementById("all-btn").addEventListener("click", () => {
  startLog("#out-3");
  const p1 = wait(800, "کاربر");
  const p2 = wait(400, "سفارش‌ها");
  const p3 = wait(600, "پیام‌ها");

  Promise.all([p1, p2, p3]).then(results => {
    log("همه رسیدند:", results);
  });

  Promise.race([p1, p2, p3]).then(first => {
    log("اولین:", first);
  });
});

// مثال ۴: وقتی یکی خطا بدهد
document.getElementById("settled-btn").addEventListener("click", () => {
  startLog("#out-5");
  function makeRequests() {
    return [wait(300, "سرور A"), fail(100, "سرور B خراب است"), wait(500, "سرور C")];
  }

  Promise.all(makeRequests())
    .then(r => log("all:", r))
    .catch(err => log("all ✖:", err.message));

  Promise.allSettled(makeRequests()).then(results => {
    results.forEach(r => {
      if (r.status === "fulfilled") {
        log("allSettled:", r.status, r.value);
      } else {
        log("allSettled:", r.status, r.reason.message);
      }
    });
  });

  Promise.race(makeRequests())
    .then(v => log("race:", v))
    .catch(err => log("race ✖:", err.message));

  Promise.any(makeRequests())
    .then(v => log("any:", v))
    .catch(err => log("any ✖: همه ناموفق بودند"));
});
