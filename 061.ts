class Animal01 {
    private name: string; //private 클래스 외부에서 접근 불가
    protected name2: string; //protected 상속까지만 접근 가능, 외부 불가
    public age: number = 10;//public 기본값
    constructor(theName: string) {
        this.name = theName;
    }

    animalCall(){
        this.name = "hi";
    }
}

let animal = new Animal01("Goat");
console.log(animal.age); //10

class Rhino extends Animal01 {
    constructor() {
        super("Rhino")
        // console.log(this.name); // 상속을 받았지만, 해당 값이 프라이빗이기 때문에 접근 불가
        console.log(this.name2);
    }
}

let rhino = new Rhino();
// console.log(rhino.name); // 상속을 받았지만, 해당 값이 프라이빗이기 때문에 외부 접근 불가
// console.log(rhino.name2); // 상속을 받았지만, 해당 값이 프로텍트이기 때문에 외부 접근 불가