// console.log(this);

// function test() {
//   console.log(this);
// }
// test();

// console.log(global);

var person = {
  name: 'ruben',
  age: '31',
  innerFunction: function () {
    console.log('from inner function:', this); // this will refer to the inner function invoker which is person object in this case
    var nestedFunction = () => {
      console.log('from nested function:', this); // this will refer to the `window/gloabal` object
    };
    nestedFunction();
  },
};

person.innerFunction();
