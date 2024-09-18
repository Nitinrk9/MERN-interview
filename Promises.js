const p = Promise.all([1, 2, 3]); //  Promise { [ 1, 2, 3 ] }
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]); // Promise { [ 1, 2, 3, 444 ] }
// const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);
// p3.then((res) => console.log(res)).catch((res) => console.log(res));

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log(p);
  console.log(p2);
  // p3.then((res) => console.log(res)).catch((res) => console.log(res.message)); //throws error
});

// 2nd ex
const p4 = Promise.all([]); // Will be immediately resolved
const p5 = Promise.all([1337, "hi"]); // Non-promise values are ignored, but the evaluation is done asynchronously
console.log(`Empty promise input `, p4);
console.log(`P5 `, p5);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p5);
});

// 3rd ex
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result))
);

//4th
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
