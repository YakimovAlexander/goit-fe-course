class Car {
  constructor({ price, maxSpeed }) {
    this.speed = 0;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  static getSpecs(car) {
    return console.log(`
      maxSpeed: ${car._maxSpeed}, 
      speed: ${car.speed}, 
      isOn: ${car.isOn}, 
      distance: ${car.distance}, 
      price: ${car._price}`);
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (value <= this._maxSpeed) {
      return (this.speed += value);
    }
    return this.speed;
  }

  decelerate(value) {
    if (this.speed > 0) {
      this.speed = this.speed - value;
    }
    return this.speed;
  }

  drive(hours) {
    if ((this.isOn = true)) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 
