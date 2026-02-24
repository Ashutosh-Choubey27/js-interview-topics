/* 
========================================
Generators — Master File
Prepared By : Ashutosh Choubey
========================================
*/

/*
🧠 CORE IDEA

Generator = Special function 
that can pause and resume execution.

Defined using:
function* 

Uses:
yield keyword

Generators return:
Iterator object

Main Purpose:
✔ Lazy execution
✔ Custom iterators
✔ Handling async flow (before async/await)
✔ Infinite sequences
*/


// ========================================
// 1️⃣ BASIC GENERATOR
// ========================================

function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

/*
Important:
Generator does NOT execute immediately.
It runs only when .next() is called.
*/


// ========================================
// 2️⃣ EXECUTION PAUSE & RESUME
// ========================================

function* pauseExample() {
  console.log("Start");
  yield;
  console.log("Middle");
  yield;
  console.log("End");
}

const g1 = pauseExample();

g1.next(); // Start
g1.next(); // Middle
g1.next(); // End


// ========================================
// 3️⃣ PASSING VALUES INTO GENERATOR
// ========================================

function* inputGenerator() {
  const name = yield "Enter name";
  console.log("Hello", name);
}

const g2 = inputGenerator();

console.log(g2.next());          // { value: "Enter name", done: false }
console.log(g2.next("Ashutosh")); // Hello Ashutosh


// ========================================
// 4️⃣ GENERATOR RETURN VALUE
// ========================================

function* returnExample() {
  yield 1;
  return 99;
  yield 2; // never runs
}

const g3 = returnExample();

console.log(g3.next()); // 1
console.log(g3.next()); // 99, done: true
console.log(g3.next()); // done true


// ========================================
// 5️⃣ ITERATING GENERATORS
// ========================================

function* numbers() {
  yield 10;
  yield 20;
  yield 30;
}

for (let num of numbers()) {
  console.log(num);
}

/*
Generators are iterable.
*/


// ========================================
// 6️⃣ INFINITE GENERATOR 🔥
// ========================================

function* infiniteCounter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const counter = infiniteCounter();

console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2

/*
Lazy evaluation.
Does not crash memory.
*/


// ========================================
// 7️⃣ CUSTOM ITERATOR USING GENERATOR
// ========================================

const obj = {
  *[Symbol.iterator]() {
    yield "A";
    yield "B";
    yield "C";
  }
};

for (let val of obj) {
  console.log(val);
}


// ========================================
// 8️⃣ GENERATORS VS NORMAL FUNCTIONS
// ========================================

/*
Normal Function:
✔ Runs fully
✔ Returns once

Generator:
✔ Pauses
✔ Resumes
✔ Returns multiple values
✔ Maintains internal state
*/


// ========================================
// 9️⃣ GENERATOR + ASYNC (OLD WAY)
// ========================================

/*
Before async/await,
generators were used with promises.

Advanced concept:
yield Promise
Then resume after resolve.
*/


// ========================================
// 🔟 INTERVIEW TRAPS
// ========================================

/*
Trap 1:
Generator does not run until .next()

Trap 2:
First .next() argument is ignored

Trap 3:
return ends generator permanently

Trap 4:
yield* delegates to another generator
*/


// ========================================
// 1️⃣1️⃣ yield* Example
// ========================================

function* genA() {
  yield 1;
  yield 2;
}

function* genB() {
  yield* genA();
  yield 3;
}

for (let val of genB()) {
  console.log(val);
}

/*
Output:
1
2
3
*/


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: Difference between generator & normal function?
Q2: What does yield do?
Q3: What does .next() return?
Q4: How to pass value into generator?
Q5: What is yield*?
Q6: Real-world use case?
*/


// ========================================
// 🧠 REAL USE CASES
// ========================================

/*
✔ Lazy loading data
✔ Infinite sequences
✔ State machines
✔ Custom iteration logic
✔ Async control flow (legacy)
*/


// ========================================
// 🧠 REVISION NOTES
// ========================================

/*
✔ function* defines generator
✔ yield pauses execution
✔ .next() resumes execution
✔ Returns {value, done}
✔ Generators are iterable
✔ Maintain internal state
*/
