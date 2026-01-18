
/************************************************************
 * JavaScript Hoisting
 * Interview-Oriented Notes + Examples
 * Author: Ashutosh Choubey
 ************************************************************/

/*
============================================================
1️⃣ What is Hoisting?
============================================================

Hoisting means:
👉 Variable & function declarations are moved to the top
👉 Memory is allocated before code execution

NOTE:
Only DECLARATIONS are hoisted, not INITIALIZATIONS
*/


/*
------------------------------------------------------------
2️⃣ Hoisting with var
------------------------------------------------------------
*/

console.log(a); // undefined
var a = 10;
console.log(a); // 10

/*
Behind the scenes (JS engine):

var a;           // hoisted
console.log(a);  // undefined
a = 10;
console.log(a);
*/

/*
👉 Interview line:
var is hoisted and initialized with undefined
*/


/*
------------------------------------------------------------
3️⃣ Hoisting with let & const
------------------------------------------------------------
*/

// console.log(b); // ❌ ReferenceError
let b = 20;

// console.log(c); // ❌ ReferenceError
const c = 30;

/*
👉 Important:
let & const ARE hoisted
BUT they are kept in Temporal Dead Zone (TDZ)

TDZ = time between hoisting and initialization
*/

/*
Interview GOLD line:
"let and const are hoisted but not accessible before initialization"
*/


/*
------------------------------------------------------------
4️⃣ Temporal Dead Zone (TDZ)
------------------------------------------------------------
*/

{
  // console.log(x); // ❌ ReferenceError (TDZ)
  let x = 100;
  console.log(x); // 100
}

/*
👉 TDZ exists to avoid bugs and enforce safer coding
*/


/*
------------------------------------------------------------
5️⃣ Function Hoisting
------------------------------------------------------------
*/

// Function Declaration
sayHello(); // ✅ works

function sayHello() {
  console.log("Hello!");
}

/*
👉 Interview line:
Function declarations are fully hoisted
*/


/*
------------------------------------------------------------
6️⃣ Function Expression Hoisting
------------------------------------------------------------
*/

// sayHi(); // ❌ TypeError
var sayHi = function () {
  console.log("Hi");
};

/*
Behind the scenes:

var sayHi;      // hoisted (undefined)
// sayHi();     // ❌ cannot call undefined
sayHi = function() { ... }
*/

/*
👉 Interview line:
Function expressions follow variable hoisting rules
*/


/*
------------------------------------------------------------
7️⃣ Arrow Function Hoisting
------------------------------------------------------------
*/

// greet(); // ❌ TypeError
var greet = () => {
  console.log("Hey");
};

/*
Arrow functions are NOT hoisted like function declarations
*/


/*
------------------------------------------------------------
8️⃣ Hoisting Priority (VERY IMPORTANT)
------------------------------------------------------------
*/

console.log(test); // function test() {}
function test() {}
var test = 10;

/*
Priority order:
1️⃣ Function declarations
2️⃣ var declarations
*/


/*
------------------------------------------------------------
9️⃣ Hoisting Inside Functions
------------------------------------------------------------
*/

function demo() {
  console.log(x); // undefined
  var x = 50;
}

demo();

/*
👉 var is hoisted to the top of its FUNCTION scope
*/


/*
------------------------------------------------------------
🔟 Tricky Interview Questions (🔥)
------------------------------------------------------------
*/

// Q1
console.log(foo);
var foo = "hello";
// Output: undefined

// Q2
// console.log(bar);
let bar = "world";
// Output: ReferenceError

// Q3
hoistedFunc();
function hoistedFunc() {
  console.log("I am hoisted");
}

// Q4
// notHoisted(); 
var notHoisted = function () {
  console.log("Not hoisted");
};
// Output: TypeError

// Q5
console.log(typeof testFunc);
function testFunc() {}
var testFunc;
// Output: function


/*
------------------------------------------------------------
🎯 Final Interview Summary
------------------------------------------------------------

✔ Hoisting is memory allocation before execution
✔ var is hoisted & initialized with undefined
✔ let & const are hoisted but in TDZ
✔ Function declarations are fully hoisted
✔ Function expressions are NOT hoisted
✔ TDZ prevents unsafe access
*/


/*
------------------------------------------------------------
🎤 Perfect Interview Answer
------------------------------------------------------------

"Hoisting is JavaScript's behavior where variable and function
declarations are allocated memory before code execution.
var is initialized with undefined, while let and const stay
in Temporal Dead Zone until initialization."
*/

console.log("✅ Hoisting - Completed");
