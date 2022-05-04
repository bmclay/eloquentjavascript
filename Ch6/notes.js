//Object Oriented Programming

//Encapsulation - Separating interface from implementation.
//Divide programs into smaller pieces and make each piece responsible for managing its own state.
//Interfaces - limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation.
//Modeled using objects
//Properties that are part of the interface are called public. Those that the outside code shouldn't touch are called private.
//Private property names should start with _

//Methods - properties that hold function values.
// let person = {};
// person.speak = function(line) {
//     console.log(`The person says "${line}"`);
// };

// person.speak("I'm alive.");

//When a function is called as a method—looked up as a property and immediately called, as in object.method()—the binding called this in its body automatically points at the object that it was called on.

function speak(line) {
    return `The ${this.attribute} person says "${line}"`;
}
let tallPerson = {attribute: "tall", speak};
let shortPerson = {attribute: "short", speak};

tallPerson.speak("I am so tall, " + "therefore I can reach the top shelf!");
shortPerson.speak("I will not be able to reach the top shelf");

//this
//think of this as an extra parameter that is passed in a different way.
//passing this explicitly - use a functions call method which takes this value as its first argument and treats further arguments as normal parameters.
//ex: 

speak.call(tallPerson, "I can dunk a basketball.");
speak.call(shortPerson, "I can fit into the crawl space!")

//Arrow functions do not bind their own this but can see the this binding of the scope around them.
//
//
//

let protoPerson = {
    speak(line) {
        return `The ${this.attribute} person says "${line}"`;
    }
};

let fatPerson = Object.create(protoPerson);
fatPerson.attribute = "fat";
fatPerson.speak("Where is the cake?")

//Constructor functions
function makePerson(attribute) {
    let person = Object.create(protoPerson);
    person.attribute = attribute;
    return person;
}

