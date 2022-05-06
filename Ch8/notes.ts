// TypeScript
// TypeScript is a syntactic superset of JavaScript which adds static typing.
// This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
// TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
// TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.

// The typescript compiler needs to be installed from within your npm project.
// npm install typescript --save-dev 

// Ways Typescript assigns type: Explicit and Implicit.
// Explicit means you write out the type as in:

let firstName: string = "Bob";

let age: number = 42;

let employed: boolean = true;

//Set an array to use a data type
let ids: number[] = [1, 2, 3, 4, 5 ]

let arr: any[] = [1, 2, true, "Jimmy"]

// tuple - specified order
let person: [number, string, boolean] = [1, "Sammy", true]

// tuple array
let employee: [number, string][]

employee = [
    [1, "Bill"],
    [2, "Georgio"],
    [3, "Lenny"]
]

// prevent the array from being changed:
let array1: readonly string[] = ["one", "two", "buckle", "my", "shoe"]

// union
let pid: string | number
pid = 22

// Enum
// Define a set of named constants numeric or string.
enum Direction1 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}

//Objects

type User = {
    id: number,
    name: string
}

const user: User ={
    id: 1,
    name: "Bill"
}

console.log(user.name);

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number
customerId = 9

// Functions
function multiply(x: number, y: number): number {
    return x * y;
}

console.log(multiply(6, 7));


