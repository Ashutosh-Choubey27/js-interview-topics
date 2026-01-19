
/************************************************************
 * JavaScript Temporal Dead Zone (TDZ)
 * Interview-Oriented Notes + Examples
 * Author: Ashutosh Choubey
 ************************************************************/

/*
============================================================
1️⃣ What is Temporal Dead Zone?
============================================================

TDZ = Time between:
👉 variable hoisting
👉 and its initialization

During TDZ:
❌ variable exists
❌ but access is NOT allowed
*/


/*
------------------------------------------------------------
2️⃣ TDZ with let
------------------------------------------------------------
*/

// console.log(a); // ❌ ReferenceError
let a = 10;
console.log(a); // 10

/*
Behind the scenes:

Memory phase:
a → hoisted (uninitialized, TDZ)

Execution phase:
a = 10 (TDZ ends)
*/


/*
------------------------------------------------------------
3️⃣ TDZ with const
------------------------------------------------------------
*/

// console.log(b); // ❌ ReferenceError
const b = 20;
console.log(b); // 20

/*
👉 const MUST be initialized at declaration
Otherwise TDZ never ends
*/


/*
------------------------------------------------------------
4️⃣ TDZ vs var
------------------------------------------------------------
*/

console.log(c); // undefined
var c = 30;

/*
👉 var has NO TDZ
It is hoisted and initialized with undefined
*/


/*
------------------------------------------------------------
5️⃣ TDZ inside Block Scope
------------------------------------------------------------
*/

{
  // console.log(x); // ❌ ReferenceError (TDZ)
  let x = 100;
  console.log(x); // 100
}

/*
👉 TDZ applies inside block scope too
*/


/*
------------------------------------------------------------
6️⃣ TDZ with Function Parameters
------------------------------------------------------------
*/

function testTDZ(a = b, b = 10) {
  // console.log(a);
}

testTDZ(); 
// ❌ ReferenceError: Cannot access 'b' before initialization

/*
👉 Default parameters also follow TDZ rules
*/


/*
------------------------------------------------------------
7️⃣ TDZ with Arrow Functions
------------------------------------------------------------
*/

// greet(); // ❌ ReferenceError
const greet = () => {
  console.log("Hello");
};

/*
👉 Arrow function itself is not hoisted,
and const variable is in TDZ
*/


/*
------------------------------------------------------------
8️⃣ TDZ in for-loops
------------------------------------------------------------
*/

for (let i = 0; i < 3; i++) {
  // console.log(i); // each iteration has its own TDZ
  console.log(i);
}

/*
👉 let creates a new block scope per iteration
*/


/*
------------------------------------------------------------
9️⃣ Interview Traps (🔥)
------------------------------------------------------------
*/

// Q1
{
  // console.log(p); // ❌ ReferenceError
  let p = 5;
}

// Q2
// console.log(q);
const q = 10;

// Q3
// typeof r; // ❌ ReferenceError
let r = 20;

/*
👉 typeof also throws error in TDZ (important!)
*/


/*
------------------------------------------------------------
🔟 Why TDZ exists? (INTERVIEW WHY QUESTION)
------------------------------------------------------------

TDZ exists to:
✔ prevent accessing variables before declaration
✔ avoid bugs caused by undefined values
✔ encourage predictable & safer code
*/


/*
------------------------------------------------------------
🎯 Final Interview Summary
------------------------------------------------------------

✔ let & const ARE hoisted
✔ They stay in Temporal Dead Zone
✔ TDZ lasts till initialization
✔ var does NOT have TDZ
✔ Accessing TDZ variable throws ReferenceError
*/


/*
------------------------------------------------------------
🎤 Perfect Interview Answer
------------------------------------------------------------

"Temporal Dead Zone is the phase where let and const variables
are hoisted but not initialized, and accessing them before
declaration results in ReferenceError."
*/


/*

  🔥 5 Killer Interview One-Liners (Yaad rakh)

   1. TDZ is about access, not existence

   2. let/const are hoisted but uninitialized

   3. var has no TDZ

   4. TDZ applies to block scope & parameters

   5. TDZ prevents unsafe access

   Very Imp Quesstion : “Why typeof throws error with let?”

   Answer : “Because typeof also tries to access the variable, and in TDZ any access is forbidden.”
*/

console.log("✅ Temporal Dead Zone - Completed");
