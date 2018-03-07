import valudate from "./StaticZipCodeValidator";

let strings = ["Hello", "98052", "101"];

strings.forEach(s => {
    console.log(`"${s}" ${valudate(s) ? "matches" : "does not match"}`);
    // console.log(s + " " + `${valudate(s) ? "matches" : "does not match"}`);
})
