/* ۱۲) متدهای رشته (String Methods) */

runIn("#out-1", function () {
  let email = "   Sara@Example.COM  ";
  let clean = email.trim().toLowerCase();
  console.log("[" + email + "]");
  console.log("[" + clean + "]");
});

runIn("#out-2", function () {
  let text = "I love JavaScript";
  console.log(text.slice(7));
  console.log(text.slice(-10));
  console.log(text.includes("love"));
  console.log(text.includes("Love"));
  console.log(text.indexOf("Java"));
  console.log(text.replace("love", "like"));
  console.log(text);
  console.log(text.split(" "));
});

function maskPhone(phone) {
  const clean = phone.trim();
  return clean.slice(0, 4) + "***" + clean.slice(-4);
}

runIn("#out-3", function () {
  console.log(maskPhone("09121234567"));
  console.log(maskPhone(" 09351112233 "));
});

const textArea = document.getElementById("text-area");
const info = document.getElementById("text-info");

textArea.addEventListener("input", function () {
  const value = textArea.value.trim();
  let words = 0;
  if (value !== "") {
    words = value.split(/\s+/).length;
  }
  info.textContent = "حرف: " + textArea.value.length + " | کلمه: " + words;
});
