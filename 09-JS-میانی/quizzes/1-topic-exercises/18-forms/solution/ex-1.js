// تمرین ۱ — عضویت در خبرنامه
const form = document.getElementById("newsletter");
const message = document.getElementById("message");

form.addEventListener("submit", event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  if (email === "" || !email.includes("@")) {
    message.textContent = "لطفاً ایمیل درست وارد کنید.";
    return;
  }

  message.textContent = "ایمیل " + email + " با موفقیت ثبت شد.";
  form.reset();
});
