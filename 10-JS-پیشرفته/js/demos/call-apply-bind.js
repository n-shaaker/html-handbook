/* ۳) متدهای call، apply و bind */

runIn("#out-1", function () {
  function introduce(city, job) {
    return `من ${this.name} هستم، از ${city}، ${job}.`;
  }
  const sara = { name: "سارا" };
  const ali = { name: "علی" };
  console.log(introduce.call(sara, "شیراز", "برنامه‌نویس"));
  console.log(introduce.apply(ali, ["تبریز", "طراح"]));
});

runIn("#out-2", function () {
  const person = {
    fullName() { return this.first + " " + this.last; }
  };
  const user = { first: "مریم", last: "کریمی" };
  console.log(person.fullName.call(user));
});

runIn("#out-3", function () {
  const timer = {
    seconds: 10,
    show() { return "ثانیه: " + this.seconds; }
  };
  const lost = timer.show;
  console.log(lost());
  const fixed = timer.show.bind(timer);
  console.log(fixed());
});

const scoreText = document.getElementById("score-text");
const pointBtn = document.getElementById("point-btn");

const player = {
  name: "بازیکن ۱",
  score: 0,
  addPoint() {
    this.score++;
    scoreText.textContent = `${this.name}: ${this.score} امتیاز`;
  }
};

pointBtn.addEventListener("click", player.addPoint.bind(player));
