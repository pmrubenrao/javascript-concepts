function Animal(type) {
  this.type = type;
}

Animal.prototype.getType = function () {
  return this.type;
};

const dog = new Animal('Mammal');
console.log(dog);

console.log(dog.getType());
console.log(dog.toString());
