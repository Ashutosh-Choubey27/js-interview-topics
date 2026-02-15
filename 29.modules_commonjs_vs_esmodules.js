
/********************************************************
 * Topic: Modules in JavaScript
 * Author: Ashutosh Choubey(JS Interview Prep)
 ********************************************************/

/*
========================================================
0️⃣ Why Modules Needed? (INTERVIEW STARTER 🔥)
========================================================

Old JS problem:
- Global scope pollution
- Name conflicts
- Hard to maintain large apps

Solution:
👉 Modules

Modules allow:
- code split
- reuse
- encapsulation
- maintainability
*/

/*
========================================================
1️⃣ Types of Modules in JS
========================================================

1. CommonJS  → Node.js (require)
2. ES Modules → Modern JS (import/export)

INTERVIEW LINE:
"CommonJS is synchronous, ES modules are asynchronous"
*/

/*
========================================================
2️⃣ CommonJS (Node.js)
========================================================
*/

// math.js
const add = (a,b)=>a+b;
const sub = (a,b)=>a-b;

module.exports = { add, sub };

/*
--- import ---
*/

const math = require("./math");

console.log(math.add(2,3));

/*
OR destructure
*/

const { add } = require("./math");
add(1,2);

/*
Key points:
- require()
- module.exports
- synchronous loading
*/

/*
========================================================
3️⃣ ES Modules (Modern JS 🔥)
========================================================
*/

// math.js
export const add2 = (a,b)=>a+b;
export const sub2 = (a,b)=>a-b;

/*
--- import ---
*/

import { add2 } from "./math.js";
add2(2,3);

/*
default export
*/

export default function greet(){
  console.log("hello");
}

import greet from "./math.js";
greet();

/*
========================================================
4️⃣ Named vs Default Export
========================================================
*/

// named
export const x = 10;
import { x } from "./file.js";

// default
//export default 10;
import val from "./file.js";

/*
Only one default export allowed
*/

/*
========================================================
5️⃣ Key Differences 🔥🔥🔥
========================================================

CommonJS:
require()
module.exports
sync
Node default

ESM:
import/export
async
browser + node
static analysis
*/

/*
========================================================
6️⃣ Execution Order
========================================================
*/

// CommonJS executes immediately
const m = require("./mod");

// ES module hoisted
import {x} from "./mod.js";

/*
Imports hoisted to top
*/

/*
========================================================
7️⃣ Dynamic Import (ESM)
========================================================
*/

import("./math.js").then(mod=>{
  mod.add2(1,2);
});

/*
Used for lazy loading
*/

/*
========================================================
8️⃣ __dirname vs import.meta
========================================================
*/

// CommonJS
console.log(__dirname);

// ES module
console.log(import.meta.url);

/*
========================================================
9️⃣ Node.js ESM Enable
========================================================

package.json:
"type": "module"

or use .mjs extension
*/

/*
========================================================
🔟 Interview Questions
========================================================
*/

// Q1: require vs import?
// require sync, import async

// Q2: Can we use both?
// yes in Node

// Q3: Why ESM better?
// tree shaking
// static analysis

/*
========================================================
1️⃣1️⃣ Output Based
========================================================
*/

// file1.js
export const a = 10;

// file2.js
import { a } from "./file1.js";
console.log(a);

/*
Works only in module environment
*/

/*
========================================================
1️⃣2️⃣ Real World Usage
========================================================

React:
ES Modules

Node:
CommonJS mostly
but now ESM supported
*/

/*
========================================================
🔥 Interview One-Liners
========================================================

✔ CommonJS → require
✔ ESM → import
✔ require sync
✔ import async
✔ default vs named export
✔ ESM modern standard
*/

/*
========================================================
🔥 END OF FILE: modules_commonjs_vs_esmodules.js
========================================================
*/