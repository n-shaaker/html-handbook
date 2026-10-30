// تمرین ۱ — ماشین من
const car = {
  brand: "پراید",
  speed: 0,
  describe: function () {
    return this.brand + " با سرعت " + this.speed + " کیلومتر";
  },
  accelerate: function (amount) {
    this.speed = this.speed + amount;
  },
  brake: function () {
    this.speed = 0;
  }
};

console.log(car.describe());
car.accelerate(40);
car.accelerate(20);
console.log(car.describe());
car.brake();
console.log(car.describe());
