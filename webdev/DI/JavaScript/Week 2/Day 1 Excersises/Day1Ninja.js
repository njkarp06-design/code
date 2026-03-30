// Excersise 1
let Leo = {
    FullName : "Leonardo",
    Mass : 72,
    Height : 1.70,
    LBMI : function () {
      return this.Mass / (this.Height**2);
     }
  }
let y = console.log("Leo's BMI is:" + Leo.LBMI())
y
let Nush = {
  FullName : "Natanel",
  Mass : 65,
  Height : 1.75,
  NBMI : function() { 
  return this.Mass / (this.Height**2);
}
}
let x = console.log("Natanel's BMI is:" + Nush.NBMI())
x
function compare() {
  if (x > y) {
  console.log("Natanel is a fatty");
  }
  else {console.log("Natanel is pretty fit at the moment! (well compared to Leo)")};
}
compare()
// Excersise 2
let gradesList = [75, 78, 90, 42, 35, 97, 67, 50, 10]
const findAvg = (gradesList) => {
let avg = 0;
for (let i = 0; i < gradesList.length; i++) {
avg += gradesList[i] / (gradesList.length)};
console.log("This is your average grade:" + avg)
if (avg>65) {
  console.log("YOU PASSED!");
}
  else {
    console.log("YOU FAILED! Please repeat the course")
}
}
findAvg(gradesList)