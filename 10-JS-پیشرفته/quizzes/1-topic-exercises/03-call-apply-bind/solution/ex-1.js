/* تمرین ۱ — معرفی دانشجوها با call */

const output = document.getElementById("output");

function show(text) {
  const line = document.createElement("p");
  line.textContent = text;
  output.append(line);
}

function introduce(greeting) {
  return `${greeting}، من ${this.name} هستم و ${this.age.toLocaleString("fa-IR")} سال دارم.`;
}

const sara = { name: "سارا", age: 20 };
const ali = { name: "علی", age: 23 };

show(introduce.call(sara, "سلام"));
show(introduce.call(ali, "درود"));
