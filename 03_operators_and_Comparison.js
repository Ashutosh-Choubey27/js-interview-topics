/************************************************************
 * JavaScript Operators & Comparisons
 * Interview-Oriented Notes + Examples
 * Author: Ashutosh Choubey
 ************************************************************/

/*
============================================================
1️⃣ Operators in JavaScript
============================================================
Operators are symbols used to perform operations on values.
*/


/*
------------------------------------------------------------
2️⃣ Arithmetic Operators
------------------------------------------------------------
*/

console.log(10 + 5);  // 15
console.log(10 - 5);  // 5
console.log(10 * 5);  // 50
console.log(10 / 5);  // 2
console.log(10 % 3);  // 1 (remainder)
console.log(2 ** 3);  // 8 (exponentiation)

/*
👉 Interview Tip:
% operator is often used in even/odd checks
*/

console.log(10 % 2 === 0); // true (even)


/*
------------------------------------------------------------
3️⃣ Assignment Operators
------------------------------------------------------------
*/

let x = 10;
x += 5;   // x = x + 5
x -= 3;   // x = x - 3
x *= 2;   // x = x * 2
x /= 4;   // x = x / 4

console.log(x);


/*
------------------------------------------------------------
4️⃣ Comparison Operators
------------------------------------------------------------
*/

console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(5 <= 4);   // false

/*
👉 Comparison operators ALWAYS return boolean
*/


/*
------------------------------------------------------------
5️⃣ Equality Operators (VERY IMPORTANT)
------------------------------------------------------------
*/

console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (strict check)

console.log(null == undefined);   // true
console.log(null === undefined);  // false

/*
👉 Interview Rule:
Always prefer === over ==
*/


/*
------------------------------------------------------------
6️⃣ Logical Operators
------------------------------------------------------------
*/

console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)

/*
Short-circuit behavior
*/

console.log(false && "Ashutosh"); // false
console.log(true && "Ashutosh");  // "Ashutosh"

console.log(null || "Default");   // "Default"


/*
------------------------------------------------------------
7️⃣ Unary Operators
------------------------------------------------------------
*/

console.log(typeof 10);     // number
console.log(typeof "hi");   // string

console.log(+true);   // 1
console.log(+false);  // 0
console.log(+null);   // 0
console.log(+"10");   // 10

/*
Unary plus converts value into Number
*/


/*
------------------------------------------------------------
8️⃣ Increment / Decrement (INTERVIEW FAVORITE)
------------------------------------------------------------
*/

let a = 5;

console.log(a++); // 5 (post-increment)
console.log(a);   // 6

let b = 5;
console.log(++b); // 6 (pre-increment)
console.log(b);   // 6

/*
👉 Difference:
post (++ after) → value use first, then increment
pre (++ before) → increment first, then use
*/


/*
------------------------------------------------------------
9️⃣ Tricky Comparison Questions (🔥)
------------------------------------------------------------
*/

// Q1
console.log("2" > 1); // true
// "2" → 2

// Q2
console.log("02" == 2); // true

// Q3
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true ❗

// Explanation:
// >= converts null to 0
// == has special rule for null

// Q4
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false

// Q5
console.log(NaN == NaN); // false
console.log(NaN > 1);    // false
console.log(Number.isNaN(NaN)); // true


/*
------------------------------------------------------------
🔟 Interview One-Liners (MEMORIZE)
------------------------------------------------------------

✔ Comparison operators return boolean
✔ == does type coercion, === does not
✔ null behaves differently in comparisons
✔ undefined is not comparable
✔ NaN is not equal to anything
✔ Unary + converts value to number
*/


/*
------------------------------------------------------------
🎯 Final Interview Tip
------------------------------------------------------------

If interviewer asks:
"Why comparisons behave weirdly in JS?"

Answer:
"Because JavaScript performs implicit type coercion
and follows special rules for null, undefined, and NaN."
*/

console.log("✅ Operators & Comparisons - Completed");
