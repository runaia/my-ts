var global_num = 12;

class Numbers {
    //class variable
    num_val = 13;
    
    //static field
    static sval = 10;
    
    storeNum(): void {
        //function variable
        var local_num = 14;
    }
}

console.log("Global num: " + global_num);
console.log(Numbers.sval);

var obj2 = new Numbers();
console.log("Class num: " + obj2.num_val);
