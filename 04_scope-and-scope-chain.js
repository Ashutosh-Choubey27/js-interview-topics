/************************************************************
 * JavaScript Scope & Scope Chain
 * Interview-Oriented Notes + Examples
 * Author: Ashutosh
 ************************************************************/

/*
============================================================
1️⃣ What is Scope?
============================================================

Scope decides:
👉 where a variable can be accessed
👉 where it is NOT accessible

JavaScript me mainly 3 types ke scope hote hain:
1) Global Scope
2) Function Scope
3) Block Scope
*/


/*
------------------------------------------------------------
2️⃣ Global Scope
------------------------------------------------------------
*/

let globalVar = "I am global";

function testGlobal() {
  console.log(globalVar); // accessible
}

testGlobal();
console.log(globalVar); // accessible everywhere

/*
👉 Interview line:
Global variables poore program me accessible hote hain
(but avoid them due to pollution issues)
*/


/*
------------------------------------------------------------
3️⃣ Function Scope
------------------------------------------------------------
*/

function testFunctionScope() {
  let functionVar = "I am inside function";
  console.log(functionVar); // accessible
}

testFunctionScope();
// console.log(functionVar); // ❌ ReferenceError

/*
👉 Interview line:
Variables declared with var / let / const
inside a function are NOT accessible outside
*/


/*
------------------------------------------------------------
4️⃣ Block Scope (let & const)
------------------------------------------------------------
*/

{
  let blockLet = "let inside block";
  const blockConst = "const inside block";
  var blockVar = "var inside block";
}

// console.log(blockLet);   // ❌ ReferenceError
// console.log(blockConst); // ❌ ReferenceError
console.log(blockVar);      // ✅ accessible

/*
👉 Interview GOLD:
var is NOT block scoped
let & const ARE block scoped
*/


/*
------------------------------------------------------------
5️⃣ var vs let vs const (Scope POV)
------------------------------------------------------------
*/

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // ✅ 10
// console.log(b); // ❌ ReferenceError
// console.log(c); // ❌ ReferenceError


/*
------------------------------------------------------------
6️⃣ Scope Chain (MOST IMPORTANT)
------------------------------------------------------------

Scope Chain = JavaScript ka mechanism
jisme variable ko:
1) current scope
2) outer scope
3) global scope
me search kiya jata hai
*/

let x = 10;

function outer() {
  let y = 20;

  function inner() {
    let z = 30;
    console.log(x); // from global
    console.log(y); // from outer
    console.log(z); // from inner
  }

  inner();
}

outer();

/*
👉 Interview line:
JavaScript uses lexical scoping
(variable access depends on code structure, not call location)
*/


/*
------------------------------------------------------------
7️⃣ Scope Chain Failure Example
------------------------------------------------------------
*/

function parent() {
  let p = "parent";

  function child() {
    console.log(p); // accessible
  }

  child();
}

parent();

/*
But reverse is NOT true
*/

function parent2() {
  function child2() {
    let c = "child";
  }
  // console.log(c); // ❌ ReferenceError
}

parent2();


/*
------------------------------------------------------------
8️⃣ Shadowing (Interview Favorite)
------------------------------------------------------------
*/

let value = 100;

function shadowTest() {
  let value = 50; // shadows global value
  console.log(value); // 50
}

shadowTest();
console.log(value); // 100

/*
👉 Interview line:
Inner scope variable outer variable ko shadow kar sakta hai
*/


/*
------------------------------------------------------------
9️⃣ Illegal Shadowing
------------------------------------------------------------
*/

let num = 10;

{
  // let num = 20; // ✅ allowed
  // var num = 20; // ❌ SyntaxError (illegal shadowing)
}

/*
👉 Rule:
let/const ko var se shadow karna illegal hai
*/


/*
------------------------------------------------------------
🔟 Tricky Interview Questions (🔥)
------------------------------------------------------------
*/

// Q1
console.log(a1);
var a1 = 10;
// Output: undefined
// Reason: var is function scoped & hoisted

// Q2
// console.log(b1);
let b1 = 20;
// Output: ReferenceError (TDZ)

// Q3
let count = 5;
function test() {
  console.log(count);
}
test(); // 5 (scope chain)


/*
============================================================
🔥 Scope & Scope Chain – Interview Questions
============================================================
*/

// Q1️⃣ Global vs Local Scope
let x1 = 10;

function foo1() {
  let x1 = 20;
  console.log(x1);
}

foo1();          // 20
console.log(x1); // 10
// Explanation: Local scope variable shadows global one


// Q2️⃣ Scope Chain Lookup
let a2 = 5;

function outer2() {
  let b2 = 10;

  function inner2() {
    console.log(a2 + b2);
  }

  inner2();
}

outer2(); // 15
// Explanation: inner → outer → global (scope chain)


// Q3️⃣ Function Scope (var)
function test3() {
  if (true) {
    var x3 = 100;
  }
  console.log(x3);
}

test3(); // 100
// Explanation: var is function scoped


// Q4️⃣ Block Scope (let)
function test4() {
  if (true) {
    let x4 = 50;
  }
  // console.log(x4); // ReferenceError
}

test4();
// Explanation: let is block scoped


// Q5️⃣ Shadowing
let value5 = "global";

function test5() {
  let value5 = "local";
  console.log(value5);
}

test5();           // "local"
console.log(value5); // "global"
// Explanation: Inner variable shadows outer variable


// Q6️⃣ Illegal Shadowing
let a6 = 10;

{
  // var a6 = 20; // ❌ SyntaxError
}
// Explanation: let/const cannot be shadowed by var


// Q7️⃣ Lexical Scope
function outer7() {
  let x7 = 99;

  function inner7() {
    console.log(x7);
  }

  return inner7;
}

const fn7 = outer7();
fn7(); // 99
// Explanation: Function remembers lexical environment


// Q8️⃣ Scope Chain Failure
function parent8() {
  function child8() {
    let secret = "hidden";
  }
  // console.log(secret); // ReferenceError
}

parent8();
// Explanation: Parent cannot access child's scope


// Q9️⃣ Global Variable Leak
function test9() {
  leakedVar = 100; // ❗ no let/var/const
}

test9();
console.log(leakedVar); // 100
// Explanation: Becomes global (bad practice)


// Q🔟 Block Scope in Loops
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 0 1 2
// Explanation: let creates new block scope for each iteration


/*
------------------------------------------------------------
🎯 Final Interview Summary
------------------------------------------------------------

✔ Scope decides variable accessibility
✔ JS has global, function, and block scope
✔ let & const are block scoped
✔ var is function scoped
✔ Scope chain searches variables outward
✔ JavaScript follows lexical scoping
✔ Shadowing is allowed (except illegal cases)
*/

console.log("✅ Scope & Scope Chain - Completed");
