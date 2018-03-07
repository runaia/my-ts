
//Rest Parameter 
function buildName(firstName: string, ...restOfName: string[]): string {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log(arguments[4]);
    
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinZie");
console.log(employeeName);
