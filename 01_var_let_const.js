/****************************************************
 * VAR vs LET vs CONST — JavaScript Interview Notes
 ****************************************************/

/*
====================================================
1️⃣ INTRODUCTION
====================================================

var   → ES5 (old JavaScript)
let   → ES6 (2015)
const → ES6 (2015)

Purpose:
To declare variables, but with different scoping
rules, hoisting behavior, and re-assignment rules.
*/

/*
====================================================
2️⃣ DECLARATION & INITIALIZATION
====================================================
*/

var a;        // declaration allowed
let b;        // declaration allowed
// const c;   // ❌ Error: const must be initialized

const c = 10; // ✅ initialization required

/*
====================================================
3️⃣ SCOPE
====================================================

var   → function scoped
let   → block scoped
const → block scoped
*/

function scopeExample() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }

  console.log(x); // ✅ 10 (function scoped)
  // console.log(y); // ❌ ReferenceError
  // console.log(z); // ❌ ReferenceError
}

/*
====================================================
4️⃣ HOISTING
====================================================

Hoisting means:
Variables are moved to the top of their scope
during compilation phase.
*/

// var is hoisted and initialized with undefined
console.log(p); // undefined
var p = 5;

// let & const are hoisted but NOT initialized
// console.log(q); // ❌ ReferenceError
let q = 10;

// console.log(r); // ❌ ReferenceError
const r = 20;

/*
====================================================
5️⃣ TEMPORAL DEAD ZONE (TDZ)
====================================================

TDZ:
The time between entering the scope and
actual variable declaration where accessing
the variable throws ReferenceError.
*/

{
  // TDZ starts here
  // console.log(name); // ❌ ReferenceError
  let name = "JavaScript";
  // TDZ ends here
}

/*
====================================================
6️⃣ RE-DECLARATION
====================================================
*/

var m = 1;
var m = 2; // ✅ allowed

let n = 1;
// let n = 2; // ❌ not allowed

const o = 1;
// const o = 2; // ❌ not allowed

/*
====================================================
7️⃣ RE-ASSIGNMENT
====================================================
*/

var v = 10;
v = 20; // ✅ allowed

let l = 30;
l = 40; // ✅ allowed

const k = 50;
// k = 60; // ❌ not allowed

/*
====================================================
8️⃣ CONST WITH OBJECTS & ARRAYS
====================================================

const does NOT mean immutable.
It means the reference cannot be changed.
*/

const user = {
  name: "Ashutosh",
  role: "Developer"
};

user.role = "Frontend Developer"; // ✅ allowed
// user = {}; // ❌ not allowed

const nums = [1, 2, 3];
nums.push(4); // ✅ allowed
// nums = []; // ❌ not allowed

/*
====================================================
9️⃣ GLOBAL OBJECT ATTACHMENT
====================================================
*/

var globalVar = "I am global";
// gets attached to window/global object

let globalLet = "I am not global";
// does NOT attach to window

/*
====================================================
🔟 INTERVIEW TRICKY QUESTION
====================================================
*/

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 1000);
}
// Output: var: 3, 3, 3

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 1000);
}
// Output: let: 0, 1, 2

/*
Reason:
let creates a new block-scoped variable
for each iteration.
*/

/*
====================================================
✅ SUMMARY (ONE-LINERS)
====================================================

var   → function scoped, hoisted with undefined
let   → block scoped, TDZ exists
const → block scoped, must be initialized, no re-assign
*/
