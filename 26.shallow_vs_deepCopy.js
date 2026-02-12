
/********************************************************
 * Topic: Shallow Copy vs Deep Copy
 * Author: Ashutosh Choubey (JS Interview Prep)
 ********************************************************/

/*
========================================================
0️⃣ Core Concepts (MEMORIZE 🔥)
========================================================

Shallow Copy:
→ Top level copy hota hai
→ Nested objects SAME reference share karte hain

Deep Copy:
→ Completely new copy
→ Nested objects bhi new reference

INTERVIEW LINE:
"Shallow copy copies reference of nested objects,
Deep copy creates new memory for everything"
*/

/*
========================================================
1️⃣ Primitive vs Reference
========================================================
*/

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

/*
Primitive → copied by value
*/

let obj1 = { name: "Ashu" };
let obj2 = obj1;

obj2.name = "JS";

console.log(obj1.name); // JS

/*
Objects → copied by reference
*/

/*
========================================================
2️⃣ Shallow Copy Examples
========================================================
*/

const user = {
  name: "Ashu",
  address: {
    city: "Delhi"
  }
};

// Method 1: spread
const copy1 = { ...user };

// Method 2: Object.assign
const copy2 = Object.assign({}, user);

copy1.name = "New";
console.log(user.name); // Ashu (top level safe)

copy1.address.city = "Noida";
console.log(user.address.city); // Noida ❌

/*
Nested object changed → shallow copy proof
*/

/*
========================================================
3️⃣ Array Shallow Copy
========================================================
*/

const arr = [1,2,[3,4]];

const arrCopy = [...arr];

arrCopy[0] = 100;
console.log(arr[0]); // 1

arrCopy[2][0] = 999;
console.log(arr[2][0]); // 999 ❌

/*
========================================================
4️⃣ Deep Copy using JSON
========================================================
*/

const original = {
  name: "Ashu",
  address: { city: "Delhi" }
};

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "Mumbai";

console.log(original.address.city); // Delhi

/*
Limitations:
- functions lost
- undefined lost
- Date lost
*/

/*
========================================================
5️⃣ structuredClone() (MODERN 🔥)
========================================================
*/

const obj = {
  name: "Ashu",
  address: { city: "Delhi" }
};

const deep2 = structuredClone(obj);

deep2.address.city = "Mumbai";

console.log(obj.address.city); // Delhi

/*
Best modern deep copy
*/

/*
========================================================
6️⃣ Manual Deep Copy (Recursive)
========================================================
*/

function deepClone(obj){
  if(typeof obj !== "object" || obj === null){
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for(let key in obj){
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}

const deep3 = deepClone(original);

deep3.address.city = "Pune";

console.log(original.address.city); // Delhi

/*
========================================================
7️⃣ Output Based Questions
========================================================
*/

const o1 = { a:1, b:{c:2} };
const o2 = { ...o1 };

o2.b.c = 100;

console.log(o1.b.c); // 100 ❌

/*
========================================================
8️⃣ Interview Questions
========================================================
*/

// Q1: spread operator deep copy?
// ❌ No (only shallow)

// Q2: JSON method limitations?
// loses functions, undefined, Date

// Q3: Best deep copy?
// structuredClone()

/*
========================================================
9️⃣ Real World Usage
========================================================

React state update:
Always create new object
Avoid mutation
*/

/*
========================================================
🔟 Comparison Table
========================================================

Shallow:
spread
Object.assign
slice

Deep:
JSON method
structuredClone
recursive
*/

/*
========================================================
🔥 Interview One-Liners
========================================================

✔ Objects copied by reference
✔ Spread is shallow
✔ structuredClone best deep copy
✔ Nested objects cause bugs
✔ React requires immutability
*/

/*
========================================================
🔥 END OF FILE: shallow_vs_deep_copy.js
========================================================
*/