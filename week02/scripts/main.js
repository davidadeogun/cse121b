// toggle menu in small view
//const toggleMenu = () => {
  //  document.querySelector('#menu').classList.toggle('open');
//}

//document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
    console.log(event);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.textContent = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);


