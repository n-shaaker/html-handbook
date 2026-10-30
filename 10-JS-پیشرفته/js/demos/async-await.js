/* ۱۰) async و await */

const wait = ms => new Promise(r => setTimeout(r, ms));

function startLog(selector) {
  document.querySelector(selector).textContent = "";
  return createLog(selector);
}

// مثال ۱
document.getElementById("tea-btn").addEventListener("click", () => {
  const log = startLog("#out-1");

  async function makeTea() {
    log("۱. آب را جوش می‌آوریم...");
    await wait(1000);
    log("۲. چای را دم می‌کنیم...");
    await wait(1000);
    log("۳. چای را می‌ریزیم ☕");
    return "چای آماده است";
  }

  makeTea().then(result => log("نتیجه:", result));
  log("(این خط منتظر چای نمی‌ماند)");
});

// مثال ۲
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: "کاربر " + id });
      else reject(new Error("شناسه نامعتبر است"));
    }, 700);
  });
}

async function loadUser(id) {
  const log = startLog("#out-2");
  try {
    log(`در حال دریافت کاربر ${id}...`);
    const user = await getUser(id);
    log("✔", user);
  } catch (err) {
    log("✖", err.message);
  } finally {
    log("— تمام —");
  }
}

document.getElementById("user-ok").addEventListener("click", () => loadUser(5));
document.getElementById("user-bad").addEventListener("click", () => loadUser(-1));

// مثال ۳
async function sequential() {
  const log = startLog("#out-3");
  log("شروع پشت سر هم...");
  const start = performance.now();
  await wait(1000);
  await wait(1000);
  log(`پشت سر هم: ${Math.round(performance.now() - start)} میلی‌ثانیه`);
}

async function parallel() {
  const log = startLog("#out-3");
  log("شروع هم‌زمان...");
  const start = performance.now();
  await Promise.all([wait(1000), wait(1000)]);
  log(`هم‌زمان: ${Math.round(performance.now() - start)} میلی‌ثانیه`);
}

document.getElementById("seq-btn").addEventListener("click", sequential);
document.getElementById("par-btn").addEventListener("click", parallel);
