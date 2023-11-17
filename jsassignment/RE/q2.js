const readline =require('readline');
const rd=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function findwords(str){
    const regex = /\bT\w*[aeiouAEIOU]\b/g;
    const matches = str.match(regex);
    if (matches) {
      console.log("Words starting with 'T' and ending with a vowel:");
      console.log(matches);
    } else {
      console.log("No matching words found.");
    }
    
}

rd.question("Enter a string: ",(input)=>{
    findwords(input);
    rd.close();
})