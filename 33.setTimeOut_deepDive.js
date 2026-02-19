
/* 
========================================
setTimeout Internals — Master File
Prepared for: Ashutosh
========================================
*/

/*
🧠 CORE IDEA

setTimeout JavaScript ka part nahi hai.
Ye browser / Node ka Web API hai.

Flow:
Call Stack → Web API → Callback Queue → Event Loop → Call Stack

IMPORTANT:
setTimeout delay exact nahi hota.
It means: "run AFTER at least this much delay"
*/


// ===============================
// 1️⃣ BASIC EXECUTION ORDER
// ===============================

console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("end");

/*
Expected:
start
end
timeout

Reason:
setTimeout → macrotask queue
stack empty hone ka wait karega
*/


// ===============================
// 2️⃣ PROMISE VS TIMEOUT PRIORITY
// ===============================

setTimeout(() => console.log("timeout 2"), 0);

Promise.resolve().then(() => console.log("promise 2"));

/*
Expected:
promise 2
timeout 2

Reason:
microtask queue > macrotask queue
*/


// ===============================
// 3️⃣ BLOCKING THE EVENT LOOP
// ===============================

setTimeout(() => console.log("after block"), 1000);

const start = Date.now();
while (Date.now() - start < 3000) {}

console.log("blocking done");

/*
Expected:
blocking done
after block

Even though delay = 1s
callback ran after 3s

Why?
Call stack busy
*/


// ===============================
// 4️⃣ LOOP TRAP (VAR VS LET)
// ===============================

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 1000);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 1000);
}

/*
Expected:
var: 3
var: 3
var: 3

let: 0
let: 1
let: 2
*/


// ===============================
// 5️⃣ MINIMUM DELAY RULE
// ===============================

setTimeout(() => console.log("A"), 0);
setTimeout(() => console.log("B"), 0);

/*
Even 0ms delay = queued
Instant nahi hota
*/


// ===============================
// 6️⃣ NESTED TIMEOUT LOOP
// ===============================

function recursiveTimer() {
  setTimeout(() => {
    console.log("tick");
    recursiveTimer();
  }, 1000);
}

// recursiveTimer();

/*
Better than setInterval
No overlap
*/


// ===============================
// 7️⃣ CLEAR TIMEOUT
// ===============================

const id = setTimeout(() => {
  console.log("should not run");
}, 2000);

clearTimeout(id);


// ===============================
// 8️⃣ EXECUTION ORDER TEST
// ===============================

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

/*
Expected:
1
4
3
2
*/


// ===============================
// 9️⃣ INTERVIEW LEVEL OUTPUT
// ===============================

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => {
  console.log("C");
  setTimeout(() => console.log("D"), 0);
});

console.log("E");

/*
Predict:
A
E
C
B
D
*/


// ===============================
// 🔟 setInterval vs setTimeout
// ===============================

setInterval(() => {
  console.log("interval tick");
}, 1000);

/*
Problem:
If callback heavy → overlap

Better:
recursive setTimeout
*/


// ===============================
// 1️⃣1️⃣ FAKE TIMEOUT CONCEPT
// ===============================

function fakeTimeout(cb, delay) {
  const start = Date.now();

  function check() {
    if (Date.now() - start >= delay) {
      cb();
    } else {
      requestAnimationFrame(check);
    }
  }

  check();
}

// fakeTimeout(() => console.log("fake timeout done"), 2000);


// ===============================
// 🧠 INTERVIEW QUESTIONS
// ===============================

/*
Q1: setTimeout 0 still async why?
Q2: microtask vs macrotask?
Q3: event loop steps?
Q4: blocking example?
Q5: setInterval vs recursive setTimeout?
*/


// ===============================
// 🧠 REVISION NOTES
// ===============================

/*
✔ setTimeout = Web API
✔ goes to macrotask queue
✔ Promise = microtask queue
✔ microtask runs first
✔ delay not exact
✔ call stack must be empty
*/