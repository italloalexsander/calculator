let prevValue = "";
let currentValue = "0";
let operation = "";


const digits = [...document.getElementsByClassName('digits')];

const display = document.getElementById('currentValue');

digits.forEach(element => {
    element.addEventListener('click', () =>{
    inputHandler(element.value);
    })
});

function evaluateOperation(firstNumber, secondNumber, operation){

    parseFloat(firstNumber);
    parseFloat(secondNumber);


    console.log("First number: " + firstNumber);
    console.log("Second number: " + secondNumber);
    console.log("Operation: " + operation);

    if(operation === "+"){
        return firstNumber + secondNumber;
    }
    if(operation === "/"){
        if(secondNumber !== 0){
            return firstNumber / secondNumber;
        }
        else{
            return "ERROR";
        }
    }
    if(operation === "*"){
        return firstNumber * secondNumber;
    }
    if(operation === "-"){
        return firstNumber - secondNumber;
    }
}

function updateScreenHandler(value){
    display.textContent = value;
}

function inputHandler(input){
    let aux = 0;
    //Check if input is a number
    if(currentValue.length < 15){
        if(parseInt(input) >= 0 || parseInt(input) <= 0){
            //If it's a number, concatenate the number with the new value, unless it's 0, then just replace it
            if(input !== "0" && currentValue === "0"){
                currentValue = input;
            }
            else if(input !== "0" && currentValue !=="0"){
                currentValue = currentValue + input;
            }

            updateScreenHandler(currentValue);
        }

        if(input === "." && currentValue.length < 14){
            if(!(currentValue.includes("."))){
                currentValue = currentValue + ".";
            }
            updateScreenHandler(currentValue);
        }
    }

    if(input === "AC"){
        prevValue = "";
        currentValue = "0";
        operation = "";
        updateScreenHandler(currentValue);
    }

    if(input === "CE"){
        currentValue = "0";
        updateScreenHandler(currentValue);
    }

    if(input === "BS"){
        if(currentValue.length === 1){
            currentValue = "0";
        }
        else{
            currentValue = currentValue.substring(0, currentValue.length - 1);
        }
        updateScreenHandler(currentValue);

    }

    if(input === "-" || input ==="+" || input === "*" || input === "/"){
        //Reavaluate how to deal with expressions
    }

    if(input === "="){
        //Reavaluate how to deal with expressions
    }


}