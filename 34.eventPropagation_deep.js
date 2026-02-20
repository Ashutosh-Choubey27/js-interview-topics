
/* 
========================================
Event Propagation Deep — Master File
Prepared for: Ashutosh Choubey
========================================
*/

/*
🧠 CORE IDEA

Event Propagation ke 3 phases hote hain:

1️⃣ Capturing Phase (Trickling Down)
2️⃣ Target Phase
3️⃣ Bubbling Phase (Bubbling Up)

Default behavior:
Events bubble UP.
Capturing tab hota hai jab explicitly enable karein.
*/


// ========================================
// 🏗️ HTML STRUCTURE (Imagine this)
// ========================================

/*
<div id="grandparent">
  <div id="parent">
    <button id="child">Click</button>
  </div>
</div>
*/




// ========================================
// 1️⃣ BASIC BUBBLING (DEFAULT)
// ========================================

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", () => {
  console.log("grandparent bubble");
});

parent.addEventListener("click", () => {
  console.log("parent bubble");
});

child.addEventListener("click", () => {
  console.log("child bubble");
});

/*
Click child →

Output:
child bubble
parent bubble
grandparent bubble

Reason:
Default phase = bubbling
*/


// ========================================
// 2️⃣ CAPTURING PHASE
// ========================================

grandparent.addEventListener(
  "click",
  () => {
    console.log("grandparent capture");
  },
  true // capture enabled
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent capture");
  },
  true
);

/*
Click child →

Output order:
grandparent capture
parent capture
child bubble
parent bubble
grandparent bubble
*/


// ========================================
// 3️⃣ stopPropagation()
// ========================================

child.addEventListener("click", (e) => {
  console.log("child clicked");
  e.stopPropagation();
});

/*
Now clicking child →

Only:
child clicked

Stops further propagation
*/


// ========================================
// 4️⃣ stopImmediatePropagation()
// ========================================

child.addEventListener("click", (e) => {
  console.log("first handler");
  e.stopImmediatePropagation();
});

child.addEventListener("click", () => {
  console.log("second handler");
});

/*
Only "first handler" runs.

Difference:
stopPropagation → stops parent
stopImmediatePropagation → stops same element handlers too
*/


// ========================================
// 5️⃣ event.target vs event.currentTarget
// ========================================

parent.addEventListener("click", function (e) {
  console.log("target:", e.target.id);
  console.log("currentTarget:", e.currentTarget.id);
});

/*
Click child →

target: child
currentTarget: parent

target = where event originated
currentTarget = where handler attached
*/


// ========================================
// 6️⃣ Event Delegation 🔥🔥🔥
// ========================================

/*
Instead of adding listeners to every button,
attach one listener to parent.
*/

document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.id);
  }
});

/*
Why powerful?
✔ Better performance
✔ Works for dynamically added elements
✔ Less memory usage
*/


// ========================================
// 7️⃣ Bubbling Not Supported Events
// ========================================

/*
Not all events bubble.

Examples:
focus
blur

Solution:
Use capturing OR focusin/focusout
*/


// ========================================
// 8️⃣ Real Interview Output
// ========================================

grandparent.addEventListener("click", () => {
  console.log("GP Bubble");
});

grandparent.addEventListener(
  "click",
  () => {
    console.log("GP Capture");
  },
  true
);

parent.addEventListener("click", () => {
  console.log("P Bubble");
});

child.addEventListener("click", () => {
  console.log("Child Bubble");
});

/*
Predict order on child click:

GP Capture
Child Bubble
P Bubble
GP Bubble
*/


// ========================================
// 9️⃣ addEventListener Options Object
// ========================================

parent.addEventListener(
  "click",
  () => {
    console.log("once handler");
  },
  { once: true }
);

/*
Options:
capture: true
once: true
passive: true
*/


// ========================================
// 🔟 Passive Events
// ========================================

/*
Used mainly in scroll/touch events.

passive: true means
browser will NOT wait for preventDefault()

Improves performance.
*/


// ========================================
// 🧠 Interview Questions
// ========================================

/*
Q1: Explain event propagation phases.
Q2: Default phase?
Q3: stopPropagation vs stopImmediatePropagation?
Q4: target vs currentTarget?
Q5: What is event delegation?
Q6: Which events do not bubble?
*/


// ========================================
// 🧠 REVISION NOTES
// ========================================

/*
✔ 3 phases: capture → target → bubble
✔ Default = bubbling
✔ Third argument true = capture
✔ stopPropagation stops upward flow
✔ stopImmediatePropagation stops same element handlers
✔ target ≠ currentTarget
✔ Delegation improves performance
*/