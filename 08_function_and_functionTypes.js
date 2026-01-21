
/************************************************************
 * JavaScript Functions & Function Types
 * Interview-Oriented Notes + Examples
 * Author: Ashutosh Choubey
 ************************************************************/

/*
============================================================
1️⃣ What is a Function?
============================================================

Function is a reusable block of code.
✔ It executes when called
✔ It creates its own Execution Context
✔ It supports parameters & return values
*/

function greet() {
  console.log("Hello World");
}

greet();


/*
============================================================
2️⃣ Function Declaration
============================================================
*/

sayHello(); // ✅ works (hoisted)

function sayHello() {
  console.log("Hello from function declaration");
}

/*
✔ Fully hoisted
✔ Has its own name
✔ Creates execution context
✔ Preferred when function needs to be used before definition
*/


/*
============================================================
3️⃣ Function Expression
============================================================
*/

const sayHi = function () {
  console.log("Hello from function expression");
};

sayHi();

/*
✔ Stored in variable
✔ Variable hoisting rules apply
✔ Function body NOT hoisted
*/


/*
============================================================
4️⃣ Named Function Expression
============================================================
*/

const factorial = function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5)); // 120
// console.log(fact); ❌ ReferenceError

/*
👉 Name is accessible ONLY inside function
👉 Useful for recursion & debugging
*/


/*
============================================================
5️⃣ Arrow Function (ES6)
============================================================
*/

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

/*
Arrow Functions:
✔ Short syntax
✔ No own `this`
✔ No arguments object
✔ NOT hoisted like function declaration
*/


/*
============================================================
6️⃣ Arrow vs Normal Function (VERY IMPORTANT)
============================================================
*/

const obj = {
  name: "Ashutosh",
  normalFn: function () {
    console.log(this.name);
  },
  arrowFn: () => {
    console.log(this.name);
  }
};

obj.normalFn(); // "Ashutosh"
obj.arrowFn();  // undefined (or window.name)

/*
👉 Arrow function takes `this` from lexical scope
*/


/*
============================================================
7️⃣ Parameters vs Arguments
============================================================
*/

function multiply(a, b) { // parameters
  return a * b;
}

multiply(2, 3); // arguments


/*
============================================================
8️⃣ Default Parameters
============================================================
*/

function greetUser(name = "Guest") {
  console.log(`Hello ${name}`);
}

greetUser();
greetUser("Ashutosh");


/*
============================================================
9️⃣ Rest Parameters
============================================================
*/

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


/*
============================================================
🔟 Callback Function
============================================================
*/

function processData(callback) {
  callback();
}

processData(function () {
  console.log("Callback executed");
});

/*
👉 Function passed as argument = Callback
*/


/*
============================================================
1️⃣1️⃣ Higher Order Function (HOF)
============================================================
*/

function higherOrder(fn) {
  fn();
}

higherOrder(() => console.log("I am HOF"));

/*
👉 Function that accepts or returns function
*/


/*
============================================================
1️⃣2️⃣ IIFE (Immediately Invoked Function Expression)
============================================================
*/

(function () {
  console.log("IIFE executed");
})();

/*
✔ Executes immediately
✔ Avoids global pollution
*/


/*
============================================================
1️⃣3️⃣ Pure vs Impure Function
============================================================
*/

function pureAdd(a, b) {
  return a + b;
}

let count = 0;
function impureAdd(a) {
  count += a;
}

console.log(pureAdd(2, 3)); // predictable
impureAdd(2);               // modifies external state


/*
============================================================
1️⃣4️⃣ Interview Traps (🔥)
============================================================
*/

// Q1
console.log(typeof function () {}); // function

// Q2
function test() {
  console.log(arguments);
}
test(1, 2, 3);

// Q3
const arrow = () => {
  // console.log(arguments); ❌ ReferenceError
};

// Q4
console.log(foo); 
var foo = function () {};
// undefined

// Q5
bar(); 
function bar() {}
// works


/*
============================================================
🎯 Final Interview Summary
============================================================

✔ Function declaration → fully hoisted
✔ Function expression → variable hoisting
✔ Arrow function → lexical this
✔ Callback → function as argument
✔ HOF → function returns/accepts function
✔ IIFE → immediate execution
*/


/*
============================================================
🎤 Perfect Interview Answer
============================================================

"Functions in JavaScript are first-class citizens.
They can be assigned to variables, passed as arguments,
returned from other functions, and create their own
execution contexts."


🔥 7 Killer Interview One-Liners (MEMORIZE)

1️⃣ Functions are first-class citizens
2️⃣ Function declaration is fully hoisted
3️⃣ Function expression follows variable hoisting
4️⃣ Arrow functions don’t have their own this
5️⃣ Callbacks enable async behavior
6️⃣ HOF works on other functions
7️⃣ IIFE avoids global scope pollution

🧠 Confidence Booster
  
Question : “Why arrow function is dangerous sometimes?”
Answer   : “Because it does not have its own this, which can break object methods.”

*/

console.log("✅ Functions & Function Types - Completed");
