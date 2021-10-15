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
	switch (operator) {
		case '+':
			add(a, b);
			break;
		case '-':
			subtract(a, b);
			break;
		case '*':
			multiply(a, b);
			break;
		case '/':
			divide(a, b);
			break;
		case '=':
			return;
	}
	return;
}

function input(a,initialNum) {
	let num = initialNum;
	let value = a.dataset.value;
	let newNum = num + value;

	if (!result.textContent.includes('.')) {
		result.textContent = parseFloat(newNum);
	} else {
		result.textContent = newNum;
	}
	clear.textContent = 'C';
}

const clear = document.querySelector('#clear');
const result = document.querySelector('#span-result');
const deci = document.querySelector('#deci');
const num = document.getElementsByClassName('num');
const DOMoperator = document.getElementsByClassName('operator');
let num1 = '';
let num2 = '';
let operator = '';

for (let n of Array.from(num)) {
	n.addEventListener('click', function () {
		input(n,result.textContent);
	});
}

deci.addEventListener('click', function () {
	if (!result.textContent.includes('.')) {
		result.textContent += deci.dataset.value;
	}
});

for (let op of Array.from(DOMoperator)) {
	op.addEventListener('click', function () {
		operator = op.dataset.value;
        num1 = result.textContent;
	});
}



clear.addEventListener('click', function () {
	result.textContent = '0';
	clear.textContent = 'AC';
	operator = '';
	num1 = '';
	num2 = '';
});
