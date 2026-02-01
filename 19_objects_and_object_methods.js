
/********************************************************
 * Topic: Objects & Object Methods in JavaScript
 * Purpose: Interview-ready notes with examples
 * Author: Ashutosh Choubey (JS Interview Prep)
 ********************************************************/

/*
========================================================
1️⃣ What is an Object?
========================================================

👉 Object is a collection of key-value pairs.
👉 Keys are strings (implicitly).
👉 Values can be ANY data type.
*/

const user = {
  name: "Ashutosh",
  age: 22,
  isStudent: true,
};

console.log(user);

/*
========================================================
2️⃣ Accessing Object Properties
========================================================
*/

// Dot notation
console.log(user.name);

// Bracket notation (important for interview)
console.log(user["age"]);

// Dynamic key access
const key = "isStudent";
console.log(user[key]);

/*
========================================================
3️⃣ Adding / Updating / Deleting Properties
========================================================
*/

user.city = "Delhi";      // add
user.age = 23;            // update
delete user.isStudent;    // delete

console.log(user);

/*
========================================================
4️⃣ Object Methods
========================================================

👉 When a function is inside an object,
   it is called a METHOD.
*/

const person = {
  name: "Ashutosh",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet();

/*
========================================================
5️⃣ this Keyword in Objects (VERY IMPORTANT)
========================================================

👉 this refers to the object calling the method.
*/

const obj = {
  value: 10,
  show() {
    console.log(this.value);
  },
};

obj.show(); // 10

/*
========================================================
6️⃣ Arrow Function ❌ inside Object
========================================================

Arrow functions do NOT have their own this.
*/

const wrongObj = {
  name: "JS",
  show: () => {
    console.log(this.name);
  },
};

wrongObj.show(); // undefined

/*
========================================================
7️⃣ Object.keys(), values(), entries()
========================================================
*/

const car = {
  brand: "BMW",
  price: 5000000,
};

console.log(Object.keys(car));    // ["brand", "price"]
console.log(Object.values(car));  // ["BMW", 5000000"]
console.log(Object.entries(car)); // [["brand","BMW"],["price",5000000]]

/*
========================================================
8️⃣ Object.freeze() vs Object.seal()
========================================================
*/

const account = {
  balance: 1000,
};

Object.freeze(account);
account.balance = 2000; // ❌ ignored
console.log(account.balance); // 1000

const profile = {
  name: "Ashu",
};

Object.seal(profile);
profile.name = "Ashutosh"; // ✅ allowed
profile.age = 22;          // ❌ not allowed
console.log(profile);

/*
========================================================
9️⃣ Checking Property Existence
========================================================
*/

console.log("name" in profile);          // true
console.log(profile.hasOwnProperty("age")); // false

/*
========================================================
🔟 Object.assign() & Spread Operator
========================================================
*/

const a = { x: 1 };
const b = { y: 2 };

// Using Object.assign
const c = Object.assign({}, a, b);
console.log(c);

// Using spread (modern & preferred)
const d = { ...a, ...b };
console.log(d);

/*
========================================================
1️⃣1️⃣ Shallow Copy vs Deep Copy (INTERVIEW GOLD)
========================================================
*/

const original = {
  name: "JS",
  skills: ["HTML", "CSS"],
};

// Shallow copy
const shallow = { ...original };
shallow.skills.push("JS");

console.log(original.skills); // ["HTML","CSS","JS"]

// Deep copy
const deep = JSON.parse(JSON.stringify(original));
deep.skills.push("React");

console.log(original.skills); // unchanged

/*
========================================================
1️⃣2️⃣ for...in Loop (Objects)
========================================================
*/

for (let key in user) {
  console.log(key, user[key]);
}

/*
========================================================
1️⃣3️⃣ Object Destructuring
========================================================
*/

const student = {
  name: "Ashutosh",
  marks: 90,
};

const { name, marks } = student;
console.log(name, marks);

/*
========================================================
1️⃣4️⃣ Output-Based Interview Questions
========================================================
*/

// Q1
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 5;
console.log(obj1.a); // 5 (same reference)

// Q2
console.log({} == {});  // false
//console.log({} === {}); // false

/*
========================================================
1️⃣5️⃣ Common Interview Traps
========================================================

❌ Objects are NOT compared by value
✔ Objects are compared by reference
❌ Arrow functions should NOT be used as methods
✔ this depends on call-site
*/

/*
========================================================
1️⃣6️⃣ Interview One-Liners
========================================================

✔ Object stores data in key-value pairs
✔ Methods are functions inside objects
✔ this refers to calling object
✔ Object.freeze makes object immutable
✔ Spread creates shallow copy
*/

/*
========================================================
🔥 END OF FILE: objects_and_object_methods.js
========================================================
*/
