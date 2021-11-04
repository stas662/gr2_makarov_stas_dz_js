let arr = prompt('Игра города. Введите город:');
let array = arr.split('');
let array_of_cities = [arr.toUpperCase()];

let last_letter = array[array.length-1].toUpperCase();

function next_word(letter) {
	let arr2 = prompt('Введите город:');
	let array2 = arr2.split('');
	let first_letter = array2[0].toUpperCase();

	//Функция для проверки исключений
	function check_letter(char) {
		return letter == char;
	}
	
	//Проверка первой и последней буквы и функция проверки
	if ((letter == first_letter) || check_letter('Ь') || check_letter('Ы')) {
		//Проверка на повторение
		for (let i = 0; i < array_of_cities.length; i++) {
			if (arr2.toUpperCase() == array_of_cities[i]) {
				alert('Такой город уже был');
				return letter;
			}
		}
		//Заносим новый город в массив
		array_of_cities.push(arr2.toUpperCase());
		
		letter = array2[array2.length-1].toUpperCase();
		return letter;
	} else {
		return 0;
	}
}

let result = 0;

//Цикл вызова функции с вводом города
while (true) {
	last_letter = next_word(last_letter); 
	if (last_letter == 0) break;
	result++;
}

alert(`Игра окончена. Ваши очки: ${result}`);
