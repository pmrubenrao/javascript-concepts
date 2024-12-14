Function.prototype.callCustom = function (context) {
  context = context || this;
  console.log(
    `what do have in context:${JSON.stringify(context)} and in this:${this}`
  );

  // Get all the arguments passed to our call function
  const args = Array.prototype.slice.call(arguments, 1);

  // now we add the function that we want to call via our "call" function
  const functionKey = Symbol();
  context[functionKey] = this;

  // calling the function as if it was called via actual function
  const result = context[functionKey](...args);

  // clean up the newly created function from the context object
  delete context[functionKey];

  return result;
};

const person_og = {
  name: 'Alice',
  greetFn: function (greeting) {
    console.log(`${greeting}, ${this.name}`);
  },
};
const person_nw = {
  name: 'Harry',
};

// person_og.greetFn.callCustom('Ola');
person_og.greetFn.callCustom(person_nw, 'olla');
