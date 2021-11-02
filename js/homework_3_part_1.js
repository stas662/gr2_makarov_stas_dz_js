let numberOne = prompt('Введите первое число ',0);
numberOne = Number(numberOne);

let numberTwo = prompt('Введите второе число ',0);
numberTwo = Number(numberTwo);

let resultNumber = Number(0);
let resultSum = Number(0);

if (isNaN(numberOne) || isNaN(numberTwo)) {
	alert('Введенное значение неверно!');
} else {
	if (numberOne > numberTwo) {
		for (; numberTwo <= numberOne; numberTwo++) {
			if (numberTwo % 6 === 0) {
				resultNumber += 1;
				resultSum += numberTwo;
			}
		}
	} else {
		for (; numberOne <= numberTwo; numberOne++) {
			if (numberOne % 6 === 0) {
				resultNumber += 1;
				resultSum += numberOne;
			}
		}
	}
alert(`Количество чисел кратных 6 = ${resultNumber} сумма этих чисел составляет = ${resultSum}`);
}
