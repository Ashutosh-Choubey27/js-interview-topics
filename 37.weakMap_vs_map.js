/* 
========================================
WeakMap vs Map — Master File
Prepared by: Ashutosh Choubey
========================================
*/

/*
🧠 CORE IDEA

Map:
✔ Key can be ANY type (object, primitive)
✔ Strong reference
✔ Iterable
✔ Has size
✔ Prevents garbage collection if referenced

WeakMap:
✔ Keys must be OBJECT only
✔ Weak reference
✔ Not iterable
✔ No size property
✔ Allows garbage collection

Most asked interview topic in memory management section.
*/


// ========================================
// 1️⃣ BASIC MAP
// ========================================

const map = new Map();

map.set("name", "Ashutosh");
map.set(1, "one");
map.set(true, "boolean");

console.log(map.get("name"));
console.log(map.size);
console.log(map.has(1));

/*
Map stores strong references.
Even if original variable lost,
data still exists inside Map.
*/


// ========================================
// 2️⃣ MAP WITH OBJECT KEY
// ========================================

let obj = { id: 1 };

map.set(obj, "User Data");

console.log(map.get(obj));

obj = null;

/*
Even after obj = null,
data still exists inside map.

Why?
Map keeps strong reference.
Memory not freed.
*/


// ========================================
// 3️⃣ BASIC WEAKMAP
// ========================================

const weakMap = new WeakMap();

let user = { name: "Ashutosh" };

weakMap.set(user, "Private Data");

console.log(weakMap.get(user));

user = null;

/*
Now object eligible for garbage collection.

WeakMap does NOT prevent GC.
*/


// ========================================
// 4️⃣ WEAKMAP LIMITATIONS
// ========================================

/*
❌ Cannot use primitive keys

weakMap.set("name", "value"); // ERROR

✔ Only object keys allowed
*/


// ========================================
// 5️⃣ NO ITERATION IN WEAKMAP
// ========================================

/*
weakMap.size ❌ undefined
weakMap.keys() ❌ not allowed
for...of ❌ not allowed

Reason:
Because keys may disappear anytime due to GC.
Engine cannot guarantee consistency.
*/


// ========================================
// 6️⃣ WHY WEAKMAP EXISTS? 🔥
// ========================================

/*
Main purpose:
Private data storage
Memory leak prevention
Metadata storage
*/


// ========================================
// 7️⃣ REAL USE CASE — PRIVATE DATA
// ========================================

const privateData = new WeakMap();

class User {
  constructor(name, password) {
    this.name = name;
    privateData.set(this, { password });
  }

  checkPassword(pw) {
    return privateData.get(this).password === pw;
  }
}

const u1 = new User("Ashutosh", "1234");

console.log(u1.checkPassword("1234"));

// password not directly accessible


// ========================================
// 8️⃣ MEMORY LEAK SCENARIO
// ========================================

/*
Imagine DOM nodes stored in Map:

const elementMap = new Map();
elementMap.set(domNode, metadata);

If DOM removed but Map still holds reference,
memory leak occurs.

Solution:
Use WeakMap.
*/


// ========================================
// 9️⃣ MAP VS OBJECT
// ========================================

/*
Map advantages over Object:

✔ Keys can be any type
✔ Maintains insertion order
✔ Has size property
✔ Better performance for frequent add/remove
*/


// ========================================
// 🔟 INTERVIEW OUTPUT CHECK
// ========================================

const m = new Map();
const wm = new WeakMap();

let keyObj = { x: 10 };

m.set(keyObj, "map data");
wm.set(keyObj, "weakmap data");

keyObj = null;

/*
Map → still holds data
WeakMap → eligible for GC

But we cannot manually check WeakMap deletion.
*/


// ========================================
// 1️⃣1️⃣ STRONG VS WEAK REFERENCE
// ========================================

/*
Strong Reference:
Memory retained until manually removed.

Weak Reference:
Memory freed when no other references exist.
*/


// ========================================
// 1️⃣2️⃣ WHEN TO USE WHAT
// ========================================

/*
Use Map when:
✔ Need iteration
✔ Need size
✔ Keys are primitives
✔ Long-lived data

Use WeakMap when:
✔ Store metadata of objects
✔ Avoid memory leaks
✔ Private properties
✔ Cache tied to object lifecycle
*/


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: Difference between Map and WeakMap?
Q2: Why WeakMap not iterable?
Q3: Why only object keys?
Q4: How WeakMap prevents memory leak?
Q5: Real use case?
*/


// ========================================
// 🧠 REVISION NOTES
// ========================================

/*
✔ Map = strong reference
✔ WeakMap = weak reference
✔ WeakMap keys = objects only
✔ WeakMap not iterable
✔ WeakMap helps prevent memory leaks
✔ Used for private data
*/
