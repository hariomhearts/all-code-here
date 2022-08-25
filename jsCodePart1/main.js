let stopLightElement = document.getElementById("stopLight");
let readyLightElemnt = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");
let stopButtonElement = document.getElementById("stopButton");
let readyButtonElement = document.getElementById("readyButton");
let goButtonElement = document.getElementById("goButton");

function turnOnRed() {
    stopLightElement.style.backgroundColor = "#cf1124";
    readyLightElemnt.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";
    stopButtonElement.style.backgroundColor = "#cf1124";
    readyButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#1f1d41";
}

function turnOnYellow() {
    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElemnt.style.backgroundColor = "#f7c948";
    goLightElement.style.backgroundColor = "#4b5069";
    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyButtonElement.style.backgroundColor = "#f7c948";
    goButtonElement.style.backgroundColor = "#1f1d41";

}

function turnOnGreen() {
    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElemnt.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#199473";
    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#199473";

}