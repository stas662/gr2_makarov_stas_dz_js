let arr = prompt('Введите массив чисел через пробел:');
let array = arr.split(' ');

function get_min(arr) {
	let result = Number(array[0]);
	for (let i = 0; i < array.length; i++) {
		if (Number(array[i]) < result) result = Number(array[i]);
		console.log(result);
	}
	return result;
}

let result = get_min(array);
console.log(`Ответ: ${result}`);
