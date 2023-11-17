const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ifpresent(ar,ind){
    const s=new Set(ar);
    return s.has(ind);
}

rl.question("Enter an array with sepace separated elements: ",(input)=>{
    const ar=input.split(" ");
    rl.question("Enter a value to be checked in the set: ",(input)=>{
        const bool=ifpresent(ar,input);
        if(bool) console.log(`${input} is present in the set`);
        else console.log(`${input} is not present in the set`);
    });
});