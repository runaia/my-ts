namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    
    export class LetterOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
    
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}


let strings1 = ["Hello", "98052", "101"];

// 외부에서 사용이 가능. 왜? export 해줬기 때문.
// 왜 네임스페이스(Validation)를 해줬나? 인터페이스와 클래스들을 하나로 묶어주기 위해서
let validators1: { [s: string]: Validation.StringValidator; } = {};
validators1["ZIP code"] = new Validation.ZipCodeValidator();
validators1["Letters only"] = new Validation.LetterOnlyValidator();

for (let s of strings1) {
    for (let name in validators1) {
        let isMatch = validators1[name].isAcceptable(s);
        console.log(`'${ s } ${ isMatch ? "matches" : "does not match"} '${ name }'.`);
    }
}
