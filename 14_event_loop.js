/************************************************************
 * EVENT LOOP IN JAVASCRIPT - COMPLETE GUIDE
 * Call Stack | Microtask | Callback Queue
 * Author: Ashutosh Choubey
 ************************************************************/

/*
============================================================
1️⃣ Synchronous Code
============================================================
*/

console.log("Start");
console.log("Middle");
console.log("End");

/*
Output:
Start
Middle
End

All executed directly in Call Stack
*/


// ----------------------------------------------------------

/*
============================================================
2️⃣ setTimeout (Async - Macrotask)
============================================================
*/

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

console.log("End");

/*
Execution Order:
1. Start
2. End
3. setTimeout
*/


// ----------------------------------------------------------

/*
============================================================
3️⃣ Promise (Microtask)
============================================================
*/

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
Execution Order:
1. Start
2. End
3. Promise
*/


// ----------------------------------------------------------

/*
============================================================
4️⃣ Promise vs setTimeout (🔥 INTERVIEW FAVORITE)
============================================================
*/

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
Output:
Start
End
Promise
Timeout

Reason:
Microtask queue > Callback queue
*/


// ----------------------------------------------------------

/*
============================================================
5️⃣ Nested Microtasks
============================================================
*/

Promise.resolve().then(() => {
  console.log("Promise 1");

  Promise.resolve().then(() => {
    console.log("Promise 2");
  });
});

/*
Microtasks keep executing
until queue is EMPTY
*/


// ----------------------------------------------------------

/*
============================================================
6️⃣ setTimeout inside Promise
============================================================
*/

Promise.resolve().then(() => {
  console.log("Promise");

  setTimeout(() => {
    console.log("Timeout");
  }, 0);
});

/*
Promise executes first,
Timeout goes to callback queue
*/


// ----------------------------------------------------------

/*
============================================================
7️⃣ Realistic Interview Question
============================================================
*/

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

Promise.resolve().then(() => {
  console.log("D");
  setTimeout(() => console.log("E"), 0);
});

console.log("F");

/*
Predict Output:
A
F
C
D
B
E
*/


// ----------------------------------------------------------

/*
============================================================
🎯 PERFECT INTERVIEW ANSWER
============================================================

"JavaScript uses an event loop to handle asynchronous
operations. The event loop continuously checks if the
call stack is empty, then executes all microtasks
(promises) before moving to the callback queue
(macrotasks like setTimeout)."
*/

console.log("✅ Event Loop MASTERED");
