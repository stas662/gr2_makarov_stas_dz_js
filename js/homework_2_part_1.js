let x = prompt('Введите число ',0);
x = Number(x);

//Функция для расчёта 1, 2, 3, 4
function funcTen (z) {
	return ((Math.abs(x) - z) % 10 == 0);
}

//Функция для расчёта 11, 12, 13, 14
function funcHundred (y) {
	return ((Math.abs(x) - y) % 100 == 0);
}

if (!Number.isInteger(x)) {
	alert('Введенное значение нельзя использовать для преобразования!');
} else {
	if (funcTen (1) && !funcHundred (11)) {
		alert(x + ' день');
	} else if ((funcTen (2) && !funcHundred (12)) || (funcTen (3) && !funcHundred (13)) || (funcTen (4) && !funcHundred (14))) {
		alert(x + ' дня');
	} else {
		alert(x + ' дней');
	}
}
