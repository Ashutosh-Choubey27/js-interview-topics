
/*
========================================
Regular Expressions in JavaScript 
Prepared By : Ashutosh Choubey
========================================
*/

/*
🔥 This file is GitHub-ready.
✔ Clean structure
✔ Clear sections
✔ Real-world use cases
✔ Interview traps
✔ Edge cases explained
*/


// ==================================================
// 1️⃣ REGEX BASICS
// ==================================================

/*
Regex = Pattern matching engine
Syntax:
    /pattern/flags
*/

const basicRegex = /hello/i;

console.log(basicRegex.test("Hello world")); // true



// ==================================================
// 2️⃣ FLAGS (VERY IMPORTANT)
// ==================================================

/*
g → global (multiple matches)
i → case insensitive
m → multiline
s → dotAll (dot matches newline)
u → unicode
y → sticky
*/

console.log("hello Hello".match(/hello/));     // single match
console.log("hello Hello".match(/hello/g));    // only lowercase
console.log("hello Hello".match(/hello/gi));   // both



// ==================================================
// 3️⃣ CHARACTER CLASSES
// ==================================================

/*
.   → any char except newline
\d  → digit
\D  → non-digit
\w  → word char [a-zA-Z0-9_]
\W  → non-word
\s  → whitespace
\S  → non-whitespace
*/

console.log("A1".match(/\d/)); // ["1"]
console.log("A1".match(/\D/)); // ["A"]



// ==================================================
// 4️⃣ CUSTOM CHARACTER SETS
// ==================================================

/*
[abc]
[a-z]
[A-Z]
[0-9]
[^abc] → negation
*/

console.log("cat".match(/[a-c]/g)); // ["c","a"]



// ==================================================
// 5️⃣ QUANTIFIERS
// ==================================================

/*
+      → 1 or more
*      → 0 or more
?      → 0 or 1
{n}
{n,}
{n,m}
*/

console.log("aaa".match(/a+/));      // aaa
console.log("aaa".match(/a{2,3}/));  // aaa



// ==================================================
// 6️⃣ ANCHORS
// ==================================================

/*
^ → start
$ → end
*/

console.log(/^hello/.test("hello world")); // true
console.log(/world$/.test("hello world")); // true



// ==================================================
// 7️⃣ GROUPING & CAPTURING
// ==================================================

const date = "2026-02-26";
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;

const match = date.match(dateRegex);

console.log(match[1]); // year
console.log(match[2]); // month
console.log(match[3]); // day



// ==================================================
// 8️⃣ ALTERNATION
// ==================================================

console.log("cat".match(/cat|dog/)); // cat
console.log("dog".match(/cat|dog/)); // dog



// ==================================================
// 9️⃣ WORD BOUNDARY
// ==================================================

console.log("cat category".match(/\bcat\b/g)); // ["cat"]



// ==================================================
// 🔟 GREEDY vs LAZY
// ==================================================

const html = "<h1>Hello</h1>";

console.log(html.match(/<.*>/));    // greedy
console.log(html.match(/<.*?>/));   // lazy



// ==================================================
// 1️⃣1️⃣ LOOKAHEAD
// ==================================================

console.log("100$".match(/\d+(?=\$)/)); // ["100"]



// ==================================================
// 1️⃣2️⃣ LOOKBEHIND
// ==================================================

console.log("$100".match(/(?<=\$)\d+/)); // ["100"]



// ==================================================
// 1️⃣3️⃣ COMMON VALIDATIONS (INTERVIEW READY)
// ==================================================


// Email
const emailRegex =
/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

console.log(emailRegex.test("test@gmail.com")); // true


// Phone (10 digit)
const phoneRegex = /^\d{10}$/;
console.log(phoneRegex.test("9876543210")); // true


// Password
/*
✔ 8+ chars
✔ 1 uppercase
✔ 1 lowercase
✔ 1 digit
✔ 1 special char
*/

const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

console.log(passwordRegex.test("Ashu@123")); // true



// ==================================================
// 1️⃣4️⃣ SPLIT USING REGEX
// ==================================================

console.log("one,two;three".split(/[,;]/));



// ==================================================
// 1️⃣5️⃣ EXEC METHOD (STATEFUL WITH g FLAG)
// ==================================================

const regexExec = /\d+/g;
const textExec = "100 200 300";

let resultExec;

while ((resultExec = regexExec.exec(textExec)) !== null) {
  console.log(resultExec[0]);
}



/*
==================================================
⚠️ INTERVIEW TRAPS
==================================================

1) match() behaves differently with g flag
2) Regex with g flag is stateful (lastIndex)
3) Dot (.) does not match newline without 's'
4) Greedy quantifiers cause bugs
5) Lookbehind not supported in very old browsers
6) Objects compared by reference (important in advanced parsing)
*/



/*
==================================================
🧠 HOW TO BUILD ANY REGEX
==================================================

Step 1 → Define start & end (^ $)
Step 2 → Define allowed characters
Step 3 → Add quantifiers
Step 4 → Add conditions (lookahead)
Step 5 → Test edge cases
*/



