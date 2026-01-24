
/************************************************************
 * CLOSURES IN JAVASCRIPT - FINAL BOSS GUIDE
 * Theory + Examples + Interview Traps
 * Author: Ashutosh Choubey
 ************************************************************/

/*
============================================================
1️⃣ Basic Closure Example
============================================================
*/

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

/*
🔥 IMPORTANT:
outer() execution is finished
BUT inner() still remembers `count`

THIS IS CLOSURE
*/


// ----------------------------------------------------------

/*
============================================================
2️⃣ Why outer variable is not destroyed?
============================================================

Because inner function still references it.
JavaScript keeps it alive in memory.
*/


// ----------------------------------------------------------

/*
============================================================
3️⃣ Closure with Data Privacy (VERY IMPORTANT)
============================================================
*/

function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Balance: ${balance}`);
    },
    withdraw(amount) {
      balance -= amount;
      console.log(`Balance: ${balance}`);
    }
  };
}

const account = bankAccount(1000);

account.deposit(500);   // 1500
account.withdraw(300);  // 1200
// console.log(balance); ❌ ReferenceError

/*
👉 balance is PRIVATE
👉 Accessible only via closures
*/


// ----------------------------------------------------------

/*
============================================================
4️⃣ Closure in setTimeout (INTERVIEW FAVORITE 🔥)
============================================================
*/

function timer() {
  let msg = "Hello Closure";

  setTimeout(function () {
    console.log(msg);
  }, 1000);
}

timer();

/*
Even after timer() finishes,
callback remembers msg
*/


// ----------------------------------------------------------

/*
============================================================
5️⃣ Closure in Loops (CLASSIC TRAP 🔥🔥)
============================================================
*/

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// Output: 4 4 4

/*
Reason:
var is function-scoped
One shared memory location
*/


// ----------------------------------------------------------

/*
============================================================
6️⃣ Fix using let (BLOCK SCOPED)
============================================================
*/

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// Output: 1 2 3

/*
let creates new binding for each iteration
*/


// ----------------------------------------------------------

/*
============================================================
7️⃣ Fix using Closure (INTERVIEW GOLD)
============================================================
*/

for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  })(i);
}

// Output: 1 2 3


// ----------------------------------------------------------

/*
============================================================
8️⃣ Closure with Function Factory
============================================================
*/

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/*
Each returned function has its own closure
*/


// ----------------------------------------------------------

/*
============================================================
9️⃣ Closure with Event Handlers (REAL LIFE)
============================================================
*/

// function attachHandler() {
//   let count = 0;
//   button.addEventListener("click", function () {
//     count++;
//     console.log(count);
//   });
// }

/*
Used to maintain state across events
*/


// ----------------------------------------------------------

/*
============================================================
🔟 Interview Traps 🔥
============================================================
*/

// Q1
function outerFn() {
  let a = 10;
  return function innerFn() {
    console.log(a);
  };
}

const fn = outerFn();
fn(); // 10


// Q2
function test() {
  let x = 5;
  return () => x++;
}

const t = test();
console.log(t()); // 5
console.log(t()); // 6


// ----------------------------------------------------------

/*
============================================================
🎯 Memory Insight (ADVANCED)
============================================================

Closures can cause memory leaks
if references are not released.

Always clean unused closures.
*/


// ----------------------------------------------------------

/*
============================================================
🎤 PERFECT INTERVIEW ANSWER
============================================================

"A closure is created when a function retains access
to its lexical scope even after the outer function
has finished execution. Closures are used for data
privacy, state management, callbacks, and function
factories."


🔥 REAL-LIFE USE CASES (INTERVIEW MUST)

1️⃣ Data Hiding / Encapsulation
2️⃣ Counters & State Management
3️⃣ Event Handlers
4️⃣ setTimeout / setInterval
5️⃣ Currying & Function Factories
6️⃣ React Hooks (useState internally) 😎

*/

console.log("✅ Closures MASTERED - FINAL");
