let displayValue = '0';
let firstOperand = null;
let operator = null;
let awaitingNextOperand = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function appendNumber(number) {
    if (awaitingNextOperand) {
        displayValue = String(number);
        awaitingNextOperand = false;
    } else {
        displayValue = displayValue === '0' ? String(number) : displayValue + number;
    }
    updateDisplay();
}

function setOperation(op) {
    if (operator !== null) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
    operator = op;
    awaitingNextOperand = true;
}

function calculate() {
    if (operator === null || awaitingNextOperand) {
        return;
    }
    const secondOperand = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
        case 'add':
            result = firstOperand + secondOperand;
            break;
        case 'subtract':
            result = firstOperand - secondOperand;
            break;
        case 'multiply':
            result = firstOperand * secondOperand;
            break;
        case 'divide':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    displayValue = String(result);
    operator = null;
    awaitingNextOperand = true;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    awaitingNextOperand = false;
    updateDisplay();
}

updateDisplay();
