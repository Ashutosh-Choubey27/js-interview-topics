
/********************************************************
 * Topic: Memory Leaks & Garbage Collection in JavaScript
 * Author: Ashutosh Choubey(JS Interview Prep)
 ********************************************************/

/*
========================================================
0️⃣ Core Idea (MEMORIZE 🔥)
========================================================

Memory Leak:
Memory allocate hui but free nahi hui.

Garbage Collection:
Unused memory automatically free hoti hai.

INTERVIEW LINE:
"Memory leak occurs when objects are no longer needed
but still referenced in memory."
*/

/*
========================================================
1️⃣ JavaScript Memory Lifecycle
========================================================

1. Allocate memory
2. Use memory
3. Release memory (GC does automatically)
*/

/*
========================================================
2️⃣ Garbage Collector Works How?
========================================================

JS uses:
👉 Mark & Sweep Algorithm

Step 1:
Roots detect (window, global, stack)

Step 2:
Reachable objects marked

Step 3:
Unreachable removed
*/

/*
========================================================
3️⃣ Simple Example
========================================================
*/

let obj = { name: "Ashu" };

obj = null; 
// now unreachable → GC will remove

/*
========================================================
4️⃣ Memory Leak Example #1
Global Variables
========================================================
*/

function leak(){
  data = "oops"; // ❌ no let/var/const
}

leak();

/*
data becomes global → never cleaned
*/

/*
========================================================
5️⃣ Memory Leak Example #2
Closures
========================================================
*/

function outer(){
  let big = new Array(1000000).fill("🔥");

  return function(){
    console.log("using big");
  };
}

const fn = outer();

/*
big stays in memory because closure holds reference
*/

/*
Fix:
set fn = null when not needed
*/

/*
========================================================
6️⃣ Memory Leak Example #3
setInterval
========================================================
*/

setInterval(()=>{
  console.log("running...");
},1000);

/*
Never cleared → memory leak
*/

const id = setInterval(()=>{},1000);
clearInterval(id);

/*
========================================================
7️⃣ Memory Leak Example #4
DOM References
========================================================
*/

const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
  console.log("click");
});

/*
If element removed but listener exists → leak
*/

btn.removeEventListener("click",()=>{});

/*
========================================================
8️⃣ Detached DOM Nodes
========================================================
*/

let div = document.createElement("div");
document.body.appendChild(div);

div.remove();

/*
If still referenced in JS → leak
*/

/*
========================================================
9️⃣ Cache Memory Leak
========================================================
*/

const cache = {};

function store(key,val){
  cache[key] = val;
}

/*
Cache grows forever → leak
*/

/*
========================================================
🔟 WeakMap Solution 🔥
========================================================
*/

const weak = new WeakMap();

let user = {name:"Ashu"};

weak.set(user,"data");

user = null;

/*
Now GC can remove it
*/

/*
WeakMap does not prevent GC
*/

/*
========================================================
1️⃣1️⃣ Common Causes (MEMORIZE)
========================================================

- Global variables
- Closures
- Timers
- Event listeners
- Detached DOM
- Large caches
*/

/*
========================================================
1️⃣2️⃣ Interview Questions
========================================================
*/

// Q1: What is memory leak?
// memory not freed

// Q2: GC algorithm?
// Mark & Sweep

// Q3: How to prevent leaks?
// remove listeners
// clear timers
// avoid globals

/*
========================================================
1️⃣3️⃣ Output Based
========================================================
*/

function test(){
  let a = {x:1};
  return ()=>console.log(a);
}

const t = test();

/*
a stays in memory
*/

/*
========================================================
1️⃣4️⃣ Real World Example
========================================================

React:
useEffect cleanup required
*/

/*
========================================================
🔥 Interview One-Liners
========================================================

✔ JS uses mark & sweep
✔ memory leak = unused but referenced
✔ closures cause leaks
✔ timers cause leaks
✔ WeakMap helps
✔ remove event listeners
*/

/*
========================================================
🔥 END OF FILE: memory_leaks_gc.js
========================================================
*/