const buttons = document.querySelector('.grid-buttons');
const display = document.querySelector('.display');
const input1 = document.querySelector('.num1');
const input2 = document.querySelector('.num2');

let currentNumber = '';
let previousNumber = '';
let operator = '';
let equal = false;

buttons.addEventListener('click', (el) => {

    let value = el.target;

    input(value);

});

function input(value) {

    if (value.dataset.action) {
        actions(value);
    }

   if (equal === true && !isNaN(value.textContent)) {
    equal = false;
    currentNumber = '';
    operator = '';
    previousNumber = '';
    resetDisplay();
    }

    if (value.dataset.operator) {
        equal = false;
        inputOperator(value.textContent);
        displayNumbers(formatNumber(currentNumber));

    } else if(!isNaN(value.textContent) || value.textContent === '.' && !currentNumber.includes('.') && currentNumber.length < 12) {
        currentNumber += value.textContent;
        displayNumbers(formatNumber(currentNumber));
    }
    
}

function actions(action) {

    if (action.dataset.action === 'clear') {
        currentNumber = '';
        previousNumber = '';
        operator = '';

        input1.textContent = '0';
        input2.textContent = '';
    }

    if (action.dataset.action === 'equal') {
        calculate();
    }

}

function displayNumbers(curr) {
    if (previousNumber !== '') {
        input1.textContent = `${formatNumber(previousNumber)} ${operator}`;
        input2.textContent = curr;
    } else {
        input1.textContent = curr;
    }
}

function calculate() {
    let num1 = parseFloat(previousNumber);
    let num2 = parseFloat(currentNumber);
    let conta = ''
    if (isNaN(num1) || isNaN(num2)) return;

    switch (operator) {
        case '+':
        conta = `${formatNumber(num1)} + ${formatNumber(num2)}`;
        currentNumber = (num1 + num2).toString();
        displayEqual(conta, currentNumber);
        break;

    case '-':
        conta = `${formatNumber(num1)} − ${formatNumber(num2)}`;
        currentNumber = (num1 - num2).toString();
        displayEqual(conta, currentNumber);
        break;

    case 'x':
        conta = `${formatNumber(num1)} × ${formatNumber(num2)}`; 
        currentNumber = (num1 * num2).toString();
        displayEqual(conta, currentNumber);
        break;

    case '÷':
        conta = `${formatNumber(num1)} ÷ ${formatNumber(num2)}`; 
        currentNumber = num2 !== 0 ? (num1 / num2).toString() : 'Error';
        displayEqual(conta, currentNumber);
        break;

    }

    operator = '';
    previousNumber = '';
    equal = true;

}

function displayEqual(prev, equal) {
    input1.textContent = prev;
    input2.textContent = formatNumber(equal);
}

function resetDisplay() {
    input1.textContent = '0';
    input2.textContent = '';
}

function inputOperator(op) {
        if (currentNumber === '') {
            if (previousNumber !== '') {
            operator = op;
        }
        return;
    };
  
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function formatNumber(curr) {
    if (curr === '' || curr === 'error') return curr;
    let num = parseFloat(curr);
    if (isNaN(num)) return curr;

    return num.toLocaleString('en-US');
}