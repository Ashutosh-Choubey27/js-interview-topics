
/*
========================================
Web APIs in JavaScript — Complete Master File
Prepared By : Ashutosh Choubey
========================================
*/

/*
🔥 IMPORTANT FIRST:

Web APIs are NOT part of JavaScript.
They are provided by the Browser (or Node environment).

JS Engine (V8) does NOT provide:
- setTimeout
- DOM
- fetch
- localStorage

These come from the Web API layer.
*/


// ==================================================
// 1️⃣ WHAT ARE WEB APIs?
// ==================================================

/*
Web APIs are browser-provided features
that allow JavaScript to interact with:

✔ DOM
✔ Timers
✔ Network
✔ Storage
✔ Geolocation
✔ Canvas
✔ Audio/Video
✔ etc
*/


// ==================================================
// 2️⃣ JS ENGINE vs WEB API vs EVENT LOOP
// ==================================================

/*
Execution Flow:

Call Stack → Web APIs → Callback Queue → Event Loop → Call Stack

Example below 👇
*/


// ==================================================
// 3️⃣ setTimeout (Web API Example)
// ==================================================

console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 2000);

console.log("End");

/*
Flow:
1. setTimeout registered in Web API
2. Timer runs in browser
3. After delay → callback goes to Callback Queue
4. Event Loop pushes it to Call Stack
*/


// ==================================================
// 4️⃣ DOM API
// ==================================================

/*
DOM APIs allow JS to interact with HTML
*/

document.addEventListener("click", () => {
  console.log("Document clicked");
});

const element = document.getElementById("demo");
console.log(element);


/*
DOM APIs include:
- querySelector
- createElement
- appendChild
- remove
- addEventListener
*/


// ==================================================
// 5️⃣ FETCH API (Network Web API)
// ==================================================

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

/*
fetch is Web API.
Returns Promise.
Handles HTTP requests.
*/


// ==================================================
// 6️⃣ LOCAL STORAGE API
// ==================================================

localStorage.setItem("name", "Ashutosh");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

/*
✔ Persistent storage
✔ Stores strings only
✔ Max limit ~5MB
*/


// ==================================================
// 7️⃣ SESSION STORAGE
// ==================================================

sessionStorage.setItem("token", "12345");
console.log(sessionStorage.getItem("token"));

/*
✔ Clears when tab closes
*/


// ==================================================
// 8️⃣ GEOLOCATION API
// ==================================================

navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude);
});

/*
Requires user permission
*/


// ==================================================
// 9️⃣ CONSOLE API
// ==================================================

console.log("Hello");
console.warn("Warning");
console.error("Error");


// ==================================================
// 🔟 HISTORY API
// ==================================================

history.back();
history.forward();


// ==================================================
// 1️⃣1️⃣ LOCATION API
// ==================================================

console.log(location.href);
console.log(location.hostname);


// ==================================================
// 1️⃣2️⃣ INTERVAL API
// ==================================================

const intervalId = setInterval(() => {
  console.log("Running every second");
}, 1000);

clearInterval(intervalId);



// ==================================================
// 1️⃣3️⃣ MICROTASK vs MACROTASK
// ==================================================

console.log("Start");

setTimeout(() => console.log("Macrotask"), 0);

Promise.resolve().then(() => console.log("Microtask"));

console.log("End");

/*
Output:
Start
End
Microtask
Macrotask

Reason:
Promise → Microtask Queue
setTimeout → Macrotask Queue
*/


// ==================================================
// 1️⃣4️⃣ IMPORTANT INTERVIEW QUESTIONS
// ==================================================

/*
Q1: Is setTimeout part of JS?
→ NO (Web API)

Q2: Who provides Web APIs?
→ Browser

Q3: Does Node.js have Web APIs?
→ Some (but implemented differently)

Q4: Why does setTimeout(0) not execute immediately?
→ Because it waits for Call Stack to clear.

Q5: What manages async flow?
→ Event Loop
*/


// ==================================================
// 1️⃣5️⃣ COMMON WEB APIs LIST
// ==================================================

/*
Timers:
- setTimeout
- setInterval

DOM:
- document
- window
- element methods

Network:
- fetch
- XMLHttpRequest

Storage:
- localStorage
- sessionStorage

Browser:
- history
- location
- navigator

Multimedia:
- Audio
- Video

Graphics:
- Canvas API
*/


// ==================================================
// 1️⃣6️⃣ MEMORY LEAK DANGER
// ==================================================

/*
If you add event listeners and forget to remove them:
→ Memory leak

If interval not cleared:
→ Memory leak

If DOM references stored:
→ Memory leak
*/


// ==================================================
// FINAL UNDERSTANDING
// ==================================================

/*
JavaScript = Language
Web APIs = Browser Features
Event Loop = Coordinator

JS cannot do async alone.
Web APIs + Event Loop make it powerful.
*/
