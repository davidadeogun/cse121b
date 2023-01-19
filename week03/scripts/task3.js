/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {



    // Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2;
}

// Step 3: Step 3: (Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function)
function addNumbers() {
    let addend1 = parseInt(document.querySelector("#addend1").value);
    let addend2 = parseInt(document.querySelector("#addend2").value);
    let sum = add(addend1, addend2);
    document.querySelector("#sum").value = sum;



    // Step 4: Assign the return value to an HTML form element with an ID of sum
}


// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subTract = function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subend1 = parseInt(document.querySelector("#minuend").value);
    let subend2 = parseInt(document.querySelector("#subtrahend").value);
    let subtract = subTract(subend1, subend2);
    document.querySelector("#difference").value = subtract;
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
let multiply = (multiple1, multiple2) => 
{
    return multiple1 *  multiple2;
}


 function multiplyNumbers() {
    let mulend1 = parseInt(document.querySelector("#factor1").value);
    let mulend2 = parseInt(document.querySelector("#factor2").value);
    let multiPly = multiply(mulend1, mulend2);
    document.querySelector("#product").value = multiPly;
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = function(divide1, divide2) {
    return divide1 /divide2;
}

function divideNumbers() {
    let number1 = parseInt(document.querySelector("#dividend").value);
    let number2 = parseInt(document.querySelector("#divisor").value);
    let division = divide(number1, number2);
    document.querySelector("#quotient").value = division;
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.



/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let currentDate = new Date();
// Step 2: Declare a variable to hold the current year
let currentYear = new Date().getFullYear();

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
let fullYear = new Date(currentDate.getFullYear());
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbers = Array.from({length: 25}, (_, i) => i+1);

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let oddNumbers = numbers.filter(function(number) {
    return number %2 === 1;
});
document.querySelector("#odds").innerHTML = oddNumbers;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenNumbers = numbers.filter(function(number) {
    return number %2 === 0;
});
document.querySelector("#evens").innerHTML = evenNumbers;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let result = numbers.reduce((a,b) => {
    return a + b;
});
document.querySelector("#sumOfArray").innerHTML = result;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector("#multiplied").innerHTML = numbers.map(multiple);

function multiple(num) {
    return num * 2;

}
//Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

const multipliedArr = numbers.map(num => num * 2);

const sum = multipliedArr.reduce((acc, currentVal) => acc + currentVal);

document.querySelector("#sumOfMultiplied").innerHTML = sum;
