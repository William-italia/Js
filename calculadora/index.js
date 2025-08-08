const buttons = document.querySelector('.grid-buttons');
const display = document.querySelector('.display');
const input1 = document.querySelector('.num1');
const input2 = document.querySelector('.num2');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.addEventListener('click', (el) => {

    let value = el.target;

    input(value);
    console.log(previousNumber, currentNumber, operator);

});


function input(value) {

    if (value.dataset.action) {
        actions(value);
    }

    if (value.dataset.operator) {

        inputOperator(value.textContent);
        displayNumbers(currentNumber);

    } else if(!isNaN(value.textContent) || value.textContent === '.' && !currentNumber.includes('.') && currentNumber.length < 12) {
        currentNumber += value.textContent;
        displayNumbers(currentNumber);
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
        // currentNumber = '';
    }

}


function displayNumbers(curr) {
    if (previousNumber !== '') {
        input1.textContent = `${previousNumber} ${operator}`;
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
        conta = `${num1} + ${num2}`;
        currentNumber = (num1 + num2).toString();
        displayEqual(conta, currentNumber);
        break;

    case '-':
        conta = `${num1} − ${num2}`;
        currentNumber = (num1 - num2).toString();
        displayEqual(conta, currentNumber);
        break;

    case 'x':
        conta = `${num1} × ${num2}`; 
        currentNumber = (num1 * num2).toString();
        displayEqual(conta, currentNumber);
        break;

    case '÷':
        conta = `${num1} ÷ ${num2}`; 
        currentNumber = num2 !== 0 ? (num1 / num2).toString() : 'Error';
        displayEqual(conta, currentNumber);
        break;

    }

    operator = '';
    previousNumber = '';
}

function displayNumbers(curr) {
    if (previousNumber !== '') {
        input1.textContent = `${previousNumber} ${operator}`;
        input2.textContent = curr;
    } else {
        input1.textContent = curr;
    }
}

function displayEqual(prev, equal) {
    input1.textContent = prev;
    input2.textContent = equal;
}


function inputOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        alert('Meu penis é muito grande!');
    }

    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}




