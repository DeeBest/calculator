let body = document.querySelector('#body');

let container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);

let screen = document.createElement('div');
    screen.classList.add('screen');
    container.appendChild(screen);

let displayPara = document.createElement('p');
    displayPara.classList.add('para');
    displayPara.textContent = (0);
    screen.appendChild(displayPara);

let btnDiv = document.createElement('div');
    btnDiv.classList.add('btnDiv');
    container.appendChild(btnDiv);

let clearBtn = document.createElement('button');
    clearBtn.classList.add('btn');
    clearBtn.setAttribute('id', 'clearbtn');
    clearBtn.textContent = ('clear');
    btnDiv.appendChild(clearBtn);

let positiveBtn = document.createElement('button');
    positiveBtn.classList.add('btn');
    positiveBtn.setAttribute('id', 'positiveBtn');
    positiveBtn.textContent = ('+/-');
    btnDiv.appendChild(positiveBtn);

let percentBtn = document.createElement('button');
    percentBtn.classList.add('btn');
    percentBtn.setAttribute('id', 'percentBtn');
    percentBtn.textContent = ('%');
    btnDiv.appendChild(percentBtn);

let divideBtn = document.createElement('button');
    divideBtn.classList.add('btn');
    divideBtn.setAttribute('id', 'divideBtn');
    divideBtn.textContent = ('÷');
    btnDiv.appendChild(divideBtn);

let sevenBtn = document.createElement('button');
    sevenBtn.classList.add('btn');
    sevenBtn.setAttribute('id', 'sevenBtn');
    sevenBtn.textContent = (7);
    btnDiv.appendChild(sevenBtn);

let eightBtn = document.createElement('button');
    eightBtn.classList.add('btn');
    eightBtn.setAttribute('id', 'eightBtn');
    eightBtn.textContent = (8);
    btnDiv.appendChild(eightBtn);

let nineBtn = document.createElement('button');
    nineBtn.classList.add('btn');
    nineBtn.setAttribute('id', 'nineBtn');
    nineBtn.textContent = (9);
    btnDiv.appendChild(nineBtn);

let multiplyBtn = document.createElement('button');
    multiplyBtn.classList.add('btn');
    multiplyBtn.setAttribute('id', 'multiplyBtn');
    multiplyBtn.textContent = ('*');
    btnDiv.appendChild(multiplyBtn);

let fourBtn = document.createElement('button');
    fourBtn.classList.add('btn');
    fourBtn.setAttribute('id', 'fourBtn');
    fourBtn.textContent = (4);
    btnDiv.appendChild(fourBtn);

let fiveBtn = document.createElement('button');
    fiveBtn.classList.add('btn');
    fiveBtn.setAttribute('id', 'fiveBtn');
    fiveBtn.textContent = (5);
    btnDiv.appendChild(fiveBtn);

let sixBtn = document.createElement('button');
    sixBtn.classList.add('btn');
    sixBtn.setAttribute('id', 'sixBtn');
    sixBtn.textContent = (6);
    btnDiv.appendChild(sixBtn);

    let subtractionBtn = document.createElement('button');
    subtractionBtn.classList.add('btn');
    subtractionBtn.setAttribute('id', 'subtractionBtn');
    subtractionBtn.textContent = ('-');
    btnDiv.appendChild(subtractionBtn);

let oneBtn = document.createElement('button');
    oneBtn.classList.add('btn');
    oneBtn.setAttribute('id', 'oneBtn');
    oneBtn.textContent = (1);
    btnDiv.appendChild(oneBtn);

let twoBtn = document.createElement('button');
    twoBtn.classList.add('btn');
    twoBtn.setAttribute('id', 'twoBtn');
    twoBtn.textContent = (2);
    btnDiv.appendChild(twoBtn);

let threeBtn = document.createElement('button');
    threeBtn.classList.add('btn');
    threeBtn.setAttribute('id', 'threeBtn');
    threeBtn.textContent = (3);
    btnDiv.appendChild(threeBtn);

let addBtn = document.createElement('button');
    addBtn.classList.add('btn');
    addBtn.setAttribute('id', 'addBtn');
    addBtn.textContent = ('+');
    btnDiv.appendChild(addBtn);

let zeroBtn = document.createElement('button');
    zeroBtn.classList.add('btn');
    zeroBtn.setAttribute('id', 'zeroBtn');
    zeroBtn.textContent = (0);
    btnDiv.appendChild(zeroBtn);

let dotBtn = document.createElement('button');
    dotBtn.classList.add('btn');
    dotBtn.setAttribute('id', 'dotBtn');
    dotBtn.textContent = ('.');
    btnDiv.appendChild(dotBtn);

let equalBtn = document.createElement('button');
    equalBtn.classList.add('btn');
    equalBtn.setAttribute('id', 'equalBtn');
    equalBtn.textContent = ('=');
    btnDiv.appendChild(equalBtn);
