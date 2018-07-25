// Exercise 1 - How was your TypeScript Class?
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk(): void {
        console.log("Tooooooooooot!");
    }

    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
abstract class BaseObject {
    width: number = 0;
    length: number = 0;

    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }

    abstract calcSize(): number;
}
class Rectangle extends BaseObject {
    calcSize(): number {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle(5,2);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName: string = "";

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}
const person = new Person();
person.firstName = "Ma";
console.log(person);
person.firstName = "Maximilian";
console.log(person);
