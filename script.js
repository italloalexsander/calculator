//Function that takes an operator and two numbers and return the result
const operate = (operator, firstNumber, secondNumber) => {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    if(operator === "+"){
        savedNumber = firstNumber + secondNumber;
        currentNumber = "0";
    }
    if(operator === "-"){
        savedNumber = firstNumber - secondNumber;
        currentNumber = "0";
    }
    if(operator === "/"){
        if(secondNumber === "0"){
            largerDisplay.textContent = "ERROR X/0"
            
        }else{
        savedNumber = firstNumber / secondNumber;
        currentNumber = "0";
        }
    }
    if(operator === "*"){
        savedNumber = firstNumber * secondNumber;
        currentNumber = "0";
    }

}


//Use the spread operator to make the HTML collection into an Array so it can use
//Array methods
const digits = [...document.getElementsByClassName('digits')];

const largerDisplay = document.getElementById('currentValue');

digits.forEach(element => {
    element.addEventListener('click', () =>{
    inputHandler(element.value);
    })
});

let currentNumber = "0";
let savedNumber = "";
let operator = "";

function inputHandler(value){
    //Change the input into a number for more consistent comparisons below
    let inputAux = parseFloat(value); 
    if(inputAux >= 0 && inputAux <= 9){
        //Add a digit to the display
        if(currentNumber === "0" && value !== "0"){
            currentNumber = value;
        }
        else if(currentNumber === "0" && value === "0"){
            currentNumber = value;
        }
        else{
            currentNumber = currentNumber + value;
        }
        
    }
    if(value === "/"|| value === "*" || value === "-" || value === "+"){
        //Evaluate the expression;
        //Store the current value in the stored value only if the stored value is empty
        if(savedNumber === ""){
            savedNumber = currentNumber;
            currentNumber = "0";
            operator = value;
        }
        else{
            operate(operator, savedNumber, currentNumber);
            operator = value;
            return largerDisplay.textContent = savedNumber;
        }
        //If stored value has a value, make the last operation and set the current operation to operator
    }
    if(value === "="){
        //Evaluate the expression;
        operate(operator, savedNumber, currentNumber);
        operator = "";
        return largerDisplay.textContent = savedNumber;
    }
    if(value === "CE"){
        currentNumber = "0";
    }
    if(value === "AC"){
        currentNumber = "0";
        savedNumber = "";
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
    
    return largerDisplay.textContent = currentNumber;

}

    
