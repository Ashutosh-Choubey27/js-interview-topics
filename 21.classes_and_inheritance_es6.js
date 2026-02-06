
/********************************************************
 * Topic: Classes & Inheritance (ES6)
 * Purpose: Interview-ready notes + deep clarity
 * Author: Ashutosh Choubey (JS Interview Prep)
 ********************************************************/

/*
========================================================
1️⃣ What are Classes in JS?
========================================================

👉 Introduced in ES6 (2015)
👉 Syntactic sugar over prototype system
👉 Internally still uses prototypes

Important Interview Line:
"Classes in JavaScript are just syntactic sugar over
prototype-based inheritance."
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, I am " + this.name);
  }
}

const p1 = new Person("Ashutosh", 22);
p1.greet();

/*
Behind the scenes:
greet() is stored on Person.prototype
*/

/*
========================================================
2️⃣ Class vs Constructor Function
========================================================
*/

function PersonFunc(name) {
  this.name = name;
}

PersonFunc.prototype.sayHi = function () {
  console.log("Hi");
};

const p2 = new PersonFunc("A");

// Equivalent class
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Hi");
  }
}

/*
========================================================
3️⃣ Inheritance using extends
========================================================
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + " is eating");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent constructor
    this.breed = breed;
  }

  bark() {
    console.log("Woof!");
  }
}

const d1 = new Dog("Bruno", "Labrador");
d1.eat();
d1.bark();

/*
Prototype chain:
d1 → Dog.prototype → Animal.prototype → Object.prototype
*/

/*
========================================================
4️⃣ super Keyword
========================================================

Used to call parent constructor or methods.
*/

class A {
  say() {
    console.log("From A");
  }
}

class B extends A {
  say() {
    super.say();
    console.log("From B");
  }
}

new B().say();

/*
========================================================
5️⃣ Static Methods
========================================================

Belong to class, not instances.
*/

class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(2, 3));

// const m = new MathUtil();
// m.add() ❌

/*
========================================================
6️⃣ Getters & Setters
========================================================
*/

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(val) {
    this._name = val;
  }
}

const u = new User("ashu");
console.log(u.name);
u.name = "ashutosh";

/*
========================================================
7️⃣ Private Fields (#)
========================================================
*/

class Bank {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new Bank();
acc.deposit(100);
console.log(acc.getBalance());

// console.log(acc.#balance); ❌ error

/*
========================================================
8️⃣ instanceof Operator
========================================================
*/

console.log(d1 instanceof Dog);     // true
console.log(d1 instanceof Animal);  // true
console.log(d1 instanceof Object);  // true

/*
========================================================
9️⃣ Method Overriding
========================================================
*/

class Parent {
  speak() {
    console.log("Parent speaking");
  }
}

class Child extends Parent {
  speak() {
    console.log("Child speaking");
  }
}

new Child().speak();

/*
========================================================
🔟 Output-Based Questions
========================================================
*/

// Q1
class Test {
  constructor() {
    console.log("Constructor");
  }
}
new Test();

// Q2
class A1 {
  static hello() {
    console.log("Hello");
  }
}
A1.hello();

// Q3
class X {}
console.log(typeof X); // function

/*
========================================================
1️⃣1️⃣ Interview Traps
========================================================

❌ Classes are NOT hoisted like functions
❌ Must call super() before using this
✔ Methods go on prototype
✔ Static methods not on instance
*/

/*
========================================================
1️⃣2️⃣ Hoisting Behavior
========================================================
*/

// new MyClass(); ❌ ReferenceError

class MyClass {}

/*
Classes are in TDZ like let/const.
*/

/*
========================================================
1️⃣3️⃣ Interview One-Liners
========================================================

✔ Classes are syntactic sugar over prototypes
✔ extends sets prototype chain
✔ super calls parent constructor
✔ static belongs to class
✔ private fields use #
*/

/*
========================================================
🔥 END OF FILE: classes_and_inheritance_es6.js
========================================================
*/