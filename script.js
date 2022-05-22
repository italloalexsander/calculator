//Function that takes an operator and two numbers and return the result
const operate = (operator, firstNumber, secondNumber) => {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    if(operator === "+"){
        savedNumber = firstNumber + secondNumber;
        currentNumber = "0";
        return console.log(firstNumber + secondNumber);
    }
    if(operator === "-"){
        savedNumber = firstNumber - secondNumber;
        currentNumber = "0";
        return console.log(firstNumber - secondNumber);
    }
    if(operator === "/"){
        savedNumber = firstNumber - secondNumber;
        currentNumber = "0";
        return console.log(firstNumber / secondNumber);
    }
    if(operator === "*"){
        savedNumber = firstNumber * secondNumber;
        currentNumber = "0";
        return console.log(firstNumber * secondNumber);
    }
}


//Use the spread operator to make the HTML collection into an Array so it can use
//Array methods
const digits = [...document.getElementsByClassName('digits')]

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
        if(savedNumber !== "0"){
            operator = value;
            currentNumber = "0";
        }else{
            savedNumber = currentNumber;
            currentNumber = "0";
            operator = value;
        }
    }
    if(value === "="){
        operate(operator, savedNumber, currentNumber)
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
    console.log(currentNumber);
}

    
