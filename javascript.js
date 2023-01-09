
//Basic math functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

//Function that triggers math functions
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    };
};

//Functionality for the display
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', updateDisplay)
});

let displayValue = 0;

function updateDisplay() {
    if(display.textContent === '0') {
        display.textContent = '';
    };
    if (display.textContent.length < 10) {
        display.textContent += this.textContent;
    };
    displayValue = +display.textContent
};

//Functionality for the 'backspace' button
const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', backspace);

function backspace () {
    display.textContent = display.textContent.slice(0, display.textContent.length -1);
    displayValue = +display.textContent
};

//Functionality for the 'clear' button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

function clear() {
    display.textContent = '0';
    displayValue = 0;
};

//Functionality for the 'percentage' button
const percentageButton = document.querySelector('#percentage');
percentageButton.addEventListener('click', percentage);

function percentage() {
    displayValue /= 100;
    display.textContent = displayValue;
};

//Functionality for the decimal point button
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', addDecimalPoint);

function addDecimalPoint() {
    if(!display.textContent.includes('.')) {
        display.textContent += '.';
    };
};

//Functionality for the sign button
const sign = document.querySelector('#sign');
sign.addEventListener('click', changeSign);

function changeSign() {
    if(display.textContent !== '0'){
        if(!display.textContent.includes('-')){
            display.textContent = '-' + display.textContent;
        } else {
            display.textContent = display.textContent.slice(1);
        };
    };
    displayValue = +display.textContent;
};










