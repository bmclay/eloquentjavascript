
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

const countBs = (x) => {
    let Bcount = 0;
    for(i = 0; i < x.length; i++){
        if(x[i] == "B") {
            Bcount++;
        }
    }
    return Bcount;
}

console.log(countBs("Bobby Boucher"));


// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

const countChar = (x, y) => {
    let charCount = 0;
    for(i = 0; i <x.length; i++){
        if(x[i] == y){
            charCount++;
        }
    }
    return charCount;
}

console.log(countChar("kakkerlak", "k"))