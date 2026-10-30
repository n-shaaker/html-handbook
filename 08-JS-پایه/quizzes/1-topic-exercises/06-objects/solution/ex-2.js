// تمرین ۲ — به‌روزرسانی مخاطب

const contact = {
  name: "حمید صادقی",
  phone: "09121234567",
  address: "کرج، گوهردشت"
};

console.log("قبل:", contact);

// تغییر یک ویژگی موجود
contact.phone = "09359876543";
// اضافه کردن ویژگی جدید
contact.email = "hamid.sadeghi@example.com";
// حذف یک ویژگی
delete contact.address;

console.log("بعد:", contact);

// خواندن ویژگی با نامی که داخل متغیر است
const field = "email";
console.log("ایمیل:", contact[field]);
