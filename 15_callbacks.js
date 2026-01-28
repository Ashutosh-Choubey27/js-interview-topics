
/******************************************************
 * Topic: Callbacks & Callback Hell in JavaScript
 * Author: Ashutosh Choubey 
 *  * Purpose: Interview-ready notes with examples
 ******************************************************/

/*
======================================================
1️⃣ What is a Callback?
======================================================

👉 A callback is a function passed as an argument
   to another function and executed later.

👉 Callbacks are heavily used in JavaScript to handle
   asynchronous operations.
*/

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye 👋");
}

greet("Ashutosh", sayBye);

/*
======================================================
2️⃣ Why Callbacks are Needed?
======================================================

👉 JavaScript is single-threaded.
👉 Long-running tasks (API, DB, timers) are async.
👉 Callbacks ensure code runs AFTER async task completes.
*/

// ❌ Problem without callback
let data;

setTimeout(() => {
  data = "Server Data";
}, 1000);

console.log(data); // undefined (async issue)

// ✅ Solution using callback
function getData(callback) {
  setTimeout(() => {
    callback("Server Data");
  }, 1000);
}

getData((result) => {
  console.log(result); // Server Data
});

/*
======================================================
3️⃣ Asynchronous Callback Example
======================================================
*/

console.log("Start");

setTimeout(() => {
  console.log("Inside callback");
}, 1000);

console.log("End");

/*
Output:
Start
End
Inside callback
*/

/*
======================================================
4️⃣ Callback Hell (Pyramid of Doom)
======================================================

👉 Nested callbacks create unreadable & unmaintainable code.
👉 This situation is called Callback Hell.
*/

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");

      setTimeout(() => {
        console.log("Step 4");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

/*
======================================================
5️⃣ Problems with Callback Hell
======================================================

❌ Poor readability
❌ Difficult debugging
❌ Error handling becomes messy
❌ Hard to scale & maintain
*/

/*
======================================================
6️⃣ Avoiding Callback Hell
======================================================
*/

/*
✅ Method 1: Using Separate Functions
*/

function step1(cb) {
  setTimeout(() => {
    console.log("Step 1");
    cb();
  }, 1000);
}

function step2(cb) {
  setTimeout(() => {
    console.log("Step 2");
    cb();
  }, 1000);
}

function step3(cb) {
  setTimeout(() => {
    console.log("Step 3");
    cb();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("Done");
    });
  });
});

/*
✅ Method 2: Using Promises (Better)
*/

function step(msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000);
  });
}

step("Step 1")
  .then(() => step("Step 2"))
  .then(() => step("Step 3"))
  .then(() => step("Step 4"))
  .catch((err) => console.log(err));

/*
✅ Method 3: Using async/await (Best & Cleanest)
*/

async function runSteps() {
  await step("Step 1");
  await step("Step 2");
  await step("Step 3");
  await step("Step 4");
}

runSteps();

/*
======================================================
7️⃣ Callbacks in Array Methods
======================================================

👉 Array methods internally use callbacks.
*/

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);
console.log(doubled);

/*
======================================================
8️⃣ Interview One-Liners
======================================================

✔ Callback is not inherently async.
✔ Async behavior depends on how it's used.
✔ Callback Hell occurs due to excessive nesting.
✔ Promises & async/await solve callback hell.
*/

/*
======================================================
🔥 END OF FILE: callbacks.js
======================================================
*/
