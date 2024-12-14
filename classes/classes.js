class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.randomvar = 'random_property';
  }

  sayHi() {
    console.log(`${this.name} is saying Hi to everyone ${this.randomvar}`);
  }
}

const person1 = new Person('ruben', 35);
const person2 = new Person('batman', 35);
person1.sayHi();
person2.sayHi();

class Pizza {
  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
  }

  describeMyPizza() {
    console.log(
      `Your has ${this.toppings} topping with ${this.size} having ${this.crustType}`
    );
  }
}

const order1 = new Pizza('cheese', 'medium', 'thick');
const order2 = new Pizza('less-cheese', 'large', 'thin');

order1.describeMyPizza();
order2.describeMyPizza();
