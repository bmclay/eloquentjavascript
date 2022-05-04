//Higher Order Functions
//Functions that take another function as an argument

function giveNumber(x, action) {
    return action(x);
};

function makeNumberNegative(y){
    return -y;
}

console.log(giveNumber(9, makeNumberNegative));

//Filter function for arrays
let array = [1, 2, 3, 4, 5];

//See how filter allows you to look for something that meets a specified condition?
//for each element of the array "x", check if x <= 3  and return those elements.
let newArray = array.filter(x => x <= 3);
console.log(newArray)

//Map function for arrays
//manipulate each element of the array in a specified way.
//See how map simply adds one to each element of array (x).
let mappedArray = array.map(x => x + 1);
console.log(mappedArray)

//Reduce function for arrays
//Builds a value by repeatedly taking a single element from the array and combining it with the current value.
//Reduces the elements of the array to a single value
let reducedArray = array.reduce(
    (x,y) => x + y
);
console.log(reducedArray);

//Some function
//Checks if an array passes a conditional check and returns a boolean
let myBool = array.some(x => x > 10);
console.log(myBool);

//findIndex function
//returns the first index of the element of an array that matches a certain conditional.
//if there are no matches, it returns -1
console.log(array.findIndex(x => x > 2));
