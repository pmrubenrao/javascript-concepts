let a = 10;

function test() {
  console.log(a);
  let a = 20;
  a++;
  console.log(a);
  if (a) {
    let a = 30;
    a++;
    console.log(a);
  }
  console.log(a);
}

test();

// Notes
// The code has a problem with variable shadowing and the temporal dead zone (TDZ) caused by the let keyword.
// Let’s break it down step by step:

// Key Concepts:

// Temporal Dead Zone (TDZ):
// Variables declared with let or const are in a "temporal dead zone" from the start of the block until the declaration is encountered.
// During this period, accessing the variable results in a ReferenceError.

// Variable Shadowing:
// When a variable is declared in a nested scope with the same name as a variable in an outer scope, it shadows the outer variable.
