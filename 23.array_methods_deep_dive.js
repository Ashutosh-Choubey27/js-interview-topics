
/********************************************************
 * Topic: Array Methods Deep Dive
 * Author: Ashutosh Choubey(JS Interview Prep)
 ********************************************************/

/*
========================================================
0️⃣ Most Asked Array Methods (MEMORIZE)
========================================================

map
filter
reduce
forEach
find
some
every
includes
slice
splice
flat
sort
*/

/*
========================================================
1️⃣ map()
========================================================

👉 Returns NEW array
👉 Transforms each element
👉 Does NOT modify original
*/

const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);
console.log(doubled); // [2,4,6]
console.log(nums);    // original unchanged

/*
Interview Trap:
map always returns new array
*/

/*
========================================================
2️⃣ forEach()
========================================================

👉 Iterates array
👉 Returns undefined
👉 Cannot break
*/

nums.forEach(n => console.log(n));

const res = nums.forEach(n => n * 2);
console.log(res); // undefined

/*
map vs forEach:
map → returns array
forEach → returns undefined
*/

/*
========================================================
3️⃣ filter()
========================================================

👉 Returns new array
👉 Based on condition
*/

const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2]

/*
========================================================
4️⃣ find()
========================================================

👉 Returns FIRST matching element
*/

const found = nums.find(n => n > 1);
console.log(found); // 2

/*
========================================================
5️⃣ some() & every()
========================================================
*/

console.log(nums.some(n => n > 2));  // true
console.log(nums.every(n => n > 0)); // true

/*
========================================================
6️⃣ reduce() (MOST IMPORTANT)
========================================================

👉 Reduces array to single value
*/

const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

/*
Reduce pattern:
(accumulator, current) => newAcc
*/

/*
--- Count frequency ---
*/

const arr = ["a", "b", "a"];

const freq = arr.reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});

console.log(freq);

/*
========================================================
7️⃣ slice() vs splice()
========================================================
*/

const a = [1, 2, 3, 4];

// slice → non-mutating
const sliced = a.slice(1, 3);
console.log(sliced); // [2,3]
console.log(a);      // unchanged

// splice → mutates
a.splice(1, 2);
console.log(a); // [1,4]

/*
========================================================
8️⃣ flat()
========================================================
*/

const nested = [1, [2, [3]]];
console.log(nested.flat(2)); // [1,2,3]

/*
========================================================
9️⃣ sort()
========================================================

⚠️ Converts to string by default
*/

const nums2 = [10, 2, 5];

nums2.sort();
console.log(nums2); // [10,2,5]

nums2.sort((a, b) => a - b);
console.log(nums2); // [2,5,10]

/*
========================================================
🔟 includes()
========================================================
*/

console.log(nums.includes(2)); // true

/*
========================================================
1️⃣1️⃣ Chaining (INTERVIEW FAVORITE)
========================================================
*/

const result = [1, 2, 3, 4]
  .filter(n => n % 2 === 0)
  .map(n => n * 10);

console.log(result); // [20,40]

/*
========================================================
1️⃣2️⃣ Real Interview Questions
========================================================
*/

// Q1: Remove duplicates
const unique = [...new Set([1, 1, 2, 3])];
console.log(unique);

// Q2: Max value
const max = nums.reduce((a, b) => Math.max(a, b));
console.log(max);

// Q3: Flatten array
const flatArr = [1, [2, [3]]].flat(2);

/*
========================================================
1️⃣3️⃣ Important Differences
========================================================

map → transform
filter → condition
reduce → single value
find → first match
forEach → just loop
*/

/*
========================================================
1️⃣4️⃣ Output-Based Questions
========================================================
*/

console.log([1,2,3].map(n => {
  if(n>1) return n;
}));
// [undefined,2,3]

console.log([1,2,3].filter(n => {
  if(n>1) return n;
}));
// [2,3]

/*
========================================================
1️⃣5️⃣ Performance Tip (INTERVIEW BONUS)
========================================================

map + filter chaining creates multiple arrays.
reduce can do in single pass.
*/

/*
========================================================
🔥 Interview One-Liners
========================================================

✔ map returns new array
✔ forEach returns undefined
✔ reduce is most powerful
✔ slice non-mutating
✔ splice mutating
✔ sort needs comparator
*/

/*
========================================================
🔥 END OF FILE: array_methods_deep_dive.js
========================================================
*/