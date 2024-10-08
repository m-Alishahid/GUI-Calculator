let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    expression += number;
    display.value = expression;
}

function appendOperator(operator) {
    expression += ` ${operator} `;
    display.value = expression;
}

function appendDot() {
    expression += '.';
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function deleteLast() {
    expression = expression.trim();
    expression = expression.slice(0, -1);
    display.value = expression;
}

function calculate() {
    try {
        expression = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
    }
}