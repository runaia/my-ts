var i: number = 1;

while (i <= 10) {
    console.log(i)

    if (i % 5 == 0) {
        console.log("The first multiple of 5 between 1 and 10 is : " + i)
        break;
    }

    i++
}

console.log("the end")