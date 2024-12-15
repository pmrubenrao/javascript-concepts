const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('First');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Second');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Third');
  }, 3000);
});

// All the promise must to be resolved
// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('SUCCESS Promise.all()', values);
//   })
//   .catch((e) => {
//     console.log('ERROR: FROM Promise.all()', e);
//   });

// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log('SUCCESS promise.any()', result);
//   })
//   .catch((error) => {
//     console.log('ERROR, promise.any() failed', error);
//   });

// The promise that resolves or reject first will be given precendence.
// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log('SUCCESS Promise.race()', result);
//   })
//   .catch((error) => {
//     console.log('ERROR: FROM Promise.race()', error);
//   });

// The promise which got successfully resolved will be given precendence
// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log('SUCCESS Promise.any()', result);
//   })
//   .catch((error) => {
//     console.log('EROOR: FROM Promise.any()', error.errors);
//   });

Promise.allSettled([promise1, promise2, promise3]).then((result) => {
  console.log('SUCCESS Promise.allSettled()', result);
});
