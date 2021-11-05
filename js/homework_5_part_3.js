function get_string_length(str) {
	if (typeof(str) !== 'string') {
		return null;
	}
	let result = 0;
	let array = str.split('');
	let char = ' ';

	for (let i = 0; i < array.length; i++) {
		if (array[i] === char) {
			array.splice(i, 1);
		}
		result++;
	}
	return result;
}

//31 символ с пробелом и 25 без
let result = get_string_length('Не в золоте сокровище, – в уме!');
console.log(result);
