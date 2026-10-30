/* تمرین ۲ — هزینه پارکینگ با super و static */

class Vehicle {
  constructor(plate, hours) {
    this.plate = plate;
    this.hours = hours;
  }

  getFee() {
    return this.hours * 20000;
  }

  static totalFee(vehicles) {
    let total = 0;
    for (const vehicle of vehicles) {
      total += vehicle.getFee();
    }
    return total;
  }
}

class Truck extends Vehicle {
  constructor(plate, hours, axles) {
    super(plate, hours); // اول باید سازنده پدر صدا زده شود
    this.axles = axles;
  }

  getFee() {
    return super.getFee() + this.axles * 15000;
  }
}

const vehicles = [new Vehicle("12ب345", 3), new Truck("45ع678", 2, 3)];

const output = document.getElementById("output");

for (const vehicle of vehicles) {
  const li = document.createElement("li");
  li.textContent = `پلاک ${vehicle.plate}: ${vehicle.getFee().toLocaleString("fa-IR")} تومان`;
  output.append(li);
}

document.getElementById("total").textContent =
  "جمع کل: " + Vehicle.totalFee(vehicles).toLocaleString("fa-IR") + " تومان";
