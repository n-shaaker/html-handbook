// تمرین ۲ — برداشت از کیف پول
function withdraw(balance, amount) {
  if (typeof amount !== "number" || Number.isNaN(amount)) {
    throw new Error("مبلغ باید عدد باشد.");
  }
  if (amount <= 0) {
    throw new Error("مبلغ باید بیشتر از صفر باشد.");
  }
  if (amount > balance) {
    throw new Error("موجودی کافی نیست.");
  }
  return balance - amount;
}

function tryWithdraw(amount) {
  try {
    const newBalance = withdraw(200000, amount);
    console.log("withdraw(200000, " + amount + ") → موجودی جدید: " + newBalance);
  } catch (error) {
    console.log("withdraw(200000, " + amount + ") → خطا: " + error.message);
  }
}

tryWithdraw(50000);
tryWithdraw("صد");
tryWithdraw(-10);
tryWithdraw(900000);
