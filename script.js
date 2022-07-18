let body = document.querySelector('#body');
let container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);

let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = ('Created By Simphiwe ©' + ' ' + new Date().getFullYear());
    body.appendChild(footer);

let screen = document.createElement('div');
    screen.classList.add('screen');
    container.appendChild(screen);

let displayPara = document.createElement('p');
    displayPara.classList.add('para');
    displayPara.textContent = ('0');
    screen.appendChild(displayPara);

let btnDiv = document.createElement('div');
    btnDiv.classList.add('btnDiv');
    container.appendChild(btnDiv);

let a = '';
let b = '';    
let sum = '';
let operator;
let opBtnClicked = false;

function chooseOperator(chosenOperator) {
    if(a != '')
    if(b == '') {
        switch(chosenOperator) {
            case '+':
                operator = '+';
                break;
            case '-':
                operator = '-';
                break;
            case '*':
                operator = '*';
                break;
            case '/':
                operator = '/';
                break;
        }
        opBtnClicked = true;
        displayPara.textContent = a + ' ' + operator + ' ' + b;
    }
    if(b != '') {
        switch(chosenOperator) {
            case '+':
                operator = '+';
                break;
            case '-':
                operator = '-';
                break;
            case '*':
                operator = '*';
                break;
            case '/':
                operator = '/';
                break;
        }
        a = sum;
        sum = '';
        b = '';
        displayPara.textContent = a + ' ' + operator + ' ' + b;
    }
};

function operate() {
    switch(operator)
    {
        case "+":
                sum = add(a, b);
                sum = Math.round(sum*100)/100
                break;

            case "-":
                sum = subtract(a, b);
                sum = Math.round(sum*100)/100
                break;

            case "*":
                sum = multiply(a, b);
                sum = Math.round(sum*100)/100
                break;

            case "/":
                sum = divide(a, b);
                sum = Math.round(sum*100)/100
                break;
    }

    displayPara.textContent = a + operator + b + ' ' + '= ' + sum;
}

let clearBtn = document.createElement('button');
    clearBtn.classList.add('btn', 'opBtn');
    clearBtn.setAttribute('id', 'clearBtn');
    clearBtn.textContent = ('clear');
    clearBtn.addEventListener('click', () => {
        if (opBtnClicked == false) {
            a = '';
            b = '';
            sum = '';
            opBtnClicked = false;
            displayPara.textContent = 0;
        } else if (opBtnClicked == true) {
            a = '';
            b = '';
            sum = '';
            opBtnClicked = false;
            displayPara.textContent = 0;
        }
    });
    btnDiv.appendChild(clearBtn);

let positiveBtn = document.createElement('button');
    positiveBtn.classList.add('btn', 'opBtn');
    positiveBtn.setAttribute('id', 'positiveBtn');
    positiveBtn.textContent = ('+/-');
    positiveBtn.addEventListener('click', () => {
        let negative = '-';
        if(opBtnClicked === false) {
            if(a.includes('-') != true) {
                a = negative += a;
                displayPara.textContent = a;
            }else if (opBtnClicked == true) {
                a = a.substring(1);
                displayPara.textContent = a;
            }
        } else if (opBtnClicked == true) {
            if(b.includes('-') != true) {
                a = negative += b;
                displayPara.textContent = b;
            }else if (b.includes('-') == true) {
                b = b.substring(1);
                displayPara.textContent = b;
            }
        }
    })
    btnDiv.appendChild(positiveBtn);

let percentBtn = document.createElement('button');
    percentBtn.classList.add('btn', 'opBtn');
    percentBtn.setAttribute('id', 'percentBtn');
    percentBtn.textContent = ('%');
    percentBtn.addEventListener('click', () => {
        displayPara.textContent = (Number/100).toString
    })
    btnDiv.appendChild(percentBtn);

let divideBtn = document.createElement('button');
    divideBtn.classList.add('btn', 'opBtn');
    divideBtn.setAttribute('id', 'divideBtn');
    divideBtn.textContent = ('÷');
    divideBtn.addEventListener('click', () => {
        chooseOperator('/')
    });
    btnDiv.appendChild(divideBtn);

let sevenBtn = document.createElement('button');
    sevenBtn.classList.add('btn', 'numBtn');
    sevenBtn.setAttribute('id', 'sevenBtn');
    sevenBtn.textContent = (7);
    sevenBtn.addEventListener('click', () => {
        if(opBtnClicked == false && a.length <= 14) {
            a += 7;
            displayPara.textContent = a;
        } else if (opBtnClicked == true && b.length <= 14) {
            b += 7;
            displayPara.textContent = b;
        }
    });
    btnDiv.appendChild(sevenBtn);

let eightBtn = document.createElement('button');
    eightBtn.classList.add('btn', 'numBtn');
    eightBtn.setAttribute('id', 'eightBtn');
    eightBtn.textContent = (8);
    eightBtn.addEventListener('click', () => {
        if(opBtnClicked == false && a.length <= 14) {
            a += 8;
            displayPara.textContent = a;
        } else if (opBtnClicked == true && b.length <= 14) {
            b += 8;
            displayPara.textContent = b;
        }
    });
    btnDiv.appendChild(eightBtn);

let nineBtn = document.createElement('button');
    nineBtn.classList.add('btn', 'numBtn');
    nineBtn.setAttribute('id', 'nineBtn');
    nineBtn.textContent = (9);
    nineBtn.addEventListener('click', () => {
        if(opBtnClicked == false && a.length <= 14) {
            a += 9;
            displayPara.textContent = a;
        } else if (opBtnClicked == true && b.length <= 14) {
            b += 9;
            displayPara.textContent = b;
        }
    });
    btnDiv.appendChild(nineBtn);

let multiplyBtn = document.createElement('button');
    multiplyBtn.classList.add('btn', 'opBtn');
    multiplyBtn.setAttribute('id', 'multiplyBtn');
    multiplyBtn.textContent = ('*');
    multiplyBtn.addEventListener('click', () => {
        chooseOperator('*')
    });
    btnDiv.appendChild(multiplyBtn);

let fourBtn = document.createElement('button');
    fourBtn.classList.add('btn', 'numBtn');
    fourBtn.setAttribute('id', 'fourBtn');
    fourBtn.textContent = (4);
    fourBtn.addEventListener('click', () => {
        if(opBtnClicked == false && a.length <= 14) {
            a += 4;
            displayPara.textContent = a;
        } else if (opBtnClicked == true && b.length <= 14) {
            b += 4;
            displayPara.textContent = b;
        }
    });
    btnDiv.appendChild(fourBtn);

let fiveBtn = document.createElement('button');
    fiveBtn.classList.add('btn', 'numBtn');
    fiveBtn.setAttribute('id', 'fiveBtn');
    fiveBtn.textContent = (5);
    fiveBtn.addEventListener('click', () => {
        if(opBtnClicked == false && a.length <= 14) {
            a += 5;
            displayPara.textContent = a;
        } else if (opBtnClicked == true && b.length <= 14) {
            b += 5;
            displayPara.textContent = b;
        }
    });
    btnDiv.appendChild(fiveBtn);

let sixBtn = document.createElement('button');
    sixBtn.classList.add('btn', 'numBtn');
    sixBtn.setAttribute('id', 'sixBtn');
    sixBtn.textContent = (6);
    sixBtn.addEventListener('click', () => {
        if(opBtnClicked == false && a.length <= 14) {
            a += 6;
            displayPara.textContent = a;
        } else if (opBtnClicked == true && b.length <= 14) {
            b += 6;
            displayPara.textContent = b;
        }
    });
    btnDiv.appendChild(sixBtn);

let subtractionBtn = document.createElement('button');
    subtractionBtn.classList.add('btn', 'opBtn');
    subtractionBtn.setAttribute('id', 'subtractionBtn');
    subtractionBtn.textContent = ('-');
    subtractionBtn.addEventListener('click', () => {
        chooseOperator('-')
    });
    btnDiv.appendChild(subtractionBtn);

let oneBtn = document.createElement('button');
    oneBtn.classList.add('btn', 'numBtn');
    oneBtn.setAttribute('id', 'oneBtn');
    oneBtn.textContent = (1);
    oneBtn.addEventListener('click', () => {
        if(opBtnClicked == false && a.length <= 14) {
            a += 1;
            displayPara.textContent = a;
        } else if (opBtnClicked == true && b.length <= 14) {
            b += 1;
            displayPara.textContent = b;
        }
    });
    btnDiv.appendChild(oneBtn);

let twoBtn = document.createElement('button');
    twoBtn.classList.add('btn', 'numBtn');
    twoBtn.setAttribute('id', 'twoBtn');
    twoBtn.textContent = (2);
    twoBtn.addEventListener('click', () => {
        if(opBtnClicked == false && a.length <= 14) {
            a += 2;
            displayPara.textContent = a;
        } else if (opBtnClicked == true && b.length <= 14) {
            b += 2;
            displayPara.textContent = b;
        }
    });
    btnDiv.appendChild(twoBtn);

let threeBtn = document.createElement('button');
    threeBtn.classList.add('btn', 'numBtn');
    threeBtn.setAttribute('id', 'threeBtn');
    threeBtn.textContent = (3);
    threeBtn.addEventListener('click', () => {
        if(opBtnClicked == false && a.length <= 14) {
            a += 3;
            displayPara.textContent = a;
        } else if (opBtnClicked == true && b.length <= 14) {
            b += 3;
            displayPara.textContent = b;
        }
    });
    btnDiv.appendChild(threeBtn);

let addBtn = document.createElement('button');
    addBtn.classList.add('btn', 'opBtn');
    addBtn.setAttribute('id', 'addBtn');
    addBtn.textContent = ('+');
    addBtn.addEventListener('click', () => {
        chooseOperator('+')
    });
    btnDiv.appendChild(addBtn);

let zeroBtn = document.createElement('button');
    zeroBtn.classList.add('btn', 'numBtn');
    zeroBtn.setAttribute('id', 'zeroBtn');
    zeroBtn.textContent = (0);
    zeroBtn.addEventListener('click', () => {
        if(opBtnClicked == false && a.length <= 14) {
            a += 0;
            displayPara.textContent = a;
        } else if (opBtnClicked == true && b.length <= 14) {
            b += 0;
            displayPara.textContent = b;
        }
    });
    btnDiv.appendChild(zeroBtn);

let dotBtn = document.createElement('button');
    dotBtn.classList.add('btn', 'numBtn');
    dotBtn.setAttribute('id', 'dotBtn');
    dotBtn.textContent = ('.');
    dotBtn.addEventListener('click', () => {
        if(opBtnClicked == false) {
            if(a.includes('.') != true) {
                a += '.';
                displayPara.textContent = a;
            }
        } else if (opBtnClicked == true) {
            if (b.includes('.') != true) {
                b += '.';
                displayPara.textContent = b;
            }
        }
    });
    btnDiv.appendChild(dotBtn);

let equalBtn = document.createElement('button');
    equalBtn.classList.add('btn', 'opBtn');
    equalBtn.setAttribute('id', 'equalBtn');
    equalBtn.textContent = ('=');
    equalBtn.addEventListener('click', () => {
        if(b == 0 && operator == '/') {
            displayPara.textContent = ('hahaha!')
            a = '';
            b = '';
            sum = '';
            opBtnClicked = false;
        }else if (b != '')
        operate()
    });
    btnDiv.appendChild(equalBtn);

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}
    
function subtract(a, b) {
    return a - b;
}
    
function multiply(a, b) {
    return a * b;
}
    
function divide(a, b) {
    return a / b;
}