const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise1');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise2');
  }, 2000);
});

Promise.customRace = function (promises) {
  const totalPromiseCount = promises.length;
  let currentPromiseStatus = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      currentPromiseStatus++;
      p.then((result) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
      });
    });
  });
};

Promise.customRace([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('ERROR:', error);
  });
