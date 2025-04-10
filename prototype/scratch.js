const person = {
  greet: function () {
    console.log('Hello!');
  },
};

// const john = Object.create(person);
// john.greet();

const john = new person();
