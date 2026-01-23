
/************************************************************
 * call, apply, bind in JavaScript
 * WHY needed + HOW works + REAL USE CASES
 * Author: Ashutosh
 ************************************************************/

/*
============================================================
1️⃣ Problem Statement (WHY we need call/apply/bind)
============================================================
*/

const user = {
  name: "Ashutosh",
  greet() {
    console.log(this.name);
  }
};

const greetFn = user.greet;
greetFn(); // ❌ undefined (this lost)

/*
Reason:
Function is called without object reference
*/


// ----------------------------------------------------------

/*
============================================================
2️⃣ call() — Immediate Invocation
============================================================
*/

function introduce(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}

const person = { name: "Ashutosh" };

introduce.call(person, "Delhi", "India");

/*
call():
✔ First argument -> this
✔ Remaining -> normal arguments
✔ Executes immediately
*/


// ----------------------------------------------------------

/*
============================================================
3️⃣ apply() — Same as call, but arguments as array
============================================================
*/

introduce.apply(person, ["Delhi", "India"]);

/*
apply():
✔ this -> first argument
✔ arguments -> array
*/


// ----------------------------------------------------------

/*
============================================================
4️⃣ bind() — Permanent Binding
============================================================
*/

const boundIntroduce = introduce.bind(person, "Delhi", "India");

boundIntroduce(); // Ashutosh from Delhi, India

/*
bind():
✔ returns a NEW function
✔ does NOT execute immediately
✔ this is permanently fixed
*/


// ----------------------------------------------------------

/*
============================================================
5️⃣ call vs apply vs bind (INTERVIEW TABLE)
============================================================

call  -> executes immediately, args separated
apply -> executes immediately, args array
bind  -> returns function, execute later
*/


// ----------------------------------------------------------

/*
============================================================
6️⃣ Real-Life Use Case #1 — Borrowing Methods
============================================================
*/

const user1 = {
  name: "Ashutosh"
};

const user2 = {
  name: "Anik"
};

function greet() {
  console.log(`Hello ${this.name}`);
}

greet.call(user1);
greet.call(user2);

/*
Used when:
✔ Same function
✔ Different objects
*/


// ----------------------------------------------------------

/*
============================================================
7️⃣ Real-Life Use Case #2 — setTimeout Fix
============================================================
*/

const student = {
  name: "Ashutosh",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }.bind(this), 1000);
  }
};

student.greet(); // Ashutosh

/*
bind fixes lost this inside callback
*/


// ----------------------------------------------------------

/*
============================================================
8️⃣ Real-Life Use Case #3 — Event Listeners
============================================================
*/

const buttonHandler = {
  message: "Button Clicked",
  handleClick() {
    console.log(this.message);
  }
};

// element.addEventListener("click", buttonHandler.handleClick.bind(buttonHandler));

/*
bind ensures correct this in event callbacks
*/


// ----------------------------------------------------------

/*
============================================================
9️⃣ Interview Trap 🔥
============================================================
*/

const obj = {
  name: "Ashu",
  greet() {
    console.log(this.name);
  }
};

setTimeout(obj.greet, 1000); // ❌ undefined

setTimeout(obj.greet.bind(obj), 1000); // ✅ Ashu


// ----------------------------------------------------------

/*
============================================================
🔟 Important Rules (MEMORIZE)
============================================================

✔ call/apply/bind work ONLY on functions
✔ Arrow functions ignore call/apply/bind
✔ bind returns new function
✔ apply is useful when args are dynamic array
*/


// ----------------------------------------------------------

/*
============================================================
🎯 Perfect Interview Answer
============================================================

"call, apply and bind are used to explicitly control
the value of `this` in JavaScript functions.
They are especially useful when function loses its
original object context, such as callbacks,
event handlers, or method borrowing."



🔥 8 Interview Questions (Rapid Fire)

1️⃣ Main purpose of call, apply, and bind?
👉 Explicit this binding

2️⃣ Does bind() execute the function?
👉 ❌ No, it returns a new function

3️⃣ When do we use apply()?
👉 When arguments are provided in an array

4️⃣ Will bind() work on arrow functions?
👉 ❌ No

5️⃣ Why is this lost inside setTimeout?
👉 Because it’s a normal function call

6️⃣ What is method borrowing?
👉 Using the same function with different objects

7️⃣ Which is more performant — call or apply?
👉 Almost the same

8️⃣ Once bind() is applied, can it be changed?
👉 ❌ No

*/

console.log("✅ call, apply, bind mastered");
