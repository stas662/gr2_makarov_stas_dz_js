function get_order(string) {
	if (typeof(string) !== 'string') {
		return null;
	}

	let first_index = 0;
	let last_index = 0;
	let array = [];
	let j = 0;
	let char = ' ';

	//Заполняем массив, после каждого найденного пробела
	for (let i = 0; i < string.length; i++) {
		//Так как пробелов меньше чем слов, то выполняем ещё один вход в наше условие 
		if ((string[i] === char) || ((i + 1) === string.length)) {
			//Исправление ошибки, при которой последний символ строки не считывался
			if ((i + 1) === string.length) {
				i += 1;
			}
			
			last_index = i;
			array[j] = string.slice(first_index, last_index);
			first_index = i + 1;

			//Перебор массива при каждом запуске нашего условия
			j++; 
		}
	}

	string = array.sort().join(' ');	
	return string;
}

let result =  get_order('ноты акустика гитара');
console.log(result);