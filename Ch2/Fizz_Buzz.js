for (count = 1; count <= 100; count++) {
    let fizz = Boolean(count % 3 == 0);
    let buzz = Boolean(count % 5 == 0);
    if (fizz && buzz){
        console.log("FizzBuzz");
    } else if(fizz){
        console.log("Fizz");
    } else if (buzz){
        console.log("Buzz");
    } else {
        console.log(count);
    }
}