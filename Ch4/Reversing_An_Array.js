//There is a built in reverse method that will do all this for you...
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numArray.reverse());

//The challenge in the book doesn't allow it to be used, so this is how you can do it:

function reverseArray (array) {
    newArray = [];
    for(let i = 0; i = array.length; i++) {
        let item = array.pop();
        newArray.push(item);
    }
    return newArray
}

let thisArray = [1, 'ticket', 2, 'the monkey', 7.543];
console.log(reverseArray(thisArray));

//Reversing the array in place is harder. You have to be careful not to overwrite elements that you will later need. Using reverseArray or otherwise copying the whole array (array.slice(0) is a good way to copy an array) works but is cheating.

// The trick is to swap the first and last elements, then the second and second-to-last, and so on. You can do this by looping over half the length of the array (use Math.floor to round down—you don’t need to touch the middle element in an array with an odd number of elements) and swapping the element at position i with the one at position array.length - 1 - i. You can use a local binding to briefly hold on to one of the elements, overwrite that one with its mirror image, and then put the value from the local binding in the place where the mirror image used to be.

function reverseArrayInPlace(array) {
    for(i = 0; i < Math.floor(array.length / 2); i++) {
        let item = array[i];
        array[i] = array[array.length -1 -i];
        array[array.length -1 -i] = item;
        
    }
    return array;
}

console.log(reverseArrayInPlace([1, 2, 7, 'idiot']));