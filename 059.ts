class Greeter {
    greeting: string;
     //constructor 일종의 init 같은 것
    constructor(message: string) {
        this.greeting = message; //this 는 일종의 self
    }
    greet():string { // function을 생략하네? 리턴 타입을 생략해도 되더군
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet());