let arr = prompt('Игра города. Введите город:');
let array = arr.split('');

let last_letter = array[array.length-1].toUpperCase();

function next_word(letter) {
	let arr2 = prompt('Введите город:');
	let array2 = arr2.split('');

	let first_letter = array2[0].toUpperCase();

	if (letter == first_letter) {
		letter = array2[array2.length-1].toUpperCase();
		return letter;
	} else if (letter == 'Ь') {
		letter = array2[array2.length-2].toUpperCase();
		return letter;
	} else {
		return 0;
	}
}

let result = 0;
while (true) {
	last_letter = next_word(last_letter); 
	console.log(last_letter);
	if (last_letter == 0) break;
	result++;
}

console.log(`Игра окончена. Ваши очки: ${result}`);
