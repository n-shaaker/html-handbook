/* ۱۹) حلقه While، Break و Continue */

runIn("#out-1", function () {
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
});

runIn("#out-2", function () {
  let n = 10;
  do {
    console.log("این حداقل یک بار اجرا می‌شود. n =", n);
    n++;
  } while (n < 5);
});

runIn("#out-3", function () {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }
});

runIn("#out-4", function () {
  let password = "sara2024";
  let firstDigitIndex = -1;

  for (let i = 0; i < password.length; i++) {
    if ("0123456789".includes(password[i])) {
      firstDigitIndex = i;
      break;
    }
  }
  console.log("اولین رقم در شماره:", firstDigitIndex);
});

runIn("#out-5", function () {
  for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      continue;
    }
    console.log(i);
  }
});

runIn("#out-6", function () {
  const laptopPrice = 25000000;
  const monthlySaving = 3000000;
  let balance = 0;
  let months = 0;

  while (balance < laptopPrice) {
    balance += monthlySaving;
    months++;
  }
  console.log(`بعد از ${months} ماه، ${balance.toLocaleString("fa-IR")} تومان پس‌انداز داریم.`);
});
