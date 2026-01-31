
/********************************************************
 * Topic: Microtask Queue vs Macrotask Queue
 * Purpose: JS Event Loop Deep Understanding
 * Author: Ashutosh Choubey(JS Interview Prep)
 ********************************************************/

/*
========================================================
1️⃣ Why Do We Need Task Queues?
========================================================

JavaScript is:
✔ Single-threaded
✔ Non-blocking
✔ Asynchronous

Async tasks cannot run immediately,
so they are queued and executed later.

Event Loop decides:
👉 WHAT runs NEXT
👉 FROM WHICH queue
*/

/*
========================================================
2️⃣ Two Main Queues in JavaScript
========================================================

1️⃣ Macrotask Queue (Task Queue)
2️⃣ Microtask Queue (Priority Queue)

🔥 RULE (VERY IMPORTANT):
Microtask Queue is ALWAYS executed
BEFORE Macrotask Queue.
*/

/*
========================================================
3️⃣ Macrotask Queue
========================================================

Contains:
✔ setTimeout
✔ setInterval
✔ setImmediate (Node.js)
✔ I/O callbacks
✔ UI rendering tasks
*/

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

/*
========================================================
4️⃣ Microtask Queue
========================================================

Contains:
✔ Promise.then / catch / finally
✔ queueMicrotask()
✔ MutationObserver

Microtasks have HIGHER priority.
*/

Promise.resolve().then(() => {
  console.log("Microtask: Promise");
});

/*
========================================================
5️⃣ Basic Execution Order Example
========================================================
*/

console.log("Start");

setTimeout(() => {
  console.log("Macrotask");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask");
});

console.log("End");

/*
🧠 Output:
Start
End
Microtask
Macrotask
*/

/*
========================================================
6️⃣ Why Microtasks Run First?
========================================================

After:
✔ Call Stack becomes empty

Event Loop:
1️⃣ Clears ALL Microtasks
2️⃣ Executes ONE Macrotask
3️⃣ Repeats the cycle
*/

/*
========================================================
7️⃣ Multiple Microtasks Example
========================================================
*/

Promise.resolve().then(() => console.log("Microtask 1"));
Promise.resolve().then(() => console.log("Microtask 2"));
Promise.resolve().then(() => console.log("Microtask 3"));

setTimeout(() => console.log("Macrotask"), 0);

/*
🧠 Output:
Microtask 1
Microtask 2
Microtask 3
Macrotask
*/

/*
========================================================
8️⃣ Microtask Starvation (Important Interview Concept)
========================================================

Too many microtasks can BLOCK macrotasks.
*/

function infiniteMicrotask() {
  Promise.resolve().then(() => {
    console.log("Microtask running");
    infiniteMicrotask();
  });
}

// infiniteMicrotask(); // ⚠️ Browser freeze

/*
========================================================
9️⃣ queueMicrotask()
========================================================

Explicit way to push into Microtask Queue
*/

queueMicrotask(() => {
  console.log("Microtask via queueMicrotask");
});

setTimeout(() => {
  console.log("Macrotask via setTimeout");
}, 0);

/*
========================================================
🔟 Promise inside setTimeout
========================================================
*/

setTimeout(() => {
  console.log("Macrotask Start");

  Promise.resolve().then(() => {
    console.log("Microtask inside Macrotask");
  });

  console.log("Macrotask End");
}, 0);

/*
🧠 Output:
Macrotask Start
Macrotask End
Microtask inside Macrotask
*/

/*
========================================================
1️⃣1️⃣ Nested Queues Example
========================================================
*/

console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");

/*
🧠 Output:
A
E
D
B
C
*/

/*
========================================================
1️⃣2️⃣ Interview Traps
========================================================

❌ setTimeout(fn, 0) does NOT mean immediate
❌ Microtasks do NOT wait for next event loop
✔ All microtasks finish before next macrotask
✔ await internally uses microtask queue
*/

/*
========================================================
1️⃣3️⃣ Relation with async/await
========================================================
*/

async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
test();
console.log("4");

/*
🧠 Output:
3
1
4
2
*/

/*
========================================================
1️⃣4️⃣ Interview One-Liners
========================================================

✔ Microtasks have higher priority than Macrotasks
✔ Promises go to Microtask Queue
✔ Timers go to Macrotask Queue
✔ Event Loop clears microtasks first
✔ Async/await uses microtask queue
*/

/*
========================================================
🔥 END OF FILE: microtask_vs_macrotask.js
========================================================
*/
