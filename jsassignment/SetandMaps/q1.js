const readline = require('readline');
const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function arrayToSet(arr) {
    const set = new Set(arr);
    return set;
}

rd.question("Enter an array with space-separated values: ", (input) => {
    let arr = input.split(' ');
    let set = arrayToSet(arr);
    
    console.log(`The array turned into a set is ${[...set]}`);
    rd.close();
});
