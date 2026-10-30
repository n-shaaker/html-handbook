/* تمرین ۱ — تنظیمات پخش‌کننده با ?? و ?. */

const output = document.getElementById("output");

function show(text) {
  const line = document.createElement("p");
  line.textContent = text;
  output.append(line);
}

// || با 0 هم مقدار پیش‌فرض را برمی‌گرداند (اشتباه)
function getVolumeWrong(settings) {
  return settings.volume || 50;
}

// ?? فقط وقتی مقدار null یا undefined است پیش‌فرض را برمی‌گرداند
function getVolume(settings) {
  return settings.volume ?? 50;
}

function getCity(user) {
  return user.address?.city ?? "نامشخص";
}

const testSettings = [{ volume: 0 }, { volume: 80 }, {}];

for (const settings of testSettings) {
  show(`با || : ${getVolumeWrong(settings)} — با ?? : ${getVolume(settings)}`);
}

show("شهر سارا: " + getCity({ name: "سارا", address: { city: "شیراز" } }));
show("شهر علی: " + getCity({ name: "علی" }));
