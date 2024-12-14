// function add(a, b) {
//   console.log(this);
// }

// add(1, 10);
// console.log(this);
// const add = (a, b) => {
//   console.log(this);
// };

// add(1, 2);

var person = {
  name: 'ruben',
  age: '31',
  innerFunction: () => {
    console.log('from inner function: ', this); // this will refer to the inner function invoker which is person object in this case
    var nestedFunction = () => {
      console.log(this); // this will refer to the `window/gloabal` object
    };
    nestedFunction();
  },
};

person.innerFunction();

// Normal function
const cap = {
  firstname: 'Steve',
  getName: function () {
    console.log(`getName: ${this.firstname}`);
    var inner = function () {
      console.log(`inner normal function: ${this.firstname}`);
    };
    inner();
  },
};

cap.getName();

// Arrow function
const cap_arrow = {
  firstname: 'Steve',
  getName: () => {
    console.log(
      `getName invoked : ${this.firstname}, this:${JSON.stringify(this)}`
    );
    var inner = () => {
      console.log(
        `innerfucntion now has access to outer function scope: ${this.firstname}`
      );
    };
    inner();
  },
};

cap_arrow.getName();

var d = {
  name: ' test',
  sayhi() {
    return () => {
      console.log(this);
    };
  },
};

d.sayhi()();
