class BmwFactory {
    create(type) {
        if (type === 'X5') {
            return new Bwm(type, 108000,300);
        }
        if (type === 'X6') {
            return new Bwm(type, 111000,320);
        }
    }
}

class Bwm {
    constructor(model, price, maxSpeed) {
       this.model = model;
       this.price = price;
       this.maxSpeed = maxSpeed;
    }
}

const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');
console.log(x5);
console.log(x6);

