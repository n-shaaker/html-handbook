// تمرین ۳ — ماشین‌حساب انعام
const calcTip = (bill, percent = 10) => Math.round(bill * percent / 100);

const formatToman = n => n.toLocaleString("fa-IR") + " تومان";

const billSummary = bill => {
  const tip = calcTip(bill);
  const total = bill + tip;
  return "مبلغ " + formatToman(bill) + " + انعام " + formatToman(tip) + " = " + formatToman(total);
};

const bills = [180000, 250000, 95000];
const summaries = bills.map(bill => billSummary(bill));
summaries.forEach(line => console.log(line));

console.log("انعام ۱۵ درصد برای ۲۰۰٬۰۰۰: " + formatToman(calcTip(200000, 15)));
