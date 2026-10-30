/* ۶) مجموعه و نگاشت (Set و Map) */

runIn("#out-1", function () {
  const tags = new Set(["js", "css", "js", "html", "css"]);
  console.log(tags);
  console.log(tags.size);
  tags.add("react");
  tags.add("js");
  console.log(tags.has("css"));
  tags.delete("html");
  console.log(tags);
  for (const t of tags) console.log("-", t);
});

runIn("#out-2", function () {
  const numbers = [1, 2, 2, 3, 3, 3, 4];
  const unique = [...new Set(numbers)];
  console.log(unique);
});

runIn("#out-3", function () {
  const prices = new Map();
  prices.set("سیب", 45000);
  prices.set("موز", 80000);
  prices.set("انار", 60000);
  console.log(prices.get("موز"));
  console.log(prices.has("کیوی"));
  console.log(prices.size);
  prices.forEach((value, key) => {
    console.log(`${key}: ${value.toLocaleString("en-US")} تومان`);
  });
  const fromObject = new Map(Object.entries({ a: 1, b: 2 }));
  console.log(fromObject);
  console.log(Object.fromEntries(fromObject));
});

const textInput = document.getElementById("word-text");
const countBtn = document.getElementById("word-btn");
const output = document.getElementById("word-out");

countBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text === "") {
    output.textContent = "اول چند کلمه بنویسید.";
    return;
  }
  const words = text.split(/\s+/);
  const counts = new Map();
  for (const w of words) {
    counts.set(w, (counts.get(w) || 0) + 1);
  }
  const sorted = [...counts].sort((a, b) => b[1] - a[1]);
  output.textContent = sorted.map(([w, c]) => `${w}: ${c}`).join("\n");
});
