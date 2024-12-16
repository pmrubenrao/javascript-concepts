function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const person_og = {
  name: 'Old-Alice',
};
const person_nw = {
  name: 'New-Harry',
};

const greetHarry = greet.bind(person_nw, 'Ola');
const greetAlice = greet.bind(person_og, 'Hello');

greetAlice();
greetHarry();
