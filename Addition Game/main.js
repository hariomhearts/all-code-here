let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

restartGame();


let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";




function restartGame() {


    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);



    gameResultElement.textContent = "";
    userInputElement.value = "";
}

function checkResult() {
    //Display the random numbers generated and parseInt them.
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);

    //Get the userEnterdSum value
    let userEnteredSum = parseInt(userInputElement.value);

    //Calculated the sum of the two numbers
    let sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;

    //Check if userEnteredSum is equal to sumOfTwoRandomIntegers
    if (userEnteredSum === sumOfTwoRandomIntegers) {
        gameResultElement.textContent = successMessage; //If yes, display successMessage
        gameResultElement.style.backgroundColor = "#028a0f";

    } else {
        gameResultElement.textContent = tryAgainMessage; //If no, display tryAgainMessage 
        gameResultElement.style.backgroundColor = "#1e217c";


    }
}