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


//Use the spread operator to make the HTML collection into an Array so it can use
//Array methods
const digits = [...document.getElementsByClassName('digits')]

digits.forEach(element => {
    element.addEventListener('click', inputHandler());
});


    
