const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise2');
  }, 2000);
});

Promise.customAny = function (promises) {
  const totalPromiseCount = promises.length;

  let erroredPromisesCounter = 0;

  let erroredPromises = [];

  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((result) => {
        resolve(result);
      }).catch((error) => {
        erroredPromisesCounter++;

        erroredPromises[index] = error;

        if (erroredPromisesCounter === totalPromiseCount) {
          reject(
            new AggregateError(erroredPromises),
            'All Promises are rejected'
          );
        }
      });
    });
  });
};

Promise.customAny([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('ERROR:', error, error.errors);
  });
