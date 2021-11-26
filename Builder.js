class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot(autoPilot) {
        this.car.autoPilot = autoPilot;
        return this
    }
    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }
    addSignaling(signaling) {
        this.car.parktronic = signaling;
        return this;
    }
    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }
    build() {
        return this.car;
    }
}


class Car {
    constructor() {
        this.autoPilot = false;
        this.parktronic =false;
        this.signaling = false;
    }
}

const myCar = new CarBuilder()
    .addAutoPilot(true)
    .addParktronic(true)
    .updateEngine('V8')
    .build()

const myCarDefault = new CarBuilder()

console.log(myCar);
console.log(myCarDefault);
