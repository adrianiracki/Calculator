
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
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            if(b === 0) return 'Nope'
            else return divide(a, b);
            break;
    };
};

//Functionality for the display
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', updateDisplay)
});

function updateDisplay() {
    if(display.textContent === '0' || typeNewNumber === true) {
        display.textContent = '';
    };
    if (display.textContent.length < 9) {
        display.textContent += this.textContent;
    };
    currentValue = +display.textContent;
    typeNewNumber = false;
};

//Functionality for the 'backspace' button
const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', backspace);

function backspace () {
    display.textContent = display.textContent.slice(0, display.textContent.length -1);
    currentValue = +display.textContent
};

//Functionality for the 'clear' button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

function clear() {
    display.textContent = '0';
    currentValue = 0;
    memoryValue = null;
};

//Functionality for the 'percentage' button
const percentageButton = document.querySelector('#percentage');
percentageButton.addEventListener('click', percentage);

function percentage() {
    currentValue /= 100;
    if (currentValue.toString().includes('.')){
        display.textContent = fixDecimals(currentValue);
    } else {
    display.textContent = currentValue;
    };
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
    currentValue = +display.textContent;
};

//Core function - making calculations and updating the display with the result
let operator;
let currentValue = 0;
let memoryValue = null;
const calculateButtons = document.querySelectorAll('.calculation');
calculateButtons.forEach(button => button.addEventListener('click', (event) => {

    if(memoryValue) {
        currentValue = operate(operator, memoryValue, currentValue);

        if (currentValue > 9999999999) {
            display.textContent = currentValue.toExponential(4);
        } else if (currentValue.toString().includes('.')){
            display.textContent = fixDecimals(currentValue);
        } else {
            display.textContent = currentValue;
        };

        if(event.target.textContent === '='){
            memoryValue = null;
            typeNewNumber = true;
        };
    };
    
    if(event.target.textContent !== '=') {
        if(display.textContent === 'Nope') {
            memoryValue = null;
        } else {
            memoryValue = currentValue;
        };
        typeNewNumber = true;
        operator = event.target.textContent;
    };

}));

//A function that rounds decimal numbers depending on free screen space
function fixDecimals(currentValue) {
    let splitNumber = currentValue.toString().split('.');
    let fixedDecimals;
    if(currentValue < 0.00000001) {
        fixedDecimals = currentValue.toExponential(5 - splitNumber[0].length);
    } else {
    fixedDecimals = currentValue.toFixed(9 - splitNumber[0].length);
    };
    return fixedDecimals;
};

