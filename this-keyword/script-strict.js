'use strict';

// console.log(this);

// // inside a function

// function test() {
//   console.log(` this inside a test function ${this}`); // undefined as this is supposed to undefined in the global scope
// }

// test();

var person = {
  name: 'ruben',
  age: '31',
  innerFunction: function () {
    console.log('from inner function:', this); // this will refer to the inner function invoker which is person object in this case
    var nestedFunction = function () {
      console.log('from nested function', this); // this will refer to the `window/gloabal` object
    };
    return nestedFunction();
  },
};

person.innerFunction(); // --> Transformed to nestedFunction() and nestedFunction is called without any other object and its being adopted or called by nestedFunction()
