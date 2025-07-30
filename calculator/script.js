let display = document.getElementById('display');
let memory = 0;

function appendNumber(num) {
  if (display.innerText === '0') {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendOperator(op) {
  display.innerText += ' ' + op + ' ';
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  let txt = display.innerText.trim();
  if (txt.length <= 1) {
    display.innerText = '0';
  } else {
    display.innerText = txt.slice(0, -1);
  }
}

function calculate() {
  try {
    let result = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
    display.innerText = result;
  } catch (e) {
    display.innerText = 'Error';
  }
}

// Memory functions
function memoryClear() {
  memory = 0;
}

function memoryAdd() {
  memory += parseFloat(display.innerText) || 0;
}

function memorySubtract() {
  memory -= parseFloat(display.innerText) || 0;
}

function memoryRecall() {
  display.innerText = memory.toString();
}
