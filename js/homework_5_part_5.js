function search_string(search, string) {
	//Функция для проверки типа
	function check_str(check) {
		return typeof(check) !== 'string';
	}

	if (check_str(search) || check_str(string)) {
		return null;
	}

	search = search.toLowerCase();
	string = string.toLowerCase();

	let result = false;

	for (let i = 0; i < string.length; i++) {
		if (string.indexOf(search) > -1) result = true;
	}

	return result;
}

let result = search_string('цырК', 'Куда куда уехал цЫрк');
console.log(result);
