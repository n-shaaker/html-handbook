/* تمرین ۲ — کیف پول با موجودی خصوصی */

function createWallet(initialBalance) {
  let balance = initialBalance;

  function deposit(amount) {
    if (amount <= 0) {
      return "مبلغ باید بیشتر از صفر باشد.";
    }
    balance += amount;
    return "";
  }

  function withdraw(amount) {
    if (amount <= 0) {
      return "مبلغ باید بیشتر از صفر باشد.";
    }
    if (amount > balance) {
      return "موجودی کافی نیست.";
    }
    balance -= amount;
    return "";
  }

  function getBalance() {
    return balance;
  }

  return { deposit, withdraw, getBalance };
}

const wallet = createWallet(50000);

const amountInput = document.getElementById("amount");
const message = document.getElementById("message");
const balanceText = document.getElementById("balance");

function showBalance() {
  balanceText.textContent = "موجودی: " + wallet.getBalance().toLocaleString("fa-IR") + " تومان";
}

document.getElementById("deposit").addEventListener("click", () => {
  message.textContent = wallet.deposit(Number(amountInput.value));
  showBalance();
});

document.getElementById("withdraw").addEventListener("click", () => {
  message.textContent = wallet.withdraw(Number(amountInput.value));
  showBalance();
});

console.log(wallet.balance); // undefined

showBalance();
