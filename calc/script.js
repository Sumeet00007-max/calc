const result = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            currentInput += button.textContent;
            result.value = currentInput;
        } else if (button.classList.contains('operator')) {
            if (operator) {
                calculate();
            }
            operator = button.textContent;
            currentInput += operator;
            result.value = currentInput;
        } else if (button.classList.contains('decimal')) {
            if (!currentInput.includes('.')) {
                currentInput += button.textContent;
                result.value = currentInput;
            }
        } else if (button.classList.contains('clear')) {
            currentInput = '';
            operator = '';
            result.value = '';
        } else if (button.classList.contains('equals')) {
            calculate();
        }
    });
});

function calculate() {
    const expression = new Function('return ' + currentInput)();
    currentInput = expression.toString();
    result.value = currentInput;
    operator = '';
}