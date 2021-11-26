class Car {
    constructor() {
        this.price = 10000;
        this.model = 'Car';
        this.color = 'black'
    }

    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.model;
    }
}



class Tesla extends Car{
    constructor() {
        super();
        this.price = 90000;
        this.model = "Tesla"
    }
}


class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 5000;
    }
}

class Parktronic {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 3000;
    }

    getDescription() {
        return `this parktronic`
    }
}


let tesla = new Tesla();

tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);

console.log(tesla.getPrice(), tesla.getDescription());

