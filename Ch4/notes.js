//run this in repl to get better understanding of each snippet

//Array
let x = ["one", "two", "three", "one"];

x.length;
x["length"];
x[0].toUpperCase();

//indexOf searches through the array for a specified value. The index is returned if found. -1 is returned if a value isnt found.
x.indexOf("three");
x.indexOf("seven");
//to search from the end first, use the lastIndexOf() method.
x.lastIndexOf("one");
//both functions take an optional second argument which is a number that indicates where to start searching:
x.indexOf("one", 2);

//You can add or remove elements from an array with the push() and pop() methods. pop() returns the value that was removed.
x.push("four");
x.pop();

//unshift() and shift() add / remove values at the beginning of the array:
x.unshift("zero");
x
x.shift();

//slice() method takes start and end indices and returns an array that has only the elements between them. start index is inclusive the end index is exclusive.
//if you leave out both start and end you will get the entire array.
//if you leave out the end index, you get from the specified position to the end of the array.
let peice = x.slice(2,4)

//concat operator is used to glue arrays together to create a new array.
let partOne = ["A", "B", "C"];
let partTwo = ["D", "E", "F"];
partOne.concat(partTwo);
//If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one element array.
partOne.concat("D", "E", "F", "G")

//Strings 
//you cant set properties on strings, but there are builtins that are useful
"coconuts".slice(4, 7);
"coconut".indexOf("u");
"tree".indexOf("ee");

let spaceSentance = "   The sentance is surrounded by spaces.   ";
let trimSentance = spaceSentance.trim();

String(5).padStart(2, "$");

let words = "Car Paper Fort Christmas Phone Leopard";
let individualWords = words.split(" ");
individualWords.join(" || ");

" ring ".repeat(8);

//Objects
let objectX = {first:4, second:5, 3: "three"};
let newObjectX = {};
objectX["3"];
objectX.first;
//Unary operators for objects
// delete objectX.first;
"second" in objectX;
let keys = Object.keys(objectX);
Object.assign(newObjectX, objectX);
Object.keys(newObjectX);
objectX === newObjectX;
let newObject2 = objectX;
newObject2 == objectX;
newObject2 === objectX;
objectX.fourth = "4th prop";
newObject2.fourth;
"fourth" in objectX;

//Mutability
//Numbers, strings and Booleans are immutable
//Objects are mutable
let y = "Five";
newObject2.fourth = "seven";

//const vs let
//consts cant be changed, lets can

//Objects with just a properyt name will have the value populated from the binding with the same name.
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["first", "second", "third"], true);
journal;

const score = {home: 1, away: 0};
score.home = 2;
score;

//Rest Parameters
//Allow a function to take any number of arguments

function max(...numbers) {
    let result = -Infinity;
    for(let number of numbers) {
        if(number > result) result = number;
    }
    return result;
}
//See the call to max can take as many numbers as you pass into it now
max(1, 9, 3, 10, 11, 2, 13, 69, -68, 9);
//You can spread out a separate array to pass each element of the array one at a time:
let numbers = [1, 3, 9, 0, 39, 10, 333, 123];
max(...numbers);

//The Math object
Math.PI

Math.random()

Math.floor(Math.random() * 10);

Math.ceil(Math.random(0) * 10);

Math.round(Math.random() *10);

Math.abs(-1234);

//JSON
//JavaScript gives us the functions JSON.stringify and jSON.parse to convert data to and from JSON format.
//So to turn a string into JSON, use JSON.stringify

let string = JSON.stringify({squirrel: false, events: ["weekend"]})
string
JSON.parse(string).events



