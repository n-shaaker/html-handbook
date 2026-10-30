// تمرین ۳ — حساب بانکی و bind
const account = {
  owner: "مریم",
  balance: 100000,
  deposit: function (amount) {
    this.balance = this.balance + amount;
    return this.balance;
  },
  report: function () {
    return "حساب " + this.owner + ": " + this.balance + " تومان";
  }
};

console.log("موجودی بعد از واریز مستقیم: " + account.deposit(50000));

// lostDeposit دیگر با account. صدا زده نمی‌شود، پس this داخلش account نیست
// و موجودی حساب مریم عوض نمی‌شود. برای همین صدایش نمی‌زنیم.
const lostDeposit = account.deposit;

const safeDeposit = account.deposit.bind(account);
console.log("موجودی بعد از واریز با bind: " + safeDeposit(25000));

console.log(account.report());
