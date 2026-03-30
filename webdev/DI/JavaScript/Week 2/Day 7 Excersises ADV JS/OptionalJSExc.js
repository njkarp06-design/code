let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let newArray = [];
for(let i = 0; i < array.length; i++) {
   newArray = array.sort((a,b) => a - b);

}
console.log(newArray);
// Excersise 2
let a = [5,8,9,15,26,29,47,98];
function sum() { 
    for (let x in a) 
        { for (let i = 0; i < a.length; i++) {
    if (a[i] + a[x] === 76) {
        console.log('The numbers that add to make 76 are:' + a[i], a[x]);
        return;
    }}}}
    sum()
    // or...
    function sum2() {
        for (let i = 0; i < a.length; i++) {
            for (let j = i + 1; j < a.length; j++) {
                if (a[i] + a[j] === 76) {
                    console.log('The numbers that add to make 76 are:' + a[i], a[j]);
                }
            }
        }
    }
    sum2()

