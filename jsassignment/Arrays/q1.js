//Q1 Write JS program to find the most frequent item of an array 

function findfrequent(ar){
    let c=0;
    let msf;
    for(let i=0;i<ar.length;i++){
        let counter=0;
        for(let j=0;j<ar.length;j++){
            if(ar[i]==ar[j])
            counter++;
        }
        if(counter>c){
            c=counter;
            msf=ar[i];
        }
    }
    return msf;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter numbers separated by spaces: ', (input) => {
    let arr = input.split(' ').map(Number);
    const fr=findfrequent(arr);
    console.log(`The most frequent item is: ${fr}`);
});
