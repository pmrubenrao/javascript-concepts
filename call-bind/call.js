const person_og = {
  name: 'Alice',
  greetFn: function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  },
};
const person_nw = {
  name: 'Harry',
};

person_og.greetFn.call(person_nw, 'olla ');
person_og.greetFn('hola');
person_og.greetFn.call(person_og, 'olla ');
