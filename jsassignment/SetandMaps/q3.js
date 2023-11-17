const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function logstrings(ar){
    for(const i of ar){
        console.log(i);
    }
}
rl.question('Enter a set of comma separated strings: ',(input)=>{
    let arr=input.split(',').map((str)=>str.trim());
    const s=new Set(arr);
    logstrings(s);
    rl.close();
});