//q5 JavaScript code implementing bubblesort

function bubblesort(ar){
    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length;j++){
            if(ar[j]>ar[j+1]){
                let temp=ar[j];
                ar[j]=ar[j+1];
                ar[j+1]=temp;
            }
        }
    }
    return arx
}

//
var userInput = prompt("Enter an array: ");
var arr = userInput.split(' ').map(Number);
const sortar=bubblesort(arr);
console.log(`Sorted Array: ${sortar}`);