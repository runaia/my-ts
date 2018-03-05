class Animal00 {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// let cat1 = new Animal("yami");
// console.log(cat1.move(1));


class Cat extends Animal00 {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Yaoong...");
        super.move(distanceInMeters);
    }
}

let cat2 = new Cat("shame");
console.log(cat2.name);
console.log(cat2.move());
console.log(cat2.move(10));



