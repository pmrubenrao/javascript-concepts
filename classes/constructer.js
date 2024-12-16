// Constructer function are the blueprint for creating the object of similar type

function Person(name, age) {
  // whenever a new constructor is created this object is assigned with new empty object
  // const this = {}
  this.name = name;
  this.age = age;

  // and the constructor function return this object implictly
}

var person1 = new Person('ruben', 30);
var person2 = new Person('batman', 31);
console.log(person1, person2);

// The value of this keyword points to the new object that will be created,
// which happen when any new instance created via `var person = new Person('ruben', 30);`
