let array = [];

function Calculator(calculatorName) {
	
	//Получение даты и времени для каждого действия
	function getDate() {
		let date = new Date();
		let dateString = `( ${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ):`;

		return dateString;
	}

	//Проверка типа для двух элементов
	function checkType(element1, element2) {
		if (typeof(element1) !== 'number' && typeof(element2) !== 'number') {
			return true
		}

		return false;
	}

	//Проверка типа для массива
	function checkTypeArray(array) {
		for (let i = 0; i < array.length; i++) {

			if (typeof(array[i]) !== 'number') {
				return true;
			}
		}

		return false;
	}
	
	this.name = calculatorName;
	
	//Сумма
	this.sum = function(...arrg) {
		if (checkTypeArray(arrg)) {
			return null;
		}

		let resultSum = 0;
		for (let i = 0; i < arrg.length; i++) {
			resultSum = arrg[i] + resultSum;
		}

		let string = `${calculatorName} ${getDate()} Сумма = ${resultSum}, (${arrg})`
		array.push(string);

		return resultSum;
	}

	//Вычитание
	this.subtraction = function(subtrahend, subtractor) {

		if (checkType(subtrahend, subtractor)) {
			return null;
		}

		let string = `${calculatorName} ${getDate()} Вычитание = ${subtrahend - subtractor}, (${subtrahend},${subtractor})`
		array.push(string);

		return subtrahend - subtractor;
	}

	//Умножение
	this.multiplication = function(...arrg) {
		if (checkTypeArray(arrg)) {
			return null;
		}

		let resultMultiplication = 1;
		for (let i = 0; i < arrg.length; i++) {
			resultMultiplication = arrg[i] * resultMultiplication;
		}

		let string = `${calculatorName} ${getDate()} Умножение = ${resultMultiplication}, (${arrg})`
		array.push(string);

		return resultMultiplication;
	}

	//Деление
	this.division = function(dividend, divider) {
		if (checkType(dividend, divider)) {
			return null;
		}

		let string = `${calculatorName} ${getDate()} Деление = ${dividend / divider}, (${dividend},${divider})`
		array.push(string);

		return dividend / divider;
	}

	//История действий
	actionHistory = function() {
		for (let i = 0; i < array.length; i++) {
			let string = array[i];
			console.log(string);
		}

		if (array.length < 1) {
			return false;
		}

		return true;
	}

	//Очистка
	clearHistory = function() {
		array = [];
		return true;
	}

	return true;
}

let result = new Calculator('Мой калькулятор');
let result2 = new Calculator('Ещё калькулятор');

console.log(result.sum(5,5,10,21,0));
console.log(result.subtraction(5,5));
console.log(result.division(5,5));
console.log(result.multiplication(5,5,6,5));
console.log(actionHistory());
console.log(clearHistory());
