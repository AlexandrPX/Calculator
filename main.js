const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const number = document.querySelectorAll('.btn-number');
let a = '';
let b = '';
let sign = '';
let end = false;

const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const act = ['÷', 'x', '-', '+',];


function updateDisplay(value) {
    display.value = value;
};

function reset() {
    a = '';
    b = '';
    sign = '';
    end = false;
    buttons.forEach(button => {
        button.style.backgroundColor = '';
    });
    updateDisplay('0');
};

document.querySelector('.btn-reset').onclick = reset;

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const input = event.target.innerText;

        if (num.includes(input)) {
            if (b === '' && sign === '') {
                if (input === '.' && a.includes('.')) {
                    a += '';
                    updateDisplay(a);
                    console.log(a);
                } else if (input === '.' && a === '') {
                    a = 0 + input;
                    updateDisplay(a);
                    console.log(a);
                } else if (a === '0' && input !== '.') {
                    a += '';
                    updateDisplay(a);
                    console.log(a);
                } else {
                    a += input;
                    updateDisplay(a);
                    console.log(a);
                }

            } else if (a !== '' && b !== '' && end) {
                b = input;
                end = false;
                updateDisplay(b);
            } else {
                if (input === '.' && b.includes('.')) {
                    b += '';
                    updateDisplay(b);
                    console.log(b);
                } else if (input === '.' && b === '') {
                    b = 0 + input;
                    updateDisplay(b);
                    console.log(b);
                } else if (b === '0' && input !== '.') {
                    b += '';
                    updateDisplay(b);
                    console.log(b);
                } else {
                    b += input;
                    updateDisplay(b);
                    console.log(b);
                }
            }

        }

        if (act.includes(input)) {
            sign = input;
            console.log(sign);
            buttons.forEach(button => {
                button.style.backgroundColor = '';
            });
            event.target.style.backgroundColor = '#90de8c';
            return;

        }

        if (input === '=') {
            if (b === '') b = a;
            switch (sign) {
                case '-':
                    a = a - b;
                    break;
                case '+':
                    a = (+a) + (+b);
                    break;
                case '÷':
                    if (b == 0) {
                        buttons.forEach(button => {
                            button.style.backgroundColor = '';
                        });
                        updateDisplay('Error')
                        return;
                    }
                    a = a / b;
                    break;
                case 'x':
                    a = a * b;
                    break;
            }
            end = true;
            updateDisplay(a.toFixed(2));
            console.log(a, b, sign);

            buttons.forEach(button => {
                button.style.backgroundColor = '';
            });
        }

    });
});
