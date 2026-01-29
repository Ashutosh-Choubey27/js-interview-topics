/********************************************************
 * Topic: Promises in JavaScript
 * Purpose: Interview-ready theory + examples + traps
 * Author: Ashutosh Choubey (JS Interview Prep)
 ********************************************************/

/*
========================================================
1️⃣ Why Promises Were Introduced?
========================================================

Before Promises, async code relied heavily on callbacks,
which often led to:

❌ Callback Hell (deep nesting)
❌ Hard error handling
❌ Poor readability

Promises provide:
✅ Cleaner async flow
✅ Better error handling
✅ Chainable operations
*/

/*
========================================================
2️⃣ What is a Promise?
========================================================

A Promise is an object representing the eventual
completion or failure of an asynchronous operation.

A Promise has 3 states:

1. Pending   → initial state
2. Fulfilled → operation successful
3. Rejected  → operation failed
*/

/*
========================================================
3️⃣ Basic Promise Creation
========================================================
*/

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Task completed");
    } else {
      reject("Task failed");
    }
  }, 1000);
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));

/*
========================================================
4️⃣ Promise Flow Visualization
========================================================

Promise created
      ↓
Pending
      ↓
resolve() OR reject()
      ↓
then() / catch()
*/

/*
========================================================
5️⃣ Real Example – API Simulation
========================================================
*/

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Ashutosh" });
    }, 1000);
  });
}

fetchUser().then(user => console.log(user));

/*
========================================================
6️⃣ Promise Chaining
========================================================

Each .then returns a new promise.
*/

function step(msg) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000);
  });
}

step("Step 1")
  .then(() => step("Step 2"))
  .then(() => step("Step 3"))
  .then(() => console.log("Done"));

/*
========================================================
7️⃣ Error Handling
========================================================
*/

function riskyTask() {
  return new Promise((resolve, reject) => {
    reject("Something went wrong");
  });
}

riskyTask()
  .then(() => console.log("Success"))
  .catch(err => console.log("Caught:", err));

/*
========================================================
8️⃣ finally() Method
========================================================

Runs regardless of success or failure.
*/

Promise.resolve("OK")
  .then(console.log)
  .finally(() => console.log("Cleanup done"));

/*
========================================================
9️⃣ Important Promise Methods
========================================================
*/

/*
Promise.all()
→ Waits for ALL promises.
→ Fails if any fails.
*/

Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(console.log);

/*
Promise.race()
→ First settled promise wins.
*/

Promise.race([
  new Promise(res => setTimeout(() => res("Fast"), 500)),
  new Promise(res => setTimeout(() => res("Slow"), 1000))
]).then(console.log);

/*
Promise.allSettled()
→ Waits for all, regardless of result.
*/

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Fail")
]).then(console.log);

/*
Promise.any()
→ First successful promise wins.
*/

Promise.any([
  Promise.reject("Error"),
  Promise.resolve("Success"),
]).then(console.log);

/*
========================================================
🔟 Common Interview Traps
========================================================
*/

// Trap 1: Promise runs immediately
const p = new Promise(res => {
  console.log("Runs instantly");
  res();
});

// Trap 2: Multiple resolve ignored
new Promise(res => {
  res(1);
  res(2);
}).then(console.log); // 1 only

/*
========================================================
1️⃣1️⃣ Output Prediction Questions
========================================================
*/

// Q1
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
Output:
Start
End
Promise
*/

// Q2
Promise.resolve(1)
  .then(x => x + 1)
  .then(console.log); // 2

/*
========================================================
1️⃣2️⃣ Interview One-Liners
========================================================

✔ Promise represents future value.
✔ then() handles success.
✔ catch() handles failure.
✔ finally() runs always.
✔ Promises solve callback hell.
✔ async/await built on Promises.
*/

/*
========================================================
🔥 END OF FILE: promises.js
========================================================
*/
