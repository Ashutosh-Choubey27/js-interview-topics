
/********************************************************
 * Topic: Prototypes & Prototype Chain in JavaScript
 * Purpose: Deep JS internals + Interview mastery
 * Author: Ashutosh Choubey(JS Interview Prep)
 ********************************************************/

/*
========================================================
1️⃣ JavaScript is NOT Class-Based (Interview Gold)
========================================================

👉 JavaScript is PROTOTYPE-BASED.
👉 Objects inherit properties from other objects.
👉 This inheritance happens via [[Prototype]].

Every object has:
✔ an internal [[Prototype]] reference
✔ accessible via __proto__ (legacy but common)
*/

/*
========================================================
2️⃣ Prototype Basics
========================================================
*/

const obj = {
  name: "Ashutosh",
};

console.log(obj.__proto__ === Object.prototype); // true

/*
obj
 └── Object.prototype
      └── null
*/

/*
========================================================
3️⃣ Why Prototype Exists?
========================================================

To:
✔ Share methods across objects
✔ Save memory
✔ Enable inheritance

Without prototype → each object would
have its own copy of methods ❌
*/

/*
========================================================
4️⃣ Function Prototype (VERY IMPORTANT)
========================================================

👉 ONLY functions have a `prototype` property.
👉 Objects have `__proto__`.
*/

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

const p1 = new Person("Ashutosh");
const p2 = new Person("Anik");

p1.sayHello();
p2.sayHello();

/*
Memory advantage:
✔ sayHello exists ONLY ONCE
✔ Shared by all instances
*/

/*
========================================================
5️⃣ new Keyword Internals (INTERVIEW FAVORITE)
========================================================

new does 4 things:
1️⃣ Creates empty object {}
2️⃣ Sets obj.__proto__ = Constructor.prototype
3️⃣ Binds this to new object
4️⃣ Returns the object
*/

console.log(p1.__proto__ === Person.prototype); // true

/*
========================================================
6️⃣ Prototype Chain
========================================================

When property not found:
JS looks UP the prototype chain.

p1 → Person.prototype → Object.prototype → null
*/

console.log(p1.toString()); // from Object.prototype

/*
========================================================
7️⃣ Prototype Chain Example
========================================================
*/

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(this.name + " is eating");
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Linking prototypes (IMPORTANT)
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof!");
};

const dog1 = new Dog("Bruno", "Labrador");

dog1.eat();   // inherited
dog1.bark();  // own method

/*
Prototype chain:
dog1
 └── Dog.prototype
      └── Animal.prototype
           └── Object.prototype
                └── null
*/

/*
========================================================
8️⃣ Object.create()
========================================================

Creates object with specified prototype.
*/

const parent = {
  greet() {
    console.log("Hello from parent");
  },
};

const child = Object.create(parent);
child.greet(); // inherited

console.log(child.__proto__ === parent); // true

/*
========================================================
9️⃣ hasOwnProperty vs in
========================================================
*/

console.log(child.hasOwnProperty("greet")); // false
console.log("greet" in child);               // true

/*
========================================================
🔟 Modifying Built-in Prototypes (⚠️ Warning)
========================================================
*/

Array.prototype.sayHi = function () {
  console.log("Hi from Array");
};

[1, 2, 3].sayHi(); // works

/*
⚠️ Interview Note:
Modifying built-in prototypes is BAD PRACTICE
(can break libraries)
*/

/*
========================================================
1️⃣1️⃣ Prototype vs __proto__ vs prototype
========================================================

prototype  → property of constructor function
__proto__  → internal reference of object
[[Prototype]] → actual internal slot
*/

/*
========================================================
1️⃣2️⃣ Output-Based Interview Questions
========================================================
*/

// Q1
function A() {}
A.prototype.x = 10;

const a1 = new A();
console.log(a1.x); // 10

// Q2
const obj1 = {};
console.log(obj1.__proto__ === Object.prototype); // true

// Q3
console.log(Object.prototype.__proto__); // null

/*
========================================================
1️⃣3️⃣ Common Interview Traps
========================================================

❌ prototype != __proto__
❌ Only functions have prototype
✔ All objects have __proto__
✔ Prototype chain ends at null
*/

/*
========================================================
1️⃣4️⃣ Interview One-Liners (MEMORIZE)
========================================================

✔ JavaScript uses prototype-based inheritance
✔ Methods are shared via prototype
✔ Prototype chain is lookup mechanism
✔ new links object to constructor.prototype
✔ Object.prototype is top-level prototype
*/

/*
========================================================
🔥 END OF FILE: prototypes_and_prototype_chain.js
========================================================
*/
