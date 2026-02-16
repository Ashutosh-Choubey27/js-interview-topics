/********************************************************
 * Topic: Debounce & Throttle in JavaScript
 * Author: Ashutosh Choubey(JS Interview Prep)
 ********************************************************/

/*
========================================================
0️⃣ Why Needed? (REAL INTERVIEW START 🔥)
========================================================

Imagine:
User types in search box → 20 keystrokes
API call har keystroke pe → server crash 😭

Solution:
👉 Debounce
👉 Throttle

INTERVIEW LINE:
"Both are performance optimization techniques
used to control function execution frequency."
*/

/*
========================================================
1️⃣ Difference in One Line 🔥
========================================================

Debounce:
Wait until user stops triggering

Throttle:
Run at fixed interval
*/

/*
========================================================
2️⃣ Visual Understanding
========================================================

Typing: a b c d e

Debounce(500ms):
---------run once after typing stops

Throttle(500ms):
run---wait---run---wait
*/

/*
========================================================
3️⃣ Debounce Implementation
========================================================
*/

function debounce(fn, delay){
  let timer;

  return function(...args){
    clearTimeout(timer);

    timer = setTimeout(()=>{
      fn.apply(this, args);
    }, delay);
  };
}

/*
Usage: search input
*/

function search(){
  console.log("API CALL");
}

const debouncedSearch = debounce(search, 500);

// call many times
debouncedSearch();
debouncedSearch();
debouncedSearch();

/*
Only last call executes
*/

/*
========================================================
4️⃣ Throttle Implementation
========================================================
*/

function throttle(fn, limit){
  let lastCall = 0;

  return function(...args){
    const now = Date.now();

    if(now - lastCall >= limit){
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

/*
Usage: scroll event
*/

function onScroll(){
  console.log("scroll");
}

const throttledScroll = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScroll);

/*
========================================================
5️⃣ Key Differences 🔥
========================================================

Debounce:
- waits
- last call executes
- search input

Throttle:
- interval based
- runs continuously
- scroll resize
*/

/*
========================================================
6️⃣ Real Interview Examples
========================================================
*/

// Search bar → debounce
// Resize window → throttle
// Infinite scroll → throttle
// Auto save → debounce

/*
========================================================
7️⃣ Output Based Questions
========================================================
*/

const fn = debounce(()=>console.log("run"),1000);

fn();
fn();
fn();

/*
Output:
run (only once after 1s)
*/

/*
========================================================
8️⃣ Leading vs Trailing
========================================================
*/

function debounce2(fn, delay, immediate){
  let timer;

  return function(...args){
    const callNow = immediate && !timer;

    clearTimeout(timer);

    timer = setTimeout(()=>{
      timer = null;
      if(!immediate) fn.apply(this,args);
    },delay);

    if(callNow) fn.apply(this,args);
  };
}

/*
========================================================
9️⃣ Advanced Throttle
========================================================
*/

function throttle2(fn, limit){
  let inThrottle;

  return function(...args){
    if(!inThrottle){
      fn.apply(this,args);
      inThrottle = true;

      setTimeout(()=>{
        inThrottle = false;
      },limit);
    }
  };
}

/*
========================================================
🔟 Interview Questions
========================================================
*/

// Q1: debounce vs throttle?
// debounce waits, throttle limits

// Q2: search bar?
// debounce

// Q3: scroll?
// throttle

/*
========================================================
1️⃣1️⃣ Common Mistakes
========================================================

❌ forgetting clearTimeout
❌ losing this context
❌ not returning function
*/

/*
========================================================
🔥 Interview One-Liners
========================================================

✔ Debounce waits
✔ Throttle limits
✔ Used for performance
✔ Search → debounce
✔ Scroll → throttle
✔ Prevent API spam
*/

/*
========================================================
🔥 END OF FILE: debounce_throttle.js
========================================================
*/