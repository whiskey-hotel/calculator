function add(a, b) {
	return parseFloat((a + b).toPrecision(9));
}

function subtract(a, b) {
	return parseFloat((a - b).toPrecision(9));
}

function multiply(a, b) {
	return parseFloat((a * b).toPrecision(9));
}

function divide(a, b) {
	return parseFloat((a / b).toPrecision(9));
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

	//limits input to 8 digits
	// and removes the leading zero
	if (result.textContent.length > 8) {
		return;
	} else if (!result.textContent.includes('.')) {
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
	if (result.textContent.length > 8) {
		return;
	}
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
	if (result.textContent.length > 8) {
		return;
	}
	let a = parseFloat(result.textContent);
	a /= 100;
	result.textContent = a;
}

function clearBtn() {
	if (clearCount == 0) {
		clearCount += 1;
		result.textContent = '0';
	} else if (clearCount == 1) {
		result.textContent = '0';
		clear.textContent = 'AC';
		operator = '';
		num1 = '';
		num2 = '';
		count = 0;
		clearCount = 0;
		for (let op of Array.from(DOMoperator)) {
			op.style.backgroundColor = '#ff9500';
			op.style.color = '#FFF';
		}
	}
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
const specialOp = document.getElementsByClassName('special-op');
let num1 = '';
let num2 = '';
let operator = '';
let count = 0;
let clearCount = 0;

for (let n of Array.from(num)) {
	['keydown', 'mousedown'].forEach(function (e) {
		document.addEventListener(e, function (e) {
			if (e.key == n.dataset.value || e.target.dataset.value == n.dataset.value) {
				n.style.backgroundColor = '#d4d4d2';
				if (num1) {
					num2Prep();
				}
				input(n.dataset.value, result.textContent);
			}
		});
	});
}

['keydown', 'mousedown'].forEach(function (e) {
	document.addEventListener(e, function (e) {
		if (e.key == deci.dataset.value || e.target.dataset.value == deci.dataset.value) {
			deci.style.backgroundColor = '#d4d4d2';
			deciBtn();
		}
	});
});

for (let op of Array.from(DOMoperator)) {
	['keydown', 'mousedown'].forEach(function (e) {
		document.addEventListener(e, function (e) {
			if (e.key == op.dataset.value || e.target.dataset.value == op.dataset.value) {
				op.style.backgroundColor = '#FFF';
				op.style.color = '#ff9500';
				operationSelector(op.dataset.value);
			}
		});
	});
}

['keydown', 'mousedown'].forEach(function (e) {
	document.addEventListener(e, function (e) {
		if (e.key == 'Enter' || e.key == '=' || e.target.dataset.value == '=') {
			for (let op of Array.from(DOMoperator)) {
				op.style.backgroundColor = '#ff9500';
				op.style.color = '#FFF';
			}
			equal.style.backgroundColor = '#FFF';
			equal.style.color = '#ff9500';
			equalBtn();
		}
	});
});

plusMinus.addEventListener('mousedown', function () {
	plusMinus.style.backgroundColor = '#FFF';
	let a = parseFloat(result.textContent);
	a *= -1;
	result.textContent = a;
});

['keydown', 'mousedown'].forEach(function (e) {
	document.addEventListener(e, function (e) {
		if (e.key == '%' || e.target.dataset.value == '%') {
			percent.style.backgroundColor = '#FFF';
			percentBtn();
		}
	});
});

['keydown', 'mousedown'].forEach(function (e) {
	document.addEventListener(e, function (e) {
		if (e.key == 'c' || e.target.dataset.value == 'c') {
			clear.style.backgroundColor = '#FFF';
			clearBtn();
		}
	});
});

['keyup', 'mouseup'].forEach(function (e) {
	document.addEventListener(e, function (e) {
		for (let s of Array.from(specialOp)) {
			s.style.backgroundColor = '#d4d4d2';
		}

		for (let n of Array.from(num)) {
			n.style.backgroundColor = '#505050';
		}

		deci.style.backgroundColor = '#505050';

		equal.style.backgroundColor = '#ff9500';
		equal.style.color = '#FFF';
	});
});
