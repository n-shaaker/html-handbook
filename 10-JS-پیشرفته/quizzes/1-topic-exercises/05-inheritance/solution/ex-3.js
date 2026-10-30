/* تمرین ۳ — حساب پس‌انداز با فیلد خصوصی */

class Account {
  #balance = 0; // از بیرون کلاس دیده و عوض نمی‌شود

  deposit(amount) {
    if (amount <= 0) {
      return false;
    }
    this.#balance += amount;
    return true;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.#balance) {
      return false;
    }
    this.#balance -= amount;
    return true;
  }

  getBalance() {
    return this.#balance;
  }
}

class SavingsAccount extends Account {
  addInterest(percent) {
    // فرزند به #balance دسترسی ندارد؛ از متدهای پدر استفاده می‌کند
    const interest = (this.getBalance() * percent) / 100;
    return this.deposit(interest);
  }
}

const account = new SavingsAccount();

const amountInput = document.getElementById("amount");
const message = document.getElementById("message");
const balanceText = document.getElementById("balance");

function showResult(isOk) {
  message.textContent = isOk ? "" : "عملیات انجام نشد.";
  balanceText.textContent = "موجودی: " + account.getBalance().toLocaleString("fa-IR") + " تومان";
}

document.getElementById("deposit").addEventListener("click", () => {
  showResult(account.deposit(Number(amountInput.value)));
});

document.getElementById("withdraw").addEventListener("click", () => {
  showResult(account.withdraw(Number(amountInput.value)));
});

document.getElementById("interest").addEventListener("click", () => {
  showResult(account.addInterest(20));
});

showResult(true);
