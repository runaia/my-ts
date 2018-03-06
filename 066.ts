//Function Types

let z: number = 0;

//일반적인 함수 구조
function add(x: number, y: number): number {
    return x + y;
};

//익명함수
let myAdd = function(x:number, y:number): number {
    return x + y;
};

console.log(myAdd(2, 3));

console.log(add(4, 3));
