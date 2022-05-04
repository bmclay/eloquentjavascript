let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(['Pizza', 'Bike', 'Chocolate'], true);
// console.log(journal);

addEntry(['Tacos', 'Sky diving', 'Movie night'], false);
// console.log(journal);
// console.log(journal[0]);

addEntry(['Coffee', 'Breakfast Sandwich', 'Yard Work'], false);

//access each list of events
// for(let entry of journal) {
//     console.log(`Events: ${entry.events}`);
// }

console.log(journal[1].events);