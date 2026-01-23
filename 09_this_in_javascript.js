
/************************************************************
 * "this" in JavaScript - Expert Level
 * Interview Notes + Traps + Real Examples
 * Author: Ashutosh Choubey
 ************************************************************/

/*
============================================================
1️⃣ this in Global Scope
============================================================
*/

console.log(this); 
// Browser -> window
// Node.js -> {}


// ----------------------------------------------------------

/*
============================================================
2️⃣ this inside Normal Function (non-strict)
============================================================
*/

function showThis() {
  console.log(this);
}

showThis();
// Browser -> window
// Node -> global

/*
Reason:
Function is called normally (not via object)
Default binding applies
*/


// ----------------------------------------------------------

/*
============================================================
3️⃣ this inside Strict Mode
============================================================
*/

"use strict";

function strictFn() {
  console.log(this);
}

strictFn(); // undefined

/*
Interview line:
"In strict mode, default binding of this is undefined"
*/


// ----------------------------------------------------------

/*
============================================================
4️⃣ this inside Object Method
============================================================
*/

const user = {
  name: "Ashutosh",
  greet: function () {
    console.log(this.name);
  }
};

user.greet(); // Ashutosh

/*
Rule:
When function is called using object.method(),
this refers to the object
*/


// ----------------------------------------------------------

/*
============================================================
5️⃣ this inside Arrow Function
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

obj.normalFn(); // Ashutosh
obj.arrowFn();  // undefined

/*
Arrow Function:
✔ does NOT have its own this
✔ takes this from lexical (outer) scope
*/


// ----------------------------------------------------------

/*
============================================================
6️⃣ Arrow Function inside Object (CORRECT WAY)
============================================================
*/

const obj2 = {
  name: "Ashutosh",
  greet() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj2.greet(); // Ashutosh

/*
Why?
Arrow takes this from greet(),
and greet()'s this = obj2
*/


// ----------------------------------------------------------

/*
============================================================
7️⃣ this inside setTimeout (INTERVIEW TRAP 🔥)
============================================================
*/

const user2 = {
  name: "Ashutosh",
  greet: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

user2.greet(); // undefined

/*
Reason:
setTimeout callback is normal function
this -> window
*/


// ----------------------------------------------------------

/*
============================================================
8️⃣ Fix setTimeout using Arrow Function
============================================================
*/

const user3 = {
  name: "Ashutosh",
  greet: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

user3.greet(); // Ashutosh


// ----------------------------------------------------------

/*
============================================================
9️⃣ call(), apply(), bind()
============================================================
*/

function introduce(city, country) {
  console.log(this.name, city, country);
}

const person = { name: "Ashutosh" };

introduce.call(person, "Delhi", "India");
introduce.apply(person, ["Delhi", "India"]);

const boundFn = introduce.bind(person, "Delhi", "India");
boundFn();

/*
call -> arguments one by one
apply -> arguments as array
bind -> returns new function
*/


// ----------------------------------------------------------

/*
============================================================
🔟 this in Constructor Function
============================================================
*/

function Person(name) {
  this.name = name;
}

const p1 = new Person("Ashutosh");
console.log(p1.name); // Ashutosh

/*
new keyword does:
✔ creates empty object
✔ binds this to that object
✔ returns the object
*/


// ----------------------------------------------------------

/*
============================================================
1️⃣1️⃣ this in Class
============================================================
*/

class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name);
  }
}

const s1 = new Student("Ashutosh");
s1.greet(); // Ashutosh


// ----------------------------------------------------------

/*
============================================================
🔥 INTERVIEW TRAPS
============================================================
*/

// Q1
const a = {
  name: "A",
  fn: function () {
    console.log(this.name);
  }
};

const b = a.fn;
b(); // undefined

/*
Reason:
Function lost object reference
*/


// Q2
console.log(this === window); // true (browser)


// ----------------------------------------------------------

/*
============================================================
🎯 FINAL INTERVIEW SUMMARY
============================================================

✔ Global scope -> window
✔ Normal function -> window / undefined (strict)
✔ Object method -> object
✔ Arrow function -> lexical this
✔ call/apply/bind -> manual this
✔ Constructor/Class -> new object

RULE:
"this depends on HOW function is called"


🧠 Interview One-Liner (MEMORIZE)
 
 "The this keyword refers to the current execution context, and its value is 
 determined at the time of the function call, not at the time of the function definition."

🧩 CORE RULE (Golden Rule 👑)

❌ "Writing 'this' inside a function does not fix its value."
✅ "The value of 'this' depends on how the function is called."


--------------------------------- 🔥 10 Interview-Grade Questions (Quick Practice) ---------------------------------------

1️⃣ When is the value of this decided?
👉 At call time
2️⃣ Why doesn’t an arrow function have its own this?
👉 Because of lexical binding
3️⃣ In strict mode, what is this inside a normal function?
👉 undefined
4️⃣ Why is this undefined inside setTimeout?
👉 The callback is a normal function
5️⃣ What does bind() return?
👉 A new function
6️⃣ Why is this lost when an object method is stored in a variable?
👉 Because of a reference break
7️⃣ What is this in a constructor function?
👉 A new object
8️⃣ Can an arrow function be used as a constructor?
👉 ❌ No
9️⃣ What is this inside class methods?
👉 The instance
🔟 Most important rule about this?
👉 It depends on how the function is called

*/

console.log("✅ this keyword mastered");
