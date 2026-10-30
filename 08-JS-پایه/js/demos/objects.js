/* ۹) اشیا (Objects) */

const student = {
  firstName: "سارا",
  lastName: "احمدی",
  age: 20,
  isActive: true
};

runIn("#out-1", function () {
  console.log(student.firstName);
  console.log(student["age"]);
  console.log(student.grade);
});

runIn("#out-2", function () {
  student.age = 21;
  student.city = "تهران";
  delete student.isActive;
  console.log(student);
});

const person = {
  firstName: "علی",
  lastName: "رضایی",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

runIn("#out-3", function () {
  console.log(person.fullName());
});

runIn("#out-5", function () {
  const key = "lastName";
  console.log(person[key]);
  console.log(person.key);

  const product = { "unit-price": 50000 };
  console.log(product["unit-price"]);
});

runIn("#out-4", function () {
  const cartItem = {
    title: "هدفون بی‌سیم",
    price: 1200000,
    quantity: 2,
    total: function () {
      return this.price * this.quantity;
    }
  };

  console.log(`${cartItem.title}: ${cartItem.total()} تومان`);
  cartItem.quantity = 3;
  console.log(`${cartItem.title}: ${cartItem.total()} تومان`);
});
