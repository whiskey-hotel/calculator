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
        case "=":
            return
	}
	return;
}

const clear = document.querySelector('#clear');
const result = document.querySelector('#span-result');
const num = document.getElementsByClassName('num');
const DOMoperator = document.getElementsByClassName('operator');
let num1;
let num2;
let operator = null;

for (let n of Array.from(num)) {
	n.addEventListener('click', function () {
		let value = n.dataset.value;
		let text = document.createTextNode(value);
		result.appendChild(text);
		a = result.textContent;
	});
}

for (let op of Array.from(DOMoperator)) {
	op.addEventListener('click', function () {
		operator = op.dataset.value;
	});
}

clear.addEventListener('click', function () {
	result.textContent = '0';
	operator = null;
});

if (!!operator) {
}
