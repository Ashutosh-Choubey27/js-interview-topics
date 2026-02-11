
/********************************************************
 * Topic: map filter reduce (with POLYFILLS)
 * Author: Ashutosh Choubey(JS Interview Prep)
 ********************************************************/

/*
========================================================
0️⃣ Most Asked Concepts (MEMORIZE 🔥)
========================================================

map     → transform array → returns NEW array
filter  → condition       → returns NEW array
reduce  → single value    → returns ANYTHING

IMPORTANT:
- All are higher order functions
- Do NOT mutate original array
- Used in React/Frontend heavily
*/

/*
========================================================
1️⃣ map()
========================================================

👉 Returns NEW array
👉 Transform each element
👉 Same length array
*/

const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);

console.log(doubled); // [2,4,6]
console.log(nums);    // original unchanged

/*
Interview traps:
map always returns new array
length remains same
*/

/*
--- index & array params ---
*/

nums.map((value, index, arr) => {
  console.log(value, index, arr);
});

/*
========================================================
2️⃣ filter()
========================================================

👉 Returns NEW array
👉 Based on condition
👉 Length may change
*/

const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2]

/*
filter returns element if condition true
*/

/*
========================================================
3️⃣ reduce() (MOST IMPORTANT 🔥🔥🔥)
========================================================

👉 Reduces array → single value
👉 Most powerful method
*/

const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

/*
acc → accumulator
curr → current value
0   → initial value
*/

/*
--- max value ---
*/

const max = nums.reduce((acc, curr) => Math.max(acc, curr));
console.log(max);

/*
--- frequency counter ---
*/

const letters = ["a","b","a","c","a"];

const freq = letters.reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});

console.log(freq);

/*
========================================================
4️⃣ CHAINING (INTERVIEW FAVORITE 🔥)
========================================================
*/

const result = [1,2,3,4,5]
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((acc, curr) => acc + curr, 0);

console.log(result); // 60

/*
========================================================
5️⃣ map vs filter vs reduce
========================================================

map    → transform
filter → condition
reduce → accumulate
*/

/*
========================================================
6️⃣ Real Interview Questions
========================================================
*/

// Q1: Square even numbers
const ans1 = [1,2,3,4]
  .filter(n => n % 2 === 0)
  .map(n => n*n);

console.log(ans1);

// Q2: Sum of prices
const prices = [100,200,300];

const total = prices.reduce((a,b)=>a+b,0);
console.log(total);

// Q3: Flatten array
const nested = [[1,2],[3,4]];

const flat = nested.reduce((acc,curr)=>acc.concat(curr),[]);
console.log(flat);

/*
========================================================
7️⃣ Output Based Questions
========================================================
*/

console.log([1,2,3].map(n=>{
  if(n>1) return n;
}));
// [undefined,2,3]

console.log([1,2,3].filter(n=>{
  if(n>1) return n;
}));
// [2,3]

/*
========================================================
8️⃣ POLYFILL: map()
========================================================
*/

Array.prototype.myMap = function(callback){
  const result = [];

  for(let i=0;i<this.length;i++){
    result.push(callback(this[i], i, this));
  }

  return result;
};

const polyMap = [1,2,3].myMap(n=>n*2);
console.log(polyMap);

/*
========================================================
9️⃣ POLYFILL: filter()
========================================================
*/

Array.prototype.myFilter = function(callback){
  const result = [];

  for(let i=0;i<this.length;i++){
    if(callback(this[i], i, this)){
      result.push(this[i]);
    }
  }

  return result;
};

const polyFilter = [1,2,3,4].myFilter(n=>n%2===0);
console.log(polyFilter);

/*
========================================================
🔟 POLYFILL: reduce()
========================================================
*/

Array.prototype.myReduce = function(callback, initialValue){
  let acc = initialValue;
  let start = 0;

  if(acc === undefined){
    acc = this[0];
    start = 1;
  }

  for(let i=start;i<this.length;i++){
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

const polyReduce = [1,2,3].myReduce((a,b)=>a+b,0);
console.log(polyReduce);

/*
========================================================
1️⃣1️⃣ Edge Cases (INTERVIEW BONUS)
========================================================

map → empty array returns empty
filter → if none match → []
reduce → no initial value → first element becomes acc
*/

/*
========================================================
1️⃣2️⃣ Performance Tip
========================================================

Chaining creates multiple arrays.
reduce can do in single loop.
*/

/*
========================================================
🔥 Interview One-Liners
========================================================

✔ map returns new array
✔ filter returns subset
✔ reduce returns single value
✔ all are immutable
✔ reduce is most powerful
✔ polyfills show deep understanding
*/

/*
========================================================
🔥 END OF FILE: map_filter_reduce_deep_dive.js
========================================================
*/