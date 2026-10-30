// Synchronous code runs line by line immediately.
console.log("الف");
console.log("ب");

// Asynchronous callbacks run later, even with a 0 ms delay
setTimeout(() => console.log("د (setTimeout 0)"), 0);
console.log("ج");
// Output order: الف، ب، ج، ... then د

// Promises represent a value that will be available later (resolve = success, reject = failure).
const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(`منتظر ماندیم ${ms} میلی‌ثانیه`), ms);
  });

wait(300).then((message) => console.log(message));

// A promise that fails
const failLater = () =>
  new Promise((_, reject) => {
    setTimeout(() => reject(new Error("عملیات ناموفق بود")), 100);
  });

failLater().catch((error) => console.error("catch:", error.message));

// Preferred modern style: async/await + try/catch
async function demo() {
  try {
    const message = await wait(200);
    console.log("async/await:", message);
    await failLater(); // throws inside try → jumps to catch
  } catch (error) {
    console.error("مشکلی پیش آمد:", error.message);
  } finally {
    console.log("finally always runs (e.g. hide the loading spinner)");
  }
}

demo();

// fetch pattern used in every project of this course
async function getTodo(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    // fetch resolves even for 404/500 — check response.ok yourself
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // Network failure (offline, DNS, CORS) arrives here as a TypeError
    console.error("fetch failed:", error.message);
    return null;
  }
}

getTodo(1).then((todo) => console.log("todo:", todo));

// Run independent requests in parallel instead of one after another
Promise.all([getTodo(1), getTodo(2)]).then((todos) => console.log("parallel:", todos));

// Sending data: POST with a JSON body
async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "سلام", body: "اولین پست", userId: 1 }),
  });
  console.log("POST status:", response.status); // 201 Created (fake API: not really saved)
}

createPost().catch((error) => console.error(error));

/*
  HTTP methods (frontend perspective):
  - GET: read data
  - POST: create data
  - PUT: replace a resource / PATCH: update part of it
  - DELETE: remove data

  Common status codes: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized,
  404 Not Found, 500 Internal Server Error.
*/
