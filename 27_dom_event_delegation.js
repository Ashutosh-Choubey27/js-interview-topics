
/********************************************************
 * Topic: DOM & Event Delegation
 * Author: Ashutosh Choubey(JS Interview Prep)
 ********************************************************/

/*
========================================================
0️⃣ DOM BASICS (MEMORIZE 🔥)
========================================================

DOM = Document Object Model

Browser HTML ko tree structure me convert karta hai.
Har HTML tag → ek object (node)

JS can:
- read DOM
- update DOM
- delete DOM
- create DOM
*/

/*
========================================================
1️⃣ Selecting Elements
========================================================
*/

const byId = document.getElementById("title");
const byClass = document.getElementsByClassName("item");
const byTag = document.getElementsByTagName("li");

const qs = document.querySelector(".item");
const qsa = document.querySelectorAll(".item");

/*
querySelector → first match
querySelectorAll → NodeList
*/

/*
========================================================
2️⃣ Changing Content
========================================================
*/

const el = document.getElementById("title");

el.textContent = "Hello";
el.innerText = "Visible Text";
el.innerHTML = "<span>HTML</span>";

/*
textContent → fastest
innerHTML → parses HTML
*/

/*
========================================================
3️⃣ Attributes
========================================================
*/

el.setAttribute("class","heading");
el.getAttribute("class");
el.removeAttribute("class");

/*
========================================================
4️⃣ Creating Elements
========================================================
*/

const li = document.createElement("li");
li.textContent = "New Item";

document.body.appendChild(li);

/*
========================================================
5️⃣ Event Basics
========================================================
*/

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  console.log("clicked");
});

/*
Common events:
click
input
change
submit
mouseover
*/

/*
========================================================
6️⃣ Event Object
========================================================
*/

btn.addEventListener("click", function(e){
  console.log(e.target);
  console.log(e.currentTarget);
});

/*
target → actual clicked element
currentTarget → listener element
*/

/*
========================================================
7️⃣ Event Bubbling 🔥
========================================================

child → parent → document
*/

document.getElementById("child").addEventListener("click",()=>{
  console.log("child");
});

document.getElementById("parent").addEventListener("click",()=>{
  console.log("parent");
});

/*
Click child →
child → parent
*/

/*
stop bubbling:
e.stopPropagation()
*/

/*
========================================================
8️⃣ Event Delegation (MOST IMPORTANT 🔥🔥🔥)
========================================================

Concept:
Attach ONE listener to parent
Handle children clicks
*/

/*
HTML:
<ul id="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
*/

document.getElementById("list").addEventListener("click", function(e){
  
  if(e.target.tagName === "LI"){
    console.log("Clicked:", e.target.textContent);
  }

});

/*
Why needed?
- performance
- dynamic elements
- fewer listeners
*/

/*
========================================================
9️⃣ Without Delegation ❌
========================================================
*/

const items = document.querySelectorAll("li");

items.forEach(li=>{
  li.addEventListener("click",()=>{
    console.log(li.textContent);
  });
});

/*
Problem:
new li added → no listener
*/

/*
========================================================
🔟 With Delegation ✅
========================================================
*/

document.getElementById("list").addEventListener("click", (e)=>{
  if(e.target.matches("li")){
    console.log("Delegated:", e.target.textContent);
  }
});

/*
Works for dynamic elements
*/

/*
========================================================
1️⃣1️⃣ Real Interview Example
========================================================
*/

// Todo delete button

document.getElementById("todos").addEventListener("click", (e)=>{
  
  if(e.target.classList.contains("delete")){
    e.target.parentElement.remove();
  }

});

/*
========================================================
1️⃣2️⃣ Event Capturing
========================================================
*/

document.getElementById("parent").addEventListener(
  "click",
  ()=>console.log("capture"),
  true
);

/*
true → capturing phase
*/

/*
========================================================
1️⃣3️⃣ Interview Questions
========================================================
*/

// Q1: Event delegation kya hai?
// parent pe listener, child handle

// Q2: Advantage?
// performance + dynamic elements

// Q3: target vs currentTarget?
// actual clicked vs listener element

/*
========================================================
1️⃣4️⃣ Output Based
========================================================
*/

document.body.addEventListener("click",()=>console.log("body"));
document.getElementById("div").addEventListener("click",()=>console.log("div"));
document.getElementById("btn").addEventListener("click",()=>console.log("btn"));

/*
Click btn output:
btn
div
body
*/

/*
========================================================
🔥 Interview One-Liners
========================================================

✔ DOM = tree of objects
✔ Event bubbling child → parent
✔ Delegation uses bubbling
✔ Better performance
✔ Used in React internally
*/

/*
========================================================
🔥 END OF FILE: dom_event_delegation.js
========================================================
*/