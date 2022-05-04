//create an array containing a range of numbers from start to end.
//note: third argument is step which defines the amount to increment by, up or down depending on if start is less than or greater than end. 
function range(start, end, step = start < end ? 1 : -1) {
    let arr = []
    if(step > 0) {
        for (let i = start; i <= end; i += step) arr.push(i);
    } else {
        for (let i = start; i >= end; i += step) arr.push(i);
    }
    return arr;
}

console.log(range(1, 10));
console.log(range(100, 10, -10));

//return the sum of all the numbers in the array.
function sum(arr) {
    let answer = 0;
    for(let number of arr) {
        answer += number;
    }
    return answer;
}

console.log(sum(range(1,10)));
console.log(sum(range(10, 100, 10)));

//Also interesting, log out all the properties available for a specified object.
let arr = range(1, 10);
console.log(Object.getOwnPropertyNames(arr));

//Notice all the indices are listed as properties of the array, along with length.