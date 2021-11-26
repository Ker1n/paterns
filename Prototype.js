class TeslaCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce () {
        return new TeslaCar(
            this.model,
            this.price,
            this.interior,
            this.autopilot
        );
    }
}

// Produce base auto
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

// Cloning of base auto

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

let discount = 300;

// Changes for particular auto
car1.interior = 'white';
car1.autopilot = true;
car1.price = car1.price - discount;

console.log(car1);
console.log(car2);
console.log(car3);

