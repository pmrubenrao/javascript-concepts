class Pizza {
  static totalPizzaOrdered = 0; // static variable that belongs to class as compared and not the instance like order1 and order2

  // Below  is the static method which will have access to the static method.
  static calculateTotalPizzaOrdered() {
    console.log(Pizza.totalPizzaOrdered);
  }

  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
    Pizza.totalPizzaOrdered += 1;
  }

  describeMyPizza() {
    console.log(
      `Your has ${this.toppings} topping with ${this.size} having ${this.crustType}`
    );
  }
}

class stuffPizza extends Pizza {
  constructor(toppings, size, crustType, stuffings) {
    super(toppings, size, crustType);
    this.stuffings = stuffings;
  }

  describeStuffing() {
    console.log(`This is pizza has ${this.stuffings} stuffings in the crust.`);
  }

  // Method overriding - we are overriding the defination of the describeMyPizza defined in parent class Pizza
  // Here we override the parent method describeMyPizza with the child method describeStuffing and
  describeMyPizza() {
    // super.describeMyPizza(); // this is how we call the method of the parent class
    this.describeStuffing; // Since this will belong the instance i.e order1/order2
  }
}

const order1 = new stuffPizza('cheese', 'medium', 'thick', 'cheese and garlic');
// const order2 = new stuffPizza(
//   'less-cheese',
//   'large',
//   'thin',
//   'mushroon delight'
// );

// order1.describeMyPizza();
// order2.describeMyPizza();

order1.describeStuffing();
// order2.describeStuffing();
Pizza.calculateTotalPizzaOrdered();
