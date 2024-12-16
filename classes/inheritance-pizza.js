class Pizza {
  static totalPizzaOrdered = 0; // Static variable belongs to the class itself and not individual instances.

  // Static method has access to static variables.
  static calculateTotalPizzaOrdered() {
    console.log(`Total pizzas ordered: ${Pizza.totalPizzaOrdered}`);
  }

  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
    Pizza.totalPizzaOrdered += 1; // Increment the static variable
  }

  describeMyPizza() {
    console.log(
      `Your pizza has ${this.toppings} topping, ${this.size} size, with ${this.crustType} crust.`
    );
  }
}

class StuffPizza extends Pizza {
  constructor(toppings, size, crustType, stuffings) {
    super(toppings, size, crustType);
    this.stuffings = stuffings;
  }

  describeStuffing() {
    console.log(`This pizza has ${this.stuffings} stuffings in the crust.`);
  }

  // Method overriding: This child method replaces the `describeMyPizza` method in the parent class.
  describeMyPizza() {
    console.log(`This is a stuffed pizza with the following details:`);
    super.describeMyPizza(); // Optionally include parent description
    this.describeStuffing(); // Correctly invoke the method
  }
}

const order1 = new StuffPizza('cheese', 'medium', 'thick', 'cheese and garlic');
const order2 = new StuffPizza(
  'less-cheese',
  'large',
  'thin',
  'mushroom delight'
);

order1.describeMyPizza(); // Test the overridden method
order2.describeMyPizza();

order1.describeStuffing(); // Test child-specific methods
order2.describeStuffing();

Pizza.calculateTotalPizzaOrdered(); // Test static method
