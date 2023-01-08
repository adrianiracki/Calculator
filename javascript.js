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

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', updateDisplay)
});

function updateDisplay() {
    if(display.textContent === '0') {
        display.textContent = '';
    };
    if (display.textContent.length < 10) {
        display.textContent += this.textContent;
    };
    displayValue = +display.textContent
};

let displayValue

