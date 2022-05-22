//Function that takes an operator and two numbers and return the result
const operate = (operator, firstNumber, secondNumber) => {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    if(operator === "+"){
        savedNumber = firstNumber + secondNumber;
        currentNumber = savedNumber;
    }
    if(operator === "-"){
        savedNumber = firstNumber - secondNumber;
        currentNumber = savedNumber;
    }
    if(operator === "/"){
        savedNumber = firstNumber - secondNumber;
        currentNumber = savedNumber;
    }
    if(operator === "*"){
        savedNumber = firstNumber * secondNumber;
        currentNumber = savedNumber;
    }

    smallerDisplay.textContent = savedNumber;
    largerDisplay.textContent = currentNumber;
}


//Use the spread operator to make the HTML collection into an Array so it can use
//Array methods
const digits = [...document.getElementsByClassName('digits')];


const smallerDisplay = document.getElementById('prevValue');
const largerDisplay = document.getElementById('currentValue');

digits.forEach(element => {
    element.addEventListener('click', () =>{
    inputHandler(element.value);
    })
});

let currentNumber = "0";
let savedNumber = "0";
let operator = "";

function inputHandler(value){
    //Change the input into a number for more consistent comparisons below
    let inputAux = parseFloat(value); 
    if(inputAux >= 0 && inputAux <= 9){
        //Add a digit to the display
        if(currentNumber === "0" && value !== "0"){
            currentNumber = value;
        }
        else{
            currentNumber = currentNumber + value;
        }
        
    }
    if(value === "/"|| value === "*" || value === "-" || value === "+"){
        //Evaluate the expression;
    }
    if(value === "="){
        //Evaluate the expression;
    }
    if(value === "CE"){
        currentNumber = "0";
    }
    if(value === "AC"){
        currentNumber = "0";
        savedNumber = "0";
        operator = "";
    }
    if(value === "BS"){
        if(currentNumber.length === 1){
            currentNumber = "0";
        }
        else{
            currentNumber = currentNumber.substring(0, currentNumber.length - 1);
        }
    }
    if(value === "signed"){
        if(currentNumber[0] === "-"){
            currentNumber = currentNumber.substring(1, currentNumber.length);
        }
        else{
            currentNumber = "-" + currentNumber;
        }
    }
    if(value === "."){
        if(!(currentNumber.includes("."))){
            currentNumber = currentNumber + ".";
        }
    }
    largerDisplay.textContent = currentNumber;
}

    
