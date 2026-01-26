
/************************************************************
 * CURRYING IN JAVASCRIPT
 * Theory + Examples + Interview Traps
 * Author: Ashutosh Choubey
 ************************************************************/

/*
============================================================
1️⃣ Simple Function (Non-curried)
============================================================
*/

function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6


// ----------------------------------------------------------

/*
============================================================
2️⃣ Curried Version
============================================================
*/

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3)); // 6

/*
Each function remembers its argument
via closure
*/


// ----------------------------------------------------------

/*
============================================================
3️⃣ Curried using Arrow Functions (Clean 🔥)
============================================================
*/

const addArrow = a => b => c => a + b + c;

console.log(addArrow(1)(2)(3)); // 6


// ----------------------------------------------------------

/*
============================================================
4️⃣ Partial Application (REAL USE)
============================================================
*/

const multiply = a => b => a * b;

const double = multiply(2);
const triple = multiply(3);

console.log(double(10)); // 20
console.log(triple(10)); // 30

/*
double & triple are reusable functions
*/


// ----------------------------------------------------------

/*
============================================================
5️⃣ Currying in Real Life Example
============================================================
*/

const log = level => message => {
  console.log(`[${level}] ${message}`);
};

const errorLog = log("ERROR");
const infoLog = log("INFO");

errorLog("Something broke!");
infoLog("Server started");

/*
Used in logging libraries
*/


// ----------------------------------------------------------

/*
============================================================
6️⃣ Currying with Closures (Connection)
============================================================
*/

function power(base) {
  return function (exp) {
    return base ** exp;
  };
}

const square = power(2);
const cube = power(3);

console.log(square(5)); // 32
console.log(cube(2));   // 9


// ----------------------------------------------------------

/*
============================================================
7️⃣ Infinite Currying (INTERVIEW FAVORITE 🔥)
============================================================
*/

function sum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}

console.log(sum(1)(2)(3)(4)()); // 10


// ----------------------------------------------------------

/*
============================================================
8️⃣ Currying Utility Function
============================================================
*/

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

function add3(a, b, c) {
  return a + b + c;
}

const curriedAdd3 = curry(add3);

console.log(curriedAdd3(1)(2)(3));
console.log(curriedAdd3(1, 2)(3));


/*
============================================================
🎯 Perfect Interview Answer
============================================================

"Currying is a functional programming technique
where a function with multiple arguments is
transformed into a sequence of functions, each
taking a single argument. It leverages closures
and enables partial application."


🔥 Currying vs Normal Function (Interview Table)

| Normal Function  | Curried Function |
| ---------------- | ---------------- |
| add(a,b,c)       | add(a)(b)(c)     |
| All args at once | One by one       |
| Less reusable    | Highly reusable  |
| Imperative style | Functional style |


🧠 Currying vs Partial Application (IMPORTANT)

#  Currying

  👉  breaks function into single-arg functions

#  Partial Application

  👉  fixes some arguments, returns new function

  👉 Currying enables partial application 💡

*/

console.log("✅ Currying MASTERED");
