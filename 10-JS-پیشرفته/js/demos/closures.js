/* ۲) بستارها (Closures) */

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

runIn("#out-1", function () {
  const counterA = makeCounter();
  const counterB = makeCounter();
  console.log(counterA());
  console.log(counterA());
  console.log(counterA());
  console.log(counterB());
});

runIn("#out-2", function () {
  function createWallet(initial) {
    let balance = initial;
    return {
      deposit(amount) { balance += amount; return balance; },
      withdraw(amount) {
        if (amount > balance) return "موجودی کافی نیست";
        balance -= amount;
        return balance;
      },
      getBalance() { return balance; }
    };
  }
  const wallet = createWallet(1000);
  console.log(wallet.deposit(500));
  console.log(wallet.withdraw(2000));
  console.log(wallet.getBalance());
  console.log(wallet.balance);
});

function setupCounter(button, display) {
  let clicks = 0;
  button.addEventListener("click", () => {
    clicks++;
    display.textContent = clicks;
  });
}

const btnA = document.getElementById("btn-a");
const displayA = document.getElementById("display-a");
const btnB = document.getElementById("btn-b");
const displayB = document.getElementById("display-b");

setupCounter(btnA, displayA);
setupCounter(btnB, displayB);

runIn("#out-3", function () {
  const fns = [];
  for (let i = 1; i <= 3; i++) {
    fns.push(() => i);
  }
  console.log(fns.map(f => f()));
  const fns2 = [];
  for (var j = 1; j <= 3; j++) {
    fns2.push(() => j);
  }
  console.log(fns2.map(f => f()));
});
