/* تمرین ۱ — دم کشیدن چای با Promise */

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const brewButton = document.getElementById("brew");
const output = document.getElementById("output");

brewButton.addEventListener("click", () => {
  output.textContent = "در حال دم کشیدن...";
  brewButton.disabled = true;

  wait(3000).then(() => {
    output.textContent = "☕ چای آماده است!";
    brewButton.disabled = false;
  });
});
