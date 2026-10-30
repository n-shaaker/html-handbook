const user = {
  name: "علی",
  age: 25,
  address: {
    city: "تهران",
    country: "ایران",
  },
};

// Dot notation and nested access
console.log(user.name, user.address.city);

// Bracket notation: needed when the key is in a variable
const field = "age";
console.log(user[field]);

// Add / update / delete properties (const object can still be changed)
user.email = "ali@example.com";
user.age = 26;
delete user.email;

// Array of objects — the most common frontend data shape
const users = [
  { id: 1, name: "علی", role: "دانشجو" },
  { id: 2, name: "سارا", role: "منتور" },
  { id: 3, name: "نیما", role: "دانشجو" },
];

// Destructuring (with rename and default value)
const { name, age, phone = "ثبت نشده" } = user;
const {
  address: { city: userCity },
} = user;
console.log(name, age, phone, userCity);

// Array destructuring
const [firstUser, secondUser] = users;
console.log(firstUser.name, secondUser.name);

// Spread: shallow copy / merge
const newUser = { ...user, age: 27, active: true };
console.log(newUser);

// Shallow means nested objects are still shared!
newUser.address.city = "مشهد";
console.log(user.address.city); // "مشهد" — the original changed too
const safeCopy = structuredClone(user); // deep copy (modern browsers / Node 17+)
console.log(safeCopy);

// Rest: collect the remaining properties
const { id, ...withoutId } = users[0];
console.log(id, withoutId);

// Property shorthand
const role = "مدرس";
const teacher = { name: "مریم", role }; // same as { name: "مریم", role: role }
console.log(teacher);

// Optional chaining (?.) and nullish coalescing (??) for missing data
const guest = { name: "مهمان" };
console.log(guest.address?.city ?? "شهر نامشخص");

// Loop over keys / entries
for (const [key, value] of Object.entries(teacher)) {
  console.log(`${key}: ${value}`);
}

// Template literals
const label = `${newUser.name} ${newUser.age} ساله است`;
console.log(label);

console.table(users);
