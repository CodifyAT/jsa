//q2 Write javascript code to remove duplicate items from an array
function getduplicate(arr){
    let unar=[]
    arr.forEach(i => {
        if(!unar.includes(i)){
            unar.push(i);
        }
    });
    return unar;
}
var userInput = prompt("Enter an array: ");
var arr = userInput.split(' ').map(Number);
console.log(`array before removing duplicates: ${arr}`);
const dup=getduplicate(arr);
console.log(`array after removing duplicates: ${dup}`);