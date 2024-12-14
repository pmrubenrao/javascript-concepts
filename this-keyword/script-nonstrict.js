// function example() {
//   console.log(this);
// }
// window.example();

// var person = {
//   name: 'ruben',
//   age: '31',
//   getname: function () {
//     console.log(this.name);
//   },
// };

// person.getname();

// this inside nested function
var person = {
  name: 'ruben',
  age: '31',
  innerFunction: function () {
    console.log('from inner function: ', this); // this will refer to the inner function invoker which is person object in this case
    var nestedFunction = function () {
      console.log(this); // this will refer to the `window/gloabal` object
    };
    return nestedFunction();
  },
};

person.innerFunction(); // --> Transformed to nestedFunction() and nestedFunction is called without any other object and its being adopted or called by nestedFunction()
