// تمرین ۲ — جابه‌جا کردن دو لیوان

let cupA = "چای";
let cupB = "قهوه";

console.log("قبل:", cupA, "-", cupB);

// یک لیوان خالی (temp) لازم داریم تا چیزی گم نشود
let temp = cupA;
cupA = cupB;
cupB = temp;

console.log("بعد:", cupA, "-", cupB);
