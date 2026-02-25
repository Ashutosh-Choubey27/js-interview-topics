
/* 
========================================
Set & WeakSet — Master File
Prepared By : Ashutosh Choubey
========================================
*/

/*
🧠 CORE IDEA

Set:
✔ Stores UNIQUE values
✔ Can store any type (primitive + object)
✔ Iterable
✔ Has size property
✔ Strong reference

WeakSet:
✔ Stores only OBJECTS
✔ Weak reference
✔ Not iterable
✔ No size property
✔ Allows garbage collection
*/


// ========================================
// 1️⃣ BASIC SET
// ========================================

const set = new Set();

set.add(1);
set.add(2);
set.add(2); // duplicate ignored
set.add("Ashutosh");

console.log(set); 
console.log(set.size); // 3
console.log(set.has(1)); // true
set.delete(1);
console.log(set.has(1)); // false


/*
Set automatically removes duplicates.
*/


// ========================================
// 2️⃣ REMOVE DUPLICATES FROM ARRAY 🔥
// ========================================

const arr = [1, 2, 2, 3, 4, 4];

const unique = [...new Set(arr)];

console.log(unique);

/*
Most common interview usage.
*/


// ========================================
// 3️⃣ ITERATING SET
// ========================================

const numbers = new Set([10, 20, 30]);

for (let value of numbers) {
  console.log(value);
}

numbers.forEach(val => console.log(val));

/*
Set maintains insertion order.
*/


// ========================================
// 4️⃣ OBJECTS INSIDE SET
// ========================================

const obj1 = { id: 1 };
const obj2 = { id: 1 };

const objSet = new Set();

objSet.add(obj1);
objSet.add(obj2);

console.log(objSet.size); // 2

/*
Objects compared by reference, not value.
*/


// ========================================
// 5️⃣ CHECKING DUPLICATES IN ARRAY
// ========================================

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

console.log(hasDuplicates([1, 2, 3])); 
console.log(hasDuplicates([1, 2, 2])); 


// ========================================
// 6️⃣ BASIC WEAKSET
// ========================================

const weakSet = new WeakSet();

let user = { name: "Ashutosh" };

weakSet.add(user);

console.log(weakSet.has(user)); // true

user = null;

/*
Now object eligible for garbage collection.

WeakSet does NOT prevent GC.
*/


// ========================================
// 7️⃣ WEAKSET LIMITATIONS
// ========================================

/*
❌ Only objects allowed

weakSet.add(1); // ERROR

❌ No iteration

weakSet.size ❌
for...of ❌
weakSet.forEach ❌

Reason:
Object may disappear anytime (GC).
*/


// ========================================
// 8️⃣ REAL USE CASE — TRACKING OBJECTS
// ========================================

const visited = new WeakSet();

function process(obj) {
  if (visited.has(obj)) {
    console.log("Already processed");
    return;
  }

  visited.add(obj);
  console.log("Processing...");
}

let data = { value: 42 };

process(data);
process(data);


/*
Used in:
✔ Avoid duplicate processing
✔ DOM tracking
✔ Memory-safe metadata
*/


// ========================================
// 9️⃣ SET VS ARRAY
// ========================================

/*
Set advantages:
✔ Faster lookup (O(1))
✔ No duplicates
✔ Cleaner duplicate removal

Array advantages:
✔ Index access
✔ More built-in methods
*/


// ========================================
// 🔟 SET VS WEAKSET
// ========================================

/*
Set:
✔ Any type
✔ Iterable
✔ size available
✔ Strong reference

WeakSet:
✔ Object only
✔ Not iterable
✔ No size
✔ Weak reference
*/


// ========================================
// 1️⃣1️⃣ MEMORY LEAK EXAMPLE
// ========================================

/*
Imagine storing DOM nodes in Set:

const domSet = new Set();
domSet.add(domNode);

If DOM removed but still in Set,
memory leak possible.

Solution:
Use WeakSet.
*/


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: Difference between Set & Array?
Q2: How to remove duplicates?
Q3: Why WeakSet not iterable?
Q4: Why only object keys?
Q5: Real-world use case?
Q6: Time complexity of has()?
*/


// ========================================
// 🧠 REVISION NOTES
// ========================================

/*
✔ Set stores unique values
✔ Maintains insertion order
✔ O(1) lookup
✔ WeakSet stores objects only
✔ WeakSet helps prevent memory leaks
✔ WeakSet not iterable
*/
