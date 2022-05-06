"use strict";

// Since use strict is on, calling countTo100 will throw an ReferenceError at runtime, because x is not defined... for example using let
function countTo100() {
    for( x = 0; x <= 100; x++) {
    console.log(x);
    }
};

// console.log(countTo100());

// See notes.ts for typescript section

// Testing
// Use of console.log / developer tools in the browser to diagnose where a certain issue may be occurring
// Also, vscode has the repl extension that helps me personally with debugging

// Error propagation
// when writing the program you need to make a decision as to if you want to report the issue to the user or not and just to keep rolling. Either way the program has to do something in response to said issue. The book talks about the function below, promptNumber, that takes a number and returns it. What if a user enters something that isn't actually a number, like a string value...
// Ex:
function promptNumber(question) {
    let result = Number(prompt(question));
    if (Number.isNaN(result)) return null; // We handled this condition by returning null.
    else return result;
}

// console.log(promptNumber("why is this not correct?"));

