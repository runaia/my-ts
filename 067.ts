function buildNames(firstName: string, lastName?:string, sir:string = ""): string {
    return sir + firstName + " " + lastName;
}

let result1 = buildNames("Bob");
let result2 = buildNames("Bob", "Adams", "Sr.");
let result3 = buildNames("Bob", "Adams");

console.log(result1);
console.log(result2);
console.log(result3);
