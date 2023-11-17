
//q4 JavaScript code implementing quicksort

function quicksort(ar){
    if(ar.length<=1){
        return ar;
    }
    const p=ar[ar.length-1];
    const l=[]
    const r=[]
    for(let i=0;i<ar.length-1;i++){
        if(ar[i]<p){
            l.push(ar[i]);
        }
        else r.push(ar[i])
    }
    return [...quicksort(l),p,...quicksort(r)];
}

var userInput = prompt("Enter an array: ");
var ar = userInput.split(' ').map(Number);
const sortar=quicksort(ar);
console.log(`Sorted Array: ${sortar}`);