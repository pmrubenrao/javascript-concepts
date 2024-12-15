const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise-1');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise-2');
  }, 2000);
});

Promise.customAny = function (promiseArray) {
  return new Promise((resolve, reject) => {
    let counter = 0;
    let erroredPromises = [];
    promiseArray.forEach((promise, index) => {
      promise
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          counter++;

          erroredPromises[index] = error;
          console.log(erroredPromises);
          if (promiseArray.length === counter) {
            reject(
              new AggregateError(erroredPromises),
              'All promises were rejected.'
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
    console.log('ERROR:', error, error.errors, error.message);
  });
