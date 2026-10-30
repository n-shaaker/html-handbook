/* ۸) توابع Callback و کد ناهمگام */

runIn("#out-1", function () {
  function processUser(name, callback) {
    const formatted = name.trim().toUpperCase();
    callback(formatted);
  }
  processUser("  sara ", (result) => {
    console.log("نتیجه:", result);
  });
});

document.getElementById("cb-btn").addEventListener("click", () => {
  document.getElementById("out-2").textContent = "";
  const log = createLog("#out-2");

  function getUser(id, callback) {
    log(`در حال دریافت کاربر ${id}...`);
    setTimeout(() => {
      const user = { id: id, name: "سارا" };
      callback(user);
    }, 1000);
  }

  getUser(7, (user) => {
    log("کاربر رسید:", user);
  });
  log("این خط زودتر چاپ می‌شود!");
});

document.getElementById("cb2-btn").addEventListener("click", () => {
  document.getElementById("out-3").textContent = "";
  const log = createLog("#out-3");

  function divideLater(a, b, onSuccess, onError) {
    setTimeout(() => {
      if (b === 0) onError("تقسیم بر صفر!");
      else onSuccess(a / b);
    }, 500);
  }

  divideLater(10, 2, r => log("✔", r), e => log("✖", e));
  divideLater(10, 0, r => log("✔", r), e => log("✖", e));
});
