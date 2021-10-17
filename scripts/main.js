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
	return a / b;
}

function operate(operator, a, b) {
	if (!operator) {
		return b;
	}
	switch (operator) {
		case '+':
			return add(a, b);
		case '-':
			return subtract(a, b);
		case '*':
			return multiply(a, b);
		case '/':
			return divide(a, b);
		case '=':
			return;
	}
	return 0;
}

function input(val, initialNum) {
	let num = initialNum;
	let value = val;
	let newNum = num + value;

	//removes the leading zero
	if (!result.textContent.includes('.')) {
		result.textContent = parseFloat(newNum);
	} else {
		result.textContent = newNum;
	}
	clear.textContent = 'C';
}

function operationSelector(opVal) {
	if (operator) {
		let oldOperator = operator;
		num2 = result.textContent;
		result.textContent = operate(oldOperator, parseFloat(num1), parseFloat(num2));
	}
	operator = opVal;
	num1 = result.textContent;
	count = 0;
}

function deciBtn() {
	if (!result.textContent.includes('.')) {
		result.textContent += deci.dataset.value;
	}
}

function equalBtn() {
	num2 = result.textContent;
	result.textContent = operate(operator, parseFloat(num1), parseFloat(num2));
	count = 0;
	operator = '';
}

function percentBtn() {
	let a = parseFloat(result.textContent);
	a /= 100;
	result.textContent = a;
}

function num2Prep() {
	// this function resets the user display after selecting an operator
	// (so you can input a new number) and after selecting the equal sign
	// (so you can input a new number to begin a new expression)
	if (count == 0) {
		count += 1;
		result.textContent = '';
		return;
	}
}

const clear = document.querySelector('#clear');
const plusMinus = document.querySelector('#plusMinus');
const percent = document.querySelector('#percent');
const result = document.querySelector('#span-result');
const deci = document.querySelector('#deci');
const equal = document.querySelector('#equal');
const num = document.getElementsByClassName('num');
const DOMoperator = document.getElementsByClassName('operator');
let num1 = '';
let num2 = '';
let operator = '';
let count = 0;

for (let n of Array.from(num)) {
	//on click
	n.addEventListener('click', function () {
		if (num1) {
			num2Prep();
		}
		input(n.dataset.value, result.textContent);
	});
	//on keyboard event
	document.addEventListener('keydown', function (e) {
		if (e.key == n.dataset.value) {
			if (num1) {
				num2Prep();
			}
			input(e.key, result.textContent);
		}
	});
}

deci.addEventListener('click', function () {
	deciBtn();
});

for (let op of Array.from(DOMoperator)) {
	//on click
	op.addEventListener('click', function () {
		operationSelector(op.dataset.value);
	});
	//on keyboard event
	document.addEventListener('keydown', function (e) {
		if (e.key == op.dataset.value) {
			operationSelector(e.key);
		}
	});
}

equal.addEventListener('click', function () {
	equalBtn();
});

plusMinus.addEventListener('click', function () {
	let a = parseFloat(result.textContent);
	a *= -1;
	result.textContent = a;
});

percent.addEventListener('click', function () {
	percentBtn();
});

clear.addEventListener('click', function () {
	result.textContent = '0';
	clear.textContent = 'AC';
	operator = '';
	num1 = '';
	num2 = '';
	count = 0;
});

document.addEventListener('keydown', function (e) {
	switch (e.key) {
		case '%':
			percentBtn();
			break;
		case deci.dataset.value:
			deciBtn();
			break;
		case 'Enter':
			equalBtn();
			break;
	}
});