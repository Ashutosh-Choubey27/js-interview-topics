
/********************************************************
 * Topic: String Methods Deep Dive
 * Author: Ashutosh (JS Interview Prep)
 ********************************************************/

/*
========================================================
0️⃣ Most Asked String Methods (MEMORIZE)
========================================================

length
toUpperCase
toLowerCase
trim
slice
substring
replace
replaceAll
split
includes
startsWith
endsWith
charAt
indexOf
repeat
template literals
*/

/*
========================================================
1️⃣ length
========================================================
*/

const str = "JavaScript";
console.log(str.length); // 10

/*
========================================================
2️⃣ Case Methods
========================================================
*/

const name = "ashutosh";

console.log(name.toUpperCase()); // ASHUTOSH
console.log(name.toLowerCase()); // ashutosh

/*
========================================================
3️⃣ trim()
========================================================

Real use: form inputs
*/

const input = "   hello   ";

console.log(input.trim());      // "hello"
console.log(input.trimStart()); // left trim
console.log(input.trimEnd());   // right trim

/*
========================================================
4️⃣ slice() (VERY IMPORTANT 🔥)
========================================================

Supports negative index
*/

const text = "JavaScript";

console.log(text.slice(0,4));  // Java
console.log(text.slice(-6));   // Script

/*
slice vs substring
*/

console.log(text.substring(0,4)); // Java
// substring doesn't support negative index

/*
========================================================
5️⃣ replace & replaceAll
========================================================
*/

let msg = "Hello world world";

console.log(msg.replace("world","Ashu"));
// replaces first only

console.log(msg.replaceAll("world","JS"));
// replaces all

/*
========================================================
6️⃣ split() (MOST IMPORTANT 🔥)
========================================================
*/

let data = "a,b,c,d";

let arr = data.split(",");
console.log(arr); // ["a","b","c","d"]

/*
========================================================
7️⃣ includes / startsWith / endsWith
========================================================
*/

let sentence = "I love JavaScript";

console.log(sentence.includes("love")); // true
console.log(sentence.startsWith("I"));  // true
console.log(sentence.endsWith("Script")); // true

/*
========================================================
8️⃣ charAt & indexOf
========================================================
*/

let s = "hello";

console.log(s.charAt(1));  // e
console.log(s.indexOf("l")); // 2

/*
========================================================
9️⃣ repeat()
========================================================
*/

console.log("ha".repeat(3)); // hahaha

/*
========================================================
🔟 Template Literals
========================================================
*/

let user = "Ashu";
console.log(`Hello ${user}`);

/*
========================================================
1️⃣1️⃣ Reverse String (INTERVIEW FAV 🔥)
========================================================
*/

function reverseString(str){
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

/*
========================================================
1️⃣2️⃣ Palindrome Check
========================================================
*/

function isPalindrome(str){
  let rev = str.split("").reverse().join("");
  return str === rev;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

/*
========================================================
1️⃣3️⃣ Count Characters
========================================================
*/

function charCount(str){
  let map = {};

  for(let ch of str){
    map[ch] = (map[ch] || 0) + 1;
  }
  return map;
}

console.log(charCount("banana"));

/*
========================================================
1️⃣4️⃣ Count Vowels
========================================================
*/

function countVowels(str){
  let count = 0;
  let vowels = "aeiou";

  for(let ch of str.toLowerCase()){
    if(vowels.includes(ch)){
      count++;
    }
  }
  return count;
}

console.log(countVowels("JavaScript"));

/*
========================================================
1️⃣5️⃣ Remove Duplicates
========================================================
*/

function removeDuplicates(str){
  return [...new Set(str)].join("");
}

console.log(removeDuplicates("programming"));

/*
========================================================
1️⃣6️⃣ Reverse Words
========================================================
*/

function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("I love JS"));

/*
========================================================
1️⃣7️⃣ String Coercion Tricks
========================================================
*/

console.log("5" + 2); // "52"
console.log("5" - 2); // 3

/*
========================================================
1️⃣8️⃣ Output Based Questions
========================================================
*/

console.log("hello".slice(1,3)); // el
console.log("hello".substring(1,3)); // el

console.log("5" + 1); // "51"
console.log("5" - 1); // 4

/*
========================================================
1️⃣9️⃣ Important Differences
========================================================

slice → negative index allowed
substring → negative not allowed
replace → first only
replaceAll → all
split → returns array
*/

/*
========================================================
🔥 Interview One-Liners
========================================================

✔ Strings immutable
✔ split returns array
✔ slice supports negative
✔ replace vs replaceAll
✔ template literals modern way
✔ reverse string using split reverse join
*/

/*
========================================================
🔥 END OF FILE: string_methods_deep_dive.js
========================================================
*/