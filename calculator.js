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

// Event listener for clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    const display = document.querySelector('.display');
    display.querySelector('.value').textContent = '';
    n1 = null;
    n2 = null;
    oper = null;
});

// Event listeners for buttons
const buttons = document.querySelectorAll('.buttons button:not(.clear):not(.equals)');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const display = document.querySelector('.display');
        display.querySelector('.value').textContent += btn.textContent.trim();
    });
});

// Event listener for equals button
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', () => {
    const display = document.querySelector('.display');
    const expression = display.querySelector('.value').textContent;

    // Simple parsing logic (assumes format: number operator number)
    const match = expression.match(/(\d+)([+\-*/])(\d+)/);
    if (match) {
        n1 = parseFloat(match[1]);
        oper = match[2];
        n2 = parseFloat(match[3]);

        try {
            const result = operate(n1, n2, oper);
            display.querySelector('.value').textContent = result;
        } catch (error) {
            display.querySelector('.value').textContent = error.message;
        }
    } else {
        display.querySelector('.value').textContent = "Invalid expression.";
    }
});             