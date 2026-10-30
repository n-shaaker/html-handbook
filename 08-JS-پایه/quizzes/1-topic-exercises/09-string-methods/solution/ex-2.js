// تمرین ۲ — پوشاندن شماره کارت و بررسی پسوند فایل

function maskCard(cardNumber) {
  const clean = cardNumber.trim();
  return clean.slice(0, 4) + " **** **** " + clean.slice(-4);
}

function isPdf(fileName) {
  // اول کوچک می‌کنیم تا .PDF هم قبول شود
  return fileName.toLowerCase().endsWith(".pdf");
}

console.log(maskCard("6037991234567890"));
console.log(maskCard("  5022291011112222 "));
console.log(isPdf("resume.pdf"));
console.log(isPdf("Resume.PDF"));
console.log(isPdf("photo.jpg"));
