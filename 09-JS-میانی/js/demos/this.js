/* ۱۰) کلمه کلیدی this */

runIn("#out-1", function () {
  const user = {
    name: "سارا",
    greet: function () {
      return "سلام، من " + this.name + " هستم";
    }
  };
  console.log(user.greet());
});

runIn("#out-2", function () {
  const user2 = {
    name: "علی",
    normal: function () { return this.name; },
    arrow: () => this.name
  };
  console.log("normal:", user2.normal());
  console.log("arrow:", user2.arrow());
});

runIn("#out-4", function () {
  const shop = {
    name: "کتاب‌فروشی دانش",
    welcome: function () {
      return "به " + this.name + " خوش آمدید";
    }
  };
  console.log(shop.welcome());
  const welcomeFn = shop.welcome;
  console.log(welcomeFn());
  const fixed = shop.welcome.bind(shop);
  console.log(fixed());
});

runIn("#out-3", function () {
  const team = {
    name: "تیم آبی",
    members: ["سارا", "علی"],
    show: function () {
      this.members.forEach(m => {
        console.log(m + " عضو " + this.name);
      });
    }
  };
  team.show();
});

const buttons = document.querySelectorAll(".this-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    this.textContent = "کلیک شدم ✔";
  });
});

const arrowButtons = document.querySelectorAll(".arrow-this-btn");

arrowButtons.forEach(btn => {
  btn.addEventListener("click", (event) => {
    event.currentTarget.textContent = "کلیک شدم ✔ (currentTarget)";
  });
});
