const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();


//EXAMPLE 2
let grades = ['A', 'B', 'A'];

function convertGrade(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  }
  else if (grade === "B") {
    points = 3;
  }
  return points;
}
//const gpaPoints = grades.map(convertGrade);
console.log(gpaPoints);


//EXAMPLE 3  "reduce" function
//Using the function from the previous activity, 
//convert an array of grades into an array of gpaPoints.

//Use "reduce" to calculate the GPA from the array of gpaPoints

const gpaPoints = grades.map(convertGrade);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

//EXAMPLE 4 "Filter" function
let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = fruits.filter(function (word) {
    return word.length < 6;
})
console.log(word);


//EXAMPLE 5 indexOf
// returns the first index at which a given
// element can be found in the array, or -1 if it is not present.
const numBer = [12, 34, 21, 54];
const luckNumber = 21;

let  check = numBer.indexOf(21);
//This check if 21 is in the array