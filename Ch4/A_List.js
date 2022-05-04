//WIP

function arrayToList(array) {
    let list = null;
    for(i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

let newList = arrayToList([1, 2, 3]);
newList

function listToArray(list) {
    let arr = [];
    for (i = list.length - 1; i >=0; i--) {
        arr.push(list[i]);
    }
    return arr;
}

console.log(listToArray(newList));