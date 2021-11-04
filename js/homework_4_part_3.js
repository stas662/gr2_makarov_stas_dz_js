let arr = prompt('Введите слово:');
let array = arr.split('');
console.log(array.join(''));

function vice_versa (input_array) {
	let i = input_array.length;
	let j = 0;
	let outgoing_array = new Array();

	do {
		i--;
		outgoing_array[j] = input_array[i];
		j++;
	} while (j !== (input_array.length));
	return outgoing_array;
}

let result_array = vice_versa(array);
let result = result_array.join('');
console.log(result);