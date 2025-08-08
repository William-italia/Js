const buttons = document.querySelector('.grid-buttons');
const display1 = document.querySelector('.num1');
const display2 = document.querySelector('.num2');


console.log(buttons);

let num1 = '';
let num2 = '';
let operator1 = '';
let resultShow = false;



buttons.addEventListener('click', (el) => {
    const btn = el.target;

    const value = btn.dataset.value;
    const action = btn.dataset.action;
    const operator = btn.dataset.operator;

    console.log(operator);
    

    if (value && !operator1) {

        if(resultShow) {
            resultShow = false;
            display1.textContent = '';
            display2.textContent = '';
        }
        
        num1 += value;
        
        display1.textContent = num1;
    
    }

    if (operator && num1 != '') {

        operator1 = operator; 
        display1.textContent = `${num1} ${operator1}`;

        console.log(operator1);
            
    }
  
    if (operator1 && value) {
            if(value) {

            num2 += value;
            display2.textContent = num2;
        }
    }
    
    if (action === 'clear') {
        num1 = '';
        num2 = '';
        operator1 = '';
        display1.textContent = '';
        display2.textContent = '';
    }
    
    if (action === 'equal') {

        let result = 0;
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        switch (operator1) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = a / b; break;
        }

        display1.textContent = `${num1} ${operator1} ${num2}`;
        
        display2.textContent = result;
        
        // num1 = '';
        // num2 = '';
        // operator1 = '';
        resultShow = true;   
    }
    
});

// depressão