/* 
========================================
Polyfills — MASTER FILE
Prepared By: Ashutosh Choubey
========================================
*/

/*
🧠 WHAT IS A POLYFILL?

Polyfill = 
Custom implementation of a method 
that behaves like native JS method 
if it does NOT exist in environment.

Used for:
✔ Older browsers
✔ Interview deep knowledge
✔ Understanding internals
✔ Edge case handling

Golden Rule:
Never overwrite native method blindly.
Always check first.
*/


// ========================================
// 1️⃣ HOW TO WRITE A POLYFILL (GENERAL TEMPLATE)
// ========================================

/*
if (!Array.prototype.myMethod) {
  Array.prototype.myMethod = function (...) {
    // implementation
  };
}

Key things to consider:
1. this binding
2. arguments validation
3. return value
4. edge cases
5. error throwing behavior
6. callback context (thisArg)
7. sparse arrays handling
8. mutates or not?
9. length behavior
10. spec compliance (optional advanced)
*/


// ========================================
// 2️⃣ POLYFILL — forEach
// ========================================

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback, thisArg) {

    if (this == null) {
      throw new TypeError("Cannot read property of null");
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const arr = Object(this); // handles array-like
    const len = arr.length >>> 0;

    for (let i = 0; i < len; i++) {
      if (i in arr) {
        callback.call(thisArg, arr[i], i, arr);
      }
    }
  };
}


// ========================================
// 3️⃣ POLYFILL — map
// ========================================

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArg) {

    if (typeof callback !== "function") {
      throw new TypeError("Callback must be function");
    }

    const arr = Object(this);
    const len = arr.length >>> 0;
    const result = new Array(len);

    for (let i = 0; i < len; i++) {
      if (i in arr) {
        result[i] = callback.call(thisArg, arr[i], i, arr);
      }
    }

    return result;
  };
}


// ========================================
// 4️⃣ POLYFILL — filter
// ========================================

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback, thisArg) {

    const arr = Object(this);
    const len = arr.length >>> 0;
    const result = [];

    for (let i = 0; i < len; i++) {
      if (i in arr) {
        if (callback.call(thisArg, arr[i], i, arr)) {
          result.push(arr[i]);
        }
      }
    }

    return result;
  };
}


// ========================================
// 5️⃣ POLYFILL — reduce 🔥
// ========================================

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {

    if (typeof callback !== "function") {
      throw new TypeError("Callback must be function");
    }

    const arr = Object(this);
    const len = arr.length >>> 0;

    let accumulator;
    let startIndex = 0;

    if (arguments.length > 1) {
      accumulator = initialValue;
    } else {
      while (startIndex < len && !(startIndex in arr)) {
        startIndex++;
      }

      if (startIndex >= len) {
        throw new TypeError("Reduce of empty array");
      }

      accumulator = arr[startIndex++];
    }

    for (let i = startIndex; i < len; i++) {
      if (i in arr) {
        accumulator = callback(accumulator, arr[i], i, arr);
      }
    }

    return accumulator;
  };
}


// ========================================
// 6️⃣ POLYFILL — bind 🔥🔥🔥
// ========================================

if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (context, ...args) {

    const fn = this;

    return function (...newArgs) {
      return fn.apply(context, [...args, ...newArgs]);
    };
  };
}


// ========================================
// 7️⃣ POLYFILL — Promise.all (Simplified)
// ========================================

function myPromiseAll(promises) {

  return new Promise((resolve, reject) => {

    const results = [];
    let completed = 0;

    if (promises.length === 0) resolve([]);

    promises.forEach((promise, index) => {

      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}


// ========================================
// 8️⃣ IMPORTANT EDGE CASES TO THINK ABOUT
// ========================================

/*
Whenever building ANY polyfill:

1️⃣ Does it mutate original array?
2️⃣ Should it skip empty indexes?
3️⃣ What if callback missing?
4️⃣ What if array is empty?
5️⃣ What if this is null?
6️⃣ What if function used with call/apply?
7️⃣ Does it support array-like objects?
8️⃣ Should errors match native behavior?
9️⃣ Should it preserve order?
🔟 Is it synchronous or async?
*/


// ========================================
// 9️⃣ COMMON INTERVIEW TRAPS
// ========================================

/*
Trap 1:
Using arrow function in prototype (wrong this)

Trap 2:
Not checking callback type

Trap 3:
Ignoring sparse arrays

Trap 4:
Not handling initial value in reduce

Trap 5:
Not preserving index order in Promise.all
*/


// ========================================
// 🔟 HOW TO APPROACH NEW POLYFILL IN FUTURE
// ========================================

/*
STEP 1:
Understand method deeply.
What it returns?
Does it mutate?
Is it sync/async?

STEP 2:
Check edge cases.

STEP 3:
Implement basic version.

STEP 4:
Add validation + error throwing.

STEP 5:
Test with:
- empty array
- null
- undefined
- wrong callback
- sparse arrays
*/


// ========================================
// 🧠 FINAL REVISION NOTES
// ========================================

/*
✔ Polyfill = fallback implementation
✔ Never overwrite native blindly
✔ Handle edge cases
✔ Respect this binding
✔ Match native behavior as much as possible
✔ Think about performance
✔ Think about spec compliance (advanced)
*/
