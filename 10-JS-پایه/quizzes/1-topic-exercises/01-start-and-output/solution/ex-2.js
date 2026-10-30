// تمرین ۲ — پیام خوش‌آمد در صفحه

// textContent: متن همان‌طور که هست نشان داده می‌شود (تگ‌ها اجرا نمی‌شوند)
document.getElementById("welcome").textContent = "به کتابفروشی «ققنوس» خوش آمدید!";
document.getElementById("code-sample").textContent = "<strong>تخفیف ۲۰٪</strong>";

// innerHTML: تگ اجرا می‌شود؛ فقط برای متن ثابت خودمان، نه چیزی که کاربر تایپ کرده
document.getElementById("badge").innerHTML = "<strong>تخفیف ۲۰٪</strong> ویژه دانشجوها";

console.log("صفحه کتابفروشی آماده شد.");
