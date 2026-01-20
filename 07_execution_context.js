
/************************************************************
 * JavaScript Execution Context
 * Interview-Oriented Notes + Examples
 * Author: Ashutosh Choubey
 ************************************************************/

/*
============================================================
1️⃣ What is Execution Context?
============================================================

Execution Context = Environment where JS code runs

It decides:
✔ which variables are accessible
✔ which functions are available
✔ what is the value of `this`
*/


/*
============================================================
2️⃣ Global Execution Context (GEC)
============================================================

When JS program starts:
👉 Global Execution Context is created first

GEC has:
1️⃣ Global Object (window in browser)
2️⃣ this keyword (points to window)
3️⃣ Memory creation phase
4️⃣ Execution phase
*/

var a = 10;
function greet() {
  console.log("Hello");
}

console.log(a);
greet();


/*
============================================================
3️⃣ Two Phases of Execution Context
============================================================

Every Execution Context has 2 phases:

PHASE 1: Memory Creation Phase
--------------------------------
✔ variables allocated memory
✔ var initialized as undefined
✔ let/const kept in TDZ
✔ function declarations stored fully

PHASE 2: Execution Phase
--------------------------------
✔ code executed line by line
✔ values assigned
*/


/*
============================================================
4️⃣ Memory Creation Example
============================================================
*/

console.log(x); // undefined
var x = 100;

/*
Memory Phase:
x → undefined

Execution Phase:
x = 100
*/


/*
============================================================
5️⃣ Function Execution Context (FEC)
============================================================
*/

function outer() {
  var y = 20;

  function inner() {
    var z = 30;
    console.log(y + z);
  }

  inner();
}

outer();

/*
👉 When outer() is called:
- New Function Execution Context is created
- It has its own memory & execution phase
*/


/*
============================================================
6️⃣ Execution Context Stack (Call Stack)
============================================================
*/

function first() {
  console.log("First");
  second();
}

function second() {
  console.log("Second");
}

first();

/*
Call Stack Flow:
1️⃣ Global EC
2️⃣ first() EC
3️⃣ second() EC
(second pops)
(first pops)
(Global remains)
*/


/*
============================================================
7️⃣ Execution Context & Scope Chain
============================================================
*/

let globalVar = "global";

function parent() {
  let parentVar = "parent";

  function child() {
    let childVar = "child";
    console.log(globalVar);
    console.log(parentVar);
    console.log(childVar);
  }

  child();
}

parent();

/*
👉 Scope Chain is created using Lexical Environment
*/


/*
============================================================
8️⃣ Lexical Environment (IMPORTANT)
============================================================

Lexical Environment consists of:
1️⃣ Environment Record (variables & functions)
2️⃣ Reference to outer environment

Lexical means:
"where the code is written"
*/


/*
============================================================
9️⃣ Tricky Interview Questions (🔥)
============================================================
*/

// Q1
console.log(foo);
var foo = 10;
// Output: undefined

// Q2
// console.log(bar);
let bar = 20;
// Output: ReferenceError (TDZ)

// Q3
function test() {
  console.log(a);
  var a = 5;
}
test();
// Output: undefined


/*
============================================================
🔟 Execution Context Flow (FULL SUMMARY)
============================================================

Program starts
↓
Global Execution Context created
↓
Memory Phase
↓
Execution Phase
↓
Function call → new Execution Context
↓
Added to Call Stack
↓
Executed & removed
*/


/*
============================================================
🎯 Perfect Interview Answer
============================================================

"Execution Context is the environment where JavaScript code
is executed. It consists of memory creation and execution
phases, and JavaScript uses a call stack to manage multiple
execution contexts."
*/






/*
   🔥 5 Killer Interview One-Liners

1. Execution Context ≠ Scope (but related)

2. Every function call creates a new Execution Context

3. Each EC has memory & execution phase

4. JS uses Call Stack to manage ECs

5. Lexical Environment builds scope chain


                👀👀 IMPORTANT THING TO KEEP IN MIND

"JavaScript first creates a Global Execution Context for the entire code,
 then generates a separate execution context for each function call,
 and manages them through the call stack."
*/

console.log("✅ Execution Context - Completed");
