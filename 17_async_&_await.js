
/********************************************************
 * Topic: Async & Await in JavaScript
 * Purpose: Interview-ready theory + examples + traps
 * Author: Ashutosh Choubey (JS Interview Prep)
 ********************************************************/

/*
========================================================
1️⃣ Why async/await Introduced?
========================================================

Promises improved async handling, but chaining
multiple .then() still became messy.

async/await provides:
✅ Cleaner syntax
✅ Synchronous-looking code
✅ Better readability
✅ Easier error handling

Internally:
👉 async/await is built on Promises.
*/

/*
========================================================
2️⃣ What is async?
========================================================

async makes a function ALWAYS return a Promise.
*/

async function greet() {
  return "Hello";
}

greet().then(console.log); // Hello

// Same as:
function greet2() {
  return Promise.resolve("Hello");
}

/*
========================================================
3️⃣ What is await?
========================================================

await pauses execution until Promise resolves.

Rules:
✔ Only usable inside async functions.
✔ Waits for Promise resolution.
✔ Returns resolved value.
*/

function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Server Data");
    }, 1000);
  });
}

async function fetchData() {
  const data = await getData();
  console.log(data);
}

fetchData();

/*
========================================================
4️⃣ Execution Flow Understanding
========================================================

await does NOT block JavaScript thread.
It only pauses the async function.
*/

console.log("Start");

async function demo() {
  await Promise.resolve();
  console.log("Async done");
}

demo();

console.log("End");

/*
Output:
Start
End
Async done
*/

/*
========================================================
5️⃣ Sequential Execution
========================================================
*/

function step(msg, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, time);
  });
}

async function runSteps() {
  await step("Step 1", 1000);
  await step("Step 2", 1000);
  await step("Step 3", 1000);
}

runSteps();

/*
========================================================
6️⃣ Parallel Execution (Optimization)
========================================================

Bad approach → sequential waits.
Better → run promises in parallel.
*/

async function runParallel() {
  const p1 = step("A", 1000);
  const p2 = step("B", 1000);

  await p1;
  await p2;
}

runParallel();

/*
========================================================
7️⃣ Error Handling using try/catch
========================================================
*/

function riskyTask() {
  return new Promise((_, reject) => {
    reject("Task Failed");
  });
}

async function runTask() {
  try {
    await riskyTask();
  } catch (err) {
    console.log("Caught:", err);
  }
}

runTask();

/*
========================================================
8️⃣ await with Non-Promise
========================================================

await automatically wraps values in Promise.
*/

async function test() {
  const value = await 10;
  console.log(value);
}

test(); // 10

/*
========================================================
9️⃣ Multiple Awaits Example
========================================================
*/

async function multiple() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(2);
  console.log(a + b);
}

multiple();

/*
========================================================
🔟 Common Interview Traps
========================================================
*/

// Trap 1: async always returns promise
async function x() {
  return 5;
}
console.log(x()); // Promise {5}

// Trap 2: await only valid inside async
// SyntaxError if used outside

/*
========================================================
1️⃣1️⃣ Output Prediction Questions
========================================================
*/

// Q1
async function test1() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}
console.log("C");
test1();
console.log("D");

/*
Output:
C
A
D
B
*/

// Q2
async function test2() {
  return 10;
}

test2().then(console.log); // 10

/*
========================================================
1️⃣2️⃣ Interview One-Liners
========================================================

✔ async function always returns Promise.
✔ await pauses async function, not JS thread.
✔ try/catch handles async errors.
✔ async/await improves readability.
✔ Built on top of Promises.
*/

/*
========================================================
🔥 END OF FILE: async_await.js
========================================================
*/
