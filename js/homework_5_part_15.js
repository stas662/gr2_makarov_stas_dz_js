//Сумма
function sum(obj) {
	let result = 0;

	for (let element of Object.values(obj)) {
		result += element;
	}

	return result;
}

//Поиск минимума
function minItem(obj) {
	let min = Infinity;

	for (var i in obj) {
		if (obj[i] < min) {
			min = obj[i];
		}
	}
	
	return (min);
}

//Поиск максимума
function maxItem(obj) {
	let max = -Infinity;

	for (var i in obj) {
		if (obj[i] > max) {
			max = obj[i];
		}
	}

	return (max);
}

var points = {
	"Вася": 200,
	"Петя": 300,
	"Даша": 250,
	"Андрей": 150,
	"Сергей": 450,
}

let resultSum = sum(points);
console.log(resultSum);

let resultMin = minItem(points);
let resultMax = maxItem(points);
console.log(`Минимальное значение = ${resultMin} Максимальное значение = ${resultMax}`);