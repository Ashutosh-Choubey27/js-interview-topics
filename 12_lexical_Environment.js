
/************************************************************
 * Lexical Environment in JavaScript
 * Root Concept of Scope, Closure & Hoisting
 * Author: Ashutosh
 ************************************************************/

/*
============================================================
1️⃣ Global Lexical Environment
============================================================
*/

let globalVar = "I am global";

function globalFn() {
  console.log(globalVar);
}

/*
Global Lexical Environment:
Environment Record:
  globalVar -> "I am global"
  globalFn  -> function

Outer Reference -> null
*/


// ----------------------------------------------------------

/*
============================================================
2️⃣ Function Lexical Environment
============================================================
*/

function outer() {
  let outerVar = "outer";

  function inner() {
    console.log(outerVar);
  }

  inner();
}

outer();

/*
Lexical Environment of inner():
Environment Record:
  (empty)

Outer Reference -> Lexical Env of outer()
*/


// ----------------------------------------------------------

/*
============================================================
3️⃣ Lexical Scope (IMPORTANT)
============================================================
*/

let a = 10;

function foo() {
  let b = 20;

  function bar() {
    let c = 30;
    console.log(a, b, c);
  }

  bar();
}

foo();

/*
bar() looks for:
c -> own env
b -> outer env
a -> global env
THIS is Scope Chain
*/


// ----------------------------------------------------------

/*
============================================================
4️⃣ Lexical Environment decides Closure
============================================================
*/

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const inc = counter();
inc(); // 1
inc(); // 2

/*
Even after counter() ends,
its Lexical Environment is preserved
*/


// ----------------------------------------------------------

/*
============================================================
5️⃣ Lexical Environment in Arrow Function
============================================================
*/

const obj = {
  name: "Ashutosh",
  greet: function () {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj.greet(); // Ashutosh

/*
Arrow function does NOT create its own
this binding.
It takes this from lexical environment.
*/


// ----------------------------------------------------------

/*
============================================================
6️⃣ Lexical Environment & Hoisting
============================================================
*/

console.log(x); // undefined
var x = 10;

/*
During creation phase:
x -> undefined
Stored in Lexical Environment
*/


// ----------------------------------------------------------

/*
============================================================
7️⃣ Block Lexical Environment (let & const)
============================================================
*/

{
  let blockVar = "block scoped";
  console.log(blockVar);
}

// console.log(blockVar); ❌ ReferenceError

/*
Each block creates its own Lexical Environment
*/


// ----------------------------------------------------------

/*
============================================================
8️⃣ Temporal Dead Zone (TDZ)
============================================================
*/

{
  // console.log(y); ❌ TDZ
  let y = 20;
}

/*
y exists in lexical environment
but not initialized until declaration
*/


// ----------------------------------------------------------

/*
============================================================
🎯 PERFECT INTERVIEW ANSWER
============================================================

"A lexical environment is an internal JavaScript
structure that holds variable bindings and a
reference to its outer environment. It is created
based on the lexical structure of the code and is
fundamental to scope, closures, and hoisting."
*/

console.log("✅ Lexical Environment MASTERED");
