/* تمرین ۱ — صدای حیوانات با وراثت */

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} صدایی درمی‌آورد.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} می‌گوید: هاپ هاپ!`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} می‌گوید: میو!`;
  }
}

const dog = new Dog("پاپی");
const cat = new Cat("پیشی");
const other = new Animal("جوجه‌تیغی");

const output = document.getElementById("output");

document.getElementById("dog").addEventListener("click", () => {
  output.textContent = dog.speak();
});

document.getElementById("cat").addEventListener("click", () => {
  output.textContent = cat.speak();
});

document.getElementById("other").addEventListener("click", () => {
  output.textContent = other.speak();
});

console.log(dog instanceof Animal); // true
