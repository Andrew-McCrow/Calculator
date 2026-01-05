function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

let n1 = null;
let n2 = null;
let oper = null;

function operate(number, number2, operator) {
    if (number === null || number2 === null || operator === null) {
        throw new Error("Incomplete input for calculation.");
    }

    switch (operator) {
        case '+':
            return add(number, number2);
        case '-':
            return subtract(number, number2);
        case '*':
            return multiply(number, number2);
        case '/':
            return divide(number, number2);
        default:
            throw new Error("Invalid operator.");
    }
}

// Event listeners for number buttons
const numbers = document.querySelectorAll('.number');
numbers.forEach(button => {
    button.addEventListener('click', () => {
        const display = document.querySelector('.display');
        display.querySelector('.value').textContent += button.textContent;
    });
});

// Event listener for clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    const display = document.querySelector('.display');
    display.querySelector('.value').textContent = '';
    n1 = null;
    n2 = null;
    oper = null;
});

// Event listeners for operator buttons
const operators = document.querySelectorAll('.operator');
operators.forEach(button => {
    button.addEventListener('click', () => {
        const display = document.querySelector('.display');
        const currentValue = parseFloat(display.querySelector('.value').textContent);
        if (n1 === null) {
            n1 = currentValue;
        } else if (oper !== null) {
            n2 = currentValue;
            n1 = operate(n1, n2, oper);
            display.querySelector('.value').textContent = n1;
        }
        oper = button.textContent;
        display.querySelector('.value').textContent = '';
    });
});