
/********************************************************
 * Topic: Promise APIs Deep Dive (all, race, any, allSettled)
 * Author: Ashutosh Choubey (JS Interview Prep)
 ********************************************************/

/*
========================================================
0️⃣ Interview Starter (MEMORIZE 🔥)
========================================================

Promise APIs:

Promise.all        → all success or fail fast
Promise.allSettled → wait for all (success + fail)
Promise.race       → first settled wins
Promise.any        → first success wins

INTERVIEW LINE:
"all fails fast, race finishes fast,
any waits for first success,
allSettled waits for everyone."
*/

/*
========================================================
1️⃣ Promise.all() 🔥
========================================================

Rules:
- All promises must resolve
- If one rejects → whole rejects
- Returns array of results
*/

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1,p2,p3])
.then(res => console.log(res)); 
// [1,2,3]

/*
Fail case
*/

const f1 = Promise.resolve("ok");
const f2 = Promise.reject("error");
const f3 = Promise.resolve("done");

Promise.all([f1,f2,f3])
.then(console.log)
.catch(err => console.log(err));
// error (fails fast)

/*
Interview Trap:
Only first error returned
*/

/*
========================================================
2️⃣ Promise.allSettled() 🔥
========================================================

Rules:
- Waits for all
- Never rejects
- Returns status objects
*/

Promise.allSettled([f1,f2,f3])
.then(res => console.log(res));

/*
Output:
[
 {status:"fulfilled", value:"ok"},
 {status:"rejected", reason:"error"},
 {status:"fulfilled", value:"done"}
]
*/

/*
Use case:
Show all API results even if some fail
*/

/*
========================================================
3️⃣ Promise.race() 🔥
========================================================

Rules:
- First settled promise wins
- Can be resolve OR reject
*/

const r1 = new Promise(res=>setTimeout(()=>res("fast"),100));
const r2 = new Promise(res=>setTimeout(()=>res("slow"),500));

Promise.race([r1,r2])
.then(console.log);
// fast

/*
Reject case
*/

const r3 = new Promise((_,rej)=>setTimeout(()=>rej("fail"),50));
const r4 = new Promise(res=>setTimeout(()=>res("ok"),200));

Promise.race([r3,r4])
.then(console.log)
.catch(console.log);
// fail

/*
Use case:
timeout implementation
*/

/*
========================================================
4️⃣ Promise.any() 🔥🔥🔥
========================================================

Rules:
- First fulfilled wins
- Ignores rejects
- If all reject → AggregateError
*/

const a1 = Promise.reject("err1");
const a2 = Promise.resolve("success");
const a3 = Promise.reject("err3");

Promise.any([a1,a2,a3])
.then(console.log);
// success

/*
All fail case
*/

Promise.any([
  Promise.reject("e1"),
  Promise.reject("e2")
])
.catch(err => console.log(err));
// AggregateError

/*
========================================================
5️⃣ Comparison Table 🔥
========================================================

all:
✔ all must pass
❌ fails fast

allSettled:
✔ waits all
✔ never fails

race:
✔ first finish wins

any:
✔ first success wins
❌ ignores fails
*/

/*
========================================================
6️⃣ Output Based Questions
========================================================
*/

Promise.all([
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3)
])
.then(console.log)
.catch(console.log);
// 2

/*
*/

Promise.race([
  new Promise(res=>setTimeout(()=>res(1),200)),
  new Promise(res=>setTimeout(()=>res(2),100))
])
.then(console.log);
// 2

/*
*/

Promise.any([
  Promise.reject("x"),
  Promise.resolve("y"),
  Promise.resolve("z")
])
.then(console.log);
// y

/*
========================================================
7️⃣ Real Interview Use Cases
========================================================

Promise.all:
load multiple APIs together

Promise.race:
timeout logic

Promise.any:
fetch from multiple servers

Promise.allSettled:
analytics dashboards
*/

/*
========================================================
8️⃣ Polyfill: Promise.all (INTERVIEW 🔥)
========================================================
*/

function myAll(promises){
  return new Promise((resolve,reject)=>{
    let results = [];
    let completed = 0;

    promises.forEach((p,i)=>{
      Promise.resolve(p).then(val=>{
        results[i] = val;
        completed++;

        if(completed === promises.length){
          resolve(results);
        }
      }).catch(reject);
    });
  });
}

/*
Test polyfill
*/

myAll([Promise.resolve(1),Promise.resolve(2)])
.then(console.log);

/*
========================================================
9️⃣ Interview Traps
========================================================

❌ Promise.all does NOT wait after reject
❌ race can reject first
❌ any throws AggregateError
❌ allSettled never rejects
*/

/*
========================================================
🔥 One-Liners
========================================================

✔ all → all success
✔ race → first finish
✔ any → first success
✔ allSettled → wait all
✔ all fails fast
✔ any ignores fail
*/