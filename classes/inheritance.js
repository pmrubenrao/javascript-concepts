class Vehicle {
  constructor(speed, fuel, color) {
    this.speed = speed;
    this.fuel = fuel;
    this.color = color;
  }

  startIgnition() {
    console.log(`Starting main engine`);
  }

  stopIgnition() {
    console.log(`Killing main engine`);
  }
}

class Car extends Vehicle {
  constructor(speed, fuel, color, door) {
    super(speed, fuel, color);
    this.door = door;
  }

  openTrunk() {
    console.log(`Opening car trunk`);
  }
}

const mycar1 = new Car(400, 'petrol', 'black', 4);
mycar1.startIgnition();
mycar1.stopIgnition();
mycar1.openTrunk();
