/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = 'David Adeogun';


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year

const currentYear = 2023;
// Step 4: place the value of the current year variable into the HTML file

document.querySelector('#year').innerHTML = currentYear;
// Step 5: declare and instantiate a variable to hold the name of your picture
const myPic = 'images/rsz_2profile_pic.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', myPic);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFood = ['Rice', 'Peppersoup', 'Shitto']

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favoriteFood;

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFood = 'Isiewu';

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFood.push(anotherFood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favoriteFood;

// Step 6: remove the first element in the favorite foods array
favoriteFood.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFood;

// Step 8: remove the last element in the favorite foods array

favoriteFood.pop();
// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFood;



const steps = ["one", "two", "three"];
function makeList(item) {
    const listElement = document.getElementById("myList");
    listElement.innerHTML = listElement.innerHTML + `<li>${item}</li>`;
}
steps.forEach(makeList);

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = -1;

myArray.forEach(function (item, index) {
    if (item === luckyNumber) {
        luckyIndex = index;
    }
});
console.log(luckyIndex);


