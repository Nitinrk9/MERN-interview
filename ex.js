const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.race([pErr, pSlow, pFast])
  .then((value) => {
    console.log(value);
    // pFast fulfills first
  })
  .catch((res) => {
    console.log(res);
  });

const arr1 = ["a", "b"];
const arr2 = ["b", "a"];
console.log(
  arr1.sort() === arr1,
  arr2.sort() === arr2,
  arr1.sort() === arr2.sort()
);

const myset = new Set([{ a: 1 }, { a: 1 }]);
console.log([...myset]);

const user = {
  name: pErr,
  age: {
    x: 15,
  },
};

Object.freeze(user);
user.age.x = 55;
console.log(user.age.x);

async function f() {
  let res = "first";
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
  });
  console.log(res);
  res = await promise;
  console.log(res);
}
f();

console.log("Ress" + typeof "10" / 5 + typeof 5);

var x = 5;
(function () {
  console.log(x);
  var x = 10;
  console.log(x);
})();

// adding comment just to create version 2 for git study
console.log(typeof NaN);

// adding comment just to create version 3 for git study

// adding comment to learn undo changes various cases. this is version 4

// Version 5 after commiting local files to remote repo on github
