let n = prompt('Сколько км проехала машина ',0);
let d = prompt('Укажите диаметр колеса ',0);

n = Number(n);
d = Number(d);

const PI = 3.14;
const INCH = 39370.1;

d = d / INCH; 

if (d > n) {
	alert('Диаметр колеса больше чем пройденно км');
} else if ( (d < 0 || !Number(d)) || (n < 0 || !Number(n)) ) {
	alert('Введенное значение неверно!');
} else {
	let c = d * PI;
	let numberOfRevolutions = n / c;
	
	let x = Math.round(numberOfRevolutions);

	//Функция для расчёта 1, 2, 3, 4
	function funcTen (x, z) {
		return (x - z) % 10 == 0;
	}

	//Функция для расчёта 11, 12, 13, 14
	function funcHundred (x, y) {
		return (x - y) % 100 == 0;
	}

	//Одно колесо
	if (funcTen (x, 1) && !funcHundred (x, 11)) {
		alert('Одно колесо в машине выполнило ' + Math.round(numberOfRevolutions) + ' оборот');
	} else if ((funcTen (x, 2) && !funcHundred (x, 12)) || (funcTen (x, 3) && !funcHundred (x, 13)) || (funcTen (x, 4) && !funcHundred (x, 14))) {
		alert('Одно колесо в машине выполнило ' + Math.round(numberOfRevolutions) + ' оборота');
	} else {
		alert('Одно колесо в машине выполнило ' + Math.round(numberOfRevolutions) + ' оборотов');
	}

	//Четыре колеса
	if (funcTen (x * 4, 1) && !funcHundred (x * 4, 11)) {
		alert('Все колеса в машине в сумме выполнили ' + Math.round(numberOfRevolutions) * 4 + ' оборот');
	} else if ((funcTen (x * 4, 2) && !funcHundred (x * 4, 12)) || (funcTen (x * 4, 3) && !funcHundred (x * 4, 13)) || (funcTen (x * 4, 4) && !funcHundred (x * 4, 14))) {
		alert('Все колеса в машине в сумме выполнили ' + Math.round(numberOfRevolutions) * 4 + ' оборота');
	} else {
		alert('Все колеса в машине в сумме выполнили ' + Math.round(numberOfRevolutions) * 4 + ' оборотов');
	}
}

	