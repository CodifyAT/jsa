//q3 JavaScript program to perform binary search

function binarysearch(ar,tbs){
    let l=0;
    let h=ar.length-1;
    while(l<=h){
        let m=Math.floor(l+(h-l)/2);
        if(ar[m]===tbs){
            return m;
        }
        else if(ar[m]<tbs){
            l=m+1;
        }
        else{
            h=m-1;
        }
    }
    return -1;
}

var userInput = prompt("Enter an array: ");
var arr = userInput.split(' ').map(Number);
const target=7;
const ind=binarysearch(ar,target);
console.log(`Element ${target} is found at ${ind} index`);