const instance1 = {
    name: 'singleton'
}

const instance2 = {
    name: 'singleton'
}
console.log(instance1 === instance2);

let instance;

class Counter {
    constructor() {
        if (typeof Counter['instance'] === 'object') {
            return Counter['instance'];
        }
        this.count = 0;
        Counter['instance'] = this;
        return this
    }

    getCount() {
        return this.count;
    }
    increaseCount() {
        return this.count++;
    }
}

const myCount1 = new Counter();
const myCount2 = new Counter();



myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount());
console.log(myCount2.getCount())
