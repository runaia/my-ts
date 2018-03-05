abstract class Department { //추상 클래스는 그 자체의 인스턴스를 만들지 않는 클래스
    constructor(public name: string) {}

    printName(): void {
        console.log("Department name: " + this.name);
    }

    //추상 함수의 내용을 만들지 않는다. 이렇게 선언해 놓는것을 Declaration 이라고 한다.
    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }
    
    //이렇게 만들어 준다. 이렇게 수행해 주는것을 implementation 이라 한다.
    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
        
    }
}

let department: Department; //추상 클래스는 인스턴스를 만들지 않기 때문에 그자체로~
// department = new Department(); // abstract 인스턴스를 만들수 없다.
department = new AccountingDepartment();
department.printName();
department.printMeeting();
//department.generateReports(); //추상클래스를 상속받은 클래스는 부모에서 선언된 메소드가 아니면 만들 수 없다.