let numberOne = prompt('Введите первое число ',0);
numberOne = Number(numberOne);

let numberTwo = prompt('Введите второе число ',0);
numberTwo = Number(numberTwo);

let resultNumber = Number(0);

if (isNaN(numberOne) || isNaN(numberTwo)) {
	alert('Введенное значение неверно!');
} else {
	if (numberOne > numberTwo) {
		for (; numberTwo <= numberOne; numberTwo++) {
			if (numberTwo % 6 === 0) {
				resultNumber += 1;
			}
		}
	} else {
		for (; numberOne <= numberTwo; numberOne++) {
			if (numberOne % 6 === 0) {
				resultNumber += 1;
			}
		}
	}
alert(`Количество чисел кратных 6 = ${resultNumber} сумма этих чисел составляет = ${resultNumber * 6}`);
}

