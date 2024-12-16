function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.getFullname = function () {
  console.log(`${this.firstname} ${this.lastname}`);
};

const person1 = new Person('ruben', 'rao');

person1.getFullname();

// Array
const arr1 = new Array(1, 2, 3, 4);
console.log(arr1.__proto__);

//Object
const Vehicle = {
  name: 'Aston martin',
};

console.log(Vehicle);
