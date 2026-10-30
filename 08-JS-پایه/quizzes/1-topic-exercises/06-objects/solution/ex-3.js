// تمرین ۳ — یک قلم از سبد خرید

const cartItem = {
  title: "کتاب «ملت عشق»",
  price: 320000,
  quantity: 2,
  total: function () {
    return this.price * this.quantity;
  },
  describe: function () {
    return this.title + " × " + this.quantity + " = " + this.total() + " تومان";
  }
};

console.log(cartItem.total());
console.log(cartItem.describe());

// مشتری یک عدد دیگر اضافه کرد
cartItem.quantity = 3;
console.log(cartItem.describe());
