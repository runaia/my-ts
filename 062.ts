class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee00 extends Person {
    //private 으로 해줘서 독립적으로 접근할 수 없고
    private department: string;
    
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    //클래스 내 메소드를 통해서 출력되도록 유도
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`
    }
}

let howard = new Employee00("Howard", "Sales");
console.log(howard.getElevatorPitch());

