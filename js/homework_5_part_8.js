function get_short_fio(full_fio) {
	//Проверка типа
	if (typeof(full_fio) !== 'string') {
		return null;
	}
	
	//Перевод в нижний регистр для проверки букв
	full_fio = full_fio.toLowerCase();

	//Проверка букв
	let check = full_fio.replace(/[a-zа-яё\s]/gi, '');
	if ((check !== full_fio.replace(/[a-zа-яё\s]/gi)) && (check !== '')) {
		return null;
	}

	let char = ' ';
	let number_of_char = 0;

	//Проверка на количество слов в строке, через подсчет пробела 
	for (let i = 0; i < full_fio.length; i++) {
		if (full_fio[i] === char) {
			number_of_char++;

			if (number_of_char > 2) {
				return null;
			}
		}
	}

	//Функция которая возвращает строку str с заглавным первым символом
	function up_first(str) {
		if (typeof(str) !== 'string') {
			return null;
		}

		let array = str.split('');
		array[0] = array[0].toUpperCase();

		str = array.join('');
		return str;
	}

	let first_index = 0;
	let last_index = 0;
	let array = [];
	let j = 0;

	//Заполняем массив, после каждого найденного пробела
	for (let i = 0; i < full_fio.length; i++) {
		//Так как пробелов меньше чем слов, то выполняем ещё один вход в наше условие 
		if ((full_fio[i] === char) || ((i + 1) === full_fio.length)) {
			//Исправление ошибки, при которой последний символ строки не считывался
			if ((i + 1) === full_fio.length) {
				i += 1;
			}
			if (first_index === 0) {
				//Если найденный элемент является первым
				last_index = i;
				let result = full_fio.slice(first_index, last_index);
				array[j] = up_first(result);
				first_index = i + 1;

			} else {
				//Если найденный элемент уже не первый
				let result = full_fio.slice(first_index, first_index + 1) + '.';
				array[j] = up_first(result);
				first_index = i + 1;
			}
			//Перебор массива при каждом запуске нашего условия
			j++;
		} 
	}
	full_fio = array.join(' ')
	return full_fio;
}
let result = get_short_fio('иВанОв cергЕй петрович');
console.log(result);


