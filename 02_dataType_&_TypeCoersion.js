/****************************************************
 * JavaScript Data Types & Type Coercion
 * Interview-Oriented Notes + Code Examples
 * Author: Ashutosh
 ****************************************************/

/*
====================================================
1️⃣ JavaScript Data Types
====================================================

JavaScript is a dynamically typed language.
=> Variable ka type runtime pe decide hota hai
*/

// ---------------- PRIMITIVE DATA TYPES ----------------
// Primitive = Immutable & value directly store hoti hai

let num = 10;                 // Number
let str = "Hello";            // String
let isLoggedIn = true;        // Boolean
let nothing = null;          // Null (intentional empty)
let notDefined;              // Undefined
let big = 12345678901234567890n; // BigInt
let sym = Symbol("id");      // Symbol (unique identifier)

console.log(typeof num);        // number
console.log(typeof str);        // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof nothing);    // ❗ object (JS bug)
console.log(typeof notDefined); // undefined
console.log(typeof big);        // bigint
console.log(typeof sym);        // symbol

/*
👉 INTERVIEW NOTE:
typeof null === "object"  ❌
This is a famous JavaScript bug (asked a LOT)
*/


// ---------------- NON-PRIMITIVE (REFERENCE TYPES) ----------------
// Stored in heap, reference pass hota hai

let user = {
  name: "Ashutosh",
  age: 22
};

let arr = [1, 2, 3];
let greet = function () {
  console.log("Hello");
};

console.log(typeof user);  // object
console.log(typeof arr);   // object
console.log(typeof greet);// function

/*
👉 INTERVIEW NOTE:
Array ka typeof bhi "object" hota hai
Correct check: Array.isArray(arr)
*/

console.log(Array.isArray(arr)); // true


/*
====================================================
2️⃣ Primitive vs Reference (Important Interview)
====================================================
*/

let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20
// Primitive => copy by value

let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value = 20;

console.log(obj1.value); // 20
console.log(obj2.value); // 20
// Reference => copy by reference


/*
====================================================
3️⃣ Type Coercion
====================================================

Type Coercion = JS automatically converts data types
Two types:
1) Implicit
2) Explicit
*/


// ---------------- 3.1 IMPLICIT TYPE COERCION ----------------

console.log("5" + 1);   // "51"
console.log("5" - 1);   // 4
console.log("5" * 2);   // 10
console.log("10" / 2);  // 5

/*
👉 Rule:
+ operator => String prefers
Other operators => Number conversion
*/

console.log(true + 1);   // 2
console.log(false + 1);  // 1
console.log(null + 1);   // 1
console.log(undefined + 1); // NaN


/*
====================================================
4️⃣ Equality: == vs === (MOST IMPORTANT)
====================================================
*/

console.log(5 == "5");   // true
console.log(5 === "5");  // false

/*
==  => value compare (type coercion hoti hai)
=== => value + type compare (NO coercion)
👉 Interview rule: Always use ===
*/

console.log(null == undefined);  // true
console.log(null === undefined); // false


/*
====================================================
5️⃣ Explicit Type Conversion
====================================================
*/

let value = "123";

console.log(Number(value));  // 123
console.log(String(123));    // "123"
console.log(Boolean(1));     // true
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean("hi"));  // true


/*
====================================================
6️⃣ Tricky Interview Questions (🔥)
====================================================
*/

// Q1
console.log([] + []); // ""
// Explanation: both arrays convert to empty string

// Q2
console.log([] + {}); // "[object Object]"

// Q3
console.log({} + []); // 0 or "[object Object]" (depends on context)

// Q4
console.log(1 + "2" + "3"); // "123"
console.log("1" + 2 + 3);   // "123"
console.log(1 + 2 + "3");   // "33"

// Q5
console.log(true == 1);  // true
console.log(false == 0); // true

// Q6
console.log(NaN == NaN); // false
// Correct check:
console.log(Number.isNaN(NaN)); // true


/*
====================================================
7️⃣ Interview One-Liners (Remember These)
====================================================

✔ JavaScript is dynamically typed
✔ typeof null === "object" (bug)
✔ == allows coercion, === does not
✔ Arrays & objects are reference types
✔ NaN is not equal to itself
✔ Boolean conversion: 0, "", null, undefined => false
*/


/*
====================================================
8️⃣ Final Interview Tip
====================================================

If interviewer asks:
"Why === is preferred over =="
Answer:
Because === avoids unexpected bugs caused by implicit type coercion
and makes code more predictable and readable.
*/

console.log("✅ Data Types & Type Coercion - Completed");
