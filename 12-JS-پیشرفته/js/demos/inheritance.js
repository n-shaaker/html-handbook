/* ۵) وراثت، static و فیلدهای خصوصی */

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} صدایی درمی‌آورد.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    return `${this.name} (${this.breed}) واق واق می‌کند!`;
  }
}

class Cat extends Animal {
  speak() {
    return super.speak() + " میو!";
  }
}

runIn("#out-1", function () {
  const animals = [new Animal("حیوان"), new Dog("رکس", "ژرمن"), new Cat("پیشی")];
  animals.forEach(a => console.log(a.speak()));
  console.log(animals[1] instanceof Animal);
});

class MathHelper {
  static PI = 3.14159;
  static circleArea(r) {
    return MathHelper.PI * r * r;
  }
}

runIn("#out-2", function () {
  console.log(MathHelper.circleArea(2));
  const m = new MathHelper();
  console.log(m.circleArea);
});

class BankAccount {
  #balance = 0;
  constructor(owner, initial) {
    this.owner = owner;
    this.#balance = initial;
  }
  deposit(amount) {
    if (amount <= 0) throw new Error("مبلغ نامعتبر است");
    this.#balance += amount;
    return this.#balance;
  }
  withdraw(amount) {
    if (amount > this.#balance) throw new Error("موجودی کافی نیست");
    this.#balance -= amount;
    return this.#balance;
  }
  getBalance() {
    return this.#balance;
  }
}

runIn("#out-3", function () {
  const acc = new BankAccount("سارا", 500);
  console.log(acc.deposit(200));
  try {
    acc.withdraw(5000);
  } catch (err) {
    console.log("خطا:", err.message);
  }
  acc.balance = 1000000;
  console.log(acc.getBalance());
  console.log(Object.keys(acc));
});
