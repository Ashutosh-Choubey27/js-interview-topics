
/********************************************************
 * Topic: Encapsulation, Abstraction, Polymorphism (JS)
 * Purpose: Interview-ready OOP mastery
 * Author: Ashutosh Choubey (JS Interview Prep)
 ********************************************************/

/*
========================================================
INTRO: OOP in JavaScript
========================================================

JS is prototype-based, but supports OOP concepts:

1️⃣ Encapsulation
2️⃣ Abstraction
3️⃣ Polymorphism

(4th is Inheritance – already done)
*/

/*
========================================================
1️⃣ ENCAPSULATION
========================================================

👉 Wrapping data + methods together
👉 Restricting direct access to data
👉 Controlled access via methods

Real-life:
ATM machine → you can't access balance directly
*/

/*
--- Using Private Fields (#) --- (BEST MODERN WAY)
*/

class BankAccount {
  #balance = 0; // private

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
acc.withdraw(200);
console.log(acc.getBalance());

// console.log(acc.#balance); ❌ Error

/*
Encapsulation achieved:
✔ Data hidden
✔ Access via methods only
*/

/*
--- Using Closure (OLD INTERVIEW FAVORITE) ---
*/

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());

/*
========================================================
2️⃣ ABSTRACTION
========================================================

👉 Hiding internal implementation
👉 Showing only necessary functionality

Real-life:
You use car → don't care about engine internals
*/

class CoffeeMachine {
  start() {
    this.#heatWater();
    console.log("Making coffee...");
  }

  #heatWater() {
    console.log("Heating water...");
  }
}

const machine = new CoffeeMachine();
machine.start();

// machine.#heatWater(); ❌ hidden

/*
Interview line:
"Abstraction hides complexity and exposes only essentials."
*/

/*
========================================================
3️⃣ POLYMORPHISM
========================================================

Poly = many
Morph = forms

👉 Same method name
👉 Different behavior
*/

/*
--- Method Overriding ---
*/

class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach(a => a.speak());

/*
Output:
Dog barks
Cat meows
*/

/*
--- Method Overloading (JS doesn't support directly) ---
But we simulate using arguments.
*/

function add(a, b, c) {
  if (c !== undefined) return a + b + c;
  return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3, 4));

/*
========================================================
4️⃣ Real Interview Comparison
========================================================

Encapsulation:
→ Data hiding + controlled access

Abstraction:
→ Hide internal complexity

Polymorphism:
→ Same method, different behavior
*/

/*
========================================================
5️⃣ Prototype-based Polymorphism
========================================================
*/

function Shape() {}
Shape.prototype.draw = function () {
  console.log("Drawing shape");
};

function Circle() {}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function () {
  console.log("Drawing circle");
};

new Circle().draw();

/*
========================================================
6️⃣ Interview Output Questions
========================================================
*/

// Q1
class A {
  show() { console.log("A"); }
}
class B extends A {
  show() { console.log("B"); }
}
new B().show(); // B

// Q2
class Test {
  #x = 10;
}
const t = new Test();
// console.log(t.#x); ❌ error

/*
========================================================
7️⃣ Common Interview Traps
========================================================

❌ JS doesn't have true private (before ES6)
✔ Now uses # private fields
❌ Method overloading not native
✔ Overriding supported
✔ Encapsulation via closure also possible
*/

/*
========================================================
8️⃣ Interview One-Liners (MEMORIZE)
========================================================

✔ Encapsulation = data hiding
✔ Abstraction = hide complexity
✔ Polymorphism = same method, diff behavior
✔ JS achieves OOP via prototypes + classes
*/

/*
========================================================
9️⃣ Real Interview Question
========================================================

Q: Difference between encapsulation & abstraction?

A:
Encapsulation → how data is protected
Abstraction → how complexity is hidden
*/

/*
========================================================
🔥 END OF FILE: oop_core_concepts.js
========================================================
*/