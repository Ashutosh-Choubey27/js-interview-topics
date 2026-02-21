
/* 
========================================
Memoization — Master File
Prepared for: Ashutosh Choubey
========================================
*/

/*
🧠 CORE IDEA

Memoization = 
Store previous function results 
so repeated calculations avoid ho sakein.

Definition:
"A technique to cache function results based on inputs."

Main use:
✔ Expensive calculations
✔ Recursive problems
✔ API caching
✔ Performance optimization
*/


// ========================================
// 1️⃣ WITHOUT MEMOIZATION
// ========================================

function slowSquare(n) {
  console.log("Computing...");
  return n * n;
}

console.log(slowSquare(4));
console.log(slowSquare(4));

/*
Output:
Computing...
16
Computing...
16

Problem:
Har baar calculation ho raha hai
*/


// ========================================
// 2️⃣ BASIC MEMOIZATION (MANUAL CACHE)
// ========================================

function memoizedSquare(n) {
  const cache = memoizedSquare.cache || (memoizedSquare.cache = {});

  if (cache[n]) {
    console.log("From cache");
    return cache[n];
  }

  console.log("Computing...");
  const result = n * n;
  cache[n] = result;

  return result;
}

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));

/*
Second call → From cache
*/


// ========================================
// 3️⃣ GENERIC MEMOIZE FUNCTION 🔥
// ========================================

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("From cache");
      return cache[key];
    }

    console.log("Computing...");
    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
}


// ========================================
// 4️⃣ TEST GENERIC MEMOIZE
// ========================================

function add(a, b) {
  return a + b;
}

const memoAdd = memoize(add);

console.log(memoAdd(2, 3));
console.log(memoAdd(2, 3));

/*
Second call cached
*/


// ========================================
// 5️⃣ REAL INTERVIEW EXAMPLE — FIBONACCI
// ========================================

// ❌ Without memoization (very slow)
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(40)); // extremely slow


// ✅ With memoization
function memoizedFib() {
  const cache = {};

  function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;

    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }

  return fib;
}

const fastFib = memoizedFib();

console.log(fastFib(40));

/*
Huge performance difference
*/


// ========================================
// 6️⃣ MAP BASED MEMOIZATION
// ========================================

function memoizeWithMap(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("From cache");
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  };
}


// ========================================
// 7️⃣ INTERVIEW TRAPS
// ========================================

/*
Trap 1:
if (cache[key]) ❌

If result = 0 or false → problem.

Correct:
if (key in cache)
OR
cache.has(key)
*/


function safeMemoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
}


// ========================================
// 8️⃣ MEMOIZATION VS CACHING
// ========================================

/*
Memoization:
Function level caching (usually pure functions)

Caching:
General storage (API data, DB results)
*/


// ========================================
// 9️⃣ WHEN NOT TO USE
// ========================================

/*
❌ Functions with side effects
❌ Non-deterministic output
❌ Huge memory growth
❌ Frequently changing data
*/


// ========================================
// 🔟 REACT CONNECTION (IMPORTANT)
// ========================================

/*
React hooks:
useMemo
useCallback

Same concept:
Store result unless dependencies change
*/


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: What is memoization?
Q2: How is it different from caching?
Q3: Why Fibonacci becomes fast?
Q4: What are limitations?
Q5: How to handle object arguments?
*/


// ========================================
// 🧠 REVISION NOTES
// ========================================

/*
✔ Memoization = cache function result
✔ Works best with pure functions
✔ Reduces time complexity
✔ JSON.stringify used for key
✔ Use Map for safer caching
✔ Beware memory leaks
*/