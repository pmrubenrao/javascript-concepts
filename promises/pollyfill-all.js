const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First promise::');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Second promise RESOLVED');
    resolve('Second promise::');
  }, 2000);
});

// Promise.all([promise1, promise2])
//   .then((val) => {
//     console.log(val, 'resolved ');
//   })
//   .catch((error) => {
//     console.log(error, 'rejected');
//   });

Promise.customPromiseAll = function (promiseHolder) {
  let totalPromise = promiseHolder.length;
  let promisesResolved = 0;
  const resolvedPromises = [];

  return new Promise((resolve, reject) => {
    promiseHolder.forEach((p, index) => {
      p.then((val) => {
        resolvedPromises[index] = val;
        promisesResolved++;
        if (totalPromise === promisesResolved) {
          resolve(resolvedPromises);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  });
};

Promise.customPromiseAll([promise1, promise2])
  .then((val) => {
    console.log('SUCCESS: ', val);
  })
  .catch((error) => {
    console.log('ERROR: ', error);
  });
