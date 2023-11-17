const readline =require('readline');
const rd=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function findfourlengthwords(str){
    const length=4;
    const wrds=/\b\w{${length}}\b`/g;
    console.log(wrds);
}

rd.question("Enter a string: ",(input)=>{
    findfourlengthwords(input);
    rd.close();
})