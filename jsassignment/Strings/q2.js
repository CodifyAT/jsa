const readline =require('readline');
const rd=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function print(number){
    for(let i=0;i<number.length;i++){
        let c = number[i];
        let str = ""
        if(number >= 'a' && nubmer <='z' || number < '0'){
            console.log(-1);
            break;
        }
        for(let j=0;j<number[i] - '0';j++){
            str += c;
        }
        console.log(str);
    }
}


rd.question("Enter a string: ",(input)=>{
    const getnum=print(input);
    console.log(getnum);
    rd.close();
})