const readline =require('readline');
const rd=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function swapcases(str){
    let res='';
    for(let i=0;i<str.length;i++){
        const ch=str[i];
        if(ch==ch.toUpperCase()) res+=ch.toLowerCase();
        else res+=ch.toUpperCase();
    }
    return res;
}
rd.question("Enter a string: ",(input)=>{
    const swapstring=swapcases(input);
    console.log(swapstring);
    rd.close();
})