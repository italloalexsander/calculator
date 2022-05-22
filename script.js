//Function that takes an operator and two numbers and return the result
const operate = (operator, firstNumber, secondNumber) => {
    if(operator === "+"){
        return firstNumber + secondNumber;
    }
    if(operator === "-"){
        return firstNumber - secondNumber;
    }
    if(operator === "/"){
        return firstNumber - secondNumber;
    }
    if(operator === "*"){
        return firstNumber * secondNumber;
    }
}

