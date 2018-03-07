
//제네릭
function identity<T>(arg: T): T {
    return arg;
}

let output = identity(25);
console.log(output);
