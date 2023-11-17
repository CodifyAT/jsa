const readline =require('readline');
const rd=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function getvowel(str){
    const reg=/\b\w{4}[aeiouAEIOU]\b/g;
    const m=str.match(reg);
    if(m){
        console.log(m);
    }
    else console.log("No matches found");
}

rd.question("Enter a string: ",(input)=>{
    getvowel(input);
    rd.close();
})