function up_first(str) {
	if (typeof(str) !== 'string') {
		return null;
	}

	let array = str.split('');

	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].toLowerCase();
		if (i === 0) array[i] = array[i].toUpperCase();
	}
	str = array.join('');
	return str;
}

let result = up_first('иВАНОВ');
console.log(result);
