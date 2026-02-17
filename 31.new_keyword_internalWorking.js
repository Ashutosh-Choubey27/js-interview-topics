/********************************************************
 * Topic: new Keyword Internals in JavaScript
 * Author: Ashutosh Choubey (JS Interview Prep)
 ********************************************************/

/*
========================================================
0️⃣ Interview Starter (MEMORIZE 🔥)
========================================================

"new keyword creates a new object, sets prototype,
binds this to that object, and returns it."

Behind the scenes steps:

1. Empty object create hota hai {}
2. Object ka __proto__ → constructor.prototype set hota hai
3. constructor function call hota hai with this
4. Agar constructor object return kare → wahi return
5. warna new object return hota hai
*/

/*
========================================================
1️⃣ Basic Example
========================================================
*/

function Person(name){
  this.name = name;
}

const p1 = new Person("Ashu");

console.log(p1.name); // Ashu

/*
Without new:
*/

const p2 = Person("NoNew");

console.log(p2); // undefined
console.log(window.name); // "NoNew" (browser me)

/*
Problem:
this global object ban jata hai
*/

/*
========================================================
2️⃣ What new Actually Does (Step by Step)
========================================================
*/

function Car(model){
  this.model = model;
}

const c1 = new Car("BMW");

/*
Internally JS does this:

Step1:
let obj = {}

Step2:
obj.__proto__ = Car.prototype

Step3:
Car.call(obj,"BMW")

Step4:
return obj
*/

/*
========================================================
3️⃣ Prototype Link 🔥
========================================================
*/

function Animal(name){
  this.name = name;
}

Animal.prototype.sound = function(){
  console.log("makes sound");
};

const dog = new Animal("dog");

dog.sound(); // from prototype

/*
new keyword ensures:
instance → prototype connected
*/

/*
========================================================
4️⃣ Constructor Returning Object (TRICK)
========================================================
*/

function Test(){
  this.x = 10;
  return {y:20};
}

const t = new Test();

console.log(t); // {y:20}

/*
If constructor returns object → that object returned
If returns primitive → ignored
*/

/*
========================================================
5️⃣ Constructor Returning Primitive
========================================================
*/

function Demo(){
  this.a = 1;
  return 100;
}

const d = new Demo();
console.log(d.a); // 1

/*
Primitive ignored
*/

/*
========================================================
6️⃣ new Keyword Polyfill 🔥🔥🔥
========================================================
*/

function myNew(constructor, ...args){

  // step1: empty object
  const obj = {};

  // step2: prototype link
  Object.setPrototypeOf(obj, constructor.prototype);

  // step3: call constructor
  const result = constructor.apply(obj, args);

  // step4: return logic
  return typeof result === "object" && result !== null
    ? result
    : obj;
}

/*
Test polyfill
*/

function User(name){
  this.name = name;
}

const u1 = myNew(User,"Ashu");

console.log(u1.name); // Ashu

/*
========================================================
7️⃣ Common Interview Traps
========================================================
*/

// Trap 1
function A(){
  this.val = 10;
}

const a1 = A(); // no new
console.log(a1); // undefined

// Trap 2
function B(){
  this.x = 1;
  return {x:2};
}

const b = new B();
console.log(b.x); // 2

/*
========================================================
8️⃣ new vs Object.create
========================================================
*/

function Person2(name){
  this.name = name;
}

const obj = Object.create(Person2.prototype);
Person2.call(obj,"Ashu");

console.log(obj.name);

/*
Same as new
*/

/*
========================================================
9️⃣ new with Class
========================================================
*/

class Student{
  constructor(name){
    this.name = name;
  }
}

const s = new Student("Ashu");
console.log(s.name);

/*
Classes internally use new
*/

/*
========================================================
🔟 Output Based Questions
========================================================
*/

function X(){
  this.a = 10;
}

const x1 = new X();
const x2 = X();

console.log(x1.a); // 10
console.log(x2);   // undefined

/*
========================================================
1️⃣1️⃣ Interview Questions
========================================================
*/

// Q1: new keyword kya karta hai?
// creates object + binds this + prototype link

// Q2: constructor object return kare?
// wahi return hota

// Q3: polyfill likh sakte?
// yes (myNew)

/*
========================================================
🔥 One-Liners for Interview
========================================================

✔ new creates object
✔ links prototype
✔ binds this
✔ returns object
✔ object return overrides
✔ primitive ignored
*/