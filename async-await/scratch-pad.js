function networkCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve('promise resolved successfully');
      reject('promise was rejected');
    }, 1000);
  });
}
let response = undefined;
async function exceptionCheck() {
  const response = await networkCall();
  console.log(response);
}
exceptionCheck().catch((e) => {
  console.log(e);
  console.log('test', response);
});

// exceptionCheck();
